import "server-only";
import { asc, eq, sql } from "drizzle-orm";
import { getDb, getEnv, schema } from "../db";
import type { KbLike } from "./match";

/** Category order on /support and in the widget. Anything else sorts after, alphabetically. */
export const KB_CATEGORIES = ["Billing", "Licence", "Install", "MCP and agents", "Figma", "Account"] as const;

/** KV cache of the published articles (60 s). Admin edits should delete this key (W3). */
export const KB_CACHE_KEY = "kb:published:v1";

export type KbArticle = KbLike;

/** Published articles, cached in KV for 60 s. Never throws: an empty list keeps pages rendering. */
export async function getPublishedArticles(): Promise<KbArticle[]> {
  try {
    const env = await getEnv();
    const cached = await env.KV.get(KB_CACHE_KEY, "json").catch(() => null);
    if (Array.isArray(cached)) return cached as KbArticle[];
    const db = await getDb();
    const rows = await db
      .select({ id: schema.kbArticle.id, slug: schema.kbArticle.slug, question: schema.kbArticle.question, answer: schema.kbArticle.answer, keywords: schema.kbArticle.keywords, category: schema.kbArticle.category })
      .from(schema.kbArticle)
      .where(eq(schema.kbArticle.published, true))
      .orderBy(asc(schema.kbArticle.category), sql`rowid`); // seed order = most asked first
    await env.KV.put(KB_CACHE_KEY, JSON.stringify(rows), { expirationTtl: 60 }).catch(() => {});
    return rows;
  } catch {
    return [];
  }
}

export function groupByCategory<T extends { category: string }>(articles: T[]): [string, T[]][] {
  const map = new Map<string, T[]>();
  for (const a of articles) map.set(a.category, [...(map.get(a.category) ?? []), a]);
  const rank = (c: string) => {
    const i = (KB_CATEGORIES as readonly string[]).indexOf(c);
    return i < 0 ? 99 : i;
  };
  return [...map.entries()].sort((a, b) => rank(a[0]) - rank(b[0]) || a[0].localeCompare(b[0]));
}
