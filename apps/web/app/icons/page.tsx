import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { IconBrowser } from "@/components/site/icon-browser";
import iconStats from "@/lib/icon-stats.json";
import { PageHead } from "@/components/site/page-head";

export async function generateMetadata({ searchParams }: PageProps<"/icons">): Promise<Metadata> {
  const q = (await searchParams).q;
  return pageMeta({ title: "Free icons for dashboards: " + iconStats.line.toLocaleString("en-US") + " SVG and React icons", description: iconStats.line.toLocaleString("en-US") + " icons in six styles on one 24px grid with a 1.5px stroke. Copy SVG or JSX, download, or install the ingotui-icons React package.", path: "/icons", noindex: typeof q === "string" && !!q });
}

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
