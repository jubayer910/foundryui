import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { fmtDate, posts, readingTime } from "@/lib/blog";
import { JsonLd, abs, breadcrumbLd, pageMeta, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Resources: dashboard UI guides for founders and developers",
  description: "Practical guides on dashboard UI kits, shadcn alternatives, Figma to React, KPI cards, charts and building dashboards with AI agents and MCP. Written by Wolfpixel.",
  path: "/blog",
  image: "/blog/opengraph-image",
});

export default function BlogIndex() {
  const [lead, ...rest] = posts;
  const meta = (p: (typeof posts)[number]) => (
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
          breadcrumbLd([["Foundry UI", "/"], ["Resources", "/blog"]]),
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
        Written by Wolfpixel, the studio behind Foundry UI. Every number in these guides comes from the live library, and every comparison says where another tool is the better pick.
      </p>

      {lead && (
        <Link href={"/blog/" + lead.slug} className="card mt-6 block p-5 transition-colors hover:bg-tile sm:p-6">
          {meta(lead)}
          <h2 className="mt-3 max-w-3xl text-[22px] font-medium leading-tight tracking-[-0.02em]">{lead.title}</h2>
          <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-mute">{lead.description}</p>
        </Link>
      )}

      <ul className="mt-3 grid gap-3 md:grid-cols-2">
        {rest.map((p) => (
          <li key={p.slug}>
            <Link href={"/blog/" + p.slug} className="card flex h-full flex-col p-5 transition-colors hover:bg-tile">
              {meta(p)}
              <h2 className="mt-3 text-[16px] font-medium leading-snug tracking-[-0.01em]">{p.title}</h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-mute">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
