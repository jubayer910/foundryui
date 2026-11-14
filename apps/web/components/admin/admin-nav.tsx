"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CIcon, type ChromeIconName } from "@/components/site/chrome-icon";
import { Icon, type IconName } from "@/registry/components/icons";
import { AIcon, type AdminIconName } from "./admin-icons";

type Item = { href: string; label: string; c?: ChromeIconName; i?: IconName; a?: AdminIconName; badge?: number };

/** Admin section nav: a column on desktop, a horizontal pill row on mobile. */
export function AdminNav({ openTickets }: { openTickets: number }) {
  const path = usePathname();
  const items: Item[] = [
    { href: "/admin", label: "Overview", c: "dashboard" },
    { href: "/admin/analytics", label: "Analytics", a: "chart-line" },
    { href: "/admin/pricing", label: "Pricing & deal", c: "tag" },
    { href: "/admin/orders", label: "Orders", c: "receipt" },
    { href: "/admin/users", label: "Users", i: "user" },
    { href: "/admin/support", label: "Support inbox", i: "chat", badge: openTickets },
    { href: "/admin/kb", label: "Knowledge base", c: "book" },
    { href: "/admin/waitlist", label: "Waitlist", c: "clock" },
    { href: "/admin/settings", label: "Settings", i: "sliders" },
  ];
  const on = (h: string) => (h === "/admin" ? path === "/admin" : path.startsWith(h));
  return (
    <nav aria-label="Admin" className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0">
      <p className="eyebrow mb-1 hidden px-2 lg:block">Admin</p>
      <ul className="flex gap-1.5 lg:flex-col lg:gap-0">
        {items.map((l) => (
          <li key={l.href} className="shrink-0">
            <Link
              href={l.href}
              aria-current={on(l.href) ? "page" : undefined}
              className={
                "flex h-7 items-center gap-2 rounded-full px-3 text-[13px] whitespace-nowrap transition-colors lg:rounded-[6px] lg:px-2 " +
                (on(l.href) ? "bg-ink text-white lg:bg-tile lg:text-ink" : "bg-chip text-ink lg:bg-transparent lg:text-mute lg:hover:text-ink")
              }
            >
              {l.a ? <AIcon name={l.a} size={15} /> : l.c ? <CIcon name={l.c} size={15} /> : <Icon name={l.i!} size={15} />}
              {l.label}
              {!!l.badge && <span className="ml-auto pl-1 text-[12px] tabular-nums opacity-60">{l.badge}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
