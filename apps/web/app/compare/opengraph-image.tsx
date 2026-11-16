import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI comparisons";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "How Ingot UI compares", sub: "Honest comparisons with other UI kits, with where each one is the better pick.", chips: ["Comparisons"] });
}
