import type { Metadata } from "next";
import { Suspense } from "react";
import { requireStaff } from "@/lib/admin";
import { loadInsights } from "@/lib/analytics/insights";
import { parseState } from "@/lib/reports/period";
import { BehaviourView } from "@/components/admin/insights/behaviour-view";
import { Menu } from "@/components/admin/menu";
import { exportItems } from "@/components/admin/reports/export-items";
import { PeriodBar } from "@/components/admin/reports/period-bar";
import { periodText } from "@/components/admin/reports/view";
import { AdminHead } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Behavior, Insights" };

/**
 * Insights > Behavior: clicks, the visit journey, a navigation explorer (where each page's visitors came from
 * and went next), and reading depth per page. Same period bar and data as Traffic.
 */
export default async function BehaviorPage({ searchParams }: PageProps<"/admin/analytics/behavior">) {
  await requireStaff("analytics", "/admin/analytics/behavior");
  const s = parseState(await searchParams);
  const d = await loadInsights(s);
  return (
    <div>
      <AdminHead title="Behavior" sub={`${periodText(s.period)}${d.cmp ? ` vs ${d.cmp.name}` : ""}`} info="What visitors do on the site, from the first-party beacon: clicks on buttons and links, page-to-page moves, engaged time and scroll depth. No cookies, nothing typed, no identifiers. Days are UTC days.">
        <Menu label="Export" icon="download" items={exportItems(s, ["traffic"])} />
      </AdminHead>
      <Suspense>
        <PeriodBar />
      </Suspense>
      {d.error ? <p className="card mt-6 p-4 text-[13px] text-mute">{d.error}</p> : <BehaviourView d={d} />}
    </div>
  );
}
