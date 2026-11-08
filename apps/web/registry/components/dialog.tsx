"use client";
import { Dialog as D } from "@base-ui/react/dialog";
import type { ReactElement, ReactNode } from "react";
import { Icon } from "./icons";

export interface DialogProps { trigger: ReactElement; title: string; description?: string; children?: ReactNode; footer?: ReactNode }

export function Dialog({ trigger, title, description, children, footer }: DialogProps) {
  return (
    <D.Root>
      <D.Trigger render={trigger} />
      <D.Portal>
        <D.Backdrop className="fixed inset-0 z-40 bg-[rgb(13_13_18/0.32)] transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <D.Popup className="fixed left-1/2 top-1/2 z-50 w-[min(440px,calc(100vw-32px))] -translate-x-1/2 -translate-y-1/2 rounded-fu-lg border border-fu-line bg-fu-surface p-5 shadow-fu-overlay outline-none transition-[opacity,transform] duration-200 data-[ending-style]:scale-[0.97] data-[ending-style]:opacity-0 data-[starting-style]:scale-[0.97] data-[starting-style]:opacity-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <D.Title className="text-base font-medium tracking-[-0.01em] text-fu-ink">{title}</D.Title>
              {description && <D.Description className="mt-1 text-[13px] leading-relaxed text-fu-muted">{description}</D.Description>}
            </div>
            <D.Close aria-label="Close" className="-mr-1 -mt-1 rounded-fu-xs p-1 text-fu-muted hover:bg-fu-hover hover:text-fu-ink">
              <Icon name="x" size={16} />
            </D.Close>
          </div>
          {children && <div className="mt-4">{children}</div>}
          {footer && <div className="mt-5 flex justify-end gap-2">{footer}</div>}
        </D.Popup>
      </D.Portal>
    </D.Root>
  );
}
