"use server";
import { revalidatePath } from "next/cache";
import { requireStaff } from "@/lib/admin";
import { ignoreSale, manualMatch, syncContraSales } from "@/lib/contra/sync";
import { back, str } from "@/components/admin/back";

const HOME = "/admin/contra";

export async function syncNow() {
  await requireStaff("orders", HOME);
  const r = await syncContraSales({ refreshLinks: true });
  revalidatePath("/admin", "layout");
  if (!r.ok && !r.fetched) back(HOME, { err: r.error ?? "Sync failed." });
  back(HOME, { ok: `Synced ${r.links} link${r.links === 1 ? "" : "s"}: ${r.added} new sale${r.added === 1 ? "" : "s"}, ${r.matched} matched.${r.error ? " Note: " + r.error : ""}` });
}

/** Unmatched sale → the account staff typed: creates and approves an activation (matchedBy manual). */
export async function matchToUser(f: FormData) {
  const { user: me } = await requireStaff("orders", HOME);
  const r = await manualMatch(str(f, "id", 200), str(f, "email", 200), me.email);
  revalidatePath("/admin", "layout");
  back(HOME, r.ok ? { ok: r.message } : { err: r.message });
}

export async function ignore(f: FormData) {
  const { user: me } = await requireStaff("orders", HOME);
  const r = await ignoreSale(str(f, "id", 200), me.email);
  revalidatePath("/admin", "layout");
  back(HOME, r.ok ? { ok: r.message } : { err: r.message });
}
