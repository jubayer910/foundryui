/**
 * Every admin route the phone checks visit (scripts/check-admin-mobile.mts, scripts/admin-shots.mts), with the
 * seeded ids from `node scripts/check-reports.mts --seed`. LOCAL dev server only.
 */
export type AdminRoute = { name: string; path: string; anon?: boolean; click?: string[] };

export const ROUTES: AdminRoute[] = [
  { name: "home", path: "/admin" },
  { name: "insights", path: "/admin/analytics" },
  { name: "insights-traffic", path: "/admin/analytics/traffic" },
  { name: "insights-behavior", path: "/admin/analytics/behavior" },
  { name: "insights-buyers", path: "/admin/analytics/buyers" },
  { name: "insights-heard", path: "/admin/analytics/heard" },
  { name: "insights-users", path: "/admin/analytics/users" },
  { name: "insights-usage", path: "/admin/analytics/usage?g=day" },
  { name: "insights-revenue", path: "/admin/analytics/revenue" },
  { name: "insights-support", path: "/admin/analytics/support" },
  { name: "reports", path: "/admin/reports" },
  { name: "revenue", path: "/admin/revenue" },
  { name: "orders", path: "/admin/orders" },
  { name: "orders-subs", path: "/admin/orders?view=subs" },
  { name: "order-drawer", path: "/admin/orders?order=seed_p0" },
  { name: "activations", path: "/admin/activations" },
  { name: "contra", path: "/admin/contra" },
  { name: "pricing", path: "/admin/pricing" },
  { name: "users", path: "/admin/users" },
  { name: "user-drawer", path: "/admin/users?view=seed_u0" },
  { name: "user-detail", path: "/admin/users/seed_u0" },
  { name: "waitlist", path: "/admin/waitlist" },
  { name: "referrals", path: "/admin/referrals" },
  { name: "pages", path: "/admin/pages" },
  { name: "posts", path: "/admin/posts" },
  { name: "post-editor", path: "/admin/posts/seed_post0" },
  { name: "changelog", path: "/admin/changelog" },
  { name: "changelog-new", path: "/admin/changelog?new=1" },
  { name: "kb", path: "/admin/kb" },
  { name: "kb-new", path: "/admin/kb?new=1" },
  { name: "kb-gaps", path: "/admin/kb/gaps" },
  { name: "announcement", path: "/admin/announcement" },
  { name: "support", path: "/admin/support" },
  { name: "ticket-drawer", path: "/admin/support?view=seed_t49" },
  { name: "ticket", path: "/admin/support/seed_t49" },
  { name: "team", path: "/admin/team" },
  { name: "settings", path: "/admin/settings" },
  { name: "no-access", path: "/admin/no-access" },
  { name: "print", path: "/admin/reports/print" },
  { name: "login", path: "/admin/login", anon: true },
  { name: "invite", path: "/admin/invite/not-a-real-token", anon: true },
];

/** Screens with a sheet or panel open, for screenshots only (scripts/admin-shots.mts). */
export const SHEET_SHOTS: AdminRoute[] = [
  { name: "sheet-more", path: "/admin", click: ['nav[aria-label="Admin areas"] button[aria-haspopup="dialog"]'] },
  { name: "sheet-period", path: "/admin/analytics", click: ['main button[aria-label^="Period options"]'] },
  { name: "sheet-export", path: "/admin/reports", click: ['main button[aria-haspopup="menu"]'] },
  { name: "sheet-report-filters", path: "/admin/reports", click: ['#report-controls button[aria-controls]'] },
  { name: "sheet-filters", path: "/admin/orders?plan=pro", click: ['main button[aria-haspopup="dialog"]'] },
  { name: "sheet-search", path: "/admin/orders", click: ['header button[aria-label="Search"]'] },
  { name: "sheet-info", path: "/admin", click: ['main button[aria-label^="Definition of"]'] },
  { name: "sheet-user-tall", path: "/admin/users?view=seed_u0", click: ['[role=dialog] button[aria-label="Full height"]'] },
];

/** Sign in as the local reports owner (created on first run by check-reports) and return the cookie header. */
export async function session(base: string) {
  const OWNER = { email: "owner@reports.test", password: "reports-local-owner-2026", name: "Reports Owner" };
  const headers = { "content-type": "application/json", origin: base };
  await fetch(`${base}/api/auth/sign-up/email`, { method: "POST", headers, body: JSON.stringify(OWNER) }).catch(() => null);
  const res = await fetch(`${base}/api/auth/sign-in/email`, { method: "POST", headers, body: JSON.stringify({ email: OWNER.email, password: OWNER.password }) });
  const cookies = res.headers.getSetCookie().map((c) => c.split(";")[0]);
  if (!res.ok || !cookies.length) throw new Error(`sign-in failed: ${res.status}`);
  return cookies.join("; ");
}
