import "server-only";
import { getEnv } from "@/lib/db";
import { comparePeriod, type ReportState } from "@/lib/reports/period";

/**
 * Edge numbers from Cloudflare's GraphQL Analytics API (zone httpRequests1dGroups): every request the zone
 * served, including visitors who block scripts, bots, and threats Cloudflare stopped. Needs two settings on
 * the web worker: CF_ZONE_ID (the ingotui.com zone id) and the secret CF_API_TOKEN (a token with
 * "Zone > Analytics > Read" on that zone). Without them the page shows how to connect it. Responses are cached
 * for ten minutes in the Workers cache, so opening the page often costs one API call per ten minutes per range.
 */

export type EdgeTotals = { requests: number; bytes: number; cached: number; threats: number; pageViews: number; uniques: number };
export type EdgeData =
  | { state: "off" }
  | { state: "error"; message: string }
  | {
      state: "ok";
      cur: EdgeTotals;
      prev: EdgeTotals | null;
      countries: { name: string; requests: number; threats: number }[];
      status: { code: number; requests: number }[];
      browsers: { name: string; pageViews: number }[];
      days: { day: string; requests: number; uniques: number }[];
    };

type Group = {
  dimensions: { date: string };
  sum: {
    requests: number;
    bytes: number;
    cachedRequests: number;
    threats: number;
    pageViews: number;
    countryMap: { clientCountryName: string; requests: number; threats: number }[];
    browserMap: { uaBrowserFamily: string; pageViews: number }[];
    responseStatusMap: { edgeResponseStatus: number; requests: number }[];
  };
  uniq: { uniques: number };
};

const QUERY = `query($zone: String!, $since: Date!, $until: Date!) {
  viewer { zones(filter: { zoneTag: $zone }) {
    httpRequests1dGroups(limit: 400, filter: { date_geq: $since, date_lt: $until }, orderBy: [date_ASC]) {
      dimensions { date }
      sum { requests bytes cachedRequests threats pageViews
        countryMap { clientCountryName requests threats }
        browserMap { uaBrowserFamily pageViews }
        responseStatusMap { edgeResponseStatus requests } }
      uniq { uniques }
    } } } }`;

const zeroT = (): EdgeTotals => ({ requests: 0, bytes: 0, cached: 0, threats: 0, pageViews: 0, uniques: 0 });

export async function loadEdge(s: ReportState): Promise<EdgeData> {
  const env = (await getEnv()) as unknown as { CF_API_TOKEN?: string; CF_ZONE_ID?: string };
  const token = env.CF_API_TOKEN;
  const zone = env.CF_ZONE_ID;
  if (!token || !zone || !/^[a-f0-9]{32}$/.test(zone)) return { state: "off" };
  const sel = s.period;
  const cmp = comparePeriod(s);
  const since = cmp && cmp.startDay < sel.startDay ? cmp.startDay : sel.startDay;
  const until = sel.endDay;

  let groups: Group[];
  try {
    groups = await cached(`${zone}:${since}:${until}`, async () => {
      const r = await fetch("https://api.cloudflare.com/client/v4/graphql", {
        method: "POST",
        headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
        body: JSON.stringify({ query: QUERY, variables: { zone, since, until } }),
      });
      const j = (await r.json()) as { data?: { viewer?: { zones?: { httpRequests1dGroups?: Group[] }[] } }; errors?: { message: string }[] | null };
      if (j.errors?.length) throw new Error(j.errors[0].message);
      if (!r.ok) throw new Error(`Cloudflare answered ${r.status}`);
      return j.data?.viewer?.zones?.[0]?.httpRequests1dGroups ?? [];
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "unknown error";
    return { state: "error", message: /quota|limit|range|too old|retention/i.test(msg) ? `Cloudflare does not keep edge data that far back on this plan (${msg}).` : `Cloudflare analytics could not be loaded: ${msg}` };
  }

  const cur = zeroT();
  const prev = cmp ? zeroT() : null;
  const countries = new Map<string, { requests: number; threats: number }>();
  const status = new Map<number, number>();
  const browsers = new Map<string, number>();
  const days: { day: string; requests: number; uniques: number }[] = [];
  for (const g of groups) {
    const d = g.dimensions.date;
    const into = d >= sel.startDay && d < sel.endDay ? cur : prev && cmp && d >= cmp.startDay && d < cmp.endDay ? prev : null;
    if (!into) continue;
    into.requests += g.sum.requests;
    into.bytes += g.sum.bytes;
    into.cached += g.sum.cachedRequests;
    into.threats += g.sum.threats;
    into.pageViews += g.sum.pageViews;
    into.uniques += g.uniq.uniques;
    if (into !== cur) continue;
    days.push({ day: d, requests: g.sum.requests, uniques: g.uniq.uniques });
    for (const x of g.sum.countryMap) {
      const c = countries.get(x.clientCountryName) ?? { requests: 0, threats: 0 };
      c.requests += x.requests;
      c.threats += x.threats;
      countries.set(x.clientCountryName, c);
    }
    for (const x of g.sum.responseStatusMap) status.set(x.edgeResponseStatus, (status.get(x.edgeResponseStatus) ?? 0) + x.requests);
    for (const x of g.sum.browserMap) browsers.set(x.uaBrowserFamily, (browsers.get(x.uaBrowserFamily) ?? 0) + x.pageViews);
  }
  return {
    state: "ok",
    cur,
    prev,
    countries: [...countries].map(([name, v]) => ({ name, ...v })).sort((a, b) => b.requests - a.requests),
    status: [...status].map(([code, requests]) => ({ code, requests })).sort((a, b) => b.requests - a.requests),
    browsers: [...browsers].map(([name, pageViews]) => ({ name, pageViews })).filter((b) => b.pageViews > 0).sort((a, b) => b.pageViews - a.pageViews),
    days,
  };
}

async function cached<T>(key: string, load: () => Promise<T>): Promise<T> {
  const cache = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
  const req = new Request(`https://edge-analytics.internal/${encodeURIComponent(key)}`);
  if (cache) {
    const hit = await cache.match(req).catch(() => undefined);
    if (hit) return (await hit.json()) as T;
  }
  const v = await load();
  if (cache) await cache.put(req, new Response(JSON.stringify(v), { headers: { "cache-control": "max-age=600", "content-type": "application/json" } })).catch(() => {});
  return v;
}
