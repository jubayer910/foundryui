import type { Metadata } from "next";
import { Suspense } from "react";
import { can, requireStaff } from "@/lib/admin";
import { loadHourly } from "@/lib/reports/hourly";
import { loadReport } from "@/lib/reports/load";
import { parseState, rangeLabel, type DatasetId } from "@/lib/reports/period";
import type { DatasetResult, MetricDef, Report } from "@/lib/reports/types";
import { Funnel } from "@/components/admin/charts";
import { Menu } from "@/components/admin/menu";
import { exportItems } from "@/components/admin/reports/export-items";
import { HourlyChart } from "@/components/admin/reports/hourly-chart";
import { PeriodBar } from "@/components/admin/reports/period-bar";
import { Trend } from "@/components/admin/reports/trend";
import { MetricKpi, periodText } from "@/components/admin/reports/view";
import { AdminHead, Section } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Insights" };

/**
 * Insights overview: four headline numbers, one trend with a metric switch, the hour-by-hour view on a single
 * day, and the funnel. Everything comes from the report engine for the period in the URL.
 */
export default async function InsightsOverview({ searchParams }: PageProps<"/admin/analytics">) {
  const { role } = await requireStaff("analytics", "/admin/analytics");
  const revenue = can(role, "revenue");
  const s = parseState(await searchParams);
  const ds: DatasetId[] = ["traffic", "audience", "usage", "agents", ...(revenue ? (["revenue"] as DatasetId[]) : [])];
  const [r, hourly] = await Promise.all([loadReport(s, { revenue }, ds), loadHourly(s, { revenue })]);
  const get = (id: DatasetId) => r.datasets.find((d) => d.id === id);
  const pick = (id: DatasetId, m: string): { d: DatasetResult; m: MetricDef } | null => {
    const d = get(id);
    const def = d?.metrics.find((x) => x.id === m);
    return d && def && !d.error ? { d, m: def } : null;
  };
  const kpis = [pick("traffic", "visitors"), pick("audience", "signups"), pick("usage", "copies"), revenue ? pick("revenue", "net") : pick("agents", "calls")].filter((x) => !!x);
  const trend = [pick("traffic", "visitors"), pick("audience", "signups"), pick("usage", "copies"), pick("agents", "calls"), revenue ? pick("revenue", "net") : null].filter((x) => !!x);
  const rows = r.buckets.map((p, i) => ({ key: p.key, name: p.name, dates: p.dates, tick: p.tick, v: Object.fromEntries(trend.map((t) => [t.m.id, t.d.rows[i]?.v[t.m.id] ?? null])) }));
  const val = (id: DatasetId, m: string, which: "selected" | "compare") => Number(get(id)?.[which]?.[m] ?? 0);
  const steps = [
    { label: "Visitors", n: val("traffic", "visitors", "selected"), prev: val("traffic", "visitors", "compare") },
    { label: "Used a component", n: val("usage", "actors", "selected"), prev: val("usage", "actors", "compare") },
    { label: "Signed up", n: val("audience", "signups", "selected"), prev: val("audience", "signups", "compare") },
    ...(revenue ? [{ label: "Orders", n: val("revenue", "orders", "selected"), prev: val("revenue", "orders", "compare") }] : []),
  ];
  const hourSeries = hourly?.series.filter((x) => ["signups", "events", "net"].includes(x.id)) ?? [];

  return (
    <div>
      <AdminHead title="Overview" sub={`${periodText(r.sel)}${r.cmp ? ` vs ${r.cmp.name}` : ""}`}>
        <Menu
          label="More"
          items={[
            { section: "Other tools" },
            { href: "https://analytics.google.com/", label: "Google Analytics", hint: "Channels, campaigns, countries", icon: "external-link", newTab: true },
            { href: "https://clarity.microsoft.com/projects/view/zdnoi4px8s/dashboard", label: "Microsoft Clarity", hint: "Heatmaps and recordings", icon: "external-link", newTab: true },
            { section: "Classic CSV, last 30 days, UTC" },
            { href: "/admin/analytics/export?kind=traffic&range=30d", label: "Traffic per day", icon: "file-type-csv", download: true },
            { href: "/admin/analytics/export?kind=components&range=30d", label: "Components copied", icon: "file-type-csv", download: true },
          ]}
        />
        <Menu label="Export" icon="download" items={exportItems(s, ds)} />
      </AdminHead>
      <Suspense>
        <PeriodBar />
      </Suspense>

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k) => (
          <MetricKpi key={k.m.id} m={k.m} d={k.d} r={r as Report} />
        ))}
      </div>

      <div className={"mt-3 grid gap-3 " + (hourSeries.length ? "xl:grid-cols-2" : "")}>
        <Trend title={rangeLabel(s.gran, s.range)} metrics={trend.map((t) => ({ id: t.m.id, label: t.m.label, unit: t.m.unit }))} rows={rows} selected={r.sel.key} compare={r.cmp?.key ?? null} />
        {hourSeries.length > 0 && <HourlyChart series={hourSeries} day={r.sel.name} cmp={r.cmp?.name ?? null} tz={s.tz === "UTC" ? "UTC" : "Dhaka time (UTC+6)"} />}
      </div>

      <Section title="Funnel" info="Visitors are unique per day, summed. Used a component counts distinct accounts and anonymous browsers with a copy, download or install. Signed up counts new accounts; Orders counts orders that took money. Steps are not strictly nested (people can sign up without copying a component), so each step shows its share of visitors.">
        <Funnel steps={steps} period={r.cmp ? r.cmp.name : "the comparison period"} />
      </Section>
    </div>
  );
}
