import type { Metadata } from "next";
import { categories, items } from "@/lib/catalog";
import { Browser } from "@/components/site/browser";

export const metadata: Metadata = { title: "Components", description: "Browse every Foundry UI component: primitives, overlays, charts, dashboard blocks and navigation." };

export default async function ComponentsPage({ searchParams }: PageProps<"/components">) {
  const sp = await searchParams;
  const q = typeof sp.q === "string" ? sp.q : "";
  return (
    <div className="mx-auto max-w-[1180px] px-4 pt-12 sm:px-6">
      <p className="eyebrow">Library · {items.length} components</p>
      <h1 className="display mt-3 text-[40px] sm:text-[52px]">Components</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-mute">Live React + Tailwind code, a Figma copy and PNG, SVG and JPEG exports for every piece. One token system underneath.</p>
      <div className="mt-10">
        <Browser items={items} categories={categories} initialQuery={q} />
      </div>
    </div>
  );
}
