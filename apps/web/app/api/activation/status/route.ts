import { getSessionUser } from "@/lib/auth";
import { latestForUser, publicView } from "@/lib/activation";
import { syncIfStale } from "@/lib/contra/sync";

/** GET /api/activation/status: the signed-in buyer's newest activation and plan. Polled by /activate while pending. */
export async function GET() {
  const user = await getSessionUser().catch(() => null);
  if (!user) return Response.json({ error: "login_required" }, { status: 401, headers: { "cache-control": "no-store" } });
  let a = await latestForUser(user.id);
  // Pending: check Contra for the sale (at most once a minute site-wide), then read the row again.
  if (a?.status === "pending") {
    await syncIfStale();
    a = await latestForUser(user.id);
  }
  return Response.json({ activation: a ? publicView(a) : null, plan: user.plan }, { headers: { "cache-control": "no-store" } });
}
