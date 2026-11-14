import "server-only";

export type Mail = { to: string; subject: string; text: string; replyTo?: string };
export type MailResult = { sent: boolean; reason?: string };

/**
 * Send a plain-text email through the Cloudflare Email Routing `send_email` binding (SUPPORT_MAIL).
 * Contract shared by support (W2) and admin (W3). Never throws: returns { sent: false, reason } when
 * the binding is missing or sending fails, so callers can fall back (ticket stays in admin, mailto link).
 * STUB: W2 implements the real sender.
 */
export async function sendMail(_mail: Mail): Promise<MailResult> {
  return { sent: false, reason: "mail not configured" };
}
