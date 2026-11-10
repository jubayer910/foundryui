import { markImage } from "@/lib/og";

export const dynamic = "force-static";

/** Square raster logo for Organization JSON-LD and link previews. */
export function GET() {
  return markImage(512);
}
