import "server-only";
import { asc, desc, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";

/** Changelog entries in D1 (table changelog_entry, seeded in migrations/0006_content.sql from the old static list). */
export type ChangelogEntry = { id: string; date: string; title: string; items: string[]; scene: string; published: boolean; updatedAt: Date };

const items = (s: string) => {
  try {
    const v = JSON.parse(s);
    return Array.isArray(v) ? v.map(String).filter(Boolean) : [];
  } catch {
    return [];
  }
};

/** Newest first; same-day entries in the order they were added (newest first). `all` includes hidden entries (admin). */
export async function listChangelog({ all = false } = {}): Promise<ChangelogEntry[]> {
  const db = await getDb();
  const C = schema.changelogEntry;
  const q = db.select().from(C);
  const rows = await (all ? q : q.where(eq(C.published, true))).orderBy(desc(C.date), desc(C.createdAt), asc(C.id));
  return rows.map((r) => ({ id: r.id, date: r.date, title: r.title, items: items(r.items), scene: r.scene, published: r.published, updatedAt: r.updatedAt }));
}

/** "Nov 09, 2026", the format the page always used. */
export const fmtChangelogDate = (d: string) => new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric", timeZone: "UTC" });
