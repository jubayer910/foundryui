import { getSessionUser } from "@/lib/auth";
import { latestForUser, publicView } from "@/lib/activation";

/** GET /api/activation/status: the signed-in buyer's newest activation and plan. Polled by /activate while pending. */
export async function GET() {
  const user = await getSessionUser().catch(() => null);
  if (!user) return Response.json({ error: "login_required" }, { status: 401, headers: { "cache-control": "no-store" } });
  const a = await latestForUser(user.id);
  return Response.json({ activation: a ? publicView(a) : null, plan: user.plan }, { headers: { "cache-control": "no-store" } });
}
