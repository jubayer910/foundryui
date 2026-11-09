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
      { href: "/charts", label: "Charts", icon: "chart" },
      { href: "/icons", label: "Icons", icon: "shapes" },
    ],
  },
  {
    h: "Build",
    links: [
      { href: "/mcp", label: "MCP for AI agents", icon: "plug" },
      { href: "/docs", label: "CLI and docs", icon: "terminal" },
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
        <p className="eyebrow mb-1 px-2">Systems</p>
        <ul className="flex flex-col">
          {systems.map((s) => (
            <li key={s.slug}>
              <Link
                href={"/systems/" + s.slug}
                onClick={onNavigate}
                aria-current={path === "/systems/" + s.slug ? "page" : undefined}
                className={"flex h-7 items-center gap-2 rounded-[6px] px-2 text-[13px] transition-colors " + (path === "/systems/" + s.slug ? "bg-tile text-ink" : "text-mute hover:text-ink")}
              >
                <span className="size-3 rounded-[3px]" style={{ background: s.accent }} />
                {s.name}
                {!s.live && <span className="ml-auto text-[11px] text-faint">Soon</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-1 px-2">{GROUPS[2].h}</p>
        <ul className="flex flex-col">{GROUPS[2].links.map(link)}</ul>
      </div>
    </nav>
  );
}
