import type { Metadata } from "next";
import { categories, items } from "@/lib/catalog";
import { Browser } from "@/components/site/browser";

export const metadata: Metadata = { title: "Components", description: "Browse every Foundry UI component: primitives, overlays, charts, dashboard blocks and navigation." };

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <h1 className="text-3xl font-medium tracking-[-0.03em] text-fu-ink">Components</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-fu-muted">Every component ships as live React + Tailwind code, a Figma copy and image exports. Browse, preview, copy.</p>
      <div className="mt-8">
        <Browser items={items} categories={categories} />
      </div>
    </div>
  );
}
