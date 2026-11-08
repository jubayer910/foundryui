import { ANON_LIMIT, anonUsage } from "@/lib/gate";
import { getSessionUser } from "@/lib/auth";

export async function GET() {
  const user = await getSessionUser();
  if (user) return Response.json({ user, remaining: null });
  const u = await anonUsage();
  return Response.json({ user: null, remaining: Math.max(0, ANON_LIMIT - u.used), limit: ANON_LIMIT });
}
