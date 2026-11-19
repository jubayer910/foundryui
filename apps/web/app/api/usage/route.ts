import { ANON_LIMIT, anonUsage } from "@/lib/gate";
import { getSessionUser } from "@/lib/auth";
import { getEffectivePlan, isPaid } from "@/lib/plans";

export async function GET() {
  const user = await getSessionUser();
  if (user) {
    // effective plan: a Team seat counts as paid even when the user's own plan is free
    const plan = await getEffectivePlan(user).catch(() => user.plan ?? "free");
    return Response.json({ user, plan, paid: isPaid(plan), remaining: null }, { headers: { "cache-control": "no-store" } });
  }
  const u = await anonUsage();
  return Response.json({ user: null, paid: false, remaining: Math.max(0, ANON_LIMIT - u.used), limit: ANON_LIMIT }, { headers: { "cache-control": "no-store" } });
}
