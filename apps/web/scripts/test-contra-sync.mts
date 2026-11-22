/**
 * Contra sync matching tests against the LOCAL D1 (never remote), with a fake Contra tool caller.
 * No network, no real email: MAIL_DRY_RUN=1 makes lib/mail.ts record mails in memory instead of sending.
 *
 *   cd apps/web && npx wrangler d1 migrations apply foundry-ui-db --local
 *   npx tsx --import ./scripts/server-only-stub.mjs scripts/test-contra-sync.mts
 *
 * Covers: email match to a pending request (proven account only), email match to an account (older than the
 * sale, verified, already has the plan, newer + unverified = squatter), hand-approved history stays silent,
 * name match (request after the sale only), price mismatch, old link at its old price, the claim link (mailed
 * once, valid, wrong account, tampered, expired), duplicate sync, and no double email.
 */
process.env.MAIL_DRY_RUN = "1";
import { getPlatformProxy } from "wrangler";

const proxy = await getPlatformProxy<CloudflareEnv>({ configPath: "wrangler.jsonc", persist: true });
const env = { ...proxy.env, MAIL_DRY_RUN: "1" } as CloudflareEnv;
(globalThis as Record<symbol, unknown>)[Symbol.for("__cloudflare-context__")] = { env, ctx: proxy.ctx, cf: proxy.cf };

const { getDb, schema } = await import("../lib/db/index.ts");
const { DEFAULT_SETTINGS } = await import("../lib/settings.ts");
const { syncContraSales, matchForEmail, manualMatch, claimSale } = await import("../lib/contra/sync.ts");
const { claimToken } = await import("../lib/contra/claim-token.ts");
const { dryRunLog } = await import("../lib/mail.ts");
const { eq, like } = await import("drizzle-orm");

let failed = 0;
const check = (name: string, ok: boolean, extra = "") => {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${extra ? "  (" + extra + ")" : ""}`);
};

const db = await getDb();
const T = "@contra-test.invalid";
// Clean previous runs (test rows only).
await db.delete(schema.contraSale).where(like(schema.contraSale.id, "test_%"));
await db.delete(schema.activation).where(like(schema.activation.accountEmail, "%" + T));
await db.delete(schema.purchase).where(like(schema.purchase.email, "%" + T));
await db.delete(schema.subscription).where(like(schema.subscription.email, "%" + T));
await db.delete(schema.user).where(like(schema.user.email, "%" + T));

const now = new Date();
const today = now.toISOString().slice(0, 10);
const OLD = new Date("2026-01-01T00:00:00Z"); // account made long before the sales
const YESTERDAY = new Date(Date.parse(today + "T00:00:00Z") - 3_600_000);
const mkUser = async (id: string, o: { plan?: string; createdAt?: Date; verified?: boolean } = {}) => {
  await db.insert(schema.user).values({ id, name: id, email: id + T, emailVerified: !!o.verified, plan: o.plan ?? "free", role: "user", createdAt: o.createdAt ?? OLD, updatedAt: now });
  return id;
};
const mkAct = async (userId: string, over: Partial<typeof schema.activation.$inferInsert>) => {
  const row = { id: "act_test_" + userId, userId, accountEmail: userId + T, payerEmail: userId + T, option: "lifetime", variantKey: "lifetimeDeal", amountCents: 4900, provider: "contra", reference: null, status: "pending", decidedBy: null, decidedAt: null, note: null, contraName: null, createdAt: now, ...over };
  await db.insert(schema.activation).values(row);
  return row.id;
};

const settings = structuredClone(DEFAULT_SETTINGS);
settings.externalCheckout.lifetimeDeal = "https://contra.com/payment-link/OLDLIFE-test";
settings.externalCheckout.proYearly = "https://contra.com/payment-link/PRO-test";

// People (accounts are older than the sales unless noted).
await mkUser("alice");
await mkAct("alice", { payerEmail: "alice-pay" + T }); // a) pending request, other payer email, old account
await mkUser("mal", { createdAt: now }); // a) new account typing someone else's payer email
await mkAct("mal", { payerEmail: "victim" + T });
await mkUser("bob"); // b) old account, no request
await mkUser("sq", { createdAt: now }); // b) squatter: registered the buyer's address after the sale, unverified
await mkUser("ver", { createdAt: now, verified: true }); // b) new but verified (e.g. Google)
await mkUser("cara", { plan: "lifetime" }); // b) already has Lifetime: silent
await mkUser("fred", { plan: "lifetime" });
await mkAct("fred", { payerEmail: "fred-pay" + T, status: "approved", decidedBy: "owner" + T, decidedAt: now }); // approved by hand
await mkUser("dana");
await mkAct("dana", { option: "proYearly", variantKey: "proYearly", amountCents: 3900, payerEmail: "dana-x" + T, contraName: "Dana  Doe" }); // c) name, sent today
await mkUser("gus");
await mkAct("gus", { option: "proYearly", variantKey: "proYearly", amountCents: 3900, payerEmail: "gus-x" + T, contraName: "Gus Guess", createdAt: YESTERDAY }); // c) name, sent before the sale
await mkUser("eve");
await mkAct("eve", { payerEmail: "eve" + T }); // old link at its old $29 price
// d) hidden email, matched to the one account with the same name (signed up around the sale)
const mkNamed = async (id: string, name: string, createdAt: Date) => db.insert(schema.user).values({ id, name, email: id + T, emailVerified: false, plan: "free", role: "user", createdAt, updatedAt: now });
await mkNamed("hana", "Hana Hidden", now);
await mkNamed("twin1", "Twin Same", now);
await mkNamed("twin2", "Twin Same", now);
await mkNamed("olds", "Old Signup", OLD);

const tx = (id: string, amount: string, email: string | null, first = "", last = "", date = today) => ({
  id,
  amount,
  date,
  customer: { emailAddress: email, firstName: first, lastName: last, userProfileId: "p_" + id },
  invoice: { id: "inv_" + id, status: "PAID", totalAmount: amount },
});
const sales: Record<string, unknown[]> = {
  "NEWLIFE-test": [
    tx("test_alice", "USD:49.00", "alice-pay" + T),
    tx("test_victim", "USD:49.00", "victim" + T),
    tx("test_bob", "USD:49.00", "bob" + T),
    tx("test_sq", "USD:49.00", "sq" + T),
    tx("test_ver", "USD:49.00", "ver" + T),
    tx("test_cara", "USD:49.00", "cara" + T, "Cara", "C", "2026-11-01"),
    tx("test_fred", "USD:49.00", "fred-pay" + T, "Fred", "F", "2026-11-02"),
    tx("test_cheap", "USD:10.00", "bob2" + T),
    tx("test_newbie", "USD:49.00", "newbie" + T, "New", "Bie"),
    tx("test_old_nobody", "USD:49.00", "old-nobody" + T, "Old", "Nobody", "2026-10-01"),
    tx("test_hana", "USD:49.00", null, "hana", "HIDDEN"),
    tx("test_twin", "USD:49.00", null, "Twin", "Same"),
    tx("test_olds", "USD:49.00", null, "Old", "Signup"),
    { ...tx("test_unpaid", "USD:49.00", "bob" + T), invoice: { status: "PENDING" } },
  ],
  "OLDLIFE-test": [tx("test_eve", "USD:29.00", "eve" + T)],
  "PRO-test": [tx("test_dana", "USD:39.00", null, "dana", "DOE"), tx("test_gus", "USD:39.00", null, "Gus", "Guess"), tx("test_ghost", "USD:39.00", null, "Nobody", "Here")],
};
const calls: string[] = [];
const fake = async (name: string, args: Record<string, unknown>) => {
  calls.push(name);
  if (name === "list_products") return { products: [{ title: "Ingot UI Lifetime", slug: "ingot-ui-lifetime", offerings: [{ paymentLinkSlug: "NEWLIFE-test", price: "USD:49.00", billingInterval: "ONE_TIME" }] }] };
  if (name === "list_payment_links") return { paymentLinks: [{ slug: "OLDLIFE-test", title: "Ingot UI Lifetime", amount: "USD:29.00" }, { slug: "PRO-test", title: "Ingot UI Pro yearly", amount: "USD:39.00" }] };
  if (name === "list_payment_link_transactions") {
    const all = sales[String(args.slug)] ?? [];
    const size = Number(args.pageSize);
    const page = Number(args.pageIndex);
    return { transactions: all.slice(page * size, page * size + size), totalCount: all.length };
  }
  throw new Error("unexpected tool " + name);
};

const saleRow = async (id: string) => (await db.select().from(schema.contraSale).where(eq(schema.contraSale.id, id)).limit(1))[0];
const actRow = async (id: string) => (await db.select().from(schema.activation).where(eq(schema.activation.id, id)).limit(1))[0];
const planOf = async (id: string) => (await db.select({ plan: schema.user.plan }).from(schema.user).where(eq(schema.user.id, id)).limit(1))[0]?.plan;
const mailsTo = (who: string) => dryRunLog.filter((m) => m.to === who + T);
const active = (who: string) => mailsTo(who).filter((m) => /is active/.test(m.subject)).length;
const confirmed = (who: string) => mailsTo(who).filter((m) => /confirmed/.test(m.subject)).length;

const r1 = await syncContraSales({ callTool: fake, settings, now, skipLock: true });
check("sync ran", r1.ok, JSON.stringify(r1));
check("all three links synced (old + new Lifetime slug, Pro)", r1.links === 3, String(r1.links));
check("only PAID sales stored", !(await saleRow("test_unpaid")));

// a) pending requests
const sa = await saleRow("test_alice");
check("a) old account's request, other payer email → approved by contra-auto", sa?.status === "matched" && (await actRow("act_test_alice"))?.decidedBy === "contra-auto" && (await planOf("alice")) === "lifetime" && active("alice") === 1);
check("a) new account typing someone else's payer email → not approved", (await actRow("act_test_mal"))?.status === "pending" && (await planOf("mal")) === "free" && (await saleRow("test_victim"))?.status === "unmatched");
check("a) the real payer gets the claim link instead", confirmed("victim") === 1);

// b) accounts
check("b) account older than the sale → activated", (await saleRow("test_bob"))?.status === "matched" && (await planOf("bob")) === "lifetime" && active("bob") === 1);
check("b) squatter (new, unverified) → not activated", (await saleRow("test_sq"))?.status === "unmatched" && (await planOf("sq")) === "free" && active("sq") === 0);
check("b) squatter case: claim link mailed to the inbox", confirmed("sq") === 1);
check("b) new but verified email → activated", (await saleRow("test_ver"))?.status === "matched" && (await planOf("ver")) === "lifetime" && active("ver") === 1);
const sc = await saleRow("test_cara");
check("b) already has the plan → matched, no activation, no email", sc?.status === "matched" && !sc.activationId && mailsTo("cara").length === 0);
const sf = await saleRow("test_fred");
check("hand-approved history → linked, no email", sf?.status === "matched" && sf.activationId === "act_test_fred" && dryRunLog.every((m) => !m.to.startsWith("fred")));

// c) names
const sd = await saleRow("test_dana");
check("c) name match, request sent on the sale's day → approved", sd?.status === "matched" && sd.matchedBy === "name" && (await planOf("dana")) === "pro" && active("dana") === 1);
check("c) name match, request sent before the sale → left for staff", (await saleRow("test_gus"))?.status === "unmatched" && (await actRow("act_test_gus"))?.status === "pending");
check("c) unknown name stays unmatched", (await saleRow("test_ghost"))?.status === "unmatched");
check("d) hidden email, one new account with the same name → activated", (await saleRow("test_hana"))?.status === "matched" && (await planOf("hana")) === "lifetime" && active("hana") === 1);
check("d) two accounts share the name → left for staff", (await saleRow("test_twin"))?.status === "unmatched" && (await planOf("twin1")) === "free" && (await planOf("twin2")) === "free");
check("d) same name but account made months before → left for staff", (await saleRow("test_olds"))?.status === "unmatched" && (await planOf("olds")) === "free");

// prices
const sx = await saleRow("test_cheap");
check("price mismatch stays unmatched with a note, no mail", sx?.status === "unmatched" && !!sx.note?.startsWith("Price mismatch") && dryRunLog.every((m) => !m.to.startsWith("bob2")));
check("old link at its old price ($29) is valid", (await saleRow("test_eve"))?.status === "matched" && (await planOf("eve")) === "lifetime");

// no account yet
check("no account yet → claim link mailed once", (await saleRow("test_newbie"))?.status === "unmatched" && !!(await saleRow("test_newbie"))?.invitedAt && confirmed("newbie") === 1);
check("old sale with no account → no mail (silent history)", !(await saleRow("test_old_nobody"))?.invitedAt && mailsTo("old-nobody").length === 0);

const before = dryRunLog.length;
const r2 = await syncContraSales({ callTool: fake, settings, now, skipLock: true });
check("second sync adds and matches nothing", r2.added === 0 && r2.matched === 0, JSON.stringify(r2));
check("second sync sends no email", dryRunLog.length === before, `${dryRunLog.length - before} new`);

// sign-up hook: unverified new accounts do not auto-activate
await mkUser("newbie", { createdAt: now });
check("unverified sign-up after the sale → hook does not activate", (await matchForEmail("NEWBIE" + T)).matched === 0 && (await planOf("newbie")) === "free" && active("newbie") === 0);
check("squatter signing in again → still nothing", (await matchForEmail("sq" + T)).matched === 0 && (await planOf("sq")) === "free");

// claim link
const tok = await claimToken("test_newbie", now);
const wrong = await claimSale(tok, { id: "bob", email: "bob" + T });
check("claim while signed in as another email → wrong_account, names the payer", !wrong.ok && wrong.reason === "wrong_account" && wrong.payerEmail === "newbie" + T);
const bad = await claimSale(tok.slice(0, -2) + (tok.endsWith("A") ? "BB" : "AA"), { id: "newbie", email: "newbie" + T });
check("tampered link → bad_link", !bad.ok && bad.reason === "bad_link");
const old = await claimSale(await claimToken("test_newbie", new Date(now.getTime() - 15 * 86_400_000)), { id: "newbie", email: "newbie" + T });
check("link older than 14 days → expired", !old.ok && old.reason === "expired");
const good = await claimSale(tok, { id: "newbie", email: "NEWBIE" + T });
check("claim with the paid email → activated", good.ok && !good.already && (await planOf("newbie")) === "lifetime" && active("newbie") === 1 && (await saleRow("test_newbie"))?.matchedBy === "claim");
const again = await claimSale(tok, { id: "newbie", email: "newbie" + T });
check("opening the link again → already, no second email", again.ok && again.already && active("newbie") === 1);
const sqClaim = await claimSale(await claimToken("test_sq", now), { id: "sq", email: "sq" + T });
check("existing new account: opening the inbox link while signed in with that email → activated", sqClaim.ok && (await planOf("sq")) === "lifetime");

// manual
const mm = await manualMatch("test_ghost", "dana" + T, "owner" + T);
check("manual match to an account that already has Pro → linked, no email", mm.ok && (await saleRow("test_ghost"))?.matchedBy === "manual" && mailsTo("dana").length === 1, mm.message);

check("mail count: 8 active (incl. same-name match) + 3 claim links", dryRunLog.length === 11, String(dryRunLog.length));
await proxy.dispose();
console.log(failed ? `\n${failed} FAILED` : "\nAll passed");
process.exit(failed ? 1 : 0);
