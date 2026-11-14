"use server";
import { revalidatePath } from "next/cache";
import { audit, requireAdmin } from "@/lib/admin";
import { getSettings, setSetting } from "@/lib/settings";
import { back, str } from "@/components/admin/back";

const EMAIL = /^[^\s@,]+@[^\s@,]+\.[^\s@,]+$/;

export async function saveSettings(f: FormData) {
  const me = await requireAdmin();
  const to = "/admin/settings";
  const email = str(f, "supportEmail", 200).toLowerCase();
  const contactEmail = str(f, "contactEmail", 200).toLowerCase();
  const notify = f.get("notify") === "on";
  const admins = [...new Set(str(f, "adminEmails", 5000).split(/[\s,;]+/).map((e) => e.trim().toLowerCase()).filter(Boolean))];
  if (!EMAIL.test(email)) back(to, { err: "The support email doesn't look like an email address." });
  if (!EMAIL.test(contactEmail)) back(to, { err: "The contact email doesn't look like an email address." });
  const bad = admins.find((a) => !EMAIL.test(a));
  if (bad) back(to, { err: `"${bad}" is not an email address.` });
  if (admins.length > 50) back(to, { err: "Keep the extra admin list under 50 emails." });
  const before = await getSettings();
  await setSetting("support", { email, contactEmail, notify });
  await setSetting("adminEmails", admins);
  await audit(me.email, "settings.general", "support,adminEmails", {
    before: { support: before.support, adminEmails: before.adminEmails },
    after: { support: { email, contactEmail, notify }, adminEmails: admins },
  });
  revalidatePath("/", "layout");
  back(to, { ok: "Settings saved." });
}
