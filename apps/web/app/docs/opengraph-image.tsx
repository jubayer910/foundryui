import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI docs";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "Install, theme and ship", sub: "The CLI, the shadcn registry, design tokens, Figma and AI agents.", chips: ["npx ingotui", "shadcn", "Tailwind v4"] });
}
