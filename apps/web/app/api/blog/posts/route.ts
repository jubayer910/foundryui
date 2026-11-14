import { publishedDbPosts } from "@/lib/blog/db";
import { readingTime } from "@/lib/blog";

// Published admin posts for the static /blog index (fetched in the browser). Small: one D1 query.
export const dynamic = "force-dynamic";

export async function GET() {
  const rows = await publishedDbPosts().catch(() => []);
  const posts = rows.map((p) => ({ slug: p.slug, title: p.title, description: p.description, category: p.category, date: p.date, minutes: readingTime(p), cover: p.cover ?? null }));
  return Response.json({ posts }, { headers: { "cache-control": "public, max-age=60, s-maxage=60" } });
}
