import { ogImage, OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI Resources";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return ogImage({ eyebrow: "Resources", title: "Dashboard UI guides for founders and developers", sub: "UI kits, shadcn alternatives, Figma to React, KPI cards, charts and AI agents with MCP." });
}
