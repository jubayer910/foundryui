import type { Metadata } from "next";
import { LibraryPage } from "@/components/site/library-page";
import { pageMeta, fmt, STATS } from "@/lib/seo";

const str = (v: unknown) => (typeof v === "string" ? v : "");

export async function generateMetadata({ searchParams }: PageProps<"/">): Promise<Metadata> {
  const sp = await searchParams;
  // Filtered and search views (?q= ?c= ?s=) are the same page re-sorted: keep them out of the index.
  const filtered = ["q", "c", "s"].some((k) => str(sp[k]));
  return pageMeta({
    title: "Dashboard UI components for React, Figma and AI agents | Foundry UI",
    absoluteTitle: true,
    description: `${fmt(STATS.components)} dashboard components in ${STATS.systems} design systems: charts, KPI cards, tables, modals and full pages. React + Tailwind code checked against Figma, plus an MCP server for AI agents.`,
    path: "/",
    noindex: filtered,
  });
}

export default async function Home({ searchParams }: PageProps<"/">) {
  const sp = await searchParams;
  return <LibraryPage home q={str(sp.q)} c={str(sp.c) || "all"} s={str(sp.s) || "all"} />;
}
