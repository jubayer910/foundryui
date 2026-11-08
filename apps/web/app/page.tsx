import Link from "next/link";
import { items, systems } from "@/lib/catalog";
import { ItemCard } from "@/components/site/item-card";
import { Preview } from "@/components/site/preview";
import { Icon } from "@/registry/components/icons";

const STEPS = [
  { icon: "layers" as const, title: "Pick a system", body: "Six complete design systems, each with tokens, components, charts and screens that belong together." },
  { icon: "code" as const, title: "Take it any way", body: "Copy React + Tailwind code, paste into Figma, download PNG / SVG / JPEG, or install with the CLI." },
  { icon: "sparkle" as const, title: "Let your agent build", body: "Connect the Foundry MCP to Claude Code, Cursor or Codex, then say “build my billing page with Loopo”." },
];

export default function Home() {
  const featured = ["kpi-card", "capsule-bars", "line-highlight", "data-table", "donut", "sidebar-nav"].map((s) => items.find((i) => i.slug === s)!).filter(Boolean);
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-fu-line-strong bg-fu-surface px-3 py-1 text-xs font-medium text-fu-body">
            <Icon name="sparkle" size={14} className="text-fu-accent" />
            Figma, code and MCP — always in sync
          </p>
          <h1 className="text-[40px] font-medium leading-[1.05] tracking-[-0.035em] text-fu-ink sm:text-[56px]">Ship a product that looks designed, without hiring a designer.</h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-fu-muted">
            Modern design systems, premium charts and dashboard components for founders. Use them in Figma, paste the code, or let your AI agent build with them through MCP.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/components" className="flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium text-white shadow-fu-button [background:var(--fu-primary-grad)]">
              Browse components <Icon name="arrow-up-right" size={16} />
            </Link>
            <Link href="/mcp" className="flex h-11 items-center gap-2 rounded-full border border-fu-line-strong bg-fu-surface px-5 text-[15px] font-medium text-fu-ink hover:bg-fu-hover">
              Connect your agent
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-fu-xl border border-fu-line bg-fu-surface p-5 shadow-fu-card">
            <div className="mb-2 flex items-baseline justify-between">
              <p className="text-sm font-medium text-fu-ink">Active users</p>
              <p className="text-xs text-fu-muted">Line with highlight band · Loopo</p>
            </div>
            <div className="pt-6">
              <Preview slug="line-highlight" size="page" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-fu-xl border border-fu-line bg-fu-surface shadow-fu-card">
              <Preview slug="kpi-card" />
            </div>
            <div className="overflow-hidden rounded-fu-xl border border-fu-line bg-fu-surface shadow-fu-card">
              <Preview slug="pill-meter" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-fu-line bg-fu-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-3 sm:px-6">
          {STEPS.map((s, i) => (
            <div key={s.title}>
              <span className="flex size-9 items-center justify-center rounded-fu-sm border border-fu-line bg-fu-page text-fu-ink">
                <Icon name={s.icon} size={18} />
              </span>
              <p className="mt-4 font-fu-mono text-[11px] text-fu-faint">0{i + 1}</p>
              <h2 className="mt-1 text-base font-medium tracking-[-0.01em] text-fu-ink">{s.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-fu-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em] text-fu-ink">Six systems. One library.</h2>
            <p className="mt-1 text-sm text-fu-muted">Every component is token-driven, so it adapts to each system.</p>
          </div>
          <Link href="/systems" className="hidden text-sm font-medium text-fu-ink underline underline-offset-4 sm:block">
            All systems
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s) => (
            <Link key={s.slug} href={"/systems/" + s.slug} className="group flex items-center gap-4 rounded-fu-lg border border-fu-line bg-fu-surface p-4 transition-shadow hover:shadow-fu-overlay">
              <span className="size-11 shrink-0 rounded-fu-md" style={{ background: "linear-gradient(160deg, " + s.accent + "33, " + s.accent + ")" }} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-fu-ink">{s.name}</p>
                <p className="truncate text-[13px] text-fu-muted">{s.tagline}</p>
              </div>
              <span className={"rounded-full px-2 py-0.5 text-[11px] font-medium " + (s.status === "live" ? "bg-fu-positive-soft text-fu-positive" : "bg-fu-hover text-fu-muted")}>{s.status === "live" ? "Live" : "In progress"}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-fu-ink">Featured components</h2>
          <Link href="/components" className="text-sm font-medium text-fu-ink underline underline-offset-4">
            Browse all {items.length}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((i) => (
            <ItemCard key={i.slug} item={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
