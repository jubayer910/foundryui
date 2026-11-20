"use server";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { audit, requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { applyContent } from "@/lib/content/store";
import { EDITABLE_PAGES } from "@/lib/content/pages";

export type SaveResult = { ok?: string; err?: string; changed?: number };

/** Save one page's text. `changes`: key → new text, or null to go back to the text in the code. */
export async function savePageContent(path: string, changes: Record<string, string | null>): Promise<SaveResult> {
  const { user: me } = await requireStaff("content");
  if (!EDITABLE_PAGES.some((p) => p.path === path)) return { err: "Unknown page." };
  if (Object.keys(changes).length > 300) return { err: "Too many fields at once." };
  const { before, after } = await applyContent(changes);
  const n = Object.keys(after).length;
  if (!n) return { ok: "Nothing changed.", changed: 0 };
  await audit(me.email, "content.edit", path, { before, after });
  revalidatePath("/admin/pages");
  return { ok: `Saved ${n} ${n === 1 ? "change" : "changes"}. Visitors see it within a minute.`, changed: n };
}

/** Put back what an earlier save replaced. */
export async function undoContentEdit(id: number): Promise<SaveResult> {
  const { user: me } = await requireStaff("content");
  const db = await getDb();
  const [row] = await db.select().from(schema.auditLog).where(eq(schema.auditLog.id, id));
  if (!row || row.action !== "content.edit" || !row.detail) return { err: "That change can't be undone." };
  const { before } = JSON.parse(row.detail) as { before: Record<string, string | null> };
  const { before: b, after } = await applyContent(before);
  const n = Object.keys(after).length;
  if (!n) return { ok: "Already back to that version.", changed: 0 };
  await audit(me.email, "content.edit", row.target ?? undefined, { before: b, after, undo: id });
  revalidatePath("/admin/pages");
  return { ok: `Undone. ${n} ${n === 1 ? "field" : "fields"} back to the earlier text.`, changed: n };
}

export async function recentContentEdits(limit = 30) {
  const db = await getDb();
  const rows = await db.select().from(schema.auditLog).where(eq(schema.auditLog.action, "content.edit")).orderBy(desc(schema.auditLog.id)).limit(limit);
  return rows.map((r) => {
    let keys: string[] = [];
    let undo: number | null = null;
    try {
      const d = JSON.parse(r.detail || "{}");
      keys = Object.keys(d.after || {});
      undo = d.undo ?? null;
    } catch {}
    return { id: r.id, actor: r.actor, path: r.target || "", keys, undo, at: r.createdAt.toISOString() };
  });
}
