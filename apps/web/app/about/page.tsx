import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { systems } from "@/lib/catalog";
import { stat } from "@/lib/blog/stats";
import { JsonLd, ORG_ID, abs, breadcrumbLd, fmt, pageMeta, STATS } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Ingot UI: how the components are made and checked",
  description: "What Ingot UI is, how its dashboard components are built from real product screens and checked against Figma, and the editorial policy behind its guides and comparisons.",
  path: "/about",
});

const H = "mt-10 scroll-mt-6 text-[15px] font-medium";
const P = "mt-2 text-[14px] leading-relaxed text-ink-2";

export default function About() {
  const gen = stat("gen") ?? 0;
  const figma = stat("figma") ?? 0;
  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["About", "/about"]]),
          { "@context": "https://schema.org", "@type": "AboutPage", name: "About Ingot UI", url: abs("/about"), about: { "@id": ORG_ID }, publisher: { "@id": ORG_ID } },
        ]}
      />
      <PageHead title="About" sub="What Ingot UI is, how it is made, and how we write about it." />
      <div className="mt-6 grid gap-10 lg:grid-cols-[180px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-5 flex flex-col text-[13px]" aria-label="On this page">
            {[["what", "What it is"], ["made", "How it is made"], ["numbers", "Our numbers"], ["editorial", "Editorial policy"], ["corrections", "Corrections"]].map(([id, l]) => (
              <a key={id} href={"#" + id} className="rounded-[6px] px-2 py-1 leading-snug text-mute hover:bg-tile hover:text-ink">{l}</a>
            ))}
          </nav>
        </aside>
        <article className="min-w-0 max-w-2xl">
          <h2 id="what" className={H + " !mt-0"}>What it is</h2>
          <p className={P}>
            Ingot UI is a library of {systems.length} dashboard design systems for founders and developers. It has {fmt(STATS.components)} components, {fmt(STATS.coded)} of them with React 19 and Tailwind CSS v4 code, {fmt(STATS.icons)} icons, a CLI, a shadcn-compatible registry and an <Link href="/mcp" className="font-medium text-ink underline underline-offset-2">MCP server</Link> so AI coding agents can build with the same components. The <Link href="/systems/loopo" className="font-medium text-ink underline underline-offset-2">Loopo</Link> system is free.
          </p>

          <h2 id="made" className={H}>How components are made</h2>
          <ol className="mt-3 flex flex-col gap-3">
            {[
              ["Real product screens first.", "Each system started as a complete set of product screens: overview, lists, detail drawers, create and confirm flows, settings. Components are taken from those screens, not drawn in isolation."],
              ["Named in a Figma library.", `Every block is kept as a named component on its system’s Figma library page: ${fmt(figma)} components across the ${systems.length} systems.`],
              ["Converted to React.", "Each Figma component is converted to React and Tailwind code that uses the system’s tokens and the Ingot icon set."],
              ["Checked against Figma.", `The code is rendered and its screenshot compared with the Figma original. Only components that pass are published with code: ${fmt(gen)} so far. The rest are shown as Figma only until they pass.`],
              ["Shown as they render.", "Component pages show a live render of the published code, not a picture of the design."],
            ].map(([h, b], i) => (
              <li key={h} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-chip text-[12px] font-medium text-ink tabular-nums">{i + 1}</span>
                <span><strong className="font-medium text-ink">{h}</strong> {b}</span>
              </li>
            ))}
          </ol>

          <h2 id="numbers" className={H}>Where numbers come from</h2>
          <p className={P}>
            Counts on this site and in the guides (components, code coverage, charts per system, source screens) are read from the library’s own data every time the site is built. When a component passes its check, the numbers change everywhere on the next release. We do not publish ratings, user counts or benchmarks we cannot show.
          </p>

          <h2 id="editorial" className={H}>Editorial policy</h2>
          <ul className="mt-3 border-t border-hair">
            {[
              "Guides answer the question first, then explain. Every guide is published by Ingot UI.",
              "When a guide compares tools and includes Ingot UI, it says so at the start.",
              "Other tools are described only by what their own public pages state, each with a “Best for” line that says where it is the better pick.",
              "Prices of other products are not quoted, because they change; we link to the source instead.",
              "No paid placements, affiliate links or sponsored rankings.",
              "Guides are reviewed and updated when the facts change; the updated date shows on the page.",
            ].map((x) => (
              <li key={x} className="border-b border-hair py-2.5 text-[14px] leading-relaxed text-ink-2">{x}</li>
            ))}
          </ul>

          <h2 id="corrections" className={H}>Corrections</h2>
          <p className={P}>
            If something in a guide is wrong or out of date, tell us through the feedback tool in the <Link href="/mcp" className="font-medium text-ink underline underline-offset-2">MCP server</Link> (send_feedback) and we will fix it and note the change in the <Link href="/changelog" className="font-medium text-ink underline underline-offset-2">changelog</Link>.
          </p>

          <p className="mt-10 flex flex-wrap gap-1.5">
            <Link href="/systems" className="btn-ink">See the systems</Link>
            <Link href="/blog" className="btn-line">Read the guides</Link>
          </p>
        </article>
      </div>
    </div>
  );
}
