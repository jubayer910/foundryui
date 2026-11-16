import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI pricing";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "Start free. Go Pro, or pay once.", sub: "Every design system, every component in React and Figma, unlimited MCP.", chips: ["Free plan", "Pro", "Lifetime", "7-day refund"] });
}
