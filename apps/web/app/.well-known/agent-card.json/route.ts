import { agentCardDoc, json } from "@/lib/agent-discovery";

/** A2A agent card: name, url and skills (the MCP tools). */
export function GET() {
  return json(agentCardDoc(), 3600);
}
