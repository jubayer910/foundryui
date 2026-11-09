import type { Metadata } from "next";
import { railSystems } from "@/components/site/rail";
import { CATEGORIES, entries } from "@/lib/library";
import { Browser } from "@/components/site/browser";

export const metadata: Metadata = { title: "Charts", description: "Kargul-grade charts: finished bars, dense lines, real-looking data, hover states — in Figma and code." };

export default function ChartsPage() {
  return (
    <div className="max-w-[1400px]">
      <h1 className="page-title">Charts</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-fu-muted">
        No plain bars, no smooth sine waves. Every bar has a gradient, an inside stroke and a highlight; every line is dense and real-looking; every chart has a hover state.
      </p>
      <div className="mt-8">
        <Browser entries={entries} categories={CATEGORIES} systems={railSystems} initialCategory="Charts" />
      </div>
    </div>
  );
}
