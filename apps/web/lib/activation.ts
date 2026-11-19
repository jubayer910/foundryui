import "server-only";
import { and, desc, eq, inArray, lte, sql } from "drizzle-orm";
import { getDb, getEnv, schema } from "./db";
import { audit } from "./admin";
import { SENDERS, sendMail } from "./mail";
import { getEffectivePlan, getPriceBook, isCheckoutOption, isPaid, isTeamActive, isTeamOption, optionName, planLabel, type CheckoutOption, type PlanId, type PriceBook, type VariantKey } from "./plans";
import type { Settings } from "./settings";
import type { SessionUser } from "./auth";
import { syncPlan } from "@/components/admin/plan";
import { ensureTeam } from "@/app/api/team/_lib";

/**
 * Contra purchase activation. Contra sells the plans as digital products and has no API or webhook, so:
 * 1. /pricing sends a signed-in buyer to the Contra link and writes an audit row "checkout.external".
 * 2. After paying, the buyer tells us at /activate (requestActivation): a pending activation row.
 * 3. Staff approve it in /admin/activations (approveActivation): a purchase row (provider contra, status
 *    paid, amount from the price book when they asked), a subscription row for Pro and Team (renewsAt is
 *    checked by hand in "Renewals due"), a team for Team, then user.plan is recomputed from the rows.
 *
 * Automatic: once the owner connects Contra in /admin/contra, lib/contra/sync.ts reads the payment-link
 * sales every minute (and on each /activate request) and calls approveActivation(id, "contra-auto").
 * Neither function checks staff rights; the admin server actions do that before calling them.
 */

export type Activation = typeof schema.activation.$inferSelect;
/** Buyer emails come from Jubayer (jubayer@ingotui.com) through lib/mail (Resend); replies go back to him. Never throws. */
export async function mailBuyer(to: string, subject: string, lines: string[]) {
  try {
    await sendMail({ to, subject, text: [...lines, "", "Questions? Just reply to this email.", "", "Jubayer", "Ingot UI"].join("\n"), from: SENDERS.sales, replyTo: SENDERS.sales.email });
  } catch {
    // Mail is a bonus; the buyer's /activate page always shows the status.
  }
}

export type ActivationStatus = "pending" | "approved" | "rejected";
export const PROVIDER = "contra";

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/;
const DAY = 86_400_000;
/** A click on a Contra link counts as "theirs" for this long when picking the price they saw. */
const CLICK_WINDOW = 7 * DAY;
export const RATE_LIMIT = 5;

const LIFETIME_KEYS: VariantKey[] = ["lifetimeDeal", "lifetimeAfter"];

/** The option a variant key sells. */
export const optionOfKey = (k: string): CheckoutOption | null => (k === "lifetimeDeal" || k === "lifetimeAfter" ? "lifetime" : isCheckoutOption(k) && k !== "lifetime" ? k : null);

/** Plan and billing period an option grants. */
export function grantOf(option: string): { plan: PlanId; interval: "monthly" | "yearly" | null } {
  if (option === "proMonthly") return { plan: "pro", interval: "monthly" };
  if (option === "proYearly") return { plan: "pro", interval: "yearly" };
  if (option === "teamMonthly") return { plan: "team", interval: "monthly" };
  if (option === "teamYearly") return { plan: "team", interval: "yearly" };
  return { plan: "lifetime", interval: null };
}

/** Name buyers and staff read, e.g. "Lifetime (launch deal)". */
export const productName = (variantKey: string) => (variantKey === "lifetimeDeal" ? "Lifetime (launch deal)" : optionName(variantKey));

export const priceCents = (settings: Settings, key: VariantKey) => Math.round((settings.prices[key] ?? 0) * 100);

/** One period after `from`, in UTC (month end clamps: Jan 31 + 1 month = Feb 28/29). */
export function addPeriod(from: Date, interval: string): Date {
  const d = new Date(from);
  const day = d.getUTCDate();
  d.setUTCDate(1);
  if (interval === "yearly") d.setUTCFullYear(d.getUTCFullYear() + 1);
  else d.setUTCMonth(d.getUTCMonth() + 1);
  const last = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
  d.setUTCDate(Math.min(day, last));
  return d;
}

/* ------------------------------------------------------------------ clicks */

export type Click = { at: Date; key: VariantKey; option: CheckoutOption };

type ClickRow = { actor: string; target: string | null; detail: string | null; createdAt: Date };

function parseClick(r: ClickRow): (Click & { userId: string | null; email: string }) | null {
  let d: { option?: string; userId?: string } = {};
  try {
    d = JSON.parse(r.detail ?? "{}");
  } catch {}
  const key = (r.target ?? "") as VariantKey;
  const option = optionOfKey(key);
  if (!option) return null;
  return { at: r.createdAt, key, option, userId: d.userId ?? null, email: r.actor.toLowerCase() };
}

/** Recent "checkout.external" audit rows for these accounts, newest first. */
async function clicksFor(emails: string[], since: Date) {
  if (!emails.length) return [];
  const db = await getDb();
  const A = schema.auditLog;
  const rows = await db
    .select({ actor: A.actor, target: A.target, detail: A.detail, createdAt: A.createdAt })
    .from(A)
    .where(and(eq(A.action, "checkout.external"), inArray(sql`lower(${A.actor})`, [...new Set(emails.map((e) => e.toLowerCase()))]), sql`${A.createdAt} >= ${Math.floor(since.getTime() / 1000)}`))
    .orderBy(desc(A.createdAt))
    .limit(500);
  return rows.map(parseClick).filter((c): c is NonNullable<typeof c> => !!c);
}

/** The buyer's latest click through to Contra (used to preselect the plan on /activate). */
export async function latestClick(user: Pick<SessionUser, "id" | "email">, now = new Date()): Promise<Click | null> {
  const list = await clicksFor([user.email], new Date(now.getTime() - CLICK_WINDOW));
  return list.find((c) => !c.userId || c.userId === user.id) ?? null;
}

export type ClickSignal = { clicked: boolean; at: Date | null; minutesBefore: number | null };

/**
 * For each activation: did that account click through to the same product on Contra before asking?
 * A click shortly before the request raises confidence that the payment is real.
 */
export async function clickSignals(list: Activation[]): Promise<Map<string, ClickSignal>> {
  const out = new Map<string, ClickSignal>();
  if (!list.length) return out;
  const oldest = Math.min(...list.map((a) => a.createdAt.getTime()));
  const clicks = await clicksFor(
    list.map((a) => a.accountEmail),
    new Date(oldest - 30 * DAY),
  );
  for (const a of list) {
    const c = clicks.find(
      (k) => (k.userId ? k.userId === a.userId : k.email === a.accountEmail.toLowerCase()) && k.option === a.option && k.at.getTime() <= a.createdAt.getTime() + 60_000,
    );
    out.set(a.id, c ? { clicked: true, at: c.at, minutesBefore: Math.max(0, Math.round((a.createdAt.getTime() - c.at.getTime()) / 60_000)) } : { clicked: false, at: null, minutesBefore: null });
  }
  return out;
}

/* ------------------------------------------------------------------ buyer side */

/** True when this account already has everything the option sells (same rule as /api/checkout). */
export async function alreadyHas(user: Pick<SessionUser, "id" | "plan">, option: CheckoutOption): Promise<boolean> {
  if (isTeamOption(option)) return isTeamActive(user.id, user.plan);
  if (user.plan === "lifetime") return true;
  if (option === "lifetime") return false;
  return isPaid(await getEffectivePlan(user));
}

/** The variant key and price for a request: Lifetime keeps the deal price if they clicked through while it was on. */
export function resolveVariant(pb: PriceBook, option: CheckoutOption, click: Click | null): { key: VariantKey; cents: number } | null {
  if (option !== "lifetime") return { key: option, cents: priceCents(pb.settings, option) };
  const key = click && click.option === "lifetime" && LIFETIME_KEYS.includes(click.key) ? click.key : pb.lifetimeVariant;
  if (!key) return null;
  return { key, cents: priceCents(pb.settings, key) };
}

/** Counts one request for this user in the current hour. False when over the limit. */
export async function takeRateLimit(userId: string): Promise<boolean> {
  try {
    const env = await getEnv();
    const key = "activate:rl:" + userId + ":" + Math.floor(Date.now() / 3_600_000);
    const used = Number((await env.KV.get(key)) ?? 0);
    if (used >= RATE_LIMIT) return false;
    await env.KV.put(key, String(used + 1), { expirationTtl: 3600 + 60 });
    return true;
  } catch {
    return true; // KV down: let a paying customer through
  }
}

export type RequestInput = { option: string; payerEmail: string; reference?: string; contraName?: string };
export type RequestResult =
  | { ok: true; activation: Activation; deduped: boolean }
  | { ok: false; error: "unknown_option" | "bad_email" | "closed" | "already" | "rate_limited"; message: string };

/** Creates (or refreshes) the buyer's pending activation for one product. */
export async function requestActivation(user: SessionUser, input: RequestInput): Promise<RequestResult> {
  if (!isCheckoutOption(input.option)) return { ok: false, error: "unknown_option", message: "Choose the plan you bought." };
  const option = input.option;
  const payerEmail = (input.payerEmail || user.email).trim().toLowerCase().slice(0, 200);
  if (!EMAIL_RE.test(payerEmail)) return { ok: false, error: "bad_email", message: "Enter the email you paid with on Contra." };
  const reference = (input.reference ?? "").replace(/\s+/g, " ").trim().slice(0, 80) || null;
  const contraName = (input.contraName ?? "").replace(/\s+/g, " ").trim().slice(0, 120) || null;
  if (await alreadyHas(user, option)) return { ok: false, error: "already", message: "You already have " + planLabel(grantOf(option).plan) + "." };
  if (!(await takeRateLimit(user.id))) return { ok: false, error: "rate_limited", message: "Too many tries. Wait an hour, or write to support." };

  const pb = await getPriceBook();
  const v = resolveVariant(pb, option, await latestClick(user));
  if (!v) return { ok: false, error: "closed", message: "Lifetime is closed. Write to support if you paid for it." };

  const db = await getDb();
  const A = schema.activation;
  const [existing] = await db
    .select()
    .from(A)
    .where(and(eq(A.userId, user.id), eq(A.variantKey, v.key), eq(A.status, "pending")))
    .limit(1);
  if (existing) {
    // Same product asked twice: keep one request, with the latest email and receipt number.
    const [row] = await db
      .update(A)
      .set({ payerEmail, reference: reference ?? existing.reference, contraName: contraName ?? existing.contraName })
      .where(eq(A.id, existing.id))
      .returning();
    return { ok: true, activation: (await afterRequest(row ?? existing)) ?? row ?? existing, deduped: true };
  }
  const row: Activation = {
    id: "act_" + crypto.randomUUID(),
    userId: user.id,
    accountEmail: user.email.toLowerCase(),
    payerEmail,
    option,
    variantKey: v.key,
    amountCents: v.cents,
    provider: PROVIDER,
    reference,
    status: "pending",
    decidedBy: null,
    decidedAt: null,
    note: null,
    contraName,
    createdAt: new Date(),
  };
  try {
    await db.insert(A).values(row);
  } catch {
    // Two submits at once: the partial unique index kept one pending row; return it.
    const [again] = await db
      .select()
      .from(A)
      .where(and(eq(A.userId, user.id), eq(A.variantKey, v.key), eq(A.status, "pending")))
      .limit(1);
    if (again) return { ok: true, activation: again, deduped: true };
    throw new Error("activation insert failed");
  }
  await audit(user.email, "activation.request", row.id, { option, variantKey: v.key, amountCents: v.cents, payerEmail, reference, contraName });
  // Already paid? The Contra sync approves it right here (and sends the "is active" email instead).
  const synced = await afterRequest(row);
  if (synced && synced.status !== "pending") return { ok: true, activation: synced, deduped: false };
  await mailBuyer(row.accountEmail, `We got your Ingot UI ${optionName(option)} request`, [
    "Hi,",
    "",
    `Thanks for buying ${optionName(option)} on Contra. We are matching your payment (paid as ${payerEmail}) and will switch your plan on, usually within an hour.`,
    "",
    "You get another email the moment it is active. You can also watch the status here: https://ingotui.com/activate",
  ]);
  return { ok: true, activation: row, deduped: false };
}

/** Runs the Contra sync (when connected, at most ~8 s) and returns the fresh row. Never throws. */
async function afterRequest(a: Activation): Promise<Activation | null> {
  try {
    const { syncForRequest } = await import("./contra/sync");
    await syncForRequest();
    const db = await getDb();
    const [row] = await db.select().from(schema.activation).where(eq(schema.activation.id, a.id)).limit(1);
    return row ?? null;
  } catch {
    return null;
  }
}

/** The buyer's newest activation, or null. */
export async function latestForUser(userId: string): Promise<Activation | null> {
  const db = await getDb();
  const [row] = await db.select().from(schema.activation).where(eq(schema.activation.userId, userId)).orderBy(desc(schema.activation.createdAt)).limit(1);
  return row ?? null;
}

/** What the buyer's status card and GET /api/activation/status show. */
export function publicView(a: Activation) {
  return {
    id: a.id,
    status: a.status as ActivationStatus,
    option: a.option,
    product: productName(a.variantKey),
    plan: grantOf(a.option).plan,
    payerEmail: a.payerEmail,
    reference: a.reference,
    contraName: a.contraName,
    reason: a.status === "rejected" ? a.note : null,
    createdAt: a.createdAt.toISOString(),
    decidedAt: a.decidedAt?.toISOString() ?? null,
  };
}
export type PublicActivation = ReturnType<typeof publicView>;

/* ------------------------------------------------------------------ staff side */

export type DecideResult = { ok: true; changed: boolean; activation: Activation; planAfter?: PlanId } | { ok: false; message: string };

/**
 * Approves one activation and grants its plan. Idempotent: only the call that moves the row from pending
 * to approved writes anything; a second tap (or a second matcher run) returns changed: false.
 * `actor` is a staff email, or a system name such as "contra-email" for the phase-2 matcher.
 */
export async function approveActivation(id: string, actor: string, now = new Date()): Promise<DecideResult> {
  const db = await getDb();
  const A = schema.activation;
  const [cur] = await db.select().from(A).where(eq(A.id, id)).limit(1);
  if (!cur) return { ok: false, message: "That request no longer exists." };
  if (cur.status !== "pending") return { ok: true, changed: false, activation: cur };

  const [u] = await db.select({ id: schema.user.id, email: schema.user.email, plan: schema.user.plan }).from(schema.user).where(eq(schema.user.id, cur.userId)).limit(1);
  if (!u) return { ok: false, message: "The account for this request was deleted." };

  const g = grantOf(cur.option);
  const raw = JSON.stringify({ source: PROVIDER, activationId: cur.id, approvedBy: actor, attributes: { order_id: cur.id, total_usd: cur.amountCents, reference: cur.reference, payer_email: cur.payerEmail } });
  const note = `Contra${cur.reference ? " " + cur.reference : ""}, paid as ${cur.payerEmail}. Approved by ${actor}.`;

  // One atomic batch: claim the row (only while still pending), then the purchase and subscription rows.
  // The rows use the activation id as their provider id, so a repeat can never write them twice.
  const [claimed] = await db.batch([
    db
      .update(A)
      .set({ status: "approved", decidedBy: actor, decidedAt: now })
      .where(and(eq(A.id, id), eq(A.status, "pending")))
      .returning({ id: A.id }),
    db
      .insert(schema.purchase)
      .values({
        id: "contra_" + cur.id,
        provider: PROVIDER,
        providerOrderId: cur.id,
        userId: u.id,
        email: cur.accountEmail,
        plan: g.plan,
        variant: cur.variantKey,
        amountCents: cur.amountCents,
        currency: "USD",
        status: "paid",
        note,
        raw,
        createdAt: now,
        updatedAt: now,
      })
      .onConflictDoNothing(),
    ...(g.interval
      ? [
          db
            .insert(schema.subscription)
            .values({
              id: "contra_" + cur.id,
              provider: PROVIDER,
              providerSubId: cur.id,
              userId: u.id,
              email: cur.accountEmail,
              plan: g.plan,
              interval: g.interval,
              status: "active",
              renewsAt: addPeriod(now, g.interval),
              endsAt: null,
              portalUrl: null,
              raw,
              createdAt: now,
              updatedAt: now,
            })
            .onConflictDoNothing(),
        ]
      : []),
  ]);
  if (!claimed.length) {
    const [after] = await db.select().from(A).where(eq(A.id, id)).limit(1);
    return { ok: true, changed: false, activation: after ?? cur };
  }

  if (g.plan === "team") await ensureTeam({ id: u.id, email: u.email, name: "", plan: "team", role: "user" });
  const planAfter = await syncPlan(u.id, now);
  await audit(actor, "activation.approve", cur.id, { userId: u.id, option: cur.option, variantKey: cur.variantKey, amountCents: cur.amountCents, payerEmail: cur.payerEmail, reference: cur.reference, planBefore: u.plan, planAfter });

  const name = productName(cur.variantKey);
  await mailBuyer(cur.accountEmail, `Your Ingot UI ${planLabel(g.plan)} is active`, [
    "Hi,",
    "",
    `Thanks for buying ${name}. We matched your Contra payment and your plan is now active on ${cur.accountEmail}.`,
    ...(g.plan === "team" ? ["", "Invite up to 4 teammates by link from your account: https://ingotui.com/account"] : []),
    "",
    "Browse the library: https://ingotui.com/",
    "Your account: https://ingotui.com/account",
  ]);
  const [after] = await db.select().from(A).where(eq(A.id, id)).limit(1);
  return { ok: true, changed: true, activation: after ?? cur, planAfter };
}

/** Rejects a pending activation. The reason (optional) is shown to the buyer. */
export async function rejectActivation(id: string, actor: string, reason: string, now = new Date()): Promise<DecideResult> {
  const db = await getDb();
  const A = schema.activation;
  const note = reason.replace(/\s+/g, " ").trim().slice(0, 500) || null;
  const [row] = await db
    .update(A)
    .set({ status: "rejected", decidedBy: actor, decidedAt: now, note })
    .where(and(eq(A.id, id), eq(A.status, "pending")))
    .returning();
  if (!row) {
    const [cur] = await db.select().from(A).where(eq(A.id, id)).limit(1);
    return cur ? { ok: true, changed: false, activation: cur } : { ok: false, message: "That request no longer exists." };
  }
  await audit(actor, "activation.reject", id, { userId: row.userId, option: row.option, payerEmail: row.payerEmail, note });
  await mailBuyer(row.accountEmail, "About your Ingot UI activation request", [
    "Hi,",
    "",
    `We could not match a Contra payment for your ${productName(row.variantKey)} request (paid as ${row.payerEmail}).`,
    ...(note ? ["", `Note from us: ${note}`] : []),
    "",
    "If you did pay, reply to this email with your Contra receipt and we will sort it out. You can also send a new request with the right email: https://ingotui.com/activate",
  ]);
  return { ok: true, changed: true, activation: row };
}

/**
 * Phase-2 matcher: the oldest pending request paid with this email for this product (variant key, e.g.
 * "lifetimeDeal" or "proMonthly"; a Lifetime sale matches either Lifetime key). Null when none match.
 */
export async function findPendingByPayer(email: string, variantKey: string): Promise<Activation | null> {
  const db = await getDb();
  const A = schema.activation;
  const keys = LIFETIME_KEYS.includes(variantKey as VariantKey) ? LIFETIME_KEYS : [variantKey];
  const [row] = await db
    .select()
    .from(A)
    .where(and(eq(A.status, "pending"), sql`lower(${A.payerEmail}) = ${email.trim().toLowerCase()}`, inArray(A.variantKey, keys)))
    .orderBy(A.createdAt)
    .limit(1);
  return row ?? null;
}

export async function pendingCount(): Promise<number> {
  try {
    const db = await getDb();
    const [r] = await db.select({ n: sql<number>`count(*)` }).from(schema.activation).where(eq(schema.activation.status, "pending"));
    return Number(r?.n ?? 0);
  } catch {
    return 0; // table missing until migration 0010 is applied
  }
}

/* ------------------------------------------------------------------ renewals */

export type Sub = typeof schema.subscription.$inferSelect;

/** Contra subscriptions that renew within `days` days or are already past their renewal date. */
export async function renewalsDue(days = 3, now = new Date()): Promise<Sub[]> {
  const db = await getDb();
  const S = schema.subscription;
  return db
    .select()
    .from(S)
    .where(and(eq(S.provider, PROVIDER), eq(S.status, "active"), lte(S.renewsAt, new Date(now.getTime() + days * DAY))))
    .orderBy(S.renewsAt)
    .limit(200);
}

/** The owner saw the renewal on Contra: move renewsAt one period on. */
export async function markRenewed(subId: string, actor: string, now = new Date()): Promise<{ ok: boolean; message: string }> {
  const db = await getDb();
  const S = schema.subscription;
  const [s] = await db.select().from(S).where(and(eq(S.id, subId), eq(S.provider, PROVIDER))).limit(1);
  if (!s) return { ok: false, message: "That subscription no longer exists." };
  if (s.status !== "active") return { ok: false, message: `This subscription is ${s.status}.` };
  const renewsAt = addPeriod(s.renewsAt ?? now, s.interval);
  // Guarded on the old date, so a double tap moves it one period, not two.
  const [row] = await db
    .update(S)
    .set({ renewsAt, updatedAt: now })
    .where(and(eq(S.id, subId), s.renewsAt ? eq(S.renewsAt, s.renewsAt) : sql`${S.renewsAt} is null`))
    .returning({ id: S.id });
  if (!row) return { ok: true, message: "Already marked renewed." };
  await audit(actor, "subscription.renewed", s.userId ?? s.email, { subId, provider: PROVIDER, interval: s.interval, renewsAtBefore: s.renewsAt, renewsAt });
  return { ok: true, message: `Renewed ${s.email} until ${renewsAt.toISOString().slice(0, 10)}.` };
}

/** No renewal on Contra: end the subscription and recompute the plan. */
export async function endSubscription(subId: string, actor: string, now = new Date()): Promise<{ ok: boolean; message: string }> {
  const db = await getDb();
  const S = schema.subscription;
  const [s] = await db.select().from(S).where(and(eq(S.id, subId), eq(S.provider, PROVIDER))).limit(1);
  if (!s) return { ok: false, message: "That subscription no longer exists." };
  if (s.status === "expired") return { ok: true, message: "Already ended." };
  await db.update(S).set({ status: "expired", endsAt: now, updatedAt: now }).where(eq(S.id, subId));
  const planAfter = s.userId ? await syncPlan(s.userId, now) : null;
  await audit(actor, "subscription.end", s.userId ?? s.email, { subId, provider: PROVIDER, statusBefore: s.status, planAfter });
  return { ok: true, message: `Ended ${s.email}. Their plan is now ${planAfter ?? "unchanged (no linked account)"}.` };
}
