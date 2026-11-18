import specs from "./component-specs.generated.json";

/** Per-component facts read from the finished code at build time (scripts/library-finalize.mjs). */
export type Specs = { fn: string; icons: string[]; fonts: string[]; sizes: number[]; weights: number[]; colors: string[]; radii: number[]; lines: number };
type Row = [string, string[], string[], number[], number[], string[], number[], number];

export function getSpecs(slug: string): Specs | null {
  const r = (specs as unknown as Record<string, Row>)[slug];
  if (!r) return null;
  const [fn, icons, fonts, sizes, weights, colors, radii, lines] = r;
  return { fn, icons, fonts, sizes, weights, colors, radii, lines };
}
