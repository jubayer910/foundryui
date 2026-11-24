import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { IconBrowser } from "@/components/site/icon-browser";
import iconStats from "@/lib/icon-stats.json";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = pageMeta({ title: "Free icons for dashboards: " + iconStats.line.toLocaleString("en-US") + " SVG and React icons", description: iconStats.line.toLocaleString("en-US") + " icons in six styles on one 24px grid with a 1.5px stroke. Stroke styles are free; every style comes with Pro. Copy SVG or JSX, download, or install the ingotui-icons React package.", path: "/icons", image: "/icons/opengraph-image" });

export default function IconsPage() {
  return (
    <div className="max-w-[1400px]">
      <PageHead edit="icons" title="Icons" sub={iconStats.line.toLocaleString("en-US") + " icons in six styles on one 24px grid. Stroke and Sharp are free; Solid, Duotone, Twotone and Bulk come with Pro."} />
      <div className="mt-5">
        <IconBrowser />
      </div>
    </div>
  );
}
