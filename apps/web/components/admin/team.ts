import "server-only";
import { and, desc, eq, inArray, max, or, sql } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { sha256Hex } from "@/lib/hash";
import { ROLE_RANK, STAFF_ROLES, isStaffRole, ownerEmails, type Role, type Staff, type StaffRole } from "@/lib/admin";

export const INVITE_DAYS = 7;

/** Where a member's role comes from: user.role, the ADMIN_EMAILS secret, or Settings "extra admin emails". */
export type RoleSource = "role" | "secret" | "settings";
export type Member = { id: string | null; name: string; email: string; role: StaffRole; source: RoleSource; joinedAt: Date | null; lastActive: Date | null };

/** Everyone with admin access, owners first. Owners from the secret without an account yet are listed with id null. */
export async function listStaff(): Promise<Member[]> {
  const db = await getDb();
  const owners = await ownerEmails();
  const extra = (await getSettings()).adminEmails.map((e) => e.toLowerCase());
  const emails = [...new Set([...owners, ...extra])];
  const U = schema.user;
  const rows = await db
    .select({ id: U.id, name: U.name, email: U.email, role: U.role, createdAt: U.createdAt })
    .from(U)
    .where(emails.length ? or(inArray(U.role, STAFF_ROLES), inArray(sql`lower(${U.email})`, emails)) : inArray(U.role, STAFF_ROLES));
  const ids = rows.map((r) => r.id);
  const seen = ids.length
    ? await db.select({ userId: schema.session.userId, at: max(schema.session.updatedAt) }).from(schema.session).where(inArray(schema.session.userId, ids)).groupBy(schema.session.userId)
    : [];
  const toDate = (v: unknown) => (v instanceof Date ? v : typeof v === "number" ? new Date(v < 1e12 ? v * 1000 : v) : null);
  const last = new Map(seen.map((s) => [s.userId, toDate(s.at)]));
  const out: Member[] = rows.map((r) => {
    const email = r.email.toLowerCase();
    const [role, source]: [StaffRole, RoleSource] = owners.includes(email)
      ? ["owner", "secret"]
      : isStaffRole(r.role)
        ? [r.role, "role"]
        : ["admin", "settings"];
    return { id: r.id, name: r.name, email: r.email, role, source, joinedAt: r.createdAt, lastActive: last.get(r.id) ?? null };
  });
  for (const e of owners) if (!out.some((m) => m.email.toLowerCase() === e)) out.push({ id: null, name: "", email: e, role: "owner", source: "secret", joinedAt: null, lastActive: null });
  return out.sort((a, b) => ROLE_RANK[b.role] - ROLE_RANK[a.role] || a.email.localeCompare(b.email));
}

/** Roles the actor may hand out in an invite. Only the owner can make admins. */
export const invitableRoles = (actor: Role): StaffRole[] => (actor === "owner" ? ["moderator", "admin"] : actor === "admin" ? ["moderator"] : []);

/**
 * Why `actor` may not change `target` (to role `to`, or remove them when `to` is "user"), or null when allowed.
 * Rules: nobody changes their own role; the owner can't be changed or removed; only the owner changes admins
 * or makes someone admin; Settings-listed admins are managed in Settings.
 */
export function manageError(actor: Staff, target: Pick<Member, "id" | "role" | "source">, to: Role): string | null {
  if (target.id && target.id === actor.user.id) return "You can't change your own role.";
  if (target.role === "owner" || to === "owner") return "The owner can't be changed or removed.";
  if (actor.role !== "owner" && (target.role === "admin" || to === "admin")) return "Only the owner can change admins.";
  if (target.source === "settings") return "This admin comes from Settings, extra admin emails. Remove the email there first.";
  if (actor.role !== "owner" && actor.role !== "admin") return "You can't manage the team.";
  return null;
}

/** 32 random bytes, base64url. Only its SHA-256 hash is stored. */
export function newToken(): string {
  const b = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...b)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
export const hashToken = (t: string) => sha256Hex(t);

export type InviteRow = typeof schema.staffInvite.$inferSelect;
export type InviteState = "pending" | "accepted" | "revoked" | "expired";
export const inviteState = (i: InviteRow, now = new Date()): InviteState =>
  i.acceptedAt ? "accepted" : i.revokedAt ? "revoked" : i.expiresAt.getTime() <= now.getTime() ? "expired" : "pending";

export async function findInvite(token: string): Promise<InviteRow | null> {
  if (!/^[A-Za-z0-9_-]{20,100}$/.test(token)) return null;
  const db = await getDb();
  const [row] = await db.select().from(schema.staffInvite).where(eq(schema.staffInvite.tokenHash, await hashToken(token))).limit(1);
  return row ?? null;
}

export async function recentInvites(limit = 30): Promise<InviteRow[]> {
  const db = await getDb();
  return db.select().from(schema.staffInvite).orderBy(desc(schema.staffInvite.createdAt)).limit(limit);
}

/** Marks a pending invite accepted. False when someone else used, revoked or outran it first. */
export async function claimInvite(id: string): Promise<boolean> {
  const db = await getDb();
  const I = schema.staffInvite;
  const now = new Date();
  const r = await db
    .update(I)
    .set({ acceptedAt: now })
    .where(and(eq(I.id, id), sql`${I.acceptedAt} is null`, sql`${I.revokedAt} is null`, sql`${I.expiresAt} > ${Math.floor(now.getTime() / 1000)}`));
  return ((r as unknown as { meta?: { changes?: number } }).meta?.changes ?? 0) > 0;
}

export async function unclaimInvite(id: string) {
  const db = await getDb();
  await db.update(schema.staffInvite).set({ acceptedAt: null }).where(eq(schema.staffInvite.id, id));
}

/** Gives the user the invited role, never lowering a higher one, never "owner". Returns [before, after]. */
export async function grantRole(userId: string, role: StaffRole): Promise<[string, string]> {
  const db = await getDb();
  const [u] = await db.select({ role: schema.user.role }).from(schema.user).where(eq(schema.user.id, userId)).limit(1);
  const before = u?.role ?? "user";
  const cur = (isStaffRole(before) ? before : "user") as Role;
  const next = ROLE_RANK[cur] >= ROLE_RANK[role] ? cur : role;
  if (next !== before) await db.update(schema.user).set({ role: next, updatedAt: new Date() }).where(eq(schema.user.id, userId));
  return [before, next];
}
