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

/* ---- W1 helpers (payments and pricing) ---- */

/** What a buy button asks for. Lifetime resolves to the deal or after-deal variant at checkout time. */
export type CheckoutOption = "proMonthly" | "proYearly" | "lifetime";
export const CHECKOUT_OPTIONS: CheckoutOption[] = ["proMonthly", "proYearly", "lifetime"];
export const isCheckoutOption = (v: unknown): v is CheckoutOption => typeof v === "string" && (CHECKOUT_OPTIONS as string[]).includes(v);

/** Key into settings.variants / settings.prices. */
export type VariantKey = keyof Settings["variants"];

export const PLAN_RANK: Record<PlanId, number> = { free: 0, pro: 1, lifetime: 2 };
export const planLabel = (plan: string | null | undefined) => (plan === "lifetime" ? "Lifetime" : plan === "pro" ? "Pro" : "Free");

/** The variant a checkout for this option uses right now (null = Lifetime is closed). */
export function variantKeyFor(pb: PriceBook, option: CheckoutOption): VariantKey | null {
  return option === "lifetime" ? pb.lifetimeVariant : option;
}

/** Reverse map: a Lemon Squeezy variant id to the option it sells. */
export function variantKeyForId(settings: Settings, variantId: string | number | null | undefined): VariantKey | null {
  if (variantId === null || variantId === undefined || variantId === "") return null;
  const id = String(variantId);
  for (const k of Object.keys(settings.variants) as VariantKey[]) if (settings.variants[k] && String(settings.variants[k]).trim() === id) return k;
  return null;
}

/** Honest yearly saving versus 12 monthly payments, rounded down. 0 when yearly is not cheaper. */
export function yearlySaving(pb: Pick<PriceBook, "proMonthly" | "proYearly">) {
  const full = pb.proMonthly * 12;
  if (full <= 0 || pb.proYearly >= full) return 0;
  return Math.floor((1 - pb.proYearly / full) * 100);
}

/** Price of one option as written in copy, e.g. "$7 a month". */
export function optionPriceText(pb: PriceBook, option: CheckoutOption) {
  if (option === "proMonthly") return usd(pb.proMonthly) + " a month";
  if (option === "proYearly") return usd(pb.proYearly) + " a year";
  return pb.lifetime === null ? "closed" : usd(pb.lifetime) + " once";
}

export const optionName = (option: string) => (option === "proMonthly" ? "Pro monthly" : option === "proYearly" ? "Pro yearly" : option.startsWith("lifetime") ? "Lifetime" : "Free");

/** The one honest sentence about what happens when the deal spots are gone. */
export function dealRule(pb: PriceBook) {
  const { deal, settings } = pb;
  if (!deal.enabled) return "";
  if (deal.soldOut)
    return deal.after === "closed" ? "All " + deal.total + " launch spots are taken, so Lifetime is closed." : "All " + deal.total + " launch spots are taken. Lifetime is now " + usd(settings.prices.lifetimeAfter) + ".";
  return deal.after === "closed" ? "When all " + deal.total + " spots are taken, Lifetime closes." : "When all " + deal.total + " spots are taken, Lifetime goes to " + usd(settings.prices.lifetimeAfter) + ".";
}

/** One plain-text line for llms.txt and anywhere else prices are quoted in copy. */
export function pricingSentence(pb: PriceBook) {
  const life =
    pb.lifetime === null
      ? "Lifetime is closed"
      : pb.dealActive
        ? "Lifetime (" + usd(pb.lifetime) + " once for the first " + pb.deal.total + " buyers" + (pb.deal.after === "price" ? ", then " + usd(pb.settings.prices.lifetimeAfter) : "") + "; every system and every future update, forever)"
        : "Lifetime (" + usd(pb.lifetime) + " once; every system and every future update, forever)";
  return "Free (Loopo system, free components, every icon, 50 MCP calls a day), Pro (" + usd(pb.proMonthly) + " a month or " + usd(pb.proYearly) + " a year, all systems, unlimited MCP), " + life + ". 7-day refund on paid plans.";
}
