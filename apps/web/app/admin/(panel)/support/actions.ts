"use server";
import { revalidatePath } from "next/cache";
import { asc, eq } from "drizzle-orm";
import { audit, requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { SENDERS, sendMail } from "@/lib/mail";
import { getSettings } from "@/lib/settings";
import { back, str } from "@/components/admin/back";
import { quotedBody, replySubject } from "@/components/admin/thread";

/** Save an admin reply, mark the ticket answered, email the customer (falls back to a mailto link). */
export async function replyTicket(f: FormData) {
  const { user: me } = await requireStaff("support");
  const id = str(f, "id", 100);
  const to = `/admin/support/${id}`;
  const body = str(f, "body", 20000);
  if (!body) back(to, { err: "Write a reply first." });
  const db = await getDb();
  const [t] = await db.select().from(schema.ticket).where(eq(schema.ticket.id, id)).limit(1);
  if (!t) back("/admin/support", { err: "That ticket no longer exists." });
  const earlier = await db.select().from(schema.ticketMessage).where(eq(schema.ticketMessage.ticketId, id)).orderBy(asc(schema.ticketMessage.createdAt));
  const now = new Date();
  const msgId = crypto.randomUUID();
  await db.insert(schema.ticketMessage).values({ id: msgId, ticketId: id, author: "admin", body, createdAt: now });
  await db.update(schema.ticket).set({ status: "answered", updatedAt: now }).where(eq(schema.ticket.id, id));
  const s = await getSettings();
  const res = await sendMail({
    to: t.email,
    subject: replySubject(t.subject, t.id),
    text: quotedBody(body, earlier, t.name || t.email),
    replyTo: s.support.email,
    from: SENDERS.support,
  });
  await audit(me.email, "ticket.reply", id, { messageId: msgId, emailed: res.sent, reason: res.reason ?? null });
  revalidatePath("/admin", "layout");
  if (res.sent) back(to, { ok: `Reply saved and emailed to ${t.email}.` });
  back(to, { sent: "0", m: msgId });
}

export async function setTicketStatus(f: FormData) {
  const { user: me } = await requireStaff("support");
  const id = str(f, "id", 100);
  const status = str(f, "status", 20);
  const to = `/admin/support/${id}`;
  if (!["open", "answered", "closed"].includes(status)) back(to, { err: "Unknown status." });
  const db = await getDb();
  const [t] = await db.select({ status: schema.ticket.status }).from(schema.ticket).where(eq(schema.ticket.id, id)).limit(1);
  if (!t) back("/admin/support", { err: "That ticket no longer exists." });
  await db.update(schema.ticket).set({ status, updatedAt: new Date() }).where(eq(schema.ticket.id, id));
  await audit(me.email, status === "closed" ? "ticket.close" : "ticket.reopen", id, { before: t.status, after: status });
  revalidatePath("/admin", "layout");
  back(to, { ok: status === "closed" ? "Ticket closed." : "Ticket reopened." });
}
