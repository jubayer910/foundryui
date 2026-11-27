import "server-only";
import { getEnv } from "@/lib/db";
import { creemKeys } from "@/lib/creem";

/**
 * Affiliates run on Creem's affiliate program (docs.creem.io/features/affiliate-program):
 * - "Become an affiliate" on Account → Affiliate sends a Creem invitation (POST /v1/affiliates/invites); Creem emails it.
 * - The member accepts at affiliates.creem.io (Google or magic link), where Creem also handles KYC and payouts.
 * - Their link, clicks, sales and earnings come back from GET /v1/affiliates (matched by email; no email filter exists).
 * The terms shown on the page live here; the real rate is set in the Creem Affiliate Hub and must match.
 */
export const AFFILIATE_TERMS = {
  commission: "30%", // keep equal to the Creem Affiliate Hub program rate
  recurring: true, // commission on every renewal, not only the first payment
  cookieDays: 180, // Creem Affiliate Hub attribution window (Program tab)
  portal: "https://affiliates.creem.io",
};

export type AffiliateStats = { status: string; link: string; clicks: number; conversions: number; earningsCents: number; currency: string };
export type AffiliateState =
  | { stage: "off" } // Creem not configured (no API key)
  | { stage: "none" }
  | { stage: "invited"; at: string }
  | { stage: "joined"; stats: AffiliateStats; sample?: boolean };

type Saved = { inviteId: string; at: string };
const KEY = (id: string) => "aff:" + id;

async function creem(path: string, init?: RequestInit) {
  const env = await getEnv();
  const k = creemKeys(env);
  if (!k) return null;
  const r = await fetch(k.base + path, { ...init, headers: { "x-api-key": k.apiKey, "content-type": "application/json", ...(init?.headers ?? {}) } });
  return r;
}

/** Find this member's affiliate record on Creem by email (pages through the list; cached 10 minutes). */
async function findAffiliate(userId: string, email: string): Promise<AffiliateStats | null> {
  const env = await getEnv();
  const cached = await env.KV.get<AffiliateStats>("aff:stats:" + userId, "json").catch(() => null);
  if (cached) return cached;
  for (let page = 1; page <= 20; page++) {
    const r = await creem(`/v1/affiliates?page_number=${page}&page_size=100`);
    if (!r?.ok) return null;
    const d = (await r.json()) as { items?: { email: string; status: string; referral_link: string; clicks: number; conversions: number; earnings: number; currency: string }[]; pagination?: { next_page: number | null } };
    const hit = d.items?.find((a) => a.email.toLowerCase() === email.toLowerCase());
    if (hit) {
      const stats = { status: hit.status, link: hit.referral_link, clicks: hit.clicks, conversions: hit.conversions, earningsCents: hit.earnings, currency: hit.currency || "USD" };
      await env.KV.put("aff:stats:" + userId, JSON.stringify(stats), { expirationTtl: 600 }).catch(() => {});
      return stats;
    }
    if (!d.pagination?.next_page) break;
  }
  return null;
}

/** Where this member stands. On localhost without a Creem key it shows sample numbers so the page can be reviewed. */
export async function affiliateState(user: { id: string; email: string }): Promise<AffiliateState> {
  const env = await getEnv();
  if (!creemKeys(env)) {
    if (process.env.NODE_ENV !== "production")
      return { stage: "joined", sample: true, stats: { status: "active", link: "https://creem.io/affiliate?code=sample01", clicks: 184, conversions: 6, earningsCents: 8820, currency: "USD" } };
    return { stage: "off" };
  }
  const stats = await findAffiliate(user.id, user.email).catch(() => null);
  if (stats) return { stage: "joined", stats };
  const saved = await env.KV.get<Saved>(KEY(user.id), "json").catch(() => null);
  return saved ? { stage: "invited", at: saved.at } : { stage: "none" };
}

/** Send the Creem invitation. A second click on an already invited email is treated as success. */
export async function joinAffiliates(user: { id: string; email: string; name: string }): Promise<{ ok: true } | { ok: false; message: string }> {
  const r = await creem("/v1/affiliates/invites", { method: "POST", body: JSON.stringify({ email: user.email, name: user.name || user.email.split("@")[0] }) });
  if (!r) return { ok: false, message: "The affiliate program is not open yet." };
  if (!r.ok && r.status !== 409) {
    // Creem says why in the body (e.g. the email belongs to a store team member, or 100 invites are pending)
    const body = await r.text().catch(() => "");
    console.error("creem affiliate invite failed", r.status, body.slice(0, 300));
    const said = (() => { try { const j = JSON.parse(body) as { message?: string | string[]; error?: string }; return [j.message, j.error].flat().filter(Boolean).join(" "); } catch { return body; } })().toLowerCase();
    const why =
      /team|member|owner/.test(said)
        ? "This email belongs to the Ingot UI team on Creem, and Creem does not let a store’s own team be its affiliates. Use a different account."
        : r.status === 400
          ? "We could not invite this email. Write to support@ingotui.com and we will add you."
          : "Creem did not answer. Please try again in a minute.";
    return { ok: false, message: why };
  }
  const d = r.ok ? ((await r.json()) as { id?: string }) : {};
  const env = await getEnv();
  await env.KV.put(KEY(user.id), JSON.stringify({ inviteId: d.id ?? "", at: new Date().toISOString() } satisfies Saved));
  return { ok: true };
}
