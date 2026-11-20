import Link from "next/link";
import type { Specs } from "@/lib/component-specs";

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const ICON_NAME: Record<string, string> = { X: "Close (X)" };
const list = (xs: (string | number)[], unit = "") => xs.map((x) => x + unit).join(", ");
const WEIGHT: Record<number, string> = { 300: "Light", 400: "Regular", 500: "Medium", 600: "Semibold", 700: "Bold" };

/** Server-rendered facts from this component's own code, so each page says what is actually inside it. */
export function ComponentSpecs({ s, name, w, h, system }: { s: Specs; name: string; w: number; h: number; system: string }) {
  const icons = s.icons.map((i) => ICON_NAME[i] ?? i);
  const rows: [string, React.ReactNode][] = [
    ["Component", <code key="c" className="font-fu-mono text-[12px]">{"<" + s.fn + " />"}</code>],
    ["Size", Math.round(w) + " × " + Math.round(h) + " px"],
    ["Icons", icons.length ? <>{list(icons)} <span className="text-mute">from <Link href="/icons" className="underline underline-offset-2">Ingot Icons</Link></span></> : "None"],
    ["Type", (s.fonts.length ? list(s.fonts) : "System font") + (s.sizes.length ? ", " + list(s.sizes, "px") : "") + (s.weights.length ? ", " + s.weights.map((x) => WEIGHT[x] ?? x).join(" and ") : "")],
    [
      "Colours",
      <span key="col" className="inline-flex flex-wrap justify-end gap-x-2.5 gap-y-1">
        {s.colors.map((c) => (
          <span key={c} className="inline-flex items-center gap-1 font-fu-mono text-[12px]">
            <span className="size-3 rounded-[3px] shadow-[inset_0_0_0_1px_var(--color-hair-2)]" style={{ background: c }} aria-hidden="true" />
            {c}
          </span>
        ))}
      </span>,
    ],
    ["Corner radius", s.radii.length ? list(s.radii, "px") : "Square"],
    ["Code", s.lines + " lines of TypeScript, React only, inline styles, icons included"],
  ];
  const file = kebab(s.fn);
  return (
    <section className="mt-6" aria-labelledby="specs">
      <h2 id="specs" className="text-[13px] font-medium">Specs</h2>
      <p className="mt-1 max-w-3xl text-[13px] leading-snug text-mute">
        {name} is {s.lines} lines of React with {icons.length ? icons.length + " Ingot icon" + (icons.length > 1 ? "s" : "") : "no icons"}, set in {s.fonts.length ? list(s.fonts) : "the system font"}. It needs no packages beyond React, so it works in Next.js, Vite or Remix as pasted, and its colours can be swapped for your {system} tokens.
      </p>
      {/* two columns on wide screens: the facts table and the usage snippet side by side, no empty half-page */}
      <div className="mt-3 grid gap-x-8 gap-y-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <dl className="border-t border-hair">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 border-b border-hair py-1.5 text-[13px]">
              <dt className="shrink-0 text-mute">{k}</dt>
              <dd className="text-right">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-1.5">
          <p className="text-[12px] text-mute">Use it</p>
          <pre className="overflow-x-auto rounded-[8px] bg-tile p-3 font-fu-mono text-[12px] leading-relaxed">{`import { ${s.fn} } from "./${file}";\n\nexport default function Page() {\n  return <${s.fn} />;\n}`}</pre>
        </div>
      </div>
    </section>
  );
}
