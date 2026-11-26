import { getSessionUser } from "@/lib/auth";
import { getEnv } from "@/lib/db";
import { creemKeys, customerIdFor, portalLink } from "@/lib/creem";

/**
 * POST /api/billing/portal: "Manage billing" on /account for a Creem buyer. Signed-in only. Asks Creem for a
 * one-time customer portal link (card, invoices, cancel) and redirects there (303).
 */
export async function POST(req: Request) {
  const origin = new URL(req.url).origin;
  const user = await getSessionUser();
  if (!user) return Response.redirect(origin + "/sign-in?next=" + encodeURIComponent("/account"), 303);
  const keys = creemKeys(await getEnv());
  const customerId = keys ? await customerIdFor(user.id) : null;
  if (!keys || !customerId) return Response.redirect(origin + "/account?billing=unavailable", 303);
  try {
    return Response.redirect(await portalLink(keys, customerId), 303);
  } catch (e) {
    console.error("creem portal", e instanceof Error ? e.message : e);
    return Response.redirect(origin + "/account?billing=error", 303);
  }
}

/** A plain link lands on the account page instead of a 405. */
export function GET(req: Request) {
  return Response.redirect(new URL("/account", req.url), 303);
}
