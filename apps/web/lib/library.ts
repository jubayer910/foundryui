import { items, systems } from "./catalog";
import figmaItems from "./figma-items.json";

/** One browsable entry: a coded component (live preview + code) or a Figma library component (image preview). */
export type Entry = {
  slug: string;
  name: string;
  system: string; // system slug
  category: string;
  tier: "free" | "pro";
  kind: "code" | "figma";
  thumb?: string;
  w?: number;
  h?: number;
  text: string; // search text
  source?: string;
};

export type FigmaItem = { id: string; system: string; category: string; name: string; slug: string; w: number; h: number; keywords: string; source: string; thumb: string };

/** Shared category list, in browse order. */
export const CATEGORIES = ["Templates", "Navigation", "Headers", "KPI and stats", "Charts", "Tables and lists", "Cards and panels", "Forms", "Editors", "Modals", "Drawers", "Menus", "Popovers", "Feedback", "Atoms", "Foundations"];

const CODE_CATEGORY: Record<string, string> = {
  tokens: "Foundations", cx: "Foundations", icons: "Foundations", "chart-kit": "Foundations",
  button: "Atoms", "icon-button": "Atoms", badge: "Atoms", "delta-chip": "Atoms", "avatar-group": "Atoms",
  input: "Forms", "search-field": "Forms", select: "Forms", switch: "Forms", checkbox: "Forms", "segmented-control": "Forms",
  tabs: "Navigation", "sidebar-nav": "Navigation", tooltip: "Popovers", "dropdown-menu": "Menus", dialog: "Modals",
  "kpi-card": "KPI and stats", "ranked-list": "Tables and lists", "data-table": "Tables and lists", "empty-state": "Feedback",
};

const tierOf = (system: string) => (systems.find((s) => s.slug === system)?.tier ?? "pro") as "free" | "pro";
export const figma = figmaItems as FigmaItem[];

const codeEntries: Entry[] = items.map((i) => ({
  slug: i.slug,
  name: i.name,
  system: "loopo",
  category: CODE_CATEGORY[i.slug] ?? (i.category === "charts" ? "Charts" : "Cards and panels"),
  tier: i.tier,
  kind: "code",
  text: [i.name, i.description, i.tags.join(" ")].join(" ").toLowerCase().slice(0, 180),
}));

const figmaEntries: Entry[] = figma.map((f) => ({
  slug: f.slug,
  name: f.name,
  system: f.system,
  category: CATEGORIES.includes(f.category) ? f.category : "Cards and panels",
  tier: tierOf(f.system),
  kind: "figma",
  thumb: f.thumb,
  w: f.w,
  h: f.h,
  text: [f.name, f.category, f.keywords].join(" ").toLowerCase().slice(0, 180),
  source: f.source,
}));

/** Code first inside each category (they are fully usable), then Figma components. */
export const entries: Entry[] = [...codeEntries, ...figmaEntries];
export const getFigmaItem = (slug: string) => figma.find((f) => f.slug === slug);
