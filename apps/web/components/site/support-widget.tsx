"use client";
import { Suspense, lazy, useCallback, useRef, useState } from "react";
import { Icon } from "@/registry/components/icons";

// The panel (matcher UI, ticket form) loads on first open or hover, so first paint only pays for this button.
const load = () => import("@/lib/support/widget-panel");
const Panel = lazy(load);

/** Support launcher, bottom right on every page. Answers come from our own KB matcher, then a ticket. */
export function SupportWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    btn.current?.focus();
  }, []);

  return (
    <>
      {mounted && (
        <div hidden={!open}>
          <Suspense fallback={<div className="fixed bottom-[calc(72px+env(safe-area-inset-bottom))] right-4 z-50 h-[120px] w-[min(360px,calc(100vw-32px))] rounded-[14px] bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_12px_40px_rgb(0_0_0/0.12)]" />}>
            <Panel open={open} onClose={close} />
          </Suspense>
        </div>
      )}
      <button
        ref={btn}
        type="button"
        onClick={() => {
          setMounted(true);
          setOpen((o) => !o);
        }}
        onPointerEnter={() => void load()}
        onFocus={() => void load()}
        aria-expanded={open}
        aria-controls="support-widget-panel"
        aria-label={open ? "Close help" : "Open help"}
        className="fixed bottom-[calc(16px+env(safe-area-inset-bottom))] right-[calc(16px+env(safe-area-inset-right))] z-50 inline-flex h-11 items-center gap-2 rounded-full bg-ink pl-3.5 pr-4 text-[13px] font-medium text-white shadow-[0_6px_20px_rgb(0_0_0/0.18)] transition-[background-color,transform] duration-150 ease-out hover:bg-[#2a2a2a] active:scale-[0.97] motion-reduce:transition-none print:hidden"
      >
        <Icon name={open ? "x" : "chat"} size={18} />
        <span>{open ? "Close" : "Help"}</span>
      </button>
    </>
  );
}
