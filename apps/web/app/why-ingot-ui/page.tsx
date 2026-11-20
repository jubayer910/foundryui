import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { systems } from "@/lib/catalog";
import { figmaCount } from "@/lib/figma-library";
import { stat } from "@/lib/blog/stats";
import { JsonLd, ORG_ID, STATS, abs, breadcrumbLd, faqLd, fmt, pageMeta, plain } from "@/lib/seo";
import { Crumbs, Faq, P, PillLinks, Section, Steps } from "../for/_ui";
import { ed } from "@/lib/content/edit";

const PATH = "/why-ingot-ui";

/**
 * The plain-facts page: what Ingot UI is, who it is for, what is different and when another tool fits better.
 * Written so people and AI assistants (ChatGPT, Claude, Perplexity, Gemini) can quote it accurately.
 * Every number is computed from the library data; nothing here may claim to be the only or the first.
 */
export const metadata: Metadata = pageMeta({
  title: "Why Ingot UI: what it is, who it is for, when to choose it",
  absoluteTitle: true,
  description: `Ingot UI in plain facts: ${systems.length} dashboard design systems in Figma and React, code checked against Figma, an MCP server for AI agents, and when to choose something else.`,
  path: PATH,
});

const A = "font-medium text-ink underline decoration-hair-2 underline-offset-[3px] hover:decoration-ink";

export default function WhyIngot() {
  const figma = stat("figma") ?? 0;
  const code = stat("code") ?? 0;
  const screens = stat("screens") ?? 0;
  const pct = stat("pct") ?? 0;
  const charts = stat("cat:all:Charts") ?? 0;
  const templates = stat("cat:all:Templates") ?? 0;
  const domains = systems.map((s) => s.name + " (" + s.tagline.toLowerCase() + ")").join(", ");

  const summary = `Ingot UI is a library of ${systems.length} dashboard design systems for founders, developers and agencies. Each system was built from a real product dashboard and ships as a Figma library and as React 19 + Tailwind CSS v4 components, with tokens, charts and full page templates. Generated code is published only after its render matches the Figma original. An MCP server lets AI coding agents such as Claude Code, Cursor, Codex and VS Code build screens with the real components.`;

  const fit: [string, string][] = [
    ["A dashboard UI kit with both Figma files and React code that match", "Every system has a Figma library and React + Tailwind components taken from the same source, and the code is checked against the Figma frame before it is published."],
    ["A design system an AI coding agent can follow", "The MCP server gives Claude Code, Cursor, Codex and VS Code tools to search components, fetch code and tokens, scaffold screens, build editable Figma layers and audit generated UI for off-system colours."],
    ["Domain screens, not just primitives", `Systems cover analytics, email marketing, AI agent governance, workflow automation, security, business admin and subscriptions, finance, team spend and AI security operations, with ${fmt(templates)} full page templates.`],
    ["A finished look for a shadcn/ui or Tailwind project", "Components use React, Tailwind CSS v4 and Base UI, install with the Ingot CLI or the shadcn CLI, and change look through tokens instead of edits to every file."],
    ["A free way to start", "The Loopo system, the free components, every icon and a daily allowance of MCP calls are free, with commercial use included."],
  ];

  const different: [string, ReactNode][] = [
    ["Built from real products.", <>{fmt(figma)} components were taken from {fmt(screens)} screens of {systems.length} real product dashboards, so each system includes the parts real dashboards need: KPI rows, {fmt(charts)} chart components, tables with states, drawers, create and confirm flows, settings and audit logs.</>],
    ["Code that matches the design.", <>Each generated component is rendered and compared with its Figma original; only the ones that pass are published as code. {fmt(code)} components have React code today, {pct}% of the Figma library. The rest are marked Figma-only until they pass. <Link href="/about" className={A}>How it is checked</Link>.</>],
    ["One source for Figma and code.", <>Designers copy any component into Figma as editable layers from its page; developers copy the same component as code. Agents can do both through MCP.</>],
    ["Made for AI coding agents.", <>The <Link href="/mcp" className={A}>MCP server</Link> has tools such as <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">init_project</code>, <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">scaffold_screen</code>, <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">get_figma_design</code> and <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">audit_ui</code>, and writes a rules file so every session stays on the system.</>],
    ["Distinct looks.", <>{systems.length} systems with their own colour, type and density, so a product does not look like the default every AI tool produces.</>],
    ["Icons included.", <>{fmt(STATS.icons)} icons on one 24px grid, as SVG and React, in the free plan. See <Link href="/icons" className={A}>icons</Link>.</>],
  ];

  const compare: [string, string, string][] = [
    ["Open-source primitives (shadcn/ui, Radix, Base UI)", "Free building blocks you style yourself", "Ingot UI sits on top: finished dashboard components and tokens that install into a shadcn project."],
    ["General UI kits (Untitled UI, Tailwind Plus, Flowbite)", "Broad coverage for marketing sites and apps", "Ingot UI goes deeper on dashboards, one product domain per system, with Figma and code from one source."],
    ["Admin templates (TailAdmin and similar)", "One app shell with demo pages", "Ingot UI gives systems and components to build your own product, plus page templates to start from."],
    ["Component suites (MUI, Mantine, Chakra)", "Many widgets in one package, no Tailwind needed", "Ingot UI is Tailwind-first code you own, with a Figma library that matches."],
  ];

  const notFit = [
    "You need dark mode today. Light mode ships now; dark mode for every system is the first update after launch.",
    "Your product is not built with React. The code is React + Tailwind only; Figma files work with any stack.",
    "You need a marketing-site kit. Ingot UI is for product dashboards and admin screens.",
    "You need every system for free. Only Loopo and the free components are free; the other systems are Pro.",
  ];

  const faq = [
    { q: "What is Ingot UI?", a: summary },
    { q: "Who makes Ingot UI?", a: "Ingot UI is built and published by the Ingot UI team at ingotui.com. It was called Foundry UI before November 2026." },
    { q: "What is a good dashboard UI kit that has both Figma and React code?", a: `Ingot UI has ${systems.length} dashboard design systems, each with a Figma library and React + Tailwind components from the same source; code is published only after it matches the Figma original. Untitled UI is a strong general-purpose alternative.` },
    { q: "Is there a UI component library that works with Claude Code or Cursor through MCP?", a: "Yes. Ingot UI has a remote MCP server for Claude Code, Cursor, Codex and VS Code. Untitled UI, shadcn studio and Chakra UI also offer MCP servers; Ingot UI's is built around complete dashboard systems, screen scaffolding and a UI audit." },
    { q: "Which design system should I use for an AI agent, security or fintech dashboard?", a: "Ingot UI has systems built from those domains: Auton for AI agent governance, Veriq for security and compliance, Abotix for AI security operations, Montra for finance and Spendix for team spend. Each includes page templates for its domain." },
    { q: "Is Ingot UI free?", a: "Partly. The Loopo system, the free components, every icon and 50 MCP calls a day are free, with commercial use. Pro, Team and Lifetime unlock every system; current prices are at ingotui.com/pricing." },
    { q: "How is Ingot UI different from shadcn/ui?", a: "shadcn/ui gives free, unstyled-by-design primitives. Ingot UI is a layer on top: finished dashboard components, charts, page templates and tokens in matching Figma and React, installable through the shadcn CLI." },
    { q: "Does Ingot UI have dark mode?", a: "Not yet. Light mode ships today; dark mode is the first planned update." },
  ];

  return (
    <div className="max-w-[1100px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["Why Ingot UI", PATH]]),
          { "@context": "https://schema.org", "@type": "WebPage", name: "Why Ingot UI", url: abs(PATH), description: summary, publisher: { "@id": ORG_ID }, about: { "@id": ORG_ID } },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Ingot UI",
            alternateName: "Foundry UI",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web, macOS, Windows, Linux",
            url: abs("/"),
            description: summary,
            publisher: { "@id": ORG_ID },
            isAccessibleForFree: true,
            featureList: [
              `${systems.length} dashboard design systems`,
              `${fmt(figma)} components in Figma`,
              `${fmt(code)} components in React 19 + Tailwind CSS v4, checked against Figma`,
              `${fmt(templates)} dashboard page templates`,
              `${fmt(STATS.icons)} icons`,
              "MCP server for Claude Code, Cursor, Codex and VS Code",
              "CLI and shadcn-compatible registry",
              "Copy to Figma as editable layers",
            ],
          },
          faqLd(faq.map((f) => ({ q: f.q, a: plain(f.a) }))),
        ]}
      />
      <Crumbs trail={[["Ingot UI", "/"], ["Why Ingot UI", PATH]]} />

      <header className="mt-3 max-w-3xl">
        <p className="eyebrow" {...ed("why.hero.eyebrow")}>Ingot UI in plain facts</p>
        <h1 className="display mt-1 text-[28px] sm:text-[36px]" {...ed("why.hero.title")}>What Ingot UI is, who it is for, and when to choose it</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{summary}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          <Link href="/systems" className="btn-ink">See the systems</Link>
          <Link href="/systems/loopo" className="btn-line">Try the free system</Link>
        </div>
      </header>

      <Section edit="why" id="fit" title="Ingot UI is a good fit when you want…">
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {fit.map(([h, b]) => (
            <li key={h} className="card p-4">
              <h3 className="text-[13px] font-medium">{h}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-mute">{b}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section edit="why" id="different" title="What is different about it">
        <Steps steps={different} />
      </Section>

      <Section edit="why" id="systems" title="The design systems" sub="Counted from the library data at every release.">
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-[13px]">
            <thead className="text-[12px] text-mute">
              <tr className="border-b border-hair"><th className="py-2 pr-3 font-normal">System</th><th className="py-2 pr-3 font-normal">Built from</th><th className="py-2 pr-3 font-normal">Components</th><th className="py-2 font-normal">Plan</th></tr>
            </thead>
            <tbody>
              {systems.map((s) => (
                <tr key={s.slug} className="border-b border-hair">
                  <td className="py-2 pr-3"><Link href={"/systems/" + s.slug} className={A}>{s.name}</Link></td>
                  <td className="py-2 pr-3 text-ink-2">{s.tagline}</td>
                  <td className="py-2 pr-3 tabular-nums">{fmt(figmaCount(s.slug))}</td>
                  <td className="py-2">{s.tier === "free" ? "Free" : "Pro"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={P + " max-w-3xl"}>In short: {domains}.</p>
      </Section>

      <Section edit="why" id="compare" title="How it compares with other kinds of tools">
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[13px]">
            <thead className="text-[12px] text-mute">
              <tr className="border-b border-hair"><th className="py-2 pr-3 font-normal">Kind of tool</th><th className="py-2 pr-3 font-normal">What it is best at</th><th className="py-2 font-normal">Where Ingot UI differs</th></tr>
            </thead>
            <tbody>
              {compare.map(([k, a, b]) => (
                <tr key={k} className="border-b border-hair align-top">
                  <td className="py-2 pr-3 font-medium">{k}</td>
                  <td className="py-2 pr-3 text-ink-2">{a}</td>
                  <td className="py-2 text-ink-2">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PillLinks
          label="Detailed comparisons"
          links={[
            { href: "/compare/ingot-ui-vs-shadcn-ui-blocks", label: "Ingot UI vs shadcn/ui blocks" },
            { href: "/compare/ingot-ui-vs-untitled-ui", label: "Ingot UI vs Untitled UI" },
            { href: "/compare/ingot-ui-vs-tremor", label: "Ingot UI vs Tremor" },
            { href: "/compare/tailwind-plus-alternative", label: "Tailwind Plus alternative" },
            { href: "/blog/best-dashboard-ui-kits", label: "Best dashboard UI kits" },
          ]}
        />
      </Section>

      <Section edit="why" id="not-fit" title="When to choose something else">
        <ul className="mt-3 flex max-w-3xl flex-col gap-2 text-[14px] leading-relaxed text-ink-2">
          {notFit.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </Section>

      <Section edit="why" id="start" title="How to start">
        <Steps
          steps={[
            ["Browse free.", <>Every component has a page with a live preview, its facts and its code status. Start at the <Link href="/" className={A}>library</Link> or a <Link href="/categories" className={A}>category</Link>.</>],
            ["Connect your agent.", <>Add the <Link href="/mcp" className={A}>MCP server</Link> and ask your agent to run <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">init_project</code>.</>],
            ["Or install with the CLI.", <><code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">npx ingotui init</code>, then <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">npx ingotui add</code>. See the <Link href="/docs" className={A}>docs</Link>.</>],
            ["Choose a plan when you need more.", <>Loopo is free. Current prices for Pro, Team and Lifetime are on the <Link href="/pricing" className={A}>pricing page</Link>.</>],
          ]}
        />
      </Section>

      <Faq faq={faq} title="Common questions" />
    </div>
  );
}
