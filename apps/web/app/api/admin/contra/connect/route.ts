import { can, getStaff } from "@/lib/admin";
import { startConnect } from "@/lib/contra/oauth";

/**
 * GET /api/admin/contra/connect: staff with "orders" start the Contra OAuth sign-in (PKCE). Redirects to
 * Contra's consent page; Contra sends the owner back to /api/admin/contra/callback on this same origin.
 */
export async function GET(req: Request) {
  const staff = await getStaff();
  const origin = new URL(req.url).origin;
  if (!staff || !can(staff.role, "orders")) return Response.redirect(origin + "/admin/login?next=%2Fadmin%2Fcontra", 303);
  try {
    const url = await startConnect(origin, staff.user.email);
    return new Response(null, { status: 303, headers: { location: url, "cache-control": "no-store" } });
  } catch (e) {
    const msg = (e instanceof Error ? e.message : "Could not reach Contra").slice(0, 200);
    return Response.redirect(origin + "/admin/contra?err=" + encodeURIComponent(msg), 303);
  }
}
