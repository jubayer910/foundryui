"use client";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/registry/components/icons";

// The panel (chat, cards, ticket form) loads on first open, hover or focus, so first paint only pays for this button.
const load = () => import("@/lib/support/widget-panel");
const Panel = lazy(load);

const OPEN_KEY = "ingot-help:open";

/**
 * Help launcher, bottom right on every public page. Answers come from our own assistant engine
 * (POST /api/support/chat), then a person through a ticket. The open state survives navigation in this tab.
 */
export function SupportWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lift, setLift] = useState(0);
  const btn = useRef<HTMLButtonElement>(null);

  // reopen after a full page load if the visitor left it open
  useEffect(() => {
    try {
      if (sessionStorage.getItem(OPEN_KEY) === "1") {
        /* eslint-disable react-hooks/set-state-in-effect -- one-time restore from sessionStorage */
        setMounted(true);
        setOpen(true);
        /* eslint-enable react-hooks/set-state-in-effect */
      }
    } catch {}
  }, []);

  // phones: sit above the cookie banner instead of covering it
  useEffect(() => {
    const measure = () => {
      const el = document.querySelector<HTMLElement>('[role="region"][aria-label="Cookie consent"]');
      setLift(el && window.innerWidth < 640 ? Math.round(el.getBoundingClientRect().height) + 12 : 0);
    };
    measure();
    const t = setTimeout(measure, 400);
    const later = () => requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    window.addEventListener("ingot:consent-change", later);
    window.addEventListener("ingot:cookie-settings", later);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
      window.removeEventListener("ingot:consent-change", later);
      window.removeEventListener("ingot:cookie-settings", later);
    };
  }, []);

  const set = useCallback((v: boolean) => {
    setOpen(v);
    try {
      sessionStorage.setItem(OPEN_KEY, v ? "1" : "0");
    } catch {}
  }, []);
  const hide = useCallback(() => {
    set(false);
    btn.current?.focus();
  }, [set]);

  return (
    <>
      {mounted && (
        <div hidden={!open}>
          <Suspense fallback={<div className="fixed bottom-[calc(76px+env(safe-area-inset-bottom))] right-4 z-[60] h-[160px] w-[min(400px,calc(100vw-32px))] rounded-[16px] bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_12px_40px_rgb(0_0_0/0.12)]" />}>
            <Panel open={open} onMinimise={hide} onClose={hide} />
          </Suspense>
        </div>
      )}
      <button
        ref={btn}
        type="button"
        onClick={() => {
          setMounted(true);
          set(!open);
        }}
        onPointerEnter={() => void load()}
        onFocus={() => void load()}
        aria-expanded={open}
        aria-controls="support-widget-panel"
        aria-label={open ? "Minimise help" : "Open help"}
        style={lift ? { bottom: `calc(${lift}px + env(safe-area-inset-bottom))` } : undefined}
        className={
          "fixed bottom-[calc(16px+env(safe-area-inset-bottom))] right-[calc(16px+env(safe-area-inset-right))] z-50 inline-flex h-11 items-center gap-2 rounded-full bg-ink pl-3.5 pr-4 text-[13px] font-medium text-white shadow-[0_6px_20px_rgb(0_0_0/0.18)] transition-[background-color,transform,bottom] duration-150 ease-out hover:bg-[#2a2a2a] active:scale-[0.97] motion-reduce:transition-none print:hidden " +
          (open ? "max-sm:hidden" : "")
        }
      >
        <Icon name={open ? "x" : "chat"} size={18} />
        <span>{open ? "Close" : "Help"}</span>
      </button>
    </>
  );
}
