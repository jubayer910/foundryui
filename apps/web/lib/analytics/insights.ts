import "server-only";
import { getEnv } from "@/lib/db";
import { date, makeCtx, type Ctx, type Row } from "@/lib/reports/engine";
import { dayMs, sqlKeyToKey, type Period, type ReportState } from "@/lib/reports/period";

/**
 * Data for Insights > Traffic and Insights > Behaviour: the first-party page-view tables (pageview_daily,
 * referrer_daily, visitor_daily) plus the behaviour counters in stat_daily, for the selected period, the
 * comparison period and the trend range. One D1 batch of grouped statements; nothing is fetched row by row.
 * All tables are per UTC day, like the Traffic report.
 */

export type Pair = { cur: number; prev: number | null };
export type DimRow = { key: string; cur: number; prev: number | null };
export type SeriesRow = { key: string; name: string; dates: string; tick: string; v: Record<string, number | null> };

export type InsightsData = {
  sel: { key: string; name: string; dates: string; startDay: string };
  cmp: { key: string; name: string } | null;
  /** first day with behaviour data (stat_daily), null when there is none yet */
  statSince: string | null;
  /** first day with page views */
  since: string | null;
  totals: Record<"views" | "visitors" | "visits" | "bvisits" | "p2" | "secs" | "timed" | "clicks", Pair>;
  series: SeriesRow[];
  dims: Record<"country" | "device" | "browser" | "os" | "landing" | "campaign" | "medium" | "exit" | "source" | "page", DimRow[]>;
  /** selected period only */
  srcland: { source: string; path: string; n: number }[];
  flows: { from: string; to: string; n: number }[];
  time: { path: string; secs: number; n: number }[];
  scroll: { path: string; b: number; n: number }[];
  clicks: { path: string; kind: "button" | "link" | "out"; label: string; target: string; cur: number; prev: number | null }[];
  /** [weekday Mon=0][hour] page views in the report time zone, selected period */
  heat: number[][];
  /** entrances per trend bucket for each source (top sources only) */
  sourceSeries: Record<string, number[]>;
  /** page views per trend bucket for the top pages */
  pageSeries: Record<string, number[]>;
  tz: string;
  error?: string;
};

const num = (v: unknown) => (v === null || v === undefined ? 0 : Number(v) || 0);

export async function loadInsights(s: ReportState): Promise<InsightsData> {
  const c = makeCtx(s);
  const inSel = `day >= ${date(c.sel.startDay)} and day < ${date(c.sel.endDay)}`;
  const inCmp = c.cmp ? `day >= ${date(c.cmp.startDay)} and day < ${date(c.cmp.endDay)}` : "0";
  const either = c.cmp ? `((${inSel}) or (${inCmp}))` : inSel;
  const span = c.inDay("day", c.span);
  const pair = (col: string) => `sum(case when ${inSel} then ${col} else 0 end) cur, sum(case when ${inCmp} then ${col} else 0 end) prev`;

  const stmts: string[] = [
    /* 0 */ `select ${c.db("day")} k, sum(views) v from pageview_daily where ${span} group by 1`,
    /* 1 */ `select ${c.db("day")} k, sum(visitors) v from visitor_daily where ${span} group by 1`,
    /* 2 */ `select ${c.db("day")} k, source, sum(views) v from referrer_daily where ${span} group by 1, 2`,
    /* 3 */ `select ${c.db("day")} k, kind, sum(n) v from stat_daily where kind in ('landing','p2','time','timen','click') and ${span} group by 1, 2`,
    /* 4 */ `select kind, key, ${pair("n")} from stat_daily where kind in ('country','device','browser','os','landing','campaign','medium','exit') and ${either} group by 1, 2`,
    /* 5 */ `select * from (select key, ${pair("n")} from stat_daily where kind = 'click' and ${either} group by key) order by cur desc, prev desc limit 400`,
    /* 6 */ `select key, sum(n) v from stat_daily where kind = 'flow' and ${inSel} group by key order by v desc limit 600`,
    /* 7 */ `select key, sum(n) v from stat_daily where kind = 'srcland' and ${inSel} group by key order by v desc limit 400`,
    /* 8 */ `select kind, key, sum(n) v from stat_daily where kind in ('time','timen','scroll') and ${inSel} group by 1, 2`,
    /* 9 */ `select day, key, sum(n) v from stat_daily where kind = 'hour' and ${inSel} group by 1, 2`,
    /* 10 */ `select * from (select path key, ${pair("views")} from pageview_daily where ${either} group by path) order by cur desc, prev desc limit 300`,
    /* 11 */ `select source key, ${pair("views")} from referrer_daily where ${either} group by source`,
    /* 12 */ `select (select min(day) from stat_daily) a, (select min(day) from pageview_daily) b`,
    /* 13 */ `select ${c.db("day")} k, path, sum(views) v from pageview_daily where ${span} and path in (select path from pageview_daily where ${inSel} group by path order by sum(views) desc limit 40) group by 1, 2`,
  ];

  const base = emptyData(c, s);
  let res: Row[][];
  try {
    const env = await getEnv();
    const out = await env.DB.batch(stmts.map((q) => env.DB.prepare(q)));
    res = out.map((r: { results?: unknown[] }) => (r.results ?? []) as Row[]);
  } catch (e) {
    console.error("insights: load failed", e);
    return { ...base, error: "The analytics data could not be loaded. Reload the page; if it keeps failing, the server log has the reason." };
  }

  const keyOf = (k: string) => sqlKeyToKey(c.s.gran, k, c.off);
  const idx = new Map(c.buckets.map((b, i) => [b.key, i]));
  const n = c.buckets.length;
  const zero = () => Array<number>(n).fill(0);
  const per: Record<string, number[]> = { views: zero(), visitors: zero(), visits: zero(), bvisits: zero(), p2: zero(), secs: zero(), timed: zero(), clicks: zero() };
  const tot: Record<string, { cur: number; prev: number }> = {};
  for (const k of Object.keys(per)) tot[k] = { cur: 0, prev: 0 };
  const add = (m: string, k: unknown, v: unknown) => {
    const key = keyOf(String(k));
    const i = idx.get(key);
    if (i !== undefined) per[m][i] += num(v);
    if (key === c.sel.key) tot[m].cur += num(v);
    if (c.cmp && key === c.cmp.key) tot[m].prev += num(v);
  };
  for (const r of res[0]) add("views", r.k, r.v);
  for (const r of res[1]) add("visitors", r.k, r.v);
  const srcSeries: Record<string, number[]> = {};
  for (const r of res[2]) {
    add("visits", r.k, r.v);
    const i = idx.get(keyOf(String(r.k)));
    if (i === undefined) continue;
    (srcSeries[String(r.source)] ??= zero())[i] += num(r.v);
  }
  const STAT: Record<string, string> = { landing: "bvisits", p2: "p2", time: "secs", timen: "timed", click: "clicks" };
  for (const r of res[3]) add(STAT[String(r.kind)], r.k, r.v);

  const since = res[12][0];
  const statSince = since?.a ? String(since.a) : null;
  const statStart = statSince ? dayMs(statSince) : Infinity;
  const hasCmp = !!c.cmp;
  const pairOf = (m: string): Pair => ({ cur: tot[m].cur, prev: hasCmp ? tot[m].prev : null });

  const series: SeriesRow[] = c.buckets.map((b, i) => {
    // behaviour metrics only exist from the first stat_daily day; earlier buckets show no value, not zero
    const tracked = b.end * 1000 > statStart;
    const bv = per.bvisits[i];
    return {
      key: b.key,
      name: b.name,
      dates: b.dates,
      tick: b.tick,
      v: {
        views: per.views[i],
        visitors: per.visitors[i],
        visits: per.visits[i],
        bounce: tracked && bv > 0 ? Math.max(0, 100 - (per.p2[i] / bv) * 100) : null,
        avgTime: tracked && bv > 0 ? per.secs[i] / bv : null,
        clicks: tracked ? per.clicks[i] : null,
      },
    };
  });

  const dims = base.dims;
  for (const r of res[4]) {
    const k = String(r.kind) as keyof typeof dims;
    dims[k]?.push({ key: String(r.key), cur: num(r.cur), prev: hasCmp ? num(r.prev) : null });
  }
  dims.page = res[10].map((r) => ({ key: String(r.key), cur: num(r.cur), prev: hasCmp ? num(r.prev) : null }));
  dims.source = res[11].map((r) => ({ key: String(r.key), cur: num(r.cur), prev: hasCmp ? num(r.prev) : null }));
  for (const k of Object.keys(dims) as (keyof typeof dims)[]) dims[k] = dims[k].filter((x) => x.cur || x.prev).sort((a, b) => b.cur - a.cur || (b.prev ?? 0) - (a.prev ?? 0));

  const clicks = res[5]
    .map((r) => {
      const [path, kind, label, target] = String(r.key).split("\t");
      return { path, kind: kind as "button" | "link" | "out", label, target: target ?? "", cur: num(r.cur), prev: hasCmp ? num(r.prev) : null };
    })
    .filter((x) => x.label && (x.cur || x.prev));
  const flows = res[6].map((r) => {
    const [from, to] = String(r.key).split("\t");
    return { from, to, n: num(r.v) };
  });
  const srcland = res[7].map((r) => {
    const [source, path] = String(r.key).split("\t");
    return { source, path, n: num(r.v) };
  });
  const tmap = new Map<string, { path: string; secs: number; n: number }>();
  const scroll: InsightsData["scroll"] = [];
  for (const r of res[8]) {
    const kind = String(r.kind);
    if (kind === "scroll") {
      const [path, b] = String(r.key).split("\t");
      scroll.push({ path, b: Number(b), n: num(r.v) });
      continue;
    }
    const t = tmap.get(String(r.key)) ?? { path: String(r.key), secs: 0, n: 0 };
    if (kind === "time") t.secs += num(r.v);
    else t.n += num(r.v);
    tmap.set(t.path, t);
  }

  // Hour heat map in the report time zone: UTC day + UTC hour, shifted by the offset.
  const heat = Array.from({ length: 7 }, () => Array<number>(24).fill(0));
  for (const r of res[9]) {
    const t = dayMs(String(r.day)) + Number(r.key) * 3_600_000 + c.off * 1000;
    const d = new Date(t);
    heat[(d.getUTCDay() + 6) % 7][d.getUTCHours()] += num(r.v);
  }

  const topSources = dims.source.slice(0, 12).map((x) => x.key);
  const sourceSeries = Object.fromEntries(topSources.map((k) => [k, srcSeries[k] ?? zero()]));
  const pageSeries: Record<string, number[]> = {};
  for (const r of res[13]) {
    const i = idx.get(keyOf(String(r.k)));
    if (i === undefined) continue;
    (pageSeries[String(r.path)] ??= zero())[i] += num(r.v);
  }

  return {
    ...base,
    statSince,
    since: since?.b ? String(since.b) : null,
    totals: {
      views: pairOf("views"),
      visitors: pairOf("visitors"),
      visits: pairOf("visits"),
      bvisits: pairOf("bvisits"),
      p2: pairOf("p2"),
      secs: pairOf("secs"),
      timed: pairOf("timed"),
      clicks: pairOf("clicks"),
    },
    series,
    dims,
    srcland,
    flows,
    time: [...tmap.values()].filter((t) => t.n > 0),
    scroll,
    clicks,
    heat,
    sourceSeries,
    pageSeries,
  };
}

function emptyData(c: Ctx, s: ReportState): InsightsData {
  const p = (x: Period) => ({ key: x.key, name: x.name, dates: x.dates, startDay: x.startDay });
  const z = (): Pair => ({ cur: 0, prev: c.cmp ? 0 : null });
  return {
    sel: p(c.sel),
    cmp: c.cmp ? { key: c.cmp.key, name: c.cmp.name } : null,
    statSince: null,
    since: null,
    totals: { views: z(), visitors: z(), visits: z(), bvisits: z(), p2: z(), secs: z(), timed: z(), clicks: z() },
    series: c.buckets.map((b) => ({ key: b.key, name: b.name, dates: b.dates, tick: b.tick, v: {} })),
    dims: { country: [], device: [], browser: [], os: [], landing: [], campaign: [], medium: [], exit: [], source: [], page: [] },
    srcland: [],
    flows: [],
    time: [],
    scroll: [],
    clicks: [],
    heat: Array.from({ length: 7 }, () => Array<number>(24).fill(0)),
    sourceSeries: {},
    pageSeries: {},
    tz: s.tz === "UTC" ? "UTC" : "Dhaka time (UTC+6)",
  };
}
