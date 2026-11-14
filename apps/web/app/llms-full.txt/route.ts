import { llmsFullTxt } from "@/lib/llms";

/**
 * Static (prerendered): the full file is ~200 KB and building it per request risks the Worker CPU limit.
 * Posts written in the admin appear in /llms.txt (dynamic, small) and /sitemap-posts.xml.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullTxt(), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
