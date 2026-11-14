import type { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";
import { redirect } from "next/navigation";
import { desc, eq, sql } from "drizzle-orm";
import { getSessionUser } from "@/lib/auth";
import { getDb, schema } from "@/lib/db";
import { planLabel, usd } from "@/lib/plans";
import { ApiKeys } from "@/components/site/api-keys";
import { TeamSeats } from "@/components/site/team-seats";
import { SignOut } from "@/components/site/sign-out";
import { PageHead } from "@/components/site/page-head";
import { Billing, WelcomeBanner, type BillingSub, type Receipt } from "@/components/site/billing";

export const metadata: Metadata = { title: "Account", robots: NOINDEX };

const VARIANT_LABEL: Record<string, string> = { monthly: "Pro monthly", yearly: "Pro yearly", lifetimeDeal: "Lifetime (launch deal)", lifetimeAfter: "Lifetime", lifetime: "Lifetime", manual: "Manual" };

function receiptUrl(raw: string | null) {
  try {
    const u = raw ? (JSON.parse(raw) as { attributes?: { urls?: { receipt?: string } } }).attributes?.urls?.receipt : undefined;
    return typeof u === "string" && u.startsWith("https://") ? u : null;
  } catch {
    return null;
  }
}

export default async function AccountPage({ searchParams }: PageProps<"/account">) {
  const user = await getSessionUser();
  if (!user) redirect("/sign-in?next=/account");
  const sp = await searchParams;
  const db = await getDb();
  const [keys, usage, subs, purchases] = await Promise.all([
    db
      .select({ id: schema.apiKey.id, name: schema.apiKey.name, prefix: schema.apiKey.prefix, createdAt: schema.apiKey.createdAt, lastUsedAt: schema.apiKey.lastUsedAt })
      .from(schema.apiKey)
      .where(eq(schema.apiKey.userId, user.id))
      .orderBy(desc(schema.apiKey.createdAt)),
    db
      .select({ action: schema.usageEvent.action, client: schema.usageEvent.client, n: sql<number>`count(*)` })
      .from(schema.usageEvent)
      .where(eq(schema.usageEvent.userId, user.id))
      .groupBy(schema.usageEvent.action, schema.usageEvent.client),
    db.select().from(schema.subscription).where(eq(schema.subscription.userId, user.id)).orderBy(desc(schema.subscription.updatedAt)),
    db.select().from(schema.purchase).where(eq(schema.purchase.userId, user.id)).orderBy(desc(schema.purchase.createdAt)),
  ]);
  const total = usage.reduce((s, u) => s + Number(u.n), 0);
  const mcp = usage.filter((u) => u.client === "mcp").reduce((s, u) => s + Number(u.n), 0);

  // The live subscription first (active / trial / past due / cancelled-but-running), else the latest one.
  const live = subs.find((s) => ["active", "on_trial", "past_due"].includes(s.status)) ?? subs.find((s) => s.status === "cancelled" && (!s.endsAt || s.endsAt > new Date())) ?? subs[0];
  const sub: BillingSub | null = live
    ? { interval: live.interval, status: live.status, renewsAt: live.renewsAt?.toISOString() ?? null, endsAt: live.endsAt?.toISOString() ?? null, portalUrl: live.portalUrl }
    : null;
  const receipts: Receipt[] = purchases
    .filter((p) => p.provider === "lemonsqueezy")
    .map((p) => ({
      id: p.id,
      date: p.createdAt.toISOString(),
      label: VARIANT_LABEL[p.variant ?? ""] ?? planLabel(p.plan),
      amount: usd(p.amountCents / 100) + (p.currency && p.currency !== "USD" ? " " + p.currency : ""),
      status: p.status,
      url: receiptUrl(p.raw),
    }));

  return (
    <div className="max-w-4xl">
      <PageHead title="Account" sub={user.email}>
        <SignOut />
      </PageHead>
      {sp.welcome === "1" && <WelcomeBanner plan={user.plan} />}
      {sp.already === "1" && (
        <div role="status" className="mt-5 rounded-[8px] bg-tile p-4 text-[13px]">
          <span className="font-medium">You already have {planLabel(user.plan)}.</span> <span className="text-mute">Nothing new to buy; everything it covers is unlocked.</span>
        </div>
      )}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Plan", planLabel(user.plan)],
          ["Copies & downloads", String(total - mcp)],
          ["MCP calls", String(mcp)],
        ].map(([k, v]) => (
          <div key={k} className="card p-4">
            <p className="text-[13px] text-mute">{k}</p>
            <p className="mt-1 text-[22px] font-medium tracking-[-0.02em] tabular-nums">{v}</p>
          </div>
        ))}
      </div>
      <Billing plan={user.plan} sub={sub} receipts={receipts} />
      <TeamSeats invite={typeof sp.invite === "string" ? sp.invite : null} />
      <section className="mt-10">
        <h2 className="text-[13px] font-medium">API keys</h2>
        <p className="mt-1 text-[13px] text-mute">Use a key to connect the MCP server or the CLI. Keys are shown once and stored hashed.</p>
        <ApiKeys initial={keys.map((k) => ({ ...k, createdAt: k.createdAt.toISOString(), lastUsedAt: k.lastUsedAt?.toISOString() ?? null }))} />
      </section>
    </div>
  );
}
