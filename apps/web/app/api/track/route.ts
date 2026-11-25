import { after } from "next/server";
import { sql } from "drizzle-orm";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getDb, getEnv, schema } from "@/lib/db";
import { browserOf, countryOf, deviceOf, osOf } from "@/lib/analytics/ua";

/**
 * First-party page-view counter for components/site/track-beacon.tsx.
 * Privacy: no cookies, no raw rows, no IP or user agent stored. D1 only holds per-day aggregates.
 * Unique visitors: HMAC(secret + day, ip + ua) is kept in D1 table visitor_seen for at most 2 days to answer
 * "seen today?", then deleted. The key changes every day, so visitors can't be followed across days.
 *
 * Behaviour (stat_daily, see migrations/0020): a landing view also counts the visit's country (Cloudflare's
 * cf-ipcountry), device, browser and OS class, landing page and campaign; every view counts its UTC hour and,
 * inside the site, the page it came from. Engagement beacons ({ t: "e" }) bring engaged seconds, scroll depth,
 * the exit page and clicks on buttons and links (label and target only). Still no identifiers anywhere.
 */

const BOT = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link|whatsapp|telegram|discord|preview|headless|phantom|puppeteer|playwright|selenium|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|curl|wget|python|httpclient|axios|node-fetch|go-http|java\/|okhttp|libwww|scrapy|ahrefs|semrush|mj12|dotbot|petal|yandex|baidu|bytespider|gptbot|claude|anthropic|perplexity|ccbot/i;
const DAY_S = 86_400;

const ALIAS: [RegExp, string][] = [
  [/(^|\.)google\.[a-z.]+$/, "google"],
  [/(^|\.)bing\.com$/, "bing"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo"],
  [/(^|\.)(t\.co|twitter\.com|x\.com)$/, "x.com"],
  [/(^|\.)facebook\.com$/, "facebook"],
  [/(^|\.)instagram\.com$/, "instagram"],
  [/(^|\.)linkedin\.com$|^lnkd\.in$/, "linkedin"],
  [/(^|\.)reddit\.com$/, "reddit"],
  [/(^|\.)youtube\.com$/, "youtube"],
  [/(^|\.)(chatgpt\.com|openai\.com)$/, "chatgpt"],
  [/(^|\.)perplexity\.ai$/, "perplexity"],
  [/(^|\.)github\.com$/, "github"],
];

function cleanPath(p: unknown): string | null {
  if (typeof p !== "string" || !p.startsWith("/") || p.length > 200) return null;
  let path = p.split(/[?#]/)[0];
  if (!/^\/[A-Za-z0-9\-._~/%:@]*$/.test(path)) return null;
  if (path.length > 1) path = path.replace(/\/+$/, "") || "/";
  if (/^\/(admin|api|_next)(\/|$)/.test(path)) return null;
  return path;
}

function cleanSource(ref: unknown, utm: unknown, ownHost: string): string {
  if (typeof utm === "string") {
    const u = utm.toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, 40);
    if (u) return u;
  }
  if (typeof ref === "string" && ref) {
    const h = ref.toLowerCase().replace(/^www\./, "");
    if (h.length <= 80 && /^[a-z0-9.-]+$/.test(h) && h.includes(".")) {
      if (h === ownHost.replace(/^www\./, "")) return "direct";
      for (const [re, name] of ALIAS) if (re.test(h)) return name;
      return h;
    }
  }
  return "direct";
}

/** HMAC-SHA256(secret, text) as hex. The key rotates daily (secret + day), so hashes can't be linked across days. */
async function hmacHex(key: string, text: string) {
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(text));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 40);
}

const NO = () => new Response(null, { status: 204 });

const word = (v: unknown, max = 40) => (typeof v === "string" ? v.toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, max) : "");

/** Click label as shown on screen: one line, no emails or long numbers, at most 48 characters. */
function cleanLabel(v: unknown): string {
  if (typeof v !== "string") return "";
  return v
    .replace(/[\u0000-\u001f\u007f\t]/g, " ")
    .replace(/[^\s@]+@[^\s@]+\.[^\s@]+/g, "(email)")
    .replace(/\d{5,}/g, "#")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 48);
}

/** Outbound target: the host only. */
function cleanHost(v: unknown): string {
  if (typeof v !== "string") return "";
  const h = v.toLowerCase().replace(/^www\./, "");
  return h.length <= 80 && /^[a-z0-9.-]+\.[a-z]{2,}$/.test(h) ? h : "";
}

type Stat = { kind: string; key: string; n: number };

async function writeStats(day: string, stats: Stat[]) {
  if (!stats.length) return;
  const db = await getDb();
  const S = schema.statDaily;
  const merged = new Map<string, Stat>();
  for (const x of stats) {
    if (!x.n || x.key.length > 300) continue;
    const id = x.kind + "\n" + x.key;
    const m = merged.get(id);
    if (m) m.n += x.n;
    else merged.set(id, { ...x });
  }
  const writes = [...merged.values()].map((x) =>
    db.insert(S).values({ day, kind: x.kind, key: x.key, n: x.n }).onConflictDoUpdate({ target: [S.day, S.kind, S.key], set: { n: sql`${S.n} + ${x.n}` } }),
  );
  if (writes.length) await db.batch(writes as unknown as Parameters<typeof db.batch>[0]);
}

/** Engagement beacon: time on page, scroll depth, exit page and clicks. */
function engage(body: Record<string, unknown>): Stat[] {
  const out: Stat[] = [];
  const pages = Array.isArray(body.pages) ? body.pages.slice(0, 6) : [];
  for (const p of pages as Record<string, unknown>[]) {
    const path = cleanPath(p?.path);
    if (!path) continue;
    const secs = Math.round(Number(p.secs));
    if (Number.isFinite(secs) && secs >= 1) out.push({ kind: "time", key: path, n: Math.min(secs, 1800) });
    // cont = 1: more time for a view already measured (the tab was hidden and came back), not a new view
    if (Number.isFinite(secs) && secs >= 1 && p.cont !== 1) {
      out.push({ kind: "timen", key: path, n: 1 });
      const sc = Number(p.scroll);
      const b = sc >= 95 ? 100 : sc >= 75 ? 75 : sc >= 50 ? 50 : sc >= 25 ? 25 : 0;
      out.push({ kind: "scroll", key: path + "\t" + b, n: 1 });
    }
    if (p.exit === 1) out.push({ kind: "exit", key: path, n: 1 });
  }
  const clicks = Array.isArray(body.clicks) ? body.clicks.slice(0, 25) : [];
  for (const c of clicks as Record<string, unknown>[]) {
    const path = cleanPath(c?.path);
    const kind = c?.kind === "link" || c?.kind === "out" || c?.kind === "button" ? (c.kind as string) : null;
    const label = cleanLabel(c?.label);
    if (!path || !kind || !label) continue;
    const target = kind === "out" ? cleanHost(c.target) : kind === "link" ? (cleanPath(c.target) ?? "") : "";
    if (kind === "out" && !target) continue;
    out.push({ kind: "click", key: [path, kind, label, target].join("\t"), n: 1 });
  }
  return out;
}

export async function POST(req: Request) {
  const ua = req.headers.get("user-agent") ?? "";
  if (!ua || BOT.test(ua)) return NO();
  const dnt = req.headers.get("dnt") === "1" || req.headers.get("sec-gpc") === "1";
  if (dnt) return NO();
  let body: { t?: unknown; path?: unknown; ref?: unknown; utm?: unknown; med?: unknown; cmp?: unknown; l?: unknown; from?: unknown; v2?: unknown } | null = null;
  try {
    body = JSON.parse((await req.text()).slice(0, 16_000));
  } catch {}
  if (body?.t === "e") {
    const stats = engage(body as Record<string, unknown>);
    if (stats.length)
      after(async () => {
        try {
          await writeStats(new Date().toISOString().slice(0, 10), stats);
        } catch {}
      });
    return NO();
  }
  const path = cleanPath(body?.path);
  if (!path) return NO();
  const host = new URL(req.url).hostname;
  const landing = body?.l === 1;
  const source = landing ? cleanSource(body?.ref, body?.utm, host) : null;
  const from = body?.l === 1 ? null : cleanPath(body?.from);
  let country = req.headers.get("cf-ipcountry");
  if (!country && landing) {
    try {
      country = ((await getCloudflareContext({ async: true })).cf as { country?: string } | undefined)?.country ?? null;
    } catch {}
  }
  const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";

  after(async () => {
    try {
      // No KV writes on this path: the KV free tier allows 1,000 writes a day, which page views would use up.
      const env = await getEnv();
      const now = new Date();
      const day = now.toISOString().slice(0, 10);
      const hash = await hmacHex((env.BETTER_AUTH_SECRET ?? "ingot") + "|visitors|" + day, ip + "|" + ua);

      const db = await getDb();
      const P = schema.pageviewDaily;
      const R = schema.referrerDaily;
      const V = schema.visitorDaily;
      // First sight of this visitor today? INSERT OR IGNORE reports a change only for a new row.
      const seen = await db.run(sql`INSERT OR IGNORE INTO visitor_seen (day, hash) VALUES (${day}, ${hash})`);
      const isNew = ((seen as { meta?: { changes?: number } }).meta?.changes ?? 0) > 0;
      const writes = [db.insert(P).values({ day, path, views: 1 }).onConflictDoUpdate({ target: [P.day, P.path], set: { views: sql`${P.views} + 1` } })] as const;
      const extra = [];
      if (source) extra.push(db.insert(R).values({ day, source, views: 1 }).onConflictDoUpdate({ target: [R.day, R.source], set: { views: sql`${R.views} + 1` } }));
      if (isNew) extra.push(db.insert(V).values({ day, visitors: 1 }).onConflictDoUpdate({ target: V.day, set: { visitors: sql`${V.visitors} + 1` } }));
      await db.batch([...writes, ...extra]);
      const stats: Stat[] = [{ kind: "hour", key: now.toISOString().slice(11, 13), n: 1 }];
      if (landing) {
        stats.push(
          { kind: "country", key: countryOf(country), n: 1 },
          { kind: "device", key: deviceOf(ua), n: 1 },
          { kind: "browser", key: browserOf(ua), n: 1 },
          { kind: "os", key: osOf(ua), n: 1 },
          { kind: "landing", key: path, n: 1 },
          { kind: "srcland", key: (source ?? "direct") + "\t" + path, n: 1 },
        );
        const med = word(body?.med);
        const cmp = word(body?.cmp, 60);
        if (med) stats.push({ kind: "medium", key: med, n: 1 });
        if (cmp) stats.push({ kind: "campaign", key: cmp, n: 1 });
      }
      if (from && from !== path) stats.push({ kind: "flow", key: from + "\t" + path, n: 1 });
      if (!landing && body?.v2 === 1) stats.push({ kind: "p2", key: "", n: 1 });
      await writeStats(day, stats);
      // Forget visitor hashes after two days (cheap, runs on about 1 in 200 views).
      if (Math.random() < 0.005) {
        const cutoff = new Date(now.getTime() - 2 * DAY_S * 1000).toISOString().slice(0, 10);
        await db.run(sql`DELETE FROM visitor_seen WHERE day < ${cutoff}`);
      }
    } catch {
      // Analytics must never break the site.
    }
  });
  return NO();
}
