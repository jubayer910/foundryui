"use client";
import { useId, useState } from "react";
import { show } from "@/lib/reports/format";
import type { Unit } from "@/lib/reports/types";
import { RIcon } from "./icons";

export type TrendRow = { key: string; name: string; dates: string; tick: string; v: Record<string, number | string | null> };
export type TrendMetric = { id: string; label: string; unit: Unit };

/**
 * Bars per bucket for one metric at a time. Every bar is a button: hover or focus shows its value in the
 * readout above the chart, and its accessible name carries the period, dates and value. The selected period
 * is solid ink and the comparison period is outlined, each named in the legend, so colour is never the only cue.
 * "Show data table" lists the same numbers.
 */
export function Trend({ title, metrics, rows, selected, compare }: { title: string; metrics: TrendMetric[]; rows: TrendRow[]; selected: string; compare: string | null }) {
  const [mid, setMid] = useState(metrics[0]?.id ?? "");
  const [hover, setHover] = useState<string | null>(null);
  const [table, setTable] = useState(false);
  const tableId = useId();
  const m = metrics.find((x) => x.id === mid) ?? metrics[0];
  if (!m) return null;
  const vals = rows.map((r) => (typeof r.v[m.id] === "number" ? (r.v[m.id] as number) : null));
  const max = Math.max(0, ...vals.map((v) => v ?? 0));
  const min = Math.min(0, ...vals.map((v) => v ?? 0));
  const span = max - min || 1;
  const focus = rows.find((r) => r.key === hover) ?? rows.find((r) => r.key === selected) ?? rows[rows.length - 1];
  const fv = focus ? focus.v[m.id] : null;
  const every = rows.length > 26 ? 4 : rows.length > 13 ? 2 : 1;
  const empty = vals.every((v) => !v);

  return (
    <figure className="card min-w-0 p-4">
      <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-[13px] text-mute">{title}</span>
        {metrics.length > 1 && (
          <div className="flex flex-wrap gap-1" role="group" aria-label="Metric shown in the chart">
            {metrics.map((x) => (
              <button key={x.id} type="button" aria-pressed={x.id === m.id} onClick={() => setMid(x.id)} className="pill !h-6 !px-2.5 text-[12px]" data-on={x.id === m.id}>
                {x.label}
              </button>
            ))}
          </div>
        )}
        <button type="button" onClick={() => setTable((t) => !t)} aria-expanded={table} aria-controls={tableId} className="ml-auto inline-flex h-7 items-center gap-1.5 rounded-[6px] px-2 text-[12px] text-mute hover:bg-tile hover:text-ink">
          <RIcon name={table ? "chart-bar" : "table"} size={14} />
          {table ? "Hide data table" : "Show data table"}
        </button>
      </figcaption>

      <p className="mt-3 min-h-[20px] text-[13px] tabular-nums" aria-live="polite">
        {focus && (
          <>
            <span className="font-medium">{show(m.unit, fv)}</span>
            <span className="text-mute">
              {" "}
              {m.label.toLowerCase()} in {focus.name.includes(focus.dates) ? focus.name : `${focus.name} (${focus.dates})`}
              {focus.key === selected ? ", selected period" : focus.key === compare ? ", comparison period" : ""}
            </span>
          </>
        )}
      </p>

      <div className="relative mt-2">
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center gap-2 text-[11px] text-faint tabular-nums" aria-hidden="true">
          <span className="h-px flex-1 border-t border-dashed border-hair-2" />
          <span>{show(m.unit, max, { short: true })}</span>
        </div>
        <div className="flex h-[150px] items-end gap-[3px] pt-4" role="group" aria-label={`${m.label} per period, ${rows.length} periods`} onMouseLeave={() => setHover(null)}>
          {rows.map((r, i) => {
            const v = vals[i];
            const h = v === null ? 0 : Math.max(v === 0 ? 1.5 : 3, ((Math.max(0, v) - Math.max(0, min)) / span) * 130);
            const isSel = r.key === selected;
            const isCmp = r.key === compare;
            return (
              <button
                key={r.key}
                type="button"
                onMouseEnter={() => setHover(r.key)}
                onFocus={() => setHover(r.key)}
                onBlur={() => setHover(null)}
                aria-label={`${r.name} (${r.dates}): ${show(m.unit, r.v[m.id])}${isSel ? ", selected period" : isCmp ? ", comparison period" : ""}`}
                className="group relative flex h-full min-w-0 flex-1 items-end justify-center rounded-[3px] outline-offset-2"
              >
                <span
                  className={
                    "block w-full max-w-[44px] rounded-[3px] transition-colors " +
                    (isSel ? "bg-ink" : isCmp ? "bg-white shadow-[inset_0_0_0_1.5px_var(--color-ink)]" : v ? "bg-black/[0.16] group-hover:bg-black/30 group-focus-visible:bg-black/30" : "bg-chip")
                  }
                  style={{ height: `${h}px` }}
                />
              </button>
            );
          })}
        </div>
        <div className="mt-1.5 flex gap-[3px] overflow-hidden border-t border-hair-2 pt-1.5 text-[11px] text-faint tabular-nums" aria-hidden="true">
          {rows.map((r, i) => (
            <span key={r.key} className="min-w-0 flex-1 overflow-visible text-center whitespace-nowrap">
              {(rows.length - 1 - i) % every === 0 ? r.tick : ""}
            </span>
          ))}
        </div>
        {empty && <p className="absolute inset-x-0 top-[60px] text-center text-[13px] text-mute">No {m.label.toLowerCase()} in this range.</p>}
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-mute">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-[2px] bg-ink" aria-hidden="true" />
          Selected period
        </span>
        {compare && rows.some((r) => r.key === compare) && (
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-[2px] shadow-[inset_0_0_0_1.5px_var(--color-ink)]" aria-hidden="true" />
            Comparison period
          </span>
        )}
      </div>

      {table && (
        <div id={tableId} className="mt-3 max-h-[320px] overflow-auto rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-hair)]">
          <table className="w-full border-collapse text-left text-[13px]">
            <caption className="sr-only">{`${m.label} per period`}</caption>
            <thead className="sticky top-0 bg-white">
              <tr className="border-b border-hair text-[12px] text-faint">
                <th scope="col" className="px-3 py-1.5 font-normal">Period</th>
                <th scope="col" className="px-3 py-1.5 text-right font-normal">{m.label}</th>
              </tr>
            </thead>
            <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-hair">
              {[...rows].reverse().map((r) => (
                <tr key={r.key}>
                  <th scope="row" className="px-3 py-1.5 font-normal">
                    {r.name} <span className="text-faint">({r.dates})</span>
                  </th>
                  <td className="px-3 py-1.5 text-right tabular-nums">{show(m.unit, r.v[m.id])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </figure>
  );
}
