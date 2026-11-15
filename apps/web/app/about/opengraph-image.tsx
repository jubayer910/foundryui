import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "About Ingot UI";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "About Ingot UI", sub: "How the components are made from real product screens and checked against Figma.", chips: ["Real screens", "Pixel QA", "Editorial policy"] });
}
