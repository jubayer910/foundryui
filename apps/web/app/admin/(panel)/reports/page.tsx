import type { Metadata } from "next";
import { Suspense } from "react";
import { can, requireStaff } from "@/lib/admin";
import { FILTER_CHOICES } from "@/lib/reports/datasets";
import { loadHourly, hourlyFor } from "@/lib/reports/hourly";
import { loadReport } from "@/lib/reports/load";
import { DATASETS, MONEY_DATASETS, dayText, isoDay, parseState, type DatasetId } from "@/lib/reports/period";
import { AdminHead } from "@/components/admin/ui";
import { Menu } from "@/components/admin/menu";
import { Controls, type FilterChoice } from "@/components/admin/reports/controls";
import { exportItems } from "@/components/admin/reports/export-items";
import { PeriodBar } from "@/components/admin/reports/period-bar";
import { DatasetSection, periodText } from "@/components/admin/reports/view";

export const metadata: Metadata = { title: "Reports" };

export default async function ReportsPage({ searchParams }: PageProps<"/admin/reports">) {
  const { role } = await requireStaff("analytics", "/admin/reports");
  const money = can(role, "revenue");
  const s = parseState(await searchParams);
  const [r, hourly] = await Promise.all([loadReport(s, { revenue: money }), loadHourly(s, { revenue: money })]);
  const visible: DatasetId[] = DATASETS.filter((d) => money || !MONEY_DATASETS.includes(d));

  const traffic = r.datasets.find((d) => d.id === "traffic");
  const audience = r.datasets.find((d) => d.id === "audience");
  const listOf = (rows: { label: string }[] | undefined, map?: (l: string) => string) => (rows ?? []).map((x) => ({ v: map ? map(x.label) : x.label, label: x.label }));
  const filters: FilterChoice[] = [
    { key: "source", label: "Source", ds: ["traffic"], options: listOf(traffic?.breakdowns.find((b) => b.id === "sources")?.rows, (l) => (l === "Direct or unknown" ? "direct" : l)) },
    { key: "uplan", label: "Plan now", ds: ["audience"], options: FILTER_CHOICES.uplan },
    { key: "ref", label: "Ref link", ds: ["audience"], options: listOf(audience?.breakdowns.find((b) => b.id === "ref")?.rows) },
    { key: "client", label: "Client", ds: ["usage"], options: FILTER_CHOICES.client },
    { key: "system", label: "Design system", ds: ["usage", "agents"], options: FILTER_CHOICES.system },
    ...(money
      ? ([
          { key: "rplan", label: "Revenue plan", ds: ["revenue"], options: FILTER_CHOICES.rplan },
          { key: "provider", label: "Provider", ds: ["revenue"], options: FILTER_CHOICES.provider },
        ] as FilterChoice[])
      : []),
  ];
  const today = isoDay(s.now + s.offset * 1000);

  return (
    <div>
      <AdminHead
        title="Reports"
        sub={`${periodText(r.sel)}${s.partial ? `, in progress through ${dayText(today)}` : ""}${r.cmp ? ` vs ${r.cmp.name}` : ""}`}
        info="Every dataset by day, week, month, quarter or year, with the definition of each number and the rows behind it. Weeks are ISO weeks starting Monday; quarters are calendar quarters. Money is in USD; amounts in other currencies without a USD figure are left out and named under Revenue."
      >
        <Menu label="Export" icon="download" items={exportItems(s)} />
      </AdminHead>

      <Suspense>
        <PeriodBar />
        <Controls datasets={visible} filters={filters} />
      </Suspense>

      {r.datasets.map((d) => (
        <DatasetSection key={d.id} d={d} r={r} hourly={hourlyFor(hourly, d.id, s)} />
      ))}

      <p className="mt-10 text-[12px] text-faint">
        {r.queries + (hourly?.queries ?? 0)} grouped database queries for this view.
      </p>
    </div>
  );
}
