import "server-only";
import { getEnv } from "../db";
import { SENDERS, sendMail } from "../mail";
import { getPriceBook, usd } from "../plans";
import { WELCOME_HTML } from "./welcome-html";

const SITE = "https://ingotui.com";
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** HMAC-SHA256(secret, email), hex: the unsubscribe link proves it came from our email without a lookup table. */
export async function optoutToken(email: string) {
  const env = await getEnv();
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode("optout:" + env.BETTER_AUTH_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(email.trim().toLowerCase()));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
}
export async function unsubscribeUrl(email: string) {
  return `${SITE}/unsubscribe?e=${encodeURIComponent(email.trim().toLowerCase())}&t=${await optoutToken(email)}`;
}

/** "Saturday, Nov 21" + " at 17:59 UTC (11:59 PM in Bangladesh)." from the deal's real end (UTC ISO). */
function endText(iso: string) {
  const d = new Date(iso);
  const day = d.toLocaleDateString("en-US", { timeZone: "UTC", weekday: "long", month: "short", day: "numeric" });
  const utc = d.toLocaleTimeString("en-GB", { timeZone: "UTC", hour: "2-digit", minute: "2-digit" });
  const bd = d.toLocaleTimeString("en-US", { timeZone: "Asia/Dhaka", hour: "numeric", minute: "2-digit" });
  return { day, rest: ` at ${utc} UTC (${bd} in Bangladesh).` };
}

/** The welcome email for a new account, with the live launch deal (price and real end date from admin settings). */
export async function welcomeEmail(user: { name?: string | null; email: string }) {
  const pb = await getPriceBook();
  const name = (user.name || "").trim().split(/\s+/)[0] || "there";
  const unsub = await unsubscribeUrl(user.email);
  const deal = pb.dealActive && pb.lifetime !== null;
  const after = usd(pb.settings.prices.lifetimeAfter);
  let html = WELCOME_HTML;
  let preheader = "Your free account is ready. Copy React code, paste Figma layers, or let your AI agent build.";
  let dealText = "";
  if (deal) {
    const price = usd(pb.lifetime!);
    const end = pb.deal.endsAt ? endText(pb.deal.endsAt) : null;
    preheader = `Your free account is ready. Lifetime is ${price} instead of ${after}` + (end ? ` until ${end.day.split(", ")[1]}.` : " while launch seats last.");
    html = html
      .replaceAll("{{price}}", price)
      .replaceAll("{{normal}}", after)
      .replaceAll("{{endsDay}}", end ? "Ends " + end.day : "Launch price")
      .replaceAll("{{endsRest}}", (end ? end.rest : " while launch seats last.") + ` Then Lifetime goes back to ${after}.`);
    dealText = `\nLaunch deal: Lifetime for ${price} instead of ${after}, one payment, every system and every future update.` + (end ? ` Ends ${end.day}${end.rest}` : "") + `\nGet it: ${SITE}/pricing#lifetime-h\n`;
  } else {
    html = html.replace(/<!--DEAL-->[\s\S]*?<!--\/DEAL-->/, "");
  }
  html = html.replaceAll("{{name}}", esc(name)).replaceAll("{{email}}", esc(user.email)).replaceAll("{{unsubscribe}}", unsub).replaceAll("{{preheader}}", esc(preheader));
  const text = `Welcome, ${name}

Your Ingot UI account is ready. Nine dashboard design systems, 2,600+ components: copy the React code, paste real layers into Figma, or let your AI agent build through MCP.

Browse the components: ${SITE}/components
${dealText}
Three ways to start:
1. Copy a component (React code or Copy to Figma): ${SITE}/components
2. Start from one of 15 free dashboard templates: ${SITE}/templates
3. Connect the Ingot MCP to Claude or Cursor: ${SITE}/mcp

Questions? Just reply to this email.

Jubayer
Ingot UI

Unsubscribe from offers: ${unsub}`;
  return { subject: "Welcome to Ingot UI", html, text, unsub };
}

/** Sends the welcome email. Never throws (called from the sign-up hook; a mail problem must not block sign-up). */
export async function sendWelcome(user: { name?: string | null; email: string }) {
  try {
    const m = await welcomeEmail(user);
    return await sendMail({
      to: user.email,
      subject: m.subject,
      text: m.text,
      html: m.html,
      from: SENDERS.sales,
      replyTo: SENDERS.support.email,
      headers: { "List-Unsubscribe": `<${m.unsub}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" },
    });
  } catch (e) {
    return { sent: false, reason: String(e).slice(0, 160) };
  }
}
