import "server-only";
import { getEnv } from "../db";
import { b64u } from "./sync-secret";

/**
 * Secrets at rest for the Contra connection: AES-GCM with a key derived (HKDF-SHA256) from CONTRA_TOKEN_KEY,
 * or BETTER_AUTH_SECRET when that is not set. Rotating the secret only means reconnecting Contra.
 * Format: "v1." + base64url(12-byte IV + ciphertext).
 */

const enc = new TextEncoder();
const dec = new TextDecoder();

function unb64u(s: string) {
  const bin = atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function tokenKey(): Promise<CryptoKey> {
  const env = await getEnv();
  const secret = env.CONTRA_TOKEN_KEY || env.BETTER_AUTH_SECRET;
  if (!secret) throw new Error("No CONTRA_TOKEN_KEY or BETTER_AUTH_SECRET set");
  const base = await crypto.subtle.importKey("raw", enc.encode(secret), "HKDF", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "HKDF", hash: "SHA-256", salt: enc.encode("ingotui-contra"), info: enc.encode("contra-token-v1") },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function seal(plain: string): Promise<string> {
  const key = await tokenKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(plain)));
  const out = new Uint8Array(iv.length + ct.length);
  out.set(iv);
  out.set(ct, iv.length);
  return "v1." + b64u(out);
}

/** Null when the value is missing or was sealed with another secret. */
export async function unseal(sealed: string | null | undefined): Promise<string | null> {
  if (!sealed || !sealed.startsWith("v1.")) return null;
  try {
    const raw = unb64u(sealed.slice(3));
    const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: raw.subarray(0, 12) }, await tokenKey(), raw.subarray(12));
    return dec.decode(pt);
  } catch {
    return null;
  }
}

/** Random base64url string (PKCE verifier, OAuth state). */
export function randomToken(bytes = 32) {
  return b64u(crypto.getRandomValues(new Uint8Array(bytes)));
}

export async function sha256b64u(s: string) {
  return b64u(new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(s))));
}
