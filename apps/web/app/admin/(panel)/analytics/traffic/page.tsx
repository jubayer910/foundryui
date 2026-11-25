import type { Metadata } from "next";
import { Suspense } from "react";
import { requireStaff } from "@/lib/admin";
import { loadEdge } from "@/lib/analytics/cloudflare";
import { loadInsights } from "@/lib/analytics/insights";
import { parseState } from "@/lib/reports/period";
import { TrafficView } from "@/components/admin/insights/traffic-view";
import { Menu } from "@/components/admin/menu";
import { exportItems } from "@/components/admin/reports/export-items";
import { PeriodBar } from "@/components/admin/reports/period-bar";
import { periodText } from "@/components/admin/reports/view";
import { AdminHead } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Traffic, Insights" };

/**
 * Insights > Traffic: visitors, sources and campaigns, countries, devices, the hour heat map, every page with
 * its engagement, and Cloudflare's edge numbers when connected. Rows open detail panels; the period bar drives
 * everything.
 */
export default async function TrafficPage({ searchParams }: PageProps<"/admin/analytics/traffic">) {
  await requireStaff("analytics", "/admin/analytics/traffic");
  const s = parseState(await searchParams);
  const [d, edge] = await Promise.all([loadInsights(s), loadEdge(s)]);
  return (
    <div>
      <AdminHead title="Traffic" sub={`${periodText(s.period)}${d.cmp ? ` vs ${d.cmp.name}` : ""}`} info="First-party and cookieless: page views, visits and behaviour from the site's own beacon (no cookies, no IPs stored), plus Cloudflare's edge numbers when connected. Days are UTC days.">
        <Menu label="Export" icon="download" items={exportItems(s, ["traffic", "content"])} />
      </AdminHead>
      <Suspense>
        <PeriodBar />
      </Suspense>
      {d.error ? <p className="card mt-6 p-4 text-[13px] text-mute">{d.error}</p> : <TrafficView d={d} edge={edge} />}
    </div>
  );
}
