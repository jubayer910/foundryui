import { after } from "next/server";
import { sql } from "drizzle-orm";
import { getDb, getEnv, schema } from "@/lib/db";

/**
 * First-party page-view counter for components/site/track-beacon.tsx.
 * Privacy: no cookies, no raw rows, no IP or user agent stored. D1 only holds per-day aggregates.
 * Unique visitors: HMAC(secret + day, ip + ua) is kept in D1 table visitor_seen for at most 2 days to answer
 * "seen today?", then deleted. The key changes every day, so visitors can't be followed across days.
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
