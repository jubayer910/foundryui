import { llmsTxt } from "@/lib/llms";
import { getPriceBook, pricingSentence } from "@/lib/plans";
import { allPosts } from "@/lib/blog/db";

/** Prices come from the admin settings and the guide list includes published database posts. Dynamic (the static-assets page cache never revalidates); CDN caches it 5 minutes. */
export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(llmsTxt(pricingSentence(await getPriceBook()), await allPosts()), { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=300, s-maxage=300" } });
}
