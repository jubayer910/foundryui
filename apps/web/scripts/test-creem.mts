/**
 * Creem webhook tests against the LOCAL D1 (never remote), with signed fake payloads and a dummy secret.
 * No network, no real email: MAIL_DRY_RUN=1 makes lib/mail.ts record mails in memory instead of sending.
 * Never calls the Creem API (the checkout body builder and provider pick are unit-tested instead).
 *
 *   cd apps/web && npx wrangler d1 migrations apply foundry-ui-db --local
 *   npx tsx --import ./scripts/server-only-stub.mjs scripts/test-creem.mts
 *
 * Covers: signed-in Lifetime; signed-out buyer with a proven account; signed-out buyer with no account (claim
 * email; a new unverified sign-up does not take it, the claim link does; a verified sign-up attaches by itself);
 * Pro yearly then renewal (subscription.paid) then canceled then expired; refund revokes; Team; dispute alert;
 * duplicate evt id ignored; a second event for the same order mails nothing; bad signature 401; test-mode event
 * ignored without CREEM_ALLOW_TEST and processed with it; checkout body + provider order.
 */
process.env.MAIL_DRY_RUN = "1";
import { getPlatformProxy } from "wrangler";

const proxy = await getPlatformProxy<CloudflareEnv>({ configPath: "wrangler.jsonc", persist: true });
const env = { ...proxy.env, MAIL_DRY_RUN: "1", BETTER_AUTH_SECRET: proxy.env.BETTER_AUTH_SECRET || "local-test-only-not-a-secret" } as CloudflareEnv;
(globalThis as Record<symbol, unknown>)[Symbol.for("__cloudflare-context__")] = { env, ctx: proxy.ctx, cf: proxy.cf };

const { getDb, schema } = await import("../lib/db/index.ts");
const { DEFAULT_SETTINGS } = await import("../lib/settings.ts");
const { receiveWebhook, attachForEmail, checkoutBody, pickCheckout } = await import("../lib/creem.ts");
const { claimAny, checkAnyClaim } = await import("../lib/claim.ts");
const { hmacHex } = await import("../lib/billing.ts");
const { claimToken } = await import("../lib/contra/claim-token.ts");
const { dryRunLog } = await import("../lib/mail.ts");
const { eq, like, or, and } = await import("drizzle-orm");

let failed = 0;
const check = (name: string, ok: boolean, extra = "") => {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${extra ? "  (" + extra + ")" : ""}`);
};

const db = await getDb();
const T = "@creem-test.invalid";
const SECRET = "whsec_dummy_for_tests_only";
// Clean previous runs (test rows only).
await db.delete(schema.purchase).where(like(schema.purchase.email, "%" + T));
await db.delete(schema.subscription).where(like(schema.subscription.email, "%" + T));
await db.delete(schema.creemEvent).where(or(like(schema.creemEvent.id, "evt_t_%"), like(schema.creemEvent.id, "mail:%_t_%")));
await db.delete(schema.user).where(like(schema.user.email, "%" + T));

const now = new Date();
const OLD = new Date("2026-01-01T00:00:00Z");
const DAY = 86_400_000;
const mkUser = async (id: string, o: { plan?: string; createdAt?: Date; verified?: boolean } = {}) => {
  await db.insert(schema.user).values({ id: "u_t_" + id, name: id, email: id + T, emailVerified: !!o.verified, plan: o.plan ?? "free", role: "user", createdAt: o.createdAt ?? OLD, updatedAt: now });
  return "u_t_" + id;
};
const planOf = async (id: string) => (await db.select({ p: schema.user.plan }).from(schema.user).where(eq(schema.user.id, "u_t_" + id)).limit(1))[0]?.p;
const purchase = async (order: string) => (await db.select().from(schema.purchase).where(and(eq(schema.purchase.provider, "creem"), eq(schema.purchase.providerOrderId, order))).limit(1))[0];
const sub = async (id: string) => (await db.select().from(schema.subscription).where(and(eq(schema.subscription.provider, "creem"), eq(schema.subscription.providerSubId, id))).limit(1))[0];
const mailsTo = (who: string) => dryRunLog.filter((m) => m.to.toLowerCase() === (who + T).toLowerCase());

const settings = structuredClone(DEFAULT_SETTINGS);
settings.creem.products = { proMonthly: "", proYearly: "prod_tPro", lifetimeDeal: "prod_tDeal", lifetimeAfter: "prod_tLife", teamMonthly: "", teamYearly: "prod_tTeam" };
const KEY_OF: Record<string, string> = { prod_tPro: "proYearly", prod_tDeal: "lifetimeDeal", prod_tLife: "lifetimeAfter", prod_tTeam: "teamYearly" };

let seq = 0;
const evt = (eventType: string, object: Record<string, unknown>, id?: string) => ({ id: id ?? "evt_t_" + ++seq, eventType, created_at: now.getTime() + ++seq * 1000, object });
const checkout = (o: { order: string; product: string; email: string; userId?: string; sub?: { id: string; end: Date }; amount: number; mode?: string; created?: Date }) => {
  const mode = o.mode ?? "prod";
  return {
    id: "ch_" + o.order,
    object: "checkout",
    request_id: "ck_" + o.order,
    status: "completed",
    mode,
    order: { object: "order", id: o.order, amount: o.amount, amount_paid: o.amount, tax_amount: 0, currency: "USD", status: "paid", type: o.sub ? "recurring" : "onetime", transaction: "tran_" + o.order, created_at: (o.created ?? new Date(now.getTime() - 60_000)).toISOString(), mode },
    product: { id: o.product, name: "Ingot UI", price: o.amount, currency: "USD", billing_type: o.sub ? "recurring" : "onetime" },
    customer: { id: "cust_" + o.order, email: o.email, name: "Buyer", country: "US" },
    ...(o.sub ? { subscription: { id: o.sub.id, status: "active", current_period_start_date: now.toISOString(), current_period_end_date: o.sub.end.toISOString() } } : {}),
    metadata: { variantKey: KEY_OF[o.product], option: KEY_OF[o.product].startsWith("lifetime") ? "lifetime" : KEY_OF[o.product], ...(o.userId ? { userId: o.userId } : {}) },
  };
};
const subObj = (o: { id: string; product: string; email: string; end: Date; status?: string; tx?: { id: string; order: string; amount: number }; canceled?: boolean }) => ({
  id: o.id,
  object: "subscription",
  status: o.status ?? "active",
  product: { id: o.product },
  customer: { id: "cust_x", email: o.email },
  current_period_end_date: o.end.toISOString(),
  canceled_at: o.canceled ? now.toISOString() : null,
  metadata: {},
  mode: "prod",
  ...(o.tx ? { last_transaction: { id: o.tx.id, object: "transaction", amount: o.tx.amount, amount_paid: o.tx.amount, currency: "USD", status: "paid", order: o.tx.order, subscription: o.id, created_at: now.toISOString(), mode: "prod" } } : {}),
});

const send = async (ev: unknown, opt: { sig?: string; allowTest?: boolean } = {}) => {
  const body = JSON.stringify(ev);
  return receiveWebhook({
    env: { CREEM_WEBHOOK_SECRET: SECRET, CREEM_ALLOW_TEST: opt.allowTest ? "1" : undefined },
    db,
    settings: async () => settings,
    body,
    signature: opt.sig ?? (await hmacHex(body, SECRET)),
  });
};

/* ---- request body builder + provider order (no network) ---- */
const signedIn = checkoutBody({ productId: "prod_tLife", variantKey: "lifetimeAfter", option: "lifetime", successUrl: "https://ingotui.com/account?welcome=1", email: "a" + T, userId: "u1" });
check(
  "checkout body (signed in): product, customer email, metadata userId, unique request_id",
  signedIn.product_id === "prod_tLife" && signedIn.customer?.email === "a" + T && signedIn.metadata.userId === "u1" && signedIn.metadata.variantKey === "lifetimeAfter" && /^ck_[0-9a-f-]{36}$/.test(signedIn.request_id) && signedIn.units === 1,
);
const guest = checkoutBody({ productId: "prod_tPro", variantKey: "proYearly", option: "proYearly", successUrl: "https://ingotui.com/thanks?paid=proYearly" });
check("checkout body (signed out): no customer, metadata without userId", !("customer" in guest) && !("userId" in guest.metadata) && guest.metadata.option === "proYearly" && guest.request_id !== signedIn.request_id);
const s2 = structuredClone(settings);
s2.externalCheckout.proYearly = "https://contra.com/payment-link/x";
const k = { CREEM_API_KEY: "creem_test_dummy" } as CloudflareEnv;
const p1 = pickCheckout(k, s2, "proYearly");
check("pick: Creem when key + product (test key → test API)", p1.kind === "creem" && p1.keys.test && p1.keys.base === "https://test-api.creem.io");
check("pick: live key → live API", (() => { const p = pickCheckout({ CREEM_API_KEY: "creem_live" } as CloudflareEnv, s2, "proYearly"); return p.kind === "creem" && p.keys.base === "https://api.creem.io"; })());
s2.creem.preferContra = true;
check("pick: Prefer Contra → the Contra link", pickCheckout(k, s2, "proYearly").kind === "external");
s2.creem.preferContra = false;
check("pick: no Creem key → Contra link", pickCheckout({} as CloudflareEnv, s2, "proYearly").kind === "external");
check("pick: nothing set → waitlist", pickCheckout({} as CloudflareEnv, s2, "teamMonthly").kind === "waitlist");

/* ---- signature, test mode ---- */
const bad = await send(evt("checkout.completed", checkout({ order: "ord_t_bad", product: "prod_tLife", email: "bad" + T, amount: 9900 })), { sig: "00".repeat(32) });
check("bad signature → 401, nothing written", bad.status === 401 && !(await purchase("ord_t_bad")));
const missing = await send(evt("checkout.completed", checkout({ order: "ord_t_bad", product: "prod_tLife", email: "bad" + T, amount: 9900 })), { sig: "" });
check("missing signature → 401", missing.status === 401);

await mkUser("tina");
const testEv = evt("checkout.completed", checkout({ order: "ord_t_tina", product: "prod_tLife", email: "tina" + T, amount: 9900, mode: "test" }));
const ign = await send(testEv);
check("test-mode event without CREEM_ALLOW_TEST → logged only", ign.status === 200 && ign.json.ignored === "test_mode" && !(await purchase("ord_t_tina")) && (await planOf("tina")) === "free");
const allowed = await send(testEv, { allowTest: true });
check("same test-mode event with CREEM_ALLOW_TEST=1 → processed", allowed.status === 200 && (await planOf("tina")) === "lifetime");

/* ---- signed-in Lifetime ---- */
const sam = await mkUser("sam");
const samEv = evt("checkout.completed", checkout({ order: "ord_t_sam", product: "prod_tLife", email: "sam-card" + T, userId: sam, amount: 9900 }));
const r1 = await send(samEv);
const sp = await purchase("ord_t_sam");
check("signed-in Lifetime (metadata.userId, other payer email) → lifetime", r1.status === 200 && (await planOf("sam")) === "lifetime" && sp?.userId === sam && sp.amountCents === 9900 && sp.currency === "USD" && sp.status === "paid", JSON.stringify(r1.json));
check("buyer confirmation mailed once, to the account email", mailsTo("sam").length === 1 && /Lifetime is active/.test(mailsTo("sam")[0].subject));
const dup = await send(samEv);
check("duplicate evt id → 200 duplicate, nothing redone", dup.status === 200 && dup.json.duplicate === true && mailsTo("sam").length === 1);
const again = await send(evt("checkout.completed", checkout({ order: "ord_t_sam", product: "prod_tLife", email: "sam-card" + T, userId: sam, amount: 9900 })));
check("another event id for the same order → no second email", again.status === 200 && mailsTo("sam").length === 1);

/* ---- signed-out buyer, proven account ---- */
await mkUser("olga");
await send(evt("checkout.completed", checkout({ order: "ord_t_olga", product: "prod_tDeal", email: "OLGA" + T, amount: 4900 })));
check("signed-out buyer, account older than the sale → lifetime now", (await planOf("olga")) === "lifetime" && (await purchase("ord_t_olga"))?.variant === "lifetimeDeal" && mailsTo("olga").length === 1);

/* ---- signed-out buyer, no account ---- */
await send(evt("checkout.completed", checkout({ order: "ord_t_nina", product: "prod_tLife", email: "nina" + T, amount: 9900 })));
const np = await purchase("ord_t_nina");
check("no account → sale kept on the email, claim email sent once", !!np && np.userId === null && np.email === "nina" + T && mailsTo("nina").length === 1 && /purchase is confirmed/.test(mailsTo("nina")[0].subject));
await mkUser("nina", { createdAt: new Date() }); // signed up after the sale, email not verified
const att = await attachForEmail("nina" + T);
check("new unverified sign-up with that email → not attached by email alone", att.attached === 0 && (await planOf("nina")) === "free");
const tok = await claimToken("creem_ord_t_nina");
const view = await checkAnyClaim(tok);
check("claim link resolves the Creem sale", view.ok && view.provider === "creem" && view.payerEmail === "nina" + T && view.variantKey === "lifetimeAfter");
const wrong = await claimAny(tok, { id: sam, email: "sam" + T });
check("claim link opened by another account → wrong_account", !wrong.ok && wrong.reason === "wrong_account" && (await planOf("sam")) === "lifetime");
const claimed = await claimAny(tok, { id: "u_t_nina", email: "nina" + T });
check("claim link + sign-up with the paid email → lifetime, active email", claimed.ok && !claimed.already && (await planOf("nina")) === "lifetime" && mailsTo("nina").length === 2);
const reopen = await claimAny(tok, { id: "u_t_nina", email: "nina" + T });
check("opening the claim link again → already, no email", reopen.ok && reopen.already && mailsTo("nina").length === 2);

await send(evt("checkout.completed", checkout({ order: "ord_t_vera", product: "prod_tLife", email: "vera" + T, amount: 9900 })));
await mkUser("vera", { createdAt: new Date(), verified: true }); // e.g. signed up with Google
const attV = await attachForEmail("vera" + T);
check("verified sign-up with the paid email → attached automatically (sign-up hook path)", attV.attached === 1 && (await planOf("vera")) === "lifetime" && mailsTo("vera").length === 2);
check("attach again → nothing new", (await attachForEmail("vera" + T)).attached === 0 && mailsTo("vera").length === 2);

/* ---- Pro yearly lifecycle ---- */
await mkUser("paul");
const end1 = new Date(now.getTime() + 365 * DAY);
const end2 = new Date(now.getTime() + 730 * DAY);
await send(evt("checkout.completed", checkout({ order: "ord_t_paul", product: "prod_tPro", email: "paul" + T, amount: 3900, sub: { id: "sub_t_paul", end: end1 } })));
const ps = await sub("sub_t_paul");
check("Pro yearly checkout → pro, subscription row renewsAt = period end", (await planOf("paul")) === "pro" && ps?.status === "active" && ps.interval === "yearly" && Math.abs((ps.renewsAt?.getTime() ?? 0) - end1.getTime()) < 1000);
await send(evt("subscription.active", subObj({ id: "sub_t_paul", product: "prod_tPro", email: "paul" + T, end: end1 })));
await send(evt("subscription.paid", subObj({ id: "sub_t_paul", product: "prod_tPro", email: "paul" + T, end: end1, tx: { id: "tran_ord_t_paul", order: "ord_t_paul", amount: 3900 } })));
const paulRows = () => db.select().from(schema.purchase).where(eq(schema.purchase.email, "paul" + T));
check("first subscription.paid → same order, no second purchase row", (await paulRows()).length === 1);
await send(evt("subscription.paid", subObj({ id: "sub_t_paul", product: "prod_tPro", email: "paul" + T, end: end2, tx: { id: "tran_t_paul2", order: "ord_t_paul2", amount: 3900 } })));
const ps2 = await sub("sub_t_paul");
check("renewal → renewsAt extended + renewal payment recorded", Math.abs((ps2?.renewsAt?.getTime() ?? 0) - end2.getTime()) < 1000 && (await paulRows()).length === 2 && (await purchase("ord_t_paul2"))?.userId === "u_t_paul" && (await planOf("paul")) === "pro");
await send(evt("subscription.canceled", subObj({ id: "sub_t_paul", product: "prod_tPro", email: "paul" + T, end: end2, status: "canceled", canceled: true })));
const ps3 = await sub("sub_t_paul");
check("canceled → keeps Pro until the period end", ps3?.status === "cancelled" && Math.abs((ps3.endsAt?.getTime() ?? 0) - end2.getTime()) < 1000 && (await planOf("paul")) === "pro");
const lateEv = evt("subscription.paid", subObj({ id: "sub_t_paul", product: "prod_tPro", email: "paul" + T, end: end2 }));
lateEv.created_at = now.getTime() - DAY; // an older event retried late
await send(lateEv);
check("late retry of an older event → status untouched", (await sub("sub_t_paul"))?.status === "cancelled");
// Creem's expired payload still says status "active": the event type decides.
await send(evt("subscription.expired", subObj({ id: "sub_t_paul", product: "prod_tPro", email: "paul" + T, end: end2, status: "active" })));
check("expired → downgraded to free", (await sub("sub_t_paul"))?.status === "expired" && (await planOf("paul")) === "free");
check("Pro buyer got one confirmation email in all of that", mailsTo("paul").length === 1);

/* ---- Team ---- */
await mkUser("tom");
await send(evt("checkout.completed", checkout({ order: "ord_t_tom", product: "prod_tTeam", email: "tom" + T, amount: 12900, sub: { id: "sub_t_tom", end: end1 } })));
check("Team yearly → team plan", (await planOf("tom")) === "team");

/* ---- refund ---- */
await mkUser("rita");
await send(evt("checkout.completed", checkout({ order: "ord_t_rita", product: "prod_tLife", email: "rita" + T, amount: 9900 })));
const ritaBefore = await planOf("rita");
const ref = await send(evt("refund.created", { id: "ref_t_rita", object: "refund", status: "succeeded", refund_amount: 9900, refund_currency: "USD", reason: "requested_by_customer", transaction: { id: "tran_ord_t_rita", order: "ord_t_rita", status: "refunded" }, order: { id: "ord_t_rita" }, customer: { email: "rita" + T }, mode: "prod" }));
check("refund.created → purchase refunded, plan revoked", ritaBefore === "lifetime" && ref.status === 200 && (await purchase("ord_t_rita"))?.status === "refunded" && (await planOf("rita")) === "free", JSON.stringify(ref.json));
await send(evt("checkout.completed", checkout({ order: "ord_t_rita", product: "prod_tLife", email: "rita" + T, amount: 9900 })));
check("a late checkout.completed after the refund does not turn it back on", (await purchase("ord_t_rita"))?.status === "refunded" && (await planOf("rita")) === "free");

/* ---- dispute ---- */
const support = settings.support.email;
const before = dryRunLog.filter((m) => m.to === support).length;
const dispute = { id: "disp_t_1", object: "dispute", amount: 4900, currency: "USD", transaction: { id: "tran_ord_t_olga", order: "ord_t_olga", status: "chargeback" }, order: { id: "ord_t_olga" }, customer: { email: "olga" + T }, mode: "prod" };
const d1 = await send(evt("dispute.created", dispute));
await send(evt("dispute.created", dispute));
const auditRows = await db.select().from(schema.auditLog).where(and(eq(schema.auditLog.actor, "creem"), eq(schema.auditLog.action, "webhook:dispute.created")));
check("dispute → audit row + one support alert, plan unchanged", d1.status === 200 && auditRows.length >= 1 && dryRunLog.filter((m) => m.to === support).length === before + 1 && (await planOf("olga")) === "lifetime");

const ledger = await db.select().from(schema.creemEvent).where(like(schema.creemEvent.id, "evt_t_%"));
check("every processed event is in the ledger", ledger.length >= 15, String(ledger.length));

await proxy.dispose();
console.log(failed ? `\n${failed} FAILED` : "\nAll passed");
process.exit(failed ? 1 : 0);
