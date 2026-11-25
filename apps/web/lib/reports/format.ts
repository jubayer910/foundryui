import { FILTER_KEYS, TZS, type Filters, type ReportState } from "./period";
import { UNIT_LABEL, type MetricDef, type Unit } from "./types";

/** Display and export formatting for report values. Pure, shared by the page, print view, CSV and XLSX. */

const nf = new Intl.NumberFormat("en-US");
const usdF = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
const usd0 = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Screen text for a value. Money is USD cents. */
export function show(unit: Unit, v: number | string | null | undefined, opts: { short?: boolean } = {}): string {
  if (v === null || v === undefined || v === "") return "–";
  if (unit === "text") return String(v);
  const n = Number(v);
  if (!Number.isFinite(n)) return "–";
  if (unit === "usd") return opts.short && Math.abs(n) >= 100_000 && n % 100 === 0 ? usd0.format(n / 100) : usdF.format(n / 100);
  if (unit === "pct") return (Math.abs(n) < 10 ? n.toFixed(1) : Math.round(n).toString()) + "%";
  if (unit === "ratio") return n.toFixed(2);
  if (unit === "secs") {
    const t = Math.round(n);
    return t < 60 ? `${t}s` : t < 3600 ? `${Math.floor(t / 60)}m ${String(t % 60).padStart(2, "0")}s` : `${Math.floor(t / 3600)}h ${String(Math.floor((t % 3600) / 60)).padStart(2, "0")}m`;
  }
  if (unit === "hours") return n < 1 ? `${Math.round(n * 60)} min` : n < 48 ? `${n.toFixed(1)} h` : `${(n / 24).toFixed(1)} days`;
  return nf.format(Math.round(n));
}

/** Column header with its unit: "Net revenue (USD)", "Visitors (count)". */
export const headOf = (m: Pick<MetricDef, "label" | "unit">) => (m.unit === "text" ? m.label : `${m.label} (${UNIT_LABEL[m.unit]})`);

export type Change = { abs: number; pct: number | null; dir: "up" | "down" | "flat"; good: boolean | null; text: string; said: string };

/** Change of `cur` against `prev`. Percentages change in points; others by absolute value and percent. */
export function changeOf(m: Pick<MetricDef, "unit" | "invert">, cur: unknown, prev: unknown, versus: string): Change | null {
  if (m.unit === "text" || cur === null || cur === undefined || prev === null || prev === undefined) return null;
  const a = Number(cur);
  const b = Number(prev);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
  const abs = a - b;
  const dir = abs > 0 ? "up" : abs < 0 ? "down" : "flat";
  const good = dir === "flat" ? null : (dir === "up") !== !!m.invert;
  const sign = abs > 0 ? "+" : abs < 0 ? "−" : "";
  if (m.unit === "pct") {
    const pts = Math.abs(abs);
    const text = `${sign}${pts.toFixed(1)} pts`;
    return { abs, pct: null, dir, good, text, said: dir === "flat" ? `No change vs ${versus}` : `${dir === "up" ? "Up" : "Down"} ${pts.toFixed(1)} percentage points vs ${versus} (${show(m.unit, b)} before)` };
  }
  const pct = b !== 0 ? (abs / Math.abs(b)) * 100 : null;
  const absText = show(m.unit, Math.abs(abs));
  const pctText = pct === null ? (abs === 0 ? "0%" : "new") : `${Math.abs(pct) < 10 && pct !== 0 ? Math.abs(pct).toFixed(1) : Math.round(Math.abs(pct))}%`;
  const text = dir === "flat" ? "No change" : `${sign}${absText} (${pct === null ? pctText : sign + pctText})`;
  const said = dir === "flat" ? `No change vs ${versus}` : `${dir === "up" ? "Up" : "Down"} ${absText}${pct === null ? ", from zero" : `, ${pctText}`}, vs ${versus} (${show(m.unit, b)} before)`;
  return { abs, pct, dir, good, text, said };
}

/** Export cell value: numbers stay numbers (USD as dollars with cents, pct as 0..100, hours rounded to 0.01). */
export function exportNum(unit: Unit, v: number | string | null | undefined): number | string | null {
  if (v === null || v === undefined || v === "") return null;
  if (unit === "text") return String(v);
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  if (unit === "usd") return Math.round(n) / 100;
  if (unit === "pct" || unit === "hours" || unit === "ratio") return Math.round(n * 100) / 100;
  return Math.round(n);
}

export const FILTER_LABEL: Record<keyof Filters, string> = { source: "Source", uplan: "Plan now", ref: "Ref link", client: "Client", system: "Design system", rplan: "Revenue plan", provider: "Provider" };

/** Active filters as "Label: value" lines. */
export const filterLines = (s: ReportState) => FILTER_KEYS.filter((k) => s.filters[k]).map((k) => `${FILTER_LABEL[k]}: ${s.filters[k]}`);

/** "Nov 21, 2026, 14:05 UTC" in the report's time zone. */
export function stamp(ms: number, s: ReportState) {
  const d = new Date(ms + s.offset * 1000);
  const M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getUTCMonth()];
  return `${M} ${d.getUTCDate()}, ${d.getUTCFullYear()}, ${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")} ${s.tz === "UTC" ? "UTC" : "UTC+6 (Asia/Dhaka)"}`;
}
export const tzLine = (s: ReportState) => (s.tz === "UTC" ? "All times UTC" : `All times ${TZS[s.tz].label}`);
