import { getContent } from "@/lib/content/store";

// Owner text overrides for ContentPatch (client-side navigation). First page loads get them from the worker.
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(await getContent(), { headers: { "cache-control": "public, max-age=30, s-maxage=30" } });
}
