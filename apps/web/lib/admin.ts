import "server-only";
import { notFound } from "next/navigation";
import { getSessionUser, type SessionUser } from "./auth";
import { getDb, getEnv, schema } from "./db";
import { getSettings } from "./settings";

/** Admin = user.role "admin", or email in the ADMIN_EMAILS secret, or in settings.adminEmails. */
export async function isAdmin(u: SessionUser | null): Promise<boolean> {
  if (!u) return false;
  if (u.role === "admin") return true;
  const env = await getEnv();
  const email = u.email.toLowerCase();
  const fromEnv = (env.ADMIN_EMAILS ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  if (fromEnv.includes(email)) return true;
  const s = await getSettings();
  return s.adminEmails.map((e) => e.toLowerCase()).includes(email);
}

/** Use at the top of every admin page and server action. Non-admins get a 404 (the panel stays hidden). */
export async function requireAdmin(): Promise<SessionUser> {
  const u = await getSessionUser();
  if (!(await isAdmin(u))) notFound();
  return u as SessionUser;
}

export async function audit(actor: string, action: string, target?: string, detail?: unknown) {
  const db = await getDb();
  await db.insert(schema.auditLog).values({ actor, action, target: target ?? null, detail: detail === undefined ? null : JSON.stringify(detail), createdAt: new Date() });
}
