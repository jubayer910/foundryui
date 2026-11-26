import "server-only";
import { and, eq, inArray, isNull, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { applyPlan, optionPlan, provenAt, str, verifyHmacHex, type Attrs, type Db, type HandleResult } from "./billing";
import { checkoutKeys as lsKeys } from "./lemonsqueezy";
import { planLabel, type VariantKey } from "./plans";
import type { Settings } from "./settings";
import { mailBuyer, productName } from "./activation";
import { SENDERS, sendMail } from "./mail";
import { claimToken } from "./contra/claim-token";
import { ensureTeam } from "@/app/api/team/_lib";

/**
 * Creem (creem.io, Merchant of Record). The buyer pays on a Creem hosted checkout; the webhook
 * (app/api/webhooks/creem/route.ts) writes purchase / subscription rows with provider "creem" and moves
 * user.plan through the shared rules in lib/billing.ts (entitlement, applyPlan).
 *
 * Buyer → account: metadata.userId (set by our own checkout for a signed-in buyer), else the customer email when
 * that account is proven for the sale (provenAt: verified email, or created before the sale). Otherwise the rows
 * stay linked to the email only (userId null) and the buyer gets the same "purchase confirmed, open this link"
 * claim email as a Contra sale (/claim, lib/contra/claim-token.ts). Signing up or signing in with a proven email
 * later attaches the rows (attachForEmail, called from the auth hooks in lib/auth.ts); a new unverified account
 * must open the claim link (claimCreemSale), exactly like Contra.
 *
 * Idempotent: every row is an upsert keyed on Creem ids, processed events are kept in creem_event, and each
 * email is claimed in creem_event before it is sent, so a retry never grants or mails twice.
 */

export const PROVIDER = "creem";
const LIVE_API = "https://api.creem.io";
const TEST_API = "https://test-api.creem.io";
const SITE = "https://ingotui.com";

export const PRODUCT_KEYS: VariantKey[] = ["proMonthly", "proYearly", "teamMonthly", "teamYearly", "lifetimeDeal", "lifetimeAfter"];
export const PRODUCT_ID_RE = /^prod_[A-Za-z0-9]{1,64}$/;

/* ------------------------------------------------------------------ config */

export type CreemKeys = { apiKey: string; base: string; test: boolean };

/** The API key (a Worker secret), with the API base picked from its prefix: creem_test_ keys use the test API. */
export function creemKeys(env: Pick<CloudflareEnv, "CREEM_API_KEY">): CreemKeys | null {
  const apiKey = env.CREEM_API_KEY?.trim();
  if (!apiKey) return null;
  const test = apiKey.startsWith("creem_test_");
  return { apiKey, test, base: test ? TEST_API : LIVE_API };
}

/** The Creem product id that sells this variant key ("" = none set in admin → Pricing). */
export const creemProductFor = (s: Settings, key: VariantKey) => s.creem?.products?.[key]?.trim() ?? "";

/** Reverse map: a Creem product id to the variant key it sells. */
export function variantKeyForProduct(s: Settings, productId: string | null | undefined): VariantKey | null {
  if (!productId) return null;
  for (const k of PRODUCT_KEYS) if (creemProductFor(s, k) === productId) return k;
  return null;
}

/** What admin → Pricing shows: which parts are set, never the values of secrets. */
export function creemStatus(env: Pick<CloudflareEnv, "CREEM_API_KEY" | "CREEM_WEBHOOK_SECRET" | "CREEM_ALLOW_TEST">, s: Settings) {
  const keys = creemKeys(env);
  return {
    apiKey: !!keys,
    mode: (keys ? (keys.test ? "test" : "live") : null) as "test" | "live" | null,
    webhookSecret: !!env.CREEM_WEBHOOK_SECRET?.trim(),
    allowTest: env.CREEM_ALLOW_TEST === "1",
    products: Object.fromEntries(PRODUCT_KEYS.map((k) => [k, !!creemProductFor(s, k)])) as Record<VariantKey, boolean>,
    preferContra: !!s.creem?.preferContra,
  };
}

export type CheckoutPick = { kind: "creem"; productId: string; keys: CreemKeys } | { kind: "lemonsqueezy"; variantId: string } | { kind: "external"; url: string } | { kind: "waitlist" };

/**
 * Which checkout sells this variant right now: Creem (API key + product id) > Lemon Squeezy (keys + variant id)
 * > the external link (Contra) > waitlist. "Prefer Contra" in admin puts the Contra link first when it is set.
 */
export function pickCheckout(env: CloudflareEnv, s: Settings, key: VariantKey): CheckoutPick {
  const external = s.externalCheckout?.[key]?.trim() ?? "";
  const extOk = /^https:\/\/\S+$/.test(external);
  if (s.creem?.preferContra && extOk) return { kind: "external", url: external };
  const keys = creemKeys(env);
  const productId = creemProductFor(s, key);
  if (keys && productId) return { kind: "creem", productId, keys };
  const variantId = s.variants?.[key]?.trim();
  if (lsKeys(env) && variantId) return { kind: "lemonsqueezy", variantId };
  if (extOk) return { kind: "external", url: external };
  return { kind: "waitlist" };
}

/* ------------------------------------------------------------------ API */

export type CheckoutInput = { productId: string; variantKey: VariantKey; option: string; successUrl: string; email?: string | null; userId?: string | null; requestId?: string };

/** Body of POST /v1/checkouts. Pure, so the tests can check it without calling Creem. */
export function checkoutBody(input: CheckoutInput) {
  return {
    product_id: input.productId,
    request_id: input.requestId ?? "ck_" + crypto.randomUUID(),
    units: 1,
    success_url: input.successUrl,
    ...(input.email ? { customer: { email: input.email } } : {}),
    metadata: { variantKey: input.variantKey, option: input.option, ...(input.userId ? { userId: input.userId } : {}) },
  };
}

/** Creates a hosted checkout and returns its URL. Never logs the key. */
export async function createCheckout(keys: CreemKeys, body: ReturnType<typeof checkoutBody>): Promise<{ id: string; url: string }> {
  const res = await fetch(keys.base + "/v1/checkouts", {
    method: "POST",
    headers: { "x-api-key": keys.apiKey, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const json = (await res.json().catch(() => null)) as { id?: string; checkout_url?: string; message?: unknown } | null;
  if (!res.ok || !json?.checkout_url) throw new Error("Creem checkout failed (" + res.status + "): " + (json?.message ? String(json.message).slice(0, 200) : "no checkout_url"));
  return { id: String(json.id ?? ""), url: json.checkout_url };
}

/** A one-time customer portal link (manage card, invoices, cancel). */
export async function portalLink(keys: CreemKeys, customerId: string): Promise<string> {
  const res = await fetch(keys.base + "/v1/customers/billing", {
    method: "POST",
    headers: { "x-api-key": keys.apiKey, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ customer_id: customerId }),
  });
  const json = (await res.json().catch(() => null)) as { customer_portal_link?: string } | null;
  if (!res.ok || !json?.customer_portal_link) throw new Error("Creem portal failed (" + res.status + ")");
  return json.customer_portal_link;
}

/** The Creem customer id for this account's billing: newest Creem subscription, else newest Creem purchase. */
export async function customerIdFor(userId: string): Promise<string | null> {
  const db = await getDb();
  const subs = await db.select({ raw: schema.subscription.raw }).from(schema.subscription).where(and(eq(schema.subscription.provider, PROVIDER), eq(schema.subscription.userId, userId))).orderBy(sql`${schema.subscription.updatedAt} desc`).limit(5);
  const buys = await db.select({ raw: schema.purchase.raw }).from(schema.purchase).where(and(eq(schema.purchase.provider, PROVIDER), eq(schema.purchase.userId, userId))).orderBy(sql`${schema.purchase.createdAt} desc`).limit(5);
  for (const r of [...subs, ...buys]) {
    const id = str(rawOf(r.raw).customer_id);
    if (id) return id;
  }
  return null;
}

/* ------------------------------------------------------------------ webhook */

/** creem-signature = hex HMAC-SHA256 of the raw body with the webhook secret. Constant-time compare. */
export const verifySignature = verifyHmacHex;

export type CreemEvent = { id: string; eventType: string; created_at?: string | number; object: Attrs };

const o = (v: unknown): Attrs => (v && typeof v === "object" && !Array.isArray(v) ? (v as Attrs) : {});
const idOf = (v: unknown) => (typeof v === "string" ? v || null : str(o(v).id));
const cents = (v: unknown) => (Number.isFinite(Number(v)) ? Math.round(Number(v)) : 0);
const lower = (v: unknown) => str(v)?.trim().toLowerCase() || null;
const dateOf = (v: unknown): Date | null => {
  if (typeof v === "number" && Number.isFinite(v)) return new Date(v > 1e12 ? v : v * 1000);
  if (typeof v === "string" && v) {
    const d = new Date(/^\d+$/.test(v) ? Number(v) : v);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
};
function rawOf(raw: string | null | undefined): Attrs {
  try {
    return o(JSON.parse(raw ?? ""));
  } catch {
    return {};
  }
}

/**
 * Test-mode event: any `mode` on the object or its order / subscription / transaction that is not a production
 * value. Creem's samples use "test", "sandbox" and "local"; production is "prod". No mode at all counts as live.
 */
export function isTestEvent(ev: Pick<CreemEvent, "object">): boolean {
  const ob = o(ev.object);
  const modes = [ob.mode, o(ob.order).mode, o(ob.subscription).mode, o(ob.transaction).mode, o(ob.last_transaction).mode].map((m) => lower(m)).filter((m): m is string => !!m);
  return modes.some((m) => !["prod", "production", "live"].includes(m));
}

/** Creem subscription status → the status vocabulary the shared entitlement rule reads. */
const SUB_STATUS: Record<string, string> = { active: "active", trialing: "on_trial", past_due: "past_due", unpaid: "unpaid", paused: "paused", canceled: "cancelled", scheduled_cancel: "cancelled", expired: "expired" };

/* ---- ledger ---- */

/** True when this event id was already processed. */
export async function seenEvent(db: Db, id: string): Promise<boolean> {
  const [r] = await db.select({ id: schema.creemEvent.id }).from(schema.creemEvent).where(eq(schema.creemEvent.id, id)).limit(1);
  return !!r;
}

/** Records a processed event (after its writes succeeded). */
export async function markEvent(db: Db, ev: CreemEvent, result: string) {
  await db.insert(schema.creemEvent).values({ id: ev.id, kind: "event", eventType: ev.eventType, result: result.slice(0, 120), createdAt: new Date() }).onConflictDoNothing();
}

/** Claims one email send. False when it was already sent (or claimed by a parallel delivery). */
async function onceMail(db: Db, id: string, eventType: string | null): Promise<boolean> {
  const r = await db.insert(schema.creemEvent).values({ id: "mail:" + id, kind: "mail", eventType, result: null, createdAt: new Date() }).onConflictDoNothing().returning({ id: schema.creemEvent.id });
  return r.length > 0;
}

/* ---- accounts ---- */

type Account = { id: string; email: string; name: string; plan: string; emailVerified: boolean; createdAt: Date };
const accountCols = () => ({ id: schema.user.id, email: schema.user.email, name: schema.user.name, plan: schema.user.plan, emailVerified: schema.user.emailVerified, createdAt: schema.user.createdAt });

async function accountById(db: Db, id: string): Promise<Account | null> {
  const [u] = await db.select(accountCols()).from(schema.user).where(eq(schema.user.id, id)).limit(1);
  return u ?? null;
}
async function accountByEmail(db: Db, email: string): Promise<Account | null> {
  const [u] = await db.select(accountCols()).from(schema.user).where(sql`lower(${schema.user.email}) = ${email.toLowerCase()}`).limit(1);
  return u ?? null;
}

/** metadata.userId first (our own checkout set it); else the email's account, only when proven for the sale. */
async function resolveBuyer(db: Db, meta: Attrs, email: string | null, soldAt: Date): Promise<{ user: Account | null; existing: Account | null }> {
  const id = str(meta.userId);
  if (id) {
    const u = await accountById(db, id);
    if (u) return { user: u, existing: u };
  }
  if (!email) return { user: null, existing: null };
  const u = await accountByEmail(db, email);
  return { user: u && provenAt(u, soldAt.getTime()) ? u : null, existing: u };
}

/** The variant key behind a purchase row (raw.variant_key, else from purchase.variant). */
function keyOfPurchase(p: { variant: string | null; raw: string | null }): VariantKey {
  const k = str(rawOf(p.raw).variant_key);
  if (k && (PRODUCT_KEYS as string[]).includes(k)) return k as VariantKey;
  const v = p.variant ?? "";
  return v === "monthly" ? "proMonthly" : v === "yearly" ? "proYearly" : (PRODUCT_KEYS as string[]).includes(v) ? (v as VariantKey) : "lifetimeAfter";
}

/* ---- emails ---- */

async function mailActive(db: Db, orderId: string, to: string, key: VariantKey, plan: string) {
  if (!(await onceMail(db, "active:" + orderId, "checkout.completed"))) return false;
  const name = productName(key);
  await mailBuyer(to, `Your Ingot UI ${planLabel(plan)} is active`, [
    "Hi,",
    "",
    `Thanks for buying ${name}. Your payment went through and your plan is now active on ${to}.`,
    ...(plan === "team" ? ["", "Invite up to 4 teammates by link from your account: https://ingotui.com/account"] : []),
    "",
    "Browse the library: https://ingotui.com/",
    "Your account: https://ingotui.com/account",
  ]);
  return true;
}

async function mailInvite(db: Db, purchaseId: string, orderId: string, to: string, key: VariantKey, plan: string, hasAccount: boolean, now: Date) {
  if (!(await onceMail(db, "invite:" + orderId, "checkout.completed"))) return false;
  const product = productName(key);
  const label = planLabel(plan);
  const link = `${SITE}/claim?t=${encodeURIComponent(await claimToken(purchaseId, now))}`;
  await mailBuyer(to, `Your Ingot UI ${product} purchase is confirmed`, [
    "Hi,",
    "",
    `Thanks for buying ${product}. Your purchase is confirmed.`,
    "",
    hasAccount
      ? `Open this link while signed in as ${to} and ${label} switches on:`
      : `Open this link and create your free Ingot UI account with this same email (${to}). ${label} switches on right away:`,
    link,
    "",
    "The link works for 14 days. Already have an account with another email? Reply to this email and we will move it over.",
  ]);
  return true;
}

/* ---- handlers ---- */

type Ctx = { db: Db; settings: Settings; ev: CreemEvent; now: Date };

async function onCheckoutCompleted({ db, settings, ev, now }: Ctx): Promise<HandleResult> {
  const c = o(ev.object);
  const order = o(c.order);
  const product = o(c.product);
  const customer = o(c.customer);
  const subObj = o(c.subscription);
  const meta = o(c.metadata);
  const productId = idOf(c.product) ?? str(order.product);
  const key = variantKeyForProduct(settings, productId);
  const op = optionPlan(key);
  if (!key || !op) return { ok: true, action: "unmatched_product", userId: null, note: "product " + productId + " is not in admin → Pricing, Creem product IDs" };
  const orderId = str(order.id) ?? str(c.id);
  if (!orderId) return { ok: true, action: "no_order", userId: null };
  const email = lower(customer.email);
  const soldAt = dateOf(order.created_at) ?? dateOf(ev.created_at) ?? now;
  const { user, existing } = await resolveBuyer(db, meta, email, soldAt);
  const subId = idOf(c.subscription);
  const purchaseId = "creem_" + orderId;
  const raw = JSON.stringify({
    event: ev.eventType,
    event_id: ev.id,
    order_id: orderId,
    transaction_id: str(order.transaction),
    checkout_id: str(c.id),
    customer_id: idOf(c.customer),
    subscription_id: subId,
    product_id: productId,
    variant_key: key,
    request_id: str(c.request_id),
    mode: str(c.mode) ?? str(order.mode),
    attributes: { amount: order.amount, amount_paid: order.amount_paid, tax_amount: order.tax_amount, currency: order.currency, type: order.type, product: { name: product.name, billing_type: product.billing_type, billing_period: product.billing_period }, metadata: meta },
  });
  const values = {
    id: purchaseId,
    provider: PROVIDER,
    providerOrderId: orderId,
    userId: user?.id ?? null,
    email: email ?? "",
    plan: op.plan,
    variant: op.variant,
    amountCents: cents(order.amount_paid ?? order.amount ?? product.price),
    currency: (str(order.currency) ?? str(product.currency) ?? "USD").toUpperCase(),
    status: "paid",
    raw,
    createdAt: soldAt,
    updatedAt: now,
  };
  await db
    .insert(schema.purchase)
    .values(values)
    .onConflictDoUpdate({
      target: [schema.purchase.provider, schema.purchase.providerOrderId],
      // a refund that landed first stays refunded; an account linked earlier stays linked
      set: { userId: sql`coalesce(${schema.purchase.userId}, ${values.userId})`, plan: values.plan, variant: values.variant, amountCents: values.amountCents, currency: values.currency, raw: values.raw, updatedAt: now },
    });
  if (op.interval && subId) {
    const subRaw = JSON.stringify({ event: ev.eventType, event_id: ev.id, event_at: soldAt.toISOString(), customer_id: idOf(c.customer), product_id: productId, variant_key: key, order_id: orderId });
    await db
      .insert(schema.subscription)
      .values({
        id: "creem_" + subId,
        provider: PROVIDER,
        providerSubId: subId,
        userId: user?.id ?? null,
        email: email ?? "",
        plan: op.plan,
        interval: op.interval,
        status: SUB_STATUS[lower(subObj.status) ?? ""] ?? "active",
        renewsAt: dateOf(subObj.current_period_end_date),
        endsAt: null,
        portalUrl: null,
        raw: subRaw,
        createdAt: soldAt,
        updatedAt: now,
      })
      // subscription.* events own the status; this only fills in the link and plan
      .onConflictDoUpdate({ target: [schema.subscription.provider, schema.subscription.providerSubId], set: { userId: sql`coalesce(${schema.subscription.userId}, ${user?.id ?? null})`, plan: op.plan, interval: op.interval, updatedAt: now } });
  }
  const [row] = await db.select({ status: schema.purchase.status, userId: schema.purchase.userId }).from(schema.purchase).where(eq(schema.purchase.id, purchaseId)).limit(1);
  if (row?.status !== "paid") return { ok: true, action: "purchase_" + row?.status, userId: row?.userId ?? null };

  const linked = user ?? (row.userId ? await accountById(db, row.userId) : null);
  if (linked) {
    if (op.plan === "team") await ensureTeam({ id: linked.id, email: linked.email, name: linked.name, plan: "team", role: "user" });
    const plan = await applyPlan(db, linked, "up", now);
    await mailActive(db, orderId, linked.email, key, op.plan);
    return { ok: true, action: "purchase_paid", userId: linked.id, plan };
  }
  const invited = email ? await mailInvite(db, purchaseId, orderId, email, key, op.plan, !!existing, now) : false;
  return { ok: true, action: "purchase_paid_unlinked", userId: null, note: invited ? "claim link emailed" : existing ? "account not proven for this sale" : "no account yet" };
}

async function onSubscription({ db, settings, ev, now }: Ctx): Promise<HandleResult> {
  const s = o(ev.object);
  const subId = str(s.id);
  if (!subId) return { ok: true, action: "no_subscription", userId: null };
  const name = ev.eventType;
  const S = schema.subscription;
  const [prev] = await db.select().from(S).where(and(eq(S.provider, PROVIDER), eq(S.providerSubId, subId))).limit(1);
  const productId = idOf(s.product);
  const key = variantKeyForProduct(settings, productId) ?? (prev ? (str(rawOf(prev.raw).variant_key) as VariantKey | null) : null);
  const op = optionPlan(key);
  const plan = op?.plan === "pro" || op?.plan === "team" ? op.plan : (prev?.plan ?? null);
  if (!plan) return { ok: true, action: "unmatched_product", userId: null, note: "product " + productId + " is not in admin → Pricing, Creem product IDs" };
  const interval = op?.interval ?? prev?.interval ?? "yearly";
  const customer = o(s.customer);
  const email = lower(customer.email) ?? prev?.email ?? null;
  const evAt = dateOf(ev.created_at) ?? now;
  const periodEnd = dateOf(s.current_period_end_date);
  let userId = prev?.userId ?? null;
  if (!userId) userId = (await resolveBuyer(db, o(s.metadata), email, dateOf(s.created_at) ?? evAt)).user?.id ?? null;

  // subscription.paid: record the payment (first one = the checkout order, so the same row; renewals add one).
  let paidRow = false;
  if (name === "subscription.paid") {
    const tx = o(s.last_transaction);
    const orderKey = str(tx.order) ?? str(tx.id);
    if (orderKey) {
      const variant = op?.variant ?? (plan === "team" ? (interval === "monthly" ? "teamMonthly" : "teamYearly") : interval);
      const r = await db
        .insert(schema.purchase)
        .values({
          id: "creem_" + orderKey,
          provider: PROVIDER,
          providerOrderId: orderKey,
          userId,
          email: email ?? "",
          plan,
          variant,
          amountCents: cents(tx.amount_paid ?? tx.amount),
          currency: (str(tx.currency) ?? "USD").toUpperCase(),
          status: "paid",
          raw: JSON.stringify({ event: name, event_id: ev.id, order_id: str(tx.order), transaction_id: str(tx.id), subscription_id: subId, customer_id: idOf(s.customer), product_id: productId, variant_key: key, renewal: true }),
          createdAt: dateOf(tx.created_at) ?? evAt,
          updatedAt: now,
        })
        .onConflictDoNothing()
        .returning({ id: schema.purchase.id });
      paidRow = r.length > 0;
    }
  }

  // Older than what the row already reflects (a late retry): keep the row as it is.
  const prevAt = prev ? dateOf(rawOf(prev.raw).event_at) : null;
  if (prevAt && prevAt > evAt) return { ok: true, action: paidRow ? "renewal_recorded_stale_status" : "stale_subscription_event", userId };

  const mapped = SUB_STATUS[lower(s.status) ?? ""];
  const status =
    name === "subscription.expired"
      ? "expired"
      : name === "subscription.canceled" || name === "subscription.scheduled_cancel"
        ? "cancelled"
        : name === "subscription.past_due"
          ? "past_due"
          : name === "subscription.paid" || name === "subscription.active"
            ? mapped === "on_trial" ? "on_trial" : "active"
            : (mapped ?? prev?.status ?? "active");
  const renewsAt = periodEnd ?? prev?.renewsAt ?? null;
  // Cancelled: access to the end of the paid period. Expired: now.
  const endsAt = status === "cancelled" ? (periodEnd ?? prev?.renewsAt ?? now) : status === "expired" ? now : null;
  const raw = JSON.stringify({ event: name, event_id: ev.id, event_at: evAt.toISOString(), customer_id: idOf(s.customer) ?? str(rawOf(prev?.raw).customer_id), product_id: productId, variant_key: key, canceled_at: str(s.canceled_at), status: str(s.status) });
  await db
    .insert(S)
    .values({ id: "creem_" + subId, provider: PROVIDER, providerSubId: subId, userId, email: email ?? "", plan, interval, status, renewsAt, endsAt, portalUrl: null, raw, createdAt: dateOf(s.created_at) ?? evAt, updatedAt: now })
    .onConflictDoUpdate({ target: [S.provider, S.providerSubId], set: { userId: sql`coalesce(${S.userId}, ${userId})`, plan, interval, status, renewsAt, endsAt, raw, updatedAt: now } });

  let planAfter: string | undefined;
  if (userId) {
    const u = await accountById(db, userId);
    if (u) {
      if (plan === "team" && (status === "active" || status === "on_trial")) await ensureTeam({ id: u.id, email: u.email, name: u.name, plan: "team", role: "user" });
      planAfter = await applyPlan(db, u, "auto", now);
    }
  }
  return { ok: true, action: "subscription_" + status + (paidRow ? "+payment" : ""), userId, plan: planAfter };
}

/** The purchase a refund or dispute points at (order id, transaction order, or transaction id). */
async function purchaseFor(db: Db, ob: Attrs) {
  const tx = o(ob.transaction);
  const ids = [idOf(ob.order), str(tx.order), idOf(ob.transaction), str(o(ob.checkout).order)].filter((x): x is string => !!x);
  if (!ids.length) return null;
  const [p] = await db.select().from(schema.purchase).where(and(eq(schema.purchase.provider, PROVIDER), inArray(schema.purchase.providerOrderId, ids))).limit(1);
  return p ?? null;
}

async function onRefund({ db, ev, now }: Ctx): Promise<HandleResult> {
  const r = o(ev.object);
  const p = await purchaseFor(db, r);
  if (!p) return { ok: true, action: "unmatched_refund", userId: null, note: "no Creem purchase for this refund" };
  const refunded = cents(r.refund_amount);
  const full = refunded <= 0 || refunded >= p.amountCents;
  const status = full ? "refunded" : "partial_refund";
  const pRaw = rawOf(p.raw);
  const raw = JSON.stringify({ ...pRaw, refund_id: str(r.id), attributes: { ...o(pRaw.attributes), refunded_amount: refunded } });
  await db.update(schema.purchase).set({ status, raw, note: `Creem refund ${str(r.id) ?? ""} (${refunded} ${str(r.refund_currency) ?? p.currency})`.trim(), updatedAt: now }).where(eq(schema.purchase.id, p.id));
  const subId = idOf(r.subscription) ?? str(rawOf(p.raw).subscription_id);
  if (full && subId) await db.update(schema.subscription).set({ status: "expired", endsAt: now, updatedAt: now }).where(and(eq(schema.subscription.provider, PROVIDER), eq(schema.subscription.providerSubId, subId)));
  let plan: string | undefined;
  if (p.userId) {
    const u = await accountById(db, p.userId);
    if (u) plan = await applyPlan(db, u, "down", now);
  }
  return { ok: true, action: "purchase_" + status, userId: p.userId, plan };
}

async function onDispute({ db, settings, ev }: Ctx): Promise<HandleResult> {
  const d = o(ev.object);
  const p = await purchaseFor(db, d);
  const id = str(d.id) ?? ev.id;
  if (await onceMail(db, "dispute:" + id, ev.eventType)) {
    const mail = {
      subject: `Creem dispute opened: ${cents(d.amount) / 100} ${str(d.currency) ?? ""}`.trim(),
      from: SENDERS.support,
      text: [
        `A buyer opened a dispute (chargeback) on Creem: ${id}.`,
        p ? `Purchase: ${p.id}, ${productName(keyOfPurchase(p))}, ${p.email || "no email"}${p.userId ? `, account ${SITE}/admin/users/${p.userId}` : ", no account linked"}.` : "We could not match it to a purchase.",
        "",
        "The plan was not changed. Answer the dispute in the Creem dashboard; refund or revoke in Admin > Orders if needed.",
      ].join("\n"),
    };
    try {
      const r = await sendMail({ ...mail, to: settings.support.email });
      if (!r.sent && settings.support.contactEmail && settings.support.contactEmail !== settings.support.email) await sendMail({ ...mail, to: settings.support.contactEmail });
    } catch {}
  }
  return { ok: true, action: "dispute_logged", userId: p?.userId ?? null, note: p ? "purchase " + p.id : "unmatched" };
}

/** Handles one verified, non-duplicate Creem event and writes its audit row. Throws on storage errors (the route answers 500, Creem retries). */
export async function handleCreemEvent(db: Db, settings: Settings, ev: CreemEvent, now = new Date()): Promise<HandleResult> {
  const ctx: Ctx = { db, settings, ev, now };
  const t = ev.eventType;
  let result: HandleResult;
  if (t === "checkout.completed") result = await onCheckoutCompleted(ctx);
  else if (t.startsWith("subscription.")) result = await onSubscription(ctx);
  else if (t === "refund.created") result = await onRefund(ctx);
  else if (t === "dispute.created") result = await onDispute(ctx);
  else result = { ok: true, action: "ignored", userId: null };
  const ob = o(ev.object);
  await db.insert(schema.auditLog).values({
    actor: PROVIDER,
    action: "webhook:" + t,
    target: result.userId ?? lower(o(ob.customer).email) ?? null,
    detail: JSON.stringify({ event: ev.id, object: str(ob.id), result: result.action, plan: result.plan, note: result.note }),
    createdAt: now,
  });
  return result;
}

/**
 * The whole webhook request: signature, payload shape, test mode, duplicate evt id, then handleCreemEvent.
 * Kept out of the route file so scripts/test-creem.mts runs exactly this.
 */
export async function receiveWebhook(input: {
  env: Pick<CloudflareEnv, "CREEM_WEBHOOK_SECRET" | "CREEM_ALLOW_TEST">;
  db: Db;
  settings: () => Promise<Settings>;
  body: string;
  signature: string | null;
  now?: Date;
}): Promise<{ status: number; json: Record<string, unknown> }> {
  const { env, db, body } = input;
  if (!(await verifySignature(body, input.signature, env.CREEM_WEBHOOK_SECRET))) return { status: 401, json: { error: "bad_signature" } };
  let ev: CreemEvent;
  try {
    ev = JSON.parse(body) as CreemEvent;
    if (typeof ev?.id !== "string" || !ev.id || typeof ev.eventType !== "string" || !ev.object || typeof ev.object !== "object") throw new Error("shape");
  } catch {
    return { status: 400, json: { error: "bad_payload" } };
  }
  // Test-mode events never grant plans on the live site (anyone can pay with Creem's test cards).
  // They are only logged. CREEM_ALLOW_TEST=1 processes them while testing locally.
  if (isTestEvent(ev) && env.CREEM_ALLOW_TEST !== "1") {
    try {
      await db.insert(schema.auditLog).values({ actor: PROVIDER, action: "webhook.test_mode_ignored", target: ev.eventType, detail: JSON.stringify({ id: ev.id }), createdAt: new Date() });
    } catch {}
    return { status: 200, json: { ok: true, ignored: "test_mode" } };
  }
  try {
    if (await seenEvent(db, ev.id)) return { status: 200, json: { ok: true, duplicate: true } };
    const result = await handleCreemEvent(db, await input.settings(), ev, input.now);
    await markEvent(db, ev, result.action);
    return { status: 200, json: result };
  } catch (e) {
    console.error("creem webhook", ev.eventType, e instanceof Error ? e.message : e);
    return { status: 500, json: { error: "retry" } };
  }
}

/* ------------------------------------------------------------------ attach later (sign-up, sign-in, claim link) */

/** Links one unlinked Creem sale (and its subscription) to this account, then turns the plan on and mails once. */
async function linkSale(db: Db, u: Account, p: typeof schema.purchase.$inferSelect, how: "email" | "claim", now: Date): Promise<boolean> {
  const won = await db.update(schema.purchase).set({ userId: u.id, updatedAt: now }).where(and(eq(schema.purchase.id, p.id), isNull(schema.purchase.userId))).returning({ id: schema.purchase.id });
  if (!won.length) return false;
  const raw = rawOf(p.raw);
  const subId = str(raw.subscription_id);
  if (subId) await db.update(schema.subscription).set({ userId: u.id, updatedAt: now }).where(and(eq(schema.subscription.provider, PROVIDER), eq(schema.subscription.providerSubId, subId), isNull(schema.subscription.userId)));
  if (p.plan === "team") await ensureTeam({ id: u.id, email: u.email, name: u.name, plan: "team", role: "user" });
  const planAfter = await applyPlan(db, u, "up", now);
  await db.insert(schema.auditLog).values({ actor: PROVIDER, action: "creem.attach", target: u.id, detail: JSON.stringify({ purchase: p.id, how, planAfter }), createdAt: now });
  if ((p.status === "paid" || p.status === "partial_refund") && !raw.renewal) await mailActive(db, p.providerOrderId, u.email, keyOfPurchase(p), p.plan);
  return true;
}

/** A buyer signed up or signed in: attach their unlinked Creem sales when the account is proven for each sale. Never throws. */
export async function attachForEmail(email: string, now = new Date()): Promise<{ attached: number }> {
  try {
    const e = lower(email);
    if (!e) return { attached: 0 };
    const db = await getDb();
    const u = await accountByEmail(db, e);
    if (!u) return { attached: 0 };
    const rows = await db
      .select()
      .from(schema.purchase)
      .where(and(eq(schema.purchase.provider, PROVIDER), isNull(schema.purchase.userId), sql`lower(${schema.purchase.email}) = ${e}`, inArray(schema.purchase.status, ["paid", "partial_refund"])))
      .limit(20);
    let attached = 0;
    for (const p of rows) if (provenAt(u, p.createdAt.getTime()) && (await linkSale(db, u, p, "email", now))) attached++;
    return { attached };
  } catch {
    return { attached: 0 }; // table missing or D1 hiccup: the claim link still works
  }
}

/** Claim ids of Creem sales start with this (purchase ids); Contra sale ids never do. */
export const isCreemClaim = (saleId: string) => saleId.startsWith("creem_");

export async function creemClaimView(purchaseId: string): Promise<{ payerEmail: string; variantKey: VariantKey; status: string; userId: string | null } | null> {
  const db = await getDb();
  const [p] = await db.select().from(schema.purchase).where(and(eq(schema.purchase.id, purchaseId), eq(schema.purchase.provider, PROVIDER))).limit(1);
  if (!p || !p.email) return null;
  return { payerEmail: p.email, variantKey: keyOfPurchase(p), status: p.status, userId: p.userId };
}

export type CreemClaimResult = { ok: true; already: boolean } | { ok: false; reason: "gone" | "wrong_account" | "taken" | "failed"; payerEmail?: string | null; message: string };

/** /claim with a valid token for a Creem sale: opening it proved the inbox, so the sale goes to this account when the email matches. */
export async function claimCreemSale(purchaseId: string, user: { id: string; email: string }, now = new Date()): Promise<CreemClaimResult> {
  const db = await getDb();
  const [p] = await db.select().from(schema.purchase).where(and(eq(schema.purchase.id, purchaseId), eq(schema.purchase.provider, PROVIDER))).limit(1);
  if (!p) return { ok: false, reason: "gone", message: "We could not find this purchase." };
  if (p.userId) return p.userId === user.id ? { ok: true, already: true } : { ok: false, reason: "taken", payerEmail: p.email, message: "This purchase is already active on another account." };
  if (user.email.toLowerCase() !== p.email.toLowerCase()) return { ok: false, reason: "wrong_account", payerEmail: p.email, message: `This purchase was paid with ${p.email}. Sign in with that email to switch it on.` };
  if (p.status !== "paid" && p.status !== "partial_refund") return { ok: false, reason: "gone", message: "This purchase was refunded, so there is nothing to switch on." };
  const u = await accountById(db, user.id);
  if (!u) return { ok: false, reason: "failed", message: "Your account was not found." };
  const linked = await linkSale(db, u, p, "claim", now);
  return linked ? { ok: true, already: false } : { ok: true, already: true };
}
