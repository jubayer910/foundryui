import type { Perm } from "@/lib/admin";
import type { AdminIconName } from "../admin-icons";

/**
 * Admin navigation: seven areas in the sidebar, each with tabs shown in one row under the top bar
 * (app/admin/DESIGN.md, "Information architecture"). Every tab is an existing URL guarded by the same perm its
 * page passes to requireStaff. To add a page: add a tab to the right area. An area shows when the role can open
 * at least one of its tabs and links to the first one it can open. `badge` names a live count the panel layout
 * computes (see BadgeKey); badges are for queues that need action only.
 */
export type BadgeKey = "openTickets" | "pendingActivations";
export type NavTab = { href: string; label: string; perm: Perm; badge?: BadgeKey };
export type NavArea = { id: string; label: string; icon: AdminIconName; tabs: NavTab[] };

export const AREAS: NavArea[] = [
  { id: "home", label: "Home", icon: "home", tabs: [{ href: "/admin", label: "Home", perm: "overview" }] },
  {
    id: "insights",
    label: "Insights",
    icon: "chart-line",
    tabs: [
      { href: "/admin/analytics", label: "Overview", perm: "analytics" },
      { href: "/admin/analytics/traffic", label: "Traffic", perm: "analytics" },
      { href: "/admin/analytics/behavior", label: "Behavior", perm: "analytics" },
      { href: "/admin/analytics/users", label: "Users", perm: "analytics" },
      { href: "/admin/analytics/usage", label: "Usage", perm: "analytics" },
      { href: "/admin/analytics/revenue", label: "Revenue", perm: "analytics" },
      { href: "/admin/analytics/support", label: "Support", perm: "analytics" },
      { href: "/admin/reports", label: "Reports", perm: "analytics" },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    icon: "users",
    tabs: [
      { href: "/admin/users", label: "Users", perm: "users" },
      { href: "/admin/waitlist", label: "Waitlist", perm: "waitlist" },
      { href: "/admin/referrals", label: "Referral links", perm: "analytics" },
    ],
  },
  {
    id: "revenue",
    label: "Revenue",
    icon: "report-money",
    tabs: [
      { href: "/admin/revenue", label: "Overview", perm: "revenue" },
      { href: "/admin/orders", label: "Orders", perm: "orders" },
      { href: "/admin/activations", label: "Activations", perm: "orders", badge: "pendingActivations" },
      { href: "/admin/contra", label: "Contra sales", perm: "orders" },
      { href: "/admin/pricing", label: "Pricing & deal", perm: "pricing" },
    ],
  },
  {
    id: "content",
    label: "Content",
    icon: "file-pencil",
    tabs: [
      { href: "/admin/pages", label: "Pages", perm: "content" },
      { href: "/admin/posts", label: "Posts", perm: "content" },
      { href: "/admin/changelog", label: "Changelog", perm: "content" },
      { href: "/admin/kb", label: "Knowledge base", perm: "kb" },
      { href: "/admin/announcement", label: "Announcement", perm: "content" },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: "lifebuoy",
    tabs: [
      { href: "/admin/support", label: "Inbox", perm: "support", badge: "openTickets" },
      { href: "/admin/kb/gaps", label: "Bot questions", perm: "kb" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "settings",
    tabs: [
      { href: "/admin/team", label: "Team", perm: "team" },
      { href: "/admin/settings", label: "Settings", perm: "settings" },
    ],
  },
];

/** Areas and tabs the role can open; areas without a tab are left out. */
export const visibleAreas = (perms: readonly Perm[]) =>
  AREAS.map((a) => ({ ...a, tabs: a.tabs.filter((t) => perms.includes(t.perm)) })).filter((a) => a.tabs.length);

const below = (href: string, p: string) => p === href || (href !== "/admin" && p.startsWith(href + "/"));

/** The tab a path belongs to: the longest tab href that is the path or a parent of it (so /admin/kb/gaps is Support). */
export function locate(path: string, areas: NavArea[] = AREAS): { area: NavArea; tab: NavTab } | null {
  const p = path.replace(/\/+$/, "") || "/admin";
  let best: { area: NavArea; tab: NavTab } | null = null;
  for (const area of areas) for (const tab of area.tabs) if (below(tab.href, p) && (!best || tab.href.length > best.tab.href.length)) best = { area, tab };
  return best;
}

/** Pages that live outside the navigation but still get a breadcrumb. */
const EXTRA: { href: string; label: string }[] = [{ href: "/admin/no-access", label: "No access" }];

export type Crumb = { label: string; href?: string };

/** Breadcrumb for a pathname: the area; below a tab also the tab (when the area has more than one) and "Details". */
export function crumbsFor(path: string): Crumb[] {
  const p = path.replace(/\/+$/, "") || "/admin";
  const hit = locate(p);
  if (hit) {
    const { area, tab } = hit;
    const deeper = p !== tab.href;
    // On a tab page the tab row already names the tab, so the breadcrumb is the area alone.
    if (!deeper) return [{ label: area.label }];
    return [{ label: area.label, href: area.tabs[0].href }, ...(area.tabs.length > 1 ? [{ label: tab.label, href: tab.href }] : []), { label: "Details" }];
  }
  const x = EXTRA.find((e) => p === e.href);
  if (x) return [{ label: x.label }];
  return [{ label: "Admin" }];
}

/** Badge count of an area: the sum of its tab badges the role can see. */
export const areaBadge = (a: NavArea, badges: Partial<Record<BadgeKey, number>>) => a.tabs.reduce((s, t) => s + (t.badge ? (badges[t.badge] ?? 0) : 0), 0);
