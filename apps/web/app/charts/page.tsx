import type { Metadata } from "next";
import { categories, items } from "@/lib/catalog";
import { Browser } from "@/components/site/browser";

export const metadata: Metadata = { title: "Charts", description: "Kargul-grade charts: finished bars, dense lines, real-looking data, hover states — in Figma and code." };

export default function ChartsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <h1 className="text-3xl font-medium tracking-[-0.03em] text-fu-ink">Charts</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-fu-muted">
        No plain bars, no smooth sine waves. Every bar has a gradient, an inside stroke and a highlight; every line is dense and real-looking; every chart has a hover state.
      </p>
      <div className="mt-8">
        <Browser items={items} categories={categories} initialCategory="charts" />
      </div>
    </div>
  );
}
