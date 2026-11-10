import { z } from "zod";
import { ACTIONS, checkAndRecord } from "@/lib/gate";
import { getItem, resolveFiles } from "@/lib/catalog";
import { getFigmaItem } from "@/lib/library";

const Body = z.object({ slug: z.string().min(1), action: z.enum(ACTIONS) });

/** Every copy / download goes through here: checks the 5-action gate, records usage, returns code when needed. */
export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "bad_request" }, { status: 400 });
  const { slug, action } = parsed.data;
  const gate = await checkAndRecord(slug, action);
  if (!gate.ok) return Response.json({ error: gate.reason, remaining: gate.remaining }, { status: gate.reason === "not_found" ? 404 : 403 });
  const fig = !getItem(slug) && getFigmaItem(slug);
  // generated code lives as a static file next to the thumbnails; the client fetches it after the gate says yes
  if (fig) return Response.json({ ok: true, remaining: gate.remaining, codeUrl: action === "copy_code" ? `/library-code/${fig.system}/${slug}.txt` : undefined });
  const files = action === "copy_code" ? resolveFiles(slug) : undefined;
  return Response.json({ ok: true, remaining: gate.remaining, files });
}
