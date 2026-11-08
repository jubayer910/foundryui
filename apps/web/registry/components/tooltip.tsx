"use client";
import { Tooltip as T } from "@base-ui/react/tooltip";
import type { ReactElement, ReactNode } from "react";

export interface TooltipProps { content: ReactNode; children: ReactElement; side?: "top" | "bottom" | "left" | "right" }

export function Tooltip({ content, children, side = "top" }: TooltipProps) {
  return (
    <T.Provider delay={250}>
      <T.Root>
        <T.Trigger render={children} />
        <T.Portal>
          <T.Positioner side={side} sideOffset={8} className="z-50">
            <T.Popup className="origin-[var(--transform-origin)] rounded-fu-sm border border-fu-line bg-fu-surface px-2.5 py-1.5 text-xs font-medium text-fu-ink shadow-fu-overlay transition-[opacity,transform] duration-150 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
              {content}
            </T.Popup>
          </T.Positioner>
        </T.Portal>
      </T.Root>
    </T.Provider>
  );
}
