import { getSessionUser } from "@/lib/auth";
import { joinAffiliates } from "@/lib/affiliate";
import { takeLimit } from "@/app/api/feedback/store";

/** POST /api/account/affiliate: "Become an affiliate" on Account → Affiliate (sends the Creem invitation). */
export async function POST() {
  const user = await getSessionUser();
  if (!user) return Response.json({ error: "login_required" }, { status: 401 });
  if (!(await takeLimit("affiliate", user.id, 5))) return Response.json({ error: "rate_limited", message: "Too many tries. Please wait an hour." }, { status: 429 });
  const r = await joinAffiliates(user);
  return r.ok ? Response.json({ ok: true }) : Response.json({ error: "failed", message: r.message }, { status: 502 });
}
