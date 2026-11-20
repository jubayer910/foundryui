import { CONTENT_KV, RAW_HEADER, normPath, seoKey, type ContentMap } from "./edit";

type El = { getAttribute(n: string): string | null; setAttribute(n: string, v: string): void; setInnerContent(t: string): void };
type Rewriter = { on(sel: string, h: { element(el: El): void }): Rewriter; transform(r: Response): Response };
declare const HTMLRewriter: { new (): Rewriter };

/**
 * Owner text edits (admin → Pages): swap overrides into the prerendered HTML as it streams out. Cheap (no
 * re-render), so pages stay static. Admin, API and the editor's raw fetch get the page as built.
 */
export async function withContent(req: Request, env: { KV: unknown }, res: Response): Promise<Response> {
  if (req.method !== "GET" || req.headers.get(RAW_HEADER)) return res;
  if (!(res.headers.get("content-type") || "").includes("text/html")) return res;
  const path = normPath(new URL(req.url).pathname);
  if (/^\/(admin|api)(\/|$)/.test(path)) return res;
  let map: ContentMap | null = null;
  try {
    map = (await (env.KV as { get(k: string, o: { type: "json"; cacheTtl: number }): Promise<unknown> }).get(CONTENT_KV, { type: "json", cacheTtl: 60 })) as ContentMap | null;
  } catch {}
  if (!map || !Object.keys(map).length) return res;
  const title = map[seoKey(path, "title")];
  const desc = map[seoKey(path, "description")];
  let rw = new HTMLRewriter().on("[data-edit]", {
    element(el) {
      const v = map![el.getAttribute("data-edit") || ""];
      if (v !== undefined) el.setInnerContent(v);
    },
  });
  if (title) {
    rw = rw.on("title", { element: (el) => el.setInnerContent(title) });
    rw = rw.on('meta[property="og:title"], meta[name="twitter:title"]', { element: (el) => el.setAttribute("content", title) });
  }
  if (desc) rw = rw.on('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]', { element: (el) => el.setAttribute("content", desc) });
  const out = rw.transform(res);
  const h = new Headers(out.headers);
  h.delete("etag"); // the body differs from what the cached ETag describes
  h.delete("content-length");
  return new Response(out.body, { status: out.status, statusText: out.statusText, headers: h });
}

