"use server";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { audit, requireAdmin } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { isPlan } from "@/components/admin/plan";
import { back, str } from "@/components/admin/back";

/** Set user.plan directly (support fixes). Grants with a purchase row live on the Orders page. */
export async function setUserPlan(f: FormData) {
  const me = await requireAdmin();
  const id = str(f, "id", 100);
  const to = `/admin/users/${id}`;
  const plan = str(f, "plan", 20);
  const note = str(f, "note", 500);
  if (!isPlan(plan)) back(to, { err: "Choose Free, Pro or Lifetime." });
  if (!note) back(to, { err: "Add a note: why is the plan changing?" });
  const db = await getDb();
  const [u] = await db.select({ plan: schema.user.plan, email: schema.user.email }).from(schema.user).where(eq(schema.user.id, id)).limit(1);
  if (!u) back("/admin/users", { err: "That user no longer exists." });
  if (u.plan === plan) back(to, { err: `Already on ${plan}.` });
  await db.update(schema.user).set({ plan, updatedAt: new Date() }).where(eq(schema.user.id, id));
  await audit(me.email, "user.plan", id, { email: u.email, before: u.plan, after: plan, note });
  revalidatePath("/admin", "layout");
  back(to, { ok: `Plan changed from ${u.plan} to ${plan}.` });
}

export async function setUserRole(f: FormData) {
  const me = await requireAdmin();
  const id = str(f, "id", 100);
  const to = `/admin/users/${id}`;
  const role = str(f, "role", 10);
  if (role !== "admin" && role !== "user") back(to, { err: "Unknown role." });
  if (id === me.id) back(to, { err: "You can't change your own role." });
  const db = await getDb();
  const [u] = await db.select({ role: schema.user.role, email: schema.user.email }).from(schema.user).where(eq(schema.user.id, id)).limit(1);
  if (!u) back("/admin/users", { err: "That user no longer exists." });
  await db.update(schema.user).set({ role, updatedAt: new Date() }).where(eq(schema.user.id, id));
  await audit(me.email, role === "admin" ? "user.make_admin" : "user.remove_admin", id, { email: u.email, before: u.role, after: role });
  revalidatePath("/admin", "layout");
  back(to, { ok: role === "admin" ? `${u.email} is now an admin.` : `${u.email} is no longer an admin.` });
}
