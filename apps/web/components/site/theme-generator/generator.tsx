"use client";
import { useDeferredValue, useEffect, useMemo, useState, type ReactNode } from "react";
import { Geist, IBM_Plex_Sans, Source_Sans_3 } from "next/font/google";
import { Icon } from "@/registry/components/icons";
import { DENSITIES, FONTS, NEUTRALS, RADII, DEFAULT_INPUT, fromQuery, generateTheme, normHex, toQuery, toStyleVars, type FontId, type ThemeInput, type Vision } from "@/lib/theme-gen";
import { ThemePreview } from "./preview";
import { ThemeExports, CopyButton } from "./exports";

// Preview fonts load only when the tool loads (the page text never waits for them).
const geist = Geist({ subsets: ["latin"], variable: "--font-tg-geist", preload: false, display: "swap" });
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-tg-plex", preload: false, display: "swap" });
const source = Source_Sans_3({ subsets: ["latin"], variable: "--font-tg-source", preload: false, display: "swap" });
const FONT_VAR: Record<FontId, string> = { inter: "--font-inter", geist: "--font-tg-geist", plex: "--font-tg-plex", source: "--font-tg-source" };

export interface BaseSystem {
  slug: string;
  name: string;
  accent: string;
  font: string;
}

const VISIONS: { id: Vision; label: string }[] = [
  { id: "normal", label: "Normal" },
  { id: "protan", label: "Protanopia" },
  { id: "deutan", label: "Deuteranopia" },
  { id: "tritan", label: "Tritanopia" },
];

/** A group of radio pills: native radios, so arrow keys and screen readers work as expected. */
function Choice<T extends string>({ legend, name, value, options, onChange, hint }: { legend: string; name: string; value: T; options: { id: T; label: ReactNode }[]; onChange: (v: T) => void; hint?: string }) {
  return (
    <fieldset className="min-w-0">
      <legend className="text-[12px] font-medium text-ink">{legend}</legend>
      {hint && <p className="mt-0.5 text-[12px] text-mute">{hint}</p>}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {options.map((o) => (
          <label key={o.id} data-on={value === o.id} className="pill cursor-pointer has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink">
            <input type="radio" name={name} value={o.id} checked={value === o.id} onChange={() => onChange(o.id)} className="sr-only" />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ThemeGenerator({ systems }: { systems: BaseSystem[] }) {
  // Shared links: the state starts from the query string. This component only renders in the
  // browser (ssr: false), so reading location during the first render is safe.
  const [input, setInput] = useState<ThemeInput>(() => {
    const q = new URLSearchParams(window.location.search);
    return q.has("c") ? fromQuery(q) : DEFAULT_INPUT;
  });
  const [hexDraft, setHexDraft] = useState(input.brand);
  const [vision, setVision] = useState<Vision>("normal");
  const link = window.location.origin + "/theme?" + toQuery(input);

  // Keep the URL in step so the address bar is always a shareable link.
  useEffect(() => {
    window.history.replaceState(window.history.state, "", link);
  }, [link]);

  const deferred = useDeferredValue(input);
  const theme = useMemo(() => generateTheme(deferred), [deferred]);
  const vars = useMemo(() => toStyleVars(theme, FONT_VAR[theme.input.font]), [theme]);
  const set = <K extends keyof ThemeInput>(k: K, v: ThemeInput[K]) => setInput((p) => ({ ...p, [k]: v }));
  const setBrand = (hex: string) => {
    setHexDraft(hex);
    const n = normHex(hex);
    if (n) set("brand", n);
  };
  const hexBad = normHex(hexDraft) === null;
  const passed = theme.checks.filter((c) => c.pass).length;
  const exportLink = window.location.origin + "/theme?" + toQuery(theme.input);

  return (
    <div className={geist.variable + " " + plex.variable + " " + source.variable}>
      <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
        {/* Controls */}
        <form className="card flex h-fit flex-col gap-5 p-4 lg:sticky lg:top-5" onSubmit={(e) => e.preventDefault()} aria-label="Theme settings">
          <div className="grid grid-cols-[1fr_auto] items-end gap-2">
            <div className="flex min-w-0 flex-col gap-1.5">
              <label htmlFor="tg-hex" className="text-[12px] font-medium text-ink">Brand colour</label>
              <div className={"field-pill flex h-9 items-center gap-2 rounded-full bg-chip px-3 " + (hexBad ? "shadow-[inset_0_0_0_1px_#c4282e]" : "")}>
                <input
                  id="tg-hex"
                  value={hexDraft}
                  onChange={(e) => setBrand(e.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                  inputMode="text"
                  aria-invalid={hexBad || undefined}
                  aria-describedby={hexBad ? "tg-hex-err" : undefined}
                  className="w-full min-w-0 bg-transparent font-fu-mono text-[13px] outline-none"
                />
              </div>
            </div>
            <label className="relative size-9 shrink-0 cursor-pointer overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgb(0_0_0/0.12)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink" style={{ background: input.brand }}>
              <span className="sr-only">Pick brand colour</span>
              <input type="color" value={input.brand} onChange={(e) => setBrand(e.target.value)} className="absolute inset-0 size-full cursor-pointer opacity-0" />
            </label>
            {hexBad && <p id="tg-hex-err" className="col-span-2 text-[12px] text-[#c4282e]">Use a hex colour such as #2563eb.</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="tg-name" className="text-[12px] font-medium text-ink">Product name</label>
            <div className="field-pill flex h-9 items-center rounded-full bg-chip px-3">
              <input id="tg-name" value={input.name} maxLength={32} onChange={(e) => set("name", e.target.value)} className="w-full min-w-0 bg-transparent text-[13px] outline-none" />
            </div>
          </div>

          <Choice
            legend="Start from"
            name="tg-base"
            hint="Sets the colour and font of an Ingot system."
            value={input.base}
            options={systems.map((s) => ({
              id: s.slug,
              label: (
                <>
                  <span className="size-3 rounded-full" style={{ background: s.accent }} aria-hidden="true" />
                  {s.name}
                </>
              ),
            }))}
            onChange={(slug) => {
              const s = systems.find((x) => x.slug === slug);
              if (!s) return;
              const font = FONTS.find((f) => s.font.toLowerCase().startsWith(f.label.toLowerCase()))?.id ?? input.font;
              setInput((p) => ({ ...p, base: slug, brand: s.accent, font }));
              setHexDraft(s.accent);
            }}
          />
          <Choice legend="Neutral greys" name="tg-neutral" value={input.neutral} options={NEUTRALS} onChange={(v) => set("neutral", v)} />
          <Choice legend="Corners" name="tg-radius" value={input.radius} options={RADII.map((r) => ({ id: r.id, label: r.label + " " + r.px[3] }))} onChange={(v) => set("radius", v)} hint="Card radius in px." />
          <Choice legend="Font" name="tg-font" value={input.font} options={FONTS.map((f) => ({ id: f.id, label: <span style={{ fontFamily: `var(${FONT_VAR[f.id]}), ${f.family}` }}>{f.label}</span> }))} onChange={(v) => set("font", v)} />
          <Choice legend="Density" name="tg-density" value={input.density} options={DENSITIES} onChange={(v) => set("density", v)} />

          <label className="flex cursor-pointer items-start gap-2.5 text-[13px]">
            <input type="checkbox" checked={input.whiteText} onChange={(e) => set("whiteText", e.target.checked)} className="mt-0.5 size-4 accent-ink" />
            <span>
              <span className="font-medium text-ink">White text on buttons</span>
              <span className="block text-[12px] text-mute">If white fails AA on your colour, buttons get the nearest deeper shade.</span>
            </span>
          </label>

          <div className="flex flex-wrap gap-1.5 border-t border-hair pt-4">
            <CopyButton text={exportLink} label="Copy link" />
            <button type="button" className="pill !h-7 !text-[12px]" onClick={() => { setInput(DEFAULT_INPUT); setHexDraft(DEFAULT_INPUT.brand); }}>
              Reset
            </button>
          </div>
        </form>

        {/* Preview + checks */}
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="mr-auto text-[13px] font-medium">Live preview</h2>
            <div role="radiogroup" aria-label="Simulate colour vision" className="no-scrollbar fade-end -m-1 flex max-w-full gap-1.5 overflow-x-auto p-1">
              {VISIONS.map((v) => (
                <button key={v.id} type="button" role="radio" aria-checked={vision === v.id} data-on={vision === v.id} onClick={() => setVision(v.id)} className="pill !h-7 shrink-0 !text-[12px]">
                  {v.label}
                </button>
              ))}
            </div>
          </div>
          <ThemePreview theme={theme} vars={vars} vision={vision} />

          <section aria-labelledby="tg-checks" className="card p-4">
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 id="tg-checks" className="text-[13px] font-medium">Contrast checks</h2>
              <p className="text-[12px] text-mute">
                {passed} of {theme.checks.length} pass WCAG 2.2 AA. Text needs 4.5:1, shapes 3:1.
              </p>
            </div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {theme.checks.map((c) => (
                <li key={c.id} className="flex items-center gap-3 rounded-[8px] bg-tile p-2">
                  <span className="flex h-8 w-11 shrink-0 items-center justify-center rounded-[6px] text-[13px] font-medium shadow-[inset_0_0_0_1px_rgb(0_0_0/0.06)]" style={{ background: c.bg, color: c.fg }} aria-hidden="true">
                    Aa
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12px] text-ink">{c.label}</span>
                    <span className="block font-fu-mono text-[11px] text-mute">{c.fg} on {c.bg}</span>
                  </span>
                  <span className="text-right">
                    <span className="block text-[13px] font-medium tabular-nums">{c.ratio.toFixed(2)}:1</span>
                    <span className={"inline-flex items-center gap-1 text-[11px] font-medium " + (c.pass ? "text-[#0f7d4f]" : "text-[#c4282e]")}>
                      <Icon name={c.pass ? "check" : "x"} size={11} strokeWidth={2} />
                      {c.pass ? (c.min === 3 ? "AA (3:1)" : "AA") : "Fails"}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-[12px] font-medium">Chart colours</span>
              <span className="flex gap-1" aria-label={"Chart colours in order: " + theme.series.join(", ")} role="img">
                {theme.series.map((c) => (
                  <span key={c} className="size-5 rounded-[5px] shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08)]" style={{ background: c }} />
                ))}
              </span>
              <span className="text-[12px] text-mute">Ordered for colour-blind readers: the closest pair is {theme.seriesMinDistance} ΔE apart under protanopia and deuteranopia.</span>
            </div>
            {theme.notes.length > 0 && (
              <ul className="mt-3 flex flex-col gap-1.5 border-t border-hair pt-3">
                {theme.notes.map((n) => (
                  <li key={n} className="text-[12px] leading-relaxed text-ink-2">
                    {n}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>

      <section aria-labelledby="tg-export" className="mt-6">
        <div className="mb-2 flex flex-wrap items-baseline gap-2">
          <h2 id="tg-export" className="text-[13px] font-medium">Export</h2>
          <p className="text-[12px] text-mute">The link in each file brings you back to these settings.</p>
        </div>
        <ThemeExports theme={theme} link={exportLink} />
      </section>
    </div>
  );
}
