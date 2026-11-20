/**
 * Owner-editable page text (admin → Pages). Mark an element that holds plain text only with {...ed("page.part")};
 * the default stays in the code. Overrides live in D1 (setting "content") and KV (CONTENT_KV). The worker
 * (worker.ts) swaps them into the prerendered HTML with HTMLRewriter, and ContentPatch re-applies them after
 * client-side navigation, so pages stay static and edits are live within a minute, no deploy.
 */
export const ed = (key: string) => ({ "data-edit": key, suppressHydrationWarning: true }) as const;

export type ContentMap = Record<string, string>;
export const CONTENT_KV = "content:v1";
/** Admin editor asks for the page as built (no overrides), to show the default text. */
export const RAW_HEADER = "x-ingot-raw";
export const KEY_RE = /^[a-z0-9][a-z0-9._:/-]{0,160}$/;
export const seoKey = (path: string, f: "title" | "description") => `seo:${path}:${f}`;
/** "/pricing/" → "/pricing", "" → "/" */
export const normPath = (p: string) => (p.replace(/\/+$/, "") || "/").toLowerCase();
