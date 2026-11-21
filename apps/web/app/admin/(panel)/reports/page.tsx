import type { Metadata } from "next";
import { Suspense } from "react";
import { can, requireStaff } from "@/lib/admin";
import { FILTER_CHOICES } from "@/lib/reports/datasets";
import { tzLine } from "@/lib/reports/format";
import { loadReport } from "@/lib/reports/load";
import { DATASETS, MONEY_DATASETS, dayText, isoDay, parseState, periodOfInstant, stateQuery, type DatasetId, type Gran } from "@/lib/reports/period";
import { AdminHead } from "@/components/admin/ui";
import { Controls, CustomExport, type FilterChoice } from "@/components/admin/reports/controls";
import { RIcon } from "@/components/admin/reports/icons";
import { DatasetSection, periodText } from "@/components/admin/reports/view";

export const metadata: Metadata = { title: "Reports" };

const QUICK: { g: Gran; label: string }[] = [
  { g: "week", label: "This week" },
  { g: "month", label: "This month" },
  { g: "quarter", label: "This quarter" },
  { g: "year", label: "This year" },
];

export default async function ReportsPage({ searchParams }: PageProps<"/admin/reports">) {
  const { role } = await requireStaff("analytics", "/admin/reports");
  const money = can(role, "revenue");
  const s = parseState(await searchParams);
  const r = await loadReport(s, { revenue: money });
  const visible: DatasetId[] = DATASETS.filter((d) => money || !MONEY_DATASETS.includes(d));
  const q = stateQuery(s);

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
      <AdminHead title="Reports" sub={`Every number by week, month, quarter and year, with its definition and the rows behind it. ${tzLine(s)}.`}>
        <a href={`/admin/reports/export/xlsx?${q}`} download className="btn-ink !h-8 !px-3">
          <RIcon name="file-spreadsheet" size={15} />
          Excel workbook
        </a>
        <a href={`/admin/reports/print?${q}`} target="_blank" className="btn-line !h-8 !px-3">
          <RIcon name="printer" size={15} />
          Print or PDF<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </AdminHead>

      <div className="mt-4 flex flex-wrap items-center gap-1.5" role="group" aria-labelledby="quick-export">
        <span id="quick-export" className="mr-1 inline-flex items-center gap-1.5 text-[12px] text-mute">
          <RIcon name="download" size={14} />
          Quick export, Excel
        </span>
        {QUICK.map((x) => {
          const cur = periodOfInstant(x.g, s.now, s.offset);
          return (
            <a key={x.g} href={`/admin/reports/export/xlsx?${stateQuery(s, { gran: x.g, p: "current" })}`} download className="btn-line !h-8 !px-3" title={`${periodText(cur)}, ${s.tz === "UTC" ? "UTC" : "Asia/Dhaka"}`}>
              {x.label}
              <span className="sr-only">: {periodText(cur)}</span>
            </a>
          );
        })}
        <CustomExport />
      </div>

      <Suspense>
        <Controls datasets={visible} filters={filters} />
      </Suspense>

      <div className="mt-4 flex flex-wrap items-start gap-x-6 gap-y-2 rounded-[8px] bg-tile px-4 py-3 text-[13px]" role="status">
        <p className="min-w-0 flex-1 basis-[320px]">
          <span className="font-medium">{periodText(r.sel)}</span>
          {s.partial && <span className="text-mute">, in progress: data through {dayText(today)}</span>}
          <span className="block text-mute">
            {r.cmp ? `Compared with ${periodText(r.cmp)}${s.partial ? ", a full period" : ""}.` : "No comparison."} Trend: {r.buckets[0].name} to {r.sel.name}. {tzLine(s)}; weeks are ISO weeks starting Monday.
          </span>
        </p>
      </div>

      {r.datasets.map((d) => (
        <DatasetSection key={d.id} d={d} r={r} />
      ))}

      <p className="mt-10 text-[12px] text-faint">
        Built from {r.queries} grouped database queries for this view. Money is in USD; amounts in other currencies without a USD figure are left out and named under Revenue.
      </p>
    </div>
  );
}
