import "server-only";
import { z } from "zod";
import { getDb, getEnv, schema } from "../db";
import { getSettings } from "../settings";
import { sendMail } from "../mail";

export const RATE_LIMIT = 5; // tickets per IP per hour

export const ticketInput = z.object({
  name: z.string().trim().max(80).optional().default(""),
  email: z.string().trim().toLowerCase().email().max(200),
  subject: z.string().trim().max(140).optional().default(""),
  message: z.string().trim().min(10, "Tell us a little more (10 characters or more).").max(5000),
  source: z.enum(["form", "widget"]).default("form"),
  /** honeypot: a hidden field people never fill in */
  website: z.string().optional().default(""),
});
export type TicketInput = z.infer<typeof ticketInput>;

/** Short, readable, unambiguous ticket id, e.g. T-7K4MZQ2D. */
export function ticketId() {
  const abc = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  const b = crypto.getRandomValues(new Uint8Array(8));
  return "T-" + Array.from(b, (x) => abc[x % abc.length]).join("");
}

/** Count one ticket for this IP in the current hour. Returns false when over the limit. */
export async function takeRateLimit(ip: string): Promise<boolean> {
  try {
    const env = await getEnv();
    const key = "support:rl:" + ip + ":" + Math.floor(Date.now() / 3_600_000);
    const used = Number((await env.KV.get(key)) ?? 0);
    if (used >= RATE_LIMIT) return false;
    await env.KV.put(key, String(used + 1), { expirationTtl: 3600 + 60 });
    return true;
  } catch {
    return true; // KV down: let the ticket in rather than lose a customer
  }
}

export async function createTicket(input: TicketInput, userId: string | null) {
  const db = await getDb();
  const id = ticketId();
  const now = new Date();
  const subject = (input.subject || input.message.split("\n")[0]).replace(/\s+/g, " ").slice(0, 140);
  await db.batch([
    db.insert(schema.ticket).values({ id, userId, email: input.email, name: input.name || null, subject, status: "open", source: input.source, createdAt: now, updatedAt: now }),
    db.insert(schema.ticketMessage).values({ id: crypto.randomUUID(), ticketId: id, author: "customer", body: input.message, createdAt: now }),
  ]);
  return { id, subject };
}

/** Email the support inbox about a new ticket. Never throws; the ticket is in admin either way. */
export async function notifyNewTicket(t: { id: string; subject: string }, input: TicketInput) {
  try {
    const s = await getSettings();
    if (!s.support.notify) return { sent: false, reason: "notify off" };
    const mail = {
      subject: `[${t.id}] ${t.subject}`,
      replyTo: input.email,
      text: [
        `New support ticket ${t.id} (${input.source})`,
        `From: ${input.name ? input.name + " " : ""}<${input.email}>`,
        `Subject: ${t.subject}`,
        "",
        input.message,
        "",
        "Reply to this email to answer the customer, or open the ticket in the admin panel: https://ingotui.com/admin",
      ].join("\n"),
    };
    const r = await sendMail({ ...mail, to: s.support.email });
    // Email Routing only delivers to verified destinations: fall back to the contact email when it differs.
    if (!r.sent && s.support.contactEmail && s.support.contactEmail !== s.support.email) return sendMail({ ...mail, to: s.support.contactEmail });
    return r;
  } catch (e) {
    return { sent: false, reason: String(e) };
  }
}
