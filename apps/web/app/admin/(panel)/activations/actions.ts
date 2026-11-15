"use server";
import { revalidatePath } from "next/cache";
import { requireStaff } from "@/lib/admin";
import { approveActivation, endSubscription, markRenewed, rejectActivation } from "@/lib/activation";
import { planLabel } from "@/lib/plans";
import { back, str } from "@/components/admin/back";

const HOME = "/admin/activations";
const to = (f: FormData) => str(f, "back", 300) || HOME;

/** One-tap approve: grants the plan (purchase + subscription rows), idempotent on a double tap. */
export async function approve(f: FormData) {
  const { user: me } = await requireStaff("orders", HOME);
  const r = await approveActivation(str(f, "id", 100), me.email);
  revalidatePath("/admin", "layout");
  if (!r.ok) back(to(f), { err: r.message });
  const a = r.activation;
  if (!r.changed) back(to(f), { ok: a.status === "approved" ? `Already approved for ${a.accountEmail}. Nothing changed.` : `This request was already ${a.status}.` });
  back(to(f), { ok: `Approved. ${a.accountEmail} now has ${planLabel(r.planAfter)}.` });
}

export async function reject(f: FormData) {
  const { user: me } = await requireStaff("orders", HOME);
  const r = await rejectActivation(str(f, "id", 100), me.email, str(f, "note", 500));
  revalidatePath("/admin", "layout");
  if (!r.ok) back(to(f), { err: r.message });
  if (!r.changed) back(to(f), { ok: `This request was already ${r.activation.status}.` });
  back(to(f), { ok: `Rejected the request from ${r.activation.payerEmail}.` });
}

/** Renewals due: the owner saw the renewal payment on Contra. */
export async function renewed(f: FormData) {
  const { user: me } = await requireStaff("orders", HOME);
  const r = await markRenewed(str(f, "id", 100), me.email);
  revalidatePath("/admin", "layout");
  back(to(f), r.ok ? { ok: r.message } : { err: r.message });
}

/** Renewals due: no renewal on Contra, so the subscription ends and the plan is recomputed. */
export async function end(f: FormData) {
  const { user: me } = await requireStaff("orders", HOME);
  const r = await endSubscription(str(f, "id", 100), me.email);
  revalidatePath("/admin", "layout");
  back(to(f), r.ok ? { ok: r.message } : { err: r.message });
}
