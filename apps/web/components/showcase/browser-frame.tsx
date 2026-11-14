import type { ReactNode } from "react";

/** A plain browser window around a dashboard preview: one title bar with the address, then the page. */
export function BrowserFrame({ address, children }: { address: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_12px_32px_-16px_rgb(0_0_0/0.18)]">
      <div className="flex h-8 items-center justify-center border-b border-hair bg-tile px-3">
        <span className="max-w-full truncate rounded-full bg-white px-3 py-0.5 font-mono text-[11px] text-mute shadow-[inset_0_0_0_1px_var(--color-hair)]">{address}</span>
      </div>
      {children}
    </div>
  );
}
