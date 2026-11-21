import type { DatasetId, Period, ReportState } from "./period";

/**
 * Report data model shared by the page, the print view and the CSV / XLSX exports.
 * Money is integer USD cents; durations are hours; percentages are 0..100.
 */

export type Unit = "count" | "usd" | "pct" | "ratio" | "hours" | "text";

export const UNIT_LABEL: Record<Unit, string> = { count: "count", usd: "USD", pct: "%", ratio: "ratio", hours: "hours", text: "text" };

export type Values = Record<string, number | string | null>;

export type MetricDef = {
  id: string;
  label: string;
  unit: Unit;
  /** plain-language definition shown in the info popover and the exports */
  def: string;
  /**
   * How the totals row is made: "sum" of the buckets, the "last" bucket (a level at period end), a value
   * computed over the whole range in SQL ("range"), "derived" from the other totals, or "none".
   */
  total: "sum" | "last" | "range" | "derived" | "none";
  /** shown as a KPI tile for the selected period */
  kpi?: boolean;
  /** can be drawn in the trend chart */
  chart?: boolean;
  /** up is bad (refunds, pending requests) */
  invert?: boolean;
  /** computed from the other values of the same row (bucket, selected, compare or totals) */
  derive?: (v: Values) => number | null;
};

export type BreakdownRow = { label: string; cur: number; prev: number | null; href?: string };
export type Breakdown = {
  id: string;
  title: string;
  /** first column header, e.g. "Page" */
  head: string;
  unit: Unit;
  def?: string;
  rows: BreakdownRow[];
  empty: string;
  /** "selected" compares with the comparison period; "now" is a snapshot of today */
  scope: "selected" | "now";
};

export type BucketRow = { period: Period; v: Values };

export type DatasetResult = {
  id: DatasetId;
  title: string;
  intro: string;
  metrics: MetricDef[];
  /** the trend range, oldest first */
  rows: BucketRow[];
  selected: Values;
  compare: Values | null;
  totals: Values;
  breakdowns: Breakdown[];
  /** honest limits of the data, shown under the dataset and in the exports */
  notes: string[];
  /** first local day with data, null when there is none */
  since: string | null;
  /** active filters that apply to this dataset, as label + value */
  filters: { label: string; value: string }[];
  /** set when the dataset could not be loaded */
  error?: string;
};

export type Report = {
  state: ReportState;
  sel: Period;
  cmp: Period | null;
  /** the trend range, oldest first */
  buckets: Period[];
  datasets: DatasetResult[];
  /** datasets left out because the viewer lacks the "revenue" permission */
  hidden: DatasetId[];
  generatedAt: number;
  /** D1 statements this request ran (kept under the Workers free-plan limit) */
  queries: number;
};
