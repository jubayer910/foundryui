import "server-only";
import { cache } from "react";
import { requireAdmin } from "@/lib/admin";

/** @deprecated Use requireStaff(perm, path) from lib/admin. Kept for branches written before roles (admin or owner only). */
export const adminOnly = cache(requireAdmin);

/** First value of a search param. */
export const sp = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
