import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { can, requireStaff } from "@/lib/admin";
import { hourlyFor, loadHourly } from "@/lib/reports/hourly";
import { loadReport } from "@/lib/reports/load";
import { parseState, type DatasetId } from "@/lib/reports/period";
import { loadAnalytics } from "@/components/admin/analytics";
import { Delta } from "@/components/admin/charts";
import { Menu } from "@/components/admin/menu";
import { exportItems } from "@/components/admin/reports/export-items";
import { PeriodBar } from "@/components/admin/reports/period-bar";
import { DatasetSection, periodText } from "@/components/admin/reports/view";
import { AdminHead, Kpi, Section, money, num } from "@/components/admin/ui";

/**
 * Insights tabs: each one is one or two report datasets on the shared period bar (Day to Year), so the numbers
 * are the same ones Reports and the exports show.
 */
const TABS: Record<string, { title: string; ds: DatasetId[]; info: string }> = {
  users: { title: "Users", ds: ["audience"], info: "Accounts, plans, ref links and the waitlist." },
  usage: { title: "Usage", ds: ["usage", "agents"], info: "Copies, downloads and installs from the website, the MCP server and the CLI." },
  revenue: { title: "Revenue", ds: ["revenue", "activations"], info: "Orders by order date in USD, subscriptions, and Contra activations." },
  support: { title: "Support", ds: ["support"], info: "Tickets and the questions the help bot could not answer." },
};

export async function generateMetadata({ params }: PageProps<"/admin/analytics/[tab]">): Promise<Metadata> {
  const t = TABS[(await params).tab];
  return { title: t ? `${t.title}, Insights` : "Insights" };
}

export default async function InsightsTab({ params, searchParams }: PageProps<"/admin/analytics/[tab]">) {
  const { tab } = await params;
  const t = TABS[tab];
  if (!t) notFound();
  const { role } = await requireStaff("analytics", `/admin/analytics/${tab}`);
  const revenue = can(role, "revenue");
  // Staff without the revenue permission keep the revenue summary they always had on Analytics.
  if (tab === "revenue" && !revenue) return <RevenueSummary />;
  const s = parseState(await searchParams);
  const [r, hourly] = await Promise.all([loadReport(s, { revenue }, t.ds), loadHourly(s, { revenue })]);
  return (
    <div>
      <AdminHead title={t.title} sub={`${periodText(r.sel)}${r.cmp ? ` vs ${r.cmp.name}` : ""}`} info={t.info}>
        <Menu label="Export" icon="download" items={exportItems(s, t.ds)} />
      </AdminHead>
      <Suspense>
        <PeriodBar />
      </Suspense>
      {r.datasets.map((d, i) => (
        <DatasetSection key={d.id} d={d} r={r} hourly={hourlyFor(hourly, d.id, s)} srTitle={i === 0} />
      ))}
    </div>
  );
}

async function RevenueSummary() {
  const a = await loadAnalytics("30d");
  const r = a.revenue;
  const period = `previous ${a.w.days} days`;
  const usd = r.byCurrency.find((c) => c.currency === "USD") ?? { currency: "USD", paid: 0, paidPrev: 0, refunds: 0 };
  return (
    <div>
      <AdminHead title="Revenue" sub={`Last 30 days, ${a.w.startDay} to ${a.w.todayDay}, UTC`} info="Orders by purchase date, refunds by refund date. Period reports by day, week, month and year need the Revenue permission." />
      <Section title="Summary">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Kpi label="Revenue" value={money(usd.paid, usd.currency)} delta={<Delta cur={usd.paid} prev={usd.paidPrev} period={period} />} />
          <Kpi label="Paid orders" value={num(r.orders)} delta={<Delta cur={r.orders} prev={r.ordersPrev} period={period} />} />
          <Kpi label="Refunds" value={money(usd.refunds, usd.currency)} hint={`${num(r.refundOrders)} refunded orders`} />
          <Kpi label="MRR estimate" value={money(r.mrrCents)} hint={`${num(r.subsMonthly)} monthly at $${r.prices.proMonthly}, ${num(r.subsYearly)} yearly at $${r.prices.proYearly}/12`} />
        </div>
      </Section>
    </div>
  );
}
