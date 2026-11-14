import "server-only";
import { and, eq, gt, inArray, or, isNull } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";

export const PLANS = ["free", "pro", "lifetime"] as const;
export type Plan = (typeof PLANS)[number];
export const isPlan = (p: string): p is Plan => (PLANS as readonly string[]).includes(p);

/** Subscription statuses that still give Pro access (Lemon Squeezy: cancelled keeps access until endsAt). */
const LIVE_SUB = ["active", "on_trial", "past_due"];

/**
 * The plan a user should have from their rows: Lifetime if any paid or granted lifetime purchase,
 * else Pro if a granted (manual) Pro purchase or a live subscription (or a cancelled one that has not ended), else Free.
 */
export async function planFromRows(userId: string): Promise<Plan> {
  const db = await getDb();
  const P = schema.purchase;
  const S = schema.subscription;
  const purchases = await db
    .select({ plan: P.plan, status: P.status })
    .from(P)
    .where(and(eq(P.userId, userId), inArray(P.status, ["paid", "granted"])));
  if (purchases.some((p) => p.plan === "lifetime")) return "lifetime";
  // A paid Pro order is a subscription payment: the subscription decides. Only a manual grant gives Pro on its own.
  if (purchases.some((p) => p.plan === "pro" && p.status === "granted")) return "pro";
  const subs = await db
    .select({ id: S.id })
    .from(S)
    .where(and(eq(S.userId, userId), or(inArray(S.status, LIVE_SUB), and(eq(S.status, "cancelled"), or(isNull(S.endsAt), gt(S.endsAt, new Date()))))))
    .limit(1);
  return subs.length ? "pro" : "free";
}
