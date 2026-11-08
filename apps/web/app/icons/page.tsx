import type { Metadata } from "next";
import { IconBrowser } from "@/components/site/icon-browser";
import iconStats from "@/lib/icon-stats.json";

export const metadata: Metadata = { title: "Icons", description: "7,000+ icons in six styles on one 24px grid with a 1.5px live stroke, plus 1,000+ filled. Copy SVG or JSX, or download." };

export default async function IconsPage({ searchParams }: PageProps<"/icons">) {
  const sp = await searchParams;
  return (
    <div className="mx-auto max-w-[1180px] px-4 pt-12 sm:px-6">
      <p className="eyebrow">Library · Icons</p>
      <h1 className="display mt-3 text-[40px] sm:text-[52px]">{iconStats.line.toLocaleString("en-US")} icons. Six styles.</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-mute">Every icon sits on the same 24px grid in six styles: Stroke, Sharp, Solid, Duotone, Twotone and Bulk. Change the stroke, copy SVG or JSX, or download.</p>
      <div className="mt-10">
        <IconBrowser initialQuery={typeof sp.q === "string" ? sp.q : ""} />
      </div>
    </div>
  );
}
