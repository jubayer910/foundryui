import "server-only";
import { eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { entitlement } from "@/lib/billing";
import type { PlanId } from "@/lib/plans";

export const PLANS = ["free", "pro", "lifetime"] as const;
export type Plan = (typeof PLANS)[number];
export const isPlan = (p: string): p is Plan => (PLANS as readonly string[]).includes(p);

/**
 * The plan a user should have from their rows: Lifetime if any paid or granted lifetime purchase,
 * else Team or Pro from a granted (manual) purchase or a live subscription (or a cancelled one that has
 * not ended), else Free. Same rule as the Lemon Squeezy webhook (lib/lemonsqueezy.ts entitlement).
 */
export async function planFromRows(userId: string): Promise<PlanId> {
  return entitlement(await getDb(), userId);
}

/** Recomputes user.plan from the rows and saves it. Used by Orders (grant, revoke) and Activations (approve, renewals). */
export async function syncPlan(userId: string, now = new Date()): Promise<PlanId> {
  const next = await planFromRows(userId);
  const db = await getDb();
  await db.update(schema.user).set({ plan: next, updatedAt: now }).where(eq(schema.user.id, userId));
  return next;
}
