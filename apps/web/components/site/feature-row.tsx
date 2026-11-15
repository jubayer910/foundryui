import Link from "next/link";
import { FIGMA_LIBRARY_COUNT, items } from "@/lib/catalog";
import { CODED_TOTAL, codeCount } from "@/lib/library";
import { IlloTile } from "./illo";

const fmt = (n: number) => n.toLocaleString("en-US");

/**
 * What you get, in four columns: one free tier and three Pro tiers, each with its real count.
 * Hairlines top and bottom with corner marks, dividers between columns; hovering (or focusing) a column
 * makes it the active one, and the second column is active by default.
 */
export function FeatureRow() {
  const loopo = items.length + codeCount("loopo");
  const cols: { href: string; scene: string; h: string; tier: "Free" | "Pro"; b: string }[] = [
    { href: "/systems/loopo", scene: "seed", h: "Free system", tier: "Free", b: `Loopo: ${fmt(loopo)} components in code, free forever` },
    { href: "/components", scene: "bars", h: "Components & charts", tier: "Pro", b: `${fmt(CODED_TOTAL)} in React, each checked against Figma` },
    { href: "/templates", scene: "screen", h: "Dashboard templates", tier: "Pro", b: "Full screens for six products, more added soon" },
    { href: "/systems", scene: "frames", h: "Figma library", tier: "Pro", b: `${fmt(FIGMA_LIBRARY_COUNT)} components with variables` },
  ];
  return (
    <section aria-label="What you get" className="feat-row relative mt-6">
      <span aria-hidden="true" className="feat-corner left-0 top-0" />
      <span aria-hidden="true" className="feat-corner right-0 top-0" />
      <span aria-hidden="true" className="feat-corner bottom-0 left-0" />
      <span aria-hidden="true" className="feat-corner bottom-0 right-0" />
      <ul className="grid grid-cols-2 border-y border-hair lg:grid-cols-4">
        {cols.map((c) => (
          <li key={c.h} className="feat">
            <Link href={c.href} className="feat-link">
              <span className="feat-illo">
                <IlloTile scene={c.scene} label="" className="h-[96px] w-[148px]" />
              </span>
              <span className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                <span className="text-[14px] font-medium tracking-[-0.01em] text-ink">{c.h}</span>
                <span className={"feat-badge " + (c.tier === "Free" ? "feat-badge-free" : "feat-badge-pro")}>{c.tier.toUpperCase()}</span>
              </span>
              <span className="mt-1 block text-[12.5px] leading-snug text-mute">{c.b}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
