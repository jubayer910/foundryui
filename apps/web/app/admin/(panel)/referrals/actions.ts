"use server";
import { revalidatePath } from "next/cache";
import { audit, requireStaff } from "@/lib/admin";
import { getSettings, setSetting } from "@/lib/settings";
import { cleanRef } from "@/lib/ref";

export type RefState = { ok?: string; err?: string; at?: number };

/** Add a referral link (a name for one place you share the site, e.g. x-reply or newsletter-uisources). */
export async function addRefLink(_prev: RefState, f: FormData): Promise<RefState> {
  const { user: me } = await requireStaff("analytics");
  const name = cleanRef(f.get("name"));
  const note = String(f.get("note") ?? "").replace(/\s+/g, " ").trim().slice(0, 120);
  let to = String(f.get("to") ?? "/").trim() || "/";
  if (to.startsWith("https://ingotui.com")) to = to.slice("https://ingotui.com".length) || "/";
  if (!/^\/[A-Za-z0-9\-._~/]*$/.test(to) || to.length > 200) return { err: "The page must be a path on ingotui.com, like / or /pricing.", at: Date.now() };
  if (!name) return { err: "Use 2 to 40 letters, numbers, - or _. For example x-reply.", at: Date.now() };
  const links = (await getSettings()).refLinks;
  if (links.some((l) => l.name === name)) return { err: `A link named ${name} already exists.`, at: Date.now() };
  await setSetting("refLinks", [{ name, note, to, createdAt: new Date().toISOString() }, ...links].slice(0, 300));
  await audit(me.email, "refLinks.add", name, { note, to });
  revalidatePath("/admin/referrals");
  return { ok: `Added ${name}. Copy the link from the table.`, at: Date.now() };
}

export async function removeRefLink(f: FormData) {
  const { user: me } = await requireStaff("analytics");
  const name = cleanRef(f.get("name"));
  const links = (await getSettings()).refLinks;
  await setSetting("refLinks", links.filter((l) => l.name !== name));
  await audit(me.email, "refLinks.remove", name);
  revalidatePath("/admin/referrals");
}
