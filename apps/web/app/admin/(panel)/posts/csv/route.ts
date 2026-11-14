import { can, getStaff } from "@/lib/admin";
import { listAdminPosts } from "@/components/admin/content/posts-data";
import { abs } from "@/lib/seo";

export const dynamic = "force-dynamic";

const cell = (s: string) => (/[",\n\r]/.test(s) || /^[=+\-@]/.test(s) ? `"${s.replace(/^([=+\-@])/, "'$1").replace(/"/g, '""')}"` : s);

/** Every post (code and database) as CSV. Staff with the content permission only; everyone else gets a 404. */
export async function GET(req: Request) {
  if (!can((await getStaff())?.role, "content")) return new Response("Not found", { status: 404 });
  const show = new URL(req.url).searchParams.get("show") ?? "";
  const rows = (await listAdminPosts()).filter((p) => (show === "published" ? p.kind === "db" && p.status === "published" : show === "draft" ? p.status === "draft" : show === "code" ? p.kind === "code" : true));
  const csv =
    [
      "title,slug,url,source,category,status,published,updated,views",
      ...rows.map((p) => [p.title, p.slug, abs("/blog/" + p.slug), p.kind, p.category, p.status, p.published ?? "", p.updated, String(p.views)].map(cell).join(",")),
    ].join("\r\n") + "\r\n";
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="ingot-posts-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
