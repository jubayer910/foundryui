import type { Metadata } from "next";
import Link from "next/link";
import { items, systems } from "@/lib/catalog";
import { figmaCount } from "@/lib/figma-library";
import { codeCount } from "@/lib/library";
import { stat } from "@/lib/blog/stats";
import { getPost } from "@/lib/blog";
import { SHOWCASE } from "@/components/showcase/data";
import { ShowcaseSwitcher, type SwitcherSystem } from "@/components/site/showcase/showcase-switcher";
import { IlloTile } from "@/components/site/illo";
import { JsonLd, ORG_ID, STATS, abs, breadcrumbLd, faqLd, fmt, pageMeta } from "@/lib/seo";
import { Crumbs, Faq, LinkCards, P, PillLinks, Section, Steps } from "../_ui";

const PATH = "/for/founders";

export const metadata: Metadata = pageMeta({
  title: "SaaS dashboard UI for founders without a designer",
  absoluteTitle: true,
  description: `Build a dashboard that looks finished without a designer: pick one of ${systems.length} design systems, connect your AI agent and it builds on-system screens.`,
  path: PATH,
});

const A = "font-medium text-ink underline decoration-hair-2 underline-offset-[3px] hover:decoration-ink";

export default function ForFounders() {
  const figma = stat("figma") ?? 0;
  const code = stat("code") ?? 0;
  const screens = stat("screens") ?? 0;
  const charts = stat("cat:all:Charts") ?? 0;
  const best = Math.max(...SHOWCASE.flatMap((s) => s.screens.map((x) => x.qa?.perceptual ?? 0)));

  const showcase: SwitcherSystem[] = SHOWCASE.map((s) => {
    const m = systems.find((x) => x.slug === s.system);
    return { ...s, name: m?.name ?? s.system, accent: m?.accent ?? "#0b0b0b" };
  });

  const faq = [
    { q: "I have no designer. Will my product still look like a template?", a: `Less than with defaults. Each of the ${systems.length} systems was designed as one complete product, so the overview, tables, drawers and settings already agree on spacing, colour and type. You choose the look once; your agent builds every screen in it.` },
    { q: "Which AI coding agents work with Ingot UI?", a: "Any agent that supports MCP: Claude Code, Cursor, VS Code and Codex have setup steps on the [MCP page](/mcp). Ask it to run `init_project` first so later sessions stay on the system." },
    { q: "Can I use it without an agent?", a: "Yes. Copy any component as React and Tailwind code, install it with `npx ingotui add` or the shadcn CLI, or paste it into Figma from its page." },
    { q: "What does it cost to start?", a: "Nothing. The Loopo system and the free components are free, with a daily limit on MCP calls. Pro unlocks all six systems. Current prices are on the [pricing page](/pricing)." },
    { q: "Is the code mine?", a: "Yes. It is plain React and Tailwind code in your repo. What you have copied stays yours to ship if you stop paying. The [licence page](/license) has the details." },
    { q: "Does it have dark mode?", a: "Not yet. Light mode ships today; dark mode for all six systems is the first update." },
  ];

  const guides = ["ai-generated-dashboard-design", "claude-code-frontend-ui", "mcp-server-ui-components-ai-agents", "saas-dashboard-examples", "cursor-rules-design-system", "best-dashboard-ui-kits"]
    .map((s) => getPost(s))
    .filter((p) => !!p)
    .map((p) => ({ href: "/blog/" + p.slug, title: p.title }));

  return (
    <div className="max-w-[1200px]">
      <JsonLd
        data={[
          breadcrumbLd([["Ingot UI", "/"], ["For founders", PATH]]),
          { "@context": "https://schema.org", "@type": "WebPage", name: "Ingot UI for founders", url: abs(PATH), publisher: { "@id": ORG_ID }, about: { "@id": ORG_ID } },
          faqLd(faq.map((f) => ({ q: f.q, a: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/`([^`]+)`/g, "$1") }))),
        ]}
      />
      <Crumbs trail={[["Ingot UI", "/"], ["For founders", PATH]]} />

      <header className="mt-3 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <p className="eyebrow">For founders</p>
          <h1 className="display mt-1 text-[28px] sm:text-[36px]">A dashboard that looks finished, without a designer</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-2">
            Pick one of {systems.length} complete dashboard design systems, connect your AI coding agent, and it builds your screens with real components and tokens instead of improvising. Or copy the components yourself, in React or Figma.
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            <Link href="/mcp" className="btn-ink">Connect your agent</Link>
            <Link href="/systems/loopo" className="btn-line">Try the free system</Link>
          </div>
          <p className="mt-3 text-[12px] text-mute">Free to start. No card needed.</p>
        </div>
        <IlloTile scene="founders" label="A founder's product built from one design system" className="h-[200px] sm:h-[260px]" />
      </header>

      <Section id="problem" title="Why AI-built dashboards all look the same">
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            ["exploded", "Same defaults everywhere", <>Coding agents reach for the same starter components and colours, so many new products share one look. Our guide explains <Link href="/blog/ai-generated-dashboard-design" className={A}>why AI dashboards look generic</Link>.</>],
            ["lost", "No designer to set the rules", <>Without a system to follow, each screen drifts: a different card radius here, a new grey there. Fixing near-misses by hand eats the time you saved.</>],
            ["screen", "Weeks to the first real screen", <>Designing an overview, tables, drawers and settings that work together is the slow part. Most founders want to ship the product, not the kit.</>],
          ].map(([scene, h, b]) => (
            <div key={h as string} className="card overflow-hidden">
              <IlloTile scene={scene as string} label={h as string} className="h-[130px] rounded-none" />
              <div className="p-4">
                <h3 className="text-[13px] font-medium">{h}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-mute">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="how" title="How Ingot UI solves it" sub="Three steps, or skip the agent and copy.">
        <div className="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Steps
            steps={[
              ["Pick a system.", <>Each of the <Link href="/systems" className={A}>{systems.length} systems</Link> comes from a real product, with its own tokens, components, charts and page templates. Loopo is free.</>],
              ["Connect your agent.", <>Add the <Link href="/mcp" className={A}>MCP server</Link> to Claude Code, Cursor, VS Code or Codex. <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">init_project</code> writes the tokens and a rules file so every session stays on the system.</>],
              ["Describe the screen.", <>Your agent calls <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">scaffold_screen</code> and <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">add_components</code>, then <code className="rounded-[4px] bg-tile px-1 font-fu-mono text-[0.88em]">audit_ui</code> flags any off-system colour or spacing.</>],
              ["Or copy it yourself.", <>Every component page has the React and Tailwind code and a “Copy to Figma” button. Start from <Link href="/categories/page-templates" className={A}>page templates</Link> or <Link href="/categories/kpi-cards" className={A}>KPI cards</Link>.</>],
            ]}
          />
          <IlloTile scene="agent" label="An AI agent building screens from the design system" className="h-[220px]" />
        </div>
      </Section>

      <Section id="showcase" title="What your agent builds" sub="Real dashboards made from the components. Pick a system.">
        <ShowcaseSwitcher systems={showcase} />
      </Section>

      <Section id="proof" title="What is in the library today" sub="Counted from the library data at every release.">
        <dl className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {[
            [fmt(systems.length), "complete design systems"],
            [fmt(figma), "components in Figma"],
            [fmt(code), "with React code"],
            [fmt(charts), "chart components"],
            [fmt(STATS.icons), "icons"],
            [fmt(screens), "source product screens"],
          ].map(([n, l]) => (
            <div key={l} className="card p-4">
              <dt className="text-[12px] text-mute">{l}</dt>
              <dd className="mt-1 text-[22px] font-medium tabular-nums tracking-tight">{n}</dd>
            </div>
          ))}
        </dl>
        <p className={P + " max-w-2xl"}>
          Code is published only after its render is compared with the Figma original; the coded showcase screens above match at up to {best}%. How it is checked is on the <Link href="/about" className={A}>about page</Link>.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {systems.map((s) => {
            const coded = (s.status === "live" ? items.length : 0) + codeCount(s.slug);
            return (
              <li key={s.slug}>
                <Link href={"/systems/" + s.slug} className="card flex h-full items-start gap-3 p-4 transition-colors hover:bg-tile">
                  <span aria-hidden="true" className="mt-0.5 size-5 shrink-0 rounded-[5px]" style={{ background: s.accent }} />
                  <span className="min-w-0">
                    <span className="flex items-baseline gap-2">
                      <span className="text-[13px] font-medium">{s.name}</span>
                      {s.tier === "free" && <span className="rounded-full bg-chip px-2 py-px text-[11px]">Free</span>}
                    </span>
                    <span className="mt-0.5 block text-[12.5px] text-mute">{s.tagline}</span>
                    <span className="mt-1 block text-[12px] tabular-nums text-mute">{fmt(figmaCount(s.slug))} components, {fmt(coded)} in code</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="pricing" title="Pricing">
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="card p-4">
            <h3 className="text-[13px] font-medium">Free</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-mute">The Loopo system, the free components in code, every icon and the MCP server with a daily call limit. Commercial use included.</p>
          </div>
          <div className="card p-4">
            <h3 className="text-[13px] font-medium">Pro</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-mute">All {systems.length} systems, every component in React and Figma and unlimited MCP. Pay monthly, yearly or once.</p>
          </div>
        </div>
        <p className="mt-3 flex flex-wrap items-center gap-1.5">
          <Link href="/pricing" className="btn-ink">See current prices</Link>
          <Link href="/license" className="btn-line">Read the licence</Link>
        </p>
      </Section>

      <Faq faq={faq} title="Questions founders ask" />

      <Section id="guides" title="Guides for founders">
        <LinkCards links={guides} />
      </Section>

      <Section id="compare" title="Comparing options?">
        <PillLinks
          label="Comparisons"
          links={[
            { href: "/compare/ingot-ui-vs-shadcn-ui-blocks", label: "vs shadcn/ui blocks" },
            { href: "/compare/ingot-ui-vs-untitled-ui", label: "vs Untitled UI" },
            { href: "/compare/ingot-ui-vs-tremor", label: "vs Tremor" },
            { href: "/compare/tailwind-plus-alternative", label: "Tailwind Plus alternative" },
            { href: "/for/agencies", label: "Ingot UI for agencies" },
          ]}
        />
      </Section>

      <div className="mt-14 card flex flex-wrap items-center gap-3 p-5">
        <p className="w-full text-[14px] font-medium sm:w-auto sm:min-w-0 sm:flex-1">Start with the free Loopo system and your agent.</p>
        <Link href="/mcp" className="btn-ink">Connect your agent</Link>
        <Link href="/systems" className="btn-line">See all systems</Link>
      </div>
    </div>
  );
}
