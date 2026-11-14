"use server";
import { revalidatePath } from "next/cache";
import { eq, sql } from "drizzle-orm";
import { audit, requireAdmin } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { planFromRows } from "@/components/admin/plan";
import { back } from "@/components/admin/back";


/** Manual grant: a purchase row with status "granted", then user.plan follows the rows. */
export async function grantPlan(f: FormData) {
  const me = await requireAdmin();
  const to = String(f.get("back") || "/admin/orders");
  const email = String(f.get("email") ?? "").trim().toLowerCase();
  const plan = String(f.get("plan") ?? "");
  const note = String(f.get("note") ?? "").trim().slice(0, 500);
  if (!email) back(to, { err: "Enter the customer's email." });
  if (plan !== "pro" && plan !== "lifetime") back(to, { err: "Choose Pro or Lifetime." });
  if (!note) back(to, { err: "Add a note: why is this plan granted?" });
  const db = await getDb();
  const [u] = await db.select({ id: schema.user.id, plan: schema.user.plan }).from(schema.user).where(sql`lower(${schema.user.email}) = ${email}`).limit(1);
  if (!u) back(to, { err: `No account uses ${email}. Ask them to sign up first, then grant.` });
  const now = new Date();
  const id = crypto.randomUUID();
  await db.insert(schema.purchase).values({
    id,
    provider: "manual",
    providerOrderId: "manual_" + id,
    userId: u.id,
    email,
    plan,
    variant: "manual",
    amountCents: 0,
    currency: "USD",
    status: "granted",
    note: `${note} (granted by ${me.email})`,
    createdAt: now,
    updatedAt: now,
  });
  const next = await planFromRows(u.id);
  await db.update(schema.user).set({ plan: next, updatedAt: now }).where(eq(schema.user.id, u.id));
  await audit(me.email, "plan.grant", u.id, { email, plan, note, purchaseId: id, planBefore: u.plan, planAfter: next });
  revalidatePath("/admin", "layout");
  back(to, { ok: `Granted ${plan === "pro" ? "Pro" : "Lifetime"} to ${email}. Their plan is now ${next}.` });
}

/** Revoke access from one purchase row. Refunds of real orders still happen in Lemon Squeezy. */
export async function revokePurchase(f: FormData) {
  const me = await requireAdmin();
  const to = String(f.get("back") || "/admin/orders");
  const id = String(f.get("id") ?? "");
  const note = String(f.get("note") ?? "").trim().slice(0, 500);
  if (!note) back(to, { err: "Add a note: why is this revoked?" });
  const db = await getDb();
  const [p] = await db.select().from(schema.purchase).where(eq(schema.purchase.id, id)).limit(1);
  if (!p) back(to, { err: "That purchase no longer exists." });
  if (p.status !== "granted" && p.status !== "paid") back(to, { err: `This purchase is ${p.status}, nothing to revoke.` });
  const now = new Date();
  await db
    .update(schema.purchase)
    .set({ status: "revoked", note: [p.note, `Revoked by ${me.email}: ${note}`].filter(Boolean).join("\n"), updatedAt: now })
    .where(eq(schema.purchase.id, id));
  let planAfter: string | null = null;
  if (p.userId) {
    planAfter = await planFromRows(p.userId);
    await db.update(schema.user).set({ plan: planAfter, updatedAt: now }).where(eq(schema.user.id, p.userId));
  }
  await audit(me.email, "plan.revoke", p.userId ?? p.email, { purchaseId: id, statusBefore: p.status, note, planAfter });
  revalidatePath("/admin", "layout");
  back(to, { ok: `Revoked. ${p.email} is now on ${planAfter ?? "no linked account"}.` });
}
