import { audit, can, getStaff } from "@/lib/admin";
import { finishConnect } from "@/lib/contra/oauth";
import { syncContraSales } from "@/lib/contra/sync";

/** GET /api/admin/contra/callback?code&state: Contra's OAuth redirect. Stores the tokens, then runs a first sync. */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const back = (q: string) => new Response(null, { status: 303, headers: { location: url.origin + "/admin/contra?" + q, "cache-control": "no-store" } });
  const staff = await getStaff();
  if (!staff || !can(staff.role, "orders")) return Response.redirect(url.origin + "/admin/login?next=%2Fadmin%2Fcontra", 303);
  const err = url.searchParams.get("error");
  if (err) return back("err=" + encodeURIComponent(`Contra said: ${(url.searchParams.get("error_description") ?? err).slice(0, 160)}`));
  const code = url.searchParams.get("code") ?? "";
  const state = url.searchParams.get("state") ?? "";
  if (!code || !state) return back("err=" + encodeURIComponent("Contra sent no code. Start again."));
  const problem = await finishConnect(state, code, staff.user.email);
  if (problem) return back("err=" + encodeURIComponent(problem));
  await audit(staff.user.email, "contra.connect", "contra");
  const r = await syncContraSales({ refreshLinks: true });
  return back(r.ok ? "ok=" + encodeURIComponent(`Contra connected. ${r.added} new sale${r.added === 1 ? "" : "s"}, ${r.matched} matched.`) : "err=" + encodeURIComponent("Contra connected, but the first sync failed: " + (r.error ?? "unknown")));
}
