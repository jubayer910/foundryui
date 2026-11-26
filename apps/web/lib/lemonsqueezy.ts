import "server-only";
import { and, eq, sql } from "drizzle-orm";
import { schema } from "./db";
import { variantKeyForId } from "./plans";
import type { Settings } from "./settings";
import { applyPlan, date, entitlement, findUser, optionPlan, str, verifyHmacHex, type Attrs, type Db, type HandleResult } from "./billing";

const API = "https://api.lemonsqueezy.com/v1";
const PROVIDER = "lemonsqueezy";

/* ------------------------------------------------------------------ checkout */

export type CheckoutKeys = { apiKey: string; storeId: string };

/** Both keys present, or null (then checkout falls back to the waitlist). */
export function checkoutKeys(env: CloudflareEnv): CheckoutKeys | null {
  const apiKey = env.LEMONSQUEEZY_API_KEY?.trim();
  const storeId = env.LEMONSQUEEZY_STORE_ID?.trim();
  return apiKey && storeId ? { apiKey, storeId } : null;
}

/** Creates a hosted checkout (JSON:API, POST /v1/checkouts) and returns its URL. */
export async function createCheckout(
  keys: CheckoutKeys,
  input: { variantId: string; email: string; userId: string; name?: string; redirectUrl: string; expiresAt?: string },
): Promise<string> {
  const body = {
    data: {
      type: "checkouts",
      attributes: {
        checkout_data: { email: input.email, ...(input.name ? { name: input.name } : {}), custom: { user_id: input.userId } },
        product_options: { redirect_url: input.redirectUrl },
        // A deal checkout stops working when the deal ends, so a link opened just before can't be paid after.
        ...(input.expiresAt ? { expires_at: input.expiresAt } : {}),
      },
      relationships: {
        store: { data: { type: "stores", id: String(keys.storeId) } },
        variant: { data: { type: "variants", id: String(input.variantId) } },
      },
    },
  };
  const res = await fetch(API + "/checkouts", {
    method: "POST",
    headers: { Accept: "application/vnd.api+json", "Content-Type": "application/vnd.api+json", Authorization: "Bearer " + keys.apiKey },
    body: JSON.stringify(body),
  });
  const json = (await res.json().catch(() => null)) as { data?: { attributes?: { url?: string } }; errors?: { detail?: string }[] } | null;
  const url = json?.data?.attributes?.url;
  if (!res.ok || !url) throw new Error("Lemon Squeezy checkout failed (" + res.status + "): " + (json?.errors?.[0]?.detail ?? "no url"));
  return url;
}

/* ------------------------------------------------------------------ signature */

/** X-Signature = hex HMAC-SHA256 of the raw body with the signing secret. Constant-time compare. */
export const verifySignature = verifyHmacHex;

/* ------------------------------------------------------------------ webhook */

export type LsEvent = {
  meta: { event_name: string; test_mode?: boolean; custom_data?: Record<string, unknown> | null };
  data: { type: string; id: string; attributes: Record<string, unknown> };
};

export type { HandleResult };
/** Kept for callers that imported it from here. */
export { entitlement };

/**
 * Where a row came from, kept in purchase.raw / subscription.raw. Webhook rows carry the event name;
 * rows written by the API sync (lib/lemonsqueezy-sync.ts) carry source "sync".
 */
export type RowOrigin = { event: string } | { source: "sync" };

/** Upserts one Lemon Squeezy order (an `orders` resource) into purchase, then moves user.plan. Shared by the webhook and the sync. */
export async function upsertOrder(
  db: Db,
  settings: Settings,
  input: { orderId: string; attrs: Attrs; customUserId?: unknown; testMode: boolean; origin: RowOrigin; refundedEvent?: boolean },
): Promise<HandleResult> {
  const a = input.attrs;
  const email = str(a.user_email);
  const user = await findUser(db, input.customUserId, email);
  const now = new Date();
  const item = (a.first_order_item ?? {}) as Attrs;
  const key = variantKeyForId(settings, str(item.variant_id));
  const op = optionPlan(key);
  if (!op) return { ok: true, action: "unmatched_variant", userId: user?.id ?? null, note: "variant " + str(item.variant_id) + " is not in the admin variant IDs" };
  const lsStatus = str(a.status) ?? "pending";
  const status = input.refundedEvent || a.refunded === true || lsStatus === "refunded" ? "refunded" : lsStatus === "paid" ? "paid" : lsStatus;
  const orderId = String(input.orderId);
  const raw = JSON.stringify({ ...input.origin, test_mode: input.testMode, attributes: a });
  const values = {
    id: "ls_" + orderId,
    provider: PROVIDER,
    providerOrderId: orderId,
    userId: user?.id ?? null,
    email: email ?? "",
    plan: op.plan,
    variant: op.variant,
    amountCents: Number(a.total ?? 0) || 0,
    currency: str(a.currency) ?? "USD",
    status,
    raw,
    createdAt: date(a.created_at) ?? now,
    updatedAt: now,
  };
  // A late order_created after order_refunded must not flip a refund back to paid.
  const [prev] = await db.select({ status: schema.purchase.status }).from(schema.purchase).where(and(eq(schema.purchase.provider, PROVIDER), eq(schema.purchase.providerOrderId, orderId))).limit(1);
  if (prev?.status === "refunded" && status !== "refunded") values.status = "refunded";
  await db
    .insert(schema.purchase)
    .values(values)
    .onConflictDoUpdate({
      target: [schema.purchase.provider, schema.purchase.providerOrderId],
      set: { userId: values.userId, email: values.email, plan: values.plan, variant: values.variant, amountCents: values.amountCents, currency: values.currency, status: values.status, raw: values.raw, updatedAt: now },
    });
  let plan: string | undefined;
  if (user) plan = await applyPlan(db, user, values.status === "refunded" ? "down" : "up");
  return { ok: true, action: input.refundedEvent ? "purchase_refunded" : "purchase_" + values.status, userId: user?.id ?? null, plan };
}

/** Upserts one Lemon Squeezy subscription (a `subscriptions` resource), skipping data older than the stored row. Shared by the webhook and the sync. */
export async function upsertSubscription(
  db: Db,
  settings: Settings,
  input: { subId: string; attrs: Attrs; customUserId?: unknown; testMode: boolean; origin: RowOrigin; eventName?: string },
): Promise<HandleResult> {
  const a = input.attrs;
  const name = input.eventName ?? "";
  const email = str(a.user_email);
  const user = await findUser(db, input.customUserId, email);
  const now = new Date();
  const key = variantKeyForId(settings, str(a.variant_id));
  const op = optionPlan(key);
  const variantName = (str(a.variant_name) ?? "").toLowerCase();
  const interval = op?.interval ?? (variantName.includes("year") || variantName.includes("annual") ? "yearly" : "monthly");
  // Unknown variant: keep the plan already on the row (or "pro", the historic default for a new row).
  const subPlan = op?.plan === "team" ? "team" : op?.plan === "pro" ? "pro" : null;
  const subId = String(input.subId);
  const status = str(a.status) ?? (name === "subscription_expired" ? "expired" : name === "subscription_cancelled" ? "cancelled" : "active");
  const urls = (a.urls ?? {}) as Attrs;
  const updatedAt = date(a.updated_at) ?? now;
  const [prev] = await db
    .select({ raw: schema.subscription.raw })
    .from(schema.subscription)
    .where(and(eq(schema.subscription.provider, PROVIDER), eq(schema.subscription.providerSubId, subId)))
    .limit(1);
  let prevUpdated: Date | null = null;
  try {
    prevUpdated = prev?.raw ? date((JSON.parse(prev.raw) as { attributes?: Attrs }).attributes?.updated_at) : null;
  } catch {}
  if (prevUpdated && prevUpdated > updatedAt) return { ok: true, action: "stale_subscription_event", userId: user?.id ?? null };
  const values = {
    id: "ls_" + subId,
    provider: PROVIDER,
    providerSubId: subId,
    userId: user?.id ?? null,
    email: email ?? "",
    plan: subPlan ?? "pro",
    interval,
    status,
    renewsAt: date(a.renews_at),
    endsAt: date(a.ends_at),
    portalUrl: str(urls.customer_portal),
    raw: JSON.stringify({ ...input.origin, test_mode: input.testMode, attributes: a }),
    createdAt: date(a.created_at) ?? now,
    updatedAt: now,
  };
  await db
    .insert(schema.subscription)
    .values(values)
    .onConflictDoUpdate({
      target: [schema.subscription.provider, schema.subscription.providerSubId],
      set: { userId: values.userId, email: values.email, plan: subPlan ?? sql`${schema.subscription.plan}`, interval: values.interval, status: values.status, renewsAt: values.renewsAt, endsAt: values.endsAt, portalUrl: values.portalUrl ?? sql`${schema.subscription.portalUrl}`, raw: values.raw, updatedAt: now },
    });
  let plan: string | undefined;
  if (user) plan = await applyPlan(db, user, "auto");
  return { ok: true, action: "subscription_" + status, userId: user?.id ?? null, plan };
}

/** Handles one verified Lemon Squeezy event. Every write is an upsert, so redeliveries are harmless. */
export async function handleEvent(db: Db, settings: Settings, ev: LsEvent): Promise<HandleResult> {
  const name = ev.meta?.event_name ?? "unknown";
  const a: Attrs = ev.data?.attributes ?? {};
  const email = str(a.user_email);
  const customUserId = ev.meta?.custom_data?.user_id;
  const user = await findUser(db, customUserId, email);
  const now = new Date();
  let result: HandleResult = { ok: true, action: "ignored", userId: user?.id ?? null };

  if (name === "order_created" || name === "order_refunded") {
    result = await upsertOrder(db, settings, { orderId: String(ev.data.id), attrs: a, customUserId, testMode: !!ev.meta.test_mode, origin: { event: name }, refundedEvent: name === "order_refunded" });
  } else if (name.startsWith("subscription_") && ev.data?.type === "subscriptions") {
    result = await upsertSubscription(db, settings, { subId: String(ev.data.id), attrs: a, customUserId, testMode: !!ev.meta.test_mode, origin: { event: name }, eventName: name });
  } else if (name.startsWith("subscription_payment_")) {
    // subscription-invoices: the status change itself arrives as subscription_updated.
    result = { ...result, action: name };
  }

  await db.insert(schema.auditLog).values({
    actor: PROVIDER,
    action: "webhook:" + name,
    target: user?.id ?? email ?? null,
    detail: JSON.stringify({ id: ev.data?.id, type: ev.data?.type, result: result.action, plan: result.plan, note: result.note, test_mode: !!ev.meta?.test_mode }),
    createdAt: now,
  });
  return result;
}
