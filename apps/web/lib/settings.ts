import "server-only";
import { getDb, getEnv, schema } from "./db";

/** Every admin-controlled value, with the launch defaults (owner decisions 2026-11-15). */
export type Settings = {
  prices: {
    proMonthly: number; // USD per month; 0 = no monthly plan (yearly only)
    proYearly: number; // USD per year
    lifetimeDeal: number; // USD once, while deal spots last
    lifetimeAfter: number; // USD once, after the deal (used when deal.after = "price")
    teamMonthly: number; // USD per month, Team (5 seats); 0 = no monthly plan
    teamYearly: number; // USD per year, Team (5 seats)
  };
  /** Lemon Squeezy variant IDs, one per paid option. Empty = that option shows the waitlist. */
  variants: { proMonthly: string; proYearly: string; lifetimeDeal: string; lifetimeAfter: string; teamMonthly: string; teamYearly: string };
  /** External checkout page per option (e.g. a Contra product link), used when Lemon Squeezy checkout is not set up. Empty = waitlist. */
  externalCheckout: { proMonthly: string; proYearly: string; lifetimeDeal: string; lifetimeAfter: string; teamMonthly: string; teamYearly: string };
  deal: {
    enabled: boolean;
    spotsTotal: number; // "first N buyers"
    /** when spots run out: switch Lifetime to lifetimeAfter price, or close Lifetime */
    after: "price" | "closed";
    /** Real end of the deal as a UTC ISO string; "" = no end date (ends only when spots run out). */
    endsAt: string;
    /** Show "N of TOTAL spots left" on the bar and the pricing card. */
    showSpots: boolean;
    /** Show the countdown to endsAt (only when endsAt is set). */
    showTimer: boolean;
  };
  support: { email: string; contactEmail: string; notify: boolean };
  announcement: { enabled: boolean; text: string; href: string };
  /** Sidebar sign-up card for signed-out visitors (admin → Announcement). Text is the owner's; avatars are image URLs
   *  or, when empty, the first letter of the newest members' names. */
  signupCard: { enabled: boolean; title: string; note: string; button: string; avatars: string[] };
  /** Referral links made in admin → Referral links (lib/ref.ts). `to` is the page the link opens. */
  refLinks: { name: string; note: string; to: string; createdAt: string }[];
  /** extra admins besides ADMIN_EMAILS and user.role = admin */
  adminEmails: string[];
};

export const DEFAULT_SETTINGS: Settings = {
  // Option B with Lifetime launch at $49 (owner 2026-11-18, Documents/Design Library Platform/PRICING-PLAN.md): yearly + Lifetime, no monthly.
  prices: { proMonthly: 0, proYearly: 39, lifetimeDeal: 49, lifetimeAfter: 99, teamMonthly: 0, teamYearly: 129 },
  variants: { proMonthly: "", proYearly: "", lifetimeDeal: "", lifetimeAfter: "", teamMonthly: "", teamYearly: "" },
  externalCheckout: { proMonthly: "", proYearly: "", lifetimeDeal: "", lifetimeAfter: "", teamMonthly: "", teamYearly: "" },
  deal: { enabled: true, spotsTotal: 100, after: "price", endsAt: "", showSpots: true, showTimer: true },
  support: { email: "support@ingotui.com", contactEmail: "support@ingotui.com", notify: true },
  announcement: { enabled: true, text: "Launch deal: Lifetime for $49 instead of $99, every future update included", href: "/pricing" },
  signupCard: { enabled: true, title: "Dashboard components for React, Figma and your AI agent.", note: "", button: "Sign up", avatars: [] },
  refLinks: [],
  adminEmails: [],
};

const KV_KEY = "settings:v1";
type Key = keyof Settings;

/** All settings merged over the defaults. Cached in KV for 60 s; writes clear the cache. */
export async function getSettings(): Promise<Settings> {
  try {
    const env = await getEnv();
    const cached = await env.KV.get(KV_KEY, "json");
    if (cached) return merge(cached as Partial<Settings>);
    const db = await getDb();
    const rows = await db.select().from(schema.setting);
    const stored: Partial<Settings> = {};
    for (const r of rows) {
      try {
        (stored as Record<string, unknown>)[r.key] = JSON.parse(r.value);
      } catch {}
    }
    await env.KV.put(KV_KEY, JSON.stringify(stored), { expirationTtl: 60 });
    return merge(stored);
  } catch {
    // Build time / no bindings: defaults keep pages rendering.
    return structuredClone(DEFAULT_SETTINGS);
  }
}

function merge(stored: Partial<Settings>): Settings {
  const out = structuredClone(DEFAULT_SETTINGS) as Record<string, unknown>;
  for (const [k, v] of Object.entries(stored)) {
    const d = out[k];
    out[k] = d && typeof d === "object" && !Array.isArray(d) && v && typeof v === "object" && !Array.isArray(v) ? { ...(d as object), ...(v as object) } : v;
  }
  return out as Settings;
}

/** Replace one top-level settings group. Callers must check requireAdmin() first. */
export async function setSetting<K extends Key>(key: K, value: Settings[K]) {
  const db = await getDb();
  const env = await getEnv();
  const now = new Date();
  await db
    .insert(schema.setting)
    .values({ key, value: JSON.stringify(value), updatedAt: now })
    .onConflictDoUpdate({ target: schema.setting.key, set: { value: JSON.stringify(value), updatedAt: now } });
  await env.KV.delete(KV_KEY);
}
