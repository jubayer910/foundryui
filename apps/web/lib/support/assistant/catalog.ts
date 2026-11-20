/**
 * Catalog tools for the assistant: component search and design-system facts, over the in-memory library
 * (lib/library.ts entries, lib/catalog.ts systems). Pure functions over bundled data, no I/O.
 */
import { items, systems as SYSTEMS } from "../../catalog";
import { CATEGORIES, entries, hasCode, isFreeTemplate, type Entry } from "../../library";
import { Bm25 } from "./bm25";
import { rawTermsOf, termsOf } from "./text";
import type { ComponentHit, SystemInfo } from "./types";

const systemBySlug = new Map(SYSTEMS.map((s) => [s.slug, s]));

/** Words that name a kind of UI part. Their presence makes "do you have X" a component search. */
export const UI_NOUNS = new Set(
  (
    "component card cards modal modals header headers page pages drawer drawers footer kpi menu menus table tables row rows chart charts " +
    "popover popovers toolbar list lists nav navigation bar bars template templates field fields form forms tooltip tabs tab button buttons " +
    "grid tile tiles widget panel panels picker sidebar palette stepper board kanban calendar timeline inbox avatar badge toast banner " +
    "dropdown select checkbox switch toggle slider input inputs pagination breadcrumb dialog sheet accordion graph graphs donut pie heatmap " +
    "map dashboard dashboards screen screens layout editor upload uploader filter filters stats metric metrics loginform pricingtable " +
    "navbar datatable progress meter gauge funnel sparkline leaderboard feed notification notifications onboarding wizard " +
    "comment comments empty legend"
  ).split(" "),
);

/** Concept-level synonyms used only for component search ("pricing table" finds plan cards). */
const EXPAND: Record<string, string[]> = {
  pricingtable: ["plan", "price", "billing", "upgrade"],
  loginform: ["login", "signup", "auth", "sso"],
  kanban: ["kanban", "board", "pipeline", "column"],
  table: ["table", "row", "list"],
  datatable: ["table", "row"],
  navbar: ["nav", "header", "toolbar"],
  sidebar: ["sidebar", "nav"],
  modal: ["modal"],
  chart: ["chart"],
  kpi: ["kpi", "metric", "stat"],
  template: ["page"],
  dashboard: ["page", "overview"],
  form: ["form", "field"],
  dropdown: ["menu"],
  notification: ["notification", "alert"],
  calendar: ["calendar", "schedule"],
  checkout: ["payment", "billing"],
};

const CATEGORY_WORDS: [string, string[]][] = [
  ["Templates", ["template", "page", "screen", "dashboard", "layout"]],
  ["Navigation", ["nav", "navigation", "sidebar", "navbar", "tab", "breadcrumb"]],
  ["Headers", ["header"]],
  ["KPI and stats", ["kpi", "stat", "metric"]],
  ["Charts", ["chart", "graph", "donut", "pie", "heatmap", "sparkline", "funnel", "gauge"]],
  ["Tables and lists", ["table", "datatable", "list", "row", "leaderboard"]],
  ["Cards and panels", ["card", "panel", "tile"]],
  ["Forms", ["form", "field", "input", "select", "checkbox", "switch", "toggle", "slider", "loginform"]],
  ["Editors", ["editor"]],
  ["Modals", ["modal", "dialog"]],
  ["Drawers", ["drawer", "sheet"]],
  ["Menus", ["menu", "dropdown"]],
  ["Popovers", ["popover", "tooltip"]],
  ["Feedback", ["toast", "banner", "empty", "notification", "alert"]],
  ["Atoms", ["button", "badge", "avatar"]],
];
const CATEGORY_OF_TERM = new Map<string, string>();
for (const [c, ws] of CATEGORY_WORDS) for (const w of ws) for (const t of termsOf(w)) if (!CATEGORY_OF_TERM.has(t)) CATEGORY_OF_TERM.set(t, c);

/** The category a query names ("charts", "modals"), if any. */
export function categoryOf(terms: string[]): string | undefined {
  for (const t of terms) {
    const c = CATEGORY_OF_TERM.get(t);
    if (c) return c;
  }
  return undefined;
}

let index: Bm25 | null = null;
function getIndex() {
  if (!index)
    index = new Bm25(
      entries.map((e) => [
        { text: e.name, weight: 3, core: true },
        { text: e.category, weight: 1.5, core: true },
        { text: e.text, weight: 0.5 },
      ]),
    );
  return index;
}

/** kind words that name a category rather than a specific component */
const GENERIC = new Set(
  ["chart", "card", "panel", "tile", "page", "template", "screen", "dashboard", "layout", "modal", "drawer", "menu", "popover", "list", "row", "form", "field", "header", "widget", "block", "component", "element", "section", "view", "ui", "graph"].flatMap((w) => termsOf(w)),
);

let rawNames: Set<string>[] | null = null;
const rawName = (i: number) => (rawNames ??= entries.map((e) => new Set(rawTermsOf(e.name))))[i];

let coreTerms: Set<string>[] | null = null;
/** concept terms of an entry's name and category */
function coreHas(i: number, t: string) {
  coreTerms ??= entries.map((e) => new Set([...termsOf(e.name), ...termsOf(e.category)]));
  return coreTerms[i].has(t);
}

const tierOf = (e: Entry): "free" | "pro" => (isFreeTemplate(e.slug) ? "free" : e.tier);

export function toHit(e: Entry): ComponentHit {
  const s = systemBySlug.get(e.system);
  return {
    slug: e.slug,
    name: e.name,
    system: e.system,
    systemName: s?.name ?? e.system,
    accent: s?.accent ?? "#0b0b0b",
    category: e.category,
    tier: tierOf(e),
    kind: hasCode(e) ? "code" : "figma",
    thumb: e.thumb,
    url: "/components/" + e.slug,
  };
}

export type ComponentQuery = { system?: string; free?: boolean; codeOnly?: boolean; figmaOnly?: boolean; category?: string; offset?: number; limit?: number };

/**
 * Rank library entries for a free-text query. Name matches count most, then category, then keywords.
 * Returns the page asked for, the total and whether the match is exact (every query term in the name or category).
 */
export function searchComponents(query: string, opts: ComponentQuery = {}): { items: ComponentHit[]; total: number; exact: boolean } {
  const limit = opts.limit ?? 6;
  const offset = opts.offset ?? 0;
  const base = termsOf(query).filter((t) => t !== "component" && !systemBySlug.has(t));
  const expanded = base.flatMap((t) => [t, ...(EXPAND[t] ?? []).flatMap((w) => termsOf(w))]);
  const filter = (i: number) => {
    const e = entries[i];
    if (opts.system && e.system !== opts.system) return false;
    if (opts.free && tierOf(e) !== "free") return false;
    if (opts.codeOnly && !hasCode(e)) return false;
    if (opts.figmaOnly && hasCode(e)) return false;
    if (opts.category && !base.length && e.category !== opts.category) return false;
    return true;
  };
  const idx = getIndex();
  let ranked: { i: number; score: number }[];
  let exactAny = true;
  if (!expanded.length) {
    // no subject words: list the filter's entries (a system, a category), templates and coded parts first
    ranked = entries
      .map((_, i) => i)
      .filter(filter)
      .map((i) => ({ i, score: (entries[i].category === "Templates" ? 2 : 0) + (hasCode(entries[i]) ? 1 : 0) }))
      .sort((a, b) => b.score - a.score || a.i - b.i);
  } else {
    const hits = idx.search(expanded, 5000, filter);
    const cat = categoryOf(base);
    const rawQ = rawTermsOf(query).filter((w) => w !== "component" && w !== "components");
    // exact: every subject word in the name or category; otherwise the closest matches
    // generic kind words ("chart", "page") only narrow; the specific words ("donut") must be in the name
    const specific = base.filter((t) => !GENERIC.has(t));
    const exactHits = hits.filter((h) =>
      specific.length ? specific.every((t) => coreHas(h.i, t)) : base.some((t) => coreHas(h.i, t)) || (!!cat && entries[h.i].category === cat),
    );
    const pool = exactHits.length ? exactHits : hits.filter((h) => h.coverage >= 0.3);
    exactAny = exactHits.length > 0;
    ranked = pool
      .map((h) => {
        const e = entries[h.i];
        let s = h.score;
        if (cat && e.category === cat) s *= 1.25;
        // the visitor's own words in the name beat a synonym match ("data table" before "List row")
        if (rawQ.length) s *= 1 + (0.8 * rawQ.filter((w) => rawName(h.i).has(w)).length) / rawQ.length;
        if (hasCode(e)) s *= 1.05;
        return { i: h.i, score: s };
      })
      .sort((a, b) => b.score - a.score || a.i - b.i);
  }
  // Same name in the same system (variants) shows once.
  const seen = new Set<string>();
  const unique = ranked.filter((r) => {
    const e = entries[r.i];
    const k = e.system + "|" + e.name.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  const exact = exactAny && unique.length > 0;
  return { items: unique.slice(offset, offset + limit).map((r) => toHit(entries[r.i])), total: unique.length, exact };
}

/** A hand-built registry component (npx ingotui add <slug>) named by the query, e.g. "kpi card" -> kpi-card. */
export function registryMatch(query: string): { slug: string; name: string } | null {
  const q = termsOf(query).filter((t) => t !== "component");
  if (!q.length) return null;
  let best: { slug: string; name: string; s: number } | null = null;
  for (const it of items) {
    const n = new Set([...termsOf(it.name), ...termsOf(it.slug.replace(/-/g, " "))]);
    const hit = q.filter((t) => n.has(t)).length / q.length;
    const s = hit - n.size * 0.01;
    if (hit >= 0.99 && (!best || s > best.s)) best = { slug: it.slug, name: it.name, s };
  }
  return best ? { slug: best.slug, name: best.name } : null;
}

export function systemInfo(slug: string): SystemInfo | null {
  const s = systemBySlug.get(slug);
  if (!s) return null;
  const own = entries.filter((e) => e.system === slug);
  return {
    slug: s.slug,
    name: s.name,
    accent: s.accent,
    tagline: s.tagline,
    description: s.description,
    tier: s.tier as "free" | "pro",
    font: s.font,
    components: own.length,
    coded: own.filter(hasCode).length,
    templates: own.filter((e) => e.category === "Templates").length,
    url: "/systems/" + s.slug,
  };
}

export const allSystems = () => SYSTEMS.map((s) => systemInfo(s.slug)!).filter(Boolean);

/** System names and slugs, for entity extraction. */
export const SYSTEM_NAMES: { slug: string; name: string }[] = SYSTEMS.map((s) => ({ slug: s.slug, name: s.name }));
export const LIBRARY_TOTAL = entries.length;
export { CATEGORIES };

/** Words of every component name, for the typo-repair vocabulary. */
export function catalogVocabulary(): string[] {
  return [...SYSTEMS.map((s) => s.name + " " + s.tagline), ...CATEGORIES, ...entries.map((e) => e.name)];
}
