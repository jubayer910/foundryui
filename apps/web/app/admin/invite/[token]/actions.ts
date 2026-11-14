"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { eq, sql } from "drizzle-orm";
import { getAuth, getSessionUser } from "@/lib/auth";
import { audit, isStaffRole } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { claimInvite, findInvite, grantRole, inviteState, unclaimInvite, type InviteRow } from "@/components/admin/team";

export type AcceptState = { error?: string; field?: "name" | "password" | "confirm" } | null;

const s = (f: FormData, k: string, max = 200) => String(f.get(k) ?? "").slice(0, max);

async function valid(token: string): Promise<InviteRow | string> {
  const inv = await findInvite(token);
  if (!inv) return "This invite link isn't valid.";
  const st = inviteState(inv);
  if (st !== "pending") return st === "accepted" ? "This invite was already used." : st === "revoked" ? "This invite was revoked." : "This invite has expired.";
  if (!isStaffRole(inv.role) || inv.role === "owner") return "This invite isn't valid.";
  return inv;
}

async function userByEmail(email: string) {
  const db = await getDb();
  const [u] = await db.select({ id: schema.user.id }).from(schema.user).where(eq(sql`lower(${schema.user.email})`, email.toLowerCase())).limit(1);
  return u ?? null;
}

async function finish(inv: InviteRow, userId: string, how: string): Promise<never> {
  const [before, after] = await grantRole(userId, inv.role as "moderator" | "admin");
  await audit(inv.email, "team.invite_accept", inv.id, { userId, role: inv.role, before, after, how, invitedBy: inv.invitedBy });
  redirect("/admin");
}

/** New account: name + password → account created with the invited role, signed in, sent to /admin. */
export async function acceptNew(_p: AcceptState, f: FormData): Promise<AcceptState> {
  const inv = await valid(s(f, "token"));
  if (typeof inv === "string") return { error: inv };
  const name = s(f, "name", 80).trim();
  const password = s(f, "password", 200);
  if (!name) return { error: "Enter your name.", field: "name" };
  if (password.length < 8) return { error: "Use at least 8 characters for the password.", field: "password" };
  if (password.length > 128) return { error: "Use at most 128 characters.", field: "password" };
  if (password !== s(f, "confirm", 200)) return { error: "The passwords don't match.", field: "confirm" };
  if (await userByEmail(inv.email)) return { error: "An account with this email exists now. Reload the page to sign in instead." };
  if (!(await claimInvite(inv.id))) return { error: "This invite was just used, revoked or expired." };
  let userId: string;
  try {
    const auth = await getAuth();
    const r = await auth.api.signUpEmail({ body: { name, email: inv.email, password }, headers: await headers() });
    userId = r.user.id;
  } catch (e) {
    await unclaimInvite(inv.id);
    const msg = e instanceof Error ? e.message : "";
    return { error: /password/i.test(msg) ? msg : "Couldn't create the account. Try again." };
  }
  return finish(inv, userId, "signup");
}

/** Existing account, signed out (or signed in as someone else): password → signed in → role added. */
export async function acceptExisting(_p: AcceptState, f: FormData): Promise<AcceptState> {
  const inv = await valid(s(f, "token"));
  if (typeof inv === "string") return { error: inv };
  const password = s(f, "password", 200);
  if (!password) return { error: "Enter your password.", field: "password" };
  let userId: string;
  try {
    const auth = await getAuth();
    const r = await auth.api.signInEmail({ body: { email: inv.email, password }, headers: await headers() });
    userId = r.user.id;
  } catch {
    return { error: "That password doesn't match this account.", field: "password" };
  }
  if (!(await claimInvite(inv.id))) return { error: "This invite was just used, revoked or expired." };
  return finish(inv, userId, "signin");
}

/** Already signed in with the invited email: one click. */
export async function acceptSignedIn(_p: AcceptState, f: FormData): Promise<AcceptState> {
  const inv = await valid(s(f, "token"));
  if (typeof inv === "string") return { error: inv };
  const me = await getSessionUser().catch(() => null);
  if (!me || me.email.toLowerCase() !== inv.email.toLowerCase()) return { error: "Sign in with the invited email first." };
  if (!(await claimInvite(inv.id))) return { error: "This invite was just used, revoked or expired." };
  return finish(inv, me.id, "session");
}
