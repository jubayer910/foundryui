import "server-only";
import { cache } from "react";
import { requireAdmin } from "@/lib/admin";

/** requireAdmin() deduped per request, for the layout and page of the same render. Server actions call requireAdmin() directly. */
export const adminOnly = cache(requireAdmin);

/** First value of a search param. */
export const sp = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
