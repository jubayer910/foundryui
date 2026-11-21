"use client";
import { useState } from "react";
import { Icon } from "@/registry/components/icons";

/** One-line install command with a copy button, as in the hand-built workbench sidebar. */
export function InstallLine({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="card flex items-center gap-2 p-1.5 pl-3">
      <code className="min-w-0 flex-1 truncate font-fu-mono text-[12px]" title={cmd}>{cmd}</code>
      <button
        className="pill !h-7"
        aria-label={copied ? "Copied" : "Copy install command"}
        onClick={() => navigator.clipboard.writeText(cmd).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }).catch(() => {})}
      >
        <Icon name={copied ? "check" : "copy"} size={13} />
      </button>
    </div>
  );
}
