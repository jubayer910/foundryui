import { aiAgentDoc, json } from "@/lib/agent-discovery";

/** Agent manifest: name, capabilities (the MCP tools with input schemas), auth, rate limit, pricing, contact. Prices are live, so dynamic. */
export const dynamic = "force-dynamic";

export async function GET() {
  return json(await aiAgentDoc());
}
