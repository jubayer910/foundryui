import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/blog";
import { ogImage, OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI guide";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

/** Code posts only, prerendered. Database posts' share images come from app/blog-db/[slug]/og via the rewrite in next.config.ts. */
export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  return ogImage({ eyebrow: p.category, title: p.title, sub: "By Ingot UI", chips: p.keyword ? [p.keyword] : [] });
}
