"use server";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { audit, requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { isPlan } from "@/components/admin/plan";
import { back, str } from "@/components/admin/back";

/** Set user.plan directly (support fixes). Grants with a purchase row live on the Orders page. */
export async function setUserPlan(f: FormData) {
  const { user: me } = await requireStaff("users");
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

/** Gift Lifetime by email (lib/gift.ts): existing accounts get it now, others an invite link. Never counted as a sale. */
export async function giftLifetime(f: FormData) {
  const { user: me } = await requireStaff("orders");
  const email = str(f, "email", 200);
  const note = str(f, "note", 500);
  const { giveLifetime } = await import("@/lib/gift");
  const r = await giveLifetime(email, note, me.email);
  if (!r.ok) back("/admin/users?tab=gifts&gift=new", { err: r.message });
  await audit(me.email, "gift.give", email.toLowerCase(), { note });
  revalidatePath("/admin", "layout");
  back("/admin/users?tab=gifts", { ok: r.message });
}

export async function resendGiftAction(f: FormData) {
  const { user: me } = await requireStaff("orders");
  const id = str(f, "id", 100);
  const { resendGift } = await import("@/lib/gift");
  const r = await resendGift(id);
  if (r.ok) await audit(me.email, "gift.resend", id, {});
  back("/admin/users?tab=gifts", r.ok ? { ok: r.message } : { err: r.message });
}

export async function revokeGiftAction(f: FormData) {
  const { user: me } = await requireStaff("orders");
  const id = str(f, "id", 100);
  const { revokeGift } = await import("@/lib/gift");
  const r = await revokeGift(id);
  if (r.ok) await audit(me.email, "gift.revoke", id, {});
  revalidatePath("/admin", "layout");
  back("/admin/users?tab=gifts", r.ok ? { ok: r.message } : { err: r.message });
}
