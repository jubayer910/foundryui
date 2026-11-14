import "server-only";
import { getEnv } from "./db";

export type Mail = { to: string; subject: string; text: string; replyTo?: string };
export type MailResult = { sent: boolean; reason?: string };

export const MAIL_FROM = "noreply@ingotui.com";
const FROM_NAME = "Ingot UI";

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/;
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

/** RFC 2047 encoded-word for non-ASCII header text. */
function encodeHeader(s: string) {
  const v = oneLine(s);
  return /^[\x20-\x7e]*$/.test(v) ? v : "=?UTF-8?B?" + b64(v) + "?=";
}

function b64(s: string) {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

/** Minimal RFC 5322 text/plain message. Body is base64 so any UTF-8 text survives intact. */
export function buildMime(mail: Mail, from = MAIL_FROM): string {
  const body = b64(mail.text.replace(/\r?\n/g, "\r\n")).replace(/.{1,76}/g, "$&\r\n");
  const headers = [
    `From: ${encodeHeader(FROM_NAME)} <${from}>`,
    `To: <${oneLine(mail.to)}>`,
    ...(mail.replyTo ? [`Reply-To: <${oneLine(mail.replyTo)}>`] : []),
    `Subject: ${encodeHeader(mail.subject)}`,
    `Date: ${new Date().toUTCString().replace("GMT", "+0000")}`,
    `Message-ID: <${crypto.randomUUID()}@ingotui.com>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
  ];
  return headers.join("\r\n") + "\r\n\r\n" + body;
}

type EmailMessageCtor = new (from: string, to: string, raw: string) => unknown;

/**
 * `cloudflare:email` only exists inside workerd. The specifier is built at runtime and marked
 * ignore so neither Turbopack (next dev / next build) nor the OpenNext esbuild pass tries to
 * resolve it; in `next dev` (Node) the import fails and we report "mail not configured".
 */
async function loadEmailMessage(): Promise<EmailMessageCtor | null> {
  try {
    const spec = ["cloudflare", "email"].join(":");
    const mod = (await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ spec)) as { EmailMessage?: EmailMessageCtor };
    return mod.EmailMessage ?? null;
  } catch {
    return null;
  }
}

/**
 * Send a plain-text email through the Cloudflare Email Routing `send_email` binding (SUPPORT_MAIL).
 * Contract shared by support (W2) and admin (W3). Never throws: returns { sent: false, reason } when
 * the binding is missing or sending fails, so callers can fall back (ticket stays in admin, mailto link).
 * Note: Email Routing only delivers to verified destination addresses of the account.
 */
export async function sendMail(mail: Mail): Promise<MailResult> {
  try {
    if (!mail || !EMAIL_RE.test(oneLine(mail.to ?? ""))) return { sent: false, reason: "invalid recipient" };
    if (mail.replyTo && !EMAIL_RE.test(oneLine(mail.replyTo))) mail = { ...mail, replyTo: undefined };
    const env = await getEnv().catch(() => null);
    const binding = env?.SUPPORT_MAIL;
    if (!binding || typeof binding.send !== "function") return { sent: false, reason: "mail not configured" };
    const EmailMessage = await loadEmailMessage();
    if (!EmailMessage) return { sent: false, reason: "cloudflare:email unavailable in this runtime" };
    const msg = new EmailMessage(MAIL_FROM, oneLine(mail.to), buildMime(mail));
    await binding.send(msg);
    return { sent: true };
  } catch (e) {
    return { sent: false, reason: "send failed: " + (e instanceof Error ? e.message : String(e)).slice(0, 200) };
  }
}
