"use server";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { audit, requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { SCENES } from "@/components/site/illo";
import { back, str } from "@/components/admin/back";

function refresh() {
  revalidatePath("/admin/changelog");
  revalidatePath("/changelog");
}

export async function saveEntry(f: FormData) {
  const { user: me } = await requireStaff("content");
  const id = str(f, "id", 100);
  const date = str(f, "date", 20);
  const title = str(f, "title", 160).replace(/\s+/g, " ");
  const items = str(f, "items", 8000)
    .split("\n")
    .map((l) => l.replace(/^\s*(?:[-*+]|\d+[.)])\s+/, "").trim().slice(0, 300))
    .filter(Boolean);
  const scene = str(f, "scene", 40) || "stack";
  const published = f.get("published") === "on";
  const to = id ? `/admin/changelog?edit=${id}` : "/admin/changelog?new=1";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date + "T00:00:00Z"))) back(to, { err: "Pick the date it shipped." });
  if (title.length < 3) back(to, { err: "Write a title (at least 3 characters)." });
  if (!items.length) back(to, { err: "Add at least one line under What shipped." });
  if (items.length > 20) back(to, { err: "Keep it to 20 lines or fewer." });
  if (!SCENES[scene]) back(to, { err: "Pick an illustration from the list." });
  const db = await getDb();
  const C = schema.changelogEntry;
  const now = new Date();
  const values = { date, title, items: JSON.stringify(items), scene, published, updatedAt: now };
  if (id) {
    const [before] = await db.select().from(C).where(eq(C.id, id)).limit(1);
    if (!before) back("/admin/changelog", { err: "That entry no longer exists." });
    await db.update(C).set(values).where(eq(C.id, id));
    await audit(me.email, "changelog.update", id, { before: { date: before.date, title: before.title, items: before.items, scene: before.scene, published: before.published }, after: { date, title, items, scene, published } });
    refresh();
    back("/admin/changelog", { ok: `Saved "${title}". /changelog shows it now.` });
  }
  const newId = crypto.randomUUID();
  await db.insert(C).values({ id: newId, ...values, createdAt: now });
  await audit(me.email, "changelog.create", newId, { date, title, items, scene, published });
  refresh();
  back("/admin/changelog", { ok: published ? `Added "${title}" to /changelog.` : `Saved "${title}" as hidden.` });
}

export async function toggleEntry(f: FormData) {
  const { user: me } = await requireStaff("content");
  const id = str(f, "id", 100);
  const db = await getDb();
  const C = schema.changelogEntry;
  const [e] = await db.select({ published: C.published, title: C.title }).from(C).where(eq(C.id, id)).limit(1);
  if (!e) back("/admin/changelog", { err: "That entry no longer exists." });
  await db.update(C).set({ published: !e.published, updatedAt: new Date() }).where(eq(C.id, id));
  await audit(me.email, e.published ? "changelog.hide" : "changelog.show", id, { title: e.title });
  refresh();
  back("/admin/changelog", { ok: e.published ? `Hid "${e.title}" from /changelog.` : `"${e.title}" is on /changelog again.` });
}

export async function deleteEntry(f: FormData) {
  const { user: me } = await requireStaff("content");
  const id = str(f, "id", 100);
  const db = await getDb();
  const C = schema.changelogEntry;
  const [e] = await db.select().from(C).where(eq(C.id, id)).limit(1);
  if (!e) back("/admin/changelog", { err: "That entry no longer exists." });
  await db.delete(C).where(eq(C.id, id));
  await audit(me.email, "changelog.delete", id, e);
  refresh();
  back("/admin/changelog", { ok: `Deleted "${e.title}". The full entry is kept in the audit log.` });
}
