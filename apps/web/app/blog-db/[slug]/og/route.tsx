import { getPost } from "@/lib/blog";
import { dbPost } from "@/lib/blog/db";
import { ogImage } from "@/lib/og";

/** Share image for a published database post, served at /blog/<slug>/opengraph-image via the rewrite in next.config.ts. Drafts 404. */
export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: RouteContext<"/blog-db/[slug]/og">) {
  const slug = (await params).slug;
  const p = getPost(slug) ?? (await dbPost(slug));
  if (!p) return new Response("Not found", { status: 404 });
  return ogImage({ eyebrow: p.category, title: p.title, sub: "By Ingot UI", chips: p.keyword ? [p.keyword] : [] });
}
