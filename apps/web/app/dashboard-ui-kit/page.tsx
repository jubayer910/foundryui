import type { Metadata } from "next";
import Link from "next/link";
import { LOOPO_FIGMA_COMMUNITY } from "@/lib/brand";
import { items, systems } from "@/lib/catalog";
import { figmaCount } from "@/lib/figma-library";
import { codeCount } from "@/lib/library";
import { stat } from "@/lib/blog/stats";
import { JsonLd, ORG_ID, STATS, abs, breadcrumbLd, faqLd, fmt, pageMeta, plain } from "@/lib/seo";
import { Crumbs, Faq, LinkCards, P, Section, Steps } from "../for/_ui";
import { CARD, cardSrc, fitFor, midSrc, shotAlt } from "../systems/fit";
import { ed } from "@/lib/content/edit";

const PATH = "/dashboard-ui-kit";

/**
 * Landing page for the "dashboard ui kit" query family (dashboard ui kit, dashboard ui kit figma, free dashboard ui kit).
 * Google ranks product and marketplace pages for it, so this is the product page: what is in the kit, every
 * system with its real screen, Figma + code, free vs paid. Counts are live; prices stay on /pricing (they change
 * in admin). The blog list /blog/best-dashboard-ui-kits keeps the "best dashboard ui kits" comparison intent.
 */
export const metadata: Metadata = pageMeta({
  title: "Dashboard UI Kit for Figma and React (free + Pro)",
  absoluteTitle: true,
  description: `Dashboard UI kit with ${systems.length} systems and ${fmt(STATS.components)} components: KPI cards, charts, tables, modals and pages in Figma and React. Free kit included.`,
  path: PATH,
  image: "/systems/opengraph-image",
});

const A = "font-medium text-ink underline decoration-hair-2 underline-offset-[3px] hover:decoration-ink";
const coded = (slug: string, live: boolean) => (live ? items.length : 0) + codeCount(slug);

export default function DashboardUiKit() {
  const n = (k: string) => fmt(stat(k) ?? 0);
  const free = systems.find((s) => s.tier === "free");
  const freeFit = free && fitFor(free.slug);

  const inside: [string, string][] = [
    [fmt(systems.length), "complete kits, one per product type"],
    [fmt(STATS.components), "components in Figma"],
    [fmt(STATS.coded), "with React + Tailwind code"],
    [n("cat:all:Templates"), "full dashboard page templates"],
    [n("cat:all:Charts"), "charts"],
    [n("cat:all:KPI and stats"), "KPI cards and stat rows"],
    [n("cat:all:Tables and lists"), "tables and lists"],
    [fmt((stat("cat:all:Modals") ?? 0) + (stat("cat:all:Drawers") ?? 0)), "modals and drawers"],
    [fmt(STATS.icons), "icons"],
  ];

  const faq = [
    { q: "What is a dashboard UI kit?", a: "A ready-made set of interface parts for building dashboards and admin panels: KPI cards, charts, data tables, filters, modals, drawers, navigation, settings and full page layouts, designed to work together in one style. Ingot UI ships each kit as a Figma library and as React + Tailwind code." },
    { q: "Is there a free dashboard UI kit?", a: `Yes. ${free?.name ?? "Loopo"} is free in Figma and in React + Tailwind code, including its page templates, for personal, learning and non-commercial projects. You can duplicate the Figma file from [Figma Community](https://www.figma.com/community/file/1707021146274870386/loopo-free-dashboard-ui-kit-figma-react-code), where Figma's Community licence applies to that copy. The other ${systems.length - 1} kits are part of Pro, Team and Lifetime; current prices are on the [pricing page](/pricing).` },
    { q: "Can I use the kit in Figma?", a: "Yes. Every component and page template can be copied into Figma as editable layers from its page, and each kit has its own colours and type. Designers and developers work from the same components." },
    { q: "Does the dashboard UI kit include code?", a: `Yes. ${fmt(STATS.coded)} components have React 19 + Tailwind CSS v4 code, and generated code is published only after its render matches the Figma original. Install with \`npx ingotui add\`, the shadcn CLI, or let an AI agent add it through the [MCP server](/mcp).` },
    { q: "Can I use it in commercial and client projects?", a: "Yes, with Pro, Lifetime or a team deal: unlimited commercial projects, including client work. The Free plan is for personal and non-commercial projects. You may not resell or redistribute the kit itself. The [licence](/license) explains it in plain English." },
    { q: "How is it different from a Figma-only dashboard kit?", a: "Figma-only kits stop at the design, so the code is still yours to write and to keep in sync. Ingot UI gives the Figma file and matching code for the same components, plus tools so AI coding agents build with them." },
  ];

  const guides = [
    { href: "/blog/best-dashboard-ui-kits", title: "Best dashboard UI kits compared", note: "10 picks for React, Tailwind and Figma" },
    { href: "/blog/free-figma-dashboard-ui-kit", title: "Free Figma dashboard UI kits", note: "Kits worth opening, free" },
    { href: "/blog/dashboard-design-best-practices", title: "Dashboard design best practices", note: "14 rules from real product dashboards" },
  ];

  const ld = [
    breadcrumbLd([["Ingot UI", "/"], ["Dashboard UI kit", PATH]]),
    { "@context": "https://schema.org", "@type": "WebPage", name: "Dashboard UI Kit for Figma and React", url: abs(PATH), publisher: { "@id": ORG_ID }, about: { "@id": ORG_ID }, primaryImageOfPage: abs(midSrc(free?.slug ?? "loopo")) },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Ingot UI Dashboard UI Kit",
      applicationCategory: "DesignApplication",
      operatingSystem: "Figma, Web",
      url: abs(PATH),
      image: systems.map((s) => abs(midSrc(s.slug))),
      description: `Dashboard UI kit with ${systems.length} design systems and ${fmt(STATS.components)} components in Figma and React + Tailwind CSS v4.`,
      publisher: { "@id": ORG_ID },
      offers: { "@type": "Offer", name: "Free kit", price: "0", priceCurrency: "USD", url: abs("/pricing") },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Dashboard UI kits in Ingot UI",
      itemListElement: systems.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name + " dashboard UI kit", url: abs("/systems/" + s.slug) })),
    },
    faqLd(faq.map((f) => ({ q: f.q, a: plain(f.a) }))),
  ];

  return (
    <div className="max-w-[1200px]">
      <JsonLd data={ld} />
      <Crumbs trail={[["Ingot UI", "/"], ["Dashboard UI kit", PATH]]} />

      <header className="mt-3 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_520px]">
        <div>
          <p className="eyebrow" {...ed("kit.hero.eyebrow")}>Dashboard UI kit</p>
          <h1 className="display mt-1 text-[28px] sm:text-[36px]" {...ed("kit.hero.title")}>Dashboard UI kit for Figma and React</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-2">
            {`${systems.length} complete dashboard UI kits, each built from a real product: KPI cards, charts, data tables, filters, modals, drawers, settings and full page templates, in Figma and in React + Tailwind code that matches. Start with the free ${free?.name ?? "Loopo"} kit.`}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            <Link href={"/systems/" + (free?.slug ?? "loopo")} className="btn-ink">Get the free kit</Link>
            <a href={LOOPO_FIGMA_COMMUNITY} target="_blank" rel="noopener" className="btn-line">Free Figma file</a>
            <Link href="#kits" className="btn-line">See all {systems.length} kits</Link>
          </div>
          <p className="mt-3 text-[12px] text-mute">Free for personal and non-commercial projects. Commercial use comes with Pro and Lifetime.</p>
        </div>
        {free && freeFit && (
          <div className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={midSrc(free.slug)} width={1200} height={Math.round((1200 * freeFit.h) / freeFit.w)} alt={`Dashboard UI kit: ${shotAlt(free.name, freeFit)}`} fetchPriority="high" decoding="async" className="block h-auto w-full" />
          </div>
        )}
      </header>

      <Section edit="kit" id="inside" title="What is in the dashboard UI kit" sub="Counted from the library at every release.">
        <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
          {inside.map(([v, l]) => (
            <div key={l} className="card p-4">
              <dt className="text-[12px] text-mute">{l}</dt>
              <dd className="mt-1 text-[22px] font-medium tabular-nums tracking-tight">{v}</dd>
            </div>
          ))}
        </dl>
        <p className={P + " max-w-3xl"}>
          Browse it by part: <Link href="/categories/kpi-cards" className={A}>KPI cards</Link>, <Link href="/charts" className={A}>charts</Link>, <Link href="/categories/tables" className={A}>tables</Link>, <Link href="/categories/modals" className={A}>modals</Link>, <Link href="/categories/drawers" className={A}>drawers</Link>, <Link href="/categories/forms" className={A}>forms</Link>, <Link href="/categories/navigation" className={A}>navigation</Link> and <Link href="/categories/page-templates" className={A}>page templates</Link>.
        </p>
      </Section>

      <Section edit="kit" id="kits" title={`${systems.length} dashboard UI kits, one per product type`} sub="Each kit is a complete design system with its own look.">
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {systems.map((s, i) => {
            const f = fitFor(s.slug);
            return (
              <li key={s.slug} className="min-w-0">
                <Link href={"/systems/" + s.slug} className="card group block h-full overflow-hidden transition-colors hover:bg-tile">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-hair bg-tile">
                    {f ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={cardSrc(s.slug)} width={CARD.w} height={CARD.h} alt={`${s.name} dashboard UI kit: ${shotAlt(s.name, f)}`} loading={i < 3 ? "eager" : "lazy"} decoding="async" className="absolute inset-0 size-full object-cover" />
                    ) : (
                      <span className="absolute inset-0" style={{ background: s.accent + "14" }} aria-hidden="true" />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="size-3 shrink-0 rounded-[3px]" style={{ background: s.accent }} aria-hidden="true" />
                      <h3 className="text-[14px] font-medium">{s.name} dashboard UI kit</h3>
                      <span className="ml-auto text-[12px] text-mute">{s.tier === "free" ? "Free" : "Pro"}</span>
                    </div>
                    {f && <p className="mt-1 text-[13px] leading-snug text-ink-2">{f.goodFor}</p>}
                    <p className="mt-1 text-[12px] tabular-nums text-mute">{fmt(figmaCount(s.slug))} components, {fmt(coded(s.slug, s.status === "live"))} in code, {fmt(stat("cat:" + s.slug + ":Templates") ?? 0)} page templates</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section edit="kit" id="figma-and-code" title="Figma and code from one source">
        <Steps
          steps={[
            ["Design in Figma.", <>Copy any component or full page into Figma as editable layers from its page, in the kit&apos;s own colours and type.</>],
            ["Build in React.", <>{fmt(STATS.coded)} components have React 19 + Tailwind CSS v4 code, published only after the render matches the Figma original. Install with <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">npx ingotui add</code> or the shadcn CLI. See the <Link href="/docs" className={A}>docs</Link>.</>],
            ["Or let your AI agent build it.", <>Connect the <Link href="/mcp" className={A}>MCP server</Link> to Claude Code, Cursor, Codex or VS Code and the agent builds screens with the real components and tokens.</>],
          ]}
        />
      </Section>

      <Section edit="kit" id="compare" title="How it compares with other dashboard kits">
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[620px] text-left text-[13px]">
            <thead className="text-[12px] text-mute">
              <tr className="border-b border-hair"><th className="py-2 pr-3 font-normal" /><th className="py-2 pr-3 font-normal">Ingot UI</th><th className="py-2 pr-3 font-normal">Figma-only kits</th><th className="py-2 font-normal">Admin templates</th></tr>
            </thead>
            <tbody className="text-ink-2">
              {[
                ["Figma file", "Yes, per kit", "Yes", "Sometimes"],
                ["Code that matches the design", "React + Tailwind, checked against Figma", "No", "Yes, its own design"],
                ["Domain screens", `${systems.length} product types`, "Usually one generic look", "One app shell"],
                ["Works with AI coding agents", "MCP server", "No", "No"],
                ["Free version", `Yes (${free?.name ?? "Loopo"})`, "Sometimes", "Sometimes"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-hair align-top">
                  <td className="py-2 pr-3 font-medium text-ink">{r[0]}</td>
                  <td className="py-2 pr-3">{r[1]}</td>
                  <td className="py-2 pr-3">{r[2]}</td>
                  <td className="py-2">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={P + " max-w-3xl"}>
          Comparing named kits? Read <Link href="/blog/best-dashboard-ui-kits" className={A}>the best dashboard UI kits</Link>, <Link href="/compare/ingot-ui-vs-untitled-ui" className={A}>Ingot UI vs Untitled UI</Link> or <Link href="/compare/ingot-ui-vs-shadcn-ui-blocks" className={A}>Ingot UI vs shadcn/ui blocks</Link>.
        </p>
      </Section>

      <Section edit="kit" id="plans" title="Free kit and Pro">
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="card p-4">
            <h3 className="text-[13px] font-medium">Free</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-mute">The {free?.name ?? "Loopo"} dashboard UI kit in Figma and code, the free components, 15 dashboard templates, the stroke icons and the MCP server with a daily limit. For personal and non-commercial projects.</p>
          </div>
          <div className="card p-4">
            <h3 className="text-[13px] font-medium">Pro, Team and Lifetime</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-mute">All {systems.length} kits, every component in Figma and React, every icon style, unlimited MCP and commercial use. Pay yearly, for a team, or once.</p>
          </div>
        </div>
        <p className="mt-3 flex flex-wrap items-center gap-1.5">
          <Link href="/pricing" className="btn-ink">See current prices</Link>
          <Link href="/license" className="btn-line">Read the licence</Link>
        </p>
      </Section>

      <Faq faq={faq} title="Dashboard UI kit questions" />

      <Section edit="kit" id="guides" title="Guides">
        <LinkCards links={guides} />
      </Section>
    </div>
  );
}
