import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/site/blog/post-article";
import { getPost, posts, relatedPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

/**
 * Code posts (lib/blog/posts) only: prerendered at build time and served from the static-assets cache.
 * Every other /blog/<slug> is rewritten in next.config.ts to app/blog-db/[slug], which renders database posts
 * per request. dynamicParams = false keeps this route static: a slug that reaches it unbuilt is a 404, never an
 * on-demand render (an on-demand render that touched request data returned 500 DYNAMIC_SERVER_USAGE).
 */
export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return pageMeta({ title: p.metaTitle ?? p.title, description: p.description, path: "/blog/" + p.slug, type: "article", published: p.date, modified: p.updated, image: "/blog/" + p.slug + "/opengraph-image" });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  return <PostArticle p={p} more={relatedPosts(p)} />;
}
