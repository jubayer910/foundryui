import "server-only";
import { and, eq, sql } from "drizzle-orm";
import { getDb, getEnv, schema } from "./db";
import { SENDERS, sendMail } from "./mail";
import { syncPlan } from "@/components/admin/plan";

/**
 * Gifted Lifetime. Staff give Lifetime to anyone by email from /admin/users:
 *   - the email already has an account: Lifetime switches on now, and they get a "you have Lifetime" email;
 *   - no account yet: they get an invite link (/gift/<token>); signing up or in from it claims the gift.
 * Claiming writes a purchase row (provider "gift", status "granted", $0) so user.plan follows the rows like any
 * other plan, and revoking works the same way. Provider "gift" is never a sale: revenue, buyers, "Paying customers"
 * and the launch-deal spots all leave it out. Only sha256(token) is stored.
 */

const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/;
export const cleanEmail = (s: string) => s.trim().toLowerCase().slice(0, 200);
export const isEmail = (s: string) => EMAIL_RE.test(s);

async function sha256(s: string) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function newToken() {
  const b = crypto.getRandomValues(new Uint8Array(24));
  return btoa(String.fromCharCode(...b)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Site origin for links: the live domain in production, the local server in dev. */
async function origin() {
  const env = await getEnv();
  return (env.BETTER_AUTH_URL || "https://ingotui.com").replace(/\/$/, "");
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function mailHtml(title: string, lines: string[], cta: { href: string; label: string }) {
  const p = lines.map((l) => `<p style="margin:0 0 14px;font-size:15px;line-height:1.55;color:#3a3a3a">${l}</p>`).join("");
  return `<!doctype html><html><body style="margin:0;background:#f6f6f5;font-family:Inter,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:14px;border:1px solid #ececea">
<tr><td style="padding:32px 28px">
<p style="margin:0 0 20px;font-size:15px;font-weight:600;color:#111">Ingot UI</p>
<h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;font-weight:600;color:#111">${title}</h1>
${p}
<a href="${cta.href}" style="display:inline-block;margin-top:6px;background:#111;color:#fff;text-decoration:none;font-size:15px;font-weight:500;padding:12px 22px;border-radius:999px">${cta.label}</a>
<p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:#8a8a8a">Jubayer, Ingot UI</p>
</td></tr></table></td></tr></table></body></html>`;
}

async function sendInvite(email: string, token: string) {
  const link = `${await origin()}/gift/${token}`;
  const lines = [
    "You have been given Lifetime access to Ingot UI, free. Nine dashboard design systems, 2,600+ components, React code checked against Figma, real Figma layers and the MCP server for AI agents, with every future update.",
    "Open the link, create a free account (or sign in) and Lifetime switches on.",
  ];
  return sendMail({
    to: email,
    from: SENDERS.sales,
    subject: "You have Lifetime access to Ingot UI",
    text: `You have Lifetime access to Ingot UI\n\n${lines.join("\n\n")}\n\nClaim it: ${link}\n\nThe link is only for you. Jubayer, Ingot UI`,
    html: mailHtml("You have Lifetime access to Ingot UI", lines.map(esc), { href: link, label: "Claim Lifetime" }),
  });
}

async function sendActivated(email: string) {
  const link = `${await origin()}/components`;
  const lines = [
    "Your Ingot UI account now has Lifetime access, a gift from us. Every system, every component and every future update is open on this account.",
    "Sign in with this email and start copying.",
  ];
  return sendMail({
    to: email,
    from: SENDERS.sales,
    subject: "Lifetime is on for your Ingot UI account",
    text: `Lifetime is on for your Ingot UI account\n\n${lines.join("\n\n")}\n\nBrowse the components: ${link}\n\nJubayer, Ingot UI`,
    html: mailHtml("Lifetime is on for your Ingot UI account", lines.map(esc), { href: link, label: "Browse components" }),
  });
}

/** Writes the $0 "gift" purchase row for an account and switches its plan on. */
async function grant(userId: string, email: string, giftId: string, note: string | null, now: Date) {
  const db = await getDb();
  const purchaseId = crypto.randomUUID();
  await db.insert(schema.purchase).values({
    id: purchaseId,
    provider: "gift",
    providerOrderId: "gift_" + giftId,
    userId,
    email,
    plan: "lifetime",
    variant: "gift",
    amountCents: 0,
    currency: "USD",
    status: "granted",
    note: note ? `Gift: ${note}` : "Gift",
    createdAt: now,
    updatedAt: now,
  });
  await syncPlan(userId, now);
  return purchaseId;
}

export type GiftResult = { ok: true; message: string } | { ok: false; message: string };

/** From admin: give Lifetime to an email. Signed-up emails get it now; others get an invite link. */
export async function giveLifetime(rawEmail: string, note: string, by: string, now = new Date()): Promise<GiftResult> {
  const email = cleanEmail(rawEmail);
  if (!isEmail(email)) return { ok: false, message: "Enter a valid email address." };
  const db = await getDb();
  const G = schema.gift;
  const [u] = await db.select({ id: schema.user.id, plan: schema.user.plan }).from(schema.user).where(sql`lower(${schema.user.email}) = ${email}`).limit(1);
  if (u?.plan === "lifetime") return { ok: false, message: `${email} already has Lifetime.` };
  const [open] = await db.select({ id: G.id }).from(G).where(and(eq(G.email, email), eq(G.status, "pending"))).limit(1);
  if (open && !u) return { ok: false, message: `${email} already has an invite waiting. Use Resend in the Gifts list.` };

  const id = open?.id ?? crypto.randomUUID();
  const token = newToken();
  const tokenHash = await sha256(token);
  if (!open) await db.insert(G).values({ id, tokenHash, email, plan: "lifetime", note: note || null, invitedBy: by, status: "pending", createdAt: now });

  if (u) {
    const purchaseId = await grant(u.id, email, id, note || null, now);
    await db.update(G).set({ status: "claimed", userId: u.id, purchaseId, claimedAt: now, sentAt: now }).where(eq(G.id, id));
    const sent = await sendActivated(email);
    return { ok: true, message: `Lifetime is on for ${email}, their account already existed.` + (sent.sent ? " We emailed them." : " The email did not go out, tell them yourself.") };
  }
  const sent = await sendInvite(email, token);
  if (sent.sent) await db.update(G).set({ sentAt: now }).where(eq(G.id, id));
  return sent.sent
    ? { ok: true, message: `Invite sent to ${email}. Lifetime switches on when they claim it.` }
    : { ok: true, message: `Invite saved for ${email}, but the email did not go out (${sent.reason ?? "mail error"}). Try Resend.` };
}

/** New link, same gift: the old link stops working. */
export async function resendGift(id: string, now = new Date()): Promise<GiftResult> {
  const db = await getDb();
  const G = schema.gift;
  const [g] = await db.select().from(G).where(eq(G.id, id)).limit(1);
  if (!g || g.status !== "pending") return { ok: false, message: "Only a waiting invite can be resent." };
  const token = newToken();
  await db.update(G).set({ tokenHash: await sha256(token) }).where(eq(G.id, id));
  const sent = await sendInvite(g.email, token);
  if (!sent.sent) return { ok: false, message: `The email did not go out (${sent.reason ?? "mail error"}).` };
  await db.update(G).set({ sentAt: now }).where(eq(G.id, id));
  return { ok: true, message: `Sent a new invite to ${g.email}. The old link no longer works.` };
}

/** Cancel a waiting invite, or take Lifetime back from a claimed gift. */
export async function revokeGift(id: string, now = new Date()): Promise<GiftResult> {
  const db = await getDb();
  const G = schema.gift;
  const [g] = await db.select().from(G).where(eq(G.id, id)).limit(1);
  if (!g || g.status === "revoked") return { ok: false, message: "That gift is already cancelled." };
  await db.update(G).set({ status: "revoked", revokedAt: now }).where(eq(G.id, id));
  if (g.status === "claimed" && g.purchaseId) {
    await db.update(schema.purchase).set({ status: "revoked", updatedAt: now }).where(eq(schema.purchase.id, g.purchaseId));
    if (g.userId) {
      const plan = await syncPlan(g.userId, now);
      return { ok: true, message: `Lifetime taken back from ${g.email}. Their plan is now ${plan}.` };
    }
  }
  return { ok: true, message: `Invite for ${g.email} cancelled. The link no longer works.` };
}

export type GiftLookup = { state: "ok"; email: string } | { state: "claimed"; mine: boolean } | { state: "invalid" };

export async function lookupGift(token: string, userId?: string): Promise<GiftLookup> {
  if (!token || token.length > 100) return { state: "invalid" };
  const db = await getDb();
  const [g] = await db.select().from(schema.gift).where(eq(schema.gift.tokenHash, await sha256(token))).limit(1);
  if (!g || g.status === "revoked") return { state: "invalid" };
  if (g.status === "claimed") return { state: "claimed", mine: !!userId && g.userId === userId };
  return { state: "ok", email: g.email };
}

/** The invite link, signed in: Lifetime goes on the signed-in account (whoever holds the link). */
export async function claimGift(user: { id: string; email: string; plan: string }, token: string, now = new Date()): Promise<GiftResult> {
  const db = await getDb();
  const G = schema.gift;
  const hash = await sha256(token);
  const [g] = await db.select().from(G).where(eq(G.tokenHash, hash)).limit(1);
  if (!g || g.status === "revoked") return { ok: false, message: "This invite link is no longer valid." };
  if (g.status === "claimed") return g.userId === user.id ? { ok: true, message: "Lifetime is already on." } : { ok: false, message: "This invite has already been claimed." };
  if (user.plan === "lifetime") return { ok: false, message: "This account already has Lifetime. Sign in with another account to claim the gift." };
  // claim first, only while still pending: two tabs cannot both win
  const won = await db.update(G).set({ status: "claimed", userId: user.id, claimedAt: now }).where(and(eq(G.id, g.id), eq(G.status, "pending"))).returning({ id: G.id });
  if (!won.length) return { ok: false, message: "This invite was just claimed. Refresh the page." };
  try {
    const purchaseId = await grant(user.id, user.email.toLowerCase(), g.id, g.note, now);
    await db.update(G).set({ purchaseId }).where(eq(G.id, g.id));
  } catch {
    await db.update(G).set({ status: "pending", userId: null, claimedAt: null }).where(eq(G.id, g.id));
    return { ok: false, message: "Something went wrong on our side. Try again in a minute." };
  }
  return { ok: true, message: "Lifetime is on." };
}
