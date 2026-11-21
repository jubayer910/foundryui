"use client";
import { useState, type ReactNode } from "react";
import { Icon } from "@/registry/components/icons";

/** Code block with a copy button. Tabs when several variants are given (e.g. one per AI client). */
export function CopyBlock({ blocks, wrap = false }: { blocks: { label?: string; code: string; icon?: ReactNode }[]; wrap?: boolean }) {
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const b = blocks[i];
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-hair px-2 py-1.5">
        <div className="no-scrollbar fade-end -m-1 flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto p-1">
          {blocks.length > 1 &&
            blocks.map((x, k) => (
              <button key={x.label} onClick={() => setI(k)} data-on={k === i} aria-pressed={k === i} className="pill !h-6 shrink-0 !text-[12px]">
                {x.icon}
                {x.label}
              </button>
            ))}
          {blocks.length === 1 && b.label && <span className="flex items-center gap-1.5 px-1 text-[12px] text-mute">{b.icon}{b.label}</span>}
        </div>
        <button
          onClick={() =>
            navigator.clipboard.writeText(b.code).then(() => {
              setDone(true);
              setTimeout(() => setDone(false), 1500);
            })
          }
          className="pill !h-6 shrink-0 !text-[12px]"
        >
          <Icon name={done ? "check" : "copy"} size={12} /> {done ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className={"p-3 font-fu-mono text-[12px] leading-relaxed " + (wrap ? "whitespace-pre-wrap break-all" : "overflow-x-auto")}>{b.code}</pre>
    </div>
  );
}
