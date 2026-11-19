import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem, items, systems } from "@/lib/catalog";
import { FIGMA_LIBRARY, figmaCount } from "@/lib/figma-library";
import { Browser } from "@/components/site/browser";
import { railSystems } from "@/components/site/rail";
import { CATEGORIES, codeCount, entries } from "@/lib/library";
import { Preview } from "@/components/site/preview";
import { clientEntries } from "@/lib/seo-entries";
import { postsFor } from "@/lib/blog";
import { JsonLd, ORG_ID, abs, breadcrumbLd, clip, fmt, pageMeta } from "@/lib/seo";
import { SystemShowcase } from "@/components/showcase/system-showcase";
import { fitFor, lc, shotSrc } from "../fit";

export function generateStaticParams() {
  return systems.map((s) => ({ slug: s.slug }));
}

const DOMAIN: Record<string, string> = {
  loopo: "audience and revenue analytics",
  mailpulse: "newsletter and email marketing",
  auton: "AI agent governance and operations",
  axon: "workflow automation and AI pipelines",
  veriq: "security and compliance",
  vantage: "business admin and subscriptions",
  montra: "business finance and cash flow",
  spendix: "company spend, cards and approvals",
  abotix: "AI security and threat operations",
};

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/systems/[slug]">): Promise<Metadata> {
  const s = getSystem((await params).slug);
  if (!s) return {};
  const coded = (s.status === "live" ? items.length : 0) + codeCount(s.slug);
  const f = fitFor(s.slug);
  const type = f ? f.seoType : "Dashboard";
  return pageMeta({
    title: `${s.name}: ${type} dashboard template, React + Figma`,
    description: clip(`The ${s.name} ${lc(type)} dashboard template, for ${lc(f?.goodFor ?? DOMAIN[s.slug] ?? "dashboards")}. ${fmt(figmaCount(s.slug))} Figma components, ${fmt(coded)} in React checked against Figma. ${s.tier === "free" ? "Free." : "In Pro."}`, 160),
    path: "/systems/" + s.slug,
    image: "/systems/" + s.slug + "/opengraph-image",
  });
}

export default async function SystemPage({ params }: PageProps<"/systems/[slug]">) {
  const s = getSystem((await params).slug);
  if (!s) notFound();
  const coded = (s.status === "live" ? items.length : 0) + codeCount(s.slug);
  const live = coded > 0;
  const fit = fitFor(s.slug);
  const lib = Object.entries(FIGMA_LIBRARY[s.slug] ?? {}).sort((a, b) => b[1] - a[1]);
  // Only this system's entries go to the client browser (was the whole library).
  const own = entries.filter((e) => e.system === s.slug);
  const guides = postsFor({ system: s.slug }, 4);
  const byCat = CATEGORIES.map((c) => [c, own.filter((e) => e.category === c).sort((a, b) => a.name.localeCompare(b.name))] as const).filter(([, l]) => l.length);
  const ld = [
    breadcrumbLd([["Ingot UI", "/"], ["Systems", "/systems"], [s.name, "/systems/" + s.slug]]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: s.name + " design system",
      description: s.description,
      url: abs("/systems/" + s.slug),
      ...(fit ? { primaryImageOfPage: { "@type": "ImageObject", contentUrl: abs(shotSrc(s.slug)), width: fit.w, height: fit.h } } : {}),
      isPartOf: { "@id": abs("/#website") },
      publisher: { "@id": ORG_ID },
      mainEntity: { "@type": "ItemList", numberOfItems: own.length, itemListElement: own.slice(0, 50).map((e, i) => ({ "@type": "ListItem", position: i + 1, url: abs("/components/" + e.slug), name: e.name })) },
    },
  ];
  const rows: [string, string][] = [
    ["Status", live ? "Code and Figma" : "Figma library ready, code in progress"],
    ["Plan", s.tier === "free" ? "Free" : "Pro"],
    ["Components in Figma", String(figmaCount(s.slug))],
    ["Components with code", String(coded)],
    ["Typeface", s.font],
    ["Accent", s.accent],
  ];
  return (
    <div className="grid max-w-[1400px] gap-6 lg:grid-cols-[300px_1fr]">
      <JsonLd data={ld} />
      <aside className="flex flex-col gap-4 lg:sticky lg:top-5 lg:self-start">
        <div>
          <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
            <Link href="/systems" className="hover:text-ink">Systems</Link>
            <span aria-hidden="true">/</span>
            <span>{s.name}</span>
          </nav>
          <div className="mt-3 flex items-center gap-2.5">
            <span className="size-8 rounded-[8px]" style={{ background: s.accent }} aria-hidden="true" />
            <div>
              <h1 className="text-[20px] font-medium tracking-[-0.02em]">{s.name} <span className="sr-only">dashboard design system</span></h1>
              <p className="text-[12px] text-mute">{s.tagline}</p>
            </div>
          </div>
          {fit && (
            <p className="mt-3 text-[13px] leading-snug">
              <span className="text-mute">Good for </span>
              {lc(fit.goodFor)}.
            </p>
          )}
          <p className="mt-2 text-[13px] leading-snug text-mute">{s.description}</p>
        </div>
        <dl className="border-t border-hair">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-hair py-1.5 text-[13px]">
              <dt className="text-mute">{k}</dt>
              <dd className="text-right tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-2">
          {live ? (
            <Link href={"/?s=" + s.slug} className="btn-ink w-full">Browse {s.name} components</Link>
          ) : (
            <Link href="/systems/loopo" className="btn-line w-full">Start with Loopo, it’s live now</Link>
          )}
          {s.tier === "free" ? (
            <p className="text-center text-[12px] text-mute">Included in the Free plan.</p>
          ) : (
            <p className="text-center text-[12px] text-mute">
              {s.name} is in the Pro plan. <Link href="/pricing" className="text-ink underline underline-offset-2">See plans</Link>
            </p>
          )}
          <Link href="/systems#which-system" className="text-center text-[12px] text-mute underline underline-offset-2 hover:text-ink">Not sure? See which system fits your product</Link>
        </div>
      </aside>

      <div className="min-w-0">
        <SystemShowcase system={s.slug} name={s.name} />
        {s.status === "live" && (
          <section>
            <h2 className="text-[13px] font-medium">Foundations</h2>
            <div className="mt-3 overflow-hidden rounded-[8px] shadow-[0_0_0_1px_var(--color-hair-2)]">
              <Preview slug="tokens" />
            </div>
          </section>
        )}

        <section className={s.status === "live" ? "mt-10" : ""}>
          <h2 className="text-[13px] font-medium">
            In the Figma library <span className="text-mute">{figmaCount(s.slug)}</span>
          </h2>
          <p className="mt-1 text-[13px] text-mute">Every block from the {s.name} product screens, as named components you can search in Figma’s assets panel.</p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
            {lib.map(([cat, n]) => (
              <div key={cat} className="card flex items-baseline justify-between gap-2 px-3 py-2.5">
                <span className="truncate text-[13px]">{cat}</span>
                <span className="text-[13px] font-medium tabular-nums">{n}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-[13px] font-medium">Browse {s.name}</h2>
          <Browser entries={clientEntries(own)} categories={CATEGORIES} systems={railSystems.filter((r) => r.slug === s.slug)} initialSystem={s.slug} />
        </section>

        <section className="mt-12" aria-labelledby="all-components">
          <details className="card">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13px] font-medium">
              <h2 id="all-components" className="font-medium">All {s.name} components, A to Z <span className="text-mute">{own.length}</span></h2>
              <span className="text-[12px] text-mute">Show list</span>
            </summary>
            <div className="grid gap-x-6 gap-y-5 border-t border-hair p-4 sm:grid-cols-2 xl:grid-cols-3">
              {byCat.map(([c, list]) => (
                <div key={c}>
                  <h3 className="text-[12px] text-mute">{c} <span className="tabular-nums">{list.length}</span></h3>
                  <ul className="mt-1">
                    {list.map((e) => (
                      <li key={e.slug}><Link href={"/components/" + e.slug} className="block truncate py-0.5 text-[13px] hover:underline">{e.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </section>

        {guides.length > 0 && (
          <section className="mt-10" aria-labelledby="system-guides">
            <h2 id="system-guides" className="text-[13px] font-medium">Guides that use {s.name}</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {guides.map((p) => (
                <li key={p.slug}><Link href={"/blog/" + p.slug} className="card block p-4 text-[13px] font-medium leading-snug hover:bg-tile">{p.title}</Link></li>
              ))}
            </ul>
          </section>
        )}

        {!live && (
          <div className="mt-10 rounded-[8px] bg-tile px-6 py-10 text-center">
            <p className="text-[14px] font-medium">{s.name} in code is next</p>
            <p className="mx-auto mt-1 max-w-md text-[13px] leading-snug text-mute">
              The components are drawn and checked in Figma. They are being converted to React and compared against the Figma originals before they appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
