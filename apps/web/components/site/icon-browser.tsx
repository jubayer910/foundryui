"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/registry/components/icons";

type Meta = { n: string; c: string; t: string[]; s: 1 | 2 };
type Style = "line" | "fill";
const PAGE = 240;

function svgOf(name: string, body: string, style: Style, stroke: number) {
  return style === "line"
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">${body}</svg>`;
}
const jsxName = (n: string) => n.replace(/(^|-)([a-z0-9])/g, (_, __, c: string) => c.toUpperCase());

export function IconBrowser({ initialQuery = "" }: { initialQuery?: string }) {
  const [meta, setMeta] = useState<Meta[] | null>(null);
  const [bodies, setBodies] = useState<Record<Style, Record<string, string>>>({ line: {}, fill: {} });
  const [q, setQ] = useState(initialQuery);
  const [cat, setCat] = useState("All");
  const [style, setStyle] = useState<Style>("line");
  const [stroke, setStroke] = useState(1.5);
  const [limit, setLimit] = useState(PAGE);
  const [sel, setSel] = useState<string | null>(null);
  const [note, setNote] = useState<{ text: string; login?: boolean } | null>(null);

  useEffect(() => {
    Promise.all([fetch("/icons/index.json").then((r) => r.json()), fetch("/icons/line.json").then((r) => r.json())]).then(([m, l]) => {
      setMeta(m);
      setBodies((b) => ({ ...b, line: l }));
    });
  }, []);
  useEffect(() => {
    if (style === "fill" && !Object.keys(bodies.fill).length) fetch("/icons/fill.json").then((r) => r.json()).then((f) => setBodies((b) => ({ ...b, fill: f })));
  }, [style, bodies.fill]);
  useEffect(() => setLimit(PAGE), [q, cat, style]);

  const cats = useMemo(() => {
    const m = new Map<string, number>();
    meta?.forEach((i) => m.set(i.c, (m.get(i.c) ?? 0) + 1));
    return [...m].sort((a, b) => b[1] - a[1]);
  }, [meta]);

  const shown = useMemo(() => {
    if (!meta) return [];
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return meta.filter((i) => (style === "line" || i.s === 2) && (cat === "All" || i.c === cat) && words.every((w) => i.n.includes(w) || i.t.some((t) => t.includes(w))));
  }, [meta, q, cat, style]);

  const current = sel ? meta?.find((i) => i.n === sel) : null;

  async function act(action: "copy_code" | "download_svg", kind: "svg" | "jsx") {
    if (!current) return;
    const body = bodies[style][current.n];
    if (!body) return;
    const r = await fetch("/api/actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ slug: "icon:" + current.n, action }) });
    const res = await r.json().catch(() => ({}));
    if (r.status === 403) return setNote({ text: "You've used your 5 free actions. Create a free account to keep copying.", login: true });
    if (!r.ok) return setNote({ text: "Something went wrong. Try again." });
    const svg = svgOf(current.n, body, style, stroke);
    if (action === "download_svg") {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
      a.download = current.n + (style === "fill" ? "-fill" : "") + ".svg";
      a.click();
      setNote({ text: "Downloaded " + a.download + (res.remaining != null ? ` · ${res.remaining} free actions left` : "") });
      return;
    }
    const text = kind === "jsx" ? `import { ${jsxName(current.n)} } from "foundryui-icons/react";\n\n<${jsxName(current.n)} size={20} strokeWidth={${stroke}} />` : svg;
    await navigator.clipboard.writeText(text).catch(() => {});
    setNote({ text: (kind === "jsx" ? "JSX" : "SVG") + " copied" + (res.remaining != null ? ` · ${res.remaining} free actions left` : "") });
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
      <aside className="min-w-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
        <p className="eyebrow mb-3 hidden lg:block">Categories</p>
        <ul className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
          {[["All", meta?.length ?? 0] as [string, number], ...cats].map(([c, n]) => (
            <li key={c} className="shrink-0">
              <button onClick={() => setCat(c)} className={"flex h-8 w-full items-center justify-between gap-4 rounded-[8px] px-2.5 text-left text-[13px] " + (cat === c ? "bg-card text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)]" : "text-ink-2 hover:bg-wash")}>
                {c}
                <span className={"rounded-[5px] px-1.5 font-fu-mono text-[10px] " + (cat === c ? "bg-ink text-white" : "text-faint")}>{n.toLocaleString("en-US")}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="min-w-0">
        <div className="sticky top-14 z-10 -mx-1 mb-4 flex flex-col gap-3 bg-paper/90 px-1 py-2 backdrop-blur sm:flex-row sm:items-center">
          <label className="flex h-11 flex-1 items-center gap-2.5 rounded-[12px] bg-card px-3.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] focus-within:shadow-[inset_0_0_0_1.5px_var(--color-ink)]">
            <Icon name="search" size={16} className="text-mute" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Search ${meta ? meta.length.toLocaleString("en-US") : "7,000+"} icons, e.g. invoice, upload, chart`} className="w-full bg-transparent text-[14px] outline-none placeholder:text-faint" />
          </label>
          <div className="flex h-11 items-center gap-0.5 rounded-[12px] bg-card p-1 shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
            {(["line", "fill"] as const).map((s) => (
              <button key={s} onClick={() => setStyle(s)} className={"h-9 rounded-[9px] px-3 text-[13px] capitalize " + (style === s ? "bg-ink text-white" : "text-ink-2 hover:bg-wash")}>
                {s}
              </button>
            ))}
          </div>
          {style === "line" && (
            <label className="flex h-11 items-center gap-2 rounded-[12px] bg-card px-3 shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
              <span className="font-fu-mono text-[11px] text-mute">Stroke</span>
              <input type="range" min={1} max={2.5} step={0.25} value={stroke} onChange={(e) => setStroke(Number(e.target.value))} className="w-20 accent-[var(--color-ink)]" aria-label="Stroke width" />
              <span className="w-7 font-fu-mono text-[11px] text-ink">{stroke}</span>
            </label>
          )}
        </div>

        <p className="mb-3 font-fu-mono text-[11px] text-mute">{meta ? `${shown.length.toLocaleString("en-US")} icons` : "Loading the library…"}</p>

        <div className="hairgrid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-10">
          {shown.slice(0, limit).map((i) => {
            const body = bodies[style][i.n];
            return (
              <button key={i.n} title={i.n} onClick={() => setSel(i.n)} className={"group flex aspect-square flex-col items-center justify-center gap-2 text-ink transition-colors hover:bg-card " + (sel === i.n ? "!bg-card shadow-[inset_0_0_0_1.5px_var(--color-ink)]" : "")}>
                {body ? <span className="size-6" dangerouslySetInnerHTML={{ __html: svgOf(i.n, body, style, stroke) }} /> : <span className="size-6" />}
                <span className="w-full truncate px-1.5 text-center font-fu-mono text-[9.5px] text-faint group-hover:text-ink-2">{i.n}</span>
              </button>
            );
          })}
        </div>
        {shown.length > limit && (
          <div className="mt-6 flex justify-center">
            <button onClick={() => setLimit((l) => l + PAGE * 2)} className="btn-line">
              Show more · {(shown.length - limit).toLocaleString("en-US")} left
            </button>
          </div>
        )}
        <p className="mt-8 text-[12px] leading-relaxed text-mute">
          Drawn to one spec from open-licence sets (Tabler, Lucide, Iconoir), free for commercial use. <Link href="/icons/LICENSES.md" className="underline underline-offset-2">Licences</Link>
        </p>
      </div>

      {current && (
        <div className="fixed inset-x-3 bottom-3 z-40 rounded-[16px] bg-card p-4 shadow-[0_0_0_1px_var(--color-hair-2),0_24px_48px_-12px_rgb(14_16_20/0.25)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[340px]">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-fu-mono text-[12px] text-ink">{current.n}</p>
              <p className="mt-0.5 text-[12px] text-mute">
                {current.c} · {current.s === 2 ? "Line + Fill" : "Line"}
              </p>
            </div>
            <button onClick={() => (setSel(null), setNote(null))} aria-label="Close" className="flex size-7 items-center justify-center rounded-[8px] text-mute hover:bg-wash hover:text-ink">
              <Icon name="x" size={16} />
            </button>
          </div>
          <div className="paper-grid my-4 flex h-36 items-center justify-center rounded-[12px] bg-paper shadow-[inset_0_0_0_1px_var(--color-hair)]">
            {bodies[style][current.n] && <span className="size-16 text-ink [&>svg]:size-16" dangerouslySetInnerHTML={{ __html: svgOf(current.n, bodies[style][current.n], style, stroke) }} />}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => act("copy_code", "svg")} className="btn-ink !h-9 !px-2 !text-[13px]">
              <Icon name="copy" size={14} /> SVG
            </button>
            <button onClick={() => act("copy_code", "jsx")} className="btn-line !h-9 !px-2 !text-[13px]">
              <Icon name="code" size={14} /> JSX
            </button>
            <button onClick={() => act("download_svg", "svg")} className="btn-line !h-9 !px-2 !text-[13px]">
              <Icon name="download" size={14} /> File
            </button>
          </div>
          {note && (
            <p className="mt-3 text-[12px] text-ink-2">
              {note.text}{" "}
              {note.login && (
                <Link href="/sign-up" className="font-medium text-ink underline underline-offset-2">
                  Sign up free
                </Link>
              )}
            </p>
          )}
          {current.t.length > 0 && <p className="mt-3 truncate font-fu-mono text-[10px] text-faint">{current.t.join(" , ")}</p>}
        </div>
      )}
    </div>
  );
}
