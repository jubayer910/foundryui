"use client";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/registry/components/icons";
import { toCss, toJson, toPrompt, toTailwind, type Theme } from "@/lib/theme-gen";

type Tab = "css" | "tailwind" | "json" | "prompt";
const TABS: { id: Tab; label: string }[] = [
  { id: "css", label: "CSS variables" },
  { id: "tailwind", label: "Tailwind v4" },
  { id: "json", label: "JSON tokens" },
  { id: "prompt", label: "Prompt for your agent" },
];

export function CopyButton({ text, label = "Copy", className = "" }: { text: string; label?: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() =>
        navigator.clipboard.writeText(text).then(() => {
          setDone(true);
          setTimeout(() => setDone(false), 1500);
        })
      }
      className={"pill !h-7 shrink-0 !text-[12px] " + className}
    >
      <Icon name={done ? "check" : "copy"} size={13} /> {done ? "Copied" : label}
      <span className="sr-only" aria-live="polite">{done ? "Copied to clipboard" : ""}</span>
    </button>
  );
}

/** Export tabs: the same theme as a CSS token file, a Tailwind v4 @theme block, DTCG JSON, or an agent prompt. */
export function ThemeExports({ theme, link }: { theme: Theme; link: string }) {
  const [tab, setTab] = useState<Tab>("css");
  const [fw, setFw] = useState<"next" | "vite">("next");
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const file = { css: `styles/ingot/${theme.slug}.css`, tailwind: `${theme.slug}.theme.css`, json: `${theme.slug}.tokens.json`, prompt: "Paste into Claude Code, Cursor, Codex or VS Code" }[tab];
  const code = tab === "css" ? toCss(theme, link) : tab === "tailwind" ? toTailwind(theme, link) : tab === "json" ? toJson(theme) : toPrompt(theme, link, fw);

  const onKey = (e: KeyboardEvent, i: number) => {
    const n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? TABS.length - 1 : null;
    if (n === null) return;
    e.preventDefault();
    const k = (n + TABS.length) % TABS.length;
    setTab(TABS[k].id);
    refs.current[k]?.focus();
  };

  return (
    <div className="card overflow-hidden">
      <div role="tablist" aria-label="Export format" className="no-scrollbar fade-end flex gap-1.5 overflow-x-auto border-b border-hair p-2">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={id + t.id}
            aria-selected={tab === t.id}
            aria-controls={id + "panel"}
            tabIndex={tab === t.id ? 0 : -1}
            data-on={tab === t.id}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => onKey(e, i)}
            className="pill shrink-0"
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={id + "panel"} aria-labelledby={id + tab} tabIndex={0} className="outline-none focus-visible:ring-2 focus-visible:ring-ink">
        <div className="flex flex-wrap items-center gap-2 border-b border-hair px-3 py-2">
          <span className="min-w-0 flex-1 truncate font-fu-mono text-[12px] text-mute">{file}</span>
          {tab === "prompt" && (
            <div role="radiogroup" aria-label="Framework" className="flex gap-1">
              {(["next", "vite"] as const).map((f) => (
                <button key={f} type="button" role="radio" aria-checked={fw === f} data-on={fw === f} onClick={() => setFw(f)} className="pill !h-7 !text-[12px]">
                  {f === "next" ? "Next.js" : "Vite"}
                </button>
              ))}
            </div>
          )}
          <CopyButton text={code} label={tab === "prompt" ? "Copy prompt" : "Copy file"} />
        </div>
        <pre className="max-h-[420px] overflow-auto p-3 font-fu-mono text-[12px] leading-relaxed text-ink-2">{code}</pre>
      </div>
    </div>
  );
}
