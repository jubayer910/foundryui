import { headers } from "next/headers";
import { getSessionUser } from "@/lib/auth";
import { createTicket, notifyNewTicket, takeRateLimit, ticketInput } from "@/lib/support/tickets";

/**
 * POST /api/support/tickets {name?, email, subject?, message, source: "form"|"widget", website (honeypot)}
 * Creates a ticket and its first message, notifies the support inbox, returns { id }.
 */
export async function POST(req: Request) {
  const raw = await req.json().catch(() => null);
  const parsed = ticketInput.safeParse(raw ?? {});
  if (!parsed.success) {
    const field = parsed.error.issues[0]?.path[0];
    const message = field === "email" ? "Enter a valid email address." : field === "message" ? parsed.error.issues[0].message : "Check the form and try again.";
    return Response.json({ error: "invalid", field, message }, { status: 400 });
  }
  const input = parsed.data;
  // Honeypot: the hidden "website" field is only ever filled in by bots.
  if (input.website) return Response.json({ error: "rejected", message: "Could not send this message." }, { status: 400 });

  const ip = (await headers()).get("cf-connecting-ip") ?? "local";
  if (!(await takeRateLimit(ip))) {
    return Response.json({ error: "rate_limited", message: "Too many messages from this network. Try again in an hour, or email support@ingotui.com." }, { status: 429 });
  }

  const user = await getSessionUser().catch(() => null);
  try {
    const t = await createTicket(input, user?.id ?? null);
    const mail = await notifyNewTicket(t, input);
    return Response.json({ id: t.id, notified: mail.sent });
  } catch {
    return Response.json({ error: "server", message: "We could not save your message. Email support@ingotui.com instead." }, { status: 500 });
  }
}
