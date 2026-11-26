import "server-only";
import { getEnv } from "@/lib/db";
import { readTouch, type Touch } from "./source";

/**
 * Buyers and where they came from. A buyer is a paying purchase: Lemon Squeezy or Contra (paid or partly
 * refunded) or an AppSumo code (granted); staff grants and gifts are not buyers (same rule as lib/paying.ts).
 *
 * Source, best evidence first:
 *   tracked  the account's touch cookies (user.srcLast, else user.src), saved at sign-up and at checkout
 *   ref      the ?ref= link the account signed up through (user.ref)
 *   channel  AppSumo codes; Contra sales paid before the account existed (bought straight on Contra)
 *   unknown  bought before source tracking started (2026-11-26) with no ref link
 */

export type Evidence = "tracked" | "ref" | "channel" | "unknown";
export type Buyer = {
  purchaseId: string;
  userId: string | null;
  email: string;
  provider: string;
  plan: string;
  variant: string | null;
  cents: number;
  currency: string;
  boughtAt: number;
  signedUpAt: number | null;
  first: Touch | null;
  last: Touch | null;
  ref: string | null;
  /** the source this buyer is credited to, for the chosen model */
  source: string;
  firstSource: string;
  lastSource: string;
  evidence: Evidence;
  /** Contra: the sale was paid before the account existed */
  paidBeforeAccount: boolean;
};

export type CheckoutRow = { source: string; option: string; n: number };

const SQL = `
select p.id pid, p.userId uid, p.email email, p.provider provider, p.plan plan, p.variant variant, p.amountCents cents,
  p.currency currency, p.createdAt boughtAt, u.createdAt signedUpAt, u.ref ref, u.src src, u.srcLast srcLast,
  (select min(cs.paidOn) from contra_sale cs where cs.userId = coalesce(p.userId, u.id)) paidOn
from purchase p
left join user u on u.id = p.userId or (p.userId is null and lower(u.email) = lower(p.email))
where ((p.provider in ('lemonsqueezy','contra','creem') and p.status in ('paid','partial_refund')) or (p.provider = 'appsumo' and p.status = 'granted'))
  and p.createdAt >= ?
order by p.createdAt desc
limit 2000`;

const ts = (v: unknown) => (v === null || v === undefined ? null : Number(v) > 1e12 ? Number(v) : Number(v) * 1000);

function channelOf(provider: string, paidBeforeAccount: boolean): string | null {
  if (provider === "appsumo") return "AppSumo";
  if (provider === "contra" && paidBeforeAccount) return "Contra (bought on Contra)";
  if (provider === "creem" && paidBeforeAccount) return "Creem (paid before signing up)";
  return null;
}

/** Buyers of the last `days` days, or all time when null. */
export async function loadBuyers(days: number | null): Promise<{ buyers: Buyer[]; checkouts: CheckoutRow[] }> {
  const sinceMs = days ? Date.now() - days * 86_400_000 : 0;
  const env = await getEnv();
  const sinceDay = new Date(sinceMs).toISOString().slice(0, 10);
  const [a, b] = await env.DB.batch([
    env.DB.prepare(SQL).bind(Math.floor(sinceMs / 1000)),
    env.DB.prepare(`select key, sum(n) n from stat_daily where kind = 'checkout' and day >= ? group by key order by n desc`).bind(sinceDay),
  ]);
  const rows = (a.results ?? []) as Record<string, unknown>[];
  const buyers: Buyer[] = rows.map((r) => {
    const first = readTouch(r.src as string | null);
    const last = readTouch(r.srcLast as string | null);
    const signedUpAt = ts(r.signedUpAt);
    const paidOn = r.paidOn ? Date.parse(String(r.paidOn) + "T23:59:59Z") : null;
    const boughtAt = ts(r.boughtAt);
    // Contra and signed-out Creem buyers can pay before they have an account.
    const paidBeforeAccount =
      String(r.provider) === "contra" ? !signedUpAt || (paidOn !== null && paidOn < signedUpAt) : String(r.provider) === "creem" ? !signedUpAt || (boughtAt !== null && boughtAt < signedUpAt) : false;
    const ref = (r.ref as string | null) || null;
    const channel = channelOf(String(r.provider), paidBeforeAccount);
    const trackedFirst = first?.source ?? last?.source ?? null;
    const trackedLast = last && last.source !== "direct" ? last.source : trackedFirst;
    const evidence: Evidence = trackedFirst ? "tracked" : ref ? "ref" : channel ? "channel" : "unknown";
    const fallback = ref ? `ref: ${ref}` : (channel ?? "Unknown (before tracking)");
    const firstSource = trackedFirst ?? fallback;
    const lastSource = trackedLast ?? fallback;
    return {
      purchaseId: String(r.pid),
      userId: (r.uid as string | null) ?? null,
      email: String(r.email),
      provider: String(r.provider),
      plan: String(r.plan),
      variant: (r.variant as string | null) ?? null,
      cents: Number(r.cents ?? 0),
      currency: String(r.currency ?? "USD"),
      boughtAt: ts(r.boughtAt) ?? 0,
      signedUpAt,
      first,
      last,
      ref,
      source: lastSource,
      firstSource,
      lastSource,
      evidence,
      paidBeforeAccount,
    };
  });
  const checkouts = ((b.results ?? []) as Record<string, unknown>[]).map((r) => {
    const [source, option] = String(r.key).split("\t");
    return { source, option: option ?? "", n: Number(r.n ?? 0) };
  });
  return { buyers, checkouts };
}
