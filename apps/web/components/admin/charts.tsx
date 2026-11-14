import type { ReactNode } from "react";
import Link from "next/link";
import { AIcon } from "./admin-icons";
import { num } from "./ui";

/** Analytics building blocks in the admin style: cards, hairlines, inline SVG, no client JS. */

const GOOD = "text-[#17663a]";
const BAD = "text-[#9b1c1c]";

/** Percent change of `cur` against `prev`, rounded; null when there is no base to compare with. */
export const pct = (cur: number, prev: number) => (prev > 0 ? Math.round(((cur - prev) / prev) * 100) : null);

/**
 * Change badge: arrow icon, signed percentage and colour, plus a full sentence for screen readers.
 * `invert` flips the colours for numbers where up is bad (refunds, open tickets).
 */
export function Delta({ cur, prev, period, invert = false }: { cur: number; prev: number; period: string; invert?: boolean }) {
  if (cur === 0 && prev === 0) return null;
  const p = pct(cur, prev);
  const up = cur > prev;
  const flat = cur === prev;
  const tone = flat ? "text-mute" : up !== invert ? GOOD : BAD;
  const shown = flat ? "0%" : p === null ? "New" : `${p > 0 ? "+" : ""}${p}%`;
  const said = flat ? `No change vs ${period}` : p === null ? `Up from 0 vs ${period}` : `${up ? "Up" : "Down"} ${Math.abs(p)}% vs ${period} (${num(prev)} before)`;
  return (
    <span className={"inline-flex shrink-0 items-center gap-0.5 text-[12px] tabular-nums " + tone} title={said}>
      <AIcon name={flat ? "minus" : up ? "trending-up" : "trending-down"} size={14} />
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{said}</span>
    </span>
  );
}

/** Page views as bars with visitors as a line on the same scale. `views` and `visitors` share days, oldest first. */
export function TrafficChart({ views, visitors, label }: { views: { day: string; n: number }[]; visitors: { day: string; n: number }[]; label: string }) {
  const W = 600;
  const H = 160;
  const n = views.length;
  const gap = n > 40 ? 1.5 : 4;
  const max = Math.max(1, ...views.map((d) => d.n), ...visitors.map((d) => d.n));
  const bw = (W - gap * (n - 1)) / Math.max(1, n);
  const y = (v: number) => H - 1 - (v / max) * (H - 10);
  const line = visitors.map((d, i) => `${(i * (bw + gap) + bw / 2).toFixed(1)},${y(d.n).toFixed(1)}`).join(" ");
  const tv = visitors.reduce((s, d) => s + d.n, 0);
  const tp = views.reduce((s, d) => s + d.n, 0);
  return (
    <figure className="card p-4">
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
        <span className="text-mute">{label}</span>
        <span className="ml-auto inline-flex items-center gap-1.5 tabular-nums">
          <svg width="14" height="8" aria-hidden="true">
            <line x1="0" x2="14" y1="4" y2="4" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Visitors {num(tv)}
        </span>
        <span className="inline-flex items-center gap-1.5 tabular-nums">
          <svg width="10" height="10" aria-hidden="true">
            <rect width="10" height="10" rx="2" fill="rgb(0 0 0 / 0.14)" />
          </svg>
          Page views {num(tp)}
        </span>
      </figcaption>
      {tv + tp === 0 && <p className="sr-only">No visits in this range.</p>}
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-[160px] w-full" preserveAspectRatio="none" role="img" aria-label={`${label}: ${num(tv)} visitors and ${num(tp)} page views in ${n} days`}>
        {[0.5, 1].map((f) => (
          <line key={f} x1="0" x2={W} y1={y(max * f)} y2={y(max * f)} stroke="var(--color-hair)" vectorEffect="non-scaling-stroke" />
        ))}
        <line x1="0" x2={W} y1={H - 0.5} y2={H - 0.5} stroke="var(--color-hair-2)" vectorEffect="non-scaling-stroke" />
        {views.map((d, i) => {
          const h = d.n === 0 ? 2 : Math.max(3, (d.n / max) * (H - 10));
          return (
            <rect key={d.day} x={i * (bw + gap)} y={H - h} width={bw} height={h} rx={2} fill={d.n === 0 ? "var(--color-chip)" : "rgb(0 0 0 / 0.14)"}>
              <title>{`${d.day}: ${num(d.n)} page views, ${num(visitors[i]?.n ?? 0)} visitors`}</title>
            </rect>
          );
        })}
        {n > 1 && tv > 0 && <polyline points={line} fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />}
      </svg>
      <div className="mt-1.5 flex justify-between text-[11px] text-faint tabular-nums">
        <span>{views[0]?.day.slice(5)}</span>
        <span>{tp + tv ? `peak ${num(max)} / day` : "no data"}</span>
        <span>{views[n - 1]?.day.slice(5)}</span>
      </div>
    </figure>
  );
}

export type Row = { label: string; n: number; sub?: string; href?: string; external?: boolean };

/** Ranked list with proportional bars behind each row. */
export function BarList({ title, rows, empty, unit, action }: { title: string; rows: Row[]; empty: string; unit?: string; action?: ReactNode }) {
  const max = Math.max(1, ...rows.map((r) => r.n));
  const sum = rows.reduce((s, r) => s + r.n, 0);
  return (
    <div className="card px-4 py-3">
      <div className="flex items-baseline gap-2">
        <p className="text-[13px] text-mute">{title}</p>
        {unit && <p className="ml-auto text-[12px] text-faint">{unit}</p>}
        {action}
      </div>
      {rows.length ? (
        <ol className="mt-2 flex flex-col gap-1 text-[13px]">
          {rows.map((r, i) => {
            const inner = (
              <>
                <span className="absolute inset-y-0 left-0 rounded-[5px] bg-wash" style={{ width: `${Math.max(2, (r.n / max) * 100)}%` }} aria-hidden="true" />
                <span className="relative min-w-0 flex-1 truncate">
                  {r.label}
                  {r.sub && <span className="text-faint">, {r.sub}</span>}
                </span>
                <span className="relative tabular-nums">{num(r.n)}</span>
                <span className="relative w-10 text-right text-[12px] text-faint tabular-nums">{sum ? Math.round((r.n / sum) * 100) : 0}%</span>
              </>
            );
            const cls = "relative flex h-7 items-center gap-3 px-2";
            return (
              <li key={r.label + i}>
                {r.href ? (
                  <Link href={r.href} className={cls + " rounded-[5px] hover:bg-tile"} target={r.external ? "_blank" : undefined}>
                    {inner}
                  </Link>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            );
          })}
        </ol>
      ) : (
        <p className="py-4 text-[13px] text-mute">{empty}</p>
      )}
    </div>
  );
}

/** Funnel steps with the conversion from the step before. */
export function Funnel({ steps, period }: { steps: { label: string; n: number; prev: number }[]; period: string }) {
  const top = Math.max(1, ...steps.map((s) => s.n));
  return (
    <ol className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {steps.map((s, i) => {
        const before = i > 0 ? steps[i - 1].n : 0;
        const conv = i > 0 ? (before > 0 ? (s.n / before) * 100 : null) : null;
        return (
          <li key={s.label} className="card p-4">
            <div className="flex items-start gap-2">
              <p className="min-w-0 flex-1 text-[13px] text-mute">
                <span className="text-faint tabular-nums">{i + 1}. </span>
                {s.label}
              </p>
              <Delta cur={s.n} prev={s.prev} period={period} />
            </div>
            <p className="mt-1 text-[22px] font-medium tracking-[-0.02em] tabular-nums">{num(s.n)}</p>
            <div className="mt-2 h-1.5 rounded-full bg-chip" aria-hidden="true">
              <div className="h-1.5 rounded-full bg-ink" style={{ width: `${Math.min(100, Math.max(s.n ? 2 : 0, (s.n / top) * 100))}%` }} />
            </div>
            <p className="mt-1.5 text-[12px] text-faint">
              {i === 0 ? "Unique visitors, estimated" : conv === null ? "Nothing to convert yet" : `${fmtPct(conv)} of ${steps[i - 1].label.toLowerCase()}`}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

export const fmtPct = (x: number) => (x === 0 ? "0%" : x < 1 ? x.toFixed(1) + "%" : x < 10 ? x.toFixed(1).replace(/\.0$/, "") + "%" : Math.round(x) + "%");

/** "3h 20m", "2d 4h" style duration from seconds. */
export function dur(sec: number | null) {
  if (sec === null) return "–";
  const m = Math.round(sec / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 48) return `${h}h ${m % 60}m`;
  return `${Math.floor(h / 24)}d ${h % 24}h`;
}
