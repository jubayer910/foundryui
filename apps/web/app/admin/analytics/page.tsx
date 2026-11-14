import type { Metadata } from "next";
import { adminOnly, sp } from "@/components/admin/guard";
import { RANGES, loadAnalytics, rangeOf, type Analytics } from "@/components/admin/analytics";
import { AdminHead, Bars, Kpi, LinkTabs, Section, money, num, planLabel } from "@/components/admin/ui";
import { BarList, Delta, Funnel, TrafficChart, dur, fmtPct } from "@/components/admin/charts";
import { Icon } from "@/registry/components/icons";

export const metadata: Metadata = { title: "Analytics" };

export default async function AdminAnalytics({ searchParams }: PageProps<"/admin/analytics">) {
  await adminOnly();
  const range = rangeOf(sp((await searchParams).range));
  return <View a={await loadAnalytics(range)} />;
}

function View({ a }: { a: Analytics }) {
  const { traffic: t, usage: u, revenue: r, users, support: s, w } = a;
  const period = `previous ${w.days} days`;
  const usd = r.byCurrency.find((c) => c.currency === "USD") ?? { currency: "USD", paid: 0, paidPrev: 0, refunds: 0 };
  const others = r.byCurrency.filter((c) => c.currency !== usd.currency && c.paid > 0);
  const free = users.plans.find((p) => p.label === "free")?.n ?? 0;
  const noTraffic = t.viewsTotal === 0;

  return (
    <div>
      <AdminHead title="Analytics" sub={`${w.startDay} to ${w.todayDay}, UTC. Changes compare with the ${period}.`}>
        <LinkTabs tabs={Object.keys(RANGES).map((k) => ({ href: `/admin/analytics?range=${k}`, label: k.replace("d", " days"), on: k === a.range }))} />
      </AdminHead>

      <Section
        title="Traffic"
        sub="First-party, cookieless page views from the site beacon."
        action={
          <a href={`/admin/analytics/export?kind=traffic&range=${a.range}`} className="btn-line !h-7 !px-3" download>
            <Icon name="download" size={14} />
            Daily CSV
          </a>
        }
      >
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Kpi label="Visitors" value={num(t.visitorsTotal)} delta={<Delta cur={t.visitorsTotal} prev={t.visitorsPrev} period={period} />} hint="Unique per day, summed" />
          <Kpi label="Page views" value={num(t.viewsTotal)} delta={<Delta cur={t.viewsTotal} prev={t.viewsPrev} period={period} />} hint={t.visitorsTotal ? `${(t.viewsTotal / t.visitorsTotal).toFixed(1)} per visitor` : "No visitors yet"} />
          <Kpi label="Visitors per day" value={num(Math.round(t.visitorsTotal / w.days))} hint={`Average over ${w.days} days`} />
          <Kpi label="Visitors today" value={num(t.visitors[t.visitors.length - 1]?.n ?? 0)} hint={`${num(t.visitors[t.visitors.length - 2]?.n ?? 0)} yesterday`} />
        </div>
        <div className="mt-3">
          <TrafficChart label={`Visitors and page views per day, ${w.days} days`} views={t.views} visitors={t.visitors} />
          {noTraffic && <p className="mt-2 text-[12px] text-faint">No page views in this range yet. The beacon counts visits from the moment this version is live.</p>}
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <BarList title="Top pages" unit="Page views" rows={t.pages.map((p) => ({ ...p, href: p.href, external: true }))} empty="No page views yet." />
          <BarList title="Sources" unit="Entrances" rows={t.sources} empty="No entrances yet. Sources come from utm_source or the referring site." />
        </div>
      </Section>

      <Section title="Funnel" sub={`Visitors to paying customers in the last ${w.days} days.`}>
        <Funnel steps={a.funnel} period={period} />
        <p className="mt-2 text-[12px] text-faint">
          Copied or downloaded counts distinct browsers and accounts that used a component on the website. Paid counts distinct buyers with a paid order. Overall {a.funnel[0].n ? fmtPct((a.funnel[3].n / a.funnel[0].n) * 100) : "0%"} of visitors paid.
        </p>
      </Section>

      <Section
        title="Product usage"
        sub={`${num(u.events)} copies, downloads and installs.`}
        action={
          <a href={`/admin/analytics/export?kind=components&range=${a.range}`} className="btn-line !h-7 !px-3" download>
            <Icon name="download" size={14} />
            Components CSV
          </a>
        }
      >
        <div className="grid gap-3 lg:grid-cols-3">
          <BarList title="By action" rows={u.actions} empty="No usage yet." />
          <BarList title="By client" rows={u.clients} empty="No usage yet." />
          <BarList title="Copies by design system" rows={u.systems} empty="No copies yet." />
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <BarList title="Top 15 components copied" unit="Copies" rows={u.components.map((c) => ({ label: c.label, sub: c.system, n: c.n, href: c.href, external: true }))} empty="No component copies yet." />
          <BarList title="Top icons copied" unit="Copies" rows={u.icons} empty="No icon copies yet." />
        </div>
        <div className="mt-3">
          <Bars label={`MCP calls per day, ${w.days} days`} data={u.mcpDays} />
        </div>
      </Section>

      <Section title="Revenue" sub="Orders by purchase date, refunds by refund date.">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Kpi label="Revenue" value={money(usd.paid, usd.currency)} delta={<Delta cur={usd.paid} prev={usd.paidPrev} period={period} />} hint={others.length ? "+ " + others.map((o) => money(o.paid, o.currency)).join(" + ") : `${num(r.orders)} paid orders`} />
          <Kpi label="Paid orders" value={num(r.orders)} delta={<Delta cur={r.orders} prev={r.ordersPrev} period={period} />} hint={`${num(r.buyers)} buyers`} />
          <Kpi label="Refunds" value={money(usd.refunds, usd.currency)} hint={`${num(r.refundOrders)} refunded orders`} />
          <Kpi label="MRR estimate" value={money(r.mrrCents)} hint={`${num(r.subsMonthly)} monthly at $${r.prices.proMonthly}, ${num(r.subsYearly)} yearly at $${r.prices.proYearly}/12`} />
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <div className="card p-4">
            <p className="text-[13px] text-mute">Lifetime deal spots</p>
            <p className="mt-1 text-[22px] font-medium tracking-[-0.02em] tabular-nums">
              {num(r.deal.sold)} <span className="text-[15px] text-faint">of {num(r.deal.total)} sold</span>
            </p>
            <div className="mt-2 h-1.5 rounded-full bg-chip" role="img" aria-label={`${num(r.deal.sold)} of ${num(r.deal.total)} spots sold`}>
              <div className="h-1.5 rounded-full bg-ink" style={{ width: `${Math.min(100, (r.deal.sold / Math.max(1, r.deal.total)) * 100)}%` }} />
            </div>
            <p className="mt-1.5 text-[12px] text-faint">{r.deal.enabled ? (r.deal.soldOut ? "Sold out" : `${num(r.deal.left)} left`) : "Deal is off"}. All time, paid only.</p>
          </div>
          <BarList title="Waitlist by plan" unit="All time" rows={r.waitlist.map((x) => ({ label: planLabel(x.label), n: x.n, sub: x.cur ? `${num(x.cur)} in range` : undefined }))} empty="Nobody on the waitlist." />
        </div>
      </Section>

      <Section title="Users" sub="Accounts, plans and activity.">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Kpi label="Signups" value={num(users.signupsTotal)} delta={<Delta cur={users.signupsTotal} prev={users.signupsPrev} period={period} />} hint={`${num(Math.round((users.signupsTotal / w.days) * 10) / 10)} a day`} />
          <Kpi label="Active users" value={num(users.active)} delta={<Delta cur={users.active} prev={users.activePrev} period={period} />} hint="Signed in and used a component" />
          <Kpi label="API keys created" value={num(users.keys)} delta={<Delta cur={users.keys} prev={users.keysPrev} period={period} />} hint="For MCP and CLI" />
          <Kpi label="Free accounts" value={num(free)} hint={`of ${num(users.plans.reduce((x, p) => x + p.n, 0))} accounts, all time`} />
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-[2fr_1fr]">
          <Bars label={`Signups per day, ${w.days} days`} data={users.signups} />
          <BarList title="Plan mix" unit="All time" rows={users.plans.map((p) => ({ label: planLabel(p.label), n: p.n }))} empty="No accounts yet." />
        </div>
      </Section>

      <Section title="Support" sub="Tickets opened in the range.">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Kpi label="Opened" value={num(s.opened)} hint={`${num(s.open)} still open`} />
          <Kpi label="Answered" value={num(s.answered)} hint="Waiting on the customer" />
          <Kpi label="Closed" value={num(s.closed)} hint={s.opened ? `${fmtPct((s.closed / s.opened) * 100)} of opened` : "Nothing opened"} />
          <Kpi label="Median first reply" value={dur(s.medianReplySec)} hint={s.replied ? `${num(s.replied)} replied, ${num(s.unreplied)} without a reply` : "No replies in range"} />
        </div>
        <div className="mt-3">
          <Bars label={`Tickets opened per day, ${w.days} days`} data={s.days} />
        </div>
      </Section>

      <Section title="More analytics" sub="Opens in a new tab.">
        <div className="grid gap-3 lg:grid-cols-2">
          <Out href="https://analytics.google.com/" title="Google Analytics" body="Acquisition: channels, campaigns, countries and devices for ingotui.com (G-791MYC76DX)." />
          <Out href="https://clarity.microsoft.com/projects/view/zdnoi4px8s/dashboard" title="Microsoft Clarity" body="Heatmaps and session recordings: see where people click, scroll and get stuck." />
        </div>
      </Section>
    </div>
  );
}

function Out({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="card flex items-start gap-3 p-4 transition-colors hover:bg-tile">
      <span className="min-w-0 flex-1">
        <span className="block text-[13px] font-medium">{title}</span>
        <span className="mt-0.5 block text-[13px] text-mute">{body}</span>
      </span>
      <Icon name="arrow-up-right" size={15} className="mt-0.5 text-mute" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
