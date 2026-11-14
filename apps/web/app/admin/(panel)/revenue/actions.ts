"use server";
import { revalidatePath } from "next/cache";
import { audit, can, requireStaff } from "@/lib/admin";
import { getDb, getEnv } from "@/lib/db";
import { checkoutKeys } from "@/lib/lemonsqueezy";
import { runSync, syncBase } from "@/lib/lemonsqueezy-sync";
import { getSettings } from "@/lib/settings";
import { back } from "@/components/admin/back";

/** "Sync now" on /admin/revenue and /admin/orders: pulls orders, subscriptions and store stats from Lemon Squeezy. */
export async function syncNow(f: FormData) {
  const to = String(f.get("back") || "/admin/revenue");
  const staff = await requireStaff(undefined, to);
  if (!can(staff.role, "revenue") && !can(staff.role, "orders")) back(to, { err: "Your role can't sync payments." });
  const env = await getEnv();
  const keys = checkoutKeys(env);
  if (!keys) back(to, { err: "Add LEMONSQUEEZY_API_KEY and LEMONSQUEEZY_STORE_ID first (Settings lists what is missing)." });
  const db = await getDb();
  const s = await runSync(db, await getSettings(), keys, { base: syncBase(env) });
  await audit(staff.user.email, "revenue:sync", keys.storeId, { ok: s.ok, partial: s.partial, written: s.orders.written + s.subscriptions.written });
  revalidatePath("/admin/revenue");
  revalidatePath("/admin/orders");
  if (!s.ok) back(to, { err: "Sync failed: " + (s.error ?? "unknown error") });
  const changed = s.orders.written + s.subscriptions.written;
  const msg =
    `Synced ${s.orders.seen} orders and ${s.subscriptions.seen} subscriptions: ` +
    (changed ? `${changed} updated, ${s.orders.unchanged + s.subscriptions.unchanged} unchanged.` : "nothing changed.") +
    (s.orders.unmatched ? ` ${s.orders.unmatched} ${s.orders.unmatched === 1 ? "order" : "orders"} skipped (variant not in Pricing & deal).` : "") +
    (s.partial ? " " + (s.error ?? "Run it again to continue.") : "");
  back(to, { ok: msg });
}
