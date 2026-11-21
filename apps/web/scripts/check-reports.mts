/**
 * Reports (/admin/reports) checks against the LOCAL D1 only. Never run with --remote.
 *
 *   cd apps/web
 *   node scripts/check-reports.mts --seed     # writes 16 months of realistic local data (rows with seed_ ids)
 *   npx next dev -p 3330                      # in another shell
 *   node scripts/check-reports.mts            # recomputes totals from the raw rows and compares with the exports
 *
 * The check reads the raw rows back with `wrangler d1 execute --local --json` and recomputes period totals
 * with its own date logic (Intl for Asia/Dhaka, its own ISO week), then compares them with the CSV and XLSX
 * exports the dev server returns. It covers ISO week edges, quarter edges and the Dhaka midnight shift.
 *
 * Local test owner (localhost only, never production): REPORTS_OWNER below; ADMIN_EMAILS in .dev.vars must
 * list it so it signs in as owner.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { inflateRawSync } from "node:zlib";

const REPORTS_OWNER = { email: "owner@reports.test", password: "reports-local-owner-2026", name: "Reports Owner" };
const BASE = process.env.REPORTS_BASE ?? "http://localhost:3330";
const TMP = ".qa/tmp";
mkdirSync(TMP, { recursive: true });

const d1 = (sql: string): Record<string, unknown>[] => {
  const out = execFileSync("npx", ["wrangler", "d1", "execute", "foundry-ui-db", "--local", "--json", "--command", sql], { encoding: "utf8", maxBuffer: 1 << 28, stdio: ["ignore", "pipe", "ignore"] });
  const j = JSON.parse(out) as { results: Record<string, unknown>[] }[];
  return j.flatMap((x) => x.results ?? []);
};

/* ======================================================================== seed */

function seed() {
  let s = 20261121;
  const rnd = () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const pick = <T,>(a: T[]) => a[Math.floor(rnd() * a.length)];
  const DAY = 86400;
  const start = Date.UTC(2025, 7, 1) / 1000; // Aug 1, 2025
  const now = Math.floor(Date.now() / 1000);
  const days = Math.floor((now - start) / DAY) + 1;
  const iso = (t: number) => new Date(t * 1000).toISOString().slice(0, 10);
  const q = (v: unknown) => (v === null || v === undefined ? "NULL" : typeof v === "number" ? String(v) : `'${String(v).replace(/'/g, "''")}'`);
  const sql: string[] = [
    "DELETE FROM pageview_daily;",
    "DELETE FROM referrer_daily;",
    "DELETE FROM visitor_daily;",
    "DELETE FROM usage_event WHERE anonId LIKE 'seed_%' OR userId LIKE 'seed_%';",
    "DELETE FROM ticket_message WHERE id LIKE 'seed_%';",
    "DELETE FROM ticket WHERE id LIKE 'seed_%';",
    "DELETE FROM purchase WHERE id LIKE 'seed_%';",
    "DELETE FROM subscription WHERE id LIKE 'seed_%';",
    "DELETE FROM activation WHERE id LIKE 'seed_%';",
    "DELETE FROM contra_sale WHERE id LIKE 'seed_%';",
    "DELETE FROM bot_gap WHERE id LIKE 'seed_%';",
    "DELETE FROM api_key WHERE id LIKE 'seed_%';",
    "DELETE FROM post WHERE id LIKE 'seed_%';",
    "DELETE FROM changelog_entry WHERE id LIKE 'seed_%';",
    "DELETE FROM waitlist WHERE email LIKE 'seed_%';",
    "DELETE FROM user WHERE id LIKE 'seed_%';",
  ];
  const insert = (table: string, cols: string[], rows: unknown[][]) => {
    for (let i = 0; i < rows.length; i += 200) sql.push(`INSERT INTO ${table} (${cols.map((c) => `"${c}"`).join(", ")}) VALUES ${rows.slice(i, i + 200).map((r) => `(${r.map(q).join(", ")})`).join(", ")};`);
  };
  const growth = (t: number) => 0.35 + 0.65 * ((t - start) / (now - start)); // traffic grows over time

  // Traffic: pages, sources, visitors per UTC day.
  const PATHS = ["/", "/components", "/icons", "/pricing", "/systems/loopo", "/systems/vantage", "/mcp", "/blog", "/blog/dashboard-ui-best-practices", "/blog/saas-metrics-dashboard", "/blog/figma-to-react", "/docs", "/changelog", "/components/loopo-overview-page-18743155", "/theme-generator"];
  const SOURCES = ["direct", "google", "x.com", "linkedin", "reddit", "chatgpt", "github", "producthunt"];
  const pv: unknown[][] = [];
  const rf: unknown[][] = [];
  const vd: unknown[][] = [];
  for (let i = 0; i < days; i++) {
    const t = start + i * DAY;
    const g = growth(t) * (new Date(t * 1000).getUTCDay() % 6 === 0 ? 0.7 : 1);
    let visitors = 0;
    PATHS.forEach((p, j) => {
      const v = Math.round((220 / (j + 1.5)) * g * (0.7 + rnd() * 0.6));
      if (v > 0) pv.push([iso(t), p, v]);
    });
    SOURCES.forEach((src, j) => {
      const v = Math.round((90 / (j + 1)) * g * (0.6 + rnd() * 0.8));
      visitors += v;
      if (v > 0) rf.push([iso(t), src, v]);
    });
    vd.push([iso(t), Math.round(visitors * 1.1)]);
  }
  insert("pageview_daily", ["day", "path", "views"], pv);
  insert("referrer_daily", ["day", "source", "views"], rf);
  insert("visitor_daily", ["day", "visitors"], vd);

  // Users, with fixed edge cases for the time-zone and boundary checks.
  const users: { id: string; t: number; plan: string }[] = [];
  const EDGE = [
    Date.UTC(2026, 10, 15, 20, 0) / 1000, // Sun Nov 15 20:00 UTC = Mon Nov 16 02:00 Dhaka (ISO week 46 UTC, 47 Dhaka)
    Date.UTC(2026, 8, 30, 19, 30) / 1000, // Sep 30 19:30 UTC = Oct 1 01:30 Dhaka (Q3 UTC, Q4 Dhaka)
    Date.UTC(2025, 11, 31, 18, 30) / 1000, // Dec 31 18:30 UTC = Jan 1 00:30 Dhaka (2025 UTC, 2026 Dhaka)
    Date.UTC(2025, 11, 28, 23, 59) / 1000, // Sun Dec 28 2025: last day of ISO week 52, 2025
    Date.UTC(2025, 11, 29, 0, 0) / 1000, // Mon Dec 29 2025: ISO week 1 of 2026
    Date.UTC(2026, 2, 31, 23, 59) / 1000, // last minute of Q1 2026 (UTC)
    Date.UTC(2026, 3, 1, 0, 0) / 1000, // first minute of Q2 2026 (UTC)
    Date.UTC(2026, 10, 15, 17, 59) / 1000, // Nov 15 23:59 Dhaka: last minute of the Dhaka day (daily check)
    Date.UTC(2026, 10, 15, 18, 0) / 1000, // Nov 16 00:00 Dhaka, still Nov 15 in UTC (daily check)
  ];
  let n = 0;
  for (const t of EDGE) users.push({ id: `seed_u${n++}`, t, plan: "free" });
  for (let i = 0; i < days; i++) {
    const t0 = start + i * DAY;
    const k = Math.round(growth(t0) * 2.4 * rnd() * 1.6);
    for (let j = 0; j < k; j++) {
      const t = t0 + Math.floor(rnd() * DAY);
      if (t > now) continue;
      const r = rnd();
      users.push({ id: `seed_u${n++}`, t, plan: r < 0.82 ? "free" : r < 0.92 ? "pro" : r < 0.98 ? "lifetime" : "team" });
    }
  }
  const REFS = ["launch-x", "newsletter", "yt-review", null, null, null, null];
  insert(
    "user",
    ["id", "name", "email", "emailVerified", "plan", "role", "ref", "createdAt", "updatedAt"],
    users.map((u, i) => [u.id, `Seed User ${i}`, `seed_${i}@reports.test`, 1, u.plan, "user", pick(REFS), u.t, u.t]),
  );

  // Usage events.
  const items = JSON.parse(readFileSync("lib/figma-items.json", "utf8")) as { slug: string }[];
  const slugs = items.filter((_, i) => i % 40 === 0).map((x) => x.slug);
  const TARGETS = [...slugs, "button", "card", "data-table", "icon:search", "icon:home", "icon:bell", "icon:calendar"];
  const ACTIONS = ["copy_code", "copy_code", "copy_figma", "copy_figma", "download_svg", "download_png", "install"];
  const ev: unknown[][] = [];
  for (let i = 0; i < days; i++) {
    const t0 = start + i * DAY;
    const k = Math.round(growth(t0) * 22 * (0.5 + rnd()));
    for (let j = 0; j < k; j++) {
      const t = t0 + Math.floor(rnd() * DAY);
      if (t > now) continue;
      const signed = rnd() < 0.45;
      const u = users[Math.floor(rnd() * users.length)];
      const action = pick(ACTIONS);
      const target = action.startsWith("download") ? pick(TARGETS.filter((x) => x.startsWith("icon:"))) : pick(TARGETS);
      const r = rnd();
      const client = action === "install" ? "cli" : r < 0.78 ? "web" : r < 0.94 ? "mcp" : "cli";
      ev.push([signed || client !== "web" ? (u.t <= t ? u.id : users[0].id) : null, signed || client !== "web" ? null : `seed_a${Math.floor(rnd() * 900)}`, action, target, client, t]);
    }
  }
  insert("usage_event", ["userId", "anonId", "action", "target", "client", "createdAt"], ev);

  // API keys.
  insert("api_key", ["id", "userId", "name", "prefix", "hash", "createdAt"], Array.from({ length: 90 }, (_, i) => {
    const u = users[Math.floor(rnd() * users.length)];
    return [`seed_k${i}`, u.id, "Seed key", "ing_seed", `seed_hash_${i}`, u.t + Math.floor(rnd() * 20 * DAY)];
  }).filter((r) => (r[5] as number) <= now));

  // Purchases: Lemon Squeezy (paid, refunded, partial), Contra, manual grants, one EUR order with no USD total.
  const purchases: unknown[][] = [];
  const subs: unknown[][] = [];
  const VARIANTS: [string, string, number][] = [["monthly", "pro", 900], ["yearly", "pro", 3900], ["lifetimeDeal", "lifetime", 4900], ["lifetimeAfter", "lifetime", 9900]];
  let pn = 0;
  for (let i = 0; i < days; i += 1) {
    const t0 = start + i * DAY;
    if (rnd() > growth(t0) * 0.55) continue;
    const t = t0 + Math.floor(rnd() * DAY);
    if (t > now) continue;
    const [variant, plan, cents] = pick(VARIANTS);
    const r = rnd();
    const status = r < 0.86 ? "paid" : r < 0.95 ? "refunded" : "partial_refund";
    const id = `seed_p${pn++}`;
    const orderId = String(900000 + pn);
    const attrs: Record<string, unknown> = { total_usd: cents, subtotal_usd: cents, discount_total_usd: 0, order_number: 1000 + pn };
    if (status === "partial_refund") attrs.refunded_amount_usd = Math.round(cents / 3);
    if (status === "refunded" && rnd() < 0.5) attrs.refunded_amount_usd = cents;
    const raw = JSON.stringify({ source: "webhook", event: "order_created", test_mode: pn % 37 === 0, attributes: attrs });
    purchases.push([id, "lemonsqueezy", orderId, null, `seed_buyer${pn}@reports.test`, plan, variant, cents, "USD", status, null, raw, t, t]);
    if (variant === "monthly" || variant === "yearly") {
      const rr = rnd();
      const ended = rr < 0.3;
      // Ended ones stop after one to five billing periods; an end date still ahead is a cancellation in its last paid period.
      const endsAt = ended ? t + Math.floor((variant === "yearly" ? 365 : 30 * (1 + Math.floor(rnd() * 5))) * DAY) : null;
      const st = ended ? (endsAt! < now && rr < 0.15 ? "expired" : "cancelled") : rr < 0.95 ? "active" : "past_due";
      subs.push([`seed_s${pn}`, "lemonsqueezy", `sub_${pn}`, null, `seed_buyer${pn}@reports.test`, "pro", variant, st, null, endsAt, null, JSON.stringify({ source: "webhook", attributes: { order_id: Number(orderId) } }), t, t]);
    }
  }
  // Contra purchases (approved activations) and their activation rows.
  const acts: unknown[][] = [];
  const OPTIONS: [string, string, number][] = [["lifetime", "lifetimeDeal", 4900], ["proYearly", "proYearly", 3900], ["proMonthly", "proMonthly", 900]];
  for (let i = 0; i < 46; i++) {
    const u = users[Math.floor(rnd() * users.length)];
    const created = Math.max(u.t, start + Math.floor(rnd() * (now - start)));
    if (created > now) continue;
    const [option, variantKey, cents] = pick(OPTIONS);
    const r = rnd();
    const status = created > now - 3 * DAY && r < 0.6 ? "pending" : r < 0.82 ? "approved" : r < 0.9 ? "pending" : "rejected";
    const decided = status === "pending" ? null : Math.min(now, created + Math.floor((0.2 + rnd() * 40) * 3600));
    const by = status === "approved" && rnd() < 0.4 ? "contra-auto" : status === "pending" ? null : "owner@reports.test";
    const id = `seed_act${i}`;
    acts.push([id, u.id, `seed_${i}@reports.test`, `seed_${i}@reports.test`, option, variantKey, cents, "contra", null, status, by, decided, status === "rejected" ? "No matching payment" : null, null, created]);
    if (status === "approved") {
      const raw = JSON.stringify({ source: "contra", activationId: id, attributes: { order_id: id, total_usd: cents } });
      purchases.push([`seed_contra_${i}`, "contra", id, u.id, `seed_${i}@reports.test`, option === "lifetime" ? "lifetime" : "pro", variantKey, cents, "USD", "paid", null, raw, decided, decided]);
      if (option !== "lifetime") subs.push([`seed_cs${i}`, "contra", id, u.id, `seed_${i}@reports.test`, "pro", option === "proYearly" ? "yearly" : "monthly", "active", null, null, null, raw, decided, decided]);
    }
  }
  for (let i = 0; i < 9; i++) {
    const t = start + Math.floor(rnd() * (now - start));
    purchases.push([`seed_grant${i}`, "manual", `manual_seed_${i}`, users[i + 10].id, `seed_${i + 10}@reports.test`, "pro", "manual", 0, "USD", i === 3 ? "revoked" : "granted", "Seed grant", null, t, t]);
  }
  const eurT = Date.UTC(2026, 9, 14, 12) / 1000;
  purchases.push(["seed_eur", "lemonsqueezy", "eur-1", null, "seed_eur@reports.test", "pro", "monthly", 850, "EUR", "paid", null, JSON.stringify({ source: "webhook", attributes: {} }), eurT, eurT]);
  insert("purchase", ["id", "provider", "providerOrderId", "userId", "email", "plan", "variant", "amountCents", "currency", "status", "note", "raw", "createdAt", "updatedAt"], purchases);
  insert("subscription", ["id", "provider", "providerSubId", "userId", "email", "plan", "interval", "status", "renewsAt", "endsAt", "portalUrl", "raw", "createdAt", "updatedAt"], subs);
  insert("activation", ["id", "userId", "accountEmail", "payerEmail", "option", "variantKey", "amountCents", "provider", "reference", "status", "decidedBy", "decidedAt", "note", "contraName", "createdAt"], acts);
  insert("contra_sale", ["id", "slug", "option", "variantKey", "amountCents", "currency", "paidOn", "status", "createdAt", "updatedAt"], Array.from({ length: 34 }, (_, i) => {
    const t = start + Math.floor(rnd() * (now - start));
    return [`seed_cs${i}`, "ingot-lifetime", "lifetime", "lifetimeDeal", 4900, "USD", iso(t), rnd() < 0.8 ? "matched" : "unmatched", t, t];
  }));

  // Tickets with staff replies after a varying delay.
  const tickets: unknown[][] = [];
  const msgs: unknown[][] = [];
  for (let i = 0; i < 140; i++) {
    const t = start + Math.floor(rnd() * (now - start));
    const r = rnd();
    const replied = r < 0.85;
    const delay = Math.floor((0.1 + rnd() * rnd() * 60) * 3600);
    const status = !replied ? "open" : r < 0.6 ? "closed" : "answered";
    const updated = Math.min(now, t + delay + Math.floor(rnd() * 3 * DAY));
    tickets.push([`seed_t${i}`, null, `seed_t${i}@reports.test`, null, `Seed ticket ${i}`, status, pick(["widget", "form", "email"]), t, updated]);
    msgs.push([`seed_m${i}a`, `seed_t${i}`, "customer", "Help please", t]);
    if (rnd() < 0.3) msgs.push([`seed_m${i}b`, `seed_t${i}`, "bot", "Bot answer", t + 30]);
    if (replied && t + delay <= now) msgs.push([`seed_m${i}c`, `seed_t${i}`, "admin", "Staff answer", t + delay]);
  }
  insert("ticket", ["id", "userId", "email", "name", "subject", "status", "source", "createdAt", "updatedAt"], tickets);
  insert("ticket_message", ["id", "ticketId", "author", "body", "createdAt"], msgs);

  // Bot gaps, posts, changelog, waitlist.
  const QUESTIONS = ["Can I use Ingot UI in a client project?", "Do you support Vue?", "How do I cancel Pro?", "Is there a dark mode?", "Can I pay with PayPal?", "Does the MCP work in Zed?", "How many seats in Team?", "Is the Figma file editable?"];
  insert("bot_gap", ["id", "question", "intent", "confidence", "createdAt", "count", "lastAt", "dismissed"], Array.from({ length: 85 }, (_, i) => {
    const t = start + Math.floor(rnd() * (now - start));
    return [`seed_g${i}`, `${pick(QUESTIONS)} (${i})`, pick(["billing", "licence", "install", "mcp", "unknown"]), Math.round(rnd() * 40) / 100, t, 1 + Math.floor(rnd() * 6), Math.min(now, t + DAY), 0];
  }));
  insert("post", ["id", "slug", "title", "description", "category", "body", "status", "publishedAt", "createdAt", "updatedAt"], Array.from({ length: 14 }, (_, i) => {
    const t = start + Math.floor(rnd() * (now - start));
    return [`seed_post${i}`, `seed-post-${i}`, `Seed post ${i}`, "Seed", pick(["Guides", "Lists", "Comparisons", "AI agents"]), "Body", i % 5 === 4 ? "draft" : "published", i % 5 === 4 ? null : t, t, t];
  }));
  insert("changelog_entry", ["id", "date", "title", "items", "scene", "published", "createdAt", "updatedAt"], Array.from({ length: 18 }, (_, i) => {
    const t = start + Math.floor(rnd() * (Date.UTC(2026, 10, 1) / 1000 - start));
    return [`seed_cl${i}`, iso(t), `Seed release ${i}`, "[]", "stack", 1, t, t];
  }));
  insert("waitlist", ["email", "plan", "createdAt"], Array.from({ length: 120 }, (_, i) => [`seed_w${i}@reports.test`, pick(["team", "pro"]), start + Math.floor(rnd() * (now - start))]));

  writeFileSync(`${TMP}/seed.sql`, sql.join("\n") + "\n");
  execFileSync("npx", ["wrangler", "d1", "execute", "foundry-ui-db", "--local", "--file", `${TMP}/seed.sql`], { stdio: "inherit" });
  console.log(`Seeded ${days} days: ${pv.length} page rows, ${users.length} users, ${ev.length} usage events, ${purchases.length} purchases, ${subs.length} subscriptions, ${tickets.length} tickets, ${acts.length} activations.`);
}

if (process.argv.includes("--seed")) {
  seed();
  process.exit(0);
}

/* ======================================================================== check */

let failed = 0;
const check = (name: string, ok: boolean, extra = "") => {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${extra ? "  (" + extra + ")" : ""}`);
};

// Independent date logic: Intl for the zone, our own ISO week (not lib/reports/period.ts).
const localDate = (unixS: number, tz: string) => new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(unixS * 1000));
function isoWeekKey(day: string) {
  const d = new Date(day + "T12:00:00Z");
  const wd = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - wd);
  const y = d.getUTCFullYear();
  const wk = Math.ceil(((d.getTime() - Date.UTC(y, 0, 1)) / 86400000 + 1) / 7);
  return `${y}-W${String(wk).padStart(2, "0")}`;
}
const keyOf = (gran: string, day: string) => (gran === "day" ? day : gran === "week" ? isoWeekKey(day) : gran === "month" ? day.slice(0, 7) : gran === "quarter" ? `${day.slice(0, 4)}-Q${Math.ceil(Number(day.slice(5, 7)) / 3)}` : day.slice(0, 4));

/** Sign in as the local owner (creates the account on first run) and return the session cookie. */
async function session(): Promise<string> {
  const headers = { "content-type": "application/json", origin: BASE };
  await fetch(`${BASE}/api/auth/sign-up/email`, { method: "POST", headers, body: JSON.stringify(REPORTS_OWNER) }).catch(() => null);
  const res = await fetch(`${BASE}/api/auth/sign-in/email`, { method: "POST", headers, body: JSON.stringify({ email: REPORTS_OWNER.email, password: REPORTS_OWNER.password }) });
  const cookies = res.headers.getSetCookie().map((c) => c.split(";")[0]);
  if (!res.ok || !cookies.length) throw new Error(`sign-in failed: ${res.status}`);
  return cookies.join("; ");
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(cell);
      cell = "";
    }
    else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

/** Minimal zip reader (stored or deflated entries) for the XLSX check. */
function unzip(buf: Buffer): Map<string, string> {
  const files = new Map<string, string>();
  let eocd = buf.length - 22;
  while (eocd > 0 && buf.readUInt32LE(eocd) !== 0x06054b50) eocd--;
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  for (let i = 0; i < count; i++) {
    const method = buf.readUInt16LE(p + 10);
    const csize = buf.readUInt32LE(p + 20);
    const nlen = buf.readUInt16LE(p + 28);
    const xlen = buf.readUInt16LE(p + 30);
    const clen = buf.readUInt16LE(p + 32);
    const off = buf.readUInt32LE(p + 42);
    const name = buf.subarray(p + 46, p + 46 + nlen).toString("utf8");
    const lnl = buf.readUInt16LE(off + 26);
    const lxl = buf.readUInt16LE(off + 28);
    const data = buf.subarray(off + 30 + lnl + lxl, off + 30 + lnl + lxl + csize);
    files.set(name, (method === 8 ? inflateRawSync(data) : data).toString("utf8"));
    p += 46 + nlen + xlen + clen;
  }
  return files;
}

async function get(path: string, cookie: string) {
  const res = await fetch(BASE + path, { headers: { cookie } });
  return res;
}

async function main() {
  const cookie = await session();
  const nowS = Date.now() / 1000;

  // 1) Permission: no cookie gets a 404 from the export routes.
  const anon = await fetch(`${BASE}/admin/reports/export/csv?dataset=traffic&g=month`);
  check("CSV export is 404 without a staff session", anon.status === 404, String(anon.status));

  // Raw rows.
  const users = d1("SELECT createdAt FROM user").map((r) => Number(r.createdAt));
  const views = d1("SELECT day, sum(views) v FROM pageview_daily GROUP BY day").map((r) => ({ day: String(r.day), v: Number(r.v) }));
  const orders = d1(
    "SELECT createdAt, status, amountCents, currency, provider, raw FROM purchase WHERE provider IN ('lemonsqueezy','contra') AND status IN ('paid','refunded','partial_refund')",
  ).map((r) => {
    const a = (() => {
      try {
        return (JSON.parse(String(r.raw ?? "")) as { attributes?: Record<string, unknown> }).attributes ?? {};
      } catch {
        return {};
      }
    })();
    const usd = typeof a.total_usd === "number" ? a.total_usd : String(r.currency).toUpperCase() === "USD" ? Number(r.amountCents) : null;
    const ra = typeof a.refunded_amount_usd === "number" ? a.refunded_amount_usd : null;
    const refund = usd === null ? 0 : r.status === "refunded" ? Math.min(usd, ra && ra > 0 ? ra : usd) : r.status === "partial_refund" ? Math.min(usd, ra ?? 0) : 0;
    return { t: Number(r.createdAt), usd, refund };
  });

  const sumBy = <T,>(rows: T[], key: (r: T) => string, val: (r: T) => number) => {
    const m = new Map<string, number>();
    for (const r of rows) m.set(key(r), (m.get(key(r)) ?? 0) + val(r));
    return m;
  };

  type Case = { gran: string; tz: string; p: string; r: number };
  const CASES: Case[] = [
    { gran: "week", tz: "UTC", p: "2026-W46", r: 8 },
    { gran: "week", tz: "Asia/Dhaka", p: "2026-W47", r: 8 },
    { gran: "week", tz: "UTC", p: "2026-W01", r: 8 },
    { gran: "month", tz: "UTC", p: "2026-10", r: 12 },
    { gran: "quarter", tz: "UTC", p: "2026-Q2", r: 4 },
    { gran: "quarter", tz: "Asia/Dhaka", p: "2026-Q4", r: 4 },
    { gran: "year", tz: "UTC", p: "2026", r: 2 },
    { gran: "year", tz: "Asia/Dhaka", p: "2026", r: 2 },
    { gran: "day", tz: "UTC", p: "2026-11-15", r: 14 },
    { gran: "day", tz: "Asia/Dhaka", p: "2026-11-16", r: 14 },
    { gran: "day", tz: "Asia/Dhaka", p: "2026-11-15", r: 30 },
    { gran: "day", tz: "UTC", p: "2026-02-28", r: 7 },
  ];
  for (const c of CASES) {
    const qs = `g=${c.gran}&p=${c.p}&r=${c.r}&tz=${encodeURIComponent(c.tz)}`;
    const label = `${c.gran} ${c.p} ${c.tz}`;
    // Sign-ups (timestamp table, tz-shifted).
    const res = await get(`/admin/reports/export/csv?dataset=audience&${qs}`, cookie);
    // Bytes, not res.text(): TextDecoder drops a leading BOM.
    const bytes = new Uint8Array(await res.arrayBuffer());
    const text = new TextDecoder().decode(bytes);
    check(`${label}: audience CSV 200 with UTF-8 BOM`, res.status === 200 && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf, String(res.status));
    const rows = parseCsv(text.replace(/^\uFEFF/, ""));
    const head = rows[0];
    const ki = head.indexOf("Period");
    const si = head.findIndex((h) => h.startsWith("Sign-ups (count)"));
    const ui = head.findIndex((h) => h.startsWith("Users in total"));
    const exp = sumBy(users, (t) => keyOf(c.gran, localDate(t, c.tz)), () => 1);
    for (const r of rows.slice(1)) {
      if (!r[ki]) continue;
      const want = exp.get(r[ki]) ?? 0;
      if (Number(r[si]) !== want) check(`${label}: sign-ups ${r[ki]}`, false, `export ${r[si]} vs raw ${want}`);
    }
    const selRow = rows.find((r) => r[ki] === c.p);
    check(`${label}: sign-ups in ${c.p} match raw rows`, !!selRow && Number(selRow[si]) === (exp.get(c.p) ?? 0), `${selRow?.[si]} vs ${exp.get(c.p) ?? 0}`);
    const endRow = rows.find((r) => r[ki] === c.p);
    const lastIdx = head.indexOf("Last day");
    if (endRow && lastIdx >= 0) {
      const lastLocal = endRow[lastIdx];
      const total = users.filter((t) => localDate(t, c.tz) <= lastLocal).length;
      check(`${label}: users in total at the end of ${c.p}`, Number(endRow[ui]) === total, `${endRow[ui]} vs ${total}`);
    }
    // Page views (UTC day table).
    const tv = parseCsv((await (await get(`/admin/reports/export/csv?dataset=traffic&${qs}`, cookie)).text()).replace(/^\uFEFF/, ""));
    const vi = tv[0].findIndex((h) => h.startsWith("Page views (count)"));
    const expV = sumBy(views, (r) => keyOf(c.gran, r.day), (r) => r.v);
    const tRow = tv.find((r) => r[ki] === c.p);
    check(`${label}: page views in ${c.p} match raw rows`, !!tRow && Number(tRow[vi]) === (expV.get(c.p) ?? 0), `${tRow?.[vi]} vs ${expV.get(c.p) ?? 0}`);
    // Revenue (USD cents in raw, dollars in CSV).
    const rv = parseCsv((await (await get(`/admin/reports/export/csv?dataset=revenue&${qs}`, cookie)).text()).replace(/^\uFEFF/, ""));
    const gi = rv[0].findIndex((h) => h.startsWith("Gross revenue (USD)"));
    const ni = rv[0].findIndex((h) => h.startsWith("Net revenue (USD)"));
    const inP = orders.filter((o) => o.usd !== null && keyOf(c.gran, localDate(o.t, c.tz)) === c.p);
    const gross = inP.reduce((s, o) => s + (o.usd ?? 0), 0);
    const net = gross - inP.reduce((s, o) => s + o.refund, 0);
    const rRow = rv.find((r) => r[ki] === c.p);
    check(`${label}: gross revenue in ${c.p}`, !!rRow && Math.round(Number(rRow[gi]) * 100) === gross, `${rRow?.[gi]} vs ${gross / 100}`);
    check(`${label}: net revenue in ${c.p}`, !!rRow && Math.round(Number(rRow[ni]) * 100) === net, `${rRow?.[ni]} vs ${net / 100}`);
  }

  // 2) Edge cases by construction (seed EDGE users): the same instant lands in different periods by zone.
  const edge = (t: number, tz: string, g: string) => keyOf(g, localDate(t, tz));
  const sunNight = Date.UTC(2026, 10, 15, 20, 0) / 1000;
  check("Sun Nov 15 20:00 UTC is ISO week 46 in UTC and week 47 in Dhaka", edge(sunNight, "UTC", "week") === "2026-W46" && edge(sunNight, "Asia/Dhaka", "week") === "2026-W47");
  const q3 = Date.UTC(2026, 8, 30, 19, 30) / 1000;
  check("Sep 30 19:30 UTC is Q3 in UTC and Q4 in Dhaka", edge(q3, "UTC", "quarter") === "2026-Q3" && edge(q3, "Asia/Dhaka", "quarter") === "2026-Q4");
  check("Mon Dec 29 2025 is ISO week 1 of 2026", isoWeekKey("2025-12-29") === "2026-W01" && isoWeekKey("2025-12-28") === "2025-W52");
  // Page shows the same: a week-46 UTC report has that user, the Dhaka one has it in week 47 (checked through the CSV above).

  // 2b) Daily: the Dhaka day starts at 18:00 UTC the day before.
  const dEdgeA = Date.UTC(2026, 10, 15, 17, 59) / 1000;
  const dEdgeB = Date.UTC(2026, 10, 15, 18, 0) / 1000;
  check(
    "Nov 15 17:59 UTC is Nov 15 in Dhaka, 18:00 UTC is Nov 16 in Dhaka, both Nov 15 in UTC",
    edge(dEdgeA, "Asia/Dhaka", "day") === "2026-11-15" && edge(dEdgeB, "Asia/Dhaka", "day") === "2026-11-16" && edge(dEdgeB, "UTC", "day") === "2026-11-15",
  );
  const dayRows = async (tz: string, p: string) => parseCsv((await (await get(`/admin/reports/export/csv?dataset=audience&g=day&p=${p}&r=7&tz=${encodeURIComponent(tz)}`, cookie)).text()).replace(/^﻿/, ""));
  for (const [tz, p] of [["Asia/Dhaka", "2026-11-16"], ["Asia/Dhaka", "2026-11-15"], ["UTC", "2026-11-15"]] as const) {
    const rows = await dayRows(tz, p);
    const si = rows[0].findIndex((h) => h.startsWith("Sign-ups (count)"));
    const row = rows.find((r) => r[0] === p);
    const want = users.filter((t) => localDate(t, tz) === p).length;
    const hasEdge = users.includes(dEdgeB);
    check(`Daily ${p} ${tz}: sign-ups equal raw rows${hasEdge ? " (edge users seeded)" : ""}`, !!row && Number(row[si]) === want, `${row?.[si]} vs ${want}`);
    // Hourly: 24 rows in the report time zone, summing to the day total, each hour equal to the raw rows.
    const hr = parseCsv((await (await get(`/admin/reports/export/csv?dataset=hourly&g=day&p=${p}&tz=${encodeURIComponent(tz)}`, cookie)).text()).replace(/^﻿/, ""));
    const hi = hr[0].findIndex((h) => h.startsWith("Sign-ups (count)"));
    const hours = hr.slice(1).filter((r) => /^\d\d:00$/.test(r[1] ?? ""));
    const hourOf = (t: number) => Number(new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", hourCycle: "h23" }).format(new Date(t * 1000)));
    const bad = hours.filter((r, i) => Number(r[hi]) !== users.filter((t) => localDate(t, tz) === p && hourOf(t) === i).length);
    const sumH = hours.reduce((s, r) => s + Number(r[hi]), 0);
    check(`Hourly ${p} ${tz}: 24 hours, each equal to raw rows, sum ${sumH} = day total`, hours.length === 24 && !bad.length && sumH === want, bad.map((r) => r[1]).join(" "));
  }
  // The Dhaka edge user (18:00 UTC) is in hour 00 of Nov 16 Dhaka and hour 18 of Nov 15 UTC.
  {
    const h16 = parseCsv((await (await get(`/admin/reports/export/csv?dataset=hourly&g=day&p=2026-11-16&tz=Asia%2FDhaka`, cookie)).text()).replace(/^﻿/, ""));
    const h15 = parseCsv((await (await get(`/admin/reports/export/csv?dataset=hourly&g=day&p=2026-11-15&tz=UTC`, cookie)).text()).replace(/^﻿/, ""));
    const si16 = h16[0].findIndex((h) => h.startsWith("Sign-ups"));
    const si15 = h15[0].findIndex((h) => h.startsWith("Sign-ups"));
    check("Dhaka edge sign-up lands in 00:00 Nov 16 (Dhaka) and 18:00 Nov 15 (UTC)", Number(h16.find((r) => r[1] === "00:00")?.[si16]) >= 1 && Number(h15.find((r) => r[1] === "18:00")?.[si15]) >= 1);
  }
  // Day labels and file names.
  {
    const res = await get(`/admin/reports/export/csv?dataset=traffic&g=day&p=2026-11-16&r=7&tz=Asia%2FDhaka`, cookie);
    const cdd = res.headers.get("content-disposition") ?? "";
    const rows = parseCsv((await res.text()).replace(/^﻿/, ""));
    const r16 = rows.find((r) => r[0] === "2026-11-16");
    check("Daily CSV: 7 rows, Nov 16 named Mon, Nov 16, 2026, file ingot-traffic-2026-11-16-daily-dhaka.csv", rows.length === 8 && !!r16 && r16[1] === "Mon, Nov 16, 2026" && r16[2] === "2026-11-16" && r16[3] === "2026-11-16" && cdd.includes("ingot-traffic-2026-11-16-daily-dhaka.csv"), `${rows.length} ${r16?.slice(0, 4).join(" | ")} ${cdd}`);
    const hx = await get(`/admin/reports/export/csv?dataset=hourly&g=month&p=2026-11`, cookie);
    check("Hourly export is 404 outside the day granularity", hx.status === 404, String(hx.status));
    const xd = await get(`/admin/reports/export/xlsx?g=day&p=2026-11-16&r=7&tz=Asia%2FDhaka`, cookie);
    const xcd = xd.headers.get("content-disposition") ?? "";
    const xf = unzip(Buffer.from(await xd.arrayBuffer()));
    check("Daily XLSX: file name, Summary says Daily", xcd.includes("ingot-report-2026-11-16-daily-dhaka.xlsx") && (xf.get("xl/worksheets/sheet1.xml") ?? "").includes("Daily"), xcd);
    const pd = await get(`/admin/reports/print?g=day&p=2026-11-16&tz=Asia%2FDhaka`, cookie);
    const ph = await pd.text();
    check("Print view renders a day", pd.status === 200 && ph.includes("Nov 16, 2026"), String(pd.status));
  }

  // 3) Labels: the week CSV states its explicit dates.
  const wk = parseCsv((await (await get(`/admin/reports/export/csv?dataset=traffic&g=week&p=2026-W47&r=8`, cookie)).text()).replace(/^\uFEFF/, ""));
  const w47 = wk.find((r) => r[0] === "2026-W47");
  check("Week 47, 2026 runs Nov 16 to Nov 22", !!w47 && w47.includes("2026-11-16") && w47.includes("2026-11-22"), w47?.slice(0, 5).join(" | "));
  check("CSV has one header row with units", wk[0].some((h) => h.endsWith("(count)")) && wk.slice(1).every((r) => !r.some((x) => x.endsWith("(count)"))));

  // 4) Formula injection: a crafted source name comes back neutralised.
  execFileSync("npx", ["wrangler", "d1", "execute", "foundry-ui-db", "--local", "--command", `INSERT OR REPLACE INTO referrer_daily (day, source, views) VALUES ('${localDate(nowS, "UTC")}', '=HYPERLINK(1)', 100000)`], { stdio: "ignore" });
  const inj = await (await get(`/admin/reports/export/csv?dataset=traffic&g=week&r=8`, cookie)).text();
  check("CSV neutralises formulas (=HYPERLINK becomes '=HYPERLINK)", inj.includes("'=HYPERLINK(1)") && !/(^|,)=HYPERLINK/m.test(inj));
  execFileSync("npx", ["wrangler", "d1", "execute", "foundry-ui-db", "--local", "--command", `DELETE FROM referrer_daily WHERE source = '=HYPERLINK(1)'`], { stdio: "ignore" });

  // 5) XLSX: valid zip, sheets, frozen header, number formats, the same numbers as the CSV.
  const xr = await get(`/admin/reports/export/xlsx?g=month&p=2026-10&r=12`, cookie);
  const cd = xr.headers.get("content-disposition") ?? "";
  check("XLSX filename ingot-report-2026-10-monthly-utc.xlsx", cd.includes("ingot-report-2026-10-monthly-utc.xlsx"), cd);
  const buf = Buffer.from(await xr.arrayBuffer());
  writeFileSync(`${TMP}/report.xlsx`, buf);
  let zipOk = true;
  try {
    execFileSync("unzip", ["-tq", `${TMP}/report.xlsx`], { stdio: "ignore" });
  } catch {
    zipOk = false;
  }
  check("XLSX passes unzip -t (CRC and structure)", zipOk);
  const files = unzip(buf);
  const wb = files.get("xl/workbook.xml") ?? "";
  const names = [...wb.matchAll(/<sheet [^>]*name="([^"]+)"/g)].map((m) => m[1]);
  check("XLSX sheets: Summary first, then one per dataset", names[0] === "Summary" && names.includes("Traffic") && names.includes("Revenue") && names.length === 9, names.join(", "));
  for (const [name, xml] of files) {
    if (!name.endsWith(".xml") && !name.endsWith(".rels")) continue;
    let ok = true;
    try {
      execFileSync("xmllint", ["--noout", "-"], { input: xml, stdio: ["pipe", "ignore", "ignore"] });
    } catch {
      ok = false;
    }
    if (!ok) check(`XLSX ${name} is well-formed XML`, false);
  }
  const styles = files.get("xl/styles.xml") ?? "";
  check("XLSX number formats: USD, percent, integer, date", /formatCode="&quot;\$&quot;#,##0\.00"/.test(styles) && styles.includes('formatCode="0.0%"') && styles.includes('formatCode="#,##0"') && styles.includes('formatCode="yyyy-mm-dd"'));
  const revSheet = files.get(`xl/worksheets/sheet${names.indexOf("Revenue") + 1}.xml`) ?? "";
  check("XLSX Revenue sheet has a frozen header row and column widths", revSheet.includes('state="frozen"') && revSheet.includes('ySplit="1"') && revSheet.includes("<cols>"));
  const summary = files.get("xl/worksheets/sheet1.xml") ?? "";
  check("XLSX Summary states period, time zone and generated time", summary.includes("October 2026") && summary.includes("UTC") && summary.includes("Generated"));
  // October 2026 gross in the Revenue sheet equals the raw rows.
  const octGross = orders.filter((o) => o.usd !== null && localDate(o.t, "UTC").startsWith("2026-10")).reduce((s, o) => s + (o.usd ?? 0), 0);
  const rowsXml = [...revSheet.matchAll(/<row r="(\d+)"[^>]*>(.*?)<\/row>/g)].map((m) => m[2]);
  const octRow = rowsXml.find((r) => r.includes(">2026-10<"));
  const nums = octRow ? [...octRow.matchAll(/<c r="([A-Z]+)\d+"[^>]*><v>([^<]*)<\/v><\/c>/g)].map((m) => ({ col: m[1], v: Number(m[2]) })) : [];
  const headRow = rowsXml[0] ?? "";
  const heads = [...headRow.matchAll(/<c r="([A-Z]+)1"[^>]*><is><t[^>]*>([^<]*)<\/t><\/is><\/c>/g)].map((m) => ({ col: m[1], t: m[2] }));
  const gCol = heads.find((h) => h.t.startsWith("Gross revenue (USD)"))?.col;
  const gv = nums.find((x) => x.col === gCol)?.v;
  check("XLSX October 2026 gross revenue equals the raw rows", gv !== undefined && Math.round(gv * 100) === octGross, `${gv} vs ${octGross / 100}`);

  // 6) Print view renders for staff, 404/redirect for others.
  const pr = await get(`/admin/reports/print?g=quarter&p=2026-Q3`, cookie);
  const html = await pr.text();
  check("Print view renders Q3 2026 with dates and time zone", pr.status === 200 && html.includes("Q3 2026") && html.includes("Jul 1") && html.includes("UTC"), String(pr.status));

  if (existsSync(`${TMP}/report.xlsx`)) console.log(`XLSX saved to ${TMP}/report.xlsx`);
  console.log(failed ? `\n${failed} check(s) failed` : "\nAll checks passed");
  process.exit(failed ? 1 : 0);
}

await main();
