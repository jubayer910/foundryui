import "server-only";
import { eq } from "drizzle-orm";
import { getDb, getEnv, schema } from "../db";
import { randomToken, seal, sha256b64u, unseal } from "./crypto";

/**
 * OAuth 2.1 (PKCE, dynamic client registration) against Contra's MCP authorization server.
 * Discovery (checked 2026-11-20): https://contra.com/.well-known/oauth-authorization-server and
 * https://contra.com/.well-known/oauth-protected-resource/mcp (resource https://contra.com/mcp, scope mcp:tools).
 *
 * The client is registered once per redirect URI (`${origin}/api/admin/contra/callback`, so localhost and
 * ingotui.com each get their own) and cached in KV; the connection row keeps the client it was made with.
 * Tokens never leave the server and are stored sealed (lib/contra/crypto.ts).
 */

export const CONTRA = {
  resource: "https://contra.com/mcp",
  register: "https://contra.com/api/mcp/oauth/register",
  authorize: "https://contra.com/api/mcp/oauth/authorize",
  token: "https://contra.com/api/mcp/oauth/token",
  scope: "mcp:tools",
} as const;

export const CALLBACK_PATH = "/api/admin/contra/callback";
const ROW_ID = "default";
const STATE_TTL = 600;
const CLIENT_TTL = 90 * 86_400;

export type Connection = typeof schema.contraConnection.$inferSelect;
type Client = { clientId: string; clientSecret: string | null };
type PendingAuth = { verifier: string; redirectUri: string; clientId: string; clientSecret: string | null; actor: string };
type TokenResponse = { access_token?: string; refresh_token?: string; expires_in?: number; error?: string; error_description?: string };

export async function getConnection(): Promise<Connection | null> {
  try {
    const db = await getDb();
    const [row] = await db.select().from(schema.contraConnection).where(eq(schema.contraConnection.id, ROW_ID)).limit(1);
    return row ?? null;
  } catch {
    return null; // table missing until migration 0011 is applied
  }
}

/** True when a token is stored (it may still need a refresh). */
export const isConnected = (c: Connection | null): c is Connection => !!c?.accessToken;

export async function setConnectionStatus(patch: Partial<Pick<Connection, "lastSyncAt" | "lastError" | "linkMap">>) {
  const db = await getDb();
  await db.update(schema.contraConnection).set(patch).where(eq(schema.contraConnection.id, ROW_ID));
}

async function registerClient(redirectUri: string): Promise<Client> {
  const res = await fetch(CONTRA.register, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      client_name: "Ingot UI sales sync",
      redirect_uris: [redirectUri],
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
      scope: CONTRA.scope,
    }),
  });
  const j = (await res.json().catch(() => ({}))) as { client_id?: string; client_secret?: string; error?: string };
  if (!res.ok || !j.client_id) throw new Error(`Contra client registration failed (${res.status}${j.error ? " " + j.error : ""})`);
  return { clientId: j.client_id, clientSecret: j.client_secret ?? null };
}

/** The client for this redirect URI: the connected one, a cached registration, or a new registration. */
async function clientFor(redirectUri: string): Promise<Client> {
  const row = await getConnection();
  if (row && row.redirectUri === redirectUri) return { clientId: row.clientId, clientSecret: await unseal(row.clientSecret) };
  const env = await getEnv();
  const key = "contra:client:" + redirectUri;
  const cached = (await env.KV.get(key, "json").catch(() => null)) as { clientId: string; clientSecret: string | null } | null;
  if (cached?.clientId) return { clientId: cached.clientId, clientSecret: await unseal(cached.clientSecret) };
  const c = await registerClient(redirectUri);
  await env.KV.put(key, JSON.stringify({ clientId: c.clientId, clientSecret: c.clientSecret ? await seal(c.clientSecret) : null }), { expirationTtl: CLIENT_TTL });
  return c;
}

/** Step 1 (staff only, checked by the caller): the Contra consent URL. State and PKCE verifier wait in KV for 10 minutes. */
export async function startConnect(origin: string, actor: string): Promise<string> {
  const redirectUri = origin.replace(/\/+$/, "") + CALLBACK_PATH;
  const client = await clientFor(redirectUri);
  const state = randomToken(24);
  const verifier = randomToken(48);
  const pending: PendingAuth = { verifier, redirectUri, clientId: client.clientId, clientSecret: client.clientSecret ? await seal(client.clientSecret) : null, actor };
  const env = await getEnv();
  await env.KV.put("contra:oauth:" + state, JSON.stringify(pending), { expirationTtl: STATE_TTL });
  const u = new URL(CONTRA.authorize);
  u.search = new URLSearchParams({
    response_type: "code",
    client_id: client.clientId,
    redirect_uri: redirectUri,
    scope: CONTRA.scope,
    state,
    code_challenge: await sha256b64u(verifier),
    code_challenge_method: "S256",
    resource: CONTRA.resource,
  }).toString();
  return u.toString();
}

async function tokenRequest(params: Record<string, string>): Promise<TokenResponse & { status: number }> {
  const res = await fetch(CONTRA.token, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded", accept: "application/json" },
    body: new URLSearchParams(params).toString(),
  });
  const j = (await res.json().catch(() => ({}))) as TokenResponse;
  return { ...j, status: res.status };
}

const expiry = (t: TokenResponse, now: number) => (t.expires_in ? new Date(now + t.expires_in * 1000) : null);

/** Step 2: the callback. Exchanges the code and stores the connection. Returns an error message or null. */
export async function finishConnect(state: string, code: string, actor: string): Promise<string | null> {
  const env = await getEnv();
  const key = "contra:oauth:" + state;
  const pending = (await env.KV.get(key, "json").catch(() => null)) as PendingAuth | null;
  if (!pending) return "This Contra sign-in expired. Start again.";
  await env.KV.delete(key);
  if (pending.actor.toLowerCase() !== actor.toLowerCase()) return "Finish the Contra sign-in with the same admin account that started it.";
  const clientSecret = await unseal(pending.clientSecret);
  const now = Date.now();
  const t = await tokenRequest({
    grant_type: "authorization_code",
    code,
    redirect_uri: pending.redirectUri,
    client_id: pending.clientId,
    code_verifier: pending.verifier,
    resource: CONTRA.resource,
    ...(clientSecret ? { client_secret: clientSecret } : {}),
  });
  if (!t.access_token) return `Contra did not return a token (${t.status}${t.error ? " " + t.error : ""}).`;
  const row: Connection = {
    id: ROW_ID,
    clientId: pending.clientId,
    clientSecret: pending.clientSecret,
    redirectUri: pending.redirectUri,
    accessToken: await seal(t.access_token),
    refreshToken: t.refresh_token ? await seal(t.refresh_token) : null,
    expiresAt: expiry(t, now),
    connectedBy: actor,
    connectedAt: new Date(now),
    lastSyncAt: null,
    lastError: null,
    linkMap: null,
  };
  const db = await getDb();
  const { id: _id, ...set } = row;
  void _id;
  await db.insert(schema.contraConnection).values(row).onConflictDoUpdate({ target: schema.contraConnection.id, set });
  return null;
}

/** Uses the refresh token; stores the new tokens. Throws when Contra refuses (the owner must reconnect). */
async function refresh(row: Connection): Promise<string> {
  const refreshToken = await unseal(row.refreshToken);
  if (!refreshToken) throw new Error("Contra session ended. Reconnect Contra in /admin/contra.");
  const clientSecret = await unseal(row.clientSecret);
  const now = Date.now();
  const t = await tokenRequest({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: row.clientId,
    resource: CONTRA.resource,
    ...(clientSecret ? { client_secret: clientSecret } : {}),
  });
  if (!t.access_token) throw new Error(`Contra refused the refresh (${t.status}${t.error ? " " + t.error : ""}). Reconnect Contra in /admin/contra.`);
  const db = await getDb();
  await db
    .update(schema.contraConnection)
    .set({ accessToken: await seal(t.access_token), refreshToken: t.refresh_token ? await seal(t.refresh_token) : row.refreshToken, expiresAt: expiry(t, now) })
    .where(eq(schema.contraConnection.id, ROW_ID));
  return t.access_token;
}

/** A usable access token, refreshed when it expires within a minute (or when `force`, after a 401). Null when not connected. */
export async function accessToken(force = false): Promise<string | null> {
  const row = await getConnection();
  if (!row || !row.accessToken) return null;
  const soon = row.expiresAt && row.expiresAt.getTime() - Date.now() < 60_000;
  if (force || soon) return refresh(row);
  return unseal(row.accessToken);
}
