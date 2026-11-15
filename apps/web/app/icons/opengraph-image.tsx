import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI icons";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "7,165 icons in six styles", sub: "Stroke, sharp, solid, duotone, twotone and bulk, on one 24px grid.", chips: ["React", "SVG", "Figma"] });
}
