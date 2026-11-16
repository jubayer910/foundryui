import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI dashboard charts";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "Dashboard charts", sub: "Bars, lines, donuts and funnels with real-looking data and hover states.", pick: { system: "loopo", category: "Charts", name: /trend|cash|revenue/i } });
}
