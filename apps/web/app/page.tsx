import type { Metadata } from "next";
import { LibraryPage } from "@/components/site/library-page";
import { pageMeta, fmt, STATS } from "@/lib/seo";

// Static: prerendered once and served from the cache. Filtered views (?q= ?c= ?s=) are applied in the browser
// and canonicalise to "/".
export const metadata: Metadata = pageMeta({
  title: "Dashboard UI components for React, Figma and AI agents | Ingot UI",
  absoluteTitle: true,
  description: `${fmt(STATS.components)} dashboard components in ${STATS.systems} design systems: charts, KPI cards, tables, modals and full pages. React + Tailwind code checked against Figma, plus an MCP server for AI agents.`,
  path: "/",
});

export default function Home() {
  return <LibraryPage home />;
}
