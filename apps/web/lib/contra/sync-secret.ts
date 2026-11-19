/**
 * Shared secret between the cron (worker.ts `scheduled`) and POST /api/internal/contra-sync.
 * No "server-only" import: worker.ts imports this file outside Next.
 */

const enc = new TextEncoder();

export function b64u(bytes: Uint8Array) {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export const SYNC_HEADER = "x-contra-sync-secret";
export const SYNC_PATH = "/api/internal/contra-sync";

/** CONTRA_SYNC_SECRET when set, else HMAC-SHA256(BETTER_AUTH_SECRET, "contra-sync-v1"), so no extra secret is required. */
export async function syncSecret(env: { CONTRA_SYNC_SECRET?: string; BETTER_AUTH_SECRET?: string }): Promise<string | null> {
  if (env.CONTRA_SYNC_SECRET) return env.CONTRA_SYNC_SECRET;
  if (!env.BETTER_AUTH_SECRET) return null;
  const key = await crypto.subtle.importKey("raw", enc.encode(env.BETTER_AUTH_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64u(new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode("contra-sync-v1"))));
}

/** Constant-time string compare. */
export function sameSecret(a: string, b: string) {
  const x = enc.encode(a);
  const y = enc.encode(b);
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return d === 0;
}
