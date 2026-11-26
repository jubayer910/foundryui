import "server-only";
import { desc, isNotNull, lt } from "drizzle-orm";
import { getDb, schema } from "./db";
import { SENDERS, sendMail } from "./mail";
import { getSettings } from "./settings";

/**
 * Failed sign-ups. When the server fails a sign-up (not a user mistake), the email and name typed are kept in
 * signup_failure so the person can be told once it is fixed, and support gets an alert email (at most one per
 * ALERT_GAP_MIN minutes, so an outage is noticed within minutes). The password is never read or stored.
 * Everything here swallows its own errors: it must never change what the visitor sees. It also works before
 * migration 0022 is applied (the insert just fails quietly).
 */

/** Codes caused by what the visitor typed or did, not by the server. Not recorded. */
const USER_ERRORS = new Set([
  "USER_ALREADY_EXISTS",
  "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL",
  "INVALID_EMAIL",
  "INVALID_PASSWORD",
  "PASSWORD_TOO_SHORT",
  "PASSWORD_TOO_LONG",
  "VALIDATION_ERROR",
  "TOO_MANY_REQUESTS",
]);
const ALERT_GAP_MIN = 30;
const KEEP_DAYS = 90;
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/;

export const isServerFailure = (status: number, code: string) => status === 429 ? false : status >= 500 || (status >= 400 && !USER_ERRORS.has(code));

export async function recordSignupFailure(input: { email: unknown; name: unknown; code: string; message: string; status: number }) {
  try {
    const email = typeof input.email === "string" ? input.email.trim().toLowerCase().slice(0, 254) : "";
    if (!EMAIL_RE.test(email)) return;
    const name = typeof input.name === "string" ? input.name.trim().slice(0, 120) || null : null;
    const db = await getDb();
    const S = schema.signupFailure;
    const now = new Date();
    const [last] = await db.select({ at: S.alertedAt }).from(S).where(isNotNull(S.alertedAt)).orderBy(desc(S.alertedAt)).limit(1);
    const alert = !last?.at || now.getTime() - last.at.getTime() > ALERT_GAP_MIN * 60_000;
    await db.insert(S).values({
      id: crypto.randomUUID(),
      email,
      name,
      code: input.code.slice(0, 60) || "UNKNOWN",
      message: input.message.slice(0, 300) || null,
      status: input.status,
      createdAt: now,
      alertedAt: alert ? now : null,
    });
    // kept at most 90 days (privacy policy)
    await db.delete(S).where(lt(S.createdAt, new Date(now.getTime() - KEEP_DAYS * 86_400_000)));
    if (alert) await sendAlert(email, input.code, input.message);
  } catch {
    // never affects the sign-up response
  }
}

async function sendAlert(email: string, code: string, message: string) {
  const s = await getSettings();
  const mail = {
    subject: `Sign-up failing: ${code}`,
    from: SENDERS.support,
    text: [
      `A sign-up just failed on the server (${code}${message ? `: ${message}` : ""}).`,
      `Email typed: ${email}`,
      "",
      `If this is an outage, more will follow. You get at most one of these alerts every ${ALERT_GAP_MIN} minutes.`,
      "Everyone affected is listed in Admin > Users > Failed sign-ups, so you can write to them once it is fixed:",
      "https://ingotui.com/admin/users?tab=failed",
    ].join("\n"),
  };
  const r = await sendMail({ ...mail, to: s.support.email });
  if (!r.sent && s.support.contactEmail && s.support.contactEmail !== s.support.email) await sendMail({ ...mail, to: s.support.contactEmail });
}
