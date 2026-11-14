import { llmsTxt } from "@/lib/llms";
import { getPriceBook, pricingSentence } from "@/lib/plans";

/** Prices come from the admin settings, so the file is regenerated every few minutes. */
export const revalidate = 300;

export async function GET() {
  return new Response(llmsTxt(pricingSentence(await getPriceBook())), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
