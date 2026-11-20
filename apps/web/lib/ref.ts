/**
 * Referral links: https://ingotui.com/?ref=x-post (any page). The name counts as the visit's traffic source
 * (Analytics, sources) and is kept for 30 days in a first-party cookie holding only that name, so a sign-up
 * in that time is credited to it (user.ref). Report: /admin/referrals.
 */
export const REF_COOKIE = "ingot_ref";
export const REF_DAYS = 30;
/** Lowercase letters, digits, - and _, up to 40 characters; anything else is not a ref. */
export function cleanRef(v: unknown): string {
  if (typeof v !== "string") return "";
  const s = v.trim().toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 40);
  return s.length >= 2 ? s : "";
}
