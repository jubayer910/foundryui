import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI component categories";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "Every dashboard component, by category", sub: "Charts, tables, KPI cards, modals, drawers, forms and full pages.", chips: ["15 categories", "React + Tailwind", "Figma"] });
}
