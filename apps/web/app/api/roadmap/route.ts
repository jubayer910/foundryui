import { getSessionUser } from "@/lib/auth";
import { getEnv } from "@/lib/db";
import { ROADMAP_IDS } from "@/app/roadmap/items";

/**
 * Roadmap upvotes. GET: vote counts per item plus the items this voter has voted for.
 * POST { item, vote: boolean }: vote or unvote.
 * Voter: the user id when signed in, else an HMAC of a random id kept in an httpOnly cookie
 * (the raw cookie id is never stored). One vote per voter per item (primary key).
 * Rate limit: D1 counter per HMAC(ip) per hour, so votes never write to KV.
 */

const COOKIE = "ingot_voter";
const LIMIT_PER_HOUR = 40;
const YEAR_S = 365 * 86_400;

async function hmacHex(key: string, text: string) {
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(text));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 40);
}

const readCookie = (req: Request) => {
  const m = (req.headers.get("cookie") ?? "").match(new RegExp("(?:^|;\\s*)" + COOKIE + "=([a-f0-9]{32})(?:;|$)"));
  return m?.[1] ?? null;
};

async function currentUserId() {
  try {
    return (await getSessionUser())?.id ?? null;
  } catch {
    return null;
  }
}

async function voterKey(req: Request, secret: string, create: boolean) {
  const uid = await currentUserId();
  if (uid) return { voter: "u:" + uid, setCookie: null as string | null };
  let id = readCookie(req);
  let setCookie: string | null = null;
  if (!id) {
    if (!create) return { voter: null, setCookie };
    id = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
    const secure = new URL(req.url).protocol === "https:" ? "; Secure" : "";
    setCookie = `${COOKIE}=${id}; Path=/api/roadmap; Max-Age=${YEAR_S}; HttpOnly; SameSite=Lax${secure}`;
  }
  return { voter: "a:" + (await hmacHex(secret + "|roadmap-voter", id)), setCookie };
}

const json = (data: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", "cache-control": "no-store", ...extra } });

async function counts(db: CloudflareEnv["DB"]) {
  const { results } = await db.prepare("SELECT item_id, COUNT(*) AS n FROM roadmap_vote GROUP BY item_id").all<{ item_id: string; n: number }>();
  const out: Record<string, number> = {};
  for (const r of results) if (ROADMAP_IDS.has(r.item_id)) out[r.item_id] = r.n;
  return out;
}

export async function GET(req: Request) {
  const env = await getEnv();
  const { voter } = await voterKey(req, env.BETTER_AUTH_SECRET ?? "ingot", false);
  const [c, mine] = await Promise.all([
    counts(env.DB),
    voter ? env.DB.prepare("SELECT item_id FROM roadmap_vote WHERE voter = ?").bind(voter).all<{ item_id: string }>().then((r: { results: { item_id: string }[] }) => r.results.map((x) => x.item_id)) : Promise.resolve([]),
  ]);
  return json({ counts: c, mine });
}

export async function POST(req: Request) {
  // Same-origin only: a vote must come from our own page, not a form on another site.
  const origin = req.headers.get("origin");
  if (origin) {
    let same = false;
    try {
      same = new URL(origin).host === new URL(req.url).host;
    } catch {}
    if (!same) return json({ error: "bad_origin" }, 403);
  }

  let body: { item?: unknown; vote?: unknown } = {};
  try {
    body = await req.json();
  } catch {}
  const item = typeof body.item === "string" ? body.item : "";
  if (!ROADMAP_IDS.has(item) || typeof body.vote !== "boolean") return json({ error: "bad_request" }, 400);

  const env = await getEnv();
  const secret = env.BETTER_AUTH_SECRET ?? "ingot";
  const db = env.DB;

  const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";
  const win = Math.floor(Date.now() / 3_600_000);
  const ipKey = await hmacHex(secret + "|roadmap-ip", ip);
  const hit = await db
    .prepare("INSERT INTO roadmap_rate (key, win, hits) VALUES (?, ?, 1) ON CONFLICT(key, win) DO UPDATE SET hits = hits + 1 RETURNING hits")
    .bind(ipKey, win)
    .first<{ hits: number }>();
  if ((hit?.hits ?? 0) > LIMIT_PER_HOUR) return json({ error: "rate_limited" }, 429, { "retry-after": "3600" });
  if (Math.random() < 0.02) await db.prepare("DELETE FROM roadmap_rate WHERE win < ?").bind(win - 1).run();

  const { voter, setCookie } = await voterKey(req, secret, true);
  if (!voter) return json({ error: "no_voter" }, 400);

  if (body.vote) await db.prepare("INSERT OR IGNORE INTO roadmap_vote (item_id, voter, created_at) VALUES (?, ?, ?)").bind(item, voter, Date.now()).run();
  else await db.prepare("DELETE FROM roadmap_vote WHERE item_id = ? AND voter = ?").bind(item, voter).run();

  const n = await db.prepare("SELECT COUNT(*) AS n FROM roadmap_vote WHERE item_id = ?").bind(item).first<{ n: number }>();
  return json({ item, voted: body.vote, count: n?.n ?? 0 }, 200, setCookie ? { "set-cookie": setCookie } : {});
}
