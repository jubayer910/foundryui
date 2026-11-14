"use client";
import { useState } from "react";
import { Icon } from "@/registry/components/icons";

/** Copy button for the "Build it with your agent" prompt. The prompt text itself is server-rendered next to it. */
export function CopyPrompt({ text, label = "Copy prompt" }: { text: string; label?: string }) {
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
      className="pill !h-7 shrink-0 !text-[12px]"
    >
      <Icon name={done ? "check" : "copy"} size={12} /> <span aria-live="polite">{done ? "Copied" : label}</span>
    </button>
  );
}
