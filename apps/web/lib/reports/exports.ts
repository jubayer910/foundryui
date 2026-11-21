import { changeOf, exportNum, filterLines, headOf, stamp, tzLine } from "./format";
import { GRAN_ADJ, TZS, fileBase, rangeLabel, type Period } from "./period";
import type { DatasetResult, MetricDef, Report, Unit } from "./types";
import { buildXlsx, excelDate, type Cell, type Sheet, type Style } from "./xlsx";

/**
 * CSV and XLSX for /admin/reports. Rows are oldest first (so a chart made from the file reads left to right);
 * the screen table is newest first. Dates are ISO (YYYY-MM-DD) local days in the report's time zone.
 */

/* ---- CSV ---- */

/** A spreadsheet formula can't sneak in: text starting with = + - @ tab or CR gets a leading apostrophe. */
export const safeText = (s: string) => (/^[=+\-@\t\r]/.test(s) ? "'" + s : s);
const csvCell = (v: string | number | null) => {
  if (v === null) return "";
  const s = typeof v === "number" ? String(v) : safeText(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const periodCells = (p: Period) => [p.key, p.name, p.startDay, p.lastDay];
const PERIOD_HEAD = ["Period", "Period name", "First day", "Last day"];

export function datasetCsv(d: DatasetResult, r: Report): string {
  const head = [...PERIOD_HEAD, ...d.metrics.map(headOf), "Time zone"];
  const lines = [head, ...d.rows.map((row) => [...periodCells(row.period), ...d.metrics.map((m) => exportNum(m.unit, row.v[m.id])), r.state.tz])];
  return "\uFEFF" + lines.map((l) => l.map((c) => csvCell(c as string | number | null)).join(",")).join("\r\n") + "\r\n";
}

export const csvName = (d: DatasetResult, r: Report) => `${fileBase(r.state, d.id)}.csv`;

/* ---- XLSX ---- */

const styleOf = (u: Unit, bold = false): Style => {
  if (u === "usd") return bold ? "bUsd" : "usd";
  if (u === "pct") return bold ? "bPct" : "pct";
  if (u === "ratio" || u === "hours") return bold ? "bDec" : "dec";
  if (u === "text") return bold ? "bText" : "text";
  return bold ? "bInt" : "int";
};
/** Cell value as Excel wants it: USD as dollars, percentages as fractions (formatted 0.0%). */
const xv = (u: Unit, v: unknown): number | string | null => {
  const n = exportNum(u, v as number | string | null);
  if (typeof n === "number" && u === "pct") return n / 100;
  return typeof n === "string" ? safeText(n) : n;
};
const cell = (u: Unit, v: unknown, bold = false): Cell => ({ v: xv(u, v), s: styleOf(u, bold) });
const txt = (v: string, s: Style = "text"): Cell => ({ v: safeText(v), s });
const date = (d: string): Cell => ({ v: excelDate(d), s: "date" });
const width = (m: MetricDef) => Math.min(28, Math.max(12, headOf(m).length * 0.9 + 2));

function datasetSheet(d: DatasetResult, r: Report): Sheet {
  const rows: Cell[][] = [];
  rows.push([...PERIOD_HEAD, ...d.metrics.map(headOf)].map((h) => txt(h, "head")));
  for (const row of d.rows) rows.push([txt(row.period.key), txt(row.period.name), date(row.period.startDay), date(row.period.lastDay), ...d.metrics.map((m) => cell(m.unit, row.v[m.id]))]);
  rows.push([txt("Range total", "bText"), txt(`${r.buckets[0].name} to ${r.sel.name}`), date(r.buckets[0].startDay), date(r.sel.lastDay), ...d.metrics.map((m) => cell(m.unit, d.totals[m.id], true))]);
  rows.push([txt("How the total is made", "note"), null, null, null, ...d.metrics.map((m) => txt({ sum: "Sum of the periods", last: "Level at the end of the range", range: "Counted once over the range", derived: "From the range totals", none: "" }[m.total], "note"))]);
  rows.push([]);
  for (const n of d.notes) rows.push([txt(n, "note")]);
  if (d.since) rows.push([txt(`First data: ${d.since}`, "note")]);
  for (const b of d.breakdowns) {
    const prev = b.scope === "selected" && !!r.cmp;
    rows.push([]);
    rows.push([txt(`${b.title}, ${b.scope === "now" ? "snapshot as of now" : `${r.sel.name} (${r.sel.dates})`}`, "bText")]);
    rows.push([txt(b.head, "head"), txt(`${r.sel.name}${b.unit === "usd" ? " (USD)" : ""}`, "head"), ...(prev ? [txt(`${r.cmp!.name}${b.unit === "usd" ? " (USD)" : ""}`, "head"), txt("Change (%)", "head")] : [])]);
    if (!b.rows.length) rows.push([txt(b.empty, "note")]);
    for (const x of b.rows) {
      const ch = prev ? changeOf({ unit: b.unit }, x.cur, x.prev, "") : null;
      rows.push([txt(x.label), cell(b.unit, x.cur), ...(prev ? [cell(b.unit, x.prev), { v: ch?.pct === null || ch?.pct === undefined ? null : Math.round(ch.pct * 10) / 1000, s: "pct" as Style }] : [])]);
    }
  }
  rows.push([]);
  rows.push([txt("Definitions", "bText")]);
  for (const m of d.metrics) rows.push([txt(headOf(m)), txt(m.def, "note")]);
  return { name: d.title, freeze: 1, widths: [18, 26, 12, 12, ...d.metrics.map(width)], rows };
}

function summarySheet(r: Report): Sheet {
  const s = r.state;
  const rows: Cell[][] = [];
  const kv = (k: string, v: Cell) => rows.push([txt(k, "bText"), v]);
  rows.push([txt("Ingot UI report", "title")]);
  rows.push([]);
  kv("Period", txt(`${r.sel.name} (${r.sel.dates})`));
  kv("First day", date(r.sel.startDay));
  kv("Last day", date(r.sel.lastDay));
  kv("Granularity", txt(s.gran === "day" ? `Daily, local days (${TZS[s.tz].label})` : s.gran === "week" ? "Weekly, ISO weeks (Monday to Sunday)" : s.gran === "quarter" ? "Quarterly, calendar quarters" : GRAN_ADJ[s.gran][0].toUpperCase() + GRAN_ADJ[s.gran].slice(1)));
  kv("Time zone", txt(`${TZS[s.tz].label}. ${tzLine(s)}.`));
  kv("Period status", txt(s.partial ? `In progress: data up to ${stamp(r.generatedAt, s)}` : "Complete"));
  kv("Compared with", txt(r.cmp ? `${r.cmp.name} (${r.cmp.dates})${s.compare === "yoy" ? ", same period last year" : ", previous period"}` : "No comparison"));
  kv("Trend range", txt(`${rangeLabel(s.gran, s.range)}: ${r.buckets[0].name} to ${r.sel.name}`));
  kv("Filters", txt(filterLines(s).join("; ") || "None"));
  kv("Generated", txt(stamp(r.generatedAt, s)));
  kv("Money", txt("USD. Orders in other currencies without a USD amount are left out (see the Revenue sheet)."));
  kv("Rows", txt("Dataset sheets list periods oldest first, then the range total, breakdowns and definitions."));
  if (r.hidden.length) kv("Not included", txt(`${r.hidden.join(", ")}: needs the Revenue permission`));
  rows.push([]);
  const head = ["Dataset", "Metric", "Unit", r.sel.name, r.cmp ? r.cmp.name : "Comparison", "Change", "Change (%)", "Definition"];
  rows.push(head.map((h) => txt(h, "head")));
  for (const d of r.datasets) {
    if (d.error) {
      rows.push([txt(d.title), txt(d.error, "note")]);
      continue;
    }
    for (const m of d.metrics.filter((x) => x.kpi)) {
      const ch = r.cmp ? changeOf(m, d.selected[m.id], d.compare?.[m.id], r.cmp.name) : null;
      const unitName = m.unit === "usd" ? "USD" : m.unit === "pct" ? "%" : m.unit === "hours" ? "hours" : m.unit === "ratio" ? "ratio" : "count";
      rows.push([
        txt(d.title),
        txt(m.label),
        txt(unitName),
        cell(m.unit, d.selected[m.id]),
        r.cmp ? cell(m.unit, d.compare?.[m.id]) : null,
        ch ? (m.unit === "pct" ? { v: Math.round(ch.abs * 10) / 1000, s: "pct" } : cell(m.unit, ch.abs)) : null,
        ch && ch.pct !== null ? { v: Math.round(ch.pct * 10) / 1000, s: "pct" } : null,
        txt(m.def, "note"),
      ]);
    }
  }
  return { name: "Summary", widths: [24, 30, 9, 16, 16, 14, 11, 90], rows };
}

export function reportXlsx(r: Report): Uint8Array {
  const sheets = [summarySheet(r), ...r.datasets.filter((d) => !d.error).map((d) => datasetSheet(d, r))];
  return buildXlsx(sheets, { title: `Ingot UI report, ${r.sel.name}`, created: new Date(r.generatedAt) });
}

export const xlsxName = (r: Report) => `${fileBase(r.state)}.xlsx`;

/* ---- Hourly CSV (day granularity) ---- */

/** One row per hour of the selected day, in the report time zone; one column per hourly series. */
export function hourlyCsv(h: { day: Period; series: { label: string; unit: Unit; cur: number[] }[] }, s: { tz: string }): string {
  const head = ["Day", "Hour", ...h.series.map((x) => headOf({ label: x.label, unit: x.unit })), "Time zone"];
  const lines: (string | number | null)[][] = [head];
  for (let i = 0; i < 24; i++) lines.push([h.day.key, `${String(i).padStart(2, "0")}:00`, ...h.series.map((x) => exportNum(x.unit, x.cur[i])), s.tz]);
  lines.push(["Day total", "", ...h.series.map((x) => exportNum(x.unit, x.cur.reduce((a, b) => a + b, 0))), s.tz]);
  return "﻿" + lines.map((l) => l.map((c) => csvCell(c)).join(",")).join("\r\n") + "\r\n";
}
