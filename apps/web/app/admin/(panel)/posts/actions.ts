"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { and, eq, ne } from "drizzle-orm";
import { audit, requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { CATEGORIES, codeSlugs, slugify } from "@/lib/blog";
import { POSTS as RAW_POSTS } from "@/lib/blog/posts";
import { blocksToMarkdown } from "@/lib/blog/markdown";
import { entries } from "@/lib/library";
import { systems as SYSTEMS } from "@/lib/catalog";
import { POST_SCENE, SCENES } from "@/components/site/illo";
import { back, str } from "@/components/admin/back";

export type PostFormState = { ok?: string; err?: string; field?: string; at?: number };

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const known = new Set(entries.map((e) => e.slug));
const systemSlugs = new Set(SYSTEMS.map((s) => s.slug));

function refresh(id: string, ...slugs: string[]) {
  revalidatePath("/admin/posts");
  revalidatePath(`/admin/posts/${id}`);
  // Public pages read D1 per request; this only drops any client router cache of them.
  revalidatePath("/blog");
  for (const s of slugs) if (s) revalidatePath(`/blog/${s}`);
}

const list = (s: string) =>
  s
    .split(/[\s,]+/)
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);

/** Parse and check the editor form. Returns the row values or an error naming the field. */
function readForm(f: FormData) {
  const title = str(f, "title", 200).replace(/\s+/g, " ");
  const slug = (str(f, "slug", 120) || slugify(title)).toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  const description = str(f, "description", 400).replace(/\s+/g, " ");
  const metaTitle = str(f, "metaTitle", 120).replace(/\s+/g, " ");
  const category = str(f, "category", 40);
  const keyword = str(f, "keyword", 120);
  const scene = str(f, "coverScene", 40);
  const body = String(f.get("body") ?? "").replace(/\r\n?/g, "\n").slice(0, 100_000);
  const related = [...new Set(list(str(f, "related", 2000)))];
  const systems = [...new Set(f.getAll("systems").map(String))].filter((s) => systemSlugs.has(s));
  const qs = f.getAll("faq_q").map((x) => String(x).trim().slice(0, 300));
  const as = f.getAll("faq_a").map((x) => String(x).trim().slice(0, 3000));
  const faq = qs.map((q, i) => ({ q, a: as[i] ?? "" })).filter((x) => x.q || x.a);
  const dateIn = str(f, "date", 20);

  const fail = (field: string, err: string) => ({ error: { field, err } as const });
  if (title.length < 5) return fail("title", "Write a title (at least 5 characters).");
  if (!slug || !SLUG_RE.test(slug) || slug.length > 80) return fail("slug", "The slug takes lowercase letters, numbers and dashes (up to 80).");
  if (codeSlugs.has(slug)) return fail("slug", `"${slug}" belongs to a post in the code. Pick another slug.`);
  if (!(CATEGORIES as readonly string[]).includes(category)) return fail("category", "Pick a category.");
  if (description.length > 300) return fail("description", "Keep the description under 300 characters (about 155 show in Google).");
  if (metaTitle.length > 90) return fail("metaTitle", "Keep the meta title under 90 characters (about 60 show in Google).");
  if (scene && !SCENES[scene]) return fail("coverScene", "Pick a cover from the list.");
  const unknown = related.filter((s) => !known.has(s));
  if (unknown.length) return fail("related", `No component with the slug ${unknown.map((s) => `"${s}"`).join(", ")}.`);
  if (related.length > 8) return fail("related", "Pick up to 8 related components.");
  if (faq.some((x) => !x.q || !x.a)) return fail("faq", "Every FAQ row needs a question and an answer (or remove the row).");
  if (faq.length > 12) return fail("faq", "Up to 12 FAQ rows.");
  let date: Date | null = null;
  if (dateIn) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateIn) || Number.isNaN(Date.parse(dateIn + "T00:00:00Z"))) return fail("date", "Use a real date.");
    date = new Date(dateIn + "T12:00:00Z");
  }
  return {
    values: { title, slug, description, metaTitle: metaTitle || null, category, keyword, coverScene: scene || null, body, faq: JSON.stringify(faq), related: JSON.stringify(related), systems: JSON.stringify(systems) },
    date,
  };
}

/** Checks a post must pass before it goes live. */
function publishProblem(v: { description: string; body: string }): { field: string; err: string } | null {
  if (v.description.length < 50) return { field: "description", err: "Write a description of at least 50 characters before publishing (it is the Google snippet)." };
  const first = v.body.trim().split(/\n\s*\n/)[0] ?? "";
  if (!first || /^(#|>|```|\||[-*]\s|\d+[.)]\s)/.test(first.trim())) return { field: "body", err: "Start the body with a paragraph: it becomes the answer-first opening under the cover." };
  if (v.body.trim().split(/\s+/).length < 80) return { field: "body", err: "The body is too short to publish (under 80 words)." };
  return null;
}

/**
 * Create or update a post from the editor. The submit button's `intent` decides the status:
 * save (keeps the status), publish, unpublish.
 */
export async function savePost(_prev: PostFormState, f: FormData): Promise<PostFormState> {
  const { user: me } = await requireStaff("content");
  const id = str(f, "id", 100);
  const intent = str(f, "intent", 20) as "save" | "publish" | "unpublish";
  const r = readForm(f);
  if ("error" in r && r.error) return { ...r.error, at: Date.now() };
  const { values, date } = r as Exclude<typeof r, { error: unknown }>;
  const db = await getDb();
  const P = schema.post;
  const [clash] = await db.select({ id: P.id }).from(P).where(id ? and(eq(P.slug, values.slug), ne(P.id, id)) : eq(P.slug, values.slug)).limit(1);
  if (clash) return { field: "slug", err: `Another post already uses the slug "${values.slug}".`, at: Date.now() };
  const now = new Date();

  const before = id ? (await db.select().from(P).where(eq(P.id, id)).limit(1))[0] : undefined;
  if (id && !before) return { err: "That post no longer exists.", at: Date.now() };
  const wasLive = before?.status === "published";
  const status = intent === "publish" ? "published" : intent === "unpublish" ? "draft" : (before?.status ?? "draft");
  if (status === "published") {
    const problem = publishProblem(values);
    if (problem) return { ...problem, at: Date.now() };
  }
  // The date field shows the stored day; keep the stored time unless the day itself changed.
  const sameDay = date && before?.publishedAt && before.publishedAt.toISOString().slice(0, 10) === date.toISOString().slice(0, 10);
  const publishedAt = (sameDay ? before.publishedAt : date) ?? before?.publishedAt ?? (status === "published" ? now : null);

  if (!before) {
    const newId = crypto.randomUUID();
    await db.insert(P).values({ id: newId, ...values, status, publishedAt, createdAt: now, updatedAt: now, authorId: me.id });
    await audit(me.email, status === "published" ? "post.create+publish" : "post.create", newId, { slug: values.slug, title: values.title, status });
    refresh(newId, values.slug);
    redirect(`/admin/posts/${newId}?ok=${encodeURIComponent(status === "published" ? "Published. It is live on /blog now." : "Draft saved.")}`);
  }

  await db.update(P).set({ ...values, status, publishedAt, updatedAt: now }).where(eq(P.id, id));
  const changed = Object.fromEntries(Object.entries(values).filter(([k, v]) => (before as Record<string, unknown>)[k] !== v).map(([k]) => [k, true]));
  const action = status === "published" && !wasLive ? "post.publish" : status === "draft" && wasLive ? "post.unpublish" : "post.update";
  await audit(me.email, action, id, { slug: values.slug, status, changed, ...(before.slug !== values.slug ? { slugBefore: before.slug } : {}) });
  refresh(id, values.slug, before.slug);
  const ok =
    action === "post.publish" ? "Published. It is live on /blog now." : action === "post.unpublish" ? "Unpublished. The page returns 404 and it left /blog, the sitemap and llms.txt." : status === "published" ? "Saved. The live post shows the changes now." : "Draft saved.";
  return { ok, at: Date.now() };
}

export async function deletePost(f: FormData) {
  const { user: me } = await requireStaff("content");
  const id = str(f, "id", 100);
  const db = await getDb();
  const P = schema.post;
  const [p] = await db.select().from(P).where(eq(P.id, id)).limit(1);
  if (!p) back("/admin/posts", { err: "That post no longer exists." });
  await db.delete(P).where(eq(P.id, id));
  // The full post goes into the audit log so a deletion can be undone by hand.
  await audit(me.email, "post.delete", id, p);
  refresh(id, p.slug);
  back("/admin/posts", { ok: `Deleted "${p.title}". The full text is kept in the audit log.` });
}

/** Copy a code post into a new database draft (slug "<slug>-copy"), so it can be edited in the admin. */
export async function duplicateCodePost(f: FormData) {
  const { user: me } = await requireStaff("content");
  const slug = str(f, "slug", 120);
  const src = RAW_POSTS.find((p) => p.slug === slug);
  if (!src) back("/admin/posts", { err: "That code post doesn't exist." });
  const db = await getDb();
  const P = schema.post;
  let next = `${slug}-copy`;
  for (let n = 2; ; n++) {
    const [taken] = await db.select({ id: P.id }).from(P).where(eq(P.slug, next)).limit(1);
    if (!taken && !codeSlugs.has(next)) break;
    next = `${slug}-copy-${n}`;
  }
  const now = new Date();
  const id = crypto.randomUUID();
  await db.insert(P).values({
    id,
    slug: next,
    title: src.title,
    metaTitle: src.metaTitle ?? null,
    description: src.description,
    category: src.category,
    keyword: src.keyword,
    body: blocksToMarkdown(src.lede, src.body),
    faq: JSON.stringify(src.faq),
    related: JSON.stringify(src.related.filter((s) => known.has(s))),
    systems: JSON.stringify(src.systems),
    coverScene: POST_SCENE[slug] ?? null,
    status: "draft",
    publishedAt: null,
    createdAt: now,
    updatedAt: now,
    authorId: me.id,
  });
  await audit(me.email, "post.duplicate", id, { from: slug, slug: next });
  refresh(id, next);
  redirect(`/admin/posts/${id}?ok=${encodeURIComponent(`Copied "${src.title}" into a draft. Change the slug before publishing.`)}`);
}
