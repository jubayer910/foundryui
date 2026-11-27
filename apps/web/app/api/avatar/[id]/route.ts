import { getEnv } from "@/lib/db";

/** GET /api/avatar/<userId>: the profile photo saved from Account → Profile (KV avatar:<id>). URLs carry ?v= so they cache for long. */
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^[A-Za-z0-9_-]{6,64}$/.test(id)) return new Response(null, { status: 404 });
  const env = await getEnv();
  const { value, metadata } = await env.KV.getWithMetadata<{ type?: string }>("avatar:" + id, "arrayBuffer");
  if (!value) return new Response(null, { status: 404 });
  return new Response(value, {
    headers: {
      "content-type": metadata?.type ?? "image/webp",
      "cache-control": "public, max-age=31536000, immutable",
      "x-content-type-options": "nosniff",
    },
  });
}
