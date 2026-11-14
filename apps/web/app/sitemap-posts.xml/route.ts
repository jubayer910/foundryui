import { publishedDbPosts } from "@/lib/blog/db";
import { abs } from "@/lib/seo";

// Posts written in the admin. The main /sitemap.xml is static (built at deploy); this one is per request and small.
export const dynamic = "force-dynamic";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET() {
  const posts = await publishedDbPosts().catch(() => []);
  const urls = posts.map((p) => `<url><loc>${esc(abs("/blog/" + p.slug))}</loc><lastmod>${esc(p.updated ?? p.date)}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=300, s-maxage=300" } });
}
