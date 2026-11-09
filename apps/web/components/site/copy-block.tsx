"use client";
import { useState } from "react";
import { Icon } from "@/registry/components/icons";

/** Code block with a copy button. Tabs when several variants are given (e.g. one per AI client). */
export function CopyBlock({ blocks }: { blocks: { label?: string; code: string }[] }) {
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const b = blocks[i];
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-hair px-2 py-1.5">
        {blocks.length > 1 &&
          blocks.map((x, k) => (
            <button key={x.label} onClick={() => setI(k)} data-on={k === i} className="pill !h-6 shrink-0 !text-[12px]">
              {x.label}
            </button>
          ))}
        {blocks.length === 1 && b.label && <span className="px-1 text-[12px] text-mute">{b.label}</span>}
        <button
          onClick={() =>
            navigator.clipboard.writeText(b.code).then(() => {
              setDone(true);
              setTimeout(() => setDone(false), 1500);
            })
          }
          className="pill ml-auto !h-6 shrink-0 !text-[12px]"
        >
          <Icon name={done ? "check" : "copy"} size={12} /> {done ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-3 font-fu-mono text-[12px] leading-relaxed">{b.code}</pre>
    </div>
  );
}
