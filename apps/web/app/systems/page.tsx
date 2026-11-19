import type { Metadata } from "next";
import Link from "next/link";
import { items, systems } from "@/lib/catalog";
import { figmaCount, FIGMA_TOTAL } from "@/lib/figma-library";
import { codeCount } from "@/lib/library";
import { JsonLd, ORG_ID, abs, breadcrumbLd, fmt, pageMeta } from "@/lib/seo";
import { PageHead } from "@/components/site/page-head";
import { Icon } from "@/registry/components/icons";
import { CARD, PRODUCT_TYPES, cardSrc, fitFor, lc, shotAlt, shotSrc } from "./fit";

export const metadata: Metadata = pageMeta({
  title: "Dashboard templates for React and Figma: 9 systems",
  description: "Nine complete dashboard design systems: analytics, email, AI agent, workflow, security and SaaS admin. Real screens in Figma, React + Tailwind code checked against Figma.",
  path: "/systems", image: "/systems/opengraph-image",
});

const codedFor = (s: (typeof systems)[number]) => (s.status === "live" ? items.length : 0) + codeCount(s.slug);

export default function SystemsPage() {
  const ld = [
    breadcrumbLd([["Ingot UI", "/"], ["Systems", "/systems"]]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Dashboard design systems",
      url: abs("/systems"),
      isPartOf: { "@id": abs("/#website") },
      publisher: { "@id": ORG_ID },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: systems.length,
        itemListElement: systems.map((s, i) => {
          const f = fitFor(s.slug);
          return {
            "@type": "ListItem",
            position: i + 1,
            url: abs("/systems/" + s.slug),
            name: s.name + (f ? ", " + lc(f.seoType) + " dashboard" : " dashboard"),
            ...(f ? { image: abs(shotSrc(s.slug)), description: "Good for " + lc(f.goodFor) + "." } : {}),
          };
        }),
      },
    },
  ];
  return (
    <div className="max-w-[1400px]">
      <JsonLd data={ld} />
      <PageHead title="Dashboard design systems" sub="Pick the one that matches your product, then build every screen in it." />
      <p className="mt-3 max-w-2xl text-[13px] leading-snug text-mute">
        Each system comes from a real dashboard product, so its tokens, components and screens already work together. The screen on each card is what you get. {fmt(FIGMA_TOTAL)} components are in the Figma libraries; every piece of code is checked against its Figma original before it appears here.{" "}
        <a href="#which-system" className="text-ink underline underline-offset-2">Which system fits my product?</a>
      </p>

      <h2 className="sr-only">All systems</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {systems.map((s, i) => {
          const coded = codedFor(s);
          const live = coded > 0;
          const f = fitFor(s.slug);
          return (
            <li key={s.slug} className="min-w-0">
              <Link href={"/systems/" + s.slug} className="card group block h-full overflow-hidden transition-colors hover:bg-tile">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-hair bg-tile">
                  {f ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cardSrc(s.slug)}
                      width={CARD.w}
                      height={CARD.h}
                      alt={shotAlt(s.name, f)}
                      loading={i < 3 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : undefined}
                      decoding="async"
                      className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  ) : (
                    <span className="absolute inset-0" style={{ background: s.accent + "14" }} aria-hidden="true" />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="size-3 shrink-0 rounded-[3px]" style={{ background: s.accent }} aria-hidden="true" />
                    <h3 className="text-[14px] font-medium">{s.name}</h3>
                    <span className={"rounded-full px-2 py-0.5 text-[11px] " + (live ? "bg-ink text-white" : "bg-chip text-mute")}>{live ? "Code + Figma" : "Figma ready, code soon"}</span>
                    <span className="ml-auto text-[12px] text-mute">{s.tier === "free" ? "Free" : "Pro"}</span>
                  </div>
                  {f && (
                    <p className="mt-2 text-[13px] leading-snug">
                      <span className="text-mute">Good for </span>
                      {lc(f.goodFor)}
                    </p>
                  )}
                  <p className="mt-0.5 text-[12px] text-mute">{s.tagline}{f ? ". Shown: " + f.screen + " screen." : ""}</p>
                  <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-hair pt-3 text-[12px]">
                    <div>
                      <dt className="text-mute">In Figma</dt>
                      <dd className="font-medium tabular-nums">{fmt(figmaCount(s.slug))}</dd>
                    </div>
                    <div>
                      <dt className="text-mute">In code</dt>
                      <dd className="font-medium tabular-nums">{fmt(coded)}</dd>
                    </div>
                    <div>
                      <dt className="text-mute">Type</dt>
                      <dd className="font-medium">{s.font}</dd>
                    </div>
                  </dl>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <section id="which-system" aria-labelledby="which-system-title" className="mt-14 scroll-mt-6">
        <h2 id="which-system-title" className="text-[16px] font-medium tracking-[-0.01em]">Which system fits my product?</h2>
        <p className="mt-1 max-w-2xl text-[13px] leading-snug text-mute">
          Find your product type. Each match comes from the screens the system already has. Any system works for any product; this is the closest starting point.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCT_TYPES.map((p) => {
            const s = systems.find((x) => x.slug === p.system);
            if (!s) return null;
            return (
              <li key={p.type} className="min-w-0">
                <Link href={"/systems/" + s.slug} className="card group flex h-full flex-col p-4 transition-colors hover:bg-tile">
                  <p className="text-[13px] font-medium">{p.type}</p>
                  <p className="mt-0.5 text-[12px] text-mute">For example: {p.example}</p>
                  <p className="mt-3 flex items-center gap-2 text-[13px]">
                    <span className="text-mute">Use</span>
                    <span className="size-3 shrink-0 rounded-[3px]" style={{ background: s.accent }} aria-hidden="true" />
                    <span className="font-medium">{s.name}</span>
                    <span className="text-[12px] text-mute">{s.tier === "free" ? "Free" : "Pro"}</span>
                    <Icon name="chevron-right" size={14} className="ml-auto text-mute transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-mute">{p.why}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-[13px] text-mute">
          Starting out with no budget? <Link href="/systems/loopo" className="text-ink underline underline-offset-2">Loopo is free</Link>, with no payment needed.
        </p>
      </section>
    </div>
  );
}
