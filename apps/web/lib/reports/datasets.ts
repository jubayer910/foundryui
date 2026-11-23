import "server-only";
import { describeTarget } from "@/components/admin/analytics";
import { posts as codePosts } from "@/lib/blog";
import { systems } from "@/lib/catalog";
import { getSettings } from "@/lib/settings";
import { PAYING_IDS_SQL } from "@/lib/paying";
import { DATASET_LABEL, keyOfDay, type DatasetId } from "./period";
import { Q, unions, assemble, breakdownRows, collect, date, int, pctOf, ratio, running, selOrCmp, sinceOf, startNote, sumIn, type Built, type Ctx, type Row } from "./engine";
import type { Breakdown, DatasetResult, MetricDef } from "./types";

/**
 * The eight report datasets. Each `build` returns its grouped SQL statements (sent as one D1 batch) and a
 * `finish` that turns the rows into a DatasetResult. Definitions here are the ones shown on the page, in
 * the info popovers and in every export, so the wording is the contract.
 */

const DAY_TABLE_NOTE = "Stored per UTC day. In Asia/Dhaka view each UTC day counts in the period that contains its date, so period edges can be up to 6 hours off.";

const PLAN_NAME: Record<string, string> = { free: "Free", pro: "Pro", lifetime: "Lifetime", team: "Team" };
const ACTION_NAME: Record<string, string> = { copy_code: "Copy React code", copy_figma: "Copy Figma layers", download_png: "Download PNG", download_svg: "Download SVG", download_jpeg: "Download JPEG", install: "Install (CLI)" };
const CLIENT_NAME: Record<string, string> = { web: "Website", mcp: "MCP server", cli: "CLI" };
export const REV_PLAN_NAME: Record<string, string> = { proMonthly: "Pro monthly", proYearly: "Pro yearly", lifetimeDeal: "Lifetime deal", lifetimeAfter: "Lifetime", teamMonthly: "Team monthly", teamYearly: "Team yearly", other: "Other or unknown" };
export const PROVIDER_NAME: Record<string, string> = { lemonsqueezy: "Lemon Squeezy", contra: "Contra" };
const OPTION_NAME: Record<string, string> = { proMonthly: "Pro monthly", proYearly: "Pro yearly", teamMonthly: "Team monthly", teamYearly: "Team yearly", lifetime: "Lifetime" };

/** Filter choices the controls offer (values are validated against these before they reach SQL). */
export const FILTER_CHOICES = {
  uplan: Object.keys(PLAN_NAME).map((v) => ({ v, label: PLAN_NAME[v] })),
  client: Object.keys(CLIENT_NAME).map((v) => ({ v, label: CLIENT_NAME[v] })),
  system: [...systems.map((s) => ({ v: s.slug, label: s.name })), { v: "icons", label: "Icons" }, { v: "core", label: "Core registry" }],
  rplan: Object.keys(REV_PLAN_NAME).map((v) => ({ v, label: REV_PLAN_NAME[v] })),
  provider: Object.keys(PROVIDER_NAME).map((v) => ({ v, label: PROVIDER_NAME[v] })),
};
const valid = (k: keyof typeof FILTER_CHOICES, v: string) => (FILTER_CHOICES[k].some((c) => c.v === v) ? v : "");
const choiceLabel = (k: keyof typeof FILTER_CHOICES, v: string) => FILTER_CHOICES[k].find((c) => c.v === v)?.label ?? v;

/** usage_event.target to design system slug, "icons" or "core", in SQL. Slugs come from our catalog. */
const SYS_SQL = `(case when target like 'icon:%' then 'icons' ${systems.map((s) => (/^[a-z0-9-]+$/.test(s.slug) ? `when target like '${s.slug}-%' then '${s.slug}' ` : "")).join("")}else 'core' end)`;
const systemName = (slug: string) => (slug === "icons" ? "Icons" : slug === "core" ? "Core registry" : (systems.find((s) => s.slug === slug)?.name ?? slug));

const base = (id: DatasetId, intro: string, metrics: MetricDef[]): Pick<DatasetResult, "id" | "title" | "intro" | "metrics"> => ({ id, title: DATASET_LABEL[id], intro, metrics });
const notesOf = (...n: (string | null | false | undefined)[]) => n.filter((x): x is string => !!x);

/* ------------------------------------------------------------------ Traffic */

const TRAFFIC: MetricDef[] = [
  { id: "views", label: "Page views", unit: "count", total: "sum", kpi: true, chart: true, def: "Page views counted by the site beacon: cookieless, bots and Do Not Track browsers excluded, admin and API paths left out. Summed per day." },
  { id: "visitors", label: "Visitors", unit: "count", total: "sum", kpi: true, chart: true, def: "Unique cookieless visitors per day, summed per period, so a person visiting on 3 days counts 3 times. A visitor is a hash of IP and browser that changes every day, so nobody can be followed across days." },
  { id: "viewsPerVisitor", label: "Views per visitor", unit: "ratio", total: "derived", kpi: true, def: "Page views divided by visitors in the same period.", derive: (v) => ratio(v.views, v.visitors) },
  { id: "entrances", label: "Entrances", unit: "count", total: "sum", kpi: true, chart: true, def: "Landing page views: the first view of a visit, counted by source (utm_source, else the referring site, else Direct). The source filter applies here." },
  { id: "topPage", label: "Top page", unit: "text", total: "none", def: "The page with the most views in the period." },
  { id: "topSource", label: "Top source", unit: "text", total: "none", def: "The source with the most entrances in the period." },
];

function traffic(c: Ctx): Built {
  const src = c.s.filters.source;
  const q = new Q();
  const span = (col: string) => c.inDay(col, c.span);
  const srcF = src ? ` and source = ${q.p(src)}` : "";
  const series = q.stmt(
    `select 'views' m, ${c.db("day")} k, sum(views) v from pageview_daily where ${span("day")} group by 2
     union all select 'visitors', ${c.db("day")}, sum(visitors) from visitor_daily where ${span("day")} group by 2
     union all select 'entrances', ${c.db("day")}, sum(views) from referrer_daily where ${span("day")}${srcF} group by 2
     union all select 'topPage', k, path from (select ${c.db("day")} k, path, row_number() over (partition by ${c.db("day")} order by sum(views) desc, path) rn from pageview_daily where ${span("day")} group by 1, path) where rn = 1
     union all select 'topSource', k, source from (select ${c.db("day")} k, source, row_number() over (partition by ${c.db("day")} order by sum(views) desc, source) rn from referrer_daily where ${span("day")}${src ? ` and source = ${q.p(src)}` : ""} group by 1, source) where rn = 1`,
  );
  const q2 = new Q();
  const inP = (w: { startDay: string; endDay: string }) => `day >= ${date(w.startDay)} and day < ${date(w.endDay)}`;
  const bd = q2.stmt(
    `select * from (select 'pages' g, path label, ${sumIn(c, "cur", inP, "views")} cur, ${sumIn(c, "prev", inP, "views")} prev from pageview_daily where ${selOrCmp(c, inP)} group by path order by cur desc, prev desc limit 15)
     union all select * from (select 'sources' g, source label, ${sumIn(c, "cur", inP, "views")} cur, ${sumIn(c, "prev", inP, "views")} prev from referrer_daily where ${selOrCmp(c, inP)}${src ? ` and source = ${q2.p(src)}` : ""} group by source order by cur desc, prev desc limit 12)`,
  );
  const since = { sql: `select (select min(day) from pageview_daily) a, (select min(day) from referrer_daily) b`, params: [] };
  return {
    statements: [series, bd, since],
    finish: ([s, b, f]) => {
      const map = collect(c, s);
      const hasPrev = !!c.cmp;
      const since = sinceOf(c, f[0]?.a, f[0]?.b);
      const breakdowns: Breakdown[] = [
        { id: "pages", title: "Top pages", head: "Page", unit: "count", scope: "selected", def: "Page views per path in the selected period.", rows: breakdownRows(b, "pages", hasPrev, undefined, (p) => p), empty: "No page views in this period." },
        { id: "sources", title: "Top sources", head: "Source", unit: "count", scope: "selected", def: "Entrances per source in the selected period. Direct means no referrer and no utm_source.", rows: breakdownRows(b, "sources", hasPrev, (x) => (x === "direct" ? "Direct or unknown" : x)), empty: "No entrances in this period." },
      ];
      return {
        ...base("traffic", "First-party, cookieless page views from the site beacon.", TRAFFIC),
        ...assemble(c, TRAFFIC, map),
        breakdowns,
        since,
        filters: src ? [{ label: "Source", value: src === "direct" ? "Direct or unknown" : src }] : [],
        notes: notesOf(startNote(c, since, "page view"), c.s.tz !== "UTC" && DAY_TABLE_NOTE, src && "The source filter narrows entrances and top sources only. Page views and visitors are not stored per source."),
      };
    },
  };
}

/* ------------------------------------------------------------------ Audience and users */

const AUDIENCE: MetricDef[] = [
  { id: "signups", label: "Sign-ups", unit: "count", total: "sum", kpi: true, chart: true, def: "Accounts created in the period (user.createdAt). Staff accounts are included." },
  { id: "paidNow", label: "Sign-ups now paying", unit: "count", total: "sum", def: "Sign-ups from the period on Pro, Team or Lifetime today because they paid (Lemon Squeezy, Contra or AppSumo). Gifted Lifetime and staff grants are left out. It is today's plan, not the plan at the time." },
  { id: "users", label: "Users in total", unit: "count", total: "last", kpi: true, chart: true, def: "All accounts created up to the end of the period. Deleted accounts are not counted, because they are gone from the table." },
  { id: "active", label: "Active users", unit: "count", total: "range", kpi: true, chart: true, def: "Signed-in accounts with at least one copy, download or install in the period, counted once each. The total is counted once over the whole range." },
  { id: "activeRate", label: "Active share", unit: "pct", total: "derived", def: "Active users as a share of users in total at the end of the period.", derive: (v) => pctOf(v.active, v.users) },
  { id: "waitlist", label: "Waitlist joins", unit: "count", total: "sum", chart: true, def: "Emails added to the waitlist in the period." },
];

function audience(c: Ctx): Built {
  const plan = valid("uplan", c.s.filters.uplan);
  const ref = c.s.filters.ref;
  const uf = (q: Q) => `${plan ? ` and plan = ${q.p(plan)}` : ""}${ref ? ` and coalesce(ref, '') = ${q.p(ref === "(none)" ? "" : ref)}` : ""}`;
  const uSub = (q: Q) => (plan || ref ? ` and e.userId in (select id from user where 1 = 1${uf(q)})` : "");
  const series = unions([
    (q) => `select 'signups' m, ${c.tb("createdAt")} k, count(*) v from user where ${c.inTs("createdAt", c.span)}${uf(q)} group by 2`,
    (q) => `select 'paidNow', ${c.tb("createdAt")}, count(*) from user where ${c.inTs("createdAt", c.span)} and plan != 'free' and id in (${PAYING_IDS_SQL})${uf(q)} group by 2`,
    (q) => `select 'active', ${c.tb("e.createdAt")}, count(distinct e.userId) from usage_event e where e.userId is not null and ${c.inTs("e.createdAt", c.span)}${uSub(q)} group by 2`,
    (q) => `select 'active', '__range', count(distinct e.userId) from usage_event e where e.userId is not null and ${c.inTs("e.createdAt", c.range)}${uSub(q)}`,
    (q) => `select 'users', '__before', count(*) from user where createdAt < ${int(c.span.start)}${uf(q)}`,
    () => `select 'waitlist', ${c.tb("createdAt")}, count(*) from waitlist where ${c.inTs("createdAt", c.span)} group by 2`,
  ]);
  const q2 = new Q();
  const inP = (w: { start: number; end: number }) => c.inTs("createdAt", w);
  const uf2 = () => `${plan ? ` and plan = ${q2.p(plan)}` : ""}${ref ? ` and coalesce(ref, '') = ${q2.p(ref === "(none)" ? "" : ref)}` : ""}`;
  const bd = q2.stmt(
    `select * from (select 'plan' g, plan label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from user where ${selOrCmp(c, inP)}${uf2()} group by plan order by cur desc)
     union all select * from (select 'ref' g, coalesce(nullif(ref, ''), '(none)') label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from user where ${selOrCmp(c, inP)}${uf2()} group by 2 order by cur desc, prev desc limit 12)
     union all select * from (select 'planAll' g, plan label, count(*) cur, null prev from user where 1 = 1${uf2()} group by plan order by cur desc)`,
  );
  const since = { sql: `select min(createdAt) a from user`, params: [] };
  return {
    statements: [...series, bd, since],
    finish: (res) => {
      const [b, f] = res.slice(series.length);
      const map = collect(c, ...res.slice(0, series.length));
      running(c, map, "signups", "users", Number(map.get("__before")?.users ?? 0));
      const hasPrev = !!c.cmp;
      const since = sinceOf(c, f[0]?.a);
      const pn = (p: string) => PLAN_NAME[p] ?? p;
      const filters = [...(plan ? [{ label: "Plan now", value: pn(plan) }] : []), ...(ref ? [{ label: "Ref link", value: ref }] : [])];
      return {
        ...base("audience", "Accounts, activity and where sign-ups came from.", AUDIENCE),
        ...assemble(c, AUDIENCE, map),
        breakdowns: [
          { id: "plan", title: "Sign-ups by plan today", head: "Plan", unit: "count", scope: "selected", def: "Sign-ups in the period grouped by the plan they are on today.", rows: breakdownRows(b, "plan", hasPrev, pn), empty: "No sign-ups in this period." },
          { id: "ref", title: "Sign-ups by ref link", head: "Ref link", unit: "count", scope: "selected", def: "The ?ref= link that brought the visitor in the 30 days before sign-up. (none) means no ref link; other sources are not stored per account.", rows: breakdownRows(b, "ref", hasPrev), empty: "No sign-ups in this period." },
          { id: "planAll", title: "Plan mix today", head: "Plan", unit: "count", scope: "now", def: "Every account grouped by its plan right now (not limited to the period).", rows: breakdownRows(b, "planAll", false, pn), empty: "No accounts yet." },
        ],
        since,
        filters,
        notes: notesOf(startNote(c, since, "account"), filters.length > 0 && "Filters apply to sign-ups, users in total and active users, not to waitlist joins.", "Sign-up source beyond ?ref= links is not tracked per account."),
      };
    },
  };
}

/* ------------------------------------------------------------------ Product usage */

const USAGE: MetricDef[] = [
  { id: "events", label: "Actions", unit: "count", total: "sum", chart: true, def: "Every recorded copy, download and install (usage_event rows) in the period." },
  { id: "copies", label: "Copies", unit: "count", total: "sum", kpi: true, chart: true, def: "Copy React code plus Copy Figma layers." },
  { id: "copyCode", label: "Copy React code", unit: "count", total: "sum", def: "Copies of a component's React code." },
  { id: "copyFigma", label: "Copy Figma layers", unit: "count", total: "sum", def: "Copies of a component's Figma layers." },
  { id: "downloads", label: "Downloads", unit: "count", total: "sum", kpi: true, chart: true, def: "Icon and image downloads (PNG, SVG, JPEG)." },
  { id: "installs", label: "Installs", unit: "count", total: "sum", def: "Components installed with the CLI." },
  { id: "actors", label: "People who used it", unit: "count", total: "range", kpi: true, chart: true, def: "Distinct accounts plus distinct anonymous browsers with at least one action. A person who used it signed out and then signed in counts twice. The total is counted once over the whole range." },
  { id: "topComp", label: "Top component", unit: "text", total: "none", def: "The component (not icon) copied most in the period." },
];

function usageFilters(c: Ctx, q: Q, opts: { client: boolean }) {
  const client = opts.client ? valid("client", c.s.filters.client) : "";
  const system = valid("system", c.s.filters.system);
  return {
    client,
    system,
    sql: () => `${client ? ` and client = ${q.p(client)}` : ""}${system ? ` and ${SYS_SQL} = ${q.p(system)}` : ""}`,
  };
}

function usage(c: Ctx): Built {
  const q = new Q();
  const f = usageFilters(c, q, { client: true });
  const wide = q.stmt(
    `select ${c.tb("createdAt")} k, count(*) events, sum(action like 'copy%') copies, sum(action = 'copy_code') copyCode, sum(action = 'copy_figma') copyFigma, sum(action like 'download%') downloads, sum(action = 'install') installs, count(distinct coalesce(userId, 'a:' || anonId)) actors
     from usage_event where ${c.inTs("createdAt", c.span)}${f.sql()} group by 1`,
  );
  const q2 = new Q();
  const f2 = usageFilters(c, q2, { client: true });
  const long = q2.stmt(
    `select 'actors' m, '__range' k, count(distinct coalesce(userId, 'a:' || anonId)) v from usage_event where ${c.inTs("createdAt", c.range)}${f2.sql()}
     union all select 'topComp', k, target from (select ${c.tb("createdAt")} k, target, row_number() over (partition by ${c.tb("createdAt")} order by count(*) desc, target) rn from usage_event where ${c.inTs("createdAt", c.span)} and action like 'copy%' and target not like 'icon:%'${f2.sql()} group by 1, target) where rn = 1`,
  );
  const q3 = new Q();
  const f3 = usageFilters(c, q3, { client: true });
  const inP = (w: { start: number; end: number }) => c.inTs("createdAt", w);
  const W = () => `${selOrCmp(c, inP)}${f3.sql()}`;
  const bd = q3.stmt(
    `select * from (select 'action' g, action label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from usage_event where ${W()} group by action order by cur desc)
     union all select * from (select 'client' g, client label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from usage_event where ${W()} group by client order by cur desc)
     union all select * from (select 'system' g, ${SYS_SQL} label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from usage_event where action like 'copy%' and ${W()} group by 2 order by cur desc)
     union all select * from (select 'comps' g, target label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from usage_event where action like 'copy%' and target not like 'icon:%' and ${W()} group by target order by cur desc, prev desc limit 15)
     union all select * from (select 'icons' g, target label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from usage_event where target like 'icon:%' and ${W()} group by target order by cur desc, prev desc limit 15)`,
  );
  const since = { sql: `select min(createdAt) a from usage_event`, params: [] };
  return {
    statements: [wide, long, bd, since],
    finish: ([w, l, b, s]) => {
      const map = collect(c, w, l);
      for (const v of map.values()) if (typeof v.topComp === "string") v.topComp = describeTarget(v.topComp).name;
      const hasPrev = !!c.cmp;
      const since = sinceOf(c, s[0]?.a);
      const filters = [...(f.client ? [{ label: "Client", value: CLIENT_NAME[f.client] }] : []), ...(f.system ? [{ label: "System", value: choiceLabel("system", f.system) }] : [])];
      return {
        ...base("usage", "Copies, downloads and installs of components and icons.", USAGE),
        ...assemble(c, USAGE, map),
        breakdowns: [
          { id: "action", title: "By action", head: "Action", unit: "count", scope: "selected", rows: breakdownRows(b, "action", hasPrev, (a) => ACTION_NAME[a] ?? a), empty: "No actions in this period." },
          { id: "client", title: "By client", head: "Client", unit: "count", scope: "selected", rows: breakdownRows(b, "client", hasPrev, (x) => CLIENT_NAME[x] ?? x), empty: "No actions in this period." },
          { id: "system", title: "Copies by design system", head: "Design system", unit: "count", scope: "selected", def: "Read from the component slug: a slug that starts with a system name belongs to that system, icon: targets are Icons, the rest is the core registry.", rows: breakdownRows(b, "system", hasPrev, systemName), empty: "No copies in this period." },
          { id: "comps", title: "Top components", head: "Component", unit: "count", scope: "selected", rows: breakdownRows(b, "comps", hasPrev, (t) => { const d = describeTarget(t); return `${d.name} (${d.system})`; }, (t) => describeTarget(t).href), empty: "No component copies in this period." },
          { id: "icons", title: "Top icons", head: "Icon", unit: "count", scope: "selected", rows: breakdownRows(b, "icons", hasPrev, (t) => t.replace(/^icon:/, "")), empty: "No icon copies or downloads in this period." },
        ],
        since,
        filters,
        notes: notesOf(startNote(c, since, "action")),
      };
    },
  };
}

/* ------------------------------------------------------------------ MCP and CLI */

const AGENTS: MetricDef[] = [
  { id: "calls", label: "Agent calls", unit: "count", total: "sum", kpi: true, chart: true, def: "Recorded actions from the MCP server plus the CLI.", derive: (v) => Number(v.mcp ?? 0) + Number(v.cli ?? 0) },
  { id: "mcp", label: "MCP calls", unit: "count", total: "sum", kpi: true, chart: true, def: "Recorded actions with client mcp (an AI agent copying a component through the MCP server)." },
  { id: "cli", label: "CLI calls", unit: "count", total: "sum", kpi: true, chart: true, def: "Recorded actions with client cli (installs and copies from the command line)." },
  { id: "accounts", label: "Accounts using agents", unit: "count", total: "range", def: "Distinct accounts with at least one MCP or CLI action. The total is counted once over the whole range." },
  { id: "keys", label: "API keys created", unit: "count", total: "sum", kpi: true, chart: true, def: "API keys created in the period (needed for the MCP server and the CLI). Deleted keys are not counted." },
  { id: "keysTotal", label: "API keys in total", unit: "count", total: "last", def: "API keys that exist and were created by the end of the period." },
];

function agents(c: Ctx): Built {
  const q = new Q();
  const f = usageFilters(c, q, { client: false });
  const wide = q.stmt(
    `select ${c.tb("createdAt")} k, sum(client = 'mcp') mcp, sum(client = 'cli') cli, count(distinct userId) accounts from usage_event where client in ('mcp', 'cli') and ${c.inTs("createdAt", c.span)}${f.sql()} group by 1`,
  );
  const q2 = new Q();
  const f2 = usageFilters(c, q2, { client: false });
  const long = q2.stmt(
    `select 'accounts' m, '__range' k, count(distinct userId) v from usage_event where client in ('mcp', 'cli') and ${c.inTs("createdAt", c.range)}${f2.sql()}
     union all select 'keys', ${c.tb("createdAt")}, count(*) from api_key where ${c.inTs("createdAt", c.span)} group by 2
     union all select 'keysTotal', '__before', count(*) from api_key where createdAt < ${int(c.span.start)}`,
  );
  const q3 = new Q();
  const f3 = usageFilters(c, q3, { client: false });
  const inP = (w: { start: number; end: number }) => c.inTs("createdAt", w);
  const W = () => `client in ('mcp', 'cli') and ${selOrCmp(c, inP)}${f3.sql()}`;
  const bd = q3.stmt(
    `select * from (select 'comps' g, target label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from usage_event where ${W()} group by target order by cur desc, prev desc limit 15)
     union all select * from (select 'action' g, client || ':' || action label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from usage_event where ${W()} group by 2 order by cur desc)`,
  );
  const since = { sql: `select (select min(createdAt) from usage_event where client in ('mcp', 'cli')) a, (select min(createdAt) from api_key) b`, params: [] };
  return {
    statements: [wide, long, bd, since],
    finish: ([w, l, b, s]) => {
      const map = collect(c, w, l);
      running(c, map, "keys", "keysTotal", Number(map.get("__before")?.keysTotal ?? 0));
      const hasPrev = !!c.cmp;
      const since = sinceOf(c, s[0]?.a);
      return {
        ...base("agents", "AI agents and the command line: calls by client and the API keys they use.", AGENTS),
        ...assemble(c, AGENTS, map),
        breakdowns: [
          { id: "comps", title: "Top components through agents", head: "Component", unit: "count", scope: "selected", rows: breakdownRows(b, "comps", hasPrev, (t) => { const d = describeTarget(t); return `${d.name} (${d.system})`; }), empty: "No agent calls in this period." },
          { id: "action", title: "By client and action", head: "Client and action", unit: "count", scope: "selected", rows: breakdownRows(b, "action", hasPrev, (x) => { const [cl, ac] = x.split(":"); return `${CLIENT_NAME[cl] ?? cl}: ${ACTION_NAME[ac] ?? ac}`; }), empty: "No agent calls in this period." },
        ],
        since,
        filters: f.system ? [{ label: "System", value: choiceLabel("system", f.system) }] : [],
        notes: notesOf(
          since ? startNote(c, since, "MCP or CLI call") : "No MCP or CLI call has been recorded yet. Only actions that go through the copy gate are recorded; MCP searches and listings are not. API key creation is counted from its own table.",
          "API keys have no usage log (lastUsedAt is not written yet), so keys used per period can't be shown.",
        ),
      };
    },
  };
}

/* ------------------------------------------------------------------ Revenue */

const REVENUE: MetricDef[] = [
  { id: "gross", label: "Gross revenue", unit: "usd", total: "sum", kpi: true, chart: true, def: "Money taken by orders placed in the period (paid, refunded and partly refunded orders), in USD, by order date. Lemon Squeezy's USD total is used; Contra orders are in USD. Staff grants are $0 and left out." },
  { id: "refunds", label: "Refunds", unit: "usd", total: "sum", kpi: true, chart: true, invert: true, def: "Money given back on orders placed in the period, in USD, counted on the order's date (not the refund date)." },
  { id: "net", label: "Net revenue", unit: "usd", total: "derived", kpi: true, chart: true, def: "Net revenue = paid minus refunded, in USD, by order date (gross revenue minus refunds).", derive: (v) => Number(v.gross ?? 0) - Number(v.refunds ?? 0) },
  { id: "orders", label: "Orders", unit: "count", total: "sum", kpi: true, chart: true, def: "Orders that took money in the period: paid, refunded or partly refunded." },
  { id: "refundedOrders", label: "Refunded orders", unit: "count", total: "sum", invert: true, def: "Orders from the period that were fully refunded." },
  { id: "aov", label: "Average order value", unit: "usd", total: "derived", kpi: true, def: "Gross revenue divided by orders, in USD.", derive: (v) => (Number(v.orders) > 0 ? Math.round(Number(v.gross ?? 0) / Number(v.orders)) : null) },
  { id: "ltd", label: "Lifetime deal sales", unit: "count", total: "sum", kpi: true, chart: true, def: "Lifetime deal orders from the period that were not fully refunded." },
  { id: "newSubs", label: "New subscriptions", unit: "count", total: "sum", chart: true, def: "Subscriptions (Pro or Team, monthly or yearly) that started in the period." },
  { id: "endedSubs", label: "Ended subscriptions", unit: "count", total: "sum", invert: true, def: "Cancelled or expired subscriptions whose end date fell in the period (and has passed)." },
  { id: "mrr", label: "MRR at period end", unit: "usd", total: "last", kpi: true, chart: true, def: "Monthly recurring revenue at the end of the period (or now, for a period still running): monthly subscriptions at their price plus yearly ones divided by 12. Same rule as the Revenue page: active and past-due subscriptions count; ones that have ended count from their start until their end date; cancelled ones still in their last paid period are left out. Rebuilt from today's subscription rows, so past pauses or failed payments are not visible." },
  { id: "arr", label: "ARR at period end", unit: "usd", total: "last", def: "MRR at period end times 12.", derive: (v) => (v.mrr === null ? null : Number(v.mrr) * 12) },
  { id: "grants", label: "Plans granted by staff", unit: "count", total: "sum", def: "Manual grants and gifted Lifetime in the period (no money taken), by grant date, including ones revoked later. Not affected by the plan or provider filters." },
];

/** Charged orders with USD amounts and refunds, mirroring the Revenue page (app/admin/(panel)/revenue/data.ts). */
export function ordersCte(c: Ctx, q: Q, w: string) {
  const provider = valid("provider", c.s.filters.provider);
  const intOf = (e: string) => `(case when typeof(${e}) in ('integer', 'real') then cast(round(${e}) as integer) when typeof(${e}) = 'text' and ${e} != '' and ${e} not glob '*[^0-9-]*' then cast(${e} as integer) end)`;
  const j = (path: string) => `(case when json_valid(raw) then json_extract(raw, '${path}') end)`;
  return `o as (
      select createdAt t, provider pr, status st, upper(currency) ccy, amountCents amt,
        case when variant in ('monthly', 'proMonthly') then 'proMonthly' when variant in ('yearly', 'proYearly') then 'proYearly' when variant in ('lifetimeDeal', 'lifetimeAfter', 'teamMonthly', 'teamYearly') then variant else 'other' end pk,
        ${intOf(j("$.attributes.total_usd"))} tu, ${intOf(j("$.attributes.refunded_amount_usd"))} rau, ${intOf(j("$.attributes.refunded_amount"))} ra,
        (case when json_valid(raw) and (json_extract(raw, '$.test_mode') = 1 or json_extract(raw, '$.attributes.test_mode') = 1) then 1 else 0 end) test
      from purchase where provider in ('lemonsqueezy', 'contra') and status in ('paid', 'refunded', 'partial_refund') and ${w}${provider ? ` and provider = ${q.p(provider)}` : ""}
    ), u as (select *, coalesce(tu, case when ccy = 'USD' then amt end) usd, coalesce(rau, case when ccy = 'USD' then ra end) refAmt from o),
    r as (select *, case when usd is null then null when st = 'refunded' then min(usd, case when coalesce(refAmt, 0) > 0 then refAmt else usd end) when st = 'partial_refund' then min(usd, coalesce(refAmt, 0)) else 0 end refund from u)`;
}

async function revenue(c: Ctx): Promise<Built> {
  const settings = await getSettings();
  const rplan = valid("rplan", c.s.filters.rplan);
  const provider = valid("provider", c.s.filters.provider);
  const q = new Q();
  const cte = ordersCte(c, q, c.inTs("createdAt", c.span));
  const pkF = rplan ? ` where pk = ${q.p(rplan)}` : "";
  const wide = q.stmt(
    `with ${cte}
     select ${c.tb("t")} k, coalesce(sum(usd), 0) gross, coalesce(sum(refund), 0) refunds, sum(usd is not null) orders, sum(usd is not null and st = 'refunded') refundedOrders,
       sum(usd is not null and pk = 'lifetimeDeal' and st != 'refunded') ltd, sum(usd is null) unconverted, sum(test) test
     from r${pkF} group by 1`,
  );
  // Subscriptions: MRR at each bucket end, starts and ends per bucket.
  const q2 = new Q();
  const monthlyFallback = Math.round(settings.prices.proMonthly * 100);
  const yearlyFallback = Math.round(settings.prices.proYearly * 100);
  const subPlan =
    rplan === "proMonthly" ? ` and s.interval != 'yearly' and s.plan != 'team'` : rplan === "proYearly" ? ` and s.interval = 'yearly' and s.plan != 'team'` : rplan === "teamMonthly" ? ` and s.interval != 'yearly' and s.plan = 'team'` : rplan === "teamYearly" ? ` and s.interval = 'yearly' and s.plan = 'team'` : rplan ? " and 0" : "";
  const subProv = provider ? ` and s.provider = ${q2.p(provider)}` : "";
  const pj = (path: string) => `(case when json_valid(p.raw) then json_extract(p.raw, '${path}') end)`;
  const subs = `subs as (
      select s.createdAt c, s.endsAt e, s.status st, s.interval iv,
        coalesce((select case when ${pj("$.attributes.subtotal_usd")} is not null then max(0, ${pj("$.attributes.subtotal_usd")} - coalesce(${pj("$.attributes.discount_total_usd")}, 0)) else coalesce(${pj("$.attributes.total_usd")}, case when upper(p.currency) = 'USD' then p.amountCents end) end
          from purchase p where p.provider in ('lemonsqueezy', 'contra') and p.providerOrderId = (case when json_valid(s.raw) then cast(json_extract(s.raw, '$.attributes.order_id') as text) end) limit 1), 0) b
      from subscription s where s.provider in ('lemonsqueezy', 'contra')${subPlan}${subProv}
    ), priced as (select *, case when b > 0 then b when iv = 'yearly' then ${int(yearlyFallback)} else ${int(monthlyFallback)} end price from subs)`;
  const long = q2.stmt(
    `with ends(k, t) as (values ${c.ends()}), ${subs}
     select 'mrr' m, ends.k k, coalesce(sum(case when p.iv != 'yearly' then p.price end), 0) + round(coalesce(sum(case when p.iv = 'yearly' then p.price end), 0) / 12.0) v
       from ends left join priced p on p.c <= ends.t and (p.st in ('active', 'past_due') or (p.st in ('cancelled', 'expired') and p.e is not null and p.e > ends.t and p.e <= ${int(c.nowS)})) group by ends.k
     union all select 'newSubs', ${c.tb("c")}, count(*) from priced where ${c.inTs("c", c.span)} group by 2
     union all select 'endedSubs', ${c.tb("e")}, count(*) from priced where st in ('cancelled', 'expired') and e <= ${int(c.nowS)} and ${c.inTs("e", c.span)} group by 2
     union all select 'grants', ${c.tb("createdAt")}, count(*) from purchase where provider in ('manual', 'gift') and status in ('granted', 'revoked') and ${c.inTs("createdAt", c.span)} group by 2`,
  );
  const q3 = new Q();
  const inP = (w: { start: number; end: number }) => c.inTs("t", w);
  const cte3 = ordersCte(c, q3, selOrCmp(c, (w) => c.inTs("createdAt", w)));
  const pkF3 = () => (rplan ? ` and pk = ${q3.p(rplan)}` : "");
  const net = "(usd - coalesce(refund, 0))";
  const bd = q3.stmt(
    `with ${cte3}
     select 'planNet' g, pk label, ${sumIn(c, "cur", inP, net)} cur, ${sumIn(c, "prev", inP, net)} prev from r where usd is not null${pkF3()} group by pk
     union all select 'planOrders', pk, ${sumIn(c, "cur", inP)}, ${sumIn(c, "prev", inP)} from r where usd is not null${pkF3()} group by pk
     union all select 'provNet', pr, ${sumIn(c, "cur", inP, net)}, ${sumIn(c, "prev", inP, net)} from r where usd is not null${pkF3()} group by pr
     union all select 'provOrders', pr, ${sumIn(c, "cur", inP)}, ${sumIn(c, "prev", inP)} from r where usd is not null${pkF3()} group by pr
     union all select 'unconverted', ccy, ${sumIn(c, "cur", inP)}, ${sumIn(c, "prev", inP)} from r where usd is null${pkF3()} group by ccy`,
  );
  const since = { sql: `select min(createdAt) a from purchase where provider in ('lemonsqueezy', 'contra') and status in ('paid', 'refunded', 'partial_refund')`, params: [] };
  return {
    statements: [wide, long, bd, since],
    finish: ([w, l, b, s]) => {
      const map = collect(c, w, l);
      const hasPrev = !!c.cmp;
      const since = sinceOf(c, s[0]?.a);
      const sortBy = (rows: ReturnType<typeof breakdownRows>) => rows.sort((x, y) => y.cur - x.cur);
      const selRow = map.get(c.sel.key) ?? {};
      const unconv = breakdownRows(b, "unconverted", hasPrev);
      const filters = [...(rplan ? [{ label: "Plan", value: REV_PLAN_NAME[rplan] }] : []), ...(provider ? [{ label: "Provider", value: PROVIDER_NAME[provider] }] : [])];
      return {
        ...base("revenue", "Orders, refunds and subscriptions, in USD.", REVENUE),
        ...assemble(c, REVENUE, map),
        breakdowns: [
          { id: "planNet", title: "Net revenue by plan", head: "Plan", unit: "usd", scope: "selected", rows: sortBy(breakdownRows(b, "planNet", hasPrev, (p) => REV_PLAN_NAME[p] ?? p)), empty: "No orders in this period." },
          { id: "planOrders", title: "Orders by plan", head: "Plan", unit: "count", scope: "selected", rows: sortBy(breakdownRows(b, "planOrders", hasPrev, (p) => REV_PLAN_NAME[p] ?? p)), empty: "No orders in this period." },
          { id: "provNet", title: "Net revenue by provider", head: "Provider", unit: "usd", scope: "selected", def: "Lemon Squeezy is card checkout; Contra orders are approved activations of Contra payments.", rows: sortBy(breakdownRows(b, "provNet", hasPrev, (p) => PROVIDER_NAME[p] ?? p)), empty: "No orders in this period." },
          { id: "provOrders", title: "Orders by provider", head: "Provider", unit: "count", scope: "selected", rows: sortBy(breakdownRows(b, "provOrders", hasPrev, (p) => PROVIDER_NAME[p] ?? p)), empty: "No orders in this period." },
        ],
        since,
        filters,
        notes: notesOf(
          startNote(c, since, "order"),
          Number(selRow.test ?? 0) > 0 && `${selRow.test} test-mode order(s) in the selected period are included, as on the Revenue page.`,
          unconv.some((u) => u.cur > 0) && `Left out: ${unconv.filter((u) => u.cur > 0).map((u) => `${u.cur} order(s) in ${u.label}`).join(", ")} in the selected period without a USD amount.`,
          "Refunds are counted on the order's date, so a past period's net revenue can drop when an old order is refunded.",
          rplan && rplan.startsWith("lifetime") && "Lifetime plans have no subscription, so MRR is zero under this filter.",
        ),
      };
    },
  };
}

/* ------------------------------------------------------------------ Activations and payments */

const ACTIVATIONS: MetricDef[] = [
  { id: "requests", label: "Requests", unit: "count", total: "sum", kpi: true, chart: true, def: "\"I paid on Contra\" activation requests sent at /activate in the period, by request date." },
  { id: "approved", label: "Approved", unit: "count", total: "sum", kpi: true, chart: true, def: "Activations = Contra activation requests approved in the period, by approval date, by staff or by the Contra sync." },
  { id: "auto", label: "Approved automatically", unit: "count", total: "sum", def: "Approvals made by the Contra sync (a matching Contra sale), not by staff." },
  { id: "rejected", label: "Rejected", unit: "count", total: "sum", invert: true, def: "Requests rejected in the period, by decision date." },
  { id: "approvedValue", label: "Approved value", unit: "usd", total: "sum", chart: true, def: "Price-book value of the requests approved in the period, in USD." },
  { id: "pending", label: "Pending at period end", unit: "count", total: "last", kpi: true, invert: true, def: "Requests sent by the end of the period (or now) and not decided by then." },
  { id: "avgHours", label: "Average time to activate", unit: "hours", total: "range", kpi: true, invert: true, def: "Hours from request to approval, averaged over requests approved in the period." },
  { id: "medianHours", label: "Median time to activate", unit: "hours", total: "range", invert: true, def: "Middle value of the hours from request to approval for requests approved in the period." },
  { id: "sales", label: "Contra sales synced", unit: "count", total: "sum", chart: true, def: "Contra payment-link sales read by the sync, by Contra's paid date." },
  { id: "unmatched", label: "Sales still unmatched", unit: "count", total: "sum", invert: true, def: "Contra sales from the period that are still not matched to an account today." },
];

function median(k: string, from: string, where: string, valueExpr: string) {
  return `select 'medianHours' m, k, avg(x) / 3600.0 v from (select k, x, row_number() over (partition by k order by x) rn, count(*) over (partition by k) n from (select ${k} k, ${valueExpr} x from ${from} where ${where})) where rn in ((n + 1) / 2, (n + 2) / 2) group by k`;
}

function activations(c: Ctx): Built {
  const appr = (w: { start: number; end: number }) => `status = 'approved' and ${c.inTs("decidedAt", w)}`;
  const series = unions(
    [
      `select 'requests' m, ${c.tb("createdAt")} k, count(*) v from activation where ${c.inTs("createdAt", c.span)} group by 2`,
      `select 'approved', ${c.tb("decidedAt")}, count(*) from activation where ${appr(c.span)} group by 2`,
      `select 'auto', ${c.tb("decidedAt")}, count(*) from activation where ${appr(c.span)} and decidedBy = 'contra-auto' group by 2`,
      `select 'rejected', ${c.tb("decidedAt")}, count(*) from activation where status = 'rejected' and ${c.inTs("decidedAt", c.span)} group by 2`,
      `select 'approvedValue', ${c.tb("decidedAt")}, sum(amountCents) from activation where ${appr(c.span)} group by 2`,
      `select 'avgHours', ${c.tb("decidedAt")}, avg(decidedAt - createdAt) / 3600.0 from activation where ${appr(c.span)} group by 2`,
      `select 'avgHours', '__range', avg(decidedAt - createdAt) / 3600.0 from activation where ${appr(c.range)}`,
      median(c.tb("decidedAt"), "activation", appr(c.span), "decidedAt - createdAt"),
      median("'__range'", "activation", appr(c.range), "decidedAt - createdAt"),
      `select 'pending', ends.k, count(a.id) from ends left join activation a on a.createdAt <= ends.t and (a.status = 'pending' or (a.decidedAt is not null and a.decidedAt > ends.t)) group by ends.k`,
      `select 'sales', ${c.db("paidOn")}, count(*) from contra_sale where ${c.inDay("paidOn", c.span)} group by 2`,
      `select 'unmatched', ${c.db("paidOn")}, count(*) from contra_sale where status = 'unmatched' and ${c.inDay("paidOn", c.span)} group by 2`,
    ].map((x) => () => x),
    `ends(k, t) as (values ${c.ends()})`,
  );
  const inP = (w: { start: number; end: number }) => appr(w);
  const bd = {
    sql: `select 'option' g, option label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from activation where ${selOrCmp(c, inP)} group by option
      union all select 'by', case when decidedBy = 'contra-auto' then 'Automatic (Contra sync)' else 'Staff' end, ${sumIn(c, "cur", inP)}, ${sumIn(c, "prev", inP)} from activation where ${selOrCmp(c, inP)} group by 2`,
    params: [],
  };
  const since = { sql: `select (select min(createdAt) from activation) a, (select min(paidOn) from contra_sale) b`, params: [] };
  return {
    statements: [...series, bd, since],
    finish: (res) => {
      const [b, f] = res.slice(series.length);
      const map = collect(c, ...res.slice(0, series.length));
      const hasPrev = !!c.cmp;
      const since = sinceOf(c, f[0]?.a, f[0]?.b);
      return {
        ...base("activations", "Contra purchases: requests, approvals and how long buyers wait.", ACTIVATIONS),
        ...assemble(c, ACTIVATIONS, map),
        breakdowns: [
          { id: "option", title: "Approved by product", head: "Product", unit: "count", scope: "selected", rows: breakdownRows(b, "option", hasPrev, (o) => OPTION_NAME[o] ?? o).sort((x, y) => y.cur - x.cur), empty: "No approvals in this period." },
          { id: "by", title: "Approved by", head: "Approver", unit: "count", scope: "selected", rows: breakdownRows(b, "by", hasPrev), empty: "No approvals in this period." },
        ],
        since,
        filters: [],
        notes: notesOf(startNote(c, since, "activation request"), "Contra sales carry a paid date without a time, so they are bucketed by that date in every time zone."),
      };
    },
  };
}

/* ------------------------------------------------------------------ Support and help bot */

const SUPPORT: MetricDef[] = [
  { id: "opened", label: "Tickets opened", unit: "count", total: "sum", kpi: true, chart: true, def: "Support tickets created in the period (widget, form or email)." },
  { id: "closed", label: "Tickets closed", unit: "count", total: "sum", kpi: true, chart: true, def: "Tickets whose status is closed now and whose last update fell in the period. The table keeps no close date, so the last update stands in for it." },
  { id: "medianReply", label: "Median first reply", unit: "hours", total: "range", kpi: true, invert: true, def: "Middle value of the hours from a ticket's creation to the first staff reply, for tickets opened in the period that have a reply. Bot replies don't count." },
  { id: "replied24", label: "Replied within 24 hours", unit: "pct", total: "derived", def: "Share of tickets opened in the period whose first staff reply came within 24 hours.", derive: (v) => pctOf(v.fast, v.opened) },
  { id: "fast", label: "Tickets replied within 24 hours", unit: "count", total: "sum", def: "Tickets opened in the period with a first staff reply within 24 hours." },
  { id: "noReply", label: "Tickets without a reply", unit: "count", total: "sum", invert: true, def: "Tickets opened in the period that have no staff reply yet." },
  { id: "gaps", label: "Bot questions not answered", unit: "count", total: "sum", kpi: true, chart: true, invert: true, def: "Distinct questions the help assistant could not answer (or answered with low confidence), by the date first asked. Repeats of the same question are not new rows." },
  { id: "gapAsks", label: "Times those were asked", unit: "count", total: "sum", invert: true, def: "How many times the unanswered questions first asked in the period were asked in all, up to now (repeats are counted on the first-asked date)." },
];

function support(c: Ctx): Built {
  const fr = `(select min(m.createdAt) from ticket_message m where m.ticketId = t.id and m.author = 'admin')`;
  const med = (k: string, w: { start: number; end: number }) =>
    `select 'medianReply' m, k, avg(x) / 3600.0 v from (select k, x, row_number() over (partition by k order by x) rn, count(*) over (partition by k) n from (select ${k} k, ${fr} - t.createdAt x from ticket t where ${c.inTs("t.createdAt", w)} and ${fr} is not null)) where rn in ((n + 1) / 2, (n + 2) / 2) group by k`;
  const series = unions(
    [
      `select 'opened' m, ${c.tb("createdAt")} k, count(*) v from ticket where ${c.inTs("createdAt", c.span)} group by 2`,
      `select 'closed', ${c.tb("updatedAt")}, count(*) from ticket where status = 'closed' and ${c.inTs("updatedAt", c.span)} group by 2`,
      `select 'fast', ${c.tb("t.createdAt")}, sum(${fr} is not null and ${fr} - t.createdAt <= 86400) from ticket t where ${c.inTs("t.createdAt", c.span)} group by 2`,
      `select 'noReply', ${c.tb("t.createdAt")}, sum(${fr} is null) from ticket t where ${c.inTs("t.createdAt", c.span)} group by 2`,
      med(c.tb("t.createdAt"), c.span),
      med("'__range'", c.range),
      `select 'gaps', ${c.tb("createdAt")}, count(*) from bot_gap where ${c.inTs("createdAt", c.span)} group by 2`,
      `select 'gapAsks', ${c.tb("createdAt")}, sum("count") from bot_gap where ${c.inTs("createdAt", c.span)} group by 2`,
    ].map((x) => () => x),
  );
  const inP = (w: { start: number; end: number }) => c.inTs("createdAt", w);
  const bd = {
    sql: `select * from (select 'source' g, source label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from ticket where ${selOrCmp(c, inP)} group by source)
      union all select * from (select 'status' g, status label, ${sumIn(c, "cur", inP)} cur, null prev from ticket where ${c.inTs("createdAt", c.sel)} group by status)
      union all select * from (select 'gaps' g, question label, "count" cur, null prev from bot_gap where ${c.inTs("createdAt", c.sel)} order by "count" desc, lastAt desc limit 10)
      union all select * from (select 'intent' g, intent label, ${sumIn(c, "cur", inP)} cur, ${sumIn(c, "prev", inP)} prev from bot_gap where ${selOrCmp(c, inP)} group by intent order by cur desc limit 10)`,
    params: [],
  };
  const since = { sql: `select (select min(createdAt) from ticket) a, (select min(createdAt) from bot_gap) b`, params: [] };
  return {
    statements: [...series, bd, since],
    finish: (res) => {
      const [b, f] = res.slice(series.length);
      const map = collect(c, ...res.slice(0, series.length));
      const hasPrev = !!c.cmp;
      const since = sinceOf(c, f[0]?.a, f[0]?.b);
      const cap = (x: string) => (x ? x[0].toUpperCase() + x.slice(1) : x);
      return {
        ...base("support", "Tickets, reply times and what the help assistant could not answer.", SUPPORT),
        ...assemble(c, SUPPORT, map),
        breakdowns: [
          { id: "source", title: "Tickets by channel", head: "Channel", unit: "count", scope: "selected", rows: breakdownRows(b, "source", hasPrev, cap), empty: "No tickets in this period." },
          { id: "status", title: "Status today of tickets opened in the period", head: "Status", unit: "count", scope: "now", rows: breakdownRows(b, "status", false, cap), empty: "No tickets in this period." },
          { id: "gaps", title: "Top unanswered bot questions", head: "Question", unit: "count", scope: "now", def: "Questions first asked in the period, with how often they have been asked up to now.", rows: breakdownRows(b, "gaps", false), empty: "The help assistant answered everything first asked in this period." },
          { id: "intent", title: "Unanswered questions by topic", head: "Topic", unit: "count", scope: "selected", rows: breakdownRows(b, "intent", hasPrev, cap), empty: "No unanswered questions in this period." },
        ],
        since,
        filters: [],
        notes: notesOf(startNote(c, since, "ticket or bot question")),
      };
    },
  };
}

/* ------------------------------------------------------------------ Content */

const CONTENT: MetricDef[] = [
  { id: "posts", label: "Posts published", unit: "count", total: "derived", kpi: true, chart: true, def: "Blog posts published in the period: posts written in the admin editor (by publish time) plus posts in the code base (by their date).", derive: (v) => Number(v.postsDb ?? 0) + Number(v.postsCode ?? 0) },
  { id: "postsDb", label: "Posts from the editor", unit: "count", total: "sum", def: "Posts written in /admin/posts with status published, by publish time." },
  { id: "postsCode", label: "Posts from code", unit: "count", total: "sum", def: "Posts kept in the code base (lib/blog), by the date on the post." },
  { id: "blogViews", label: "Blog page views", unit: "count", total: "sum", kpi: true, chart: true, def: "Page views of /blog and every page under /blog/." },
  { id: "blogShare", label: "Blog share of page views", unit: "pct", total: "derived", def: "Blog page views as a share of all page views in the period.", derive: (v) => pctOf(v.blogViews, v.allViews) },
  { id: "allViews", label: "All page views", unit: "count", total: "sum", def: "All page views on the site, for the share above." },
  { id: "changelog", label: "Changelog entries", unit: "count", total: "sum", chart: true, def: "Published changelog entries dated in the period." },
];

function content(c: Ctx): Built {
  const blog = `(path = '/blog' or path like '/blog/%')`;
  const series = {
    sql: `select 'postsDb' m, ${c.tb("publishedAt")} k, count(*) v from post where status = 'published' and ${c.inTs("publishedAt", c.span)} group by 2
      union all select 'blogViews', ${c.db("day")}, sum(views) from pageview_daily where ${blog} and ${c.inDay("day", c.span)} group by 2
      union all select 'allViews', ${c.db("day")}, sum(views) from pageview_daily where ${c.inDay("day", c.span)} group by 2
      union all select 'changelog', ${c.db("date")}, count(*) from changelog_entry where published = 1 and ${c.inDay("date", c.span)} group by 2`,
    params: [],
  };
  const inP = (w: { startDay: string; endDay: string }) => `day >= ${date(w.startDay)} and day < ${date(w.endDay)}`;
  const bd = {
    sql: `select * from (select 'pages' g, path label, ${sumIn(c, "cur", inP, "views")} cur, ${sumIn(c, "prev", inP, "views")} prev from pageview_daily where ${blog} and ${selOrCmp(c, inP)} group by path order by cur desc, prev desc limit 15)
      union all select * from (select 'cat' g, category label, count(*) cur, null prev from post where status = 'published' and ${c.inTs("publishedAt", c.sel)} group by category)`,
    params: [],
  };
  const since = { sql: `select (select min(day) from pageview_daily where ${blog}) a, (select min(publishedAt) from post where status = 'published') b`, params: [] };
  return {
    statements: [series, bd, since],
    finish: ([s, b, f]) => {
      const map = collect(c, s);
      // Code posts: bucketed in JS by their date (a local day in every time zone).
      const codeIn = (p: { startDay: string; endDay: string }) => codePosts.filter((x) => x.date >= p.startDay && x.date < p.endDay);
      for (const p of codeIn(c.span)) {
        const k = keyOfDay(c.s.gran, p.date, c.off);
        const row = map.get(k) ?? {};
        row.postsCode = Number(row.postsCode ?? 0) + 1;
        map.set(k, row);
      }
      const cats = breakdownRows(b, "cat", false);
      for (const p of codeIn(c.sel)) {
        const r = cats.find((x) => x.label === p.category);
        if (r) r.cur++;
        else cats.push({ label: p.category, cur: 1, prev: null, href: undefined });
      }
      const hasPrev = !!c.cmp;
      const firstCode = codePosts.map((p) => p.date).sort()[0];
      const since = sinceOf(c, f[0]?.a, f[0]?.b, firstCode);
      return {
        ...base("content", "Blog posts, their readers and the changelog.", CONTENT),
        ...assemble(c, CONTENT, map),
        breakdowns: [
          { id: "pages", title: "Top blog pages", head: "Page", unit: "count", scope: "selected", rows: breakdownRows(b, "pages", hasPrev, undefined, (p) => p), empty: "No blog views in this period." },
          { id: "cat", title: "Posts published by category", head: "Category", unit: "count", scope: "selected", rows: cats.sort((x, y) => y.cur - x.cur), empty: "No posts published in this period." },
        ],
        since,
        filters: [],
        notes: notesOf(startNote(c, since, "post or blog view"), c.s.tz !== "UTC" && "Blog page views: " + DAY_TABLE_NOTE.toLowerCase()),
      };
    },
  };
}

export const BUILDERS: Record<DatasetId, (c: Ctx) => Built | Promise<Built>> = { traffic, audience, usage, agents, revenue, activations, support, content };
export type { Row };
