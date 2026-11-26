/**
 * Period math for /admin/reports. Pure (no server imports) so the page, the exports and scripts/check-reports.mts
 * share one definition of a week, month, quarter and year.
 *
 * - Weeks are ISO 8601 weeks: Monday to Sunday; week 1 is the week with the year's first Thursday.
 * - Quarters are calendar quarters (Q1 = Jan to Mar).
 * - Boundaries are local midnight in the chosen time zone. Asia/Dhaka is a fixed UTC+6 (no daylight saving
 *   since 2009), so a fixed offset is exact for every date this product has data for.
 *
 * Times are handled as "local milliseconds": the UTC epoch value of the local wall-clock time. A local midnight
 * at offset `o` seconds is the instant `localMs / 1000 - o`.
 */

export type Gran = "day" | "week" | "month" | "quarter" | "year";
export const GRANS: Gran[] = ["day", "week", "month", "quarter", "year"];
export const GRAN_LABEL: Record<Gran, string> = { day: "Day", week: "Week", month: "Month", quarter: "Quarter", year: "Year" };
export const GRAN_ADJ: Record<Gran, string> = { day: "daily", week: "weekly", month: "monthly", quarter: "quarterly", year: "yearly" };

export type TzId = "UTC" | "Asia/Dhaka";
export const TZS: Record<TzId, { offset: number; label: string; short: string; slug: string }> = {
  UTC: { offset: 0, label: "UTC", short: "UTC", slug: "utc" },
  "Asia/Dhaka": { offset: 6 * 3600, label: "Asia/Dhaka (UTC+6)", short: "Dhaka time (UTC+6)", slug: "dhaka" },
};
export const isTz = (v: string): v is TzId => v in TZS;

/** "week" (same weekday last week) is offered on the day granularity only; elsewhere it reads as "previous". */
export type Compare = "previous" | "week" | "yoy" | "none";
export const COMPARES: { id: Compare; label: string }[] = [
  { id: "previous", label: "Previous period" },
  { id: "week", label: "Same weekday last week" },
  { id: "yoy", label: "Same period last year" },
  { id: "none", label: "No comparison" },
];
/** Comparison choices for a granularity, with day-specific wording. */
export const comparesFor = (g: Gran): { id: Compare; label: string }[] =>
  g === "day"
    ? [
        { id: "previous", label: "Previous day" },
        { id: "week", label: "Same weekday last week" },
        { id: "yoy", label: "Same day last year" },
        { id: "none", label: "No comparison" },
      ]
    : COMPARES.filter((c) => c.id !== "week");

/** Trend range choices per granularity (number of buckets ending with the selected period). */
export const RANGE_OPTIONS: Record<Gran, number[]> = { day: [7, 14, 30, 90], week: [8, 12, 26, 52], month: [6, 12, 24], quarter: [4, 8], year: [2, 3, 5] };
export const DEFAULT_RANGE: Record<Gran, number> = { day: 30, week: 12, month: 12, quarter: 8, year: 3 };
export const rangeLabel = (g: Gran, n: number) => `Last ${n} ${g === "day" ? "days" : g === "week" ? "weeks" : g === "month" ? "months" : g === "quarter" ? "quarters" : "years"}`;

const DAY = 86_400_000;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export type Period = {
  gran: Gran;
  /** URL and export key: "2026-11-22", "2026-W47", "2026-11", "2026-Q4", "2026" */
  key: string;
  /** first and last local day, "YYYY-MM-DD" (lastDay is inclusive) */
  startDay: string;
  lastDay: string;
  /** exclusive end as a local day */
  endDay: string;
  /** instants in unix seconds: [start, end) */
  start: number;
  end: number;
  /** "Week 47, 2026", "November 2026", "Q4 2026", "2026" */
  name: string;
  /** "Nov 16 – Nov 22, 2026" */
  dates: string;
  /** chart axis label: "W47", "Nov", "Q4", "2026" */
  tick: string;
};

export const isoDay = (localMs: number) => new Date(localMs).toISOString().slice(0, 10);
export const dayMs = (d: string) => Date.parse(d + "T00:00:00Z");
const fmtDay = (ms: number, withYear: boolean) => {
  const d = new Date(ms);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}${withYear ? ", " + d.getUTCFullYear() : ""}`;
};
/** "Nov 16 – Nov 22, 2026", or with both years when the span crosses a year. */
export function spanText(firstMs: number, lastMs: number) {
  const a = new Date(firstMs);
  const b = new Date(lastMs);
  if (a.getUTCFullYear() !== b.getUTCFullYear()) return `${fmtDay(firstMs, true)} – ${fmtDay(lastMs, true)}`;
  return `${fmtDay(firstMs, false)} – ${fmtDay(lastMs, true)}`;
}
export const dayText = (d: string) => fmtDay(dayMs(d), true);

/* ---- ISO weeks ---- */

const dow = (ms: number) => (new Date(ms).getUTCDay() + 6) % 7; // Monday = 0
const week1Monday = (y: number) => {
  const jan4 = Date.UTC(y, 0, 4);
  return jan4 - dow(jan4) * DAY;
};
export function isoWeek(localMs: number): { year: number; week: number } {
  const thu = localMs - dow(localMs) * DAY + 3 * DAY;
  const year = new Date(thu).getUTCFullYear();
  return { year, week: 1 + Math.floor((thu - week1Monday(year)) / (7 * DAY)) };
}
export const weeksInYear = (y: number) => isoWeek(Date.UTC(y, 11, 28)).week;

/* ---- building periods ---- */

function make(gran: Gran, firstMs: number, endMs: number, offset: number): Period {
  const lastMs = endMs - DAY;
  const d = new Date(firstMs);
  const y = d.getUTCFullYear();
  let key: string, name: string, tick: string;
  if (gran === "day") {
    key = isoDay(firstMs);
    name = `${WEEKDAYS[d.getUTCDay()].slice(0, 3)}, ${fmtDay(firstMs, true)}`;
    tick = `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`;
    return { gran, key, startDay: key, lastDay: key, endDay: isoDay(endMs), start: firstMs / 1000 - offset, end: endMs / 1000 - offset, name, dates: fmtDay(firstMs, true), tick };
  }
  if (gran === "week") {
    const w = isoWeek(firstMs);
    key = `${w.year}-W${String(w.week).padStart(2, "0")}`;
    name = `Week ${w.week}, ${w.year}`;
    tick = `W${w.week}`;
  } else if (gran === "month") {
    key = `${y}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
    name = `${MONTHS_LONG[d.getUTCMonth()]} ${y}`;
    tick = MONTHS[d.getUTCMonth()] + (d.getUTCMonth() === 0 ? ` ${String(y).slice(2)}` : "");
  } else if (gran === "quarter") {
    const q = Math.floor(d.getUTCMonth() / 3) + 1;
    key = `${y}-Q${q}`;
    name = `Q${q} ${y}`;
    tick = `Q${q} ${String(y).slice(2)}`;
  } else {
    key = String(y);
    name = String(y);
    tick = String(y);
  }
  return {
    gran,
    key,
    startDay: isoDay(firstMs),
    lastDay: isoDay(lastMs),
    endDay: isoDay(endMs),
    start: firstMs / 1000 - offset,
    end: endMs / 1000 - offset,
    name,
    dates: spanText(firstMs, lastMs),
    tick,
  };
}

/** The period of granularity `gran` that contains the local day `localMs` (any time on that day). */
export function periodAt(gran: Gran, localMs: number, offset: number): Period {
  const day = Math.floor(localMs / DAY) * DAY;
  const d = new Date(day);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();
  if (gran === "day") return make(gran, day, day + DAY, offset);
  if (gran === "week") {
    const mon = day - dow(day) * DAY;
    return make(gran, mon, mon + 7 * DAY, offset);
  }
  if (gran === "month") return make(gran, Date.UTC(y, m, 1), Date.UTC(y, m + 1, 1), offset);
  if (gran === "quarter") {
    const q = Math.floor(m / 3) * 3;
    return make(gran, Date.UTC(y, q, 1), Date.UTC(y, q + 3, 1), offset);
  }
  return make(gran, Date.UTC(y, 0, 1), Date.UTC(y + 1, 0, 1), offset);
}

/** The period that contains the instant `unixMs` in a zone with `offset` seconds. */
export const periodOfInstant = (gran: Gran, unixMs: number, offset: number) => periodAt(gran, unixMs + offset * 1000, offset);

/** Parses a period key ("2026-11-22", "2026-W47", "2026-11", "2026-Q4", "2026"); null when it isn't one. */
export function parsePeriod(gran: Gran, key: string, offset: number): Period | null {
  let m: RegExpMatchArray | null;
  if (gran === "day" && (m = key.match(/^(\d{4})-(\d{2})-(\d{2})$/))) {
    const ms = Date.UTC(+m[1], +m[2] - 1, +m[3]);
    return isoDay(ms) === key ? periodAt(gran, ms, offset) : null;
  }
  if (gran === "week" && (m = key.match(/^(\d{4})-W(\d{1,2})$/))) {
    const y = +m[1];
    const w = +m[2];
    if (w < 1 || w > weeksInYear(y)) return null;
    return periodAt(gran, week1Monday(y) + (w - 1) * 7 * DAY, offset);
  }
  if (gran === "month" && (m = key.match(/^(\d{4})-(\d{2})$/))) {
    const mo = +m[2];
    if (mo < 1 || mo > 12) return null;
    return periodAt(gran, Date.UTC(+m[1], mo - 1, 1), offset);
  }
  if (gran === "quarter" && (m = key.match(/^(\d{4})-Q([1-4])$/))) return periodAt(gran, Date.UTC(+m[1], (+m[2] - 1) * 3, 1), offset);
  if (gran === "year" && (m = key.match(/^(\d{4})$/))) return periodAt(gran, Date.UTC(+m[1], 0, 1), offset);
  return null;
}

/** The period `n` steps after `p` (negative = before). */
export function shift(p: Period, n: number, offset: number): Period {
  const first = dayMs(p.startDay);
  const d = new Date(first);
  if (p.gran === "day") return periodAt("day", first + n * DAY, offset);
  if (p.gran === "week") return periodAt("week", first + n * 7 * DAY, offset);
  if (p.gran === "month") return periodAt("month", Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + n, 1), offset);
  if (p.gran === "quarter") return periodAt("quarter", Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 3 * n, 1), offset);
  return periodAt("year", Date.UTC(d.getUTCFullYear() + n, 0, 1), offset);
}

/** Same period one year earlier: the same ISO week number (week 53 falls back to 52), month or quarter. */
export function lastYear(p: Period, offset: number): Period {
  if (p.gran === "day") {
    // Feb 29 falls back to Feb 28.
    const d = new Date(dayMs(p.startDay));
    const y = d.getUTCFullYear() - 1;
    const day = Math.min(d.getUTCDate(), new Date(Date.UTC(y, d.getUTCMonth() + 1, 0)).getUTCDate());
    return periodAt("day", Date.UTC(y, d.getUTCMonth(), day), offset);
  }
  if (p.gran === "week") {
    const w = isoWeek(dayMs(p.startDay));
    const y = w.year - 1;
    return parsePeriod("week", `${y}-W${String(Math.min(w.week, weeksInYear(y))).padStart(2, "0")}`, offset)!;
  }
  return shift(p, p.gran === "month" ? -12 : p.gran === "quarter" ? -4 : -1, offset);
}

/** `n` periods ending with `last`, oldest first. */
export const periodsEnding = (last: Period, n: number, offset: number) => Array.from({ length: n }, (_, i) => shift(last, i - (n - 1), offset));

/** Key of the period containing a local day "YYYY-MM-DD" (used to bucket rows that only have a date). */
export const keyOfDay = (gran: Gran, day: string, offset: number) => periodAt(gran, dayMs(day), offset).key;

/* ---- SQL bucket expressions (SQLite / D1) ---- */

/**
 * SQL expression that turns a local "YYYY-MM-DD" date expression into the bucket id the queries group by.
 * Days group by the date itself; weeks by their Monday ("YYYY-MM-DD"); months "YYYY-MM"; quarters "YYYY-Qn"; years "YYYY".
 * `sqlKeyToKey` turns a week's Monday into the "YYYY-Www" key.
 */
export function sqlBucket(gran: Gran, dateExpr: string) {
  if (gran === "day") return `(${dateExpr})`;
  if (gran === "week") return `date(${dateExpr}, '-6 days', 'weekday 1')`;
  if (gran === "month") return `substr(${dateExpr}, 1, 7)`;
  if (gran === "quarter") return `(substr(${dateExpr}, 1, 4) || '-Q' || ((cast(substr(${dateExpr}, 6, 2) as integer) + 2) / 3))`;
  return `substr(${dateExpr}, 1, 4)`;
}
/** Local date of an integer-seconds timestamp column. `offset` is an integer we computed, never user input. */
export const sqlLocalDate = (col: string, offset: number) => `date(${col} + ${Math.trunc(offset)}, 'unixepoch')`;
export const sqlKeyToKey = (gran: Gran, k: string, offset: number) => (gran === "week" ? periodAt("week", dayMs(k), offset).key : k);

/* ---- URL state ---- */

export const DATASETS = ["traffic", "audience", "usage", "agents", "revenue", "activations", "support", "content"] as const;
export type DatasetId = (typeof DATASETS)[number];
export const DATASET_LABEL: Record<DatasetId, string> = {
  traffic: "Traffic",
  audience: "Audience and users",
  usage: "Product usage",
  agents: "MCP and CLI",
  revenue: "Revenue",
  activations: "Activations and payments",
  support: "Support and help bot",
  content: "Content",
};
/** Datasets that also need the "revenue" permission. */
export const MONEY_DATASETS: DatasetId[] = ["revenue", "activations"];

export type Filters = {
  /** Traffic: entrance source (referrer_daily.source) */
  source: string;
  /** Audience: current user plan */
  uplan: string;
  /** Audience: ?ref= link */
  ref: string;
  /** Product usage: web | mcp | cli */
  client: string;
  /** Product usage and MCP: design system slug, "icons" or "core" */
  system: string;
  /** Revenue: plan key */
  rplan: string;
  /** Revenue: lemonsqueezy | contra | creem */
  provider: string;
};
export const FILTER_KEYS: (keyof Filters)[] = ["source", "uplan", "ref", "client", "system", "rplan", "provider"];

export type ReportState = {
  gran: Gran;
  period: Period;
  /** true when `period` is the one containing "now" */
  current: boolean;
  /** true when "now" is inside the period, so it is still running */
  partial: boolean;
  range: number;
  compare: Compare;
  tz: TzId;
  offset: number;
  datasets: DatasetId[];
  filters: Filters;
  now: number;
};

type Params = Record<string, string | string[] | undefined> | URLSearchParams;
const read = (p: Params, k: string) => {
  if (p instanceof URLSearchParams) return p.get(k) ?? "";
  const v = p[k];
  return (Array.isArray(v) ? v[0] : v) ?? "";
};
const clean = (s: string) => s.trim().slice(0, 80);

/** Reads the report selection from search params, falling back to safe defaults for anything invalid. */
export function parseState(p: Params, now = Date.now(), defaults: { gran?: Gran } = {}): ReportState {
  const g = read(p, "g");
  const gran: Gran = (GRANS as string[]).includes(g) ? (g as Gran) : (defaults.gran ?? "month");
  const t = read(p, "tz");
  const tz: TzId = isTz(t) ? t : "UTC";
  const offset = TZS[tz].offset;
  const cur = periodOfInstant(gran, now, offset);
  const asked = read(p, "p");
  const period = (asked && asked !== "current" && parsePeriod(gran, asked, offset)) || cur;
  const r = Number(read(p, "r"));
  const range = RANGE_OPTIONS[gran].includes(r) ? r : DEFAULT_RANGE[gran];
  const c = read(p, "cmp");
  const compare: Compare = c === "yoy" || c === "none" ? c : c === "week" && gran === "day" ? "week" : "previous";
  const ds = read(p, "ds");
  const datasets = ds ? (ds.split(",").filter((x) => (DATASETS as readonly string[]).includes(x)) as DatasetId[]) : [...DATASETS];
  const filters = Object.fromEntries(FILTER_KEYS.map((k) => [k, clean(read(p, k))])) as Filters;
  const nowS = now / 1000;
  return {
    gran,
    period,
    current: period.key === cur.key,
    partial: nowS >= period.start && nowS < period.end,
    range,
    compare,
    tz,
    offset,
    datasets: datasets.length ? datasets : [...DATASETS],
    filters,
    now,
  };
}

/** Search string for a state with some values changed. Defaults are left out so links stay short. */
export function stateQuery(s: ReportState, over: Partial<{ gran: Gran; p: string; range: number; compare: Compare; tz: TzId; datasets: DatasetId[]; filters: Partial<Filters> }> = {}) {
  const gran = over.gran ?? s.gran;
  const q = new URLSearchParams();
  q.set("g", gran);
  const p = over.p ?? (over.gran && over.gran !== s.gran ? "current" : s.current ? "current" : s.period.key);
  if (p !== "current") q.set("p", p);
  const range = over.range ?? (over.gran && over.gran !== s.gran ? DEFAULT_RANGE[gran] : s.range);
  if (range !== DEFAULT_RANGE[gran]) q.set("r", String(range));
  const cmp = over.compare ?? s.compare;
  if (cmp !== "previous" && !(cmp === "week" && gran !== "day")) q.set("cmp", cmp);
  const tz = over.tz ?? s.tz;
  if (tz !== "UTC") q.set("tz", tz);
  const ds = over.datasets ?? s.datasets;
  if (ds.length && ds.length < DATASETS.length) q.set("ds", ds.join(","));
  const f = { ...s.filters, ...over.filters };
  for (const k of FILTER_KEYS) if (f[k]) q.set(k, f[k]);
  return q.toString();
}

/** The comparison period for a state, or null for "none". */
export const comparePeriod = (s: ReportState) =>
  s.compare === "none" ? null : s.compare === "yoy" ? lastYear(s.period, s.offset) : s.compare === "week" && s.gran === "day" ? shift(s.period, -7, s.offset) : shift(s.period, -1, s.offset);

/** "ingot-report-2026-11-monthly-utc" */
export const fileBase = (s: ReportState, what = "report") => `ingot-${what}-${s.period.key.toLowerCase()}-${GRAN_ADJ[s.gran]}-${TZS[s.tz].slug}`;
