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
