import type { Metadata } from "next";
import Link from "next/link";
import { and, count, desc, eq, gte, like, sql, sum } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { getDeal } from "@/lib/plans";
import { adminOnly } from "@/components/admin/guard";
import { AdminHead, Bars, Kpi, Section, Tag, cap, money, num, statusTone, when } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Overview" };

const DAY = 86_400_000;

/** Oldest-first series of the last `days` UTC days, zero-filled. */
function series(rows: { d: string; n: number }[], days: number) {
  const m = new Map(rows.map((r) => [r.d, Number(r.n)]));
  const out: { day: string; n: number }[] = [];
  const today = new Date(new Date().toISOString().slice(0, 10) + "T00:00:00Z").getTime();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today - i * DAY).toISOString().slice(0, 10);
    out.push({ day: d, n: m.get(d) ?? 0 });
  }
  return out;
}

export default async function AdminOverview() {
  await adminOnly();
  return <Overview {...await load()} />;
}

async function load() {
  const db = await getDb();
  const now = Date.now();
  const d7 = new Date(now - 7 * DAY);
  const d30 = new Date(now - 29 * DAY - (now % DAY));
  const today = new Date(now - (now % DAY));
  const U = schema.user;
  const E = schema.usageEvent;
  const P = schema.purchase;
  const isCopy = like(E.action, "copy%");
  const dayOf = (c: typeof U.createdAt | typeof E.createdAt) => sql<string>`date(${c}, 'unixepoch')`;

  const [[users], [users7], plans, revenue, deal, [copiesToday], [copies7], [mcp7], [openT], [wait], signupRows, copyRows, recentP, recentT, recentU] = await Promise.all([
    db.select({ n: count() }).from(U),
    db.select({ n: count() }).from(U).where(gte(U.createdAt, d7)),
    db.select({ plan: U.plan, n: count() }).from(U).groupBy(U.plan),
    db.select({ cur: P.currency, c: sum(P.amountCents), n: count() }).from(P).where(eq(P.status, "paid")).groupBy(P.currency),
    getDeal(),
    db.select({ n: count() }).from(E).where(and(isCopy, gte(E.createdAt, today))),
    db.select({ n: count() }).from(E).where(and(isCopy, gte(E.createdAt, d7))),
    db.select({ n: count() }).from(E).where(and(eq(E.client, "mcp"), gte(E.createdAt, d7))),
    db.select({ n: count() }).from(schema.ticket).where(eq(schema.ticket.status, "open")),
    db.select({ n: count() }).from(schema.waitlist),
    db.select({ d: dayOf(U.createdAt), n: count() }).from(U).where(gte(U.createdAt, d30)).groupBy(dayOf(U.createdAt)),
    db.select({ d: dayOf(E.createdAt), n: count() }).from(E).where(and(isCopy, gte(E.createdAt, d30))).groupBy(dayOf(E.createdAt)),
    db.select().from(P).orderBy(desc(P.createdAt)).limit(5),
    db.select().from(schema.ticket).orderBy(desc(schema.ticket.updatedAt)).limit(5),
    db.select({ id: U.id, name: U.name, email: U.email, plan: U.plan, createdAt: U.createdAt }).from(U).orderBy(desc(U.createdAt)).limit(5),
  ]);

  return { users, users7, plans, revenue, deal, copiesToday, copies7, mcp7, openT, wait, signupRows, copyRows, recentP, recentT, recentU };
}

function Overview({ users, users7, plans, revenue, deal, copiesToday, copies7, mcp7, openT, wait, signupRows, copyRows, recentP, recentT, recentU }: Awaited<ReturnType<typeof load>>) {
  const byPlan = Object.fromEntries(plans.map((p) => [p.plan, p.n]));
  const paying = (byPlan.pro ?? 0) + (byPlan.lifetime ?? 0);
  const rev = revenue.length ? revenue.map((r) => money(Number(r.c ?? 0), r.cur)).join(" + ") : money(0);
  const paidOrders = revenue.reduce((s, r) => s + r.n, 0);

  return (
    <div>
      <AdminHead title="Overview" sub="Live numbers from D1." />
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Users" value={num(users?.n ?? 0)} hint={`+${num(users7?.n ?? 0)} in the last 7 days`} />
        <Kpi label="Paying users" value={num(paying)} hint={`Pro ${num(byPlan.pro ?? 0)}, Lifetime ${num(byPlan.lifetime ?? 0)}`} />
        <Kpi label="Revenue" value={rev} hint={`${num(paidOrders)} paid orders`} />
        <Kpi label="Lifetime spots" value={`${num(deal.sold)} / ${num(deal.total)}`} hint={deal.enabled ? (deal.soldOut ? "Sold out" : `${num(deal.left)} left`) : "Deal off"} />
        <Kpi label="Copies today" value={num(copiesToday?.n ?? 0)} hint={`${num(copies7?.n ?? 0)} in 7 days`} />
        <Kpi label="MCP calls" value={num(mcp7?.n ?? 0)} hint="Last 7 days" />
        <Kpi label="Open tickets" value={num(openT?.n ?? 0)} hint={<Link href="/admin/support" className="hover:text-ink">Open the inbox</Link>} />
        <Kpi label="Waitlist" value={num(wait?.n ?? 0)} hint={<Link href="/admin/waitlist" className="hover:text-ink">See emails</Link>} />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Bars label="Signups per day, 30 days" data={series(signupRows, 30)} />
        <Bars label="Copies per day, 30 days" data={series(copyRows, 30)} />
      </div>

      <Section title="Recent activity">
        <div className="grid gap-3 lg:grid-cols-3">
          <Feed title="Purchases" href="/admin/orders" empty="No purchases yet.">
            {recentP.map((p) => (
              <li key={p.id} className="flex items-center gap-2 py-2">
                <span className="min-w-0 flex-1">
                  <span className="block truncate">{p.email}</span>
                  <span className="block text-[12px] text-faint">{cap(p.plan)}, {money(p.amountCents, p.currency)}, {when(p.createdAt)}</span>
                </span>
                <Tag tone={statusTone(p.status)}>{p.status}</Tag>
              </li>
            ))}
          </Feed>
          <Feed title="Tickets" href="/admin/support" empty="No tickets yet.">
            {recentT.map((t) => (
              <li key={t.id} className="py-2">
                <Link href={`/admin/support/${t.id}`} className="flex items-center gap-2 hover:opacity-70">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate">{t.subject}</span>
                    <span className="block truncate text-[12px] text-faint">{t.email}, {when(t.updatedAt)}</span>
                  </span>
                  <Tag tone={statusTone(t.status)}>{t.status}</Tag>
                </Link>
              </li>
            ))}
          </Feed>
          <Feed title="Signups" href="/admin/users" empty="No users yet.">
            {recentU.map((u) => (
              <li key={u.id} className="py-2">
                <Link href={`/admin/users/${u.id}`} className="flex items-center gap-2 hover:opacity-70">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate">{u.name || u.email}</span>
                    <span className="block truncate text-[12px] text-faint">{u.email}, {when(u.createdAt)}</span>
                  </span>
                  <Tag tone={u.plan === "free" ? "plain" : "good"}>{u.plan}</Tag>
                </Link>
              </li>
            ))}
          </Feed>
        </div>
      </Section>
    </div>
  );
}

function Feed({ title, href, empty, children }: { title: string; href: string; empty: string; children: React.ReactNode[] }) {
  return (
    <div className="card px-4 py-3">
      <div className="flex items-center">
        <p className="text-[13px] text-mute">{title}</p>
        <Link href={href} className="ml-auto text-[12px] text-faint hover:text-ink">
          All
        </Link>
      </div>
      {children.length ? <ul className="mt-1 divide-y divide-hair text-[13px]">{children}</ul> : <p className="py-4 text-[13px] text-mute">{empty}</p>}
    </div>
  );
}
