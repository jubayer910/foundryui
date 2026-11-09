import figmaItems from "./figma-items.json";

/** Components on each system file's "Foundry Library" page, counted from the exported data (lib/figma-items.json). */
const rows = figmaItems as { system: string; category: string }[];
export const FIGMA_LIBRARY: Record<string, Record<string, number>> = {};
for (const r of rows) {
  const s = (FIGMA_LIBRARY[r.system] ||= {});
  s[r.category] = (s[r.category] || 0) + 1;
}

export const figmaCount = (slug: string) => Object.values(FIGMA_LIBRARY[slug] ?? {}).reduce((a, b) => a + b, 0);
export const FIGMA_TOTAL = rows.length;
