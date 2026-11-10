import { ogImage, OG_SIZE, OG_TYPE } from "@/lib/og";
import { STATS, fmt } from "@/lib/seo";

export const alt = "Foundry UI: dashboard components in React, Figma and MCP";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return ogImage({ eyebrow: "Dashboard components", title: "Dashboard components that look finished", sub: `${fmt(STATS.components)} components in ${STATS.systems} systems. React code checked against Figma, and an MCP server for your AI agent.`, accent: "#fd4b23", chips: ["React + Tailwind", "Figma", "MCP", fmt(STATS.icons) + " icons"] });
}
