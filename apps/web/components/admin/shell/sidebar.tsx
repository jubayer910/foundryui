"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Perm } from "@/lib/admin";
import { Logo } from "@/components/site/logo";
import { AIcon } from "../admin-icons";
import { NAV, isActive, type BadgeKey } from "./nav";

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

/** Grouped admin navigation. Groups with no visible items are left out. */
export function Sidebar({ perms, badges, collapsed = false, onToggleCollapse, onNavigate, drawer = false }: Props) {
  const path = usePathname();
  const groups = NAV.map((g) => ({ ...g, items: g.items.filter((i) => perms.includes(i.perm)) })).filter((g) => g.items.length);
  const mini = collapsed && !drawer;
  return (
    <div className="flex h-full flex-col">
      <div className={"flex h-14 shrink-0 items-center gap-2 " + (mini ? "justify-center px-2" : "px-4")}>
        <Link href="/admin" onClick={onNavigate} aria-label="Ingot UI Admin, overview" className="flex items-center gap-2 rounded-[6px]">
          {mini ? <Logo withName={false} /> : <Logo />}
          {!mini && <span className="rounded-[5px] bg-ink px-1.5 py-px text-[11px] font-medium leading-[16px] text-white">Admin</span>}
        </Link>
      </div>
      <nav aria-label="Admin sections" className={"min-h-0 flex-1 overflow-y-auto pb-4 " + (mini ? "px-2" : "px-3")}>
        {groups.map((g, gi) => (
          <div key={g.label} className={gi ? (mini ? "mt-2 border-t border-hair pt-2" : "mt-5") : "mt-1"}>
            {mini ? <p className="sr-only">{g.label}</p> : <p className="mb-1 px-2 text-[11px] font-medium tracking-[0.02em] text-faint uppercase">{g.label}</p>}
            <ul className="flex flex-col gap-px">
              {g.items.map((it) => {
                const on = isActive(it.href, path);
                const n = it.badge ? (badges[it.badge] ?? 0) : 0;
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      onClick={onNavigate}
                      aria-current={on ? "page" : undefined}
                      title={mini ? it.label + (n ? `, ${n} open` : "") : undefined}
                      className={
                        "relative flex h-8 items-center rounded-[6px] text-[13px] transition-colors " +
                        (mini ? "justify-center" : "gap-2.5 px-2") +
                        (on ? " bg-white text-ink shadow-[0_0_0_1px_var(--color-hair-2),0_1px_2px_rgb(0_0_0/0.04)]" : " text-ink-2 hover:bg-black/[0.04] hover:text-ink")
                      }
                    >
                      <AIcon name={it.icon} size={16} className={on ? "text-ink" : "text-mute"} />
                      <span className={mini ? "sr-only" : "min-w-0 flex-1 truncate"}>{it.label}</span>
                      {!!n &&
                        (mini ? (
                          <span className="absolute -top-0.5 -right-0.5 min-w-4 rounded-full bg-ink px-1 text-center text-[10px] leading-4 text-white tabular-nums" aria-hidden="true">
                            {n > 99 ? "99+" : n}
                          </span>
                        ) : (
                          <span className="rounded-full bg-chip-2 px-1.5 text-[11px] leading-[18px] text-ink tabular-nums">
                            {n}
                            <span className="sr-only"> open</span>
                          </span>
                        ))}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
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
