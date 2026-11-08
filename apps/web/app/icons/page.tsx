import type { Metadata } from "next";
import Link from "next/link";
import { IconGrid } from "@/components/site/icon-grid";

export const metadata: Metadata = { title: "Icons", description: "Foundry Icons: original 24px line icons on a keyline grid, 1.5px stroke, in Line, Fill and Duo styles." };

export default function IconsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <h1 className="text-3xl font-medium tracking-[-0.03em] text-fu-ink">Foundry Icons</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fu-muted">
        Original icons drawn on a 24px grid with a 20px live area, standard keylines and a 1.5px stroke. Click an icon to copy its SVG. The full library (about 6,000 icons in Line, Fill and Duo) is in production; these are the first approved samples.
      </p>
      <div className="mt-8">
        <IconGrid />
      </div>
      <p className="mt-6 text-[13px] text-fu-muted">
        In code: <Link href="/components/icons" className="font-medium text-fu-ink underline underline-offset-2">Foundry Icons component</Link> · <code className="font-fu-mono text-xs">{'<Icon name="invoice-add" />'}</code>
      </p>
    </div>
  );
}
