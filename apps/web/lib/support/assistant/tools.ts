import "server-only";
import { and, asc, count, eq, gte } from "drizzle-orm";
import { getSessionUser, type SessionUser } from "../../auth";
import { getDb, getEnv, schema } from "../../db";
import { dealRule, getEffectivePlan, getPriceBook, isPaid, planLabel } from "../../plans";
import { Assistant, type Tools } from "./engine";
import { iconWords, searchIconMeta, type IconMeta } from "./icons";
import type { AccountInfo, IconHit, PricingInfo } from "./types";
import type { KbLike } from "../match";

/** Free accounts: MCP calls a day (the limit quoted on /pricing and /mcp). */
const MCP_FREE_DAILY = 50;
const KB_TTL = 60_000;

/* ---------- KB snapshot in isolate memory (one D1 read a minute, no KV writes) ---------- */

let snap: { at: number; engine: Assistant } | null = null;
let loading: Promise<Assistant> | null = null;

async function loadArticles(): Promise<KbLike[]> {
  const db = await getDb();
  return db
    .select({ id: schema.kbArticle.id, slug: schema.kbArticle.slug, question: schema.kbArticle.question, answer: schema.kbArticle.answer, keywords: schema.kbArticle.keywords, category: schema.kbArticle.category })
    .from(schema.kbArticle)
    .where(eq(schema.kbArticle.published, true))
    .orderBy(asc(schema.kbArticle.category));
}

/** The engine for the current KB, rebuilt at most once a minute per isolate. Never throws. */
export async function getAssistant(): Promise<Assistant> {
  if (snap && Date.now() - snap.at < KB_TTL) return snap.engine;
  if (!loading)
    loading = loadArticles()
      .catch(() => (snap ? snap.engine.kb.articles : []))
      .then((rows) => {
        const engine = new Assistant(rows);
        snap = { at: Date.now(), engine };
        return engine;
      })
      .finally(() => {
        loading = null;
      });
  return loading;
}

/* ---------- icons from the static assets (cached per isolate) ---------- */

let iconMeta: Promise<IconMeta[]> | null = null;
let iconBodies: Promise<Record<string, string>> | null = null;

async function asset<T>(path: string, origin: string): Promise<T> {
  try {
    const env = await getEnv();
    const assets = (env as unknown as { ASSETS?: { fetch(u: string): Promise<Response> } }).ASSETS;
    if (assets) {
      const r = await assets.fetch(new URL(path, "https://assets.local").toString());
      if (r.ok) return (await r.json()) as T;
    }
  } catch {}
  const r = await fetch(new URL(path, origin));
  if (!r.ok) throw new Error("asset " + path + " " + r.status);
  return (await r.json()) as T;
}

function iconSvg(body: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="#0b0b0b">${body}</svg>`;
}

/* ---------- the tool set for one request ---------- */

export function requestTools(origin: string, user: () => Promise<SessionUser | null>): Tools {
  return {
    iconWords,
    async icons(words, limit) {
      iconMeta ??= asset<IconMeta[]>("/icons/index.json", origin).catch((e) => {
        iconMeta = null;
        throw e;
      });
      const meta = await iconMeta.catch(() => [] as IconMeta[]);
      const res = searchIconMeta(meta, words, limit);
      iconBodies ??= asset<Record<string, string>>("/icons/stroke-rounded.json", origin).catch(() => {
        iconBodies = null;
        return {};
      });
      const bodies = await iconBodies;
      const items: IconHit[] = res.items.map((m) => ({ name: m.n, category: m.c, svg: bodies[m.n] ? iconSvg(bodies[m.n]) : null, url: "/icons?q=" + encodeURIComponent(m.n) }));
      return { items, total: res.total };
    },
    async pricing(): Promise<PricingInfo | null> {
      try {
        const pb = await getPriceBook();
        return {
          monthly: pb.monthly,
          proMonthly: pb.proMonthly,
          proYearly: pb.proYearly,
          teamMonthly: pb.teamMonthly,
          teamYearly: pb.teamYearly,
          teamSeats: pb.teamSeats,
          lifetime: pb.lifetime,
          lifetimeAfter: pb.settings.prices.lifetimeAfter,
          dealActive: pb.dealActive,
          dealSpotsLeft: pb.deal.enabled && pb.deal.showSpots ? pb.deal.left : null,
          dealEndsAt: pb.dealActive ? pb.deal.endsAt : null,
          dealRule: dealRule(pb),
        };
      } catch {
        return null;
      }
    },
    async account(): Promise<AccountInfo> {
      const u = await user().catch(() => null);
      if (!u) return { signedIn: false };
      const plan = await getEffectivePlan(u).catch(() => u.plan ?? "free");
      const paid = isPaid(plan);
      const since = new Date(new Date().toISOString().slice(0, 10) + "T00:00:00Z");
      let actionsToday = 0;
      let mcpToday = 0;
      let apiKeys = 0;
      try {
        const db = await getDb();
        const E = schema.usageEvent;
        const [rows, keys] = await Promise.all([
          db.select({ client: E.client, n: count() }).from(E).where(and(eq(E.userId, u.id), gte(E.createdAt, since))).groupBy(E.client),
          db.select({ n: count() }).from(schema.apiKey).where(eq(schema.apiKey.userId, u.id)),
        ]);
        for (const r of rows) {
          if (r.client === "mcp") mcpToday += r.n;
          else actionsToday += r.n;
        }
        apiKeys = keys[0]?.n ?? 0;
      } catch {}
      return { signedIn: true, name: u.name, plan, planLabel: planLabel(plan), paid, actionsToday, mcpToday, mcpLimit: paid ? null : MCP_FREE_DAILY, apiKeys };
    },
  };
}

/** Session user, looked up at most once per request. */
export function lazyUser(): () => Promise<SessionUser | null> {
  let p: Promise<SessionUser | null> | null = null;
  return () => (p ??= getSessionUser().catch(() => null));
}
