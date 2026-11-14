import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { PostCover } from "@/components/site/illo";
import { connection } from "next/server";
import { fmtDate, readingTime, type Post } from "@/lib/blog";
import { allPosts } from "@/lib/blog/db";
import { JsonLd, abs, breadcrumbLd, pageMeta, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Resources: dashboard UI guides for founders and developers",
  description: "Practical guides on dashboard UI kits, shadcn alternatives, Figma to React, KPI cards, charts and building dashboards with AI agents and MCP. Written by the Ingot UI team.",
  path: "/blog",
  image: "/blog/opengraph-image",
});

/**
 * Rendered per request: lists the code posts and the published database posts (admin editor) by date, so a
 * post published in the admin appears here without a redeploy. The page is light (one D1 query).
 */
export default async function BlogIndex() {
  await connection();
  const posts = await allPosts();
  const [lead, ...rest] = posts;
  const meta = (p: Post) => (
    <p className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-mute">
      <span className="rounded-full bg-chip px-2 text-ink">{p.category}</span>
      <time dateTime={p.date}>{fmtDate(p.date)}</time>
      <span>{readingTime(p)} min read</span>
    </p>
  );
  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["Resources", "/blog"]]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: SITE_NAME + " Resources",
            url: abs("/blog"),
            publisher: { "@id": abs("/#organization") },
            blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: abs("/blog/" + p.slug), datePublished: p.date, dateModified: p.updated ?? p.date })),
          },
        ]}
      />
      <PageHead title="Resources" sub="Guides for founders and developers building dashboards." />
      <p className="mt-3 max-w-2xl text-[13px] leading-snug text-mute">
        Written by the Ingot UI team. Every number in these guides comes from the live library, and every comparison says where another tool is the better pick.
      </p>

      {lead && (
        <Link href={"/blog/" + lead.slug} className="card group mt-6 grid gap-5 p-3 transition-colors hover:bg-tile md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <PostCover slug={lead.slug} category={lead.category} title={lead.title} size="lead" scene={lead.cover} />
          <div className="px-2 pb-2 md:px-0 md:pb-0 md:pr-4">
            {meta(lead)}
            <h2 className="mt-3 text-[22px] font-medium leading-tight tracking-[-0.02em]">{lead.title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-mute">{lead.description}</p>
          </div>
        </Link>
      )}

      <ul className="mt-3 grid gap-3 md:grid-cols-2">
        {rest.map((p) => (
          <li key={p.slug}>
            <Link href={"/blog/" + p.slug} className="card flex h-full flex-col p-3 transition-colors hover:bg-tile">
              <PostCover slug={p.slug} category={p.category} title={p.title} scene={p.cover} />
              <div className="px-2 pb-2 pt-4">
                {meta(p)}
                <h2 className="mt-3 text-[16px] font-medium leading-snug tracking-[-0.01em]">{p.title}</h2>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mute">{p.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
