import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI MCP server";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "Your AI agent builds with Ingot UI", sub: "Connect Claude Code, Cursor, VS Code or Codex in one line.", chips: ["MCP", "14 tools", "Claude Code", "Cursor"] });
}
