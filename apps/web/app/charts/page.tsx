import type { Metadata } from "next";
import { railSystems } from "@/components/site/rail";
import { CATEGORIES, entries } from "@/lib/library";
import { Browser } from "@/components/site/browser";
import { clientEntries } from "@/lib/seo-entries";
import { pageMeta, fmt } from "@/lib/seo";

const charts = entries.filter((e) => e.category === "Charts");

export const metadata: Metadata = pageMeta({
  title: "Dashboard chart components for React and Figma",
  description: `${fmt(charts.length)} dashboard chart components: bars, lines, donuts, funnels, heatmaps and retention grids with real-looking data and hover states. React + Tailwind code and Figma.`,
  path: "/charts", image: "/charts/opengraph-image",
});

export default function ChartsPage() {
  return (
    <div className="max-w-[1400px]">
      <h1 className="page-title">Dashboard charts</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-fu-muted">
        No plain bars, no smooth sine waves. Every bar has a gradient, an inside stroke and a highlight; every line is dense and real-looking; every chart has a hover state.
      </p>
      <div className="mt-8">
        <Browser entries={clientEntries(charts)} categories={CATEGORIES.filter((c) => c === "Charts")} systems={railSystems} initialCategory="Charts" />
      </div>
    </div>
  );
}
