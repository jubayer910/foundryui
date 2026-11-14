"use server";
import { revalidatePath } from "next/cache";
import { and, eq, ne } from "drizzle-orm";
import { audit, requireAdmin } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { back, str } from "@/components/admin/back";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

function refresh() {
  revalidatePath("/admin/kb");
  revalidatePath("/support");
}

export async function saveArticle(f: FormData) {
  const me = await requireAdmin();
  const id = str(f, "id", 100);
  const question = str(f, "question", 300);
  const answer = str(f, "answer", 20000);
  const keywords = str(f, "keywords", 1000)
    .split(",")
    .map((k) => k.trim().toLowerCase())
    .filter(Boolean)
    .join(", ");
  const category = str(f, "category", 60) || "General";
  const slug = slugify(str(f, "slug", 120) || question);
  const published = f.get("published") === "on";
  const fromTicket = str(f, "fromTicket", 100);
  const to = id ? `/admin/kb?edit=${id}` : fromTicket ? `/admin/kb?from=${encodeURIComponent(fromTicket)}` : "/admin/kb?new=1";
  if (question.length < 5) back(to, { err: "Write the question (at least 5 characters)." });
  if (answer.length < 10) back(to, { err: "Write the answer (at least 10 characters)." });
  if (!slug) back(to, { err: "The slug is empty: use letters or numbers in the question." });
  const db = await getDb();
  const A = schema.kbArticle;
  const [clash] = await db.select({ id: A.id }).from(A).where(id ? and(eq(A.slug, slug), ne(A.id, id)) : eq(A.slug, slug)).limit(1);
  if (clash) back(to, { err: `Another article already uses the slug "${slug}". Change the slug.` });
  const now = new Date();
  if (id) {
    const [before] = await db.select().from(A).where(eq(A.id, id)).limit(1);
    if (!before) back("/admin/kb", { err: "That article no longer exists." });
    await db.update(A).set({ question, answer, keywords, category, slug, published, updatedAt: now }).where(eq(A.id, id));
    await audit(me.email, "kb.update", id, { slug, published, changed: { question: before.question !== question, answer: before.answer !== answer, keywords: before.keywords !== keywords, category: before.category !== category } });
    refresh();
    back(`/admin/kb?edit=${id}`, { ok: "Article saved." });
  }
  const newId = crypto.randomUUID();
  await db.insert(A).values({ id: newId, slug, question, answer, keywords, category, published, updatedAt: now });
  await audit(me.email, "kb.create", newId, { slug, category, published, fromTicket: fromTicket || null });
  refresh();
  back(`/admin/kb?edit=${newId}`, { ok: "Article created." });
}

export async function togglePublished(f: FormData) {
  const me = await requireAdmin();
  const id = str(f, "id", 100);
  const db = await getDb();
  const A = schema.kbArticle;
  const [a] = await db.select({ published: A.published, slug: A.slug }).from(A).where(eq(A.id, id)).limit(1);
  if (!a) back("/admin/kb", { err: "That article no longer exists." });
  await db.update(A).set({ published: !a.published, updatedAt: new Date() }).where(eq(A.id, id));
  await audit(me.email, a.published ? "kb.unpublish" : "kb.publish", id, { slug: a.slug });
  refresh();
  back(str(f, "back", 300) || "/admin/kb", { ok: a.published ? `Unpublished "${a.slug}".` : `Published "${a.slug}".` }, "/admin/kb");
}

export async function deleteArticle(f: FormData) {
  const me = await requireAdmin();
  const id = str(f, "id", 100);
  const db = await getDb();
  const A = schema.kbArticle;
  const [a] = await db.select().from(A).where(eq(A.id, id)).limit(1);
  if (!a) back("/admin/kb", { err: "That article no longer exists." });
  await db.delete(A).where(eq(A.id, id));
  await audit(me.email, "kb.delete", id, { slug: a.slug, question: a.question, answer: a.answer, keywords: a.keywords, category: a.category });
  refresh();
  back("/admin/kb", { ok: `Deleted "${a.question}". The full text is kept in the audit log.` });
}
