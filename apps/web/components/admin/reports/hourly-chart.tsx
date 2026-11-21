"use client";
import { useId, useState } from "react";
import { show } from "@/lib/reports/format";
import type { Unit } from "@/lib/reports/types";
import { RIcon } from "./icons";
import { Info } from "./info";

export type HourlySeriesView = { id: string; label: string; unit: Unit; def: string; cur: number[]; prev: number[] | null; total: number; prevTotal: number | null };

const hh = (h: number) => `${String(h).padStart(2, "0")}:00`;

/**
 * 24 bars for one day, one series at a time, in the report time zone. The comparison day is drawn as an outline
 * behind each bar. Hover or focus a bar for its value; "Show data table" lists every hour.
 */
export function HourlyChart({ series, day, cmp, tz }: { series: HourlySeriesView[]; day: string; cmp: string | null; tz: string }) {
  const [sid, setSid] = useState(series[0]?.id ?? "");
  const [hover, setHover] = useState<number | null>(null);
  const [table, setTable] = useState(false);
  const tableId = useId();
  const m = series.find((x) => x.id === sid) ?? series[0];
  if (!m) return null;
  const max = Math.max(1, ...m.cur, ...(m.prev ?? []));
  const peak = m.cur.indexOf(Math.max(...m.cur));
  const focus = hover ?? (m.total ? peak : null);

  return (
    <figure className="card p-4">
      <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="inline-flex items-center gap-0.5 text-[13px] font-medium">
          By hour
          <Info label={`${m.label} by hour`} text={`${m.def} Hours are in ${tz}.${cmp ? ` The outline is ${cmp}.` : ""}`} />
        </span>
        {series.length > 1 && (
          <div className="flex flex-wrap gap-1" role="group" aria-label="Series shown by hour">
            {series.map((x) => (
              <button key={x.id} type="button" aria-pressed={x.id === m.id} onClick={() => setSid(x.id)} className="pill !h-6 !px-2.5 text-[12px]" data-on={x.id === m.id}>
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
        {focus === null ? (
          <span className="text-mute">No {m.label.toLowerCase()} on {day}.</span>
        ) : (
          <>
            <span className="font-medium">{show(m.unit, m.cur[focus])}</span>
            <span className="text-mute">
              {" "}
              {m.label.toLowerCase()} at {hh(focus)}
              {m.prev ? `, ${show(m.unit, m.prev[focus])} on ${cmp}` : ""}
              {hover === null ? ", the busiest hour" : ""}
            </span>
          </>
        )}
      </p>

      <div className="mt-2 flex h-[120px] items-end gap-[3px]" role="group" aria-label={`${m.label} by hour on ${day}`} onMouseLeave={() => setHover(null)}>
        {m.cur.map((v, i) => {
          const h = v === 0 ? 1.5 : Math.max(3, (v / max) * 116);
          const ph = m.prev ? (m.prev[i] / max) * 116 : 0;
          return (
            <button
              key={i}
              type="button"
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              aria-label={`${hh(i)}: ${show(m.unit, v)}${m.prev ? `, ${show(m.unit, m.prev[i])} on ${cmp}` : ""}`}
              className="group relative flex h-full min-w-0 flex-1 items-end justify-center rounded-[3px] outline-offset-2"
            >
              {ph > 0 && <span className="absolute bottom-0 w-full max-w-[28px] rounded-[3px] shadow-[inset_0_0_0_1px_rgb(0_0_0/0.28)]" style={{ height: `${ph}px` }} aria-hidden="true" />}
              <span
                className={"relative block w-full max-w-[28px] rounded-[3px] transition-colors duration-150 " + (i === focus ? "bg-ink" : v ? "bg-black/[0.18] group-hover:bg-black/30" : "bg-chip")}
                style={{ height: `${h}px` }}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-1.5 flex gap-[3px] border-t border-hair-2 pt-1.5 text-[11px] text-faint tabular-nums" aria-hidden="true">
        {m.cur.map((_, i) => (
          <span key={i} className="min-w-0 flex-1 text-center">
            {i % 6 === 0 ? hh(i) : ""}
          </span>
        ))}
      </div>
      <p className="mt-2 text-[12px] text-mute tabular-nums">
        Day total {show(m.unit, m.total)}
        {m.prevTotal !== null && cmp ? `, ${show(m.unit, m.prevTotal)} on ${cmp}` : ""}
      </p>

      {table && (
        <div id={tableId} className="mt-3 max-h-[320px] overflow-auto rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-hair)]">
          <table className="w-full border-collapse text-left text-[13px]">
            <caption className="sr-only">{`${m.label} by hour on ${day}`}</caption>
            <thead className="sticky top-0 bg-white">
              <tr className="border-b border-hair text-[12px] text-faint">
                <th scope="col" className="px-3 py-1.5 font-normal">Hour</th>
                <th scope="col" className="px-3 py-1.5 text-right font-normal">{day}</th>
                {m.prev && <th scope="col" className="px-3 py-1.5 text-right font-normal">{cmp}</th>}
              </tr>
            </thead>
            <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-hair">
              {m.cur.map((v, i) => (
                <tr key={i}>
                  <th scope="row" className="px-3 py-1.5 font-normal tabular-nums">{hh(i)}</th>
                  <td className="px-3 py-1.5 text-right tabular-nums">{show(m.unit, v)}</td>
                  {m.prev && <td className="px-3 py-1.5 text-right text-mute tabular-nums">{show(m.unit, m.prev[i])}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </figure>
  );
}
