import Link from "next/link";
import { Suspense } from "react";
import { Icon } from "@/registry/components/icons";
import { AccountLink } from "./account-link";
import iconStats from "@/lib/icon-stats.json";

const NAV = [
  { href: "/components", label: "Components" },
  { href: "/charts", label: "Charts" },
  { href: "/icons", label: "Icons" },
  { href: "/systems", label: "Systems" },
  { href: "/mcp", label: "MCP" },
  { href: "/docs", label: "Docs" },
  { href: "/changelog", label: "Changelog" },
];

const NEWS = [
  { k: "Icons", v: iconStats.line.toLocaleString("en-US") + " icons in six styles on one 24px grid.", href: "/icons", cta: "Browse them" },
  { k: "Charts", v: "Seven charts with gradient fills, inside strokes and hatch tracks.", href: "/charts", cta: "See them" },
  { k: "MCP", v: "14 tools for Claude Code, Cursor and Codex. Your agent builds with the system.", href: "/mcp", cta: "Connect" },
  { k: "Loopo", v: "The first full design system is live: tokens, components and charts.", href: "/systems/loopo", cta: "Open it" },
];

function Ticker() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {NEWS.map((n) => (
        <Link key={n.k} href={n.href} className="flex shrink-0 items-center gap-2 text-[12px] text-ink-2 hover:text-ink">
          <span className="font-semibold text-ink">{n.k}:</span>
          {n.v}
          <span className="inline-flex items-center gap-0.5 font-medium text-ink">
            {n.cta} <Icon name="chevron-right" size={12} />
          </span>
          <Icon name="plus" size={12} className="ml-8 text-faint" />
        </Link>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-b border-hair bg-paper">
      <div className="ticker flex h-8 w-max items-center">
        {row}
        {row}
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <>
      <Ticker />
      <header className="sticky top-0 z-30 border-b border-hair bg-paper/88 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1180px] items-center gap-6 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-[16px] font-semibold tracking-[-0.03em] text-ink">
            <Icon name="layers" size={20} />
            foundry
          </Link>
          <nav className="mx-auto hidden items-center gap-5 lg:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="text-[13px] text-ink-2 transition-colors hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Link href="/pricing" className="btn-line hidden !h-9 sm:inline-flex">
              See pricing
            </Link>
            <Suspense fallback={<span className="h-9 w-28" />}>
              <AccountLink />
            </Suspense>
          </div>
        </div>
        <nav className="flex gap-5 overflow-x-auto border-t border-hair px-4 py-2 lg:hidden" aria-label="Primary mobile">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="shrink-0 text-[13px] text-ink-2">
              {n.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
