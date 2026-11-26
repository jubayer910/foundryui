"use server";
import { revalidatePath } from "next/cache";
import { audit, requireStaff } from "@/lib/admin";
import { dealEndMs, getDeal } from "@/lib/plans";
import { getSettings, setSetting, type Settings } from "@/lib/settings";
import { PRODUCT_ID_RE } from "@/lib/creem";

export type PricingState = { ok?: string; errors?: Record<string, string> };

const PRICE_KEYS = ["proMonthly", "proYearly", "teamMonthly", "teamYearly", "lifetimeDeal", "lifetimeAfter"] as const;

export async function savePricing(_prev: PricingState, f: FormData): Promise<PricingState> {
  const { user: me } = await requireStaff("pricing");
  const errors: Record<string, string> = {};
  const str = (k: string) => String(f.get(k) ?? "").trim();

  const prices = {} as Settings["prices"];
  for (const k of PRICE_KEYS) {
    const v = Number(str("price_" + k));
    const canBeOff = k === "proMonthly" || k === "teamMonthly"; // 0 = no monthly plan, yearly only
    if (!Number.isFinite(v) || v < 0 || (v === 0 && !canBeOff)) errors["price_" + k] = canBeOff ? "Enter 0 (no monthly plan) or a price" : "Enter a price above 0";
    else if (v > 100000) errors["price_" + k] = "That looks too high";
    prices[k] = Math.round(v * 100) / 100;
  }

  const variants = {} as Settings["variants"];
  for (const k of PRICE_KEYS) {
    const v = str("variant_" + k);
    if (v && !/^\d{1,12}$/.test(v)) errors["variant_" + k] = "Variant IDs are numbers";
    variants[k] = v;
  }

  const externalCheckout = {} as Settings["externalCheckout"];
  for (const k of PRICE_KEYS) {
    const v = str("ext_" + k);
    if (v && !/^https:\/\/[^\s]+$/.test(v)) errors["ext_" + k] = "Paste a full https:// link";
    else if (v.length > 500) errors["ext_" + k] = "That link is too long";
    externalCheckout[k] = v;
  }

  const creemProducts = {} as Settings["creem"]["products"];
  for (const k of PRICE_KEYS) {
    const v = str("creem_" + k);
    if (v && !PRODUCT_ID_RE.test(v)) errors["creem_" + k] = "Creem product IDs look like prod_…";
    creemProducts[k] = v;
  }
  const creem: Settings["creem"] = { products: creemProducts, preferContra: f.get("creem_preferContra") === "on" };

  const deal = await getDeal();
  const spots = Number(str("spotsTotal"));
  if (!Number.isInteger(spots) || spots < 1) errors.spotsTotal = "Whole number, at least 1";
  else if (spots < deal.sold) errors.spotsTotal = `${deal.sold} spots are already sold, so the total can't go below that`;
  else if (spots > 100000) errors.spotsTotal = "That looks too high";
  const after = str("after");
  if (after !== "price" && after !== "closed") errors.after = "Choose what happens after the deal";


  const before = await getSettings();
  const enabled = f.get("deal_enabled") === "on";
  // End date: the form sends UTC ISO (converted from the owner's local time in the browser), or "" for no end.
  const rawEnd = str("deal_endsAt");
  const endMs = dealEndMs(rawEnd);
  let endsAt = "";
  if (rawEnd && endMs === null) errors.deal_endsAt = "Pick a valid date and time";
  else if (endMs !== null) {
    endsAt = new Date(endMs).toISOString();
    const prevEnd = dealEndMs(before.deal.endsAt);
    const changed = prevEnd !== endMs;
    // A past end date can't be set or switched on. Keeping an end date that already passed (deal over) is fine.
    if (enabled && endMs <= Date.now() && (changed || !before.deal.enabled)) errors.deal_endsAt = "Pick a time in the future, or clear the end date";
    else if (endMs > Date.now() + 366 * 86400000) errors.deal_endsAt = "Keep the end within a year";
  }

  if (Object.keys(errors).length) return { errors };

  const dealNext: Settings["deal"] = {
    enabled,
    spotsTotal: spots,
    after: after as "price" | "closed",
    endsAt,
    showSpots: f.get("deal_showSpots") === "on",
    showTimer: f.get("deal_showTimer") === "on",
  };
  await setSetting("prices", prices);
  await setSetting("variants", variants);
  await setSetting("externalCheckout", externalCheckout);
  await setSetting("creem", creem);
  await setSetting("deal", dealNext);
  await audit(me.email, "settings.pricing", "prices,variants,creem,deal", {
    before: { prices: before.prices, variants: before.variants, externalCheckout: before.externalCheckout, creem: before.creem, deal: before.deal },
    after: { prices, variants, externalCheckout, creem, deal: dealNext },
  });
  revalidatePath("/pricing");
  revalidatePath("/", "layout");
  return { ok: "Saved. Pricing and the deal use the new values now." };
}
