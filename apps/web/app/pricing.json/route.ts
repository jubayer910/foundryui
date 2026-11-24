import { json, pricingDoc } from "@/lib/agent-discovery";

/** Machine-readable plans and prices, read from the admin settings. */
export const dynamic = "force-dynamic";

export async function GET() {
  return json(await pricingDoc());
}
