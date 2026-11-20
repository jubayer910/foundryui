"use client";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { LivePreview } from "./live-preview";

/**
 * Preview and code for a component generated from Figma, laid out like the hand-built workbench:
 * Preview / Code tabs, Desktop / Tablet / Mobile widths, and a stage that fills the column.
 * The preview is the real code's output and reacts to the pointer (hover, tooltips, tabs).
 */
export function GeneratedStage({ slug, src, w, h, thumb, alt, hasCode, interactive, surface }: { slug: string; src: string | null; w: number; h: number; thumb: string; alt: string; hasCode: boolean; interactive?: boolean; surface?: CSSProperties }) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [width, setWidth] = useState<"full" | "tablet" | "mobile">("full");
  const [code, setCode] = useState<string | null>(null);
  const [locked, setLocked] = useState<null | "login_required" | "upgrade_required">(null);
  useEffect(() => {
    if (tab !== "code" || code !== null || locked) return;
    fetch("/api/code?slug=" + encodeURIComponent(slug))
      .then((r) => r.json() as Promise<{ codeUrl?: string; locked?: boolean; reason?: "login_required" | "upgrade_required" }>)
      .then(async (d) => {
        if (d.locked) return setLocked(d.reason ?? "upgrade_required");
        if (!d.codeUrl) throw new Error("no code");
        setCode(await (await fetch(d.codeUrl)).text());
      })
      .catch(() => setCode("// Couldn’t load the code."));
  }, [tab, code, locked, slug]);

  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="mb-2 flex items-center gap-1.5">
        {(hasCode ? (["preview", "code"] as const) : (["preview"] as const)).map((t) => (
          <button key={t} onClick={() => setTab(t)} data-on={tab === t} className="pill capitalize">
            {t}
          </button>
        ))}
        {tab === "preview" && (
          <div className="ml-auto flex gap-1.5 max-sm:hidden" role="group" aria-label="Preview width">
            {(["full", "tablet", "mobile"] as const).map((x) => (
              <button key={x} onClick={() => setWidth(x)} data-on={width === x} className="pill capitalize">
                {x === "full" ? "Desktop" : x}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex min-h-[520px] flex-1 flex-col overflow-hidden rounded-[8px] bg-tile shadow-[inset_0_0_0_1px_var(--color-hair)]" style={tab === "preview" ? surface : undefined}>
        {tab === "preview" ? (
          <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
            <div className="w-full transition-[max-width] duration-300" style={{ maxWidth: width === "full" ? "100%" : width === "tablet" ? 768 : 390 }}>
              {src ? (
                <LivePreview src={src} w={w} h={h} thumb={thumb} alt={alt} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={thumb} alt={alt} width={Math.min(w, 960)} className="mx-auto h-auto max-h-[80vh] w-auto max-w-full rounded-[6px] shadow-[0_1px_3px_rgb(0_0_0/0.08),0_8px_24px_-12px_rgb(0_0_0/0.18)]" />
              )}
            </div>
          </div>
        ) : locked ? (
          <div className="flex flex-1 items-center justify-center bg-white p-8">
            <div className="max-w-sm text-center text-[13px] leading-snug">
              <p className="font-medium">This component is in a Pro system</p>
              <p className="mt-1 text-mute">Its code is included in Pro, Team and Lifetime. The live preview is free to explore.</p>
              <Link href={locked === "login_required" ? "/sign-in?next=/components/" + slug : "/pricing?from=" + slug} className="btn-ink mt-3 inline-flex">
                {locked === "login_required" ? "Log in to see the code" : "See plans"}
              </Link>
            </div>
          </div>
        ) : (
          <pre className="max-h-[680px] flex-1 overflow-auto bg-white p-4 font-fu-mono text-[12.5px] leading-relaxed">
            <code>{code ?? "Loading…"}</code>
          </pre>
        )}
      </div>
      {src && interactive && tab === "preview" && <p className="mt-2 text-[12px] text-mute">Live preview from the React code. Hover the marks, rows and tabs.</p>}
    </div>
  );
}
