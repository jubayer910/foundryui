import { comparePeriod, dayMs, isoDay, periodsEnding, shift, sqlBucket, sqlKeyToKey, sqlLocalDate, type Period, type ReportState } from "./period";
import type { Breakdown, BucketRow, DatasetResult, MetricDef, Values } from "./types";

/**
 * The query context every dataset builds its SQL from, and the helpers that turn grouped rows back into
 * buckets. Each dataset sends a handful of grouped statements in one D1 batch; nothing is fetched row by row.
 *
 * Literal numbers and dates in the SQL are values we computed (period bounds, the time-zone offset), checked
 * with `int` and `date` below. Anything that comes from the URL (filters) is always a bound parameter.
 */

export type Stmt = { sql: string; params: unknown[] };
export type Row = Record<string, unknown>;

export const int = (n: number) => {
  if (!Number.isFinite(n)) throw new Error("bad number in report SQL");
  return String(Math.trunc(n));
};
export const date = (d: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) throw new Error("bad date in report SQL");
  return `'${d}'`;
};

/** Collects bound parameters in the order their "?" appear. */
export class Q {
  params: unknown[] = [];
  p(v: unknown) {
    this.params.push(v);
    return "?";
  }
  stmt(sql: string): Stmt {
    return { sql, params: this.params };
  }
}

export type Win = { start: number; end: number; startDay: string; endDay: string };
const win = (a: Period, b: Period): Win => ({ start: a.start, end: b.end, startDay: a.startDay, endDay: b.endDay });

export type Ctx = {
  s: ReportState;
  off: number;
  sel: Period;
  cmp: Period | null;
  /** trend range, oldest first */
  buckets: Period[];
  /** every period from the oldest needed (range or comparison) to the selected one, oldest first */
  spanPeriods: Period[];
  span: Win;
  range: Win;
  /** "now" in unix seconds */
  nowS: number;
  /** SQL bucket id of an integer-seconds timestamp column, in the report time zone */
  tb: (col: string) => string;
  /** SQL bucket id of a "YYYY-MM-DD" column (stored per UTC day; see the notes on those datasets) */
  db: (col: string) => string;
  /** SQL condition: timestamp column inside a window */
  inTs: (col: string, w: { start: number; end: number }) => string;
  /** SQL condition: day column inside a window */
  inDay: (col: string, w: { startDay: string; endDay: string }) => string;
  /** a VALUES list of (bucket key, instant) for the end of each range bucket and the comparison period, capped at now */
  ends: () => string;
};

export function makeCtx(s: ReportState): Ctx {
  const sel = s.period;
  const cmp = comparePeriod(s);
  const buckets = periodsEnding(sel, s.range, s.offset);
  const first = cmp && cmp.start < buckets[0].start ? cmp : buckets[0];
  const spanPeriods: Period[] = [];
  for (let p = first; p.start <= sel.start && spanPeriods.length < 400; p = shift(p, 1, s.offset)) spanPeriods.push(p);
  const nowS = Math.floor(s.now / 1000);
  const off = s.offset;
  const inTs = (col: string, w: { start: number; end: number }) => `${col} >= ${int(w.start)} and ${col} < ${int(w.end)}`;
  const inDay = (col: string, w: { startDay: string; endDay: string }) => `${col} >= ${date(w.startDay)} and ${col} < ${date(w.endDay)}`;
  return {
    s,
    off,
    sel,
    cmp,
    buckets,
    spanPeriods,
    span: win(first, sel),
    range: win(buckets[0], sel),
    nowS,
    tb: (col) => sqlBucket(s.gran, sqlLocalDate(col, off)),
    db: (col) => sqlBucket(s.gran, col),
    inTs,
    inDay,
    ends: () => {
      const list = [...buckets, ...(cmp && !buckets.some((b) => b.key === cmp.key) ? [cmp] : [])];
      // Keys in the same form the bucket expressions return (a week is its Monday), so collect() maps them back.
      return list.map((p) => `('${s.gran === "week" ? p.startDay : p.key}', ${int(Math.min(p.end, nowS))})`).join(", ");
    },
  };
}

/** Condition for "selected or comparison period" (the rows a breakdown needs). */
export const selOrCmp = (c: Ctx, f: (w: Period) => string) => (c.cmp ? `((${f(c.sel)}) or (${f(c.cmp)}))` : f(c.sel));
/** SQL sum of `expr` inside the selected (`which` = "cur") or comparison period. */
export function sumIn(c: Ctx, which: "cur" | "prev", cond: (w: Period) => string, expr = "1") {
  const p = which === "cur" ? c.sel : c.cmp;
  if (!p) return "0";
  return `sum(case when ${cond(p)} then ${expr} else 0 end)`;
}

/**
 * Merges grouped rows into a map of bucket key to values. A row is either long ({ m, k, v }) or wide
 * ({ k, metric1, metric2, ... }). Week buckets come back as their Monday and are turned into "YYYY-Www".
 * Keys starting with "__" ("__range", "__before") pass through.
 */
export function collect(c: Ctx, ...sets: Row[][]) {
  const map = new Map<string, Values>();
  const put = (k: string, m: string, v: unknown) => {
    const key = k.startsWith("__") ? k : sqlKeyToKey(c.s.gran, k, c.off);
    const row = map.get(key) ?? {};
    row[m] = typeof v === "number" || typeof v === "string" ? v : v === null || v === undefined ? null : Number(v);
    map.set(key, row);
  };
  for (const rows of sets)
    for (const r of rows) {
      if (r.k === null || r.k === undefined) continue;
      const k = String(r.k);
      if ("m" in r && "v" in r) put(k, String(r.m), r.v);
      else for (const [m, v] of Object.entries(r)) if (m !== "k") put(k, m, v);
    }
  return map;
}

const isNum = (u: MetricDef["unit"]) => u !== "text";
/** Fills one bucket: zero for additive numbers, null for averages and text, then the derived metrics. */
export function fill(metrics: MetricDef[], v: Values | undefined): Values {
  const out: Values = {};
  for (const m of metrics) {
    const x = v?.[m.id];
    out[m.id] = x === undefined || x === null ? (isNum(m.unit) && m.total === "sum" ? 0 : null) : m.unit === "text" ? String(x) : Number(x);
  }
  for (const m of metrics) if (m.derive) out[m.id] = m.derive(out);
  return out;
}

/** Running level (e.g. users in total) at the end of each span period, from a starting value and per-bucket additions. */
export function running(c: Ctx, map: Map<string, Values>, add: string, into: string, start: number) {
  let total = start;
  for (const p of c.spanPeriods) {
    const row = map.get(p.key) ?? {};
    total += Number(row[add] ?? 0);
    row[into] = total;
    map.set(p.key, row);
  }
}

/** Builds rows, selected, comparison and totals for a dataset from the merged map. */
export function assemble(c: Ctx, metrics: MetricDef[], map: Map<string, Values>): Pick<DatasetResult, "rows" | "selected" | "compare" | "totals"> {
  const rows: BucketRow[] = c.buckets.map((p) => ({ period: p, v: fill(metrics, map.get(p.key)) }));
  const selected = rows[rows.length - 1].v;
  const compare = c.cmp ? fill(metrics, map.get(c.cmp.key)) : null;
  const rangeRow = map.get("__range") ?? {};
  const totals: Values = {};
  for (const m of metrics) {
    if (m.total === "sum") totals[m.id] = rows.reduce((t, r) => t + Number(r.v[m.id] ?? 0), 0);
    else if (m.total === "last") totals[m.id] = selected[m.id];
    else if (m.total === "range") totals[m.id] = rangeRow[m.id] === undefined || rangeRow[m.id] === null ? null : m.unit === "text" ? String(rangeRow[m.id]) : Number(rangeRow[m.id]);
    else totals[m.id] = null;
  }
  for (const m of metrics) if (m.derive && m.total === "derived") totals[m.id] = m.derive(totals);
  return { rows, selected, compare, totals };
}

/** Breakdown rows from { g, label, cur, prev } rows. */
export function breakdownRows(rows: Row[], g: string, hasPrev: boolean, label: (s: string) => string = (s) => s, href?: (s: string) => string | undefined) {
  return rows
    .filter((r) => r.g === g)
    .map((r) => ({ label: label(String(r.label ?? "")), cur: Number(r.cur ?? 0), prev: hasPrev ? Number(r.prev ?? 0) : null, href: href?.(String(r.label ?? "")) }))
    .filter((r) => r.cur !== 0 || (r.prev ?? 0) !== 0);
}

export const ratio = (a: unknown, b: unknown) => (Number(b) > 0 ? Number(a) / Number(b) : null);
export const pctOf = (a: unknown, b: unknown) => (Number(b) > 0 ? (Number(a) / Number(b)) * 100 : null);

/** First local day of data from a unix-seconds value or a "YYYY-MM-DD" string. */
export function sinceOf(c: Ctx, ...vals: unknown[]): string | null {
  const days = vals
    .map((v) => (v === null || v === undefined ? null : typeof v === "string" && /^\d{4}-\d{2}-\d{2}/.test(v) ? v.slice(0, 10) : Number.isFinite(Number(v)) ? isoDay(Number(v) * 1000 + c.off * 1000) : null))
    .filter((d): d is string => !!d)
    .sort();
  return days[0] ?? null;
}

/** "Data starts on Mar 3, 2025" style note when the range begins before the first data. */
export function startNote(c: Ctx, since: string | null, what: string) {
  if (!since) return `No ${what} recorded yet.`;
  if (dayMs(since) > dayMs(c.range.startDay)) return `Data starts on ${since} (first ${what} recorded), so earlier periods show zero.`;
  return null;
}

/**
 * D1 allows at most 5 terms in a compound SELECT, so long-format series ({ m, k, v } rows) are split into
 * statements of up to five UNION ALL terms. Each term becomes a CTE with the column list (m, k, v), so a term
 * needs no aliases of its own. Each statement gets its own parameter collector; `ctes` (extra CTE definitions
 * such as `ends(k, t) as (values ...)`) is repeated in every statement and must not bind parameters.
 */
export function unions(parts: ((q: Q) => string)[], ctes = ""): Stmt[] {
  const out: Stmt[] = [];
  for (let i = 0; i < parts.length; i += 5) {
    const q = new Q();
    const chunk = parts.slice(i, i + 5).map((f, j) => ({ name: `u${j}`, sql: f(q) }));
    const defs = [...(ctes ? [ctes] : []), ...chunk.map((t) => `${t.name}(m, k, v) as (${t.sql})`)].join(",\n ");
    out.push(q.stmt(`with ${defs}\n select m, k, v from ${chunk.map((t) => t.name).join("\n union all select m, k, v from ")}`));
  }
  return out;
}

export type Built = { statements: Stmt[]; finish: (results: Row[][]) => DatasetResult | Promise<DatasetResult> };
export type Breakdowns = Breakdown[];
