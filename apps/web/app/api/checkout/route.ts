import { getSessionUser } from "@/lib/auth";
import { saveTouch } from "@/lib/analytics/attribution";
import { getDb, getEnv, schema } from "@/lib/db";
import { audit } from "@/lib/admin";
import { checkoutKeys, createCheckout } from "@/lib/lemonsqueezy";
import { getEffectivePlan, getPriceBook, isCheckoutOption, isPaid, isTeamActive, isTeamOption, variantKeyFor, type CheckoutOption, isMonthlyOff } from "@/lib/plans";

/**
 * POST /api/checkout  (form field or JSON body: option = proMonthly | proYearly | teamMonthly | teamYearly | lifetime)
 * Signed out → straight to the external checkout (Contra) when that is how the option sells; otherwise
 * sign up first, then back to /pricing?buy=<option>.
 * Keys or variant missing → the admin's external checkout link for that option (e.g. Contra) if set,
 * otherwise a waitlist row and /pricing?waitlist=<option>.
 * Otherwise → a Lemon Squeezy hosted checkout (303).
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

  const user = await getSessionUser();
  // where this buyer came from: refresh the account's touch and count the checkout per source
  await saveTouch(user?.id ?? null, "checkout", option);
  if (!user) {
    // Signed out: when this option sells through an external checkout (Contra) and not Lemon Squeezy,
    // go straight there. No account needed to pay: the Contra sale is matched to an account later by
    // the payer's email (lib/contra), and the buyer gets an email telling them what happens next.
    const pb = await getPriceBook();
    if (isMonthlyOff(pb, option)) return go("/pricing#plans");
    const key = variantKeyFor(pb, option);
    const external = key ? pb.settings.externalCheckout?.[key]?.trim() : "";
    const lsReady = !!(key && checkoutKeys(await getEnv()) && pb.settings.variants[key]?.trim());
    if (key && !lsReady && external && /^https:\/\//.test(external)) {
      try {
        await audit("guest", "checkout.external", key, { option, userId: null, url: external });
      } catch {}
      return go(external);
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
  const key = variantKeyFor(pb, option);
  if (!key) return go("/pricing?closed=1");

  const env = await getEnv();
  const keys = checkoutKeys(env);
  const variantId = pb.settings.variants[key]?.trim();

  if (!keys || !variantId) {
    // No Lemon Squeezy checkout: an external checkout link (e.g. a Contra product) wins over the waitlist.
    // The plan is then granted by hand in admin; the audit row lets the owner match the buyer.
    const external = pb.settings.externalCheckout?.[key]?.trim();
    if (external && /^https:\/\//.test(external)) {
      try {
        await audit(user.email, "checkout.external", key, { option, userId: user.id, url: external });
      } catch {}
      return go(external);
    }
    const db = await getDb();
    // Keep the price they saw: the variant key records deal vs after-deal for Lifetime.
    await db
      .insert(schema.waitlist)
      .values({ email: user.email.toLowerCase(), plan: key, createdAt: new Date() })
      .onConflictDoUpdate({ target: schema.waitlist.email, set: { plan: key } });
    return go("/pricing?waitlist=" + option);
  }

  try {
    const url = await createCheckout(keys, { variantId, email: user.email, userId: user.id, name: user.name, redirectUrl: origin + "/account?welcome=1", expiresAt: key === "lifetimeDeal" && pb.deal.endsAt ? new Date(pb.deal.endsAt).toISOString() : undefined });
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
