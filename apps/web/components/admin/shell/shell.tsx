"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Perm } from "@/lib/admin";
import { AIcon } from "../admin-icons";
import { AccountMenu, type ShellUser } from "./account-menu";
import { crumbsFor, locate, visibleAreas, type BadgeKey } from "./nav";
import { QuickSearch } from "./quick-search";
import { AreaTabs, Sidebar } from "./sidebar";

const KEY = "ingot:admin-sidebar";

/**
 * The admin backend frame: sidebar of areas (216px, collapsible to icons on lg, a drawer below lg), top bar with
 * breadcrumb, quick search, View site and the account menu, the current area's tab row, and the content (up to 1280px).
 */
export function AdminShell({ user, perms, badges, children }: { user: ShellUser; perms: readonly Perm[]; badges: Partial<Record<BadgeKey, number>>; children: ReactNode }) {
  const path = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [searching, setSearching] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read after hydration so server and client render the same first frame.
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCollapsed(localStorage.getItem(KEY) === "1");
    } catch {}
  }, []);
  const toggle = () =>
    setCollapsed((c) => {
      try {
        localStorage.setItem(KEY, c ? "0" : "1");
      } catch {}
      return !c;
    });

  // Drawer: close on route change and Esc, keep focus inside while open, no page scroll behind it.
  const [lastPath, setLastPath] = useState(path);
  if (path !== lastPath) {
    setLastPath(path);
    setDrawer(false);
  }
  useEffect(() => {
    if (!drawer) return;
    const el = drawerRef.current;
    el?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawer(false);
        menuBtn.current?.focus();
      } else if (e.key === "Tab" && el) {
        const f = [...el.querySelectorAll<HTMLElement>("a[href],button:not([disabled])")];
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [drawer]);

  const crumbs = crumbsFor(path);
  // Sticky things below the top bar (table headers) sit at --admin-top: the bar is 56px, plus 40px when the area has tabs.
  const hasTabs = (locate(path, visibleAreas(perms))?.area.tabs.length ?? 0) > 1;

  return (
    <div className="min-h-dvh bg-white" style={{ ["--admin-top" as string]: hasTabs ? "97px" : "57px" }}>
      <a href="#admin-main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-[6px] focus:bg-ink focus:px-3 focus:py-2 focus:text-[13px] focus:text-white">
        Skip to content
      </a>

      {/* Desktop sidebar */}
      <aside
        className={"fixed inset-y-0 left-0 z-30 hidden border-r border-hair bg-[#fafafa] transition-[width] duration-200 ease-out lg:block " + (collapsed ? "w-[56px]" : "w-[216px]")}
        aria-label="Admin navigation"
      >
        <Sidebar perms={perms} badges={badges} collapsed={collapsed} onToggleCollapse={toggle} />
      </aside>

      {/* Mobile drawer */}
      <div className={"fixed inset-0 z-50 lg:hidden " + (drawer ? "" : "pointer-events-none")} aria-hidden={!drawer}>
        <div className={"absolute inset-0 bg-black/30 transition-opacity duration-200 " + (drawer ? "opacity-100" : "opacity-0")} onClick={() => setDrawer(false)} />
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Admin navigation"
          inert={!drawer}
          className={"absolute inset-y-0 left-0 w-[280px] max-w-[85vw] bg-[#fafafa] shadow-[0_0_0_1px_var(--color-hair-2),0_12px_40px_rgb(0_0_0/0.16)] transition-transform duration-200 ease-out " + (drawer ? "translate-x-0" : "-translate-x-full")}
        >
          <button type="button" onClick={() => setDrawer(false)} aria-label="Close navigation" className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-[6px] text-mute hover:bg-black/[0.04] hover:text-ink">
            <AIcon name="x" size={16} />
          </button>
          <Sidebar perms={perms} badges={badges} drawer onNavigate={() => setDrawer(false)} />
        </div>
      </div>

      <div className={"flex min-h-dvh min-w-0 flex-col transition-[padding] duration-200 ease-out " + (collapsed ? "lg:pl-[56px]" : "lg:pl-[216px]")}>
        <header className="sticky top-0 z-20 border-b border-hair bg-white/90 backdrop-blur">
          <div className="flex h-14 items-center gap-2 px-4 sm:px-6">
            <button
              ref={menuBtn}
              type="button"
              onClick={() => setDrawer(true)}
              aria-label="Open navigation"
              aria-expanded={drawer}
              className="-ml-1.5 flex size-8 items-center justify-center rounded-[6px] text-ink-2 hover:bg-tile lg:hidden"
            >
              <AIcon name="menu-2" size={18} />
            </button>

            {searching ? (
              <QuickSearch className="min-w-0 flex-1 md:hidden" autoFocus onDone={() => setSearching(false)} />
            ) : (
              <nav aria-label="Breadcrumb" className="min-w-0 flex-1 md:flex-none">
                <ol className="flex min-w-0 items-center gap-1.5 text-[13px]">
                  {crumbs.map((c, i) => {
                    const last = i === crumbs.length - 1;
                    return (
                      <li key={i} className={"flex min-w-0 items-center gap-1.5 " + (!last && i === 0 && crumbs.length > 1 ? "hidden sm:flex" : "")}>
                        {i > 0 && <AIcon name="chevron-right" size={13} className={"shrink-0 text-faint " + (i === 1 ? "hidden sm:block" : "")} />}
                        {last ? (
                          <span aria-current="page" className="truncate font-medium text-ink">
                            {c.label}
                          </span>
                        ) : c.href ? (
                          <Link href={c.href} className="truncate text-mute hover:text-ink">
                            {c.label}
                          </Link>
                        ) : (
                          <span className="truncate text-mute">{c.label}</span>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            <div className="ml-auto flex shrink-0 items-center gap-1.5 md:min-w-0 md:flex-1 md:justify-end">
              <QuickSearch className="hidden w-full max-w-[340px] md:block" />
              {!searching && (
                <button type="button" onClick={() => setSearching(true)} aria-label="Search" className="flex size-8 items-center justify-center rounded-[6px] text-ink-2 hover:bg-tile md:hidden">
                  <AIcon name="search" size={17} />
                </button>
              )}
              {/* Full page load on purpose: the public site brings its own chrome and analytics. */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="hidden h-8 items-center gap-1.5 rounded-[6px] px-2.5 text-[13px] text-ink-2 hover:bg-tile hover:text-ink sm:flex">
                View site
                <AIcon name="external-link" size={14} className="text-faint" />
              </a>
              <AccountMenu user={user} />
            </div>
          </div>
          <AreaTabs perms={perms} badges={badges} />
        </header>

        <main id="admin-main" tabIndex={-1} className="w-full max-w-[1328px] flex-1 px-4 pt-6 pb-16 outline-none sm:px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
