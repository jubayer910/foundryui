import Link from "next/link";
import { changeOf, headOf, show } from "@/lib/reports/format";
import { dayText, stateQuery, type Period, type ReportState } from "@/lib/reports/period";
import type { Breakdown, DatasetResult, MetricDef, Report } from "@/lib/reports/types";
import { RIcon } from "./icons";
import { Info } from "./info";
import { Trend } from "./trend";

/** Server-rendered parts of /admin/reports. Client islands: Info (definitions) and Trend (chart). */

const GOOD = "text-[#17663a]";
const BAD = "text-[#9b1c1c]";

export const periodText = (p: Period) => `${p.name} (${p.dates})`;

/** Change line: arrow icon and signed text, coloured by whether the change is good; full sentence for screen readers. */
export function ChangeText({ m, cur, prev, versus, className = "" }: { m: Pick<MetricDef, "unit" | "invert">; cur: unknown; prev: unknown; versus: string; className?: string }) {
  const c = changeOf(m, cur, prev, versus);
  if (!c) return <span className={"text-[12px] text-faint " + className}>No comparison</span>;
  const tone = c.good === null ? "text-mute" : c.good ? GOOD : BAD;
  return (
    <span className={"inline-flex items-center gap-1 text-[12px] tabular-nums " + tone + " " + className} title={c.said}>
      <RIcon name={c.dir === "up" ? "trending-up" : c.dir === "down" ? "trending-down" : "minus"} size={14} />
      <span aria-hidden="true">{c.text}</span>
      <span className="sr-only">{c.said}</span>
    </span>
  );
}

function Kpi({ m, d, r }: { m: MetricDef; d: DatasetResult; r: Report }) {
  const versus = r.cmp ? r.cmp.name : "";
  return (
    <div className="card min-w-0 p-4">
      <div className="flex items-start gap-1">
        <p className="min-w-0 flex-1 text-[13px] text-mute">
          {m.label}
          {m.unit === "usd" && <span className="text-faint"> (USD)</span>}
        </p>
        <Info label={m.label} text={m.def} align="right" />
      </div>
      <p className="mt-1 text-[22px] font-medium tracking-[-0.02em] tabular-nums">{show(m.unit, d.selected[m.id])}</p>
      <div className="mt-1 min-h-[18px]">
        {r.cmp ? <ChangeText m={m} cur={d.selected[m.id]} prev={d.compare?.[m.id]} versus={versus} /> : <span className="text-[12px] text-faint">No comparison</span>}
      </div>
      {r.cmp && (
        <p className="mt-0.5 text-[12px] text-faint tabular-nums">
          {show(m.unit, d.compare?.[m.id])} in {r.cmp.name}
          {r.state.partial && m.total !== "last" ? ", a full period" : ""}
        </p>
      )}
    </div>
  );
}

const totalNote: Record<MetricDef["total"], string> = {
  sum: "Sum of the periods",
  last: "Level at the end of the range",
  range: "Counted once over the whole range",
  derived: "Computed from the range totals",
  none: "Not summed",
};

/** One row per period, newest first, with a totals row. The selected and comparison rows are tagged in words. */
export function PeriodTable({ d, r }: { d: DatasetResult; r: Report }) {
  const cols = d.metrics;
  const rows = [...d.rows].reverse();
  const rangeText = `${r.buckets[0].name} to ${r.sel.name}`;
  return (
    <div className="card relative overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left text-[13px]">
        <caption className="sr-only">
          {d.title} per {r.state.gran}, {rangeText}, newest first
        </caption>
        <thead>
          <tr className="border-b border-hair align-bottom text-[12px] text-faint">
            <th scope="col" className="sticky left-0 z-[1] bg-white px-3 py-2 font-normal whitespace-nowrap">
              Period
            </th>
            {cols.map((m) => (
              <th key={m.id} scope="col" className={"px-3 py-2 font-normal " + (m.unit === "text" ? "text-left" : "text-right")}>
                <span className="inline-flex items-center gap-0.5 whitespace-nowrap">
                  {headOf(m)}
                  <Info label={m.label} text={m.def} align="right" />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr]:border-b [&>tr]:border-hair">
          {rows.map((row) => {
            const isSel = row.period.key === r.sel.key;
            const isCmp = r.cmp?.key === row.period.key;
            return (
              <tr key={row.period.key} className={isSel ? "bg-tile" : ""} aria-current={isSel ? "true" : undefined}>
                <th scope="row" className={"sticky left-0 z-[1] px-3 py-2 text-left font-normal whitespace-nowrap " + (isSel ? "bg-tile" : "bg-white")}>
                  <span className="block">
                    {row.period.name}
                    {isSel && <span className="ml-1.5 rounded-full bg-ink px-1.5 py-px text-[11px] text-white">Selected</span>}
                    {isCmp && <span className="ml-1.5 rounded-full px-1.5 py-px text-[11px] text-ink shadow-[inset_0_0_0_1px_var(--color-ink)]">Comparison</span>}
                  </span>
                  <span className="block text-[12px] text-faint">{row.period.dates}</span>
                </th>
                {cols.map((m) => (
                  <td key={m.id} className={"px-3 py-2 tabular-nums " + (m.unit === "text" ? "max-w-[220px] truncate text-left" : "text-right whitespace-nowrap")} title={m.unit === "text" ? String(row.v[m.id] ?? "") : undefined}>
                    {show(m.unit, row.v[m.id])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="text-[13px]">
            <th scope="row" className="sticky left-0 z-[1] bg-white px-3 py-2 text-left font-medium whitespace-nowrap">
              Range total
              <span className="block text-[12px] font-normal text-faint">{rangeText}</span>
            </th>
            {cols.map((m) => (
              <td key={m.id} className={"px-3 py-2 align-top font-medium tabular-nums " + (m.unit === "text" ? "text-left" : "text-right whitespace-nowrap")}>
                {show(m.unit, d.totals[m.id])}
                <span className="block text-[11px] font-normal text-faint">{m.total === "none" ? "" : totalNote[m.total]}</span>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export function BreakdownCard({ b, r }: { b: Breakdown; r: Report }) {
  const hasPrev = b.scope === "selected" && !!r.cmp;
  return (
    <div className="card min-w-0 px-4 py-3">
      <div className="flex items-start gap-1">
        <h4 className="min-w-0 flex-1 text-[13px] text-mute">{b.title}</h4>
        {b.def && <Info label={b.title} text={b.def} align="right" />}
      </div>
      <p className="text-[12px] text-faint">{b.scope === "now" ? "Snapshot as of now" : periodText(r.sel)}</p>
      {b.rows.length ? (
        <table className="mt-2 w-full border-collapse text-[13px]">
          <thead>
            <tr className="text-[12px] text-faint">
              <th scope="col" className="py-1 text-left font-normal">
                {b.head}
              </th>
              <th scope="col" className="py-1 pl-2 text-right font-normal whitespace-nowrap">
                {r.sel.tick}
                {b.unit === "usd" ? " (USD)" : ""}
              </th>
              {hasPrev && (
                <th scope="col" className="py-1 pl-2 text-right font-normal whitespace-nowrap">
                  {r.cmp!.tick}
                </th>
              )}
              {hasPrev && (
                <th scope="col" className="py-1 pl-2 text-right font-normal">
                  Change
                </th>
              )}
            </tr>
          </thead>
          <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-hair">
            {b.rows.map((x, i) => (
              <tr key={x.label + i}>
                <th scope="row" className="max-w-0 truncate py-1.5 text-left font-normal" title={x.label}>
                  {x.href ? (
                    <Link href={x.href} target="_blank" className="hover:underline">
                      {x.label}
                    </Link>
                  ) : (
                    x.label
                  )}
                </th>
                <td className="w-[1%] py-1.5 pl-3 text-right whitespace-nowrap tabular-nums">{show(b.unit, x.cur)}</td>
                {hasPrev && <td className="w-[1%] py-1.5 pl-3 text-right whitespace-nowrap text-mute tabular-nums">{show(b.unit, x.prev)}</td>}
                {hasPrev && (
                  <td className="w-[1%] py-1.5 pl-3 text-right whitespace-nowrap">
                    <ChangeText m={{ unit: b.unit }} cur={x.cur} prev={x.prev} versus={r.cmp!.name} className="justify-end" />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="py-3 text-[13px] text-mute">{b.empty}</p>
      )}
    </div>
  );
}

export function Notes({ d }: { d: DatasetResult }) {
  if (!d.notes.length) return null;
  return (
    <ul className="mt-3 flex flex-col gap-1 text-[12px] text-mute">
      {d.notes.map((n) => (
        <li key={n} className="flex items-start gap-1.5">
          <RIcon name="alert-circle" size={14} className="mt-px shrink-0 text-faint" />
          <span>{n}</span>
        </li>
      ))}
    </ul>
  );
}

export function Definitions({ d }: { d: DatasetResult }) {
  return (
    <details className="group mt-3 rounded-[8px] px-1 text-[13px]">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-[6px] px-2 py-1 text-[12px] text-mute hover:bg-tile hover:text-ink [&::-webkit-details-marker]:hidden">
        <RIcon name="info-circle" size={14} />
        Definitions for {d.title.toLowerCase()}
        <RIcon name="chevron-down" size={13} className="transition-transform group-open:rotate-180" />
      </summary>
      <dl className="mt-2 grid gap-x-6 gap-y-2 px-2 sm:grid-cols-2">
        {d.metrics.map((m) => (
          <div key={m.id}>
            <dt className="text-[12px] font-medium">{headOf(m)}</dt>
            <dd className="text-[12px] text-mute">{m.def}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

/** One dataset: header with CSV export, KPIs, trend, period table, breakdowns, notes and definitions. */
export function DatasetSection({ d, r }: { d: DatasetResult; r: Report }) {
  const s = r.state;
  const csv = `/admin/reports/export/csv?${stateQuery(s)}&dataset=${d.id}`;
  const kpis = d.metrics.filter((m) => m.kpi);
  const chart = d.metrics.filter((m) => m.chart);
  const headId = `ds-${d.id}`;
  return (
    <section className="mt-10 scroll-mt-48" aria-labelledby={headId} id={d.id}>
      <div className="mb-3 flex flex-wrap items-start gap-x-3 gap-y-2 border-b border-hair pb-2">
        <div className="min-w-0 flex-1 basis-[260px]">
          <h2 id={headId} className="text-[15px] font-medium tracking-[-0.01em]">
            {d.title}
          </h2>
          <p className="text-[13px] text-mute">{d.intro}</p>
          {d.filters.length > 0 && (
            <p className="mt-1 flex flex-wrap gap-1">
              {d.filters.map((f) => (
                <span key={f.label} className="inline-flex h-5 items-center gap-1 rounded-full bg-chip px-2 text-[12px]">
                  <RIcon name="filter" size={12} />
                  {f.label}: {f.value}
                </span>
              ))}
            </p>
          )}
        </div>
        {!d.error && (
          <a href={csv} download className="btn-line !h-7 !px-3 text-[12px]">
            <RIcon name="file-type-csv" size={14} />
            CSV<span className="sr-only"> of {d.title}, one row per {s.gran}</span>
          </a>
        )}
      </div>
      {d.error ? (
        <p role="alert" className="card flex items-start gap-2 p-4 text-[13px] text-[#9b1c1c]">
          <RIcon name="alert-circle" size={16} className="mt-px shrink-0" />
          {d.error}
        </p>
      ) : !d.since ? (
        <div className="card p-6 text-center">
          <p className="text-[13px] font-medium">No data yet</p>
          <p className="mx-auto mt-1 max-w-[520px] text-[13px] text-mute">{d.notes[0] ?? "Nothing has been recorded for this dataset yet."}</p>
          {d.notes.length > 1 && <p className="mx-auto mt-1 max-w-[520px] text-[12px] text-faint">{d.notes.slice(1).join(" ")}</p>}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {kpis.map((m) => (
              <Kpi key={m.id} m={m} d={d} r={r} />
            ))}
          </div>
          {chart.length > 0 && (
            <div className="mt-3">
              <Trend
                title={`Per ${s.gran}, ${r.buckets[0].name} to ${r.sel.name}`}
                metrics={chart.map((m) => ({ id: m.id, label: m.label, unit: m.unit }))}
                rows={d.rows.map((x) => ({ key: x.period.key, name: x.period.name, dates: x.period.dates, tick: x.period.tick, v: x.v }))}
                selected={r.sel.key}
                compare={r.cmp?.key ?? null}
              />
            </div>
          )}
          <div className="mt-3">
            <PeriodTable d={d} r={r} />
          </div>
          {d.breakdowns.length > 0 && (
            <div className="mt-3 grid gap-3 lg:grid-cols-2">
              {d.breakdowns.map((b) => (
                <BreakdownCard key={b.id} b={b} r={r} />
              ))}
            </div>
          )}
          <Notes d={d} />
          {d.since && <p className="mt-1 text-[12px] text-faint">First data: {dayText(d.since)}.</p>}
          <Definitions d={d} />
        </>
      )}
    </section>
  );
}

export const summaryLine = (s: ReportState, r: Report) =>
  `${periodText(r.sel)}${r.cmp ? `, compared with ${periodText(r.cmp)}` : ", no comparison"}.`;
