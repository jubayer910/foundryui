import type { Perm } from "@/lib/admin";
import type { AdminIconName } from "../admin-icons";

/**
 * The admin sidebar, in order. To add a section: add an item to the right group with the permission that
 * guards its page (the same perm the page passes to requireStaff). Items the signed-in role can't open are
 * hidden. `badge` names a live count the panel layout computes (see BadgeKey).
 */
export type BadgeKey = "openTickets" | "pendingActivations";
export type NavItem = { href: string; label: string; icon: AdminIconName; perm: Perm; badge?: BadgeKey };
export type NavGroup = { label: string; items: NavItem[] };

export const NAV: NavGroup[] = [
  {
    label: "Dashboard",
    items: [
      { href: "/admin", label: "Overview", icon: "layout-dashboard", perm: "overview" },
      { href: "/admin/analytics", label: "Analytics", icon: "chart-line", perm: "analytics" },
      { href: "/admin/reports", label: "Reports", icon: "report-analytics", perm: "analytics" },
      { href: "/admin/referrals", label: "Referral links", icon: "click", perm: "analytics" },
    ],
  },
  {
    label: "Revenue",
    items: [
      { href: "/admin/revenue", label: "Revenue", icon: "report-money", perm: "revenue" },
      { href: "/admin/orders", label: "Orders", icon: "receipt", perm: "orders" },
      { href: "/admin/activations", label: "Activations", icon: "rosette-discount-check", perm: "orders", badge: "pendingActivations" },
      { href: "/admin/contra", label: "Contra sales", icon: "plug-connected", perm: "orders" },
      { href: "/admin/pricing", label: "Pricing & deal", icon: "tag", perm: "pricing" },
    ],
  },
  {
    label: "Customers",
    items: [
      { href: "/admin/users", label: "Users", icon: "users", perm: "users" },
      { href: "/admin/waitlist", label: "Waitlist", icon: "hourglass", perm: "waitlist" },
    ],
  },
  {
    label: "Content",
    items: [
      { href: "/admin/pages", label: "Pages", icon: "file-pencil", perm: "content" },
      { href: "/admin/posts", label: "Posts", icon: "article", perm: "content" },
      { href: "/admin/changelog", label: "Changelog", icon: "history", perm: "content" },
      { href: "/admin/kb", label: "Knowledge base", icon: "book", perm: "kb" },
      { href: "/admin/announcement", label: "Announcement", icon: "speakerphone", perm: "content" },
    ],
  },
  {
    label: "Support",
    items: [{ href: "/admin/support", label: "Inbox", icon: "inbox", perm: "support", badge: "openTickets" }],
  },
  {
    label: "Settings",
    items: [
      { href: "/admin/team", label: "Team", icon: "users-group", perm: "team" },
      { href: "/admin/settings", label: "Settings", icon: "settings", perm: "settings" },
    ],
  },
];

/** Pages that live outside the sidebar but still get a breadcrumb. */
const EXTRA: { href: string; label: string; group: string }[] = [{ href: "/admin/no-access", label: "No access", group: "Admin" }];

export type Crumb = { label: string; href?: string };

/** Breadcrumb for a pathname: group, section, and "Details" for anything below a section. */
export function crumbsFor(path: string): Crumb[] {
  const p = path.replace(/\/+$/, "") || "/admin";
  for (const g of NAV)
    for (const it of g.items) {
      const exact = p === it.href;
      const below = it.href !== "/admin" && p.startsWith(it.href + "/");
      if (exact) return [{ label: g.label }, { label: it.label }];
      if (below) return [{ label: g.label }, { label: it.label, href: it.href }, { label: "Details" }];
    }
  const x = EXTRA.find((e) => p === e.href);
  if (x) return [{ label: x.group }, { label: x.label }];
  return [{ label: "Admin" }];
}

export const isActive = (href: string, path: string) => (href === "/admin" ? path === "/admin" : path === href || path.startsWith(href + "/"));
