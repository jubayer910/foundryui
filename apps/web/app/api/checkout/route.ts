import { getSessionUser } from "@/lib/auth";
import { getDb, getEnv, schema } from "@/lib/db";
import { checkoutKeys, createCheckout } from "@/lib/lemonsqueezy";
import { PLAN_RANK, getPriceBook, isCheckoutOption, variantKeyFor, type CheckoutOption, type PlanId } from "@/lib/plans";

/**
 * POST /api/checkout  (form field or JSON body: option = proMonthly | proYearly | lifetime)
 * Signed out → sign up first, then back to /pricing?buy=<option>.
 * Keys or variant missing → waitlist row and /pricing?waitlist=<option>.
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
  if (!user) return go("/sign-up?next=" + encodeURIComponent("/pricing?buy=" + option));

  // Already covered: nothing to buy.
  const have = PLAN_RANK[user.plan as PlanId] ?? 0;
  if (have === PLAN_RANK.lifetime || (have === PLAN_RANK.pro && option !== "lifetime")) return go("/account?already=1");

  const pb = await getPriceBook();
  const key = variantKeyFor(pb, option);
  if (!key) return go("/pricing?closed=1");

  const env = await getEnv();
  const keys = checkoutKeys(env);
  const variantId = pb.settings.variants[key]?.trim();

  if (!keys || !variantId) {
    const db = await getDb();
    // Keep the price they saw: the variant key records deal vs after-deal for Lifetime.
    await db
      .insert(schema.waitlist)
      .values({ email: user.email.toLowerCase(), plan: key, createdAt: new Date() })
      .onConflictDoUpdate({ target: schema.waitlist.email, set: { plan: key } });
    return go("/pricing?waitlist=" + option);
  }

  try {
    const url = await createCheckout(keys, { variantId, email: user.email, userId: user.id, name: user.name, redirectUrl: origin + "/account?welcome=1" });
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
