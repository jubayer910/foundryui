import type { Metadata } from "next";
import { LibraryPage } from "@/components/site/library-page";

export const metadata: Metadata = { title: "Components", description: "Browse every Foundry UI component: navigation, KPI cards, charts, tables, overlays and dashboard blocks.", alternates: { canonical: "/" } };

export default async function ComponentsPage({ searchParams }: PageProps<"/components">) {
  const sp = await searchParams;
  return <LibraryPage q={typeof sp.q === "string" ? sp.q : ""} intro={false} />;
}
