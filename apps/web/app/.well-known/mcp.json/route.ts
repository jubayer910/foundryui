import { json, mcpDoc } from "@/lib/agent-discovery";

/** MCP server discovery: where the server is, its transport and auth, and its tools. */
export function GET() {
  return json(mcpDoc(), 3600);
}
