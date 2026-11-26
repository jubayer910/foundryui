/**
 * Traffic source names and the first / last touch kept for buyer attribution.
 *
 * The beacon (components/site/track-beacon.tsx) keeps two first-party cookies on a landing page view, each
 * holding only where the visit came from (no identifier): ingot_ft, the first visit's source (set once), and
 * ingot_lt, the latest visit that came from somewhere (not Direct). When an account is created, and again when
 * it starts a checkout, the server copies them onto the account (user.src, user.srcLast), so a purchase can be
 * traced back to the source that brought the buyer. Not set under Do Not Track or Global Privacy Control.
 */

export const FIRST_TOUCH = "ingot_ft";
export const LAST_TOUCH = "ingot_lt";
export const TOUCH_DAYS = 90;

const ALIAS: [RegExp, string][] = [
  [/(^|\.)google\.[a-z.]+$/, "google"],
  [/(^|\.)bing\.com$/, "bing"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo"],
  [/(^|\.)(t\.co|twitter\.com|x\.com)$/, "x.com"],
  [/(^|\.)facebook\.com$/, "facebook"],
  [/(^|\.)instagram\.com$/, "instagram"],
  [/(^|\.)linkedin\.com$|^lnkd\.in$/, "linkedin"],
  [/(^|\.)reddit\.com$/, "reddit"],
  [/(^|\.)youtube\.com$/, "youtube"],
  [/(^|\.)(chatgpt\.com|openai\.com)$/, "chatgpt"],
  [/(^|\.)perplexity\.ai$/, "perplexity"],
  [/(^|\.)github\.com$/, "github"],
];

/** utm_source (or ref link), else the referring site with common aliases, else "direct". */
export function cleanSource(ref: unknown, utm: unknown, ownHost: string): string {
  if (typeof utm === "string") {
    const u = utm.toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, 40);
    if (u) return u;
  }
  if (typeof ref === "string" && ref) {
    const h = ref.toLowerCase().replace(/^www\./, "");
    if (h.length <= 80 && /^[a-z0-9.-]+$/.test(h) && h.includes(".")) {
      if (h === ownHost.replace(/^www\./, "")) return "direct";
      for (const [re, name] of ALIAS) if (re.test(h)) return name;
      return h;
    }
  }
  return "direct";
}

export type Touch = { source: string; medium: string; campaign: string; landing: string; day: string };

const word = (v: unknown, max: number) => (typeof v === "string" ? v.toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, max) : "");

/** Reads a touch cookie value ({ r, u, m, c, p, d } as JSON) into a clean Touch, or null. */
export function parseTouch(raw: string | undefined | null, ownHost: string): Touch | null {
  if (!raw) return null;
  try {
    const j = JSON.parse(decodeURIComponent(raw)) as Record<string, unknown>;
    const landing = typeof j.p === "string" && /^\/[A-Za-z0-9\-._~/%:@]{0,199}$/.test(j.p) ? j.p : "";
    const day = typeof j.d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(j.d) ? j.d : "";
    return { source: cleanSource(j.r, j.u, ownHost), medium: word(j.m, 40), campaign: word(j.c, 60), landing, day };
  } catch {
    return null;
  }
}

/** A touch as stored on the account (user.src / user.srcLast). */
export const touchJson = (t: Touch | null) => (t ? JSON.stringify(t) : null);
export function readTouch(v: string | null | undefined): Touch | null {
  if (!v) return null;
  try {
    const j = JSON.parse(v) as Touch;
    return j && typeof j.source === "string" ? j : null;
  } catch {
    return null;
  }
}
