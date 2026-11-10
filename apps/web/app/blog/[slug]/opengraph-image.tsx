import { getPost, posts } from "@/lib/blog";
import { ogImage, OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Foundry UI guide";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug)!;
  return ogImage({ eyebrow: p.category, title: p.title, sub: "By Wolfpixel", chips: [p.keyword] });
}
