import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI support";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "Support", sub: "Answers on billing, licence, install, MCP and Figma, or write to a person.", chips: ["Answers", "support@ingotui.com"] });
}
