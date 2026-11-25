import "server-only";
import { SENDERS, sendMail } from "../mail";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** The "reset your password" email (better-auth sendResetPassword). The link works once, for one hour. */
export async function sendResetPasswordEmail(user: { email: string; name?: string | null }, url: string) {
  const name = (user.name || "").trim().split(/\s+/)[0] || "there";
  const lines = [
    `Hi ${name}, someone asked to reset the password for your Ingot UI account (${user.email}).`,
    "Open the link to choose a new password. It works once and expires in one hour.",
    "Didn't ask for this? Ignore this email. Your password stays the same.",
  ];
  const html = `<!doctype html><html><body style="margin:0;background:#f6f6f5;font-family:Inter,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:14px;border:1px solid #ececea">
<tr><td style="padding:32px 28px">
<p style="margin:0 0 20px;font-size:15px;font-weight:600;color:#111">Ingot UI</p>
<h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;font-weight:600;color:#111">Reset your password</h1>
${lines.map((l) => `<p style="margin:0 0 14px;font-size:15px;line-height:1.55;color:#3a3a3a">${esc(l)}</p>`).join("")}
<a href="${esc(url)}" style="display:inline-block;margin-top:6px;background:#111;color:#fff;text-decoration:none;font-size:15px;font-weight:500;padding:12px 22px;border-radius:999px">Choose a new password</a>
<p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:#8a8a8a">Ingot UI Support</p>
</td></tr></table></td></tr></table></body></html>`;
  return sendMail({
    to: user.email,
    from: SENDERS.support,
    subject: "Reset your Ingot UI password",
    text: `Reset your password\n\n${lines.join("\n\n")}\n\nChoose a new password: ${url}\n\nIngot UI Support`,
    html,
  });
}
