import "server-only";
import { redirect } from "next/navigation";

/** Redirect back to an admin page with a flash message (?ok= or ?err=). Targets outside /admin fall back to `fallback`. */
export function back(to: string, q: Record<string, string>, fallback = "/admin"): never {
  let safe = /^\/admin(\/|\?|$)/.test(to) ? to : fallback;
  safe = safe.replace(/([?&])(ok|err|sent|m)=[^&]*&?/g, "$1").replace(/[?&]$/, "");
  redirect(safe + (safe.includes("?") ? "&" : "?") + new URLSearchParams(q).toString());
}

export const str = (f: FormData, k: string, max = 5000) => String(f.get(k) ?? "").trim().slice(0, max);
