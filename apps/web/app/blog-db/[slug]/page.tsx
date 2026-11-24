import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { PostArticle } from "@/components/site/blog/post-article";
import { getPost, relatedPosts, type Post } from "@/lib/blog";
import { allPosts, dbPost } from "@/lib/blog/db";
import { can, getStaff } from "@/lib/admin";
import { pageMeta } from "@/lib/seo";

/**
 * Database posts (admin editor), served at /blog/<slug> through the rewrite in next.config.ts: any slug that is not
 * a code post lands here. Rendered per request, so publishing, editing and unpublishing show up without a redeploy,
 * and an unknown slug is a plain 404. Drafts render only for staff with the content permission and ?preview=1.
 * Canonical and share-image URLs always point at /blog/<slug>; /blog-db/ is disallowed in robots.ts.
 */
export const dynamic = "force-dynamic";

async function load(slug: string, searchParams: PageProps<"/blog-db/[slug]">["searchParams"]): Promise<Post | null> {
  await connection();
  // A code post only lands here if the rewrite's slug list ever drifts from lib/blog/posts; render it rather than 404.
  const code = getPost(slug);
  if (code) return code;
  const wantsPreview = (await searchParams).preview === "1";
  const staff = wantsPreview ? await getStaff() : null;
  return dbPost(slug, { drafts: !!staff && can(staff.role, "content") });
}

export async function generateMetadata({ params, searchParams }: PageProps<"/blog-db/[slug]">): Promise<Metadata> {
  const p = await load((await params).slug, searchParams);
  if (!p) return {};
  return pageMeta({ title: p.metaTitle ?? p.title, description: p.description, path: "/blog/" + p.slug, type: "article", published: p.date, modified: p.updated, image: "/blog/" + p.slug + "/opengraph-image", noindex: p.draft });
}

export default async function DbPostPage({ params, searchParams }: PageProps<"/blog-db/[slug]">) {
  const p = await load((await params).slug, searchParams);
  if (!p) notFound();
  const more = p.source === "db" ? relatedPosts(p, 3, await allPosts()) : relatedPosts(p);
  return <PostArticle p={p} more={more} />;
}
