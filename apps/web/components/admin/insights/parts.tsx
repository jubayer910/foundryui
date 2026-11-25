"use client";
import { useId, useMemo, useRef, useState, type ReactNode } from "react";
import { changeOf, show } from "@/lib/reports/format";
import type { Unit } from "@/lib/reports/types";
import { AIcon, type AdminIconName } from "../admin-icons";
import { Info } from "../reports/info";
import { RIcon } from "../reports/icons";
import { Handle, useFocusTrap, useSheetLock, useSwipeDown } from "../sheet";

/**
 * Building blocks for Insights > Traffic and Behaviour: KPI tiles, ranked lists with tabs, a sparkline, the
 * weekday by hour heat map and the detail panel. All client-side; the data arrives once with the page.
 */

const nf = new Intl.NumberFormat("en-US");
export const fmt = (n: number) => nf.format(Math.round(n));
export const fmtPct = (x: number | null) => (x === null || !Number.isFinite(x) ? "–" : x === 0 ? "0%" : x < 10 ? x.toFixed(1).replace(/\.0$/, "") + "%" : Math.round(x) + "%");
export const share = (a: number, b: number) => (b > 0 ? (a / b) * 100 : null);

/* ------------------------------------------------------------------ labels */

let regionNames: Intl.DisplayNames | null = null;
export function countryName(code: string) {
  if (code === "XX") return "Unknown";
  if (code === "T1") return "Tor network";
  try {
    regionNames ??= new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code) ?? code;
  } catch {
    return code;
  }
}
/** Regional-indicator flag for a two-letter code; nothing for unknown codes. */
export const flag = (code: string) => (/^[A-Z]{2}$/.test(code) && code !== "XX" ? String.fromCodePoint(...[...code].map((c) => 0x1f1a5 + c.charCodeAt(0))) : "");
export const sourceName = (s: string) => (s === "direct" ? "Direct or unknown" : s);
export const deviceName: Record<string, string> = { desktop: "Desktop", mobile: "Mobile", tablet: "Tablet" };
export const deviceIcon: Record<string, AdminIconName> = { desktop: "device-desktop", mobile: "device-mobile", tablet: "device-tablet" };

/* ------------------------------------------------------------------ change */

const GOOD = "text-[#17663a]";
const BAD = "text-[#9b1c1c]";

export function Change({ unit, cur, prev, versus, invert, compact = true }: { unit: Unit; cur: number | null; prev: number | null; versus: string | null; invert?: boolean; compact?: boolean }) {
  if (!versus || prev === null || cur === null) return null;
  const c = changeOf({ unit, invert }, cur, prev, versus);
  if (!c) return null;
  const tone = c.good === null ? "text-mute" : c.good ? GOOD : BAD;
  const short = c.dir === "flat" ? "0%" : unit === "pct" ? c.text : c.pct === null ? "New" : `${c.dir === "up" ? "+" : "−"}${Math.abs(c.pct) < 10 && c.pct !== 0 ? Math.abs(c.pct).toFixed(1) : Math.round(Math.abs(c.pct))}%`;
  return (
    <span className={"inline-flex items-center gap-0.5 text-[12px] whitespace-nowrap tabular-nums " + tone} title={c.said}>
      <RIcon name={c.dir === "up" ? "trending-up" : c.dir === "down" ? "trending-down" : "minus"} size={14} />
      <span aria-hidden="true">{compact ? short : c.text}</span>
      <span className="sr-only">{c.said}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ KPI */

export type Tile = { id: string; label: string; info: string; unit: Unit; cur: number | null; prev: number | null; invert?: boolean };

export function Tiles({ tiles, versus, cols = "lg:grid-cols-6" }: { tiles: Tile[]; versus: string | null; cols?: string }) {
  return (
    <div className={"mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 " + cols}>
      {tiles.map((t) => (
        <div key={t.id} className="card min-w-0 p-3 md:p-4">
          <p className="flex min-w-0 items-center gap-0.5 text-[13px] text-mute">
            <span className="truncate">{t.label}</span>
            <Info label={t.label} text={t.info + (versus && t.prev !== null ? ` ${versus}: ${show(t.unit, t.prev)}.` : "")} />
          </p>
          <div className="mt-1 flex flex-col items-start gap-0.5 md:flex-row md:flex-wrap md:items-baseline md:gap-x-2 md:gap-y-0">
            <p className="text-[clamp(17px,5.3vw,22px)] leading-[28px] font-medium tracking-[-0.02em] tabular-nums md:text-[22px] md:leading-[30px]">{show(t.unit, t.cur)}</p>
            <Change unit={t.unit} cur={t.cur} prev={t.prev} versus={versus} invert={t.invert} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ segmented */

export function Seg<T extends string>({ value, options, onChange, label, className = "" }: { value: T; options: { id: T; label: string; count?: number }[]; onChange: (v: T) => void; label: string; className?: string }) {
  return (
    <div role="tablist" aria-label={label} className={"-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden " + className}>
      {options.map((o) => (
        <button key={o.id} type="button" role="tab" aria-selected={o.id === value} onClick={() => onChange(o.id)} className="pill shrink-0 !h-7 !px-2.5 text-[12px] max-md:!h-9 max-md:!px-3.5 max-md:text-[13px]" data-on={o.id === value}>
          {o.label}
          {o.count !== undefined && <span className="ml-1 tabular-nums opacity-55">{fmt(o.count)}</span>}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ ranked list */

export type RankRow = { key: string; label: string; lead?: ReactNode; sub?: string; cur: number; prev: number | null; aside?: string };
export type RankTab = { id: string; label: string; rows: RankRow[]; unit?: string; empty: string; info?: string; total?: number; /** rows open the detail panel (default true when the card has onOpen) */ openable?: boolean };

/**
 * A card of ranked rows behind tabs. Each row: proportional bar, value, share of the tab total and the change.
 * Rows open a detail panel when `onOpen` is given. Long lists show the top 8 with "Show all", which adds a
 * search box.
 */
export function RankCard({ title, info, tabs, onOpen, versus, action, initial }: { title: string; info?: string; tabs: RankTab[]; onOpen?: (tab: string, key: string) => void; versus: string | null; action?: ReactNode; initial?: string }) {
  const [tid, setTid] = useState(initial ?? tabs[0]?.id);
  const [all, setAll] = useState(false);
  const [q, setQ] = useState("");
  const tab = tabs.find((t) => t.id === tid) ?? tabs[0];
  const total = tab?.total ?? tab?.rows.reduce((s, r) => s + r.cur, 0) ?? 0;
  const max = Math.max(1, ...(tab?.rows.map((r) => r.cur) ?? []));
  const rows = useMemo(() => {
    const list = tab?.rows ?? [];
    const f = q.trim().toLowerCase();
    const hit = f ? list.filter((r) => r.label.toLowerCase().includes(f) || r.key.toLowerCase().includes(f)) : list;
    return all || f ? hit.slice(0, 200) : hit.slice(0, 8);
  }, [tab, all, q]);
  if (!tab) return null;
  return (
    <section className="card flex min-w-0 flex-col p-4">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">{title}</h2>
        {(tab.info ?? info) && <Info label={title} text={(tab.info ?? info)!} />}
        {action && <div className="ml-auto">{action}</div>}
      </div>
      {tabs.length > 1 && (
        <Seg
          className="mt-3"
          label={`${title} view`}
          value={tab.id}
          options={tabs.map((t) => ({ id: t.id, label: t.label }))}
          onChange={(v) => {
            setTid(v);
            setAll(false);
            setQ("");
          }}
        />
      )}
      {all && tab.rows.length > 8 && (
        <label className="mt-3 flex h-9 items-center gap-2 rounded-[8px] px-2.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] focus-within:shadow-[inset_0_0_0_1px_var(--color-ink)]">
          <AIcon name="search" size={15} className="text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Search ${tab.label.toLowerCase()}`} className="min-w-0 flex-1 bg-transparent text-[13px] outline-none max-md:text-[16px]" />
        </label>
      )}
      <div className="mt-3 flex items-center gap-3 px-2 text-[12px] text-faint">
        <span className="flex-1">{tab.label}</span>
        <span>{tab.unit ?? "Visits"}</span>
        <span className="w-11 text-right">Share</span>
      </div>
      {rows.length ? (
        <ol className={"mt-1 flex flex-col gap-0.5 text-[13px] " + (all ? "max-h-[440px] overflow-y-auto overscroll-contain" : "")}>
          {rows.map((r) => {
            const inner = (
              <>
                <span className="absolute inset-y-0.5 left-0 rounded-[5px] bg-wash transition-[width] duration-300" style={{ width: `${Math.max(1.5, (r.cur / max) * 100)}%` }} aria-hidden="true" />
                {r.lead && <span className="relative flex w-5 shrink-0 justify-center text-[15px] leading-none">{r.lead}</span>}
                <span className="relative min-w-0 flex-1 truncate text-left">
                  {r.label}
                  {r.sub && <span className="text-faint"> {r.sub}</span>}
                </span>
                <span className="relative hidden md:inline">
                  <Change unit="count" cur={r.cur} prev={r.prev} versus={versus} />
                </span>
                <span className="relative min-w-[3ch] text-right font-medium tabular-nums">{r.aside ?? fmt(r.cur)}</span>
                <span className="relative w-11 text-right text-[12px] text-faint tabular-nums">{fmtPct(share(r.cur, total))}</span>
              </>
            );
            const cls = "group relative flex min-h-8 w-full items-center gap-2.5 px-2 max-md:min-h-10";
            return (
              <li key={r.key}>
                {onOpen && tab.openable !== false ? (
                  <button type="button" onClick={() => onOpen(tab.id, r.key)} className={cls + " rounded-[6px] hover:bg-tile"} aria-label={`${r.label}: ${fmt(r.cur)}. Open details`}>
                    {inner}
                    <AIcon name="chevron-right" size={14} className="relative -mr-1 text-faint opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100" />
                  </button>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            );
          })}
        </ol>
      ) : (
        <p className="py-6 text-center text-[13px] text-mute">{q ? "Nothing matches that search." : tab.empty}</p>
      )}
      {tab.rows.length > 8 && (
        <button
          type="button"
          onClick={() => {
            setAll((a) => !a);
            setQ("");
          }}
          className="tap mt-2 inline-flex h-8 items-center gap-1 self-start rounded-[6px] px-2 text-[12px] text-mute hover:bg-tile hover:text-ink max-md:h-10 max-md:text-[13px]"
          aria-expanded={all}
        >
          {all ? "Show top 8" : `Show all ${fmt(tab.rows.length)}`}
          <AIcon name="chevron-down" size={14} className={all ? "rotate-180" : ""} />
        </button>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ sparkline */

export function Spark({ values, labels, unit = "count", height = 56 }: { values: number[]; labels: string[]; unit?: Unit; height?: number }) {
  const [hover, setHover] = useState<number | null>(null);
  const w = 320;
  const max = Math.max(1, ...values);
  const step = values.length > 1 ? w / (values.length - 1) : w;
  const pts = values.map((v, i) => [i * step, height - 4 - (v / max) * (height - 10)] as const);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const i = hover ?? values.length - 1;
  return (
    <div>
      <p className="text-[12px] text-mute tabular-nums" aria-live="polite">
        <span className="font-medium text-ink">{show(unit, values[i] ?? 0)}</span> in {labels[i]}
      </p>
      <svg
        viewBox={`0 0 ${w} ${height}`}
        preserveAspectRatio="none"
        className="mt-1 h-14 w-full touch-pan-y overflow-visible"
        role="img"
        aria-label={`Trend: ${values.map((v, j) => `${labels[j]} ${show(unit, v)}`).join(", ")}`}
        onPointerMove={(e) => {
          const b = e.currentTarget.getBoundingClientRect();
          setHover(Math.min(values.length - 1, Math.max(0, Math.round(((e.clientX - b.left) / b.width) * (values.length - 1)))));
        }}
        onPointerLeave={() => setHover(null)}
      >
        <path d={`${line} L${w} ${height} L0 ${height} Z`} fill="var(--color-ink)" opacity="0.06" />
        <path d={line} fill="none" stroke="var(--color-ink)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        {pts[i] && <line x1={pts[i][0]} x2={pts[i][0]} y1={0} y2={height} stroke="var(--color-hair-2)" vectorEffect="non-scaling-stroke" />}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ heat map */

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hh = (h: number) => `${String(h).padStart(2, "0")}:00`;

/** Page views by weekday and hour. Hover or focus a cell to read it; the busiest slot is named under the grid. */
export function Heatmap({ heat, tz }: { heat: number[][]; tz: string }) {
  const [at, setAt] = useState<[number, number] | null>(null);
  const [table, setTable] = useState(false);
  const tableId = useId();
  const max = Math.max(0, ...heat.flat());
  const total = heat.flat().reduce((a, b) => a + b, 0);
  let best: [number, number] = [0, 0];
  heat.forEach((r, d) => r.forEach((v, h) => v > heat[best[0]][best[1]] && (best = [d, h])));
  const byHour = Array.from({ length: 24 }, (_, h) => heat.reduce((s, r) => s + r[h], 0));
  const byDay = heat.map((r) => r.reduce((a, b) => a + b, 0));
  const cell = at ?? null;
  const grid = useRef<HTMLDivElement>(null);
  return (
    <section className="card min-w-0 p-4">
      <div className="flex items-center gap-2">
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">When people visit</h2>
        <Info label="When people visit" text={`Page views by weekday and hour in ${tz}, for the selected period. Darker means busier. Hours come from the behaviour counters, so they start when those did.`} />
        <button type="button" onClick={() => setTable((t) => !t)} aria-expanded={table} aria-controls={tableId} className="tap ml-auto inline-flex h-7 items-center gap-1.5 rounded-[6px] px-2 text-[12px] text-mute hover:bg-tile hover:text-ink">
          <RIcon name={table ? "chart-bar" : "table"} size={14} />
          {table ? "Grid" : "Table"}
        </button>
      </div>
      <p className="mt-2 min-h-[20px] text-[13px] text-mute tabular-nums" aria-live="polite">
        {total === 0 ? (
          "No hourly data in this period yet."
        ) : cell ? (
          <>
            <span className="font-medium text-ink">{fmt(heat[cell[0]][cell[1]])}</span> views on {DAYS[cell[0]]}, {hh(cell[1])} to {hh((cell[1] + 1) % 24)}
          </>
        ) : (
          <>
            Busiest: <span className="font-medium text-ink">{DAYS[best[0]]} {hh(best[1])}</span>, {fmt(heat[best[0]][best[1]])} views
          </>
        )}
      </p>
      {table ? (
        <div id={tableId} className="mt-3 max-h-[300px] overflow-auto rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-hair)]">
          <table className="w-full text-left text-[13px]">
            <caption className="sr-only">Page views by weekday</caption>
            <thead className="sticky top-0 bg-white text-[12px] text-faint">
              <tr className="border-b border-hair">
                <th scope="col" className="px-3 py-1.5 font-normal">Day</th>
                <th scope="col" className="px-3 py-1.5 text-right font-normal">Views</th>
                <th scope="col" className="px-3 py-1.5 text-right font-normal">Busiest hour</th>
              </tr>
            </thead>
            <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-hair">
              {heat.map((r, d) => {
                const h = r.indexOf(Math.max(...r));
                return (
                  <tr key={d}>
                    <th scope="row" className="px-3 py-1.5 font-normal">{DAYS[d]}</th>
                    <td className="px-3 py-1.5 text-right tabular-nums">{fmt(byDay[d])}</td>
                    <td className="px-3 py-1.5 text-right tabular-nums">{byDay[d] ? hh(h) : "–"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-3" onMouseLeave={() => setAt(null)}>
          <div ref={grid} className="grid grid-cols-[30px_repeat(24,minmax(0,1fr))] gap-[2px]" role="grid" aria-label={`Page views by weekday and hour, ${tz}`}>
            {heat.map((r, d) => (
              <div key={d} role="row" className="contents">
                <span role="rowheader" className="pr-1 text-[12px] leading-[14px] text-faint">{DAYS[d]}</span>
                {r.map((v, h) => (
                  <span
                    key={h}
                    role="gridcell"
                    tabIndex={d === best[0] && h === best[1] ? 0 : -1}
                    aria-label={`${DAYS[d]} ${hh(h)}: ${fmt(v)} views`}
                    onMouseEnter={() => setAt([d, h])}
                    onFocus={() => setAt([d, h])}
                    onKeyDown={(e) => {
                      const mv: Record<string, [number, number]> = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] };
                      const m = mv[e.key];
                      if (!m) return;
                      e.preventDefault();
                      const nd = (d + m[0] + 7) % 7;
                      const nh = (h + m[1] + 24) % 24;
                      (grid.current?.querySelector(`[data-c="${nd}-${nh}"]`) as HTMLElement | null)?.focus();
                    }}
                    data-c={`${d}-${h}`}
                    className={"aspect-square min-h-[10px] rounded-[2px] outline-offset-1 " + (cell && cell[0] === d && cell[1] === h ? "ring-1 ring-ink" : "")}
                    style={{ background: v ? `rgb(11 11 11 / ${0.08 + 0.82 * (v / (max || 1))})` : "var(--color-tile)" }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-[30px_repeat(24,minmax(0,1fr))] gap-[2px] text-[12px] text-faint tabular-nums md:text-[11px]" aria-hidden="true">
            <span />
            {byHour.map((_, h) => (
              <span key={h} className="text-center">{h % 6 === 0 ? String(h).padStart(2, "0") : ""}</span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-[12px] text-faint" aria-hidden="true">
            Less
            <span className="flex gap-[2px]">
              {[0.08, 0.28, 0.5, 0.7, 0.9].map((o) => (
                <span key={o} className="size-2.5 rounded-[2px]" style={{ background: `rgb(11 11 11 / ${o})` }} />
              ))}
            </span>
            More
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ stacked share bar */

export function ShareBar({ parts, label }: { parts: { key: string; label: string; n: number }[]; label: string }) {
  const total = parts.reduce((s, p) => s + p.n, 0);
  const tones = ["bg-ink", "bg-black/45", "bg-black/20", "bg-black/10"];
  if (!total) return <p className="py-3 text-[13px] text-mute">No data in this period yet.</p>;
  return (
    <div>
      <div className="flex h-2.5 overflow-hidden rounded-full bg-tile" role="img" aria-label={`${label}: ${parts.map((p) => `${p.label} ${fmtPct(share(p.n, total))}`).join(", ")}`}>
        {parts.map((p, i) => (
          <span key={p.key} className={tones[Math.min(i, 3)] + (i ? " border-l-2 border-white" : "")} style={{ width: `${(p.n / total) * 100}%` }} />
        ))}
      </div>
      <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-mute">
        {parts.map((p, i) => (
          <li key={p.key} className="inline-flex items-center gap-1.5">
            <span className={"size-2.5 rounded-[2px] " + tones[Math.min(i, 3)]} aria-hidden="true" />
            {p.label}
            <span className="text-ink tabular-nums">{fmtPct(share(p.n, total))}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ panel */

/**
 * Detail panel opened from a row. Right-side drawer from md up, bottom sheet on phones (swipe down closes).
 * Focus moves in and stays inside; Escape closes and focus returns to the row that opened it.
 */
export function Panel({ title, sub, onClose, children, actions }: { title: string; sub?: string; onClose: () => void; children: ReactNode; actions?: ReactNode }) {
  const panel = useRef<HTMLDivElement>(null);
  useSheetLock(true);
  useFocusTrap(panel, true, onClose, "panel");
  const swipe = useSwipeDown(panel, onClose);
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="admin-fade absolute inset-0 bg-black/30 md:bg-black/20" onClick={onClose} aria-hidden="true" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="admin-drawer absolute inset-x-0 bottom-0 flex h-[min(88dvh,calc(100dvh-env(safe-area-inset-top)-16px))] flex-col rounded-t-[14px] bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_12px_40px_rgb(0_0_0/0.14)] outline-none md:inset-y-0 md:right-0 md:left-auto md:h-auto md:w-[560px] md:max-w-full md:rounded-none"
      >
        <div className="shrink-0 touch-none select-none border-b border-hair md:touch-auto" {...swipe}>
          <div className="md:hidden">
            <Handle />
          </div>
          <div className="flex min-h-14 items-center gap-2 py-1 pr-2 pl-4 md:h-[55px] md:min-h-0 md:py-0 md:pr-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[16px] font-medium md:text-[15px]">{title}</p>
              {sub && <p className="truncate text-[13px] text-mute md:text-[12px]">{sub}</p>}
            </div>
            {actions}
            <button type="button" onClick={onClose} aria-label="Close" className="flex size-11 items-center justify-center rounded-full text-mute hover:bg-tile hover:text-ink md:size-8 md:rounded-[6px]">
              <AIcon name="x" size={16} />
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 pb-[max(16px,env(safe-area-inset-bottom))]">{children}</div>
      </div>
    </div>
  );
}

/** Small numbers grid for panels. */
export function MiniStats({ items, versus }: { items: { label: string; unit: Unit; cur: number | null; prev?: number | null; invert?: boolean }[]; versus: string | null }) {
  return (
    <dl className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {items.map((s) => (
        <div key={s.label} className="rounded-[8px] bg-tile px-3 py-2.5">
          <dt className="truncate text-[12px] text-mute">{s.label}</dt>
          <dd className="mt-0.5 flex flex-wrap items-baseline gap-x-1.5">
            <span className="text-[17px] font-medium tracking-[-0.01em] tabular-nums">{show(s.unit, s.cur)}</span>
            {s.prev !== undefined && <Change unit={s.unit} cur={s.cur} prev={s.prev ?? null} versus={versus} invert={s.invert} />}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** A titled list inside a panel; rows can be buttons. */
export function PanelList({ title, rows, empty, onPick, canPick = () => true, unit = "count" }: { title: string; rows: { key: string; label: string; n: number; hint?: string }[]; empty: string; onPick?: (key: string) => void; canPick?: (key: string) => boolean; unit?: Unit }) {
  const total = rows.reduce((s, r) => s + r.n, 0);
  const max = Math.max(1, ...rows.map((r) => r.n));
  return (
    <section className="mt-6">
      <h3 className="mb-2 text-[13px] font-medium">{title}</h3>
      {rows.length ? (
        <ol className="flex flex-col gap-0.5 text-[13px]">
          {rows.map((r) => {
            const inner = (
              <>
                <span className="absolute inset-y-0.5 left-0 rounded-[5px] bg-wash" style={{ width: `${Math.max(1.5, (r.n / max) * 100)}%` }} aria-hidden="true" />
                <span className="relative min-w-0 flex-1 truncate text-left">
                  {r.label}
                  {r.hint && <span className="text-faint"> {r.hint}</span>}
                </span>
                <span className="relative font-medium tabular-nums">{show(unit, r.n)}</span>
                {unit === "count" && <span className="relative w-11 text-right text-[12px] text-faint tabular-nums">{fmtPct(share(r.n, total))}</span>}
              </>
            );
            const cls = "group relative flex min-h-8 w-full items-center gap-2.5 px-2 max-md:min-h-10";
            return (
              <li key={r.key}>
                {onPick && canPick(r.key) ? (
                  <button type="button" onClick={() => onPick(r.key)} className={cls + " rounded-[6px] hover:bg-tile"}>
                    {inner}
                    <AIcon name="chevron-right" size={14} className="relative -mr-1 text-faint" />
                  </button>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            );
          })}
        </ol>
      ) : (
        <p className="rounded-[8px] bg-tile px-3 py-3 text-[13px] text-mute">{empty}</p>
      )}
    </section>
  );
}

/** Scroll depth: share of measured views that reached each depth. */
export function ScrollDepth({ buckets }: { buckets: { b: number; n: number }[] }) {
  const total = buckets.reduce((s, x) => s + x.n, 0);
  const reached = (d: number) => buckets.filter((x) => x.b >= d).reduce((s, x) => s + x.n, 0);
  if (!total) return <p className="rounded-[8px] bg-tile px-3 py-3 text-[13px] text-mute">No scroll data for this page in the period.</p>;
  return (
    <ol className="grid grid-cols-4 gap-2">
      {[25, 50, 75, 100].map((d) => {
        const p = share(reached(d), total) ?? 0;
        return (
          <li key={d} className="rounded-[8px] bg-tile p-2.5">
            <div className="relative h-16 overflow-hidden rounded-[4px] bg-white" aria-hidden="true">
              <span className="absolute inset-x-0 bottom-0 bg-ink transition-[height] duration-300" style={{ height: `${p}%` }} />
            </div>
            <p className="mt-1.5 text-[15px] font-medium tabular-nums">{fmtPct(p)}</p>
            <p className="text-[12px] text-mute">reached {d}%</p>
          </li>
        );
      })}
    </ol>
  );
}
