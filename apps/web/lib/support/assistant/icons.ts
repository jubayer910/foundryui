/** Icon search over public/icons/index.json ({ n: name, c: category, t: tags }). Pure. */
import { clean, editDistance, isStop } from "./text";

export type IconMeta = { n: string; c: string; t: string[] };

const NOISE = new Set(["icon", "icons", "glyph", "svg", "symbol", "show", "find", "have", "need", "for", "an", "a", "the", "of", "do", "you", "any", "me", "some", "ingot", "style", "line", "stroke"]);

/** Search words of an icon request: "do you have an arrow icon" -> ["arrow"]. */
export function iconWords(text: string): string[] {
  return clean(text)
    .split(" ")
    .filter((w) => w && !NOISE.has(w) && !isStop(w))
    .map((w) => (w.length > 4 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w));
}

/** Rank icons: exact name part > name prefix > tag > fuzzy name. Every word must hit. */
export function searchIconMeta(meta: IconMeta[], words: string[], limit = 12): { items: IconMeta[]; total: number } {
  if (!words.length) return { items: [], total: 0 };
  const scored: { m: IconMeta; s: number }[] = [];
  for (const m of meta) {
    const parts = m.n.split("-");
    let s = 0;
    let all = true;
    for (const w of words) {
      let best = 0;
      if (parts.includes(w)) best = 4;
      else if (m.n.startsWith(w)) best = 3;
      else if (parts.some((p) => p.startsWith(w) && w.length >= 3)) best = 2.5;
      else if (m.t.includes(w)) best = 2;
      else if (m.t.some((t) => t.startsWith(w) && w.length >= 4)) best = 1.5;
      else if (w.length >= 5 && parts.some((p) => p.length >= 4 && editDistance(p, w, 1) <= 1)) best = 1;
      if (!best) {
        all = false;
        break;
      }
      s += best;
    }
    if (!all) continue;
    // shorter names are the base icon ("arrow-right" before "arrow-right-double-off")
    s -= parts.length * 0.15;
    if (m.n.endsWith("-off")) s -= 0.5;
    scored.push({ m, s });
  }
  scored.sort((a, b) => b.s - a.s || a.m.n.localeCompare(b.m.n));
  return { items: scored.slice(0, limit).map((x) => x.m), total: scored.length };
}
