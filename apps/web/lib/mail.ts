import "server-only";
import { getEnv } from "./db";

export type Sender = { email: string; name: string };
/** `from` picks the sender address (all on ingotui.com, verified in Resend). Default: noreply. */
export type Mail = { to: string; subject: string; text: string; replyTo?: string; from?: Sender };
export type MailResult = { sent: boolean; reason?: string };

export const MAIL_FROM = "noreply@ingotui.com";
const FROM_NAME = "Ingot UI";

/** Who each kind of email comes from. Purchases and activations: Jubayer. Support: the support inbox. */
export const SENDERS = {
  sales: { email: "jubayer@ingotui.com", name: "Jubayer from Ingot UI" },
  support: { email: "support@ingotui.com", name: "Ingot UI Support" },
} satisfies Record<string, Sender>;

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/;
/** Mails "sent" while MAIL_DRY_RUN=1, newest last (in memory; tests count them). Never printed. */
export const dryRunLog: { to: string; subject: string }[] = [];
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

/** Resend's HTTP API (https://resend.com/docs/api-reference/emails/send-email). Used whenever RESEND_API_KEY is set. */
async function sendViaResend(apiKey: string, mail: Mail): Promise<MailResult> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: `${oneLine(mail.from?.name ?? FROM_NAME)} <${mail.from?.email ?? MAIL_FROM}>`,
      to: [oneLine(mail.to)],
      subject: oneLine(mail.subject),
      text: mail.text,
      ...(mail.replyTo ? { reply_to: oneLine(mail.replyTo) } : {}),
    }),
  });
  if (res.ok) return { sent: true };
  const detail = await res.text().catch(() => "");
  return { sent: false, reason: `resend ${res.status}: ${detail.slice(0, 200)}` };
}

/**
 * Send a plain-text email. Resend first (RESEND_API_KEY, from noreply@ingotui.com, any recipient), else the
 * Cloudflare Email Routing `send_email` binding (SUPPORT_MAIL), which only reaches verified addresses of the
 * account. Never throws: returns { sent: false, reason } so callers can fall back (ticket stays in admin,
 * mailto link, the /activate page shows the result).
 */
export async function sendMail(mail: Mail): Promise<MailResult> {
  try {
    if (!mail || !EMAIL_RE.test(oneLine(mail.to ?? ""))) return { sent: false, reason: "invalid recipient" };
    if (mail.replyTo && !EMAIL_RE.test(oneLine(mail.replyTo))) mail = { ...mail, replyTo: undefined };
    const env = await getEnv().catch(() => null);
    // MAIL_DRY_RUN=1 (local tests, .dev.vars): send nothing, report success so flows behave as in production.
    if ((env?.MAIL_DRY_RUN || process.env.MAIL_DRY_RUN) === "1") {
      dryRunLog.push({ to: oneLine(mail.to), subject: oneLine(mail.subject) });
      if (dryRunLog.length > 200) dryRunLog.shift();
      return { sent: true, reason: "dry run" };
    }
    const resendKey = env?.RESEND_API_KEY || process.env.RESEND_API_KEY;
    if (resendKey) return await sendViaResend(resendKey, mail);
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
