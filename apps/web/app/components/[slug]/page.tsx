import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getItem, resolveFiles } from "@/lib/catalog";
import { getSessionUser } from "@/lib/auth";
import { ComponentWorkbench } from "@/components/site/component-workbench";
import { ItemCard } from "@/components/site/item-card";
import { FigmaItemPage } from "@/components/site/figma-item-page";
import { entries, getFigmaItem } from "@/lib/library";

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/components/[slug]">): Promise<Metadata> {
  const slug = (await params).slug;
  const it = getItem(slug);
  if (it) return { title: it.name + " component", description: it.description + " React + Tailwind code, Figma copy and PNG/SVG export." };
  const f = getFigmaItem(slug);
  return f ? { title: f.name + ", " + f.category + " component", description: f.name + " from the " + f.system + " design system: a " + f.category.toLowerCase() + " component for dashboards, in Figma." } : {};
}

async function Workbench(props: Omit<Parameters<typeof ComponentWorkbench>[0], "signedIn">) {
  const user = await getSessionUser().catch(() => null);
  return <ComponentWorkbench {...props} signedIn={!!user} />;
}

export default async function ComponentPage({ params }: PageProps<"/components/[slug]">) {
  const { slug } = await params;
  const it = getItem(slug);
  if (!it) {
    const f = getFigmaItem(slug);
    if (!f) notFound();
    return <FigmaItemPage item={f} />;
  }
  const entry = entries.find((e) => e.slug === slug)!;
  const files = it.tier === "free" ? resolveFiles(slug).map(({ path, content }) => ({ path, content })) : [{ path: it.files[0], content: "// Pro component. Upgrade to view and copy the source." }];
  const related = entries.filter((e) => e.category === entry.category && e.slug !== slug).slice(0, 4);
  const rows: [string, string][] = [
    ["System", "Loopo"],
    ["Category", entry.category],
    ["Plan", it.tier === "free" ? "Free" : "Pro"],
    ["Includes", "React, Figma, PNG, SVG, JPEG"],
    ["npm", it.dependencies.join(", ") || "None"],
    ["Uses", it.registryDependencies.join(", ") || "Nothing else"],
    ["Stack", "React 19, Tailwind v4"],
  ];
  const facts = (
    <div>
      <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ink">Components</Link>
        <span aria-hidden="true">/</span>
        <Link href={"/?c=" + encodeURIComponent(entry.category)} className="hover:text-ink">{entry.category}</Link>
      </nav>
      <h1 className="mt-2 text-[20px] font-medium tracking-[-0.02em]">{it.name}</h1>
      <p className="mt-1 text-[13px] leading-snug text-mute">{it.description}</p>
      <dl className="mt-4 border-t border-hair">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-hair py-1.5 text-[13px]">
            <dt className="text-mute">{k}</dt>
            <dd className="text-right">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
  const prompt = "Use the Foundry UI MCP to add the \"" + slug + "\" component (Loopo system) to this project, install its dependencies and render it on the dashboard page.";
  return (
    <div className="max-w-[1400px]">
      <Suspense fallback={<div className="h-[560px] rounded-[8px] bg-tile" />}>
        <Workbench slug={slug} name={it.name} files={files} installCmd={"npx foundryui add " + slug} facts={facts} prompt={prompt} />
      </Suspense>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-[13px] font-medium">
            More {entry.category.toLowerCase()}
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((r) => (
              <ItemCard key={r.slug} item={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
