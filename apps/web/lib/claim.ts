import "server-only";
import { verifyClaimToken } from "./contra/claim-token";
import { checkClaim, claimSale } from "./contra/sync";
import { claimCreemSale, creemClaimView, isCreemClaim } from "./creem";

/**
 * One claim link for every provider (/claim?t=…, the "purchase confirmed" email). The token signs a sale id:
 * a Contra sale (contra_sale.id) or a Creem purchase ("creem_…", purchase.id). Opening it proves the buyer owns
 * the inbox the sale was paid with, so the sale goes to the signed-in account with that email.
 */

export type ClaimView = { ok: true; provider: "contra" | "creem"; payerEmail: string; variantKey: string } | { ok: false; reason: "bad_link" | "expired" | "gone"; message: string };

export async function checkAnyClaim(token: string, now = new Date()): Promise<ClaimView> {
  const v = await verifyClaimToken(token, now);
  if (!v.ok) return { ok: false, reason: v.reason, message: v.reason === "expired" ? "This link has expired." : "This link is not valid." };
  if (isCreemClaim(v.saleId)) {
    const p = await creemClaimView(v.saleId);
    return p ? { ok: true, provider: "creem", payerEmail: p.payerEmail, variantKey: p.variantKey } : { ok: false, reason: "gone", message: "We could not find this purchase." };
  }
  const c = await checkClaim(token, now);
  return c.ok ? { ok: true, provider: "contra", payerEmail: c.sale.payerEmail ?? "", variantKey: c.sale.variantKey } : c;
}

export type AnyClaimResult = { ok: true; already: boolean } | { ok: false; reason: string; payerEmail?: string | null; message: string };

export async function claimAny(token: string, user: { id: string; email: string }, now = new Date()): Promise<AnyClaimResult> {
  const v = await verifyClaimToken(token, now);
  if (!v.ok) return { ok: false, reason: v.reason, message: v.reason === "expired" ? "This link has expired." : "This link is not valid." };
  return isCreemClaim(v.saleId) ? claimCreemSale(v.saleId, user, now) : claimSale(token, user, now);
}

/** A buyer signed up or signed in: attach every provider's unlinked sales for this email (proven accounts only). Never throws. */
export async function matchPaidSales(email: string): Promise<void> {
  try {
    const { matchForEmail } = await import("./contra/sync");
    await matchForEmail(email);
  } catch {}
  try {
    const { attachForEmail } = await import("./creem");
    await attachForEmail(email);
  } catch {}
}
