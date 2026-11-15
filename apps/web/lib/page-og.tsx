import { entries } from "./library";
import { ogImage, ogVisual } from "./og";

/** Link preview for a site page: the owner's card, optionally with one real library picture in it. */
export async function pageOgImage(o: { title: string; sub?: string; chips?: string[]; pick?: { system?: string; category?: string; name?: RegExp } }) {
  let visual: string | null = null;
  if (o.pick) {
    const { system, category, name } = o.pick;
    const list = entries.filter((e) => e.kind === "figma" && (!system || e.system === system) && (!category || e.category === category));
    const hit = (name ? list.find((e) => name.test(e.name)) : undefined) ?? list[0];
    visual = await ogVisual(hit?.thumb);
  }
  return ogImage({ title: o.title, sub: o.sub, chips: o.chips, visual });
}
