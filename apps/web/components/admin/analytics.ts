import "server-only";
import { type AnyColumn, and, count, desc, eq, gte, inArray, isNotNull, like, not, sql, sum } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { getItem, getSystem } from "@/lib/catalog";
import { getFigmaItem } from "@/lib/library";
import { getDeal } from "@/lib/plans";
import { getSettings } from "@/lib/settings";

/** Admin analytics: every number for /admin/analytics, the overview cockpit and the CSV export. */

export const DAY = 86_400_000;
export const RANGES = { "7d": 7, "30d": 30, "90d": 90 } as const;
export type RangeKey = keyof typeof RANGES;
export const rangeOf = (v: string): RangeKey => (v in RANGES ? (v as RangeKey) : "30d");

export type Point = { day: string; n: number };

/** UTC window: the last `days` days including today, and the same length before it. */
export function windowOf(days: number, now = Date.now()) {
  const today = Math.floor(now / DAY) * DAY;
  const start = today - (days - 1) * DAY;
  const prev = start - days * DAY;
  const iso = (t: number) => new Date(t).toISOString().slice(0, 10);
  return { days, start, prev, today, startDay: iso(start), prevDay: iso(prev), todayDay: iso(today), s: start / 1000, ps: prev / 1000 };
}

/** Oldest-first, zero-filled series of `days` days starting at `from` (ms, UTC midnight). */
export function series(rows: { d: string; n: number | string | null }[], from: number, days: number): Point[] {
  const m = new Map<string, number>();
  for (const r of rows) m.set(r.d, (m.get(r.d) ?? 0) + Number(r.n ?? 0));
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(from + i * DAY).toISOString().slice(0, 10);
    return { day: d, n: m.get(d) ?? 0 };
  });
}

const total = (p: Point[]) => p.reduce((s, x) => s + x.n, 0);

/** Name and design system for a usage_event target. */
export function describeTarget(target: string): { name: string; system: string; href?: string } {
  if (target.startsWith("icon:")) return { name: target.slice(5), system: "Icons", href: "/icons" };
  const code = getItem(target);
  if (code) return { name: code.name, system: "Core registry", href: `/components/${code.slug}` };
  const fig = getFigmaItem(target);
  if (fig) return { name: fig.name, system: getSystem(fig.system)?.name ?? fig.system, href: `/components/${fig.slug}` };
  return { name: target, system: "Unknown" };
}

const U = schema.user;
const E = schema.usageEvent;
const P = schema.purchase;
const S = schema.subscription;
const K = schema.apiKey;
const T = schema.ticket;
const M = schema.ticketMessage;
const W = schema.waitlist;
const PV = schema.pageviewDaily;
const RD = schema.referrerDaily;
const VD = schema.visitorDaily;

const dayOf = (c: AnyColumn) => sql<string>`date(${c}, 'unixepoch')`;
const actor = sql`coalesce(${E.userId}, 'a:' || ${E.anonId})`;
const isCur = (c: AnyColumn, s: number) => sql`${c} >= ${s}`;

/** Everything on /admin/analytics for one range, in one D1 batch (plus cached settings and the deal count). */
export async function loadAnalytics(range: RangeKey) {
  const w = windowOf(RANGES[range]);
  const db = await getDb();
  const sinceCur = new Date(w.start);
  const sincePrev = new Date(w.prev);
  const cur = (c: AnyColumn) => sql<number>`sum(case when ${isCur(c, w.s)} then 1 else 0 end)`;
  const prv = (c: AnyColumn) => sql<number>`sum(case when ${c} < ${w.s} then 1 else 0 end)`;

  const [
    visitorRows,
    viewRows,
    topPages,
    topSources,
    copiers,
    signups,
    signupDays,
    money,
    byAction,
    byClientDay,
    targets,
    active,
    keys,
    plans,
    subs,
    waitlist,
    ticketDays,
    ticketStatus,
    firstReplies,
  ] = await db.batch([
    db.select({ d: VD.day, n: VD.visitors }).from(VD).where(gte(VD.day, w.prevDay)),
    db.select({ d: PV.day, n: sum(PV.views) }).from(PV).where(gte(PV.day, w.prevDay)).groupBy(PV.day),
    db.select({ path: PV.path, n: sum(PV.views) }).from(PV).where(gte(PV.day, w.startDay)).groupBy(PV.path).orderBy(desc(sum(PV.views))).limit(15),
    db.select({ source: RD.source, n: sum(RD.views) }).from(RD).where(gte(RD.day, w.startDay)).groupBy(RD.source).orderBy(desc(sum(RD.views))).limit(12),
    db
      .select({ cur: sql<number>`count(distinct case when ${isCur(E.createdAt, w.s)} then ${actor} end)`, prev: sql<number>`count(distinct case when ${E.createdAt} < ${w.s} then ${actor} end)` })
      .from(E)
      .where(and(gte(E.createdAt, sincePrev), eq(E.client, "web"))),
    db.select({ cur: cur(U.createdAt), prev: prv(U.createdAt) }).from(U).where(gte(U.createdAt, sincePrev)),
    db.select({ d: dayOf(U.createdAt), n: count() }).from(U).where(gte(U.createdAt, sinceCur)).groupBy(dayOf(U.createdAt)),
    db
      .select({
        currency: P.currency,
        paidN: sql<number>`sum(case when ${P.status} = 'paid' and ${isCur(P.createdAt, w.s)} then 1 else 0 end)`,
        paidC: sql<number>`sum(case when ${P.status} = 'paid' and ${isCur(P.createdAt, w.s)} then ${P.amountCents} else 0 end)`,
        paidNPrev: sql<number>`sum(case when ${P.status} = 'paid' and ${P.createdAt} < ${w.s} then 1 else 0 end)`,
        paidCPrev: sql<number>`sum(case when ${P.status} = 'paid' and ${P.createdAt} < ${w.s} then ${P.amountCents} else 0 end)`,
        buyers: sql<number>`count(distinct case when ${P.status} = 'paid' and ${isCur(P.createdAt, w.s)} then lower(${P.email}) end)`,
        buyersPrev: sql<number>`count(distinct case when ${P.status} = 'paid' and ${P.createdAt} < ${w.s} then lower(${P.email}) end)`,
        refundN: sql<number>`sum(case when ${P.status} = 'refunded' and ${isCur(P.updatedAt, w.s)} then 1 else 0 end)`,
        refundC: sql<number>`sum(case when ${P.status} = 'refunded' and ${isCur(P.updatedAt, w.s)} then ${P.amountCents} else 0 end)`,
      })
      .from(P)
      .where(sql`${P.createdAt} >= ${w.ps} or ${P.updatedAt} >= ${w.ps}`)
      .groupBy(P.currency),
    db.select({ action: E.action, n: count() }).from(E).where(gte(E.createdAt, sinceCur)).groupBy(E.action).orderBy(desc(count())),
    db.select({ d: dayOf(E.createdAt), client: E.client, n: count() }).from(E).where(gte(E.createdAt, sinceCur)).groupBy(dayOf(E.createdAt), E.client),
    db.select({ target: E.target, n: count() }).from(E).where(and(gte(E.createdAt, sinceCur), like(E.action, "copy%"))).groupBy(E.target).orderBy(desc(count())).limit(4000),
    db
      .select({ cur: sql<number>`count(distinct case when ${isCur(E.createdAt, w.s)} then ${E.userId} end)`, prev: sql<number>`count(distinct case when ${E.createdAt} < ${w.s} then ${E.userId} end)` })
      .from(E)
      .where(and(gte(E.createdAt, sincePrev), isNotNull(E.userId))),
    db.select({ cur: cur(K.createdAt), prev: prv(K.createdAt) }).from(K).where(gte(K.createdAt, sincePrev)),
    db.select({ plan: U.plan, n: count() }).from(U).groupBy(U.plan).orderBy(desc(count())),
    db.select({ interval: S.interval, n: count() }).from(S).where(eq(S.status, "active")).groupBy(S.interval),
    db.select({ plan: W.plan, n: count(), cur: cur(W.createdAt) }).from(W).groupBy(W.plan).orderBy(desc(count())),
    db.select({ d: dayOf(T.createdAt), n: count() }).from(T).where(gte(T.createdAt, sinceCur)).groupBy(dayOf(T.createdAt)),
    db.select({ status: T.status, n: count() }).from(T).where(gte(T.createdAt, sinceCur)).groupBy(T.status),
    db
      .select({ created: sql<number>`${T.createdAt}`, reply: sql<number | null>`min(${M.createdAt})` })
      .from(T)
      .leftJoin(M, and(eq(M.ticketId, T.id), eq(M.author, "admin")))
      .where(gte(T.createdAt, sinceCur))
      .groupBy(T.id),
  ]);
  const [settings, deal] = await Promise.all([getSettings(), getDeal()]);

  // Traffic
  const visitorsAll = series(visitorRows, w.prev, w.days * 2);
  const viewsAll = series(viewRows, w.prev, w.days * 2);
  const visitors = visitorsAll.slice(w.days);
  const views = viewsAll.slice(w.days);
  const traffic = {
    visitors,
    views,
    visitorsTotal: total(visitors),
    visitorsPrev: total(visitorsAll.slice(0, w.days)),
    viewsTotal: total(views),
    viewsPrev: total(viewsAll.slice(0, w.days)),
    pages: topPages.map((r) => ({ label: r.path, n: Number(r.n ?? 0), href: r.path })),
    sources: topSources.map((r) => ({ label: r.source === "direct" ? "Direct or unknown" : r.source, n: Number(r.n ?? 0) })),
  };

  // Revenue (per currency, USD first)
  const cur0 = money.sort((a, b) => (a.currency === "USD" ? -1 : b.currency === "USD" ? 1 : 0));
  const sumN = (k: keyof (typeof cur0)[number]) => cur0.reduce((s, r) => s + Number(r[k] ?? 0), 0);
  const price = settings.prices;
  const subsBy = Object.fromEntries(subs.map((s) => [s.interval, s.n]));
  const mrrCents = Math.round(((subsBy.monthly ?? 0) * price.proMonthly + ((subsBy.yearly ?? 0) * price.proYearly) / 12) * 100);
  const revenue = {
    byCurrency: cur0.map((r) => ({ currency: r.currency, paid: Number(r.paidC ?? 0), paidPrev: Number(r.paidCPrev ?? 0), refunds: Number(r.refundC ?? 0) })),
    orders: sumN("paidN"),
    ordersPrev: sumN("paidNPrev"),
    refundOrders: sumN("refundN"),
    buyers: sumN("buyers"),
    buyersPrev: sumN("buyersPrev"),
    mrrCents,
    subsMonthly: subsBy.monthly ?? 0,
    subsYearly: subsBy.yearly ?? 0,
    prices: price,
    deal,
    waitlist: waitlist.map((r) => ({ label: r.plan, n: r.n, cur: Number(r.cur ?? 0) })),
  };

  // Funnel: visitors -> visitors who copied (web) -> signups -> paid buyers
  const c0 = copiers[0] ?? { cur: 0, prev: 0 };
  const s0 = signups[0] ?? { cur: 0, prev: 0 };
  const funnel = [
    { label: "Visitors", n: traffic.visitorsTotal, prev: traffic.visitorsPrev },
    { label: "Copied or downloaded", n: Number(c0.cur ?? 0), prev: Number(c0.prev ?? 0) },
    { label: "Signed up", n: Number(s0.cur ?? 0), prev: Number(s0.prev ?? 0) },
    { label: "Paid", n: revenue.buyers, prev: revenue.buyersPrev },
  ];

  // Product usage
  const clientTotals = new Map<string, number>();
  for (const r of byClientDay) clientTotals.set(r.client, (clientTotals.get(r.client) ?? 0) + r.n);
  const mcpDays = series(byClientDay.filter((r) => r.client === "mcp"), w.start, w.days);
  const systemTotals = new Map<string, number>();
  const comps: { label: string; system: string; n: number; href?: string }[] = [];
  const icons: { label: string; n: number }[] = [];
  for (const t of targets) {
    const d = describeTarget(t.target);
    systemTotals.set(d.system, (systemTotals.get(d.system) ?? 0) + t.n);
    if (t.target.startsWith("icon:")) {
      if (icons.length < 15) icons.push({ label: d.name, n: t.n });
    } else if (comps.length < 15) comps.push({ label: d.name, system: d.system, n: t.n, href: d.href });
  }
  const CLIENT: Record<string, string> = { web: "Website", mcp: "MCP server", cli: "CLI" };
  const ACTION: Record<string, string> = { copy_code: "Copy React code", copy_figma: "Copy Figma layers", download_png: "Download PNG", download_svg: "Download SVG", download_jpeg: "Download JPEG", install: "Install (CLI)" };
  const usage = {
    actions: byAction.map((r) => ({ label: ACTION[r.action] ?? r.action, n: r.n })),
    clients: [...clientTotals].sort((a, b) => b[1] - a[1]).map(([c, n]) => ({ label: CLIENT[c] ?? c, n })),
    systems: [...systemTotals].sort((a, b) => b[1] - a[1]).map(([label, n]) => ({ label, n })),
    components: comps,
    icons,
    mcpDays,
    events: byAction.reduce((s, r) => s + r.n, 0),
  };

  // Users
  const users = {
    signups: series(signupDays, w.start, w.days),
    signupsTotal: Number(s0.cur ?? 0),
    signupsPrev: Number(s0.prev ?? 0),
    plans: plans.map((p) => ({ label: p.plan, n: p.n })),
    active: Number(active[0]?.cur ?? 0),
    activePrev: Number(active[0]?.prev ?? 0),
    keys: Number(keys[0]?.cur ?? 0),
    keysPrev: Number(keys[0]?.prev ?? 0),
  };

  // Support
  const replies = firstReplies
    .filter((r) => r.reply != null)
    .map((r) => Number(r.reply) - Number(r.created))
    .filter((x) => x >= 0)
    .sort((a, b) => a - b);
  const median = replies.length ? (replies.length % 2 ? replies[(replies.length - 1) / 2] : (replies[replies.length / 2 - 1] + replies[replies.length / 2]) / 2) : null;
  const st = Object.fromEntries(ticketStatus.map((r) => [r.status, r.n]));
  const support = {
    days: series(ticketDays, w.start, w.days),
    opened: ticketStatus.reduce((s, r) => s + r.n, 0),
    open: st.open ?? 0,
    answered: st.answered ?? 0,
    closed: st.closed ?? 0,
    medianReplySec: median,
    replied: replies.length,
    unreplied: firstReplies.length - replies.length,
  };

  return { range, w, traffic, funnel, usage, revenue, users, support };
}

export type Analytics = Awaited<ReturnType<typeof loadAnalytics>>;

/** Overview cockpit: last 7 days vs the 7 before, today's visitors, 30-day series. One D1 batch. */
export async function loadCockpit() {
  const w = windowOf(7);
  const w30 = windowOf(30);
  const db = await getDb();
  const cur = (c: AnyColumn) => sql<number>`sum(case when ${isCur(c, w.s)} then 1 else 0 end)`;
  const prv = (c: AnyColumn) => sql<number>`sum(case when ${c} < ${w.s} and ${c} >= ${w.ps} then 1 else 0 end)`;
  const isCopy = like(E.action, "copy%");
  const [visitorRows, viewRows, users, usersAll, events, paid, signupDays, copyDays, openT, wait, plans] = await db.batch([
    db.select({ d: VD.day, n: VD.visitors }).from(VD).where(gte(VD.day, w30.startDay < w.prevDay ? w30.startDay : w.prevDay)),
    db.select({ d: PV.day, n: sum(PV.views) }).from(PV).where(gte(PV.day, w.prevDay)).groupBy(PV.day),
    db.select({ cur: cur(U.createdAt), prev: prv(U.createdAt) }).from(U).where(gte(U.createdAt, new Date(w.prev))),
    db.select({ n: count() }).from(U),
    db
      .select({
        copies: sql<number>`sum(case when ${E.action} like 'copy%' and ${isCur(E.createdAt, w.s)} then 1 else 0 end)`,
        copiesPrev: sql<number>`sum(case when ${E.action} like 'copy%' and ${E.createdAt} < ${w.s} then 1 else 0 end)`,
        mcp: sql<number>`sum(case when ${E.client} = 'mcp' and ${isCur(E.createdAt, w.s)} then 1 else 0 end)`,
        mcpPrev: sql<number>`sum(case when ${E.client} = 'mcp' and ${E.createdAt} < ${w.s} then 1 else 0 end)`,
        copiesToday: sql<number>`sum(case when ${E.action} like 'copy%' and ${E.createdAt} >= ${w.today / 1000} then 1 else 0 end)`,
      })
      .from(E)
      .where(gte(E.createdAt, new Date(w.prev))),
    db
      .select({
        currency: P.currency,
        c: sql<number>`sum(case when ${isCur(P.createdAt, w.s)} then ${P.amountCents} else 0 end)`,
        cPrev: sql<number>`sum(case when ${P.createdAt} < ${w.s} then ${P.amountCents} else 0 end)`,
        n: sql<number>`sum(case when ${isCur(P.createdAt, w.s)} then 1 else 0 end)`,
      })
      .from(P)
      .where(and(eq(P.status, "paid"), gte(P.createdAt, new Date(w.prev))))
      .groupBy(P.currency),
    db.select({ d: dayOf(U.createdAt), n: count() }).from(U).where(gte(U.createdAt, new Date(w30.start))).groupBy(dayOf(U.createdAt)),
    db.select({ d: dayOf(E.createdAt), n: count() }).from(E).where(and(isCopy, gte(E.createdAt, new Date(w30.start)))).groupBy(dayOf(E.createdAt)),
    db.select({ n: count() }).from(T).where(eq(T.status, "open")),
    db.select({ n: count() }).from(W),
    db.select({ plan: U.plan, n: count() }).from(U).where(inArray(U.plan, ["pro", "lifetime"])).groupBy(U.plan),
  ]);
  const deal = await getDeal();
  const v = series(visitorRows, w30.start, 30);
  const vAll = series(visitorRows, w.prev, 14);
  const pv = series(viewRows, w.prev, 14);
  const e = events[0];
  const byPlan = Object.fromEntries(plans.map((p) => [p.plan, p.n]));
  const usd = paid.find((p) => p.currency === "USD") ?? paid[0];
  return {
    visitors: total(vAll.slice(7)),
    visitorsPrev: total(vAll.slice(0, 7)),
    visitorsToday: vAll[13]?.n ?? 0,
    visitorsYesterday: vAll[12]?.n ?? 0,
    views: total(pv.slice(7)),
    viewsPrev: total(pv.slice(0, 7)),
    signups: Number(users[0]?.cur ?? 0),
    signupsPrev: Number(users[0]?.prev ?? 0),
    usersTotal: usersAll[0]?.n ?? 0,
    copies: Number(e?.copies ?? 0),
    copiesPrev: Number(e?.copiesPrev ?? 0),
    copiesToday: Number(e?.copiesToday ?? 0),
    mcp: Number(e?.mcp ?? 0),
    mcpPrev: Number(e?.mcpPrev ?? 0),
    revenue: Number(usd?.c ?? 0),
    revenuePrev: Number(usd?.cPrev ?? 0),
    revenueCurrency: usd?.currency ?? "USD",
    orders: paid.reduce((s, p) => s + Number(p.n ?? 0), 0),
    otherCurrencies: paid.length > 1,
    pro: byPlan.pro ?? 0,
    lifetime: byPlan.lifetime ?? 0,
    openTickets: openT[0]?.n ?? 0,
    waitlist: wait[0]?.n ?? 0,
    deal,
    visitorDays: v,
    signupDays: series(signupDays, w30.start, 30),
    copyDays: series(copyDays, w30.start, 30),
  };
}

/** CSV rows for the export route. */
export async function exportRows(kind: "traffic" | "components", range: RangeKey): Promise<(string | number)[][]> {
  const w = windowOf(RANGES[range]);
  const db = await getDb();
  if (kind === "traffic") {
    const [vis, views, signups, copies, mcp] = await db.batch([
      db.select({ d: VD.day, n: VD.visitors }).from(VD).where(gte(VD.day, w.startDay)),
      db.select({ d: PV.day, n: sum(PV.views) }).from(PV).where(gte(PV.day, w.startDay)).groupBy(PV.day),
      db.select({ d: dayOf(U.createdAt), n: count() }).from(U).where(gte(U.createdAt, new Date(w.start))).groupBy(dayOf(U.createdAt)),
      db.select({ d: dayOf(E.createdAt), n: count() }).from(E).where(and(like(E.action, "copy%"), gte(E.createdAt, new Date(w.start)))).groupBy(dayOf(E.createdAt)),
      db.select({ d: dayOf(E.createdAt), n: count() }).from(E).where(and(eq(E.client, "mcp"), gte(E.createdAt, new Date(w.start)))).groupBy(dayOf(E.createdAt)),
    ]);
    const cols = [vis, views, signups, copies, mcp].map((r) => series(r, w.start, w.days));
    return [["day", "visitors", "page_views", "signups", "copies", "mcp_calls"], ...cols[0].map((p, i) => [p.day, ...cols.map((c) => c[i].n)])];
  }
  const rows = await db
    .select({ target: E.target, n: count(), code: sql<number>`sum(case when ${E.action} = 'copy_code' then 1 else 0 end)`, figma: sql<number>`sum(case when ${E.action} = 'copy_figma' then 1 else 0 end)` })
    .from(E)
    .where(and(gte(E.createdAt, new Date(w.start)), like(E.action, "copy%"), not(like(E.target, "icon:%"))))
    .groupBy(E.target)
    .orderBy(desc(count()))
    .limit(500);
  return [["slug", "name", "system", "copies", "copy_code", "copy_figma"], ...rows.map((r) => { const d = describeTarget(r.target); return [r.target, d.name, d.system, r.n, Number(r.code ?? 0), Number(r.figma ?? 0)]; })];
}
