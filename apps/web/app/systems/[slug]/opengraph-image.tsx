import { getSystem, items, systems } from "@/lib/catalog";
import { figmaCount } from "@/lib/figma-library";
import { codeCount } from "@/lib/library";
import { ogImage, OG_SIZE, OG_TYPE } from "@/lib/og";
import { fmt } from "@/lib/seo";

export const alt = "Ingot UI design system";
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export function generateStaticParams() {
  return systems.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getSystem((await params).slug)!;
  const coded = (s.status === "live" ? items.length : 0) + codeCount(s.slug);
  return ogImage({ eyebrow: "Design system", title: s.name + " dashboard design system", sub: s.tagline + ". " + fmt(figmaCount(s.slug)) + " components in Figma, " + fmt(coded) + " in React.", accent: s.accent, chips: [s.tier === "free" ? "Free" : "Pro", s.font, "Figma + React"] });
}
