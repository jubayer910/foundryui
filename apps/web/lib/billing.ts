import "server-only";
import { and, eq, inArray, sql } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";
import { schema } from "./db";
import { PLAN_RANK, type PlanId, type VariantKey } from "./plans";

/**
 * Provider-neutral billing rules shared by every payment provider webhook (Lemon Squeezy in lib/lemonsqueezy.ts,
 * Creem in lib/creem.ts): who the buyer is, what their purchase / subscription rows entitle them to, and how
 * user.plan follows. Provider modules only translate their payloads into purchase / subscription rows.
 */

export type Db = DrizzleD1Database<typeof schema>;
export type Attrs = Record<string, unknown>;

export const str = (v: unknown) => (v === null || v === undefined ? null : String(v));
export const date = (v: unknown) => {
  if (!v || typeof v !== "string") return null;
  const d = new Date(v);
  return isNaN(d.getTime()) ? null : d;
};

/** Statuses on which a subscription still unlocks Pro (cancelled counts until endsAt). */
export const LIVE_SUB = ["active", "on_trial", "past_due"];
/** Purchases that unlock their plan. "granted" = manual grant from admin. */
export const LIVE_PURCHASE = ["paid", "granted"];

export type HandleResult = { ok: true; action: string; userId: string | null; plan?: string; note?: string };

/** An account by id (custom data / metadata set by our own checkout), else by email (case-insensitive). */
export async function findUser(db: Db, customUserId: unknown, email: string | null) {
  const id = str(customUserId);
  if (id) {
    const [u] = await db.select({ id: schema.user.id, plan: schema.user.plan, email: schema.user.email }).from(schema.user).where(eq(schema.user.id, id)).limit(1);
    if (u) return u;
  }
  if (email) {
    const [u] = await db
      .select({ id: schema.user.id, plan: schema.user.plan, email: schema.user.email })
      .from(schema.user)
      .where(sql`lower(${schema.user.email}) = ${email.toLowerCase()}`)
      .limit(1);
    if (u) return u;
  }
  return null;
}

/**
 * May a sale go to this account by email alone? Only when the address is proven: verified by the auth provider
 * (e.g. Google), or the account existed before the sale (nobody can predict a future buyer's email). A newer
 * email+password account must prove inbox access with the claim link instead (lib/contra/claim-token.ts).
 * Contra (lib/contra/sync.ts provenFor) and Creem (lib/creem.ts) both use this rule.
 */
export const provenAt = (u: { emailVerified: boolean | null; createdAt: Date }, soldAtMs: number) => !!u.emailVerified || u.createdAt.getTime() < soldAtMs;

/** What the user's rows entitle them to right now. */
export async function entitlement(db: Db, userId: string, now = new Date()): Promise<PlanId> {
  const purchases = await db
    .select({ plan: schema.purchase.plan, status: schema.purchase.status })
    .from(schema.purchase)
    .where(and(eq(schema.purchase.userId, userId), inArray(schema.purchase.status, LIVE_PURCHASE)));
  if (purchases.some((p) => p.plan === "lifetime")) return "lifetime";
  // A paid Pro/Team order is only a subscription payment (the subscription row decides);
  // a manual grant from admin (status "granted") counts on its own.
  if (purchases.some((p) => p.plan === "team" && p.status === "granted")) return "team";
  const subs = await db
    .select({ plan: schema.subscription.plan, status: schema.subscription.status, endsAt: schema.subscription.endsAt })
    .from(schema.subscription)
    .where(eq(schema.subscription.userId, userId));
  const live = subs.filter((s) => LIVE_SUB.includes(s.status) || (s.status === "cancelled" && (!s.endsAt || s.endsAt > now)));
  if (live.some((s) => s.plan === "team")) return "team";
  if (purchases.some((p) => p.plan === "pro" && p.status === "granted")) return "pro";
  if (live.length) return "pro";
  return "free";
}

/**
 * Applies the entitlement to user.plan.
 * mode "up" only raises the plan (a purchase never lowers it), "down" only lowers it
 * (a refund or expiry never removes a plan the admin granted by hand without rows).
 */
export async function applyPlan(db: Db, user: { id: string; plan: string }, mode: "up" | "down" | "auto", now = new Date()) {
  const want = await entitlement(db, user.id, now);
  const have = PLAN_RANK[user.plan as PlanId] ?? 0;
  const next = PLAN_RANK[want];
  // auto (subscription events): raise while entitled, lower once nothing entitles the user.
  // A Team that ends while a Pro subscription still runs steps the user down from Team to Pro.
  const dir = mode === "auto" ? (next > 0 && !(user.plan === "team" && next < have) ? "up" : "down") : mode;
  const change = dir === "up" ? next > have : next < have;
  if (!change) return user.plan;
  await db.update(schema.user).set({ plan: want, updatedAt: new Date() }).where(eq(schema.user.id, user.id));
  return want;
}

/** variant = what purchase.variant stores; interval = what a subscription row stores. */
export const optionPlan = (k: VariantKey | null): { plan: PlanId; variant: string; interval?: "monthly" | "yearly" } | null =>
  k === "lifetimeDeal" || k === "lifetimeAfter"
    ? { plan: "lifetime", variant: k }
    : k === "proMonthly"
      ? { plan: "pro", variant: "monthly", interval: "monthly" }
      : k === "proYearly"
        ? { plan: "pro", variant: "yearly", interval: "yearly" }
        : k === "teamMonthly"
          ? { plan: "team", variant: "teamMonthly", interval: "monthly" }
          : k === "teamYearly"
            ? { plan: "team", variant: "teamYearly", interval: "yearly" }
            : null;

/* ------------------------------------------------------------------ signature */

const hex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");

/** hex HMAC-SHA256 of the raw body with the secret. */
export async function hmacHex(rawBody: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(rawBody)));
}

/** Signature header = hex HMAC-SHA256 of the raw body with the signing secret. Constant-time compare. */
export async function verifyHmacHex(rawBody: string, signature: string | null, secret: string | undefined): Promise<boolean> {
  if (!secret || !signature) return false;
  const expected = await hmacHex(rawBody, secret);
  const given = signature.trim().toLowerCase();
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ given.charCodeAt(i);
  return diff === 0;
}
