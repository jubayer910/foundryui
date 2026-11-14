import "server-only";
import { eq } from "drizzle-orm";
import { getDb, getEnv, schema } from "@/lib/db";
import { getSyncState, type SyncState } from "@/lib/lemonsqueezy-sync";
import { getDeal, type Deal } from "@/lib/plans";
import { getSettings } from "@/lib/settings";

/**
 * Revenue numbers for /admin/revenue and its CSV export. Every amount is integer cents in the reporting
 * currency; nothing is ever summed as floating dollars. Lemon Squeezy gives each order a `total_usd`, so the
 * reporting currency is USD; an order in another currency without that field is kept apart (`unconverted`).
 */

const DAY = 86_400_000;
export const RANGES = { "30d": "30 days", "90d": "90 days", "12m": "12 months", all: "All time" } as const;
export type RangeKey = keyof typeof RANGES;
export const rangeOf = (v: string): RangeKey => (v in RANGES ? (v as RangeKey) : "30d");

/** Order statuses that took money (a refund later gives some or all of it back). */
const CHARGED = ["paid", "refunded", "partial_refund"];
/** Subscription statuses that still bill. */
const BILLING = ["active", "past_due"];
const LIVE = ["active", "on_trial", "past_due"];
const TROUBLE = ["past_due", "unpaid"];

export type PlanKey = "proMonthly" | "proYearly" | "lifetimeDeal" | "lifetimeAfter";
export const PLAN_KEYS: PlanKey[] = ["proMonthly", "proYearly", "lifetimeDeal", "lifetimeAfter"];
export const PLAN_NAME: Record<PlanKey, string> = { proMonthly: "Pro monthly", proYearly: "Pro yearly", lifetimeDeal: "Lifetime deal", lifetimeAfter: "Lifetime" };

type Attrs = Record<string, unknown>;
const parse = (raw: string | null): { attrs: Attrs; source: "webhook" | "sync" | null; test: boolean } => {
  try {
    const j = JSON.parse(raw ?? "") as { attributes?: Attrs; event?: string; source?: string; test_mode?: boolean };
    return { attrs: j.attributes ?? {}, source: j.source === "sync" ? "sync" : j.event ? "webhook" : null, test: j.test_mode === true };
  } catch {
    return { attrs: {}, source: null, test: false };
  }
};
const int = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? Math.round(v) : typeof v === "string" && /^-?\d+$/.test(v) ? Number(v) : null);

/** Where a purchase row came from, for the orders table. */
export function sourceOf(p: { provider: string; raw: string | null }): "webhook" | "sync" | "manual" | "unknown" {
  if (p.provider !== "lemonsqueezy") return "manual";
  return parse(p.raw).source ?? "unknown";
}

export type Order = {
  id: string;
  orderId: string;
  number: number | null;
  at: Date;
  email: string;
  userId: string | null;
  plan: PlanKey | null;
  status: string;
  currency: string;
  /** charged, in the order currency */
  amount: number;
  /** charged and refunded in USD cents; null when the row has no USD figure */
  usd: number | null;
  refundUsd: number | null;
  /** before tax and after discounts, USD cents (what a subscription period is worth for MRR) */
  baseUsd: number | null;
  receipt: string | null;
  test: boolean;
  source: string;
};

export type Sub = {
  id: string;
  subId: string;
  email: string;
  userId: string | null;
  interval: string;
  status: string;
  renewsAt: Date | null;
  endsAt: Date | null;
  createdAt: Date;
  /** what one billing period is worth before tax, USD cents, and where the number came from */
  priceUsd: number;
  priceFrom: "order" | "settings";
  card: string | null;
  updateUrl: string | null;
};

export type Point = { key: string; label: string; n: number };

export type Revenue = {
  range: RangeKey;
  from: Date;
  to: Date;
  keys: { apiKey: boolean; storeId: boolean; webhook: boolean };
  sync: SyncState | null;
  deal: Deal;
  /** range totals, USD cents */
  gross: number;
  refunds: number;
  net: number;
  paidOrders: number;
  charged: number;
  aov: number;
  prev: { gross: number; net: number; paidOrders: number } | null;
  mrr: number;
  arr: number;
  mrrFromSettings: number;
  activeSubs: number;
  lifetimeBuyers: number;
  byPlan: { key: PlanKey; label: string; cents: number; orders: number }[];
  daily: Point[];
  monthly: Point[];
  subsFlow: { key: string; label: string; added: number; churned: number }[];
  latest: Order[];
  renewals: Sub[];
  trouble: Sub[];
  failedOrders: Order[];
  /** our all-time and last-30-day figures, to set next to the store's own numbers */
  ours: { totalSales: number; totalRevenue: number; thirtyDaySales: number; thirtyDayRevenue: number };
  unconverted: { currency: string; cents: number; orders: number }[];
  hasTestData: boolean;
  orderCount: number;
  subCount: number;
};

const utcDay = (t: number) => Math.floor(t / DAY) * DAY;
const monthKey = (d: Date) => d.toISOString().slice(0, 7);
const monthLabel = (k: string) => new Date(k + "-01T00:00:00Z").toLocaleDateString("en-US", { month: "short", year: "2-digit", timeZone: "UTC" });

export function windowFor(range: RangeKey, firstOrder: Date | null, now = Date.now()) {
  const today = utcDay(now);
  const days = range === "30d" ? 30 : range === "90d" ? 90 : range === "12m" ? 365 : Math.max(30, Math.round((today - utcDay(firstOrder?.getTime() ?? today)) / DAY) + 1);
  const start = today - (days - 1) * DAY;
  return { days, start, end: today + DAY, prevStart: start - days * DAY };
}

export async function loadOrders(): Promise<Order[]> {
  const db = await getDb();
  const rows = await db.select().from(schema.purchase).where(eq(schema.purchase.provider, "lemonsqueezy"));
  return rows
    .map((p): Order => {
      const { attrs, source, test } = parse(p.raw);
      const usdTotal = int(attrs.total_usd);
      const usd = usdTotal ?? (p.currency.toUpperCase() === "USD" ? p.amountCents : null);
      const refundedAmount = int(attrs.refunded_amount_usd) ?? (p.currency.toUpperCase() === "USD" ? int(attrs.refunded_amount) : null);
      // A full refund without a refunded amount gives back the whole order.
      const refundUsd = usd === null ? null : p.status === "refunded" ? Math.min(usd, refundedAmount && refundedAmount > 0 ? refundedAmount : usd) : p.status === "partial_refund" ? Math.min(usd, refundedAmount ?? 0) : 0;
      const variant = p.variant ?? "";
      const plan: PlanKey | null = variant === "monthly" ? "proMonthly" : variant === "yearly" ? "proYearly" : variant === "lifetimeDeal" ? "lifetimeDeal" : variant === "lifetimeAfter" ? "lifetimeAfter" : null;
      const urls = (attrs.urls ?? {}) as Attrs;
      return {
        id: p.id,
        orderId: p.providerOrderId,
        number: int(attrs.order_number),
        at: p.createdAt,
        email: p.email,
        userId: p.userId,
        plan,
        status: p.status,
        currency: p.currency.toUpperCase(),
        amount: p.amountCents,
        usd,
        refundUsd,
        baseUsd: int(attrs.subtotal_usd) !== null ? Math.max(0, (int(attrs.subtotal_usd) ?? 0) - (int(attrs.discount_total_usd) ?? 0)) : usd,
        receipt: typeof urls.receipt === "string" ? urls.receipt : null,
        test: test || attrs.test_mode === true,
        source: source ?? "unknown",
      };
    })
    .sort((a, b) => b.at.getTime() - a.at.getTime());
}

export async function loadRevenue(range: RangeKey, now = Date.now()): Promise<Revenue> {
  const db = await getDb();
  const env = await getEnv();
  const settings = await getSettings();
  const [orders, subRows, deal, sync] = await Promise.all([
    loadOrders(),
    db.select().from(schema.subscription).where(eq(schema.subscription.provider, "lemonsqueezy")),
    getDeal(settings),
    getSyncState(db),
  ]);
  const first = orders.length ? orders[orders.length - 1].at : null;
  const w = windowFor(range, first, now);
  const inRange = (d: Date, a = w.start, b = w.end) => d.getTime() >= a && d.getTime() < b;

  const charged = orders.filter((o) => CHARGED.includes(o.status));
  const sum = (list: Order[], f: (o: Order) => number | null) => list.reduce((s, o) => s + (f(o) ?? 0), 0);
  const conv = charged.filter((o) => o.usd !== null);
  const cur = conv.filter((o) => inRange(o.at));
  const gross = sum(cur, (o) => o.usd);
  const refunds = sum(cur, (o) => o.refundUsd);
  const paidOrders = cur.filter((o) => o.status !== "refunded").length;
  const prevList = range === "all" ? null : conv.filter((o) => inRange(o.at, w.prevStart, w.start));
  const prev = prevList ? { gross: sum(prevList, (o) => o.usd), net: sum(prevList, (o) => o.usd) - sum(prevList, (o) => o.refundUsd), paidOrders: prevList.filter((o) => o.status !== "refunded").length } : null;

  const unconvertedMap = new Map<string, { cents: number; orders: number }>();
  for (const o of charged) {
    if (o.usd !== null || !inRange(o.at)) continue;
    const u = unconvertedMap.get(o.currency) ?? { cents: 0, orders: 0 };
    u.cents += o.amount;
    u.orders++;
    unconvertedMap.set(o.currency, u);
  }

  // Revenue by plan, net of refunds, in range.
  const byPlan = PLAN_KEYS.map((key) => {
    const list = cur.filter((o) => o.plan === key);
    return { key, label: PLAN_NAME[key], cents: sum(list, (o) => o.usd) - sum(list, (o) => o.refundUsd), orders: list.length };
  });

  // Subscriptions: price per period from the order that started it, else the admin price.
  const orderById = new Map(orders.map((o) => [o.orderId, o]));
  const subs: Sub[] = subRows.map((s) => {
    const { attrs } = parse(s.raw);
    const order = orderById.get(String(attrs.order_id ?? ""));
    const fromOrder = order && order.baseUsd !== null && order.baseUsd > 0 ? order.baseUsd : null;
    const fallback = Math.round((s.interval === "yearly" ? settings.prices.proYearly : settings.prices.proMonthly) * 100);
    const urls = (attrs.urls ?? {}) as Attrs;
    return {
      id: s.id,
      subId: s.providerSubId,
      email: s.email,
      userId: s.userId,
      interval: s.interval,
      status: s.status,
      renewsAt: s.renewsAt,
      endsAt: s.endsAt,
      createdAt: s.createdAt,
      priceUsd: fromOrder ?? fallback,
      priceFrom: fromOrder ? "order" : "settings",
      card: typeof attrs.card_brand === "string" && attrs.card_brand ? `${attrs.card_brand} ${attrs.card_last_four ?? ""}`.trim() : null,
      updateUrl: typeof urls.update_payment_method === "string" ? urls.update_payment_method : null,
    };
  });
  const billing = subs.filter((s) => BILLING.includes(s.status));
  // Monthly amounts as cents; yearly ones summed first, then divided once, so nothing drifts.
  const monthlyCents = billing.filter((s) => s.interval !== "yearly").reduce((t, s) => t + s.priceUsd, 0);
  const yearlyCents = billing.filter((s) => s.interval === "yearly").reduce((t, s) => t + s.priceUsd, 0);
  const mrr = monthlyCents + Math.round(yearlyCents / 12);
  const mrrFromSettings = billing.filter((s) => s.priceFrom === "settings").length;

  const lifetimeBuyers = new Set(orders.filter((o) => (o.plan === "lifetimeDeal" || o.plan === "lifetimeAfter") && (o.status === "paid" || o.status === "partial_refund")).map((o) => o.userId ?? o.email.toLowerCase())).size;

  // Daily: the range, at most the last 90 days.
  const dDays = Math.min(90, w.days);
  const dStart = utcDay(now) - (dDays - 1) * DAY;
  const dayMap = new Map<string, number>();
  for (const o of conv) {
    const t = o.at.getTime();
    if (t < dStart) continue;
    const k = o.at.toISOString().slice(0, 10);
    dayMap.set(k, (dayMap.get(k) ?? 0) + (o.usd ?? 0) - (o.refundUsd ?? 0));
  }
  const daily = Array.from({ length: dDays }, (_, i) => {
    const k = new Date(dStart + i * DAY).toISOString().slice(0, 10);
    return { key: k, label: k.slice(5), n: dayMap.get(k) ?? 0 };
  });

  // Monthly: last 12 months, or every month since the first order for "all" (up to 36).
  const nowMonth = new Date(utcDay(now));
  let months = 12;
  if (range === "all" && first) {
    const diff = (nowMonth.getUTCFullYear() - first.getUTCFullYear()) * 12 + nowMonth.getUTCMonth() - first.getUTCMonth() + 1;
    months = Math.min(36, Math.max(12, diff));
  }
  const monthKeys = Array.from({ length: months }, (_, i) => monthKey(new Date(Date.UTC(nowMonth.getUTCFullYear(), nowMonth.getUTCMonth() - (months - 1 - i), 1))));
  const monMap = new Map<string, number>();
  for (const o of conv) monMap.set(monthKey(o.at), (monMap.get(monthKey(o.at)) ?? 0) + (o.usd ?? 0) - (o.refundUsd ?? 0));
  const monthly = monthKeys.map((k) => ({ key: k, label: monthLabel(k), n: monMap.get(k) ?? 0 }));

  const subsFlow = monthKeys.map((k) => ({
    key: k,
    label: monthLabel(k),
    added: subs.filter((s) => monthKey(s.createdAt) === k).length,
    churned: subs.filter((s) => (s.status === "cancelled" || s.status === "expired") && monthKey(s.endsAt ?? s.createdAt) === k && (s.endsAt?.getTime() ?? 0) <= now).length,
  }));

  const soon = now + 30 * DAY;
  const renewals = subs
    .filter((s) => BILLING.includes(s.status) && s.renewsAt && s.renewsAt.getTime() >= now && s.renewsAt.getTime() <= soon)
    .sort((a, b) => (a.renewsAt?.getTime() ?? 0) - (b.renewsAt?.getTime() ?? 0));
  const trouble = subs.filter((s) => TROUBLE.includes(s.status)).sort((a, b) => (a.renewsAt?.getTime() ?? 0) - (b.renewsAt?.getTime() ?? 0));
  const failedOrders = orders.filter((o) => o.status === "failed" || o.status === "fraudulent").slice(0, 20);

  const last30 = utcDay(now) - 29 * DAY;
  const ours = {
    totalSales: charged.length,
    totalRevenue: sum(conv, (o) => o.usd),
    thirtyDaySales: charged.filter((o) => o.at.getTime() >= last30).length,
    thirtyDayRevenue: sum(conv.filter((o) => o.at.getTime() >= last30), (o) => o.usd),
  };

  return {
    range,
    from: new Date(w.start),
    to: new Date(w.end - DAY),
    keys: { apiKey: !!env.LEMONSQUEEZY_API_KEY?.trim(), storeId: !!env.LEMONSQUEEZY_STORE_ID?.trim(), webhook: !!env.LEMONSQUEEZY_WEBHOOK_SECRET?.trim() },
    sync,
    deal,
    gross,
    refunds,
    net: gross - refunds,
    paidOrders,
    charged: cur.length,
    aov: cur.length ? Math.round(gross / cur.length) : 0,
    prev,
    mrr,
    arr: mrr * 12,
    mrrFromSettings,
    activeSubs: subs.filter((s) => LIVE.includes(s.status)).length,
    lifetimeBuyers,
    byPlan,
    daily,
    monthly,
    subsFlow,
    latest: orders.filter((o) => inRange(o.at)).slice(0, 12),
    renewals,
    trouble,
    failedOrders,
    ours,
    unconverted: [...unconvertedMap.entries()].map(([currency, v]) => ({ currency, ...v })),
    hasTestData: orders.some((o) => o.test) || sync?.testMode === true,
    orderCount: orders.length,
    subCount: subs.length,
  };
}

/** CSV rows for the orders in a range (header first). */
export async function orderCsv(range: RangeKey, now = Date.now()): Promise<(string | number)[][]> {
  const orders = await loadOrders();
  const first = orders.length ? orders[orders.length - 1].at : null;
  const w = windowFor(range, first, now);
  const rows: (string | number)[][] = [["date_utc", "order_id", "order_number", "email", "plan", "status", "currency", "amount", "amount_usd", "refunded_usd", "net_usd", "test_mode", "source"]];
  const dec = (c: number | null) => (c === null ? "" : (c < 0 ? "-" : "") + Math.floor(Math.abs(c) / 100) + "." + String(Math.abs(c) % 100).padStart(2, "0"));
  for (const o of [...orders].reverse()) {
    const t = o.at.getTime();
    if (t < w.start || t >= w.end) continue;
    rows.push([o.at.toISOString(), o.orderId, o.number ?? "", o.email, o.plan ? PLAN_NAME[o.plan] : "", o.status, o.currency, dec(o.amount), dec(o.usd), dec(o.refundUsd), dec(o.usd === null ? null : o.usd - (o.refundUsd ?? 0)), o.test ? "yes" : "no", o.source]);
  }
  return rows;
}
