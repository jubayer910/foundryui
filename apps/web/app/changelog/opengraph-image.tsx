import { pageOgImage } from "@/lib/page-og";
import { OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI changelog";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
  return pageOgImage({ title: "What shipped", sub: "New design systems, components, icons, templates and MCP tools, newest first.", chips: ["Changelog"] });
}
