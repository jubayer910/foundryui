import "server-only";
import { and, desc, eq, isNotNull } from "drizzle-orm";
import { getDb, schema } from "../db";
import { CATEGORIES, codeSlugs, posts, prepare, type Post } from "./index";
import { markdownToPost, safeInline } from "./markdown";

/**
 * Database posts (admin editor, table `post`). Code posts stay static; pages that list both call these at
 * request time, so publishing never needs a redeploy. Every reader fails soft: with no D1 binding (build time)
 * or a failing query they return nothing and the code posts still render.
 */

export type PostRow = typeof schema.post.$inferSelect;

const json = <T,>(s: string | null | undefined, fallback: T): T => {
  try {
    const v = JSON.parse(s ?? "");
    return Array.isArray(v) ? (v as T) : fallback;
  } catch {
    return fallback;
  }
};

const isoDay = (d: Date | null | undefined) => (d ? d.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10));

export const parseFaq = (s: string | null | undefined) =>
  json<unknown[]>(s, [])
    .map((x) => (x && typeof x === "object" ? { q: String((x as { q?: unknown }).q ?? "").trim(), a: String((x as { a?: unknown }).a ?? "").trim() } : null))
    .filter((x): x is { q: string; a: string } => !!x && !!x.q && !!x.a);

export const parseList = (s: string | null | undefined) => json<unknown[]>(s, []).map(String).filter(Boolean);

const category = (c: string): Post["category"] => ((CATEGORIES as readonly string[]).includes(c) ? (c as Post["category"]) : "Guides");

/** A D1 row as a Post, run through the same preparation as code posts. */
export function rowToPost(r: PostRow): Post {
  const { lede, body } = markdownToPost(r.body);
  const date = isoDay(r.publishedAt ?? r.createdAt);
  const updated = isoDay(r.updatedAt);
  return prepare({
    slug: r.slug,
    title: r.title,
    metaTitle: r.metaTitle || undefined,
    description: r.description,
    date,
    updated: updated > date ? updated : undefined,
    category: category(r.category),
    keyword: r.keyword,
    intent: "informational",
    lede,
    body,
    faq: parseFaq(r.faq).map((f) => ({ q: safeInline(f.q), a: safeInline(f.a) })),
    related: parseList(r.related),
    systems: parseList(r.systems),
    cover: r.coverScene || undefined,
    source: "db",
    draft: r.status !== "published",
  });
}

/** Published database posts, newest first. Never includes a slug a code post owns. */
export async function publishedDbPosts(): Promise<Post[]> {
  try {
    const db = await getDb();
    const P = schema.post;
    const rows = await db.select().from(P).where(and(eq(P.status, "published"), isNotNull(P.publishedAt))).orderBy(desc(P.publishedAt));
    return rows.filter((r) => !codeSlugs.has(r.slug)).map(rowToPost);
  } catch {
    return [];
  }
}

/** One database post by slug. Drafts only when `drafts` is true (staff preview). */
export async function dbPost(slug: string, { drafts = false } = {}): Promise<Post | null> {
  if (codeSlugs.has(slug) || !/^[a-z0-9-]{1,100}$/.test(slug)) return null;
  try {
    const db = await getDb();
    const [r] = await db.select().from(schema.post).where(eq(schema.post.slug, slug)).limit(1);
    if (!r || (!drafts && r.status !== "published")) return null;
    return rowToPost(r);
  } catch {
    return null;
  }
}

/** Code posts and published database posts together, newest first. */
export async function allPosts(): Promise<Post[]> {
  const extra = await publishedDbPosts();
  return [...posts, ...extra].sort((a, b) => b.date.localeCompare(a.date));
}
