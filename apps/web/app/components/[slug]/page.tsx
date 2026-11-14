import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getItem, resolveFiles } from "@/lib/catalog";
import { getSessionUser } from "@/lib/auth";
import { ComponentWorkbench } from "@/components/site/component-workbench";
import { ItemCard } from "@/components/site/item-card";
import { FigmaItemPage } from "@/components/site/figma-item-page";
import { A11yNotes } from "@/components/site/a11y-notes";
import { entries, figmaQA, getFigmaItem } from "@/lib/library";
import { getSystem } from "@/lib/catalog";
import { postsFor } from "@/lib/blog";
import { categoryHref } from "@/lib/hubs";
import { JsonLd, ORG_ID, abs, breadcrumbLd, clip, isPart, pageMeta } from "@/lib/seo";

/** Keyword-first component title that fits Google's ~60 characters (the brand suffix is added only when it fits). */
function compTitle(name: string, coded: boolean) {
  const opts = coded
    ? [name + " React component for dashboards (Figma + code)", name + " React component (Figma + code)", name + " React + Figma component", name]
    : [name + " Figma component for dashboards", name + " Figma component", name];
  return opts.find((t) => t.length <= 60) ?? opts[opts.length - 1];
}

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

const CAT_NOUN: Record<string, string> = { "KPI and stats": "KPI card", "Tables and lists": "table", "Cards and panels": "card", Charts: "chart", Modals: "modal", Drawers: "drawer", Menus: "menu", Popovers: "popover", Forms: "form", Navigation: "navigation", Headers: "header", Editors: "editor", Templates: "page template", Feedback: "feedback", Atoms: "UI", Foundations: "foundation" };
/** "Revenue chart" stays as is; "Sources" becomes "Sources chart" so the title says what it is. */
const named = (name: string, category: string) => {
  const noun = CAT_NOUN[category] ?? "component";
  return name.toLowerCase().includes(noun.split(" ")[0].toLowerCase()) ? name : name + " " + noun;
};

export async function generateMetadata({ params }: PageProps<"/components/[slug]">): Promise<Metadata> {
  const slug = (await params).slug;
  const it = getItem(slug);
  const path = "/components/" + slug;
  if (it) {
    const entry = entries.find((e) => e.slug === slug)!;
    return pageMeta({ title: compTitle(named(it.name, entry.category), true), description: clip(`${it.description} Free React + Tailwind v4 code from the Loopo design system, plus a Figma copy and PNG/SVG export. Install with npx ingotui add ${slug}.`), path, image: path + "/opengraph-image" });
  }
  const f = getFigmaItem(slug);
  if (!f) return {};
  const sys = getSystem(f.system)?.name ?? f.system;
  const coded = !!figmaQA(slug);
  const n = named(f.name, f.category);
  return pageMeta({
    title: compTitle(n, coded),
    description: clip(`${n} from the ${sys} dashboard design system, taken from the ${f.source.replace(/^[\d.]+ · /, "").replace(/ — .*/, "") || "product"} screen. ${coded ? "React + Tailwind code checked against Figma, plus the Figma layer." : "In Figma now; React code in progress."}${f.keywords ? " Includes " + f.keywords.split(", ").slice(0, 4).join(", ").toLowerCase() + "." : ""}`),
    path,
    image: path + "/opengraph-image",
    noindex: isPart(f.name),
  });
}

function componentLd(o: { slug: string; name: string; description: string; system: string; category: string; coded: boolean; free: boolean; image?: string }) {
  const url = abs("/components/" + o.slug);
  const sys = getSystem(o.system);
  return [
    breadcrumbLd([["Components", "/"], [sys?.name ?? o.system, "/systems/" + o.system], [o.name, "/components/" + o.slug]]),
    {
      "@context": "https://schema.org",
      "@type": o.coded ? "SoftwareSourceCode" : "CreativeWork",
      "@id": url + "#component",
      name: o.name,
      description: o.description,
      url,
      genre: o.category,
      ...(o.coded ? { programmingLanguage: ["TypeScript", "React"], runtimePlatform: "React 19, Tailwind CSS v4", codeSampleType: "full solution" } : {}),
      ...(o.image ? { image: abs(o.image) } : {}),
      isPartOf: { "@type": "CreativeWork", name: (sys?.name ?? o.system) + " design system", url: abs("/systems/" + o.system) },
      publisher: { "@id": ORG_ID },
      isAccessibleForFree: o.free,
      license: abs("/license"),
    },
  ];
}

function Guides({ slug, system }: { slug: string; system: string }) {
  const list = postsFor({ slug }, 3);
  const more = list.length ? list : postsFor({ system }, 3);
  if (!more.length) return null;
  return (
    <section className="mt-14 max-w-[1400px]" aria-labelledby="component-guides">
      <h2 id="component-guides" className="text-[13px] font-medium">Guides</h2>
      <ul className="mt-3 grid gap-3 md:grid-cols-3">
        {more.map((p) => (
          <li key={p.slug}><Link href={"/blog/" + p.slug} className="card block h-full p-4 text-[13px] font-medium leading-snug hover:bg-tile">{p.title}</Link></li>
        ))}
      </ul>
    </section>
  );
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
    const sys = getSystem(f.system);
    return (
      <>
        <JsonLd data={componentLd({ slug, name: f.name, description: `${f.name}, a ${f.category.toLowerCase()} component from the ${sys?.name ?? f.system} dashboard design system.`, system: f.system, category: f.category, coded: !!figmaQA(slug), free: sys?.tier === "free", image: f.thumb })} />
        <FigmaItemPage item={f} />
        <Guides slug={slug} system={f.system} />
      </>
    );
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
        <Link href="/systems/loopo" className="hover:text-ink">Loopo</Link>
        <span aria-hidden="true">/</span>
        {categoryHref(entry.category) ? <Link href={categoryHref(entry.category)!} className="hover:text-ink">{entry.category}</Link> : <span>{entry.category}</span>}
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
  const prompt = "Use the Ingot UI MCP to add the \"" + slug + "\" component (Loopo system) to this project, install its dependencies and render it on the dashboard page.";
  return (
    <div className="max-w-[1400px]">
      <JsonLd data={componentLd({ slug, name: it.name, description: it.description, system: "loopo", category: entry.category, coded: true, free: it.tier === "free" })} />
      <Suspense fallback={<div className="h-[560px] rounded-[8px] bg-tile" />}>
        <Workbench slug={slug} name={it.name} files={files} installCmd={"npx ingotui add " + slug} facts={facts} prompt={prompt} />
      </Suspense>
      <A11yNotes slug={slug} category={entry.category} handBuilt />

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
      <Guides slug={slug} system="loopo" />
    </div>
  );
}
