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

export type DealReason = "disabled" | "sold_out" | "ended";
export type Deal = {
  enabled: boolean;
  total: number;
  sold: number;
  left: number;
  soldOut: boolean;
  after: Settings["deal"]["after"];
  /** Real end date (UTC ISO) or null when the deal has no end date. */
  endsAt: string | null;
  /** The end date has passed. */
  ended: boolean;
  /** The deal price is on sale right now: enabled, spots left and before endsAt. */
  active: boolean;
  /** Why the deal is not on sale (null while active). */
  reason: DealReason | null;
  showSpots: boolean;
  /** Countdown shown: the owner's toggle and an end date. */
  showTimer: boolean;
};

/** A valid end date as ms since epoch, or null. */
export function dealEndMs(endsAt: string | null | undefined): number | null {
  if (!endsAt) return null;
  const t = Date.parse(endsAt);
  return Number.isFinite(t) ? t : null;
}

/** The one rule for "is the deal price on sale": enabled AND spots left AND (no end date OR now < end). Checkout, pricing, /api/site and admin all use it. */
export function dealState(d: { enabled: boolean; left: number; endsAt: string | null | undefined }, now = Date.now()): { active: boolean; ended: boolean; reason: DealReason | null } {
  const end = dealEndMs(d.endsAt);
  const ended = end !== null && now >= end;
  const reason: DealReason | null = !d.enabled ? "disabled" : d.left <= 0 ? "sold_out" : ended ? "ended" : null;
  return { active: reason === null, ended, reason };
}

/** Real spots: paid (not refunded) lifetime purchases at the deal. */
export async function getDeal(s?: Settings, now = Date.now()): Promise<Deal> {
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
  const end = dealEndMs(settings.deal.endsAt);
  const endsAt = end === null ? null : new Date(end).toISOString();
  const st = dealState({ enabled: settings.deal.enabled, left, endsAt }, now);
  return {
    enabled: settings.deal.enabled,
    total,
    sold,
    left,
    soldOut: left === 0,
    after: settings.deal.after,
    endsAt,
    ended: st.ended,
    active: st.active,
    reason: st.reason,
    showSpots: settings.deal.showSpots !== false,
    showTimer: settings.deal.showTimer !== false && endsAt !== null,
  };
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

export async function getPriceBook(now = Date.now()): Promise<PriceBook> {
  const settings = await getSettings();
  const deal = await getDeal(settings, now);
  const dealActive = deal.active;
  // The deal ran and finished (spots gone or end date passed): Lifetime follows the owner's after-deal rule.
  const closed = deal.enabled && !dealActive && deal.after === "closed";
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

/** The one honest sentence about what happens when the deal ends (spots gone or end date passed). */
export function dealRule(pb: PriceBook) {
  const { deal, settings } = pb;
  if (!deal.enabled) return "";
  const after = usd(settings.prices.lifetimeAfter);
  if (deal.reason === "sold_out") return deal.after === "closed" ? "All " + deal.total + " launch spots are taken, so Lifetime is closed." : "All " + deal.total + " launch spots are taken. Lifetime is now " + after + ".";
  if (deal.reason === "ended") return deal.after === "closed" ? "The launch deal has ended, so Lifetime is closed." : "The launch deal has ended. Lifetime is now " + after + ".";
  const end = deal.endsAt ? " or on " + dealEndText(deal.endsAt) : "";
  const when = "When all " + deal.total + " spots are taken" + end;
  return deal.after === "closed" ? when + ", Lifetime closes." : when + ", Lifetime goes to " + after + ".";
}

/** A fixed, readable UTC end date for server-rendered copy, e.g. "Nov 30, 2026, 23:59 UTC". */
export function dealEndText(endsAt: string) {
  const d = new Date(endsAt);
  return d.toLocaleString("en-US", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }) + " UTC";
}

/** One plain-text line for llms.txt and anywhere else prices are quoted in copy. */
export function pricingSentence(pb: PriceBook) {
  const life =
    pb.lifetime === null
      ? "Lifetime is closed"
      : pb.dealActive
        ? "Lifetime (" + usd(pb.lifetime) + " once for the first " + pb.deal.total + " buyers" + (pb.deal.endsAt ? " until " + dealEndText(pb.deal.endsAt) : "") + (pb.deal.after === "price" ? ", then " + usd(pb.settings.prices.lifetimeAfter) : "") + "; every system and every future update, forever)"
        : "Lifetime (" + usd(pb.lifetime) + " once; every system and every future update, forever)";
  return "Free (Loopo system, free components, every icon, 50 MCP calls a day), Pro (" + usd(pb.proMonthly) + " a month or " + usd(pb.proYearly) + " a year, all systems, unlimited MCP), " + life + ". 7-day refund on paid plans.";
}
