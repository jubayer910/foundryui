import "server-only";
import { getEnv } from "../db";
import { b64u, sameSecret } from "./sync-secret";

/**
 * Claim link token for a Contra sale: base64url(saleId).expirySeconds.base64url(HMAC-SHA256).
 * Key: CONTRA_SYNC_SECRET, else BETTER_AUTH_SECRET, with its own label so it never equals another HMAC.
 * Only the buyer's inbox receives it, so opening it proves they own the payer email.
 */

export const CLAIM_DAYS = 14;
const enc = new TextEncoder();

function unb64u(s: string) {
  const bin = atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

async function sign(payload: string): Promise<string> {
  const env = await getEnv();
  const secret = env.CONTRA_SYNC_SECRET || env.BETTER_AUTH_SECRET;
  if (!secret) throw new Error("No CONTRA_SYNC_SECRET or BETTER_AUTH_SECRET set");
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64u(new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode("contra-claim-v1|" + payload))));
}

export async function claimToken(saleId: string, now = new Date(), days = CLAIM_DAYS): Promise<string> {
  const exp = Math.floor(now.getTime() / 1000) + days * 86_400;
  const head = b64u(enc.encode(saleId)) + "." + exp;
  return head + "." + (await sign(head));
}

export async function verifyClaimToken(token: string, now = new Date()): Promise<{ ok: true; saleId: string } | { ok: false; reason: "bad_link" | "expired" }> {
  const parts = (token ?? "").trim().split(".");
  if (parts.length !== 3 || !/^\d{1,12}$/.test(parts[1])) return { ok: false, reason: "bad_link" };
  const head = parts[0] + "." + parts[1];
  try {
    if (!sameSecret(parts[2], await sign(head))) return { ok: false, reason: "bad_link" };
    if (Number(parts[1]) * 1000 < now.getTime()) return { ok: false, reason: "expired" };
    const saleId = unb64u(parts[0]);
    return saleId ? { ok: true, saleId } : { ok: false, reason: "bad_link" };
  } catch {
    return { ok: false, reason: "bad_link" };
  }
}
