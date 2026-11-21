"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Perm } from "@/lib/admin";
import { Logo } from "@/components/site/logo";
import { AIcon } from "../admin-icons";
import { areaBadge, locate, visibleAreas, type BadgeKey } from "./nav";

type Props = {
  perms: readonly Perm[];
  badges: Partial<Record<BadgeKey, number>>;
  /** Icons only (lg and up). */
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  /** Called after a link is chosen (closes the mobile drawer). */
  onNavigate?: () => void;
  /** Rendered inside the mobile drawer. */
  drawer?: boolean;
};

/** The seven admin areas. Each links to the first tab the role can open; tabs live in the top bar. */
export function Sidebar({ perms, badges, collapsed = false, onToggleCollapse, onNavigate, drawer = false }: Props) {
  const path = usePathname();
  const areas = visibleAreas(perms);
  const current = locate(path, areas)?.area.id;
  const mini = collapsed && !drawer;
  return (
    <div className="flex h-full flex-col">
      <div className={"flex h-14 shrink-0 items-center gap-2 " + (mini ? "justify-center px-2" : "px-4")}>
        <Link href="/admin" onClick={onNavigate} aria-label="Ingot UI Admin, home" className="flex items-center gap-2 rounded-[6px]">
          {mini ? <Logo withName={false} /> : <Logo />}
          {!mini && <span className="rounded-[5px] bg-ink px-1.5 py-px text-[11px] font-medium leading-[16px] text-white">Admin</span>}
        </Link>
      </div>
      <nav aria-label="Admin areas" className={"min-h-0 flex-1 overflow-y-auto pt-2 pb-4 " + (mini ? "px-2" : "px-3")}>
        <ul className="flex flex-col gap-0.5">
          {areas.map((a) => {
            const on = a.id === current;
            const n = areaBadge(a, badges);
            return (
              <li key={a.id}>
                <Link
                  href={a.tabs[0].href}
                  onClick={onNavigate}
                  aria-current={on ? "page" : undefined}
                  title={mini ? a.label + (n ? `, ${n} need action` : "") : undefined}
                  className={
                    "relative flex h-8 items-center rounded-[6px] text-[13px] transition-colors duration-150 " +
                    (mini ? "justify-center" : "gap-2.5 px-2") +
                    (on ? " bg-white font-medium text-ink shadow-[0_0_0_1px_var(--color-hair-2),0_1px_2px_rgb(0_0_0/0.04)]" : " text-ink-2 hover:bg-black/[0.04] hover:text-ink")
                  }
                >
                  <AIcon name={a.icon} size={16} className={on ? "text-ink" : "text-mute"} />
                  <span className={mini ? "sr-only" : "min-w-0 flex-1 truncate"}>{a.label}</span>
                  {n > 0 &&
                    (mini ? (
                      <span className="absolute -top-0.5 -right-0.5 min-w-4 rounded-full bg-ink px-1 text-center text-[10px] leading-4 font-normal text-white tabular-nums" aria-hidden="true">
                        {n > 99 ? "99+" : n}
                      </span>
                    ) : (
                      <span className="rounded-full bg-chip-2 px-1.5 text-[11px] leading-[18px] font-normal text-ink tabular-nums">
                        {n}
                        <span className="sr-only"> need action</span>
                      </span>
                    ))}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {onToggleCollapse && (
        <div className={"hidden shrink-0 border-t border-hair py-2 lg:block " + (mini ? "px-2" : "px-3")}>
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label={mini ? "Expand sidebar" : "Collapse sidebar"}
            title={mini ? "Expand sidebar" : undefined}
            className={"flex h-8 w-full items-center rounded-[6px] text-[13px] text-mute hover:bg-black/[0.04] hover:text-ink " + (mini ? "justify-center" : "gap-2.5 px-2")}
          >
            <AIcon name={mini ? "layout-sidebar-left-expand" : "layout-sidebar-left-collapse"} size={16} />
            {!mini && "Collapse"}
          </button>
        </div>
      )}
    </div>
  );
}

/** Tabs of the current area, as one row under the top bar. Hidden for areas with a single tab. */
export function AreaTabs({ perms, badges }: { perms: readonly Perm[]; badges: Partial<Record<BadgeKey, number>> }) {
  const path = usePathname();
  const hit = locate(path, visibleAreas(perms));
  if (!hit || hit.area.tabs.length < 2) return null;
  return (
    <nav aria-label={`${hit.area.label} sections`} className="-mb-px overflow-x-auto px-4 [scrollbar-width:none] sm:px-6">
      <ul className="flex min-w-max gap-5">
        {hit.area.tabs.map((t) => {
          const on = t.href === hit.tab.href;
          const n = t.badge ? (badges[t.badge] ?? 0) : 0;
          return (
            <li key={t.href}>
              <Link
                href={t.href}
                aria-current={on ? "page" : undefined}
                className={
                  "flex h-10 items-center gap-1.5 border-b-2 text-[13px] whitespace-nowrap transition-colors duration-150 " +
                  (on ? "border-ink font-medium text-ink" : "border-transparent text-mute hover:text-ink")
                }
              >
                {t.label}
                {n > 0 && (
                  <span className="rounded-full bg-chip-2 px-1.5 text-[11px] leading-[18px] font-normal text-ink tabular-nums">
                    {n}
                    <span className="sr-only"> need action</span>
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
