"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CIcon, type ChromeIconName } from "./chrome-icon";

type L = { href: string; label: string; icon: ChromeIconName; badge?: string };
const GROUPS: { h: string; links: L[] }[] = [
  {
    h: "Browse",
    links: [
      { href: "/", label: "Components", icon: "grid" },
      { href: "/templates", label: "Free templates", icon: "dashboard", badge: "new" },
      { href: "/categories", label: "Categories", icon: "template" },
      { href: "/charts", label: "Charts", icon: "chart" },
      { href: "/icons", label: "Icons", icon: "shapes" },
    ],
  },
  {
    h: "Build",
    links: [
      { href: "/mcp", label: "MCP for AI agents", icon: "plug" },
      { href: "/docs", label: "CLI and docs", icon: "terminal" },
      { href: "/blog", label: "Resources", icon: "book" },
      { href: "/compare", label: "Compare", icon: "git-compare" },
    ],
  },
  {
    h: "You",
    links: [
      { href: "/saved", label: "Saved and recent", icon: "bookmark" },
      { href: "/pricing", label: "Pricing", icon: "tag" },
    ],
  },
];

/** Hand-drawn "new" mark: pink lowercase word with a scribbled underline (our own drawing). */
function NewMark() {
  return (
    <span className="relative ml-1 inline-flex -rotate-3 flex-col items-center leading-none" aria-label="new">
      <span className="font-medium italic tracking-[-0.01em] text-[#e0177d]" style={{ fontSize: 12 }}>new</span>
      <svg width="26" height="6" viewBox="0 0 26 6" aria-hidden="true" className="-mt-0.5">
        <path d="M1 3.6c3.2-1.6 6.1-1.9 8.6-.7 2.2 1 4.6 1.2 7.4-.2 2.4-1.2 4.9-1.4 7.9-.4" fill="none" stroke="#e0177d" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M5 5.1c2.6-.9 5.6-1 8.4-.3" fill="none" stroke="#e0177d" strokeWidth="1" strokeLinecap="round" opacity=".7" />
      </svg>
    </span>
  );
}

export type RailSystem = { slug: string; name: string; accent: string; live: boolean };

export function RailNav({ systems, onNavigate }: { systems: RailSystem[]; onNavigate?: () => void }) {
  const path = usePathname();
  const on = (href: string) => (href === "/" ? path === "/" || path.startsWith("/components") : path.startsWith(href));
  const link = (l: L) => (
    <li key={l.href}>
      <Link
        href={l.href}
        onClick={onNavigate}
        aria-current={on(l.href) ? "page" : undefined}
        className={"flex h-7 items-center gap-2 rounded-[6px] px-2 text-[13px] transition-colors " + (on(l.href) ? "bg-tile text-ink" : "text-mute hover:text-ink")}
      >
        <CIcon name={l.icon} size={15} />
        {l.label}
        {l.badge && <NewMark />}
      </Link>
    </li>
  );
  return (
    <nav aria-label="Primary" className="flex flex-col gap-5">
      {GROUPS.slice(0, 2).map((g) => (
        <div key={g.h}>
          <p className="eyebrow mb-1 px-2">{g.h}</p>
          <ul className="flex flex-col">{g.links.map(link)}</ul>
        </div>
      ))}
      <div>
        <p className="eyebrow mb-1 px-2">{GROUPS[2].h}</p>
        <ul className="flex flex-col">{GROUPS[2].links.map(link)}</ul>
      </div>
    </nav>
  );
}
