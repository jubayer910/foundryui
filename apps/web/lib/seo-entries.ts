import type { Entry } from "./library";

/**
 * Entries as sent to the client-side browser. Drops fields the cards never read
 * (source screen name) to keep the RSC payload of library pages small.
 */
export const clientEntries = (list: Entry[]): Entry[] => list.map(({ source: _s, ...e }) => e);
