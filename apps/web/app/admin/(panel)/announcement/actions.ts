"use server";
import { revalidatePath } from "next/cache";
import { audit, requireStaff } from "@/lib/admin";
import { getSettings, setSetting } from "@/lib/settings";

export type AnnouncementState = { ok?: string; err?: string; field?: "text" | "href"; at?: number };

/** Save the announcement bar (settings.announcement). The bar reads /api/site, so it updates within a minute. */
export async function saveAnnouncement(_prev: AnnouncementState, f: FormData): Promise<AnnouncementState> {
  const { user: me } = await requireStaff("content");
  const enabled = f.get("enabled") === "on";
  const text = String(f.get("text") ?? "").replace(/\s+/g, " ").trim().slice(0, 200);
  const href = String(f.get("href") ?? "").trim().slice(0, 300);
  if (enabled && !text) return { field: "text", err: "Write the bar text or turn the bar off.", at: Date.now() };
  if (text.length > 140) return { field: "text", err: "Keep it under 140 characters.", at: Date.now() };
  if (href && (!/^(\/(?!\/)|https:\/\/)/.test(href) || /\s/.test(href))) return { field: "href", err: "Start the link with / (a page on the site) or https://.", at: Date.now() };
  const before = (await getSettings()).announcement;
  const after = { enabled, text, href };
  await setSetting("announcement", after);
  await audit(me.email, "settings.announcement", "announcement", { before, after });
  revalidatePath("/admin/announcement");
  revalidatePath("/admin/pricing");
  return { ok: enabled ? "Saved. Visitors see the new bar within a minute." : "Saved. The bar is off; visitors stop seeing it within a minute.", at: Date.now() };
}

export type SignupCardState = { ok?: string; err?: string; at?: number };

/** Save the sidebar sign-up card (settings.signupCard). Signed-out visitors see it within a minute (via /api/site). */
export async function saveSignupCard(_prev: SignupCardState, f: FormData): Promise<SignupCardState> {
  const { user: me } = await requireStaff("content");
  const clean = (k: string, n: number) => String(f.get(k) ?? "").replace(/\s+/g, " ").trim().slice(0, n);
  const enabled = f.get("enabled") === "on";
  const title = clean("title", 120), note = clean("note", 140), button = clean("button", 24) || "Sign up";
  const avatars = String(f.get("avatars") ?? "").split(/[\s,]+/).map((x) => x.trim()).filter(Boolean).slice(0, 5);
  if (avatars.some((a) => !/^https:\/\/\S+$/.test(a))) return { err: "Avatar images must be https:// links, one per line.", at: Date.now() };
  if (enabled && !title && !note) return { err: "Write the title or the note, or turn the card off.", at: Date.now() };
  const before = (await getSettings()).signupCard;
  const after = { enabled, title, note, button, avatars };
  await setSetting("signupCard", after);
  await audit(me.email, "settings.signupCard", "signupCard", { before, after });
  revalidatePath("/admin/announcement");
  return { ok: enabled ? "Saved. Signed-out visitors see the card within a minute." : "Saved. The card is off.", at: Date.now() };
}
