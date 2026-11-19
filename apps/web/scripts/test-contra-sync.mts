/**
 * Contra sync matching tests against the LOCAL D1 (never remote), with a fake Contra tool caller.
 * No network, no real email: MAIL_DRY_RUN=1 makes lib/mail.ts record mails in memory instead of sending.
 *
 *   cd apps/web && npx wrangler d1 migrations apply foundry-ui-db --local
 *   npx tsx --import ./scripts/server-only-stub.mjs scripts/test-contra-sync.mts
 *
 * Covers: email match to a pending request, email match to an account (with and without the plan),
 * hand-approved history stays silent, name match, price mismatch, old link at its old price, the
 * "create your account" mail (once), sign-up matching, duplicate sync, and no double email.
 */
process.env.MAIL_DRY_RUN = "1";
import { getPlatformProxy } from "wrangler";

const proxy = await getPlatformProxy<CloudflareEnv>({ configPath: "wrangler.jsonc", persist: true });
const env = { ...proxy.env, MAIL_DRY_RUN: "1" } as CloudflareEnv;
(globalThis as Record<symbol, unknown>)[Symbol.for("__cloudflare-context__")] = { env, ctx: proxy.ctx, cf: proxy.cf };

console.log("proxy ok");
const { getDb, schema } = await import("../lib/db/index.ts");
console.log("db mod ok");
const { DEFAULT_SETTINGS } = await import("../lib/settings.ts");
const { syncContraSales, matchForEmail, manualMatch } = await import("../lib/contra/sync.ts");
const { dryRunLog } = await import("../lib/mail.ts");
console.log("mods ok");
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
const mkUser = async (id: string, plan = "free") => {
  await db.insert(schema.user).values({ id, name: id, email: id + T, emailVerified: false, plan, role: "user", createdAt: now, updatedAt: now });
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

// People.
await mkUser("alice");
await mkAct("alice", { payerEmail: "alice-pay" + T }); // a) pending request, paid with another email
await mkUser("bob"); // b) account, no request
await mkUser("cara", "lifetime"); // b) account that already has Lifetime: silent
await mkUser("fred", "lifetime");
await mkAct("fred", { payerEmail: "fred-pay" + T, status: "approved", decidedBy: "owner" + T, decidedAt: now }); // approved by hand before the sync
await mkUser("dana");
await mkAct("dana", { option: "proYearly", variantKey: "proYearly", amountCents: 3900, payerEmail: "dana-x" + T, contraName: "Dana  Doe" }); // c) name match
await mkUser("eve");
await mkAct("eve", { payerEmail: "eve" + T }); // old link at its old $29 price

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
    tx("test_bob", "USD:49.00", "bob" + T),
    tx("test_cara", "USD:49.00", "cara" + T, "Cara", "C", "2026-11-01"),
    tx("test_fred", "USD:49.00", "fred-pay" + T, "Fred", "F", "2026-11-02"),
    tx("test_cheap", "USD:10.00", "bob2" + T),
    tx("test_newbie", "USD:49.00", "newbie" + T, "New", "Bie"),
    tx("test_old_nobody", "USD:49.00", "old-nobody" + T, "Old", "Nobody", "2026-10-01"),
    { ...tx("test_unpaid", "USD:49.00", "bob" + T), invoice: { status: "PENDING" } },
  ],
  "OLDLIFE-test": [tx("test_eve", "USD:29.00", "eve" + T)],
  "PRO-test": [tx("test_dana", "USD:39.00", null, "dana", "DOE"), tx("test_ghost", "USD:39.00", null, "Nobody", "Here")],
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

console.log("setup ok");
const r1 = await syncContraSales({ callTool: fake, settings, now, skipLock: true });
check("sync ran", r1.ok, JSON.stringify({ ...r1, error: r1.error }));
check("all three links synced (old + new Lifetime slug, Pro)", r1.links === 3, String(r1.links));
check("only PAID sales stored", !(await saleRow("test_unpaid")));

const sa = await saleRow("test_alice");
check("a) email → pending request approved", sa?.status === "matched" && sa.matchedBy === "email" && (await actRow("act_test_alice"))?.status === "approved" && (await planOf("alice")) === "lifetime");
check("a) actor is contra-auto", (await actRow("act_test_alice"))?.decidedBy === "contra-auto");
check("a) one 'is active' email", mailsTo("alice").length === 1 && /is active/.test(mailsTo("alice")[0]?.subject ?? ""));

const sb = await saleRow("test_bob");
check("b) email → account without plan: activation created + approved", sb?.status === "matched" && !!sb.activationId && (await planOf("bob")) === "lifetime" && mailsTo("bob").length === 1);

const sc = await saleRow("test_cara");
check("b) account already has the plan: matched, no activation, no email", sc?.status === "matched" && !sc.activationId && mailsTo("cara").length === 0);

const sf = await saleRow("test_fred");
check("hand-approved history: linked, no email", sf?.status === "matched" && sf.activationId === "act_test_fred" && dryRunLog.every((m) => !m.to.startsWith("fred")));

const sd = await saleRow("test_dana");
check("c) hidden email → name match approves", sd?.status === "matched" && sd.matchedBy === "name" && (await actRow("act_test_dana"))?.status === "approved" && mailsTo("dana").length === 1);
check("c) unknown name stays unmatched", (await saleRow("test_ghost"))?.status === "unmatched");

const sx = await saleRow("test_cheap");
check("price mismatch stays unmatched with a note", sx?.status === "unmatched" && !!sx.note?.startsWith("Price mismatch") && dryRunLog.every((m) => !m.to.startsWith("bob2")));

const se = await saleRow("test_eve");
check("old link at its old price ($29) is valid", se?.status === "matched" && (await planOf("eve")) === "lifetime");

const sn = await saleRow("test_newbie");
check("no account yet: invite mail sent once", sn?.status === "unmatched" && !!sn.invitedAt && mailsTo("newbie").length === 1 && /confirmed/.test(mailsTo("newbie")[0]?.subject ?? ""));
check("old sale with no account: no invite (silent history)", !(await saleRow("test_old_nobody"))?.invitedAt && mailsTo("old-nobody").length === 0);

const before = dryRunLog.length;
const r2 = await syncContraSales({ callTool: fake, settings, now, skipLock: true });
check("second sync adds nothing", r2.added === 0 && r2.matched === 0, JSON.stringify(r2));
check("second sync sends no email", dryRunLog.length === before, `${dryRunLog.length - before} new`);
check("second sync stops after one page per link", calls.filter((c) => c === "list_payment_link_transactions").length === 6, String(calls.length));

await mkUser("newbie");
const m = await matchForEmail("NEWBIE" + T);
check("sign-up with the paid email activates", m.matched === 1 && (await planOf("newbie")) === "lifetime" && mailsTo("newbie").length === 2 && /is active/.test(mailsTo("newbie")[1]?.subject ?? ""));
await matchForEmail("newbie" + T);
check("signing in again: no second email", mailsTo("newbie").length === 2);

const mm = await manualMatch("test_ghost", "dana" + T, "owner" + T);
check("manual match to an account that already has Pro: linked, no email", mm.ok && (await saleRow("test_ghost"))?.matchedBy === "manual" && mailsTo("dana").length === 1, mm.message);

check("every mail is from the sales sender path (count)", dryRunLog.length === 6, String(dryRunLog.length));
await proxy.dispose();
console.log(failed ? `\n${failed} FAILED` : "\nAll passed");
process.exit(failed ? 1 : 0);
