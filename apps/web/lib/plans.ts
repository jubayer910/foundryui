import "server-only";
import { and, count, eq, inArray } from "drizzle-orm";
import { getDb, schema } from "./db";
import { getSettings, type Settings } from "./settings";

/** Single source for plans and prices. Pricing, home, docs, llms.txt, account and admin read from here. */
export type PlanId = "free" | "pro" | "lifetime";
export type Option = "free" | "proMonthly" | "proYearly" | "lifetime";

/** Paid plans that unlock Pro items. */
export const PAID_PLANS: PlanId[] = ["pro", "lifetime"];
export const isPaid = (plan: string | null | undefined) => plan === "pro" || plan === "lifetime";

export type Deal = { enabled: boolean; total: number; sold: number; left: number; soldOut: boolean; after: Settings["deal"]["after"] };

/** Real spots: paid (not refunded) lifetime purchases at the deal. */
export async function getDeal(s?: Settings): Promise<Deal> {
  const settings = s ?? (await getSettings());
  let sold = 0;
  try {
    const db = await getDb();
    const [r] = await db
      .select({ n: count() })
      .from(schema.purchase)
      .where(and(eq(schema.purchase.plan, "lifetime"), eq(schema.purchase.variant, "lifetimeDeal"), inArray(schema.purchase.status, ["paid"])));
    sold = r?.n ?? 0;
  } catch {}
  const total = settings.deal.spotsTotal;
  const left = Math.max(0, total - sold);
  return { enabled: settings.deal.enabled, total, sold, left, soldOut: left === 0, after: settings.deal.after };
}

export type PriceBook = {
  settings: Settings;
  deal: Deal;
  proMonthly: number;
  proYearly: number;
  /** Lifetime price shown right now, or null when Lifetime is closed */
  lifetime: number | null;
  /** which variant a Lifetime checkout uses right now */
  lifetimeVariant: "lifetimeDeal" | "lifetimeAfter" | null;
  dealActive: boolean;
};

export async function getPriceBook(): Promise<PriceBook> {
  const settings = await getSettings();
  const deal = await getDeal(settings);
  const dealActive = deal.enabled && !deal.soldOut;
  const closed = deal.enabled && deal.soldOut && deal.after === "closed";
  return {
    settings,
    deal,
    proMonthly: settings.prices.proMonthly,
    proYearly: settings.prices.proYearly,
    lifetime: closed ? null : dealActive ? settings.prices.lifetimeDeal : settings.prices.lifetimeAfter,
    lifetimeVariant: closed ? null : dealActive ? "lifetimeDeal" : "lifetimeAfter",
    dealActive,
  };
}

export const usd = (n: number) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));
