import "server-only";
import { and, desc, eq, inArray, isNull, sql } from "drizzle-orm";
import { getDb, getEnv, schema } from "../db";
import { audit } from "../admin";
import { getSettings, type Settings } from "../settings";
import { planLabel, type CheckoutOption, type VariantKey } from "../plans";
import { alreadyHas, approveActivation, findPendingByPayer, grantOf, mailBuyer, optionOfKey, priceCents, productName, type Activation } from "../activation";
import { getConnection, isConnected, setConnectionStatus } from "./oauth";
import { contraToolCaller, type ToolCaller } from "./mcp";
import { claimToken, verifyClaimToken } from "./claim-token";

const SITE = "https://ingotui.com";

/**
 * Contra sales sync. Reads every Contra payment link set in settings.externalCheckout through Contra's MCP
 * server (list_payment_link_transactions), stores PAID sales in contra_sale, then matches unmatched sales:
 *
 * "Proven" account (provenFor): its email is verified by the auth provider, or it existed before the sale's
 * day. Sign-up is email+password without verification, so a newer unverified account never gets a plan by
 * email alone: it must open the claim link mailed to the payer inbox (/claim, lib/contra/claim-token.ts).
 *
 *  a) payer email shared → the oldest pending activation paid with that email for the same product family,
 *     if its account is proven → approve it (actor "contra-auto", buyer gets the "is active" email).
 *     A hand-approved activation with that payer email that no sale is linked to yet → link it, nothing else.
 *  b) payer email shared → the account with that email: already has the plan → link, no email; proven →
 *     create an activation for it and approve it; otherwise (or no account) → claim link emailed once.
 *  c) payer email hidden → the one pending activation for the same family whose "Name on Contra" equals the
 *     receipt name (case-insensitive), sent on or after the sale's day.
 *     Otherwise it stays unmatched for staff.
 *
 * A sale whose amount differs from the price of its option stays unmatched (note says why). Each sale links
 * to one activation at most (unique index), and approveActivation is idempotent, so a repeated sync can never
 * grant twice or email twice. Errors are stored on the connection row (lastError), never logged with tokens
 * or buyer emails.
 */

export const ACTOR = "contra-auto";
export const PRICE_MISMATCH = "Price mismatch";
const TOOL = "list_payment_link_transactions";
const PAGE_SIZE = 50;
const MAX_PAGES = 40;
const LOCK_KEY = "contra:sync:lock";
const LIFETIME_KEYS: VariantKey[] = ["lifetimeDeal", "lifetimeAfter"];

export type Sale = typeof schema.contraSale.$inferSelect;
export type ContraTx = {
  id: string;
  amount?: string | null;
  date?: string | null;
  customer?: { emailAddress?: string | null; firstName?: string | null; lastName?: string | null; userProfileId?: string | number | null } | null;
  invoice?: { id?: string | null; status?: string | null; totalAmount?: string | null } | null;
};
export type SyncResult = { ok: boolean; links: number; fetched: number; added: number; matched: number; error?: string };
export type MatchOutcome = { status: "matched" | "unmatched" | "skipped"; how?: "email" | "name"; activationId?: string | null; approved?: boolean; note?: string };

/* ------------------------------------------------------------------ parsing */

/** "https://contra.com/payment-link/<slug>" (query, hash and trailing slash ignored) → slug. */
export function slugOf(url: string): string | null {
  try {
    const u = new URL(url.trim());
    if (!/(^|\.)contra\.com$/i.test(u.hostname)) return null;
    const m = u.pathname.match(/^\/payment-link\/([^/]+)\/?$/i);
    return m ? decodeURIComponent(m[1]) : null;
  } catch {
    return null;
  }
}

/** "USD:49.00" → { currency: "USD", cents: 4900 }. Also accepts "49.00", "$49", { amount, currency }. */
export function parseAmount(v: unknown): { currency: string; cents: number } | null {
  if (v && typeof v === "object") {
    const o = v as { amount?: unknown; value?: unknown; currency?: unknown };
    return parseAmount(`${String(o.currency ?? "USD")}:${String(o.amount ?? o.value ?? "")}`);
  }
  if (typeof v === "number") return Number.isFinite(v) ? { currency: "USD", cents: Math.round(v * 100) } : null;
  if (typeof v !== "string") return null;
  const m = v.trim().match(/^(?:([A-Za-z]{3})\s*[: ]\s*)?\$?\s*(-?[\d,]+(?:\.\d+)?)$/);
  if (!m) return null;
  const n = Number(m[2].replace(/,/g, ""));
  return Number.isFinite(n) ? { currency: (m[1] ?? "USD").toUpperCase(), cents: Math.round(n * 100) } : null;
}

/** The transactions array in a tool result, whatever it is wrapped in. */
export function extractTransactions(data: unknown, depth = 0): ContraTx[] {
  if (depth > 4 || !data) return [];
  if (Array.isArray(data)) {
    if (data.every((x) => x && typeof x === "object" && "id" in x)) return data as ContraTx[];
    return [];
  }
  if (typeof data === "object") {
    const o = data as Record<string, unknown>;
    for (const k of ["transactions", "items", "nodes", "data", "results", "edges"]) {
      const got = extractTransactions(o[k], depth + 1);
      if (got.length) return got.map((t) => ((t as { node?: ContraTx }).node ?? t) as ContraTx);
    }
    for (const v of Object.values(o)) {
      const got = extractTransactions(v, depth + 1);
      if (got.length) return got;
    }
  }
  return [];
}

export const normName = (s: string | null | undefined) =>
  (s ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

const cleanEmail = (e: unknown) => {
  const s = typeof e === "string" ? e.trim().toLowerCase() : "";
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) ? s.slice(0, 200) : null;
};

/**
 * The buyer's email from a Contra invoice (get_invoice_status). The sales list hides the email unless the
 * buyer agreed to share it, but the invoice usually names who paid. The shape is not documented, so: walk
 * the result, collect email strings under keys that name the payer side (client, payer, customer, buyer,
 * billed, recipient, purchaser), never the seller's own addresses. Returns null unless exactly one remains.
 */
/**
 * Text of a PDF good enough to find an email. Contra's invoice PDFs draw text as 2-byte glyph codes in TJ
 * arrays (CID fonts), so each FlateDecode stream is inflated, every ToUnicode CMap is parsed, and the hex
 * strings are decoded with each map (wrong maps give garbage, never an email). Plain literals are kept too.
 */
async function pdfText(buf: Uint8Array): Promise<string> {
  const latin = (b: Uint8Array) => { let t = ""; for (let i = 0; i < b.length; i++) t += String.fromCharCode(b[i]); return t; };
  const raw = latin(buf);
  const streams: string[] = [];
  const re = /stream\r?\n/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw))) {
    const start = m.index + m[0].length;
    // Exact byte count from the stream dictionary: trailing bytes make DecompressionStream fail or stall.
    const before = raw.slice(Math.max(0, m.index - 400), m.index);
    const dict = before.slice(before.lastIndexOf("<<"));
    const len = /\/Length (\d+)(?!\s+\d+\s+R)/.exec(dict);
    if (!len || !dict.includes("FlateDecode")) {
      re.lastIndex = start;
      continue;
    }
    const n = Number(len[1]);
    try {
      const ds = new Response(buf.slice(start, start + n)).body!.pipeThrough(new DecompressionStream("deflate"));
      streams.push(latin(new Uint8Array(await new Response(ds).arrayBuffer())));
    } catch {
      // not a readable deflate stream: skip
    }
    re.lastIndex = start + n;
  }
  const maps: Map<number, string>[] = [];
  for (const st of streams) {
    if (!st.includes("beginbf")) continue;
    const map = new Map<number, string>();
    const u16 = (h: string) => { let t = ""; for (let k = 0; k + 3 < h.length; k += 4) t += String.fromCharCode(parseInt(h.slice(k, k + 4), 16)); return t; };
    for (const blk of st.match(/beginbfchar[\s\S]*?endbfchar/g) ?? [])
      for (const p of blk.matchAll(/<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>/g)) map.set(parseInt(p[1], 16), u16(p[2]));
    for (const blk of st.match(/beginbfrange[\s\S]*?endbfrange/g) ?? [])
      for (const p of blk.matchAll(/<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>/g)) {
        const a = parseInt(p[1], 16), z = parseInt(p[2], 16), base = parseInt(p[3], 16);
        for (let k = a; k <= z && k - a < 5000; k++) map.set(k, String.fromCharCode(base + k - a));
      }
    maps.push(map);
  }
  const out: string[] = [];
  for (const st of streams) {
    if (!/T[Jj]/.test(st)) continue;
    for (const lit of st.match(/\((?:\\.|[^\\)])*\)/g) ?? []) out.push(lit.slice(1, -1).replace(/\\(.)/g, "$1"));
    const arrays = st.match(/\[[^\]]*\]\s*TJ|<[0-9A-Fa-f]+>\s*Tj/g) ?? [];
    for (const map of maps) {
      const lines: string[] = [];
      for (const arr of arrays) {
        let t = "";
        for (const h of arr.match(/<([0-9A-Fa-f]+)>/g) ?? []) {
          const hex = h.slice(1, -1);
          for (let k = 0; k + 3 < hex.length; k += 4) t += map.get(parseInt(hex.slice(k, k + 4), 16)) ?? "";
        }
        lines.push(t);
      }
      out.push(lines.join("\n"));
    }
  }
  return out.join("\n");
}

/**
 * The invoice MCP result has no "Bill to", but its invoiceUrl (the invoice Contra mails and lets you download)
 * shows the buyer's name and email. Fetch it and pick the one email that is not the seller's.
 */
export async function emailFromInvoiceUrl(url: string, exclude: Set<string>): Promise<{ email: string | null; diag: string }> {
  if (!/^https:\/\/([a-z0-9-]+\.)*contra\.com\//i.test(url)) return { email: null, diag: "invoiceUrl is not on contra.com" };
  const res = await fetch(url, { redirect: "follow", headers: { accept: "application/pdf,text/html,application/json;q=0.9,*/*;q=0.8" } });
  const type = res.headers.get("content-type") ?? "";
  if (!res.ok) return { email: null, diag: `invoiceUrl answered ${res.status} (${type})` };
  const buf = new Uint8Array(await res.arrayBuffer());
  const text = type.includes("pdf") || (buf[0] === 0x25 && buf[1] === 0x50) ? await pdfText(buf) : new TextDecoder().decode(buf);
  const found = new Set<string>();
  for (const m of text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) ?? []) {
    const e = cleanEmail(m);
    if (e && !exclude.has(e) && !e.endsWith("@contra.com") && !e.endsWith("@ingotui.com")) found.add(e);
  }
  if (found.size === 1) return { email: [...found][0], diag: "" };
  return { email: null, diag: `invoiceUrl ${type || "unknown type"}, ${buf.length} bytes, ${found.size} candidate emails` };
}

/** The invoiceUrl inside a get_invoice_status result, if any. */
function invoiceUrlOf(data: unknown): string | null {
  const d = data as { invoiceUrl?: unknown; invoice?: { invoiceUrl?: unknown } } | null;
  const u = d?.invoice?.invoiceUrl ?? d?.invoiceUrl;
  return typeof u === "string" && u ? u : null;
}

/** Why the last invoice lookup found no email, per Contra invoice id (shown in the sale's note for staff). */
const invoiceMisses = new Map<string, string>();
const saleInvoice = new Map<string, string>();

/** Field paths of an invoice result (no values), for the note when no email was found. */
function shapeOf(data: unknown): string {
  const keys = new Set<string>();
  const walk = (v: unknown, path: string, depth: number) => {
    if (depth > 6 || v == null) return;
    if (typeof v === "string") {
      if ((v.startsWith("{") || v.startsWith("[")) && depth < 3) {
        try { return walk(JSON.parse(v), path, depth + 1); } catch {}
      }
      keys.add(path.replace(/\.\d+/g, "[]"));
      return;
    }
    if (Array.isArray(v)) return v.slice(0, 2).forEach((x, i) => walk(x, path + "." + i, depth + 1));
    if (typeof v === "object") for (const [k, x] of Object.entries(v as Record<string, unknown>)) walk(x, path ? path + "." + k : k, depth + 1);
    else keys.add(path);
  };
  walk(data, "", 0);
  return [...keys].slice(0, 40).join(", ").slice(0, 600);
}

export function invoicePayerEmail(data: unknown, exclude: Set<string>): string | null {
  const payerish = /(client|payer|customer|buyer|billed|bill_to|billto|recipient|purchaser|paidby|paid_by)/i;
  const preferred = new Set<string>();
  const other = new Set<string>();
  const walk = (v: unknown, path: string, depth: number) => {
    if (depth > 8 || v == null) return;
    if (typeof v === "string") {
      let parsed: unknown = null;
      if ((v.startsWith("{") || v.startsWith("[")) && depth < 3) {
        try { parsed = JSON.parse(v); } catch {}
      }
      if (parsed) return walk(parsed, path, depth + 1);
      const e = cleanEmail(v);
      if (!e || exclude.has(e) || e.endsWith("@contra.com") || e.endsWith("@ingotui.com")) return;
      (payerish.test(path) ? preferred : other).add(e);
      return;
    }
    if (Array.isArray(v)) return v.forEach((x, i) => walk(x, path + "." + i, depth + 1));
    if (typeof v === "object") for (const [k, x] of Object.entries(v as Record<string, unknown>)) walk(x, path + "." + k, depth + 1);
  };
  walk(data, "", 0);
  if (preferred.size === 1) return [...preferred][0];
  if (!preferred.size && other.size === 1) return [...other][0];
  return null;
}

const familyOf = (key: string): string[] => (LIFETIME_KEYS.includes(key as VariantKey) ? LIFETIME_KEYS : [key]);
const usd = (cents: number) => "$" + (cents % 100 ? (cents / 100).toFixed(2) : String(cents / 100));

/**
 * One Contra payment link we read sales from. Contra makes a new link (new slug) when a price changes and
 * redirects the old one, so a product can have several slugs; all of them are synced. `priceCents` is what
 * that link charges (from Contra), or null when only known from settings.externalCheckout.
 */
export type Link = { slug: string; keys: VariantKey[]; priceCents: number | null; title: string | null; source: "settings" | "contra" };

/** Default Contra username for list_products (override with CONTRA_USERNAME). */
export const CONTRA_USERNAME = "mhjubayer910_6bdq1si8";
const LINK_TTL_MS = 5 * 60_000;

/** Links set by hand in settings.externalCheckout. */
export function settingsLinks(settings: Settings): Link[] {
  const out = new Map<string, Link>();
  for (const [key, url] of Object.entries(settings.externalCheckout) as [VariantKey, string][]) {
    const slug = url ? slugOf(url) : null;
    if (!slug || !optionOfKey(key)) continue;
    const cur = out.get(slug);
    if (cur) cur.keys.push(key);
    else out.set(slug, { slug, keys: [key], priceCents: null, title: null, source: "settings" });
  }
  return [...out.values()];
}

/** The variant keys a Contra offering sells, from its title, else its billing interval + price. Empty when unknown. */
export function keysFor(settings: Settings, title: string | null, interval: string | null, cents: number | null): VariantKey[] {
  const t = (title ?? "").toLowerCase();
  const i = (interval ?? "").toLowerCase();
  const yearly = /year|annual|annually/.test(t) || /year|annual/.test(i);
  const monthly = /month/.test(t) || /month/.test(i);
  if (/lifetime/.test(t)) return [...LIFETIME_KEYS];
  if (/team/.test(t) && (yearly || monthly)) return [yearly ? "teamYearly" : "teamMonthly"];
  if (/\bpro\b/.test(t) && (yearly || monthly)) return [yearly ? "proYearly" : "proMonthly"];
  if (cents == null) return [];
  const byPrice = (Object.keys(settings.prices) as VariantKey[]).filter((k) => priceCents(settings, k) === cents);
  const oneTime = !i || /one|once|single|none|lifetime/.test(i);
  const fit = byPrice.filter((k) => (LIFETIME_KEYS.includes(k) ? oneTime && !yearly && !monthly : k.endsWith("Yearly") ? yearly : monthly));
  return fit.length === 1 ? (LIFETIME_KEYS.includes(fit[0]) ? [...LIFETIME_KEYS] : fit) : [];
}

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);

/**
 * Payment links in a list_products / list_payment_links result, whatever the nesting: any object with a
 * slug (or a /payment-link/<slug> URL). Title and billing interval are inherited from the parent product.
 */
export function extractLinks(data: unknown, settings: Settings, rootIsLinks = false): Link[] {
  const out = new Map<string, Link>();
  type Ctx = { title: string | null; interval: string | null; cents: number | null; inLink: boolean };
  const walk = (v: unknown, ctx: Ctx, depth: number) => {
    if (depth > 6 || !v || typeof v !== "object") return;
    if (Array.isArray(v)) return v.forEach((x) => walk(x, ctx, depth + 1));
    const o = v as Record<string, unknown>;
    const title = str(o.title) ?? str(o.name) ?? str(o.productTitle) ?? ctx.title;
    const interval = str(o.billingInterval) ?? str(o.interval) ?? str(o.recurringInterval) ?? str(o.billingPeriod) ?? ctx.interval;
    const amt = parseAmount(o.price ?? o.amount ?? o.unitAmount ?? o.priceAmount);
    const cents = amt && amt.currency === "USD" && amt.cents > 0 ? amt.cents : ctx.cents;
    // A slug counts only when it is clearly a payment link: a paymentLinkSlug field, a /payment-link/ URL,
    // or a plain slug on an object inside a payment-link list (a product's own page slug is not one).
    let slug = str(o.paymentLinkSlug);
    for (const k of ["url", "paymentLinkUrl", "link", "checkoutUrl", "href"]) if (!slug && str(o[k])) slug = slugOf(String(o[k]));
    if (!slug && (ctx.inLink || /payment.?link/i.test(String(o.__typename ?? o.type ?? "")))) slug = str(o.slug);
    if (slug) {
      const keys = keysFor(settings, title, interval, cents);
      if (keys.length && !out.has(slug)) out.set(slug, { slug, keys, priceCents: cents ?? null, title, source: "contra" });
    }
    for (const [k, x] of Object.entries(o))
      if (x && typeof x === "object" && k !== "customer") walk(x, { title, interval, cents, inLink: /payment.?links?$/i.test(k) || (ctx.inLink && /^(items|nodes|edges|node|data|results)$/.test(k)) }, depth + 1);
  };
  walk(data, { title: null, interval: null, cents: null, inLink: rootIsLinks }, 0);
  return [...out.values()];
}

/** Settings links plus the ones Contra lists (cached on the connection row for 5 minutes). Never throws. */
async function currentLinks(settings: Settings, call: ToolCaller | null, now: Date, cached: { at: number; links: Link[] } | null, force: boolean): Promise<{ links: Link[]; fresh: { at: number; links: Link[] } | null; problem?: string }> {
  let found: Link[] = cached?.links ?? [];
  let fresh: { at: number; links: Link[] } | null = null;
  let problem: string | undefined;
  if (call && (force || !cached || now.getTime() - cached.at > LINK_TTL_MS)) {
    const got: Link[] = [];
    let anyOk = false;
    const env = await getEnv().catch(() => null);
    for (const [tool, args, isLinks] of [
      ["list_products", { username: env?.CONTRA_USERNAME || CONTRA_USERNAME }, false],
      ["list_payment_links", {}, true],
    ] as const) {
      try {
        got.push(...extractLinks(await call(tool, { ...args }), settings, isLinks));
        anyOk = true;
      } catch (e) {
        problem = `${tool}: ${e instanceof Error ? e.message : String(e)}`.slice(0, 200);
      }
    }
    if (anyOk) {
      // Keep slugs seen before: an old link still gets late sales and must stay synced.
      const merged = new Map<string, Link>();
      for (const l of [...(cached?.links ?? []), ...got]) merged.set(l.slug, l);
      found = [...merged.values()];
      fresh = { at: now.getTime(), links: found };
    }
  }
  const all = new Map<string, Link>();
  for (const l of settingsLinks(settings)) all.set(l.slug, l);
  for (const l of found) {
    const s = all.get(l.slug);
    // Contra knows the real price of the link; settings may know the exact variant (deal vs after-deal).
    all.set(l.slug, s ? { ...l, keys: s.keys.every((k) => l.keys.includes(k)) ? s.keys : l.keys } : l);
  }
  return { links: [...all.values()], fresh, problem };
}

/**
 * The variant a sale is for, and whether its amount is right. A link with a known price must charge exactly
 * that (old links at an old price are fine). A link known only from settings must match a current price
 * of its product family, so a stray amount never grants by itself.
 */
export function classify(settings: Settings, link: Pick<Link, "keys" | "priceCents">, amt: { currency: string; cents: number } | null): { key: VariantKey; note: string | null } {
  const keys = link.keys;
  const lifetimeKey = (cents: number): VariantKey => (keys.includes("lifetimeAfter") && priceCents(settings, "lifetimeAfter") === cents ? "lifetimeAfter" : keys.includes("lifetimeDeal") ? "lifetimeDeal" : keys[0]);
  const paid = amt ? `${amt.currency} ${(amt.cents / 100).toFixed(2)}` : "an unreadable amount";
  const usdOk = amt && amt.currency === "USD" && amt.cents > 0;
  if (link.priceCents != null) {
    if (usdOk && amt.cents === link.priceCents) return { key: LIFETIME_KEYS.includes(keys[0]) ? lifetimeKey(amt.cents) : keys[0], note: null };
    // Contra keeps the same link when the owner changes its price, so a sale at an earlier price (e.g. the
    // $29 launch price on a link that now shows $49) is real. The link itself says which product it is;
    // only a stray amount far below the price (under half) is held for the owner.
    if (usdOk && amt.cents >= Math.floor(link.priceCents / 2)) return { key: LIFETIME_KEYS.includes(keys[0]) ? lifetimeKey(amt.cents) : keys[0], note: null };
    return { key: keys[0], note: `${PRICE_MISMATCH}: paid ${paid}, this Contra link charges ${usd(link.priceCents)}. Check it on Contra, then match by hand.` };
  }
  const family = [...new Set(keys.flatMap((k) => familyOf(k)))] as VariantKey[];
  const hit = usdOk ? family.find((k) => priceCents(settings, k) === amt.cents) : undefined;
  if (hit) return { key: hit, note: null };
  const want = priceCents(settings, keys[0]);
  if (usdOk && want > 0 && amt.cents >= Math.floor(want / 2)) return { key: keys[0], note: null };
  return { key: keys[0], note: `${PRICE_MISMATCH}: paid ${paid}, ${optionOfKey(keys[0]) === "lifetime" ? "Lifetime" : keys[0]} costs ${usd(want)}. Check it on Contra, then match by hand.` };
}

/* ------------------------------------------------------------------ sync */

async function takeLock(): Promise<boolean> {
  try {
    const env = await getEnv();
    if (await env.KV.get(LOCK_KEY)) return false;
    await env.KV.put(LOCK_KEY, String(Date.now()), { expirationTtl: 60 });
    return true;
  } catch {
    return true;
  }
}

async function releaseLock() {
  try {
    const env = await getEnv();
    await env.KV.delete(LOCK_KEY);
  } catch {}
}

/** Stores one page; returns how many were new and whether every id was already known. */
async function storePage(txs: ContraTx[], link: Link, settings: Settings, now: Date, lookupEmail?: (invoiceId: string) => Promise<string | null>) {
  const slug = link.slug;
  const db = await getDb();
  const S = schema.contraSale;
  const ids = txs.map((t) => String(t.id)).filter(Boolean);
  const known = ids.length ? new Set((await db.select({ id: S.id }).from(S).where(inArray(S.id, ids))).map((r) => r.id)) : new Set<string>();
  let added = 0;
  for (const t of txs) {
    const id = String(t.id ?? "");
    if (!id) continue;
    const status = String(t.invoice?.status ?? "").toUpperCase();
    if (status !== "PAID") continue;
    const amt = parseAmount(t.amount ?? t.invoice?.totalAmount);
    const { key, note } = classify(settings, link, amt);
    const option = optionOfKey(key) as CheckoutOption;
    const c = t.customer ?? {};
    let payerEmail = cleanEmail(c.emailAddress);
    // Hidden email: read it from the sale's invoice, only while the sale still needs it (new or unmatched without one).
    if (!payerEmail && lookupEmail && t.invoice?.id) {
      let needs = !known.has(id);
      if (!needs) {
        const [row] = await db.select({ status: S.status, payerEmail: S.payerEmail }).from(S).where(eq(S.id, id)).limit(1);
        needs = !!row && row.status === "unmatched" && !row.payerEmail;
      }
      if (needs) {
        saleInvoice.set(id, String(t.invoice.id));
        payerEmail = await lookupEmail(String(t.invoice.id)).catch((e) => {
          invoiceMisses.set(String(t.invoice!.id), "error: " + (e instanceof Error ? e.message : String(e)).slice(0, 200));
          return null;
        });
      }
    }
    const fields = {
      payerEmail,
      firstName: (c.firstName ?? "").trim().slice(0, 100) || null,
      lastName: (c.lastName ?? "").trim().slice(0, 100) || null,
      contraProfileId: c.userProfileId != null ? String(c.userProfileId).slice(0, 100) : null,
      invoiceStatus: status,
    };
    if (known.has(id)) {
      // Only fill in details Contra added later (for example the email); never touch the match.
      await db
        .update(S)
        .set({ invoiceStatus: status, updatedAt: now, ...(fields.payerEmail ? { payerEmail: fields.payerEmail } : {}) })
        .where(eq(S.id, id));
      continue;
    }
    const res = await db
      .insert(S)
      .values({
        id,
        slug,
        option,
        variantKey: key,
        amountCents: amt?.cents ?? 0,
        currency: amt?.currency ?? "USD",
        paidOn: (t.date ?? "").slice(0, 10) || null,
        ...fields,
        status: "unmatched",
        userId: null,
        activationId: null,
        matchedBy: null,
        note,
        createdAt: now,
        updatedAt: now,
      })
      .onConflictDoNothing()
      .returning({ id: S.id });
    added += res.length;
  }
  return { added, allKnown: ids.length > 0 && ids.every((i) => known.has(i)) };
}

/**
 * Fetches new sales from every Contra payment link, then matches. `callTool` replaces the live MCP client
 * (tests). Never throws: failures land in the result and in contra_connection.lastError.
 */
export async function syncContraSales(opts: { callTool?: ToolCaller; now?: Date; settings?: Settings; skipLock?: boolean; refreshLinks?: boolean } = {}): Promise<SyncResult> {
  const now = opts.now ?? new Date();
  const out: SyncResult = { ok: true, links: 0, fetched: 0, added: 0, matched: 0 };
  const live = !opts.callTool;
  const conn = await getConnection();
  if (live && !isConnected(conn)) return { ...out, ok: false, error: "Contra is not connected" };
  if (!opts.skipLock && !(await takeLock())) {
    out.matched = (await matchUnmatched(now)).matched;
    return { ...out, error: "Another sync is running; matched stored sales only" };
  }
  const problems: string[] = [];
  try {
    const settings = opts.settings ?? (await getSettings());
    const call = opts.callTool ?? (await contraToolCaller());
    // The seller's own addresses never count as a buyer's.
    const ownEmails = new Set([conn?.connectedBy, "mhjubayer910@gmail.com"].map((e) => cleanEmail(e)).filter((e): e is string => !!e));
    let cached: { at: number; links: Link[] } | null = null;
    try {
      cached = conn?.linkMap ? JSON.parse(conn.linkMap) : null;
    } catch {}
    const cur = await currentLinks(settings, call, now, cached, !!opts.refreshLinks);
    if (cur.fresh && conn) await setConnectionStatus({ linkMap: JSON.stringify(cur.fresh) }).catch(() => {});
    if (cur.problem && !cur.links.length) problems.push(cur.problem);
    const links = cur.links;
    out.links = links.length;
    if (links.length) {
      for (const link of links) {
        const slug = link.slug;
        try {
          let base = 0;
          let prevIds = "";
          for (let page = 0; page < MAX_PAGES; page++) {
            let data: unknown;
            try {
              data = await call(TOOL, { slug, pageIndex: page + base, pageSize: PAGE_SIZE });
            } catch (e) {
              // pageIndex may be 1-based: retry the first page once as 1.
              if (page === 0 && base === 0) {
                base = 1;
                data = await call(TOOL, { slug, pageIndex: 1, pageSize: PAGE_SIZE });
              } else throw e;
            }
            const txs = extractTransactions(data);
            const ids = txs.map((t) => String(t.id)).join(",");
            if (!txs.length || ids === prevIds) break;
            prevIds = ids;
            out.fetched += txs.length;
            const r = await storePage(txs, link, settings, now, async (invoiceId) => {
              const data = await call("get_invoice_status", { invoiceId });
              const e = invoicePayerEmail(data, ownEmails);
              if (e) return e;
              // The MCP invoice has no "Bill to"; the invoice document behind invoiceUrl does.
              const url = invoiceUrlOf(data);
              if (url) {
                const r = await emailFromInvoiceUrl(url, ownEmails).catch((err) => ({ email: null, diag: "invoiceUrl fetch failed: " + (err instanceof Error ? err.message : String(err)).slice(0, 120) }));
                if (r.email) return r.email;
                invoiceMisses.set(invoiceId, r.diag);
                return null;
              }
              invoiceMisses.set(invoiceId, "no buyer email and no invoiceUrl in fields: " + shapeOf(data));
              return null;
            });
            out.added += r.added;
            if (r.allKnown || txs.length < PAGE_SIZE) break;
          }
        } catch (e) {
          problems.push(`${slug}: ${e instanceof Error ? e.message : String(e)}`.slice(0, 300));
        }
      }
    }
    out.matched = (await matchUnmatched(now)).matched;
  } catch (e) {
    problems.push((e instanceof Error ? e.message : String(e)).slice(0, 300));
  } finally {
    if (!opts.skipLock) await releaseLock();
  }
  if (problems.length) {
    out.ok = false;
    out.error = problems.join("; ").slice(0, 500);
  }
  if (live) await setConnectionStatus({ lastSyncAt: now, lastError: out.error ?? null }).catch(() => {});
  return out;
}

/* ------------------------------------------------------------------ matching */

/** Links an unmatched sale (only while it is still unmatched). False when another run got there first or the activation is taken. */
async function claim(saleId: string, set: { userId: string | null; activationId: string | null; matchedBy: How; note?: string | null }, now: Date): Promise<boolean> {
  const db = await getDb();
  const S = schema.contraSale;
  try {
    const r = await db
      .update(S)
      .set({ status: "matched", userId: set.userId, activationId: set.activationId, matchedBy: set.matchedBy, note: set.note ?? null, updatedAt: now })
      .where(and(eq(S.id, saleId), eq(S.status, "unmatched")))
      .returning({ id: S.id });
    return r.length > 0;
  } catch {
    return false; // unique index: that activation is already linked to another sale
  }
}

async function unclaim(saleId: string, note: string, now: Date) {
  const db = await getDb();
  await db.update(schema.contraSale).set({ status: "unmatched", userId: null, activationId: null, matchedBy: null, note, updatedAt: now }).where(eq(schema.contraSale.id, saleId));
}

async function setNote(saleId: string, note: string | null, now: Date) {
  const db = await getDb();
  await db.update(schema.contraSale).set({ note, updatedAt: now }).where(and(eq(schema.contraSale.id, saleId), eq(schema.contraSale.status, "unmatched")));
}

/** Activation ids already linked to a sale. */
async function linkedIds(ids: string[]): Promise<Set<string>> {
  if (!ids.length) return new Set();
  const db = await getDb();
  const rows = await db.select({ a: schema.contraSale.activationId }).from(schema.contraSale).where(inArray(schema.contraSale.activationId, ids));
  return new Set(rows.map((r) => r.a).filter((x): x is string => !!x));
}

/** Claims the sale for this pending activation, then approves it. Undoes the claim if approval fails. */
async function claimAndApprove(sale: Sale, a: Activation, how: How, actor: string, now: Date): Promise<MatchOutcome> {
  if (!(await claim(sale.id, { userId: a.userId, activationId: a.id, matchedBy: how }, now))) return { status: "skipped", note: "Already matched, or that request is linked to another sale" };
  const r = await approveActivation(a.id, actor, now);
  if (!r.ok) {
    await unclaim(sale.id, `Could not approve: ${r.message}`, now);
    return { status: "unmatched", note: r.message };
  }
  await audit(actor, "contra.match", sale.id, { activationId: a.id, userId: a.userId, how, approved: r.changed, variantKey: sale.variantKey, amountCents: sale.amountCents });
  return { status: "matched", how: how === "email" || how === "name" ? how : undefined, activationId: a.id, approved: r.changed };
}

/** Creates a pending activation for this account and sale (or reuses the one already pending for that product). */
async function activationFor(user: { id: string; email: string }, sale: Sale, payerEmail: string, now: Date): Promise<Activation> {
  const db = await getDb();
  const A = schema.activation;
  const row: Activation = {
    id: "act_" + crypto.randomUUID(),
    userId: user.id,
    accountEmail: user.email.toLowerCase(),
    payerEmail,
    option: sale.option,
    variantKey: sale.variantKey,
    amountCents: sale.amountCents,
    provider: "contra",
    reference: null,
    status: "pending",
    decidedBy: null,
    decidedAt: null,
    note: null,
    contraName: [sale.firstName, sale.lastName].filter(Boolean).join(" ") || null,
    createdAt: now,
  };
  try {
    await db.insert(A).values(row);
    return row;
  } catch {
    const [again] = await db
      .select()
      .from(A)
      .where(and(eq(A.userId, user.id), eq(A.variantKey, sale.variantKey), eq(A.status, "pending")))
      .limit(1);
    if (again) return again;
    throw new Error("activation insert failed");
  }
}

type How = "email" | "name" | "manual" | "claim";
type Account = { id: string; email: string; plan: string; emailVerified: boolean; createdAt: Date };

/** Start of the sale's day (UTC). Contra gives only a date, so "before the sale" means before that day. */
export function saleStart(sale: Pick<Sale, "paidOn" | "createdAt">): number {
  const t = sale.paidOn ? Date.parse(sale.paidOn + "T00:00:00Z") : NaN;
  return Number.isFinite(t) ? t : sale.createdAt.getTime();
}

/**
 * May a sale auto-activate on this account by email alone? Only when the address is proven: verified by the
 * auth provider (e.g. Google), or the account existed before the sale (nobody can predict a future buyer's
 * email). A newer email+password account must prove inbox access with the claim link instead.
 */
export const provenFor = (u: Pick<Account, "emailVerified" | "createdAt">, sale: Pick<Sale, "paidOn" | "createdAt">) => !!u.emailVerified || u.createdAt.getTime() < saleStart(sale);

const accountCols = () => ({ id: schema.user.id, email: schema.user.email, plan: schema.user.plan, emailVerified: schema.user.emailVerified, createdAt: schema.user.createdAt });

async function accountById(id: string): Promise<Account | null> {
  const db = await getDb();
  const [u] = await db.select(accountCols()).from(schema.user).where(eq(schema.user.id, id)).limit(1);
  return u ?? null;
}

async function accountByEmail(email: string): Promise<Account | null> {
  const db = await getDb();
  const [u] = await db.select(accountCols()).from(schema.user).where(sql`lower(${schema.user.email}) = ${email}`).limit(1);
  return u ?? null;
}

/** Matches one unmatched sale by the rules at the top of this file. */
export async function matchSale(sale: Sale, now = new Date()): Promise<MatchOutcome> {
  if (sale.status !== "unmatched") return { status: "skipped" };
  if (sale.note?.startsWith(PRICE_MISMATCH)) return { status: "unmatched", note: sale.note };
  const db = await getDb();
  const A = schema.activation;
  const family = familyOf(sale.variantKey);
  const email = sale.payerEmail?.toLowerCase() ?? null;

  if (email) {
    // a) a pending request paid with this email. Someone could type another person's payer email, so only
    //    when that account is proven for the sale (provenFor); otherwise staff or the claim link decide.
    const pending = await findPendingByPayer(email, sale.variantKey);
    if (pending && !(await linkedIds([pending.id])).has(pending.id)) {
      const owner = await accountById(pending.userId);
      if (owner && provenFor(owner, sale)) return claimAndApprove(sale, pending, "email", ACTOR, now);
    }

    // a') approved by hand before the sync existed: link it, grant nothing
    const approved = await db
      .select()
      .from(A)
      .where(and(eq(A.status, "approved"), sql`lower(${A.payerEmail}) = ${email}`, inArray(A.variantKey, family)))
      .orderBy(A.createdAt)
      .limit(20);
    const taken = await linkedIds(approved.map((a) => a.id));
    const free = approved.find((a) => !taken.has(a.id));
    if (free && (await claim(sale.id, { userId: free.userId, activationId: free.id, matchedBy: "email", note: "Request was already approved by hand" }, now)))
      return { status: "matched", how: "email", activationId: free.id, approved: false };

    // b) the account with this email
    const u = await accountByEmail(email);
    if (u && (await alreadyHas(u, sale.option as CheckoutOption))) {
      // Grants nothing, so no proof needed: just link it (keeps hand-approved history silent).
      if (!(await claim(sale.id, { userId: u.id, activationId: null, matchedBy: "email", note: `Account already had ${grantOf(sale.option).plan}` }, now))) return { status: "skipped" };
      await audit(ACTOR, "contra.match", sale.id, { userId: u.id, how: "email", approved: false, already: true });
      return { status: "matched", how: "email", activationId: null, approved: false };
    }
    if (u && provenFor(u, sale)) {
      const a = await activationFor(u, sale, email, now);
      if (a.status === "pending") return claimAndApprove(sale, a, "email", ACTOR, now);
    }
    // No proven account: email the buyer a claim link once (opening it proves the inbox).
    const invited = await inviteBuyer(sale, email, !!u, now);
    const why = u ? "Account is newer than the sale and its email is not verified" : pending ? "A request uses this email, but its account is not proven for this sale" : "No account uses this email yet";
    await setNote(sale.id, invited ? `${why}; claim link emailed` : why, now);
    return { status: "unmatched", note: invited ? "invited" : undefined };
  }

  // c) email hidden: match the name on the Contra receipt. Exactly one candidate, and that request must be
  //    sent on or after the sale's day: the buyer reacting to the receipt. A request that names someone before
  //    they paid is a guess, whatever the account's age ("account older than the sale OR request after it"
  //    would always hold, since a request needs an account first), so it waits for staff.
  const name = normName([sale.firstName, sale.lastName].filter(Boolean).join(" "));
  if (!name) {
    await setNote(sale.id, "Buyer shared no email or name", now);
    return { status: "unmatched" };
  }
  const pend = await db
    .select()
    .from(A)
    .where(and(eq(A.status, "pending"), inArray(A.variantKey, family), sql`${A.contraName} is not null`))
    .orderBy(A.createdAt)
    .limit(500);
  const taken = await linkedIds(pend.map((a) => a.id));
  const hits = pend.filter((a) => normName(a.contraName) === name && !taken.has(a.id));
  if (hits.length === 1) {
    if (hits[0].createdAt.getTime() >= saleStart(sale)) return claimAndApprove(sale, hits[0], "name", ACTOR, now);
    await setNote(sale.id, "One request gives this name, but it was sent before the sale; check by hand", now);
    return { status: "unmatched" };
  }
  const inv = saleInvoice.get(sale.id);
  const miss = inv ? invoiceMisses.get(inv) : undefined;
  await setNote(sale.id, (hits.length ? `${hits.length} requests give this name; match by hand` : "Email not shared and no request gives this name yet") + (miss ? `. Invoice check: ${miss}` : ""), now);
  return { status: "unmatched" };
}

/** Sales paid on or after this many days ago get the account invite; older ones (bought before the sync existed) stay silent. */
export const INVITE_WITHIN_DAYS = 2;

/**
 * Emails the buyer a claim link for a sale no proven account can take. At most once per sale: invitedAt is
 * claimed in the database before the mail goes out. Only for recent sales (older ones stay silent).
 */
async function inviteBuyer(sale: Sale, email: string, hasAccount: boolean, now: Date, byStaff = false): Promise<boolean> {
  if (sale.invitedAt) return true;
  if (!byStaff && now.getTime() - saleStart(sale) > (INVITE_WITHIN_DAYS + 1) * 86_400_000) return false;
  const db = await getDb();
  const S = schema.contraSale;
  const won = await db
    .update(S)
    .set({ invitedAt: now, updatedAt: now })
    .where(and(eq(S.id, sale.id), isNull(S.invitedAt), eq(S.status, "unmatched")))
    .returning({ id: S.id });
  if (!won.length) return false;
  const product = productName(sale.variantKey);
  const plan = planLabel(grantOf(sale.option).plan);
  const link = `${SITE}/claim?t=${encodeURIComponent(await claimToken(sale.id, now))}`;
  await mailBuyer(email, `Your Ingot UI ${product} purchase is confirmed`, [
    "Hi,",
    "",
    `Thanks for buying ${product}. Your purchase is confirmed.`,
    "",
    hasAccount
      ? `Open this link while signed in as ${email} and ${plan} switches on:`
      : `Open this link and create your free Ingot UI account with this same email (${email}). ${plan} switches on right away:`,
    link,
    "",
    "The link works for 14 days. Already have an account with another email? Reply to this email and we will move it over.",
  ]);
  await audit(ACTOR, "contra.invite", sale.id, { variantKey: sale.variantKey, hasAccount });
  return true;
}

export type ClaimCheck = { ok: true; sale: Sale } | { ok: false; reason: "bad_link" | "expired" | "gone"; message: string };

/** Verifies a claim link and loads its sale (no account needed). */
export async function checkClaim(token: string, now = new Date()): Promise<ClaimCheck> {
  const v = await verifyClaimToken(token, now);
  if (!v.ok) return { ok: false, reason: v.reason, message: v.reason === "expired" ? "This link has expired." : "This link is not valid." };
  const db = await getDb();
  const [sale] = await db.select().from(schema.contraSale).where(eq(schema.contraSale.id, v.saleId)).limit(1);
  if (!sale || !sale.payerEmail) return { ok: false, reason: "gone", message: "We could not find this purchase." };
  return { ok: true, sale };
}

export type ClaimResult = { ok: true; already: boolean } | { ok: false; reason: "bad_link" | "expired" | "gone" | "wrong_account" | "taken" | "failed"; payerEmail?: string | null; message: string };

/**
 * /claim: the signed-in account opened a valid claim link. Opening it proves the inbox, so the sale goes to
 * this account when its email is the payer email. Idempotent: a second open returns already: true.
 */
export async function claimSale(token: string, user: { id: string; email: string }, now = new Date()): Promise<ClaimResult> {
  const c = await checkClaim(token, now);
  if (!c.ok) return c;
  const sale = c.sale;
  const payer = sale.payerEmail ?? "";
  if (sale.status === "matched") return sale.userId === user.id ? { ok: true, already: true } : { ok: false, reason: "taken", payerEmail: payer, message: "This purchase is already active on another account." };
  if (user.email.toLowerCase() !== payer.toLowerCase()) return { ok: false, reason: "wrong_account", payerEmail: payer, message: `This purchase was paid with ${payer}. Sign in with that email to switch it on.` };
  if (sale.status === "ignored") return { ok: false, reason: "gone", message: "This purchase needs a quick check from us. Reply to the email and we will sort it out." };
  const u = await accountById(user.id);
  if (!u) return { ok: false, reason: "failed", message: "Your account was not found." };
  if (await alreadyHas(u, sale.option as CheckoutOption)) {
    await claim(sale.id, { userId: u.id, activationId: null, matchedBy: "claim", note: `Account already had ${grantOf(sale.option).plan}` }, now);
    return { ok: true, already: true };
  }
  const a = await activationFor(u, sale, payer, now);
  const r = await claimAndApprove(sale, a, "claim", ACTOR, now);
  if (r.status !== "matched") return { ok: false, reason: "failed", message: r.note ?? "We could not switch it on. Reply to the email and we will sort it out." };
  return { ok: true, already: false };
}

/** A buyer signed up or signed in: match their unmatched sales (local D1 only). Never throws. */
export async function matchForEmail(email: string, now = new Date()): Promise<{ matched: number }> {
  try {
    const e = cleanEmail(email);
    if (!e) return { matched: 0 };
    const db = await getDb();
    const rows = await db
      .select()
      .from(schema.contraSale)
      .where(and(eq(schema.contraSale.status, "unmatched"), eq(schema.contraSale.payerEmail, e)))
      .limit(20);
    let matched = 0;
    for (const s of rows) if ((await matchSale(s, now)).status === "matched") matched++;
    return { matched };
  } catch {
    return { matched: 0 }; // table missing before migration 0011, or D1 hiccup: the cron retries
  }
}

/** Runs matching over every unmatched sale (no network). */
export async function matchUnmatched(now = new Date()): Promise<{ matched: number }> {
  const db = await getDb();
  const rows = await db.select().from(schema.contraSale).where(eq(schema.contraSale.status, "unmatched")).orderBy(schema.contraSale.paidOn).limit(500);
  let matched = 0;
  for (const s of rows) {
    try {
      if ((await matchSale(s, now)).status === "matched") matched++;
    } catch {
      // one bad row must not stop the rest
    }
  }
  return { matched };
}

/* ------------------------------------------------------------------ staff actions */

/** Staff typed the account email for an unmatched sale: create + approve an activation (or just link when they have the plan). */
export async function manualMatch(saleId: string, accountEmail: string, actor: string, now = new Date()): Promise<{ ok: boolean; message: string }> {
  const db = await getDb();
  const [sale] = await db.select().from(schema.contraSale).where(eq(schema.contraSale.id, saleId)).limit(1);
  if (!sale) return { ok: false, message: "That sale no longer exists." };
  if (sale.status === "matched") return { ok: true, message: "This sale is already matched." };
  const email = cleanEmail(accountEmail);
  if (!email) return { ok: false, message: "Enter the account email." };
  const [u] = await db.select({ id: schema.user.id, email: schema.user.email, plan: schema.user.plan }).from(schema.user).where(sql`lower(${schema.user.email}) = ${email}`).limit(1);
  if (!u) {
    // Staff read the buyer's email on Contra (the sales list hides it): record it and send the
    // "purchase confirmed, create your account" email now. The claim link switches the plan on.
    if (sale.payerEmail && sale.payerEmail !== email) return { ok: false, message: `This sale was paid as ${sale.payerEmail}. Use that email, or ask the buyer.` };
    await db.update(schema.contraSale).set({ payerEmail: email, status: "unmatched", invitedAt: null, updatedAt: now }).where(eq(schema.contraSale.id, saleId));
    const fresh = { ...sale, payerEmail: email, status: "unmatched", invitedAt: null } as Sale;
    const sent = await inviteBuyer(fresh, email, false, now, true);
    await setNote(sale.id, sent ? `No account yet; ${actor} added the buyer email; claim link emailed` : "No account yet; buyer email added, but the invite could not be sent", now);
    await audit(actor, "contra.invite_manual", sale.id, { email, sent });
    return sent
      ? { ok: true, message: `No account uses ${email} yet. Sent them the purchase email with a link to create their account; ${grantOf(sale.option).plan} switches on when they do.` }
      : { ok: false, message: "Saved the email, but the purchase email could not be sent." };
  }
  if (sale.status === "ignored") await db.update(schema.contraSale).set({ status: "unmatched", updatedAt: now }).where(eq(schema.contraSale.id, saleId));
  if (await alreadyHas(u, sale.option as CheckoutOption)) {
    if (!(await claim(sale.id, { userId: u.id, activationId: null, matchedBy: "manual", note: `Account already had ${grantOf(sale.option).plan}` }, now))) return { ok: false, message: "This sale changed. Reload and try again." };
    await audit(actor, "contra.match", sale.id, { userId: u.id, how: "manual", approved: false, already: true });
    return { ok: true, message: `Linked to ${u.email}, who already had the plan. No email sent.` };
  }
  const a = await activationFor(u, sale, sale.payerEmail ?? u.email, now);
  const r = await claimAndApprove(sale, a, "manual", actor, now);
  if (r.status !== "matched") return { ok: false, message: r.note ?? "Could not match this sale." };
  return { ok: true, message: `Matched. ${u.email} now has ${grantOf(sale.option).plan}.` };
}

export async function ignoreSale(saleId: string, actor: string, now = new Date()): Promise<{ ok: boolean; message: string }> {
  const db = await getDb();
  const r = await db
    .update(schema.contraSale)
    .set({ status: "ignored", updatedAt: now })
    .where(and(eq(schema.contraSale.id, saleId), eq(schema.contraSale.status, "unmatched")))
    .returning({ id: schema.contraSale.id });
  if (!r.length) return { ok: false, message: "Only unmatched sales can be ignored." };
  await audit(actor, "contra.ignore", saleId);
  return { ok: true, message: "Ignored. It stays in the list and never matches." };
}

export async function listSales(limit = 200): Promise<Sale[]> {
  try {
    const db = await getDb();
    return await db.select().from(schema.contraSale).orderBy(desc(schema.contraSale.paidOn), desc(schema.contraSale.createdAt)).limit(limit);
  } catch {
    return [];
  }
}

/* ------------------------------------------------------------------ hooks */

/**
 * After a buyer submits /activate: sync now so someone who already paid is approved before the response.
 * Waits at most `timeoutMs`; the rest keeps running through waitUntil. Never throws.
 */
export async function syncForRequest(timeoutMs = 8000): Promise<void> {
  try {
    if (!isConnected(await getConnection())) return;
    const run = syncContraSales().catch(() => null);
    try {
      const { getCloudflareContext } = await import("@opennextjs/cloudflare");
      getCloudflareContext().ctx?.waitUntil?.(run);
    } catch {}
    await Promise.race([run, new Promise((r) => setTimeout(r, timeoutMs))]);
  } catch {}
}

/** While a buyer's request is pending, the status poll syncs at most once a minute site-wide. Never throws. */
export async function syncIfStale(): Promise<void> {
  try {
    const env = await getEnv();
    if (await env.KV.get("contra:sync:recent")) return;
    await env.KV.put("contra:sync:recent", "1", { expirationTtl: 60 });
    await syncForRequest(6000);
  } catch {}
}
