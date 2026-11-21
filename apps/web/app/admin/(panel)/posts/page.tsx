import type { Metadata } from "next";
import Link from "next/link";
import { requireStaff } from "@/lib/admin";
import { sp } from "@/components/admin/guard";
import { AdminHead, Flash, LinkTabs, Table, Tag, input, num, td } from "@/components/admin/ui";
import { CIco } from "@/components/admin/content/icons";
import { listAdminPosts } from "@/components/admin/content/posts-data";
import { Icon } from "@/registry/components/icons";
import { duplicateCodePost } from "./actions";

export const metadata: Metadata = { title: "Posts" };

const fmt = (d: string | null) => (d ? new Date(d + "T00:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }) : "–");

export default async function AdminPosts({ searchParams }: PageProps<"/admin/posts">) {
  await requireStaff("content", "/admin/posts");
  const q = await searchParams;
  const show = sp(q.show);
  const term = sp(q.q).trim().toLowerCase();
  const all = await listAdminPosts();
  const counts = {
    all: all.length,
    published: all.filter((p) => p.kind === "db" && p.status === "published").length,
    draft: all.filter((p) => p.status === "draft").length,
    code: all.filter((p) => p.kind === "code").length,
  };
  const rows = all
    .filter((p) => (show === "published" ? p.kind === "db" && p.status === "published" : show === "draft" ? p.status === "draft" : show === "code" ? p.kind === "code" : true))
    .filter((p) => !term || p.title.toLowerCase().includes(term) || p.slug.includes(term) || p.category.toLowerCase().includes(term));
  const tab = (key: string, label: string, n: number) => ({ href: "/admin/posts" + (key ? `?show=${key}` : "") + (term ? `${key ? "&" : "?"}q=${encodeURIComponent(term)}` : ""), label, count: n, on: show === key });
  const views = all.reduce((s, p) => s + p.views, 0);

  return (
    <div>
      <AdminHead title="Posts" sub={`${counts.all} posts, ${num(views)} page views`} info={`${counts.code} posts live in the code and ${counts.all - counts.code} in the database. The blog lists both, newest first.`}>
        <a href={"/admin/posts/csv" + (show ? `?show=${show}` : "")} className="btn-line" download>
          <Icon name="download" size={15} />
          CSV
        </a>
        <Link href="/admin/posts/new" className="btn-ink">
          <Icon name="plus" size={15} />
          New post
        </Link>
      </AdminHead>
      <Flash ok={q.ok} err={q.err} />

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <LinkTabs tabs={[tab("", "All", counts.all), tab("published", "Published", counts.published), tab("draft", "Drafts", counts.draft), tab("code", "In code", counts.code)]} />
        <form method="get" className="ml-auto flex w-full gap-2 sm:w-auto">
          {show && <input type="hidden" name="show" value={show} />}
          <input name="q" defaultValue={term} placeholder="Search title, slug or category" aria-label="Search posts" className={input + " sm:w-[260px]"} />
          <button className="btn-line shrink-0" aria-label="Search">
            <Icon name="search" size={15} />
          </button>
        </form>
      </div>

      <div className="mt-4">
        <Table head={["Title", "Category", "Status", "Published", "Updated", "Views", ""]} empty={term ? `No post matches "${term}".` : "No posts here yet."}>
          {rows.map((p) => (
            <tr key={p.kind + p.slug}>
              <td className={td + " max-w-[420px]"}>
                <span className="flex min-w-0 items-center gap-2">
                  {p.kind === "db" ? (
                    <Link href={`/admin/posts/${p.id}`} className="truncate font-medium hover:underline">{p.title}</Link>
                  ) : (
                    <span className="truncate">{p.title}</span>
                  )}
                </span>
                <span className="block truncate font-fu-mono text-[11px] text-faint">/blog/{p.slug}</span>
              </td>
              <td className={td + " whitespace-nowrap"}>{p.category}</td>
              <td className={td}>
                <span className="flex items-center gap-1">
                  <Tag tone={p.status === "published" ? "good" : "plain"}>{p.status === "published" ? "Published" : "Draft"}</Tag>
                  {p.kind === "code" && <span title="Lives in lib/blog/posts. Edit it in the code, or duplicate it into the editor."><Tag>code</Tag></span>}
                </span>
              </td>
              <td className={td + " whitespace-nowrap text-mute"}>{fmt(p.published)}</td>
              <td className={td + " whitespace-nowrap text-mute"}>{fmt(p.updated)}</td>
              <td className={td + " text-right tabular-nums"}>{num(p.views)}</td>
              <td className={td + " whitespace-nowrap text-right"}>
                <span className="inline-flex items-center gap-1">
                  {p.kind === "db" ? (
                    <Link href={`/admin/posts/${p.id}`} className="btn-line !h-7 !px-3">
                      <CIco name="pencil" size={14} />
                      Edit
                    </Link>
                  ) : (
                    <form action={duplicateCodePost}>
                      <input type="hidden" name="slug" value={p.slug} />
                      <button className="btn-line !h-7 !px-3" title="Copy into a new database draft">
                        <CIco name="copy" size={14} />
                        Duplicate to editor
                      </button>
                    </form>
                  )}
                  <a href={"/blog/" + p.slug + (p.status === "draft" ? "?preview=1" : "")} target="_blank" rel="noopener" className="flex size-7 items-center justify-center rounded-[6px] text-mute hover:bg-tile hover:text-ink" aria-label={`${p.status === "draft" ? "Preview" : "View"} ${p.title} on the site`} title={p.status === "draft" ? "Preview on site" : "View on site"}>
                    <CIco name="external-link" size={15} />
                  </a>
                </span>
              </td>
            </tr>
          ))}
        </Table>
      </div>
      <p className="mt-2 text-[12px] text-faint">Views count every day kept in the first-party analytics.</p>
    </div>
  );
}
