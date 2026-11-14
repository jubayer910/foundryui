import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { getSessionUser, type SessionUser } from "./auth";
import { getDb, getEnv, schema } from "./db";
import { getSettings } from "./settings";

/* ---- Roles and permissions (ADMIN-SYSTEM.md, "Auth, roles and team") ---- */

export type Role = "user" | "moderator" | "admin" | "owner";
export type StaffRole = Exclude<Role, "user">;
export const STAFF_ROLES: StaffRole[] = ["moderator", "admin", "owner"];
export const isStaffRole = (r: string): r is StaffRole => (STAFF_ROLES as string[]).includes(r);
/** Higher number = more rights. */
export const ROLE_RANK: Record<Role, number> = { user: 0, moderator: 1, admin: 2, owner: 3 };

/**
 * One permission per admin area. Pages and server actions check one of these with requireStaff(perm).
 * - overview, analytics: dashboard (read)
 * - revenue, orders, pricing: money (pricing also covers the deal)
 * - users, waitlist: customers
 * - content: posts, changelog, announcement bar
 * - kb: knowledge base
 * - support: inbox and replies
 * - settings: support addresses, integrations, audit log
 * - team: staff list, invites, roles (owner and admin; only the owner manages admins)
 */
export type Perm = "overview" | "analytics" | "revenue" | "orders" | "pricing" | "users" | "waitlist" | "content" | "kb" | "support" | "settings" | "team";

const ALL: Perm[] = ["overview", "analytics", "revenue", "orders", "pricing", "users", "waitlist", "content", "kb", "support", "settings", "team"];

export const PERMS: Record<Role, readonly Perm[]> = {
  user: [],
  moderator: ["overview", "analytics", "support", "kb", "content"],
  admin: ALL,
  owner: ALL,
};

/** Human label for a permission, used on the no-access page. */
export const PERM_LABEL: Record<Perm, string> = {
  overview: "Overview",
  analytics: "Analytics",
  revenue: "Revenue",
  orders: "Orders",
  pricing: "Pricing & deal",
  users: "Users",
  waitlist: "Waitlist",
  content: "Content",
  kb: "Knowledge base",
  support: "Support",
  settings: "Settings",
  team: "Team",
};

export const isPerm = (p: string): p is Perm => (ALL as string[]).includes(p);

export function can(role: Role | null | undefined, perm: Perm): boolean {
  return !!role && PERMS[role].includes(perm);
}

export type Staff = { user: SessionUser; role: StaffRole };

const emailList = (s: string | undefined) =>
  (s ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

/** Emails in the ADMIN_EMAILS secret. They are always "owner". */
export async function ownerEmails(): Promise<string[]> {
  const env = await getEnv();
  return emailList(env.ADMIN_EMAILS);
}

/**
 * The effective staff role for a user:
 * ADMIN_EMAILS → owner; else user.role when it is a staff role; else Settings "extra admin emails" → admin.
 */
export async function roleOf(u: Pick<SessionUser, "email" | "role"> | null): Promise<Role> {
  if (!u) return "user";
  const email = u.email.toLowerCase();
  if ((await ownerEmails()).includes(email)) return "owner";
  if (isStaffRole(u.role)) return u.role;
  const s = await getSettings();
  if (s.adminEmails.map((e) => e.toLowerCase()).includes(email)) return "admin";
  return "user";
}

/** The signed-in staff member, or null (signed out or not staff). Deduped per request. */
export const getStaff = cache(async (): Promise<Staff | null> => {
  const user = await getSessionUser().catch(() => null);
  if (!user) return null;
  const role = await roleOf(user);
  return role === "user" ? null : { user, role };
});

/** Admin paths only, so ?next= can't send people off-site. */
export function safeNext(n: string | null | undefined, fallback = "/admin"): string {
  if (!n) return fallback;
  if (!/^\/admin(\/|\?|$)/.test(n) || n.startsWith("//") || /^\/admin\/(login|invite)/.test(n)) return fallback;
  return n;
}

/**
 * Use at the top of every admin page and server action.
 * - Signed out → /admin/login?next=<next> (pass the page's own path as `next`; defaults to /admin).
 * - Signed in but not staff → /admin/login, which says "This account has no admin access".
 * - Staff without `perm` → /admin/no-access?need=<perm>, a "No access" page inside the shell.
 * Returns the staff member ({ user, role }).
 */
export async function requireStaff(perm?: Perm, next?: string): Promise<Staff> {
  const staff = await getStaff();
  if (!staff) {
    const signedIn = await getSessionUser().catch(() => null);
    redirect(`/admin/login?next=${encodeURIComponent(safeNext(next))}${signedIn ? "&denied=1" : ""}`);
  }
  if (perm && !can(staff.role, perm)) redirect(`/admin/no-access?need=${perm}`);
  return staff;
}

/* ---- Compatibility (other branches still call these). Full rights = admin or owner. ---- */

/** True for admin and owner (full rights). Moderators are staff but not "admin" here. */
export async function isAdmin(u: SessionUser | null): Promise<boolean> {
  const r = await roleOf(u);
  return r === "admin" || r === "owner";
}

/** Old guard: staff with full rights. Prefer requireStaff(perm). */
export async function requireAdmin(): Promise<SessionUser> {
  const s = await requireStaff();
  if (s.role !== "admin" && s.role !== "owner") redirect("/admin/no-access");
  return s.user;
}

export async function audit(actor: string, action: string, target?: string, detail?: unknown) {
  const db = await getDb();
  await db.insert(schema.auditLog).values({ actor, action, target: target ?? null, detail: detail === undefined ? null : JSON.stringify(detail), createdAt: new Date() });
}
