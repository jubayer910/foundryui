import { items, systems } from "../catalog";
import { figma, figmaQA } from "../library";
import { SITE, STATS, fmt } from "../seo";

const LIVE_HAND = (s: string) => (systems.find((x) => x.slug === s)?.status === "live" ? items.length : 0);

/** Every number a post can quote, computed from lib/figma-items.json and lib/figma-code.json at build time. */
export function stat(key: string): number | undefined {
  const [k, sys = "all", cat] = key.split(":");
  const inSys = (f: { system: string }) => sys === "all" || f.system === sys;
  switch (k) {
    case "components": return STATS.components;
    case "coded": return STATS.coded;
    case "icons": return STATS.icons;
    case "systems": return STATS.systems;
    case "hand": return items.length;
    case "figma": return figma.filter(inSys).length;
    case "code": return figma.filter((f) => inSys(f) && figmaQA(f.slug)).length + (sys === "all" ? items.length : LIVE_HAND(sys));
    case "gen": return figma.filter((f) => inSys(f) && figmaQA(f.slug)).length;
    case "screens": return new Set(figma.filter(inSys).map((f) => f.system + f.source)).size;
    case "cat": return figma.filter((f) => inSys(f) && f.category === cat).length;
    case "codecat": return figma.filter((f) => inSys(f) && f.category === cat && figmaQA(f.slug)).length;
    case "pct": {
      const all = figma.filter(inSys);
      return Math.round((all.filter((f) => figmaQA(f.slug)).length / Math.max(1, all.length)) * 100);
    }
  }
  return undefined;
}

/** Replace {key} placeholders with formatted live numbers. Unknown keys are left visible so they get caught in review. */
export const fill = (s: string) => s.replace(/\{([a-z]+(?::[a-zA-Z]+)?(?::[A-Za-z ]+)?)\}/g, (m, key) => {
  if (key === "site") return SITE;
  const n = stat(key);
  return n === undefined ? m : fmt(n);
});
