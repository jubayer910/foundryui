import "server-only";
import { desc, like, sql } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { posts as codePosts } from "@/lib/blog";

/** One row of the admin post list: a code post (read-only) or a database post (editable). */
export type AdminPostRow = {
  kind: "code" | "db";
  id: string | null;
  slug: string;
  title: string;
  category: string;
  status: "published" | "draft";
  /** ISO day of the last change (code posts: updated or date) */
  updated: string;
  published: string | null;
  views: number;
};

/** All posts with page views summed from pageview_daily (every day kept there). Newest change first. */
export async function listAdminPosts(): Promise<AdminPostRow[]> {
  const db = await getDb();
  const V = schema.pageviewDaily;
  const [rows, views] = await Promise.all([
    db.select().from(schema.post).orderBy(desc(schema.post.updatedAt)),
    db
      .select({ path: V.path, n: sql<number>`sum(${V.views})` })
      .from(V)
      .where(like(V.path, "/blog/%"))
      .groupBy(V.path)
      .catch(() => [] as { path: string; n: number }[]),
  ]);
  const seen = new Map(views.map((v) => [v.path, Number(v.n) || 0]));
  const viewsOf = (slug: string) => seen.get("/blog/" + slug) ?? 0;
  const day = (d: Date | null) => (d ? d.toISOString().slice(0, 10) : null);
  const list: AdminPostRow[] = [
    ...rows.map((r) => ({
      kind: "db" as const,
      id: r.id,
      slug: r.slug,
      title: r.title || "Untitled",
      category: r.category,
      status: r.status === "published" ? ("published" as const) : ("draft" as const),
      updated: day(r.updatedAt)!,
      published: day(r.publishedAt),
      views: viewsOf(r.slug),
    })),
    ...codePosts.map((p) => ({
      kind: "code" as const,
      id: null,
      slug: p.slug,
      title: p.title,
      category: p.category,
      status: "published" as const,
      updated: p.updated ?? p.date,
      published: p.date,
      views: viewsOf(p.slug),
    })),
  ];
  return list.sort((a, b) => b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title));
}
