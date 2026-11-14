import { notFound } from "next/navigation";
import { connection } from "next/server";
import { getPost, posts } from "@/lib/blog";
import { dbPost } from "@/lib/blog/db";
import { ogImage, OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI guide";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

/** Code posts are prerendered; published database posts render on request (drafts 404 here). */
export const dynamicParams = true;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  let p = getPost(slug) ?? null;
  if (!p) {
    await connection();
    p = await dbPost(slug);
  }
  if (!p) notFound();
  return ogImage({ eyebrow: p.category, title: p.title, sub: "By Ingot UI", chips: p.keyword ? [p.keyword] : [] });
}
