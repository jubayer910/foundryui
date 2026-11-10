import Link from "next/link";
import { items, systems, FIGMA_LIBRARY_COUNT } from "@/lib/catalog";
import { CATEGORIES, CODED_TOTAL, entries } from "@/lib/library";
import { railSystems } from "./rail";
import { Browser } from "./browser";
import { CIcon } from "./chrome-icon";
import iconStats from "@/lib/icon-stats.json";

const EXITS = [
  { icon: "terminal" as const, h: "React code", b: "Plain TSX on Tailwind v4, one command to add." },
  { icon: "template" as const, h: "Figma layer", b: "Paste into Figma and keep designing." },
  { icon: "plug" as const, h: "Your AI agent", b: "Claude Code, Cursor or Codex pull it through MCP." },
];

/** The home page is the library: one short intro row, then the components. */
export function LibraryPage({ q = "", c = "all", s = "all", intro = true }: { q?: string; c?: string; s?: string; intro?: boolean }) {
  const live = systems.filter((s) => s.status === "live").length;
  return (
    <div>
      <header className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h1 className="page-title">Components</h1>
        <p className="page-sub">Dashboard components that look finished, in code, Figma and for your AI agent.</p>
      </header>

      {intro && (
        <section aria-label="What you get" className="mt-4 grid gap-3 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div className="card p-4">
            <p className="text-[13px] font-medium">Built for founders who ship</p>
            <p className="mt-1 text-[13px] leading-snug text-mute">
              {(items.length + FIGMA_LIBRARY_COUNT).toLocaleString("en-US")} components, {CODED_TOTAL.toLocaleString("en-US")} of them with React code checked against Figma, {iconStats.line.toLocaleString("en-US")} icons and {systems.length} systems ({live} live). Copy as React code, a Figma layer or through your AI agent. Five copies free, no account needed.
            </p>
          </div>
          {EXITS.map((e) => (
            <div key={e.h} className="card flex gap-3 p-4 max-md:hidden">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-tile">
                <CIcon name={e.icon} size={16} />
              </span>
              <div>
                <p className="text-[13px] font-medium">{e.h}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-mute">{e.b}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      <div className="mt-5">
        <Browser entries={entries} categories={CATEGORIES} systems={railSystems} initialQuery={q} initialCategory={c} initialSystem={s} />
      </div>

      {intro && (
        <section className="mt-16 grid gap-3 md:grid-cols-3" aria-label="More">
          <Link href="/mcp" className="card group p-4 hover:bg-tile">
            <p className="text-[13px] font-medium">Connect your AI agent</p>
            <p className="mt-1 text-[13px] text-mute">One line in Claude Code or Cursor, and your agent builds with the system.</p>
          </Link>
          <Link href="/systems" className="card group p-4 hover:bg-tile">
            <p className="text-[13px] font-medium">Six design systems</p>
            <p className="mt-1 text-[13px] text-mute">Each one complete: tokens, components, charts and screens in one look.</p>
          </Link>
          <Link href="/pricing" className="card group p-4 hover:bg-tile">
            <p className="text-[13px] font-medium">Free, Pro or Lifetime</p>
            <p className="mt-1 text-[13px] text-mute">Start free with Loopo. Pay once for everything, including future systems.</p>
          </Link>
        </section>
      )}
    </div>
  );
}
