import "server-only";
import { and, eq } from "drizzle-orm";
import { getDb, schema } from "./db";
import { syncPlan } from "@/components/admin/plan";

/**
 * AppSumo codes. Buyers get a code at checkout on AppSumo and redeem it at /redeem: one code = Lifetime.
 * The table stores only sha256(normalised code); the plain codes exist in the CSV uploaded to AppSumo.
 * Redeeming writes a purchase row (provider "appsumo", status "granted", plan "lifetime") and recomputes
 * user.plan, so a refund is handled like any order: revoke it in /admin/orders.
 */

/** Upper case, letters and digits only: "ingot-ab12 cd34" and "INGOTAB12CD34" are the same code. */
export const normaliseCode = (code: string) => code.toUpperCase().replace(/[^A-Z0-9]/g, "");

export async function hashCode(code: string) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(normaliseCode(code)));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** What the buyer reads for each failure (the page reads ?e=<reason>). */
export const REDEEM_MESSAGES = {
  empty: "Paste the code from your AppSumo purchase.",
  invalid: "We could not find that code. Copy it again from your AppSumo account, under My Products.",
  used: "This code has already been redeemed. If that was not you, write to support with your AppSumo order.",
  has_lifetime: "This account already has Lifetime, so we kept your code unused. Sign in with another account to redeem it there.",
  failed: "Something went wrong on our side. Try again in a minute, or write to support.",
} as const;
export type RedeemError = keyof typeof REDEEM_MESSAGES;

export type RedeemResult =
  | { ok: true; already: boolean }
  | { ok: false; reason: "empty" | "invalid" | "used" | "has_lifetime" | "failed"; message: string };

export async function redeemCode(user: { id: string; email: string; plan: string }, raw: string, now = new Date()): Promise<RedeemResult> {
  const clean = normaliseCode(raw);
  if (!clean) return { ok: false, reason: "empty", message: "Paste the code from your AppSumo purchase." };
  if (clean.length < 8 || clean.length > 64) return { ok: false, reason: "invalid", message: "That code does not look right. Copy it again from your AppSumo account, under My Products." };
  const db = await getDb();
  const C = schema.appsumoCode;
  const hash = await hashCode(clean);
  const [row] = await db.select().from(C).where(eq(C.hash, hash)).limit(1);
  if (!row) return { ok: false, reason: "invalid", message: "We could not find that code. Copy it again from your AppSumo account, under My Products." };
  if (row.status === "redeemed") {
    if (row.userId === user.id) return { ok: true, already: true };
    return { ok: false, reason: "used", message: "This code has already been redeemed on another account. If that was not you, write to support with your AppSumo order." };
  }
  if (row.status !== "available") return { ok: false, reason: "used", message: "This code is no longer active. Write to support with your AppSumo order and we will check it." };
  // Lifetime already: keep the code unused so the buyer can put it on another account or ask AppSumo for a refund.
  if (user.plan === "lifetime") return { ok: false, reason: "has_lifetime", message: "This account already has Lifetime, so we kept your code unused. Sign in with another account to redeem it there." };

  const purchaseId = crypto.randomUUID();
  // Claim the code first, only if it is still available: two tabs redeeming the same code cannot both win.
  const claimed = await db
    .update(C)
    .set({ status: "redeemed", userId: user.id, email: user.email.toLowerCase(), purchaseId, redeemedAt: now })
    .where(and(eq(C.hash, hash), eq(C.status, "available")))
    .returning({ hash: C.hash });
  if (!claimed.length) return { ok: false, reason: "used", message: "This code was just redeemed. Refresh the page to check your plan." };

  try {
    await db.insert(schema.purchase).values({
      id: purchaseId,
      provider: "appsumo",
      providerOrderId: "appsumo_" + hash.slice(0, 16),
      userId: user.id,
      email: user.email.toLowerCase(),
      plan: "lifetime",
      variant: "lifetime",
      amountCents: 0,
      currency: "USD",
      status: "granted",
      note: `AppSumo code (${row.batch})`,
      createdAt: now,
      updatedAt: now,
    });
    await syncPlan(user.id, now);
  } catch {
    // undo the claim so the buyer can try again
    await db.update(C).set({ status: "available", userId: null, email: null, purchaseId: null, redeemedAt: null }).where(eq(C.hash, hash));
    return { ok: false, reason: "failed", message: "Something went wrong on our side. Try again in a minute, or write to support." };
  }
  return { ok: true, already: false };
}
