import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { categories, getItem, items, resolveFiles } from "@/lib/catalog";
import { getSessionUser } from "@/lib/auth";
import { ComponentWorkbench } from "@/components/site/component-workbench";
import { ItemCard } from "@/components/site/item-card";

export function generateStaticParams() {
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/components/[slug]">): Promise<Metadata> {
  const it = getItem((await params).slug);
  return it ? { title: it.name + " component", description: it.description + " React + Tailwind code, Figma copy and PNG/SVG export." } : {};
}

async function Workbench(props: Omit<Parameters<typeof ComponentWorkbench>[0], "signedIn">) {
  const user = await getSessionUser().catch(() => null);
  return <ComponentWorkbench {...props} signedIn={!!user} />;
}

export default async function ComponentPage({ params }: PageProps<"/components/[slug]">) {
  const { slug } = await params;
  const it = getItem(slug);
  if (!it) notFound();
  const cat = categories.find((c) => c.slug === it.category);
  const files = it.tier === "free" ? resolveFiles(slug).map(({ path, content }) => ({ path, content })) : [{ path: it.files[0], content: "// Pro component. Upgrade to view and copy the source." }];
  const related = items.filter((i) => i.category === it.category && i.slug !== slug).slice(0, 4);
  const rows: [string, string][] = [
    ["System", "Loopo"],
    ["Category", cat?.name ?? ""],
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
        <Link href={"/?c=" + it.category} className="hover:text-ink">{cat?.name}</Link>
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
            More {cat?.name.toLowerCase()} <span className="text-mute">{related.length}</span>
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
