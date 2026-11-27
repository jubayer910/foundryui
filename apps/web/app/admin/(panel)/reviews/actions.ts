"use server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { audit, requireStaff } from "@/lib/admin";
import { getDb } from "@/lib/db";
import { feedback } from "@/app/api/feedback/store";

/** Show a consented review on ingotui.com (home proof strip), or take it down again. */
export async function setReviewApproved(f: FormData) {
  const { user: me } = await requireStaff("users");
  const id = String(f.get("id") ?? "");
  const on = f.get("on") === "1";
  if (!/^[0-9a-f-]{36}$/i.test(id)) return;
  const db = await getDb();
  const row = await db.select({ consent: feedback.consent }).from(feedback).where(eq(feedback.id, id)).get();
  if (!row || (on && !row.consent)) return; // never publish words the member kept private
  await db.update(feedback).set({ approved: on }).where(eq(feedback.id, id));
  await audit(me.email, on ? "review.approve" : "review.hide", id, {});
  revalidatePath("/admin/reviews");
  revalidatePath("/");
}
