"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Perm } from "@/lib/admin";
import { authClient } from "@/lib/auth-client";
import { AIcon, type AdminIconName } from "../admin-icons";
import { Sheet } from "../sheet";
import type { ShellUser } from "./account-menu";
import { areaBadge, locate, visibleAreas, type BadgeKey } from "./nav";
import { RoleTag } from "./role-tag";

/** Areas that get a slot in the phone tab bar, in order. Everything else lives in More. */
const BAR = ["home", "insights", "revenue", "support"];

const badgeText = (n: number) => (n > 99 ? "99+" : String(n));

/**
 * Phone navigation (below md): a bottom tab bar with Home, Insights, Revenue, Support and More, badges on the
 * queues (pending activations on Revenue, open tickets on Support), above the home indicator. More opens a sheet
 * with the other areas, View site, the account and Sign out. The bar slides away while the keyboard or a sheet is
 * up (shell sets data-kb, sheets set <html data-sheet>; see app/globals.css "Admin on phones").
 */
export function BottomBar({ perms, badges, user }: { perms: readonly Perm[]; badges: Partial<Record<BadgeKey, number>>; user: ShellUser }) {
  const path = usePathname();
  const areas = visibleAreas(perms);
  const current = locate(path, areas)?.area.id;
  const [more, setMore] = useState(false);
  const [busy, setBusy] = useState(false);
  const inBar = areas.filter((a) => BAR.includes(a.id));
  const rest = areas.filter((a) => !BAR.includes(a.id));
  const moreOn = !!current && !BAR.includes(current);
  const restBadge = rest.reduce((s, a) => s + areaBadge(a, badges), 0);

  const signOut = async () => {
    setBusy(true);
    await authClient.signOut().catch(() => {});
    window.location.assign("/admin/login");
  };

  const slot = (on: boolean) =>
    "relative flex h-14 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 text-[12px] leading-[15px] transition-colors duration-150 " + (on ? "font-medium text-ink" : "text-mute");
  const badge = (n: number, label: string) =>
    n > 0 && (
      <span className="absolute top-1.5 left-[calc(50%+6px)] min-w-[18px] rounded-full bg-ink px-1 text-center text-[12px] leading-[18px] font-medium text-white tabular-nums">
        {badgeText(n)}
        <span className="sr-only"> {label}</span>
      </span>
    );

  return (
    <>
      <nav aria-label="Admin areas" className="admin-bottombar fixed inset-x-0 bottom-0 z-40 border-t border-hair bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        <ul className="flex px-[max(4px,env(safe-area-inset-left))]">
          {inBar.map((a) => {
            const on = a.id === current;
            const n = areaBadge(a, badges);
            return (
              <li key={a.id} className="flex min-w-0 flex-1">
                <Link href={a.tabs[0].href} aria-current={on ? "page" : undefined} className={slot(on)}>
                  <AIcon name={a.icon} size={22} className={on ? "text-ink" : "text-mute"} />
                  <span className="max-w-full truncate px-1">{a.label}</span>
                  {badge(n, n === 1 ? "needs action" : "need action")}
                </Link>
              </li>
            );
          })}
          <li className="flex min-w-0 flex-1">
            <button type="button" onClick={() => setMore(true)} aria-haspopup="dialog" aria-expanded={more} aria-current={moreOn ? "page" : undefined} className={slot(moreOn)}>
              <AIcon name="dots" size={22} className={moreOn ? "text-ink" : "text-mute"} />
              More
              {badge(restBadge, "need action")}
            </button>
          </li>
        </ul>
      </nav>

      <Sheet open={more} onClose={() => setMore(false)} title="More">
        <ul className="-mx-2 flex flex-col">
          {rest.map((a) => (
            <MoreLink key={a.id} href={a.tabs[0].href} icon={a.icon} label={a.label} on={a.id === current} n={areaBadge(a, badges)} onPick={() => setMore(false)} sub={a.tabs.map((t) => t.label).join(", ")} />
          ))}
          <li className="mx-2 my-1 border-t border-hair" aria-hidden="true" />
          <li>
            {/* Full page load on purpose: the public site brings its own chrome and analytics. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="flex min-h-12 items-center gap-3 rounded-[10px] px-2 text-[15px] hover:bg-tile">
              <AIcon name="world" size={20} className="text-mute" />
              <span className="flex-1">View site</span>
              <AIcon name="external-link" size={16} className="text-faint" />
            </a>
          </li>
        </ul>

        <div className="mt-3 rounded-[12px] bg-tile p-3">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white" aria-hidden="true">
              {(user.name || user.email).slice(0, 1).toUpperCase()}
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2">
                <span className="truncate text-[15px] font-medium">{user.name || "No name"}</span>
                <RoleTag role={user.role} />
              </p>
              <p className="truncate text-[13px] text-mute">{user.email}</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a href="/account" className="btn-line !h-11 !bg-white">
              <AIcon name="user" size={16} />
              Your account
            </a>
            <button type="button" onClick={signOut} disabled={busy} className="btn-line !h-11 !bg-white disabled:opacity-60">
              <AIcon name="logout" size={16} />
              {busy ? "Signing out…" : "Sign out"}
            </button>
          </div>
        </div>
      </Sheet>
    </>
  );
}

function MoreLink({ href, icon, label, sub, on, n, onPick }: { href: string; icon: AdminIconName; label: string; sub: string; on: boolean; n: number; onPick: () => void }) {
  return (
    <li>
      <Link href={href} onClick={onPick} aria-current={on ? "page" : undefined} className={"flex min-h-14 items-center gap-3 rounded-[10px] px-2 py-2 hover:bg-tile " + (on ? "bg-tile" : "")}>
        <AIcon name={icon} size={20} className={on ? "text-ink" : "text-mute"} />
        <span className="min-w-0 flex-1">
          <span className={"block text-[15px] " + (on ? "font-medium" : "")}>{label}</span>
          <span className="block truncate text-[13px] text-mute">{sub}</span>
        </span>
        {n > 0 && (
          <span className="rounded-full bg-ink px-1.5 text-[12px] leading-5 text-white tabular-nums">
            {badgeText(n)}
            <span className="sr-only"> need action</span>
          </span>
        )}
        <AIcon name="chevron-right" size={16} className="text-faint" />
      </Link>
    </li>
  );
}
