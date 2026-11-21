import "server-only";
import { getEnv } from "@/lib/db";
import { ordersCte } from "./datasets";
import { Q, makeCtx, unions, type Row, type Stmt } from "./engine";
import type { Period, ReportState } from "./period";
import type { Unit } from "./types";

/**
 * Hour-by-hour breakdown of one day (granularity "day" only), in the report time zone. Only data with a
 * timestamp can be split by hour: usage events, sign-ups, orders and tickets. Page views and visitors are stored
 * per UTC day and have no hours. One D1 batch of at most two statements; filters do not apply here.
 */

export type HourSeries = { id: string; label: string; unit: Unit; def: string; cur: number[]; prev: number[] | null; total: number; prevTotal: number | null };
export type Hourly = { day: Period; cmp: Period | null; series: HourSeries[]; queries: number };

const DEFS: { id: string; label: string; unit: Unit; def: string; money?: boolean }[] = [
  { id: "signups", label: "Sign-ups", unit: "count", def: "Accounts created in each hour (user.createdAt), same rule as Sign-ups in Audience." },
  { id: "events", label: "Actions", unit: "count", def: "Copies, downloads and installs recorded in each hour, from every client." },
  { id: "agents", label: "Agent calls", unit: "count", def: "Actions from the MCP server and the CLI in each hour." },
  { id: "tickets", label: "Tickets opened", unit: "count", def: "Support tickets created in each hour." },
  { id: "orders", label: "Orders", unit: "count", money: true, def: "Orders that took money, by order time: paid, refunded or partly refunded, same rule as Orders in Revenue." },
  { id: "net", label: "Net revenue", unit: "usd", money: true, def: "Gross minus refunds in USD for orders placed in each hour, same rule as Net revenue in Revenue." },
];

export async function loadHourly(s: ReportState, opts: { revenue: boolean }): Promise<Hourly | null> {
  if (s.gran !== "day") return null;
  const c = makeCtx(s);
  const off = Math.trunc(s.offset);
  const hour = (col: string) => `cast(strftime('%H', ${col} + ${off}, 'unixepoch') as integer)`;
  // "c:7" = hour 7 of the selected day, "p:7" = hour 7 of the comparison day.
  const which = (col: string) => `(case when ${c.inTs(col, c.sel)} then 'c' else 'p' end) || ':' || ${hour(col)}`;
  const win = (col: string) => (c.cmp ? `((${c.inTs(col, c.sel)}) or (${c.inTs(col, c.cmp)}))` : c.inTs(col, c.sel));
  const statements: Stmt[] = unions([
    () => `select 'signups', ${which("createdAt")}, count(*) from user where ${win("createdAt")} group by 2`,
    () => `select 'events', ${which("createdAt")}, count(*) from usage_event where ${win("createdAt")} group by 2`,
    () => `select 'agents', ${which("createdAt")}, count(*) from usage_event where client in ('mcp', 'cli') and ${win("createdAt")} group by 2`,
    () => `select 'tickets', ${which("createdAt")}, count(*) from ticket where ${win("createdAt")} group by 2`,
  ]);
  if (opts.revenue) {
    const q = new Q();
    const cte = ordersCte(c, q, win("createdAt"));
    statements.push(q.stmt(`with ${cte} select ${which("t")} k, sum(usd is not null) orders, coalesce(sum(usd), 0) - coalesce(sum(refund), 0) net from r group by 1`));
  }
  const env = await getEnv();
  const res = await env.DB.batch(statements.map((st) => env.DB.prepare(st.sql).bind(...st.params)));
  const rows = res.map((r: { results?: unknown[] }) => (r.results ?? []) as Row[]);
  const grid = new Map<string, { c: number[]; p: number[] }>();
  const put = (m: string, k: string, v: unknown) => {
    const [w, h] = k.split(":");
    const g = grid.get(m) ?? { c: Array(24).fill(0), p: Array(24).fill(0) };
    const i = Number(h);
    if (i >= 0 && i < 24) g[w === "c" ? "c" : "p"][i] += Number(v ?? 0);
    grid.set(m, g);
  };
  for (const r of rows[0] ?? []) put(String(r.m), String(r.k), r.v);
  for (const r of rows[1] ?? []) {
    put("orders", String(r.k), r.orders);
    put("net", String(r.k), r.net);
  }
  const sum = (a: number[]) => a.reduce((x, y) => x + y, 0);
  const series = DEFS.filter((d) => opts.revenue || !d.money).map((d) => {
    const g = grid.get(d.id) ?? { c: Array(24).fill(0), p: Array(24).fill(0) };
    return { id: d.id, label: d.label, unit: d.unit, def: d.def, cur: g.c, prev: c.cmp ? g.p : null, total: sum(g.c), prevTotal: c.cmp ? sum(g.p) : null };
  });
  return { day: c.sel, cmp: c.cmp, series, queries: statements.length };
}

/** Hourly series that belong under each dataset (Insights and Reports show them next to the dataset's trend). */
export const HOURLY_OF: Partial<Record<string, string[]>> = { audience: ["signups"], usage: ["events"], agents: ["agents"], support: ["tickets"], revenue: ["net", "orders"] };

/** The hourly block for one dataset, or null. */
export function hourlyFor(h: Hourly | null, dataset: string, s: ReportState) {
  if (!h) return null;
  const ids = HOURLY_OF[dataset] ?? [];
  const series = h.series.filter((x) => ids.includes(x.id));
  return series.length ? { series, tz: s.tz === "UTC" ? "UTC" : "Dhaka time (UTC+6)" } : null;
}

/** "07:00" */
export const hourLabel = (h: number) => `${String(h).padStart(2, "0")}:00`;
