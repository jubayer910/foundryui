import { getSessionUser } from "@/lib/auth";
import { publicView, requestActivation } from "@/lib/activation";

/**
 * POST /api/activation  JSON { option, payerEmail, reference?, website (honeypot) }
 * Signed-in buyers who paid on Contra ask for their plan here. Creates a pending activation, or refreshes
 * the one already pending for the same product. 5 requests an hour per account.
 */
export async function POST(req: Request) {
  const user = await getSessionUser().catch(() => null);
  if (!user) return Response.json({ error: "login_required", message: "Log in first." }, { status: 401 });
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  // Honeypot: the hidden "website" field is only ever filled in by bots.
  if (typeof body.website === "string" && body.website.trim()) return Response.json({ error: "rejected", message: "Could not send this request." }, { status: 400 });
  const r = await requestActivation(user, {
    option: String(body.option ?? ""),
    payerEmail: String(body.payerEmail ?? ""),
    reference: typeof body.reference === "string" ? body.reference : "",
  });
  if (!r.ok) return Response.json({ error: r.error, message: r.message }, { status: r.error === "rate_limited" ? 429 : r.error === "already" ? 409 : 400 });
  return Response.json({ activation: publicView(r.activation), deduped: r.deduped });
}
