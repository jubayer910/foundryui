import { getItem, getSystem } from "@/lib/catalog";
import { entries, figmaQA, getFigmaItem } from "@/lib/library";
import { ogImage, ogVisual, OG_SIZE, OG_TYPE } from "@/lib/og";

export const alt = "Ingot UI dashboard component";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const it = getItem(slug);
  const f = it ? undefined : getFigmaItem(slug);
  const sys = getSystem(it ? "loopo" : (f?.system ?? "loopo"));
  const name = it?.name ?? f?.name ?? "Component";
  const category = entries.find((e) => e.slug === slug)?.category ?? "Component";
  const code = !!it || !!figmaQA(slug);
  const visual = await ogVisual(f?.thumb);
  return ogImage({ visual, eyebrow: category, title: name, sub: category === "Templates" ? `A full dashboard screen from the ${sys?.name} design system.` : `From the ${sys?.name} design system, in ${category}.`, accent: sys?.accent, chips: [code ? "React + Tailwind" : "Figma", sys?.tier === "free" ? "Free" : "Pro", sys?.name ?? ""] });
}
