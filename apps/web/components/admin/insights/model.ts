import type { InsightsData } from "@/lib/analytics/insights";

/** Pure helpers that derive per-page and per-source views from the loaded Insights data. */

export type PageStat = {
  path: string;
  views: number;
  viewsPrev: number | null;
  entrances: number;
  exits: number;
  exitRate: number | null;
  avgTime: number | null;
  /** share of measured views that scrolled to 75% or more */
  read: number | null;
  measured: number;
};

export function pageStats(d: InsightsData): PageStat[] {
  const land = new Map(d.dims.landing.map((x) => [x.key, x.cur]));
  const exit = new Map(d.dims.exit.map((x) => [x.key, x.cur]));
  const time = new Map(d.time.map((t) => [t.path, t]));
  const scroll = new Map<string, { all: number; deep: number }>();
  for (const s of d.scroll) {
    const x = scroll.get(s.path) ?? { all: 0, deep: 0 };
    x.all += s.n;
    if (s.b >= 75) x.deep += s.n;
    scroll.set(s.path, x);
  }
  return d.dims.page.map((p) => {
    const t = time.get(p.key);
    const sc = scroll.get(p.key);
    const exits = exit.get(p.key) ?? 0;
    return {
      path: p.key,
      views: p.cur,
      viewsPrev: p.prev,
      entrances: land.get(p.key) ?? 0,
      exits,
      exitRate: p.cur > 0 && d.statSince ? Math.min(100, (exits / p.cur) * 100) : null,
      avgTime: t && t.n ? t.secs / t.n : null,
      read: sc && sc.all ? (sc.deep / sc.all) * 100 : null,
      measured: t?.n ?? 0,
    };
  });
}

export function cameFrom(d: InsightsData, path: string) {
  const prev = d.flows.filter((f) => f.to === path && f.from !== path).map((f) => ({ key: "p:" + f.from, label: f.from, n: f.n }));
  const ext = d.srcland.filter((s) => s.path === path).map((s) => ({ key: "s:" + s.source, label: s.source === "direct" ? "Direct or unknown" : s.source, n: s.n, hint: "(entered the site)" }));
  return [...prev, ...ext].sort((a, b) => b.n - a.n);
}

export function wentTo(d: InsightsData, path: string) {
  const next = d.flows.filter((f) => f.from === path && f.to !== path).map((f) => ({ key: "p:" + f.to, label: f.to, n: f.n }));
  const exits = d.dims.exit.find((x) => x.key === path)?.cur ?? 0;
  const out = exits ? [{ key: "x:exit", label: "Left the site", n: exits }] : [];
  return [...next, ...out].sort((a, b) => b.n - a.n);
}

export const scrollOf = (d: InsightsData, path: string) => d.scroll.filter((s) => s.path === path);
export const clicksOn = (d: InsightsData, path: string) => d.clicks.filter((c) => c.path === path);
