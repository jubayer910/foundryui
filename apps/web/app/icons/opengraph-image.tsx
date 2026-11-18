import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";
import iconStats from "@/lib/icon-stats.json";

export const alt = "Ingot UI icons";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: iconStats.line.toLocaleString("en-US") + " icons in six styles", sub: "Stroke, sharp, solid, duotone, twotone and bulk, on one 24px grid.", chips: ["React", "SVG", "Figma"] });
}
