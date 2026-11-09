import data from "./catalog.generated.json";
import type { CatalogItem, Category, DesignSystem } from "@/registry/catalog";

export type Item = CatalogItem & { dependencies: string[]; registryDependencies: string[]; code: Record<string, string> };

export const SITE_URL: string = data.site;
export const systems = data.systems as DesignSystem[];
export const categories = data.categories as { slug: Category; name: string; blurb: string }[];
export const items = data.items as unknown as Item[];

export const getItem = (slug: string) => items.find((i) => i.slug === slug);
export const getSystem = (slug: string) => systems.find((s) => s.slug === slug);
export const itemsIn = (c: Category) => items.filter((i) => i.category === c);

/** Every file an item needs, including registry dependencies (deduped, dependency order). */
export function resolveFiles(slug: string, seen = new Set<string>()): { slug: string; path: string; content: string }[] {
  if (seen.has(slug)) return [];
  seen.add(slug);
  const it = getItem(slug);
  if (!it) return [];
  const deps = it.registryDependencies.flatMap((d) => resolveFiles(d, seen));
  return [...deps, ...it.files.map((f) => ({ slug, path: f, content: it.code[f] }))];
}

/** Components harvested into the Figma library (all six systems, after QA). Update from STATUS.md when the harvest grows. */
export const FIGMA_LIBRARY_COUNT = 1852;
