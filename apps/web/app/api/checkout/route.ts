import { getSessionUser } from "@/lib/auth";
import { saveTouch } from "@/lib/analytics/attribution";
import { getDb, getEnv, schema } from "@/lib/db";
import { audit } from "@/lib/admin";
import { checkoutKeys, createCheckout } from "@/lib/lemonsqueezy";
import { checkoutBody, createCheckout as createCreemCheckout, pickCheckout, type CreemKeys } from "@/lib/creem";
import { getEffectivePlan, getPriceBook, isCheckoutOption, isPaid, isTeamActive, isTeamOption, variantKeyFor, type CheckoutOption, type VariantKey, isMonthlyOff } from "@/lib/plans";

/**
 * POST /api/checkout  (form field or JSON body: option = proMonthly | proYearly | teamMonthly | teamYearly | lifetime)
 * Provider order per variant (lib/creem.ts pickCheckout): Creem (API key + product id) > Lemon Squeezy (keys +
 * variant id) > the admin's external link (Contra) > waitlist. "Prefer Contra" in admin puts the Contra link first.
 * Signed out: Creem and Contra take payment without an account (the sale is matched to an account by the payer's
 * email later: lib/creem.ts, lib/contra); Lemon Squeezy and the waitlist ask to sign up first, then back to
 * /pricing?buy=<option>.
 * JSON callers get { url } instead of a redirect.
 */
export async function POST(req: Request) {
  const isJson = (req.headers.get("content-type") ?? "").includes("application/json");
  let raw: unknown;
  if (isJson) raw = ((await req.json().catch(() => ({}))) as { option?: unknown }).option;
  else raw = (await req.formData().catch(() => null))?.get("option");
  const origin = new URL(req.url).origin;
  const go = (path: string) => (isJson ? Response.json({ url: path.startsWith("http") ? path : origin + path }) : Response.redirect(path.startsWith("http") ? path : origin + path, 303));

  if (!isCheckoutOption(raw)) return isJson ? Response.json({ error: "unknown_option" }, { status: 400 }) : go("/pricing");
  const option: CheckoutOption = raw;

  /** A Creem hosted checkout; the webhook grants the plan. */
  const creem = async (keys: CreemKeys, productId: string, key: VariantKey, buyer: { email: string; id: string } | null) => {
    try {
      const body = checkoutBody({
        productId,
        variantKey: key,
        option,
        // Signed out: a thank-you page that says to check the inbox (the account is matched by email).
        successUrl: origin + (buyer ? "/account?welcome=1" : "/thanks?paid=" + option),
        email: buyer?.email,
        userId: buyer?.id,
      });
      const { url } = await createCreemCheckout(keys, body);
      try {
        await audit(buyer?.email ?? "guest", "checkout.creem", key, { option, userId: buyer?.id ?? null, requestId: body.request_id });
      } catch {}
      return go(url);
    } catch (e) {
      console.error("creem checkout", e instanceof Error ? e.message : e);
      return go("/pricing?error=checkout");
    }
  };

  const user = await getSessionUser();
  // where this buyer came from: refresh the account's touch and count the checkout per source
  await saveTouch(user?.id ?? null, "checkout", option);
  if (!user) {
    // Signed out: Creem and Contra need no account to pay. The webhook (Creem) or the sync (Contra) matches the
    // sale to an account by the payer's email, and the buyer gets an email telling them what happens next.
    const pb = await getPriceBook();
    if (isMonthlyOff(pb, option)) return go("/pricing#plans");
    const key = variantKeyFor(pb, option);
    if (!key) return go("/pricing?closed=1");
    const pick = pickCheckout(await getEnv(), pb.settings, key);
    if (pick.kind === "creem") return creem(pick.keys, pick.productId, key, null);
    if (pick.kind === "external") {
      try {
        await audit("guest", "checkout.external", key, { option, userId: null, url: pick.url });
      } catch {}
      return go(pick.url);
    }
    return go("/sign-up?next=" + encodeURIComponent("/pricing?buy=" + option));
  }

  // Already covered: nothing to buy.
  // Team: blocked only when this user already pays for a Team (a Pro or Lifetime buyer may add one for teammates).
  // Pro: blocked when anything paid covers it, a Team seat included. Lifetime: blocked for Lifetime only.
  if (isTeamOption(option)) {
    if (await isTeamActive(user.id, user.plan)) return go("/account?already=1");
  } else if (user.plan === "lifetime" || (option !== "lifetime" && isPaid(await getEffectivePlan(user)))) {
    return go("/account?already=1");
  }

  const pb = await getPriceBook();
  if (isMonthlyOff(pb, option)) return go("/pricing#plans");
  // Lifetime resolves to the deal product only while the deal runs, else the after-deal product.
  const key = variantKeyFor(pb, option);
  if (!key) return go("/pricing?closed=1");

  const env = await getEnv();
  const pick = pickCheckout(env, pb.settings, key);
  if (pick.kind === "creem") return creem(pick.keys, pick.productId, key, { email: user.email, id: user.id });

  if (pick.kind === "external") {
    // An external checkout link (e.g. a Contra product). The Contra sync matches the sale; the audit row also
    // lets the owner match the buyer by hand.
    try {
      await audit(user.email, "checkout.external", key, { option, userId: user.id, url: pick.url });
    } catch {}
    return go(pick.url);
  }

  const keys = checkoutKeys(env);
  if (pick.kind === "waitlist" || !keys) {
    const db = await getDb();
    // Keep the price they saw: the variant key records deal vs after-deal for Lifetime.
    await db
      .insert(schema.waitlist)
      .values({ email: user.email.toLowerCase(), plan: key, createdAt: new Date() })
      .onConflictDoUpdate({ target: schema.waitlist.email, set: { plan: key } });
    return go("/pricing?waitlist=" + option);
  }

  try {
    const url = await createCheckout(keys, { variantId: pick.variantId, email: user.email, userId: user.id, name: user.name, redirectUrl: origin + "/account?welcome=1", expiresAt: key === "lifetimeDeal" && pb.deal.endsAt ? new Date(pb.deal.endsAt).toISOString() : undefined });
    return go(url);
  } catch (e) {
    console.error("checkout", e instanceof Error ? e.message : e);
    return go("/pricing?error=checkout");
  }
}

/** A plain link to /api/checkout lands on pricing instead of a 405. */
export function GET(req: Request) {
  return Response.redirect(new URL("/pricing", req.url), 303);
}
