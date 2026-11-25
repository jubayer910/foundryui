import dropsData from "./drops.json";
import { entries, type Entry } from "./library";

/**
 * "New drops": each release of new components is one drop (date, title, the slugs it added).
 * The sidebar shows how many items arrived since the visitor last opened /new, the /new page
 * shows each drop, and items from recent drops carry a New tag in the library.
 * Add a drop by appending to drops.json (newest last); nothing else needs changing.
 */
export type Drop = { id: string; date: string; title: string; blurb: string; slugs: string[] };

export const drops = [...(dropsData as Drop[])].sort((a, b) => b.date.localeCompare(a.date));

/** Items stay tagged New for 21 days after their drop (Entry.isNew, set in lib/library.ts). */

const bySlug = new Map(entries.map((e) => [e.slug, e]));
export const dropEntries = (d: Drop): Entry[] => d.slugs.map((s) => bySlug.get(s)).filter((e): e is Entry => !!e);

/** What the sidebar badge needs on the client: drop ids, dates and sizes only. */
export const dropSummary = drops.map((d) => ({ id: d.id, date: d.date, n: d.slugs.length }));
export type DropSummary = typeof dropSummary;

/** The kinds of component in a drop, in the order they first appear (e.g. Sign in page, Wallet card…). */
export const dropKinds = (d: Drop) => {
  const es = dropEntries(d);
  // whole pages first (they show each system's own layout best), then cards, modals and the rest
  const rank = (name: string) => { const c = es.find((e) => e.name === name)?.category; return c === "Templates" ? 0 : c === "Cards and panels" ? 1 : c === "Modals" ? 2 : 3; };
  return [...new Set(es.map((e) => e.name))].sort((a, b) => rank(a) - rank(b));
};
