"use server";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { and, eq, sql } from "drizzle-orm";
import { audit, isStaffRole, requireStaff, type Role } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { back, str } from "@/components/admin/back";
import { INVITE_DAYS, hashToken, inviteState, invitableRoles, listStaff, manageError, newToken } from "@/components/admin/team";

const TO = "/admin/team";

export type InviteResult = { ok: true; link: string; email: string; role: string; expiresAt: string; replaced: boolean } | { ok: false; error: string; email?: string; role?: string } | null;

/** Creates a single-use invite link (7 days). The link is returned once; only the token's hash is stored. */
export async function createInvite(_prev: InviteResult, f: FormData): Promise<InviteResult> {
  const me = await requireStaff("team");
  const email = str(f, "email", 200).toLowerCase();
  const role = str(f, "role", 20);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Enter a valid email address.", email, role };
  if (!isStaffRole(role) || role === "owner") return { ok: false, error: "Choose Moderator or Admin.", email, role };
  if (!invitableRoles(me.role).includes(role)) return { ok: false, error: "Only the owner can invite admins.", email, role };

  const staff = await listStaff();
  const member = staff.find((m) => m.email.toLowerCase() === email);
  if (member) return { ok: false, error: `${email} is already on the team as ${member.role}. Change their role in the list instead.`, email, role };

  const db = await getDb();
  const I = schema.staffInvite;
  const now = new Date();
  // One live link per email: a new invite replaces any pending one.
  const pending = (await db.select().from(I).where(and(eq(sql`lower(${I.email})`, email)))).filter((i) => inviteState(i, now) === "pending");
  for (const p of pending) await db.update(I).set({ revokedAt: now }).where(eq(I.id, p.id));

  const token = newToken();
  const id = crypto.randomUUID();
  const expiresAt = new Date(now.getTime() + INVITE_DAYS * 24 * 3600 * 1000);
  await db.insert(I).values({ id, email, role, tokenHash: await hashToken(token), invitedBy: me.user.email, expiresAt, createdAt: now });
  await audit(me.user.email, "team.invite", id, { email, role, expiresAt: expiresAt.toISOString(), replaced: pending.map((p) => p.id) });

  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "ingotui.com";
  const proto = h.get("x-forwarded-proto") ?? (/^(localhost|127\.0\.0\.1)(:|$)/.test(host) ? "http" : "https");
  revalidatePath(TO);
  return { ok: true, link: `${proto}://${host}/admin/invite/${token}`, email, role, expiresAt: expiresAt.toISOString(), replaced: pending.length > 0 };
}

export async function revokeInvite(f: FormData) {
  const me = await requireStaff("team");
  const id = str(f, "id", 100);
  const db = await getDb();
  const I = schema.staffInvite;
  const [inv] = await db.select().from(I).where(eq(I.id, id)).limit(1);
  if (!inv) back(TO, { err: "That invite no longer exists." });
  if (inviteState(inv) !== "pending") back(TO, { err: "That invite is no longer pending." });
  if (inv.role === "admin" && me.role !== "owner") back(TO, { err: "Only the owner can revoke an admin invite." });
  await db.update(I).set({ revokedAt: new Date() }).where(eq(I.id, id));
  await audit(me.user.email, "team.invite_revoke", id, { email: inv.email, role: inv.role });
  revalidatePath(TO);
  back(TO, { ok: `Invite for ${inv.email} revoked. The link no longer works.` });
}

async function target(id: string) {
  const m = (await listStaff()).find((s) => s.id === id);
  if (!m) back(TO, { err: "That person is not on the team." });
  return m;
}

export async function changeRole(f: FormData) {
  const me = await requireStaff("team");
  const id = str(f, "id", 100);
  const to = str(f, "role", 20) as Role;
  if (to !== "moderator" && to !== "admin") back(TO, { err: "Choose Moderator or Admin." });
  const m = await target(id);
  const why = manageError(me, m, to);
  if (why) back(TO, { err: why });
  if (m.role === to) back(TO, { err: `${m.email} is already ${to}.` });
  const db = await getDb();
  await db.update(schema.user).set({ role: to, updatedAt: new Date() }).where(eq(schema.user.id, id));
  await audit(me.user.email, "team.role", id, { email: m.email, before: m.role, after: to });
  revalidatePath("/admin", "layout");
  back(TO, { ok: `${m.email} is now ${to}.` });
}

/** Takes admin access away (user.role back to "user"). The account and its plan stay. */
export async function removeStaff(f: FormData) {
  const me = await requireStaff("team");
  const id = str(f, "id", 100);
  const m = await target(id);
  const why = manageError(me, m, "user");
  if (why) back(TO, { err: why });
  const db = await getDb();
  await db.update(schema.user).set({ role: "user", updatedAt: new Date() }).where(eq(schema.user.id, id));
  await audit(me.user.email, "team.remove", id, { email: m.email, before: m.role, after: "user" });
  revalidatePath("/admin", "layout");
  back(TO, { ok: `${m.email} no longer has admin access.` });
}
