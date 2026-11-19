import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI dashboard templates";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "Dashboard templates", sub: "Full dashboard screens from nine design systems, in React and Figma.", pick: { system: "loopo", category: "Templates", name: /overview/i } });
}
