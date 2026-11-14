import { after } from "next/server";
import { sql } from "drizzle-orm";
import { getDb, getEnv, schema } from "@/lib/db";
import { sha256Hex } from "@/lib/hash";

/**
 * First-party page-view counter for components/site/track-beacon.tsx.
 * Privacy: no cookies, no raw rows, no IP or user agent stored. D1 only holds per-day aggregates.
 * Unique visitors: sha256(daily random salt + day + ip + ua) is kept in KV for 2 days to answer
 * "seen today?", then expires. The salt itself lives in KV for 2 days and is never written to D1.
 */

const BOT = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link|whatsapp|telegram|discord|preview|headless|phantom|puppeteer|playwright|selenium|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|curl|wget|python|httpclient|axios|node-fetch|go-http|java\/|okhttp|libwww|scrapy|ahrefs|semrush|mj12|dotbot|petal|yandex|baidu|bytespider|gptbot|claude|anthropic|perplexity|ccbot/i;
const PER_MINUTE = 60; // beacons per IP per minute
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

const salts = new Map<string, string>();
async function dailySalt(kv: CloudflareEnv["KV"], day: string) {
  const hit = salts.get(day);
  if (hit) return hit;
  const key = "trk:salt:" + day;
  let s = await kv.get(key);
  if (!s) {
    s = crypto.randomUUID() + crypto.randomUUID();
    await kv.put(key, s, { expirationTtl: 2 * DAY_S });
  }
  salts.clear();
  salts.set(day, s);
  return s;
}

const NO = () => new Response(null, { status: 204 });

export async function POST(req: Request) {
  const ua = req.headers.get("user-agent") ?? "";
  if (!ua || BOT.test(ua)) return NO();
  const dnt = req.headers.get("dnt") === "1" || req.headers.get("sec-gpc") === "1";
  if (dnt) return NO();
  let body: { path?: unknown; ref?: unknown; utm?: unknown; l?: unknown } | null = null;
  try {
    body = JSON.parse(await req.text());
  } catch {}
  const path = cleanPath(body?.path);
  if (!path) return NO();
  const host = new URL(req.url).hostname;
  const landing = body?.l === 1;
  const source = landing ? cleanSource(body?.ref, body?.utm, host) : null;
  const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";

  after(async () => {
    try {
      const env = await getEnv();
      const kv = env.KV;
      const now = new Date();
      const day = now.toISOString().slice(0, 10);
      const salt = await dailySalt(kv, day);

      // Rate limit per IP (key is a salted hash, not the IP). KV minimum TTL is 60 s.
      const minute = Math.floor(now.getTime() / 60_000);
      const rlKey = "trk:rl:" + (await sha256Hex(salt + "|rl|" + ip)).slice(0, 32) + ":" + minute;
      const used = Number((await kv.get(rlKey)) ?? 0);
      if (used >= PER_MINUTE) return;

      const vKey = "trk:v:" + day + ":" + (await sha256Hex(salt + "|" + day + "|" + ip + "|" + ua));
      const seen = await kv.get(vKey);

      const db = await getDb();
      const P = schema.pageviewDaily;
      const R = schema.referrerDaily;
      const V = schema.visitorDaily;
      const writes = [db.insert(P).values({ day, path, views: 1 }).onConflictDoUpdate({ target: [P.day, P.path], set: { views: sql`${P.views} + 1` } })] as const;
      const extra = [];
      if (source) extra.push(db.insert(R).values({ day, source, views: 1 }).onConflictDoUpdate({ target: [R.day, R.source], set: { views: sql`${R.views} + 1` } }));
      if (!seen) extra.push(db.insert(V).values({ day, visitors: 1 }).onConflictDoUpdate({ target: V.day, set: { visitors: sql`${V.visitors} + 1` } }));
      await Promise.all([
        db.batch([...writes, ...extra]),
        kv.put(rlKey, String(used + 1), { expirationTtl: 60 }),
        seen ? null : kv.put(vKey, "1", { expirationTtl: 2 * DAY_S }),
      ]);
    } catch {
      // Analytics must never break the site.
    }
  });
  return NO();
}
