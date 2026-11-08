"use client";
import { useState } from "react";
import { Icon, type IconName } from "./icons";
import { cx } from "./cx";

export interface NavItem {
  label: string;
  icon: IconName;
  badge?: number;
}

const DEFAULT: { group: string; items: NavItem[] }[] = [
  { group: "Workspace", items: [{ label: "Overview", icon: "home" }, { label: "Analytics", icon: "chart-capsule" }, { label: "Invoices", icon: "invoice", badge: 4 }, { label: "Customers", icon: "user" }] },
  { group: "Finance", items: [{ label: "Wallet", icon: "wallet" }, { label: "Cards", icon: "credit-card" }, { label: "Schedule", icon: "calendar" }] },
];

/** Sidebar navigation: grouped items, active surface with hairline, count badges, collapsible width. */
export function SidebarNav({ groups = DEFAULT, brand = "Loopo" }: { groups?: typeof DEFAULT; brand?: string }) {
  const [active, setActive] = useState("Overview");
  return (
    <nav className="flex w-60 flex-col gap-5 rounded-fu-lg border border-fu-line bg-fu-page p-3" aria-label="Main">
      <div className="flex items-center gap-2 px-2 pt-1">
        <span className="flex size-7 items-center justify-center rounded-fu-sm text-white shadow-fu-button [background:var(--fu-accent-grad)]">
          <Icon name="layers" size={15} />
        </span>
        <span className="text-[15px] font-medium tracking-[-0.02em] text-fu-ink">{brand}</span>
      </div>
      {groups.map((g) => (
        <div key={g.group} className="flex flex-col gap-0.5">
          <p className="px-2.5 pb-1 text-[11px] font-medium uppercase tracking-[0.05em] text-fu-faint">{g.group}</p>
          {g.items.map((it) => {
            const on = it.label === active;
            return (
              <button
                key={it.label}
                onClick={() => setActive(it.label)}
                aria-current={on ? "page" : undefined}
                className={cx(
                  "flex h-9 items-center gap-2.5 rounded-fu-md border px-2.5 text-[13px] font-medium transition-colors",
                  on ? "border-fu-line-strong bg-[#ececed] text-fu-ink" : "border-transparent text-fu-muted hover:bg-fu-hover hover:text-fu-body",
                )}
              >
                <Icon name={it.icon} size={17} />
                <span className="flex-1 text-left">{it.label}</span>
                {it.badge !== undefined && <span className="rounded-full bg-fu-surface px-1.5 text-[11px] tabular-nums text-fu-muted ring-1 ring-fu-line">{it.badge}</span>}
              </button>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
