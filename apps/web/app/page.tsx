import Link from "next/link";
import { items, systems, SITE_URL } from "@/lib/catalog";
import { ItemCard } from "@/components/site/item-card";
import { Preview } from "@/components/site/preview";
import { HomeSearch } from "@/components/site/home-search";
import { Icon } from "@/registry/components/icons";
import iconStats from "@/lib/icon-stats.json";

const ICON_COUNT = iconStats.line;

const FEATURES = [
  { h: "One token system", b: "Colour, radius, type and shadow live in --fu-* tokens. Switch the system and every component follows." },
  { h: "Figma, code and image", b: "Every piece ships as React + Tailwind code, a Figma copy and PNG, SVG or JPEG. Same design in each." },
  { h: "Charts that look designed", b: "Gradient fills, inside strokes, highlight bands and hatch tracks. No default chart-library look." },
];

const FAQ = [
  { q: "Who is Foundry for?", a: "Founders, technical or not, who want a product that looks designed without hiring a design team. Designers use the Figma side, developers the code, and AI agents the MCP server." },
  { q: "What do I get for free?", a: "The full Loopo design system, every free component, the whole icon library and 50 MCP calls a day. Without an account you get 5 copies or downloads, then a free account removes that limit." },
  { q: "How does the MCP server work?", a: "Create a key on your account page and add one line to Claude Code, Cursor or Codex. Your agent can then search components, pull code with its dependencies, scaffold screens and audit UI against the system." },
  { q: "Can I use it in client and commercial work?", a: "Yes. Everything you copy is yours to ship in commercial products. You can't resell the library itself as a kit." },
  { q: "Is there dark mode?", a: "Light mode ships first. Dark mode is the first update after launch, and paid plans get it automatically." },
  { q: "Where do the icons come from?", a: "They are redrawn to one spec from open-licence sets (Tabler, Lucide, Iconoir), so they are free for commercial use. Our original icons are added on the same grid every month." },
];

export default function Home() {
  const gallery = ["kpi-card", "capsule-bars", "donut", "line-highlight", "stacked-blocks", "pill-meter", "ranked-list", "hatch-track-list", "data-table"]
    .map((s) => items.find((i) => i.slug === s)!)
    .filter(Boolean);
  const live = systems.filter((s) => s.status === "live").length;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgb(14_16_20/0.045),transparent)]" />
        <div className="relative mx-auto max-w-[1180px] px-4 pt-16 text-center sm:px-6 sm:pt-24">
          <Link href="/icons" className="inline-flex h-7 items-center gap-1.5 rounded-full bg-card px-3 text-[12px] text-ink-2 shadow-[inset_0_0_0_1px_var(--color-hair-2)] hover:text-ink">
            <Icon name="sparkle" size={13} className="text-ink" />
            New: {ICON_COUNT.toLocaleString("en-US")} icons and the Loopo system
            <Icon name="chevron-right" size={12} />
          </Link>
          <h1 className="display mx-auto mt-6 max-w-[820px] text-[44px] font-bold sm:text-[64px]">Design systems your AI agent can actually build with.</h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-relaxed text-ink-2">
            Components, charts and {ICON_COUNT.toLocaleString("en-US")} icons in one modern style, ready for Figma, React and the agent that writes your code.
          </p>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-fu-mono text-[11px] text-mute">
            <span className="text-faint">Works with</span>
            {["Figma", "React", "Tailwind v4", "shadcn", "Claude Code", "Cursor", "Codex"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>
          <div className="mx-auto mt-8 max-w-[640px]">
            <HomeSearch counts={{ components: items.length, icons: ICON_COUNT, systems: systems.length }} />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link href="/components" className="btn-ink">
              Browse free components <Icon name="arrow-up-right" size={14} />
            </Link>
            <Link href="/pricing" className="btn-line">
              See plans from $19
            </Link>
          </div>
          <p className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[12px] text-mute">
            {["Commercial use", "7-day refund", "Free tier, no card"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1">
                <Icon name="check" size={13} className="text-ink" /> {t}
              </span>
            ))}
          </p>
        </div>

        {/* Gallery */}
        <div className="mx-auto mt-14 max-w-[1180px] px-4 sm:px-6">
          <div className="hairgrid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((i) => (
              <ItemCard key={i.slug} item={i} index={items.indexOf(i)} />
            ))}
          </div>
          <div className="hairgrid -mt-px grid-cols-2 md:grid-cols-4">
            {[
              [ICON_COUNT.toLocaleString("en-US"), "icons on one 24px grid"],
              [String(items.length), "components, growing weekly"],
              [String(systems.length), `design systems, ${live} live now`],
              ["14", "MCP tools for your agent"],
            ].map(([n, l]) => (
              <div key={l} className="px-5 py-5">
                <p className="text-[34px] font-medium tracking-[-0.04em]">{n}</p>
                <p className="mt-0.5 text-[13px] text-mute">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 Why */}
      <section className="mx-auto max-w-[1180px] px-4 pt-28 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">01 — Why Foundry</p>
            <h2 className="display mt-4 max-w-[620px] text-[36px] sm:text-[52px]">Everything a product needs to look finished.</h2>
          </div>
          <Link href="/components" className="inline-flex items-center gap-1 text-[14px] font-medium underline underline-offset-4">
            Browse the library <Icon name="arrow-up-right" size={14} />
          </Link>
        </div>
        <div className="hairgrid mt-10 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div key={f.h} className="flex flex-col p-6">
              <p className="font-fu-mono text-[11px] text-faint">0{i + 1}</p>
              <h3 className="mt-3 text-[17px] font-medium tracking-[-0.02em]">{f.h}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mute">{f.b}</p>
              <div className="paper-grid mt-6 flex h-48 items-center justify-center overflow-hidden rounded-[10px] bg-card shadow-[inset_0_0_0_1px_var(--color-hair)]">
                <div className="w-full scale-[0.8]">
                  <Preview slug={["segmented-control", "kpi-card", "capsule-bars"][i]} size="card" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hairgrid -mt-px md:grid-cols-[1fr_1.2fr]">
          <div className="p-6">
            <p className="font-fu-mono text-[11px] text-faint">04</p>
            <h3 className="mt-3 text-[17px] font-medium tracking-[-0.02em]">Ready for React and shadcn</h3>
            <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-mute">Add any component with one command. It lands in your repo as plain TSX with its dependencies, following your tokens.</p>
          </div>
          <div className="bg-ink! p-6 font-fu-mono text-[12.5px] leading-[1.9] text-white/85">
            <p>
              <span className="text-white/40">$</span> npx foundryui init
            </p>
            <p>
              <span className="text-white/40">$</span> npx foundryui add kpi-card capsule-bars
            </p>
            <p className="text-white/40">✓ components/foundry/kpi-card.tsx</p>
            <p className="text-white/40">✓ components/foundry/chart-kit.tsx</p>
            <p className="mt-2">
              <span className="text-white/40">$</span> npx shadcn@latest add {SITE_URL}/r/donut.json
            </p>
          </div>
        </div>
      </section>

      {/* 02 MCP */}
      <section className="mx-auto max-w-[1180px] px-4 pt-28 sm:px-6">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">02 — MCP server</p>
            <h2 className="display mt-4 text-[36px] sm:text-[52px]">Your agent builds with the system.</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mute">Connect once. Then ask for a billing page in Loopo and your agent searches components, pulls the code with its dependencies, and audits what it wrote against the tokens.</p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                ["14 tools", "Search, get code, scaffold screens, audit UI, find icons."],
                ["Any client", "Claude Code, Cursor, Codex, Windsurf, VS Code."],
                ["Rules file", "init_project writes FOUNDRY.md so the agent stays on-system."],
              ].map(([h, b]) => (
                <li key={h} className="flex gap-3 text-[14px]">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0" />
                  <span>
                    <span className="font-medium">{h}.</span> <span className="text-mute">{b}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-2">
              <Link href="/mcp" className="btn-ink">
                Connect your agent <Icon name="arrow-up-right" size={14} />
              </Link>
              <Link href="/docs" className="btn-line">
                Read the docs
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[14px] bg-ink font-fu-mono text-[12.5px] leading-[1.9] text-white/85 shadow-[0_24px_48px_-24px_rgb(14_16_20/0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[11px] text-white/40">
              <span>claude code</span>
              <span>foundry-ui · connected</span>
            </div>
            <div className="p-5">
              <p>
                <span className="text-white/40">›</span> build a billing page with the Loopo system
              </p>
              <p className="mt-3 text-white/45">→ search_components “invoice table, plan card”</p>
              <p className="text-white/45">→ get_component_code data-table, kpi-card</p>
              <p className="text-white/45">→ search_icons “invoice, credit card”</p>
              <p className="text-white/45">→ audit_ui app/billing/page.tsx</p>
              <p className="mt-3">✓ app/billing/page.tsx · 0 off-system patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Systems */}
      <section className="mx-auto max-w-[1180px] px-4 pt-28 sm:px-6">
        <p className="eyebrow">03 — Design systems</p>
        <h2 className="display mt-4 max-w-[620px] text-[36px] sm:text-[52px]">Six systems. One library.</h2>
        <div className="hairgrid mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Link key={s.slug} href={"/systems/" + s.slug} className="group flex items-center gap-4 p-5 transition-colors hover:bg-card!">
              <span className="size-11 shrink-0 rounded-[10px]" style={{ background: "linear-gradient(160deg, " + s.accent + "40, " + s.accent + ")" }} />
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-medium">{s.name}</p>
                <p className="truncate text-[13px] text-mute">{s.tagline}</p>
              </div>
              <span className="font-fu-mono text-[10px] uppercase text-faint">{s.status === "live" ? "Live" : "Soon"}</span>
              <span className="sr-only">{i}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 04 Pricing */}
      <section className="mx-auto max-w-[1180px] px-4 pt-28 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">04 — Pricing</p>
            <h2 className="display mt-4 text-[36px] sm:text-[52px]">Start free. Pay once if you like.</h2>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-1 text-[14px] font-medium underline underline-offset-4">
            Compare plans <Icon name="arrow-up-right" size={14} />
          </Link>
        </div>
        <div className="hairgrid mt-10 md:grid-cols-3">
          {[
            ["Free", "$0", "Loopo system, free components, every icon, 50 MCP calls a day."],
            ["Pro", "$149 / yr", "All six systems, every component and chart, unlimited MCP and CLI."],
            ["Lifetime", "$299 once", "Everything in Pro forever, including future systems and dark mode."],
          ].map(([n, p, b]) => (
            <div key={n} className="p-6">
              <p className="font-fu-mono text-[11px] uppercase text-mute">{n}</p>
              <p className="mt-3 text-[32px] font-medium tracking-[-0.04em]">{p}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-mute">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 FAQ */}
      <section className="mx-auto max-w-[1180px] px-4 pt-28 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">05 — FAQ</p>
            <h2 className="display mt-4 text-[36px] sm:text-[52px]">Questions, answered.</h2>
          </div>
          <div className="border-t border-hair">
            {FAQ.map((f) => (
              <details key={f.q} className="group border-b border-hair">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-medium">
                  {f.q}
                  <Icon name="plus" size={16} className="shrink-0 text-mute transition-transform group-open:rotate-45" />
                </summary>
                <p className="-mt-1 pb-5 pr-8 text-[14px] leading-relaxed text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1180px] px-4 pt-28 sm:px-6">
        <div className="paper-grid rounded-[16px] bg-card px-6 py-16 text-center shadow-[inset_0_0_0_1px_var(--color-hair)]">
          <h2 className="display mx-auto max-w-[620px] text-[36px] sm:text-[52px]">Ship screens that look finished.</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-mute">Start with the free Loopo system and every icon. No card needed.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Link href="/sign-up" className="btn-ink">
              Create a free account
            </Link>
            <Link href="/components" className="btn-line">
              Browse the library
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
