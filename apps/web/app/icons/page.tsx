import type { Metadata } from "next";
import { IconBrowser } from "@/components/site/icon-browser";
import iconStats from "@/lib/icon-stats.json";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = { title: "Icons", description: "7,000+ icons in six styles on one 24px grid with a 1.5px live stroke, plus 1,000+ filled. Copy SVG or JSX, or download." };

export default async function IconsPage({ searchParams }: PageProps<"/icons">) {
  const sp = await searchParams;
  return (
    <div className="max-w-[1400px]">
      <PageHead title="Icons" sub={iconStats.line.toLocaleString("en-US") + " icons in six styles on one 24px grid. Copy SVG or JSX, or download."} />
      <div className="mt-5">
        <IconBrowser initialQuery={typeof sp.q === "string" ? sp.q : ""} />
      </div>
    </div>
  );
}
