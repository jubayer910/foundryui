import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI design systems";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "Six dashboard design systems", sub: "Each one complete: tokens, components, charts and screens in one look.", pick: { system: "auton", category: "Templates", name: /agents|overview/i } });
}
