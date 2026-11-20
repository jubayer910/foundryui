import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { IlloTile } from "@/components/site/illo";
import { LIBRARY_CATEGORY_SCENE } from "@/components/site/illo/scenes";
import { entries, hasCode } from "@/lib/library";
import { HUBS } from "@/lib/hubs";
import { JsonLd, breadcrumbLd, fmt, isPart, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Dashboard component categories: KPI cards, tables, modals",
  description: "Browse dashboard components by type: KPI cards, data tables, cards, modals, drawers, forms, navigation, page templates, charts and more, in React and Figma.",
  path: "/categories", image: "/categories/opengraph-image",
});

export default function Categories() {
  const count = (c: string) => entries.filter((e) => e.category === c && !isPart(e.name));
  const charts = count("Charts");
  const rows = [...HUBS.map((h) => ({ href: "/categories/" + h.slug, name: h.h1, intro: h.intro, list: count(h.category), scene: LIBRARY_CATEGORY_SCENE[h.category] })), { href: "/charts", name: "Charts", intro: "Bars, lines, donuts, funnels, heatmaps and retention grids with real-looking data and hover states.", list: charts, scene: LIBRARY_CATEGORY_SCENE.Charts }].sort((a, b) => b.list.length - a.list.length);
  return (
    <div className="max-w-[1100px]">
      <JsonLd data={breadcrumbLd([["Components", "/"], ["Categories", "/categories"]])} />
      <PageHead edit="categories" title="Categories" sub="Every dashboard component, grouped by what it does." />
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="group card flex h-full flex-col p-2 transition-shadow duration-200 hover:shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
              <IlloTile scene={r.scene ?? "grid"} label="" className="illo-live h-[148px]" />
              <span className="flex flex-col px-2 pb-2 pt-3">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="text-[14px] font-medium">{r.name}</span>
                  <span className="shrink-0 text-[12px] tabular-nums text-mute">{fmt(r.list.length)}, {fmt(r.list.filter(hasCode).length)} with code</span>
                </span>
                <span className="mt-1 text-[13px] leading-snug text-mute">{r.intro}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
