import type { Metadata } from "next";
import Link from "next/link";
import { desc } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { adminOnly } from "@/components/admin/guard";
import { loadCockpit } from "@/components/admin/analytics";
import { AIcon } from "@/components/admin/admin-icons";
import { Delta } from "@/components/admin/charts";
import { AdminHead, Bars, Kpi, Section, Tag, cap, money, num, statusTone, when } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Overview" };

const P7 = "previous 7 days";

export default async function AdminOverview() {
  await adminOnly();
  return <Overview {...await load()} />;
}

async function load() {
  const db = await getDb();
  const [k, recentP, recentT, recentU] = await Promise.all([
    loadCockpit(),
    db.select().from(schema.purchase).orderBy(desc(schema.purchase.createdAt)).limit(5),
    db.select().from(schema.ticket).orderBy(desc(schema.ticket.updatedAt)).limit(5),
    db.select({ id: schema.user.id, name: schema.user.name, email: schema.user.email, plan: schema.user.plan, createdAt: schema.user.createdAt }).from(schema.user).orderBy(desc(schema.user.createdAt)).limit(5),
  ]);
  return { k, recentP, recentT, recentU };
}

function Overview({ k, recentP, recentT, recentU }: Awaited<ReturnType<typeof load>>) {
  const { deal } = k;
  return (
    <div>
      <AdminHead title="Overview" sub="Last 7 days against the 7 before, UTC.">
        <Link href="/admin/analytics" className="btn-line">
          <AIcon name="chart-line" size={15} />
          Full analytics
        </Link>
      </AdminHead>
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Visitors today" value={num(k.visitorsToday)} hint={`Since 00:00 UTC, ${num(k.visitorsYesterday)} yesterday`} />
        <Kpi label="Visitors, 7 days" value={num(k.visitors)} delta={<Delta cur={k.visitors} prev={k.visitorsPrev} period={P7} />} hint={`${num(k.views)} page views`} />
        <Kpi label="Signups, 7 days" value={num(k.signups)} delta={<Delta cur={k.signups} prev={k.signupsPrev} period={P7} />} hint={`${num(k.usersTotal)} users in total`} />
        <Kpi label="Revenue, 7 days" value={money(k.revenue, k.revenueCurrency)} delta={<Delta cur={k.revenue} prev={k.revenuePrev} period={P7} />} hint={`${num(k.orders)} paid orders${k.otherCurrencies ? ", other currencies in Analytics" : ""}`} />
        <Kpi label="Copies, 7 days" value={num(k.copies)} delta={<Delta cur={k.copies} prev={k.copiesPrev} period={P7} />} hint={`${num(k.copiesToday)} today`} />
        <Kpi label="MCP calls, 7 days" value={num(k.mcp)} delta={<Delta cur={k.mcp} prev={k.mcpPrev} period={P7} />} hint="From AI agents" />
        <Kpi label="Paying users" value={num(k.pro + k.lifetime)} hint={`Pro ${num(k.pro)}, Lifetime ${num(k.lifetime)}`} />
        <Kpi label="Lifetime spots" value={`${num(deal.sold)} / ${num(deal.total)}`} hint={deal.enabled ? (deal.soldOut ? "Sold out" : `${num(deal.left)} left`) : "Deal off"} />
        <Kpi label="Open tickets" value={num(k.openTickets)} hint={<Link href="/admin/support" className="hover:text-ink">Open the inbox</Link>} />
        <Kpi label="Waitlist" value={num(k.waitlist)} hint={<Link href="/admin/waitlist" className="hover:text-ink">See emails</Link>} />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        <Bars label="Visitors per day, 30 days" data={k.visitorDays} />
        <Bars label="Signups per day, 30 days" data={k.signupDays} />
        <Bars label="Copies per day, 30 days" data={k.copyDays} />
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
