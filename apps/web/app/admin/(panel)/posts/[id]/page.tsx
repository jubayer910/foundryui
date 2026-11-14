import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { CATEGORIES, codeSlugs } from "@/lib/blog";
import { parseFaq, parseList } from "@/lib/blog/db";
import { entries } from "@/lib/library";
import { systems } from "@/lib/catalog";
import { isPart } from "@/lib/seo";
import { AdminHead, Confirm, Flash, Tag, when } from "@/components/admin/ui";
import { CIco } from "@/components/admin/content/icons";
import { PostEditor, type EditorPost } from "@/components/admin/content/post-editor";
import { deletePost } from "../actions";

export const metadata: Metadata = { title: "Edit post" };

const day = (d: Date | null) => (d ? d.toISOString().slice(0, 10) : "");

export default async function AdminPostEdit({ params, searchParams }: PageProps<"/admin/posts/[id]">) {
  const { id } = await params;
  await requireStaff("content", `/admin/posts/${id}`);
  const q = await searchParams;
  const isNew = id === "new";
  let row: typeof schema.post.$inferSelect | undefined;
  if (!isNew) {
    const db = await getDb();
    [row] = await db.select().from(schema.post).where(eq(schema.post.id, id)).limit(1);
    if (!row) notFound();
  }
  const post: EditorPost = row
    ? {
        id: row.id,
        slug: row.slug,
        title: row.title,
        metaTitle: row.metaTitle ?? "",
        description: row.description,
        category: row.category,
        keyword: row.keyword,
        body: row.body,
        faq: parseFaq(row.faq),
        related: parseList(row.related),
        systems: parseList(row.systems),
        coverScene: row.coverScene ?? "",
        status: row.status === "published" ? "published" : "draft",
        date: day(row.publishedAt),
      }
    : { id: null, slug: "", title: "", metaTitle: "", description: "", category: "Guides", keyword: "", body: "", faq: [], related: [], systems: [], coverScene: "", status: "draft", date: "" };

  const live = post.status === "published";
  const href = "/blog/" + post.slug + (live ? "" : "?preview=1");

  return (
    <div>
      <AdminHead
        title={isNew ? "New post" : post.title || "Untitled post"}
        sub={isNew ? "Write in markdown. The preview uses the same components as the blog." : `Last saved ${when(row!.updatedAt)}${live && row!.publishedAt ? `, published ${when(row!.publishedAt)}` : ""}.`}
      >
        {!isNew && <Tag tone={live ? "good" : "plain"}>{live ? "Published" : "Draft"}</Tag>}
        <Link href="/admin/posts" className="btn-line">
          <CIco name="arrow-left" size={15} />
          All posts
        </Link>
        {!isNew && (
          <a href={href} target="_blank" rel="noopener" className="btn-line">
            <CIco name="external-link" size={15} />
            {live ? "View on site" : "Preview on site"}
          </a>
        )}
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      <PostEditor
        post={post}
        categories={CATEGORIES}
        systems={systems.map((s) => ({ slug: s.slug, name: s.name }))}
        components={entries.filter((e) => !isPart(e.name)).map((e) => ({ slug: e.slug, name: e.name }))}
        codeSlugs={[...codeSlugs]}
      />

      {!isNew && (
        <section className="mt-10 flex flex-wrap items-center gap-3 rounded-[8px] border border-hair p-4">
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium">Delete this post</p>
            <p className="text-[12px] text-mute">{live ? "The page returns 404 right away and leaves the blog, the sitemap and llms.txt." : "The draft is removed."} The full text stays in the audit log.</p>
          </div>
          <Confirm label="Delete post" tone="bad">
            <form action={deletePost} className="flex flex-col gap-2">
              <input type="hidden" name="id" value={post.id!} />
              <p className="text-[12px] text-mute">Delete &quot;{post.title}&quot;? This can&apos;t be undone from the admin.</p>
              <button className="btn-ink !h-7">
                <CIco name="trash" size={14} />
                Delete post
              </button>
            </form>
          </Confirm>
        </section>
      )}
    </div>
  );
}
