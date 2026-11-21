"use client";
import { useEffect, useId, useRef, useState, type PointerEvent as RPointerEvent, type ReactNode, type RefObject } from "react";
import { AIcon } from "./admin-icons";

/**
 * Phone sheets (app/admin/DESIGN.md, "Mobile"). A sheet is a modal dialog that rises from the bottom edge: drag
 * handle, title, close button, a scrolling body and an optional sticky footer (Apply / Clear). Esc and the
 * backdrop close it, a downward swipe on the handle closes it, Tab stays inside, focus returns to the opener.
 * While any sheet is open <html data-sheet> is set, which hides the bottom tab bar and locks page scroll.
 */

let openSheets = 0;
/** Marks the document while a sheet (or drawer) is open: hides the bottom bar, stops the page behind from scrolling. */
export function useSheetLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const root = document.documentElement;
    openSheets++;
    root.dataset.sheet = "open";
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      openSheets = Math.max(0, openSheets - 1);
      if (!openSheets) delete root.dataset.sheet;
      document.body.style.overflow = prev;
    };
  }, [active]);
}

const FOCUSABLE = "a[href],button:not([disabled]),input:not([type=hidden]):not([disabled]),select:not([disabled]),textarea:not([disabled]),summary,[tabindex]:not([tabindex='-1'])";

/** Keeps Tab inside `ref` while active, runs onEscape on Escape, and gives focus back to the opener afterwards. */
export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean, onEscape: () => void, initial?: "first" | "panel") {
  const esc = useRef(onEscape);
  useEffect(() => {
    esc.current = onEscape;
  });
  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    const before = document.activeElement as HTMLElement | null;
    const list = () => [...(el?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])].filter((x) => x.getClientRects().length > 0);
    if (initial === "first") (list()[0] ?? el)?.focus({ preventScroll: true });
    else el?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        esc.current();
      } else if (e.key === "Tab" && el) {
        const f = list();
        if (!f.length) return;
        if (e.shiftKey && (document.activeElement === f[0] || document.activeElement === el)) {
          e.preventDefault();
          f[f.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
          e.preventDefault();
          f[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (before?.isConnected) before.focus({ preventScroll: true });
    };
  }, [active, ref, initial]);
}

/**
 * Pointer handlers for a sheet's handle: the panel follows the finger downwards and closes past 80px (or on a
 * quick flick); otherwise it springs back. Upward drags call `onUp` (expand) when given.
 */
export function useSwipeDown(panel: RefObject<HTMLElement | null>, onClose: () => void, onUp?: () => void) {
  const start = useRef<{ y: number; t: number } | null>(null);
  const dy = useRef(0);
  const set = (y: number, animate: boolean) => {
    const el = panel.current;
    if (!el) return;
    el.style.setProperty("transition", animate ? "transform 200ms cubic-bezier(0.32, 0.72, 0, 1)" : "none");
    if (y) el.style.setProperty("transform", `translateY(${y}px)`);
    else el.style.removeProperty("transform");
  };
  return {
    onPointerDown: (e: RPointerEvent) => {
      if (e.button !== 0 || (e.target as HTMLElement).closest("button,a") || !isPhone()) return;
      start.current = { y: e.clientY, t: e.timeStamp };
      dy.current = 0;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    },
    onPointerMove: (e: RPointerEvent) => {
      if (!start.current) return;
      dy.current = e.clientY - start.current.y;
      set(Math.max(0, dy.current), false);
    },
    onPointerUp: (e: RPointerEvent) => {
      if (!start.current) return;
      const fast = dy.current / Math.max(1, e.timeStamp - start.current.t) > 0.5;
      start.current = null;
      if (dy.current > 80 || (fast && dy.current > 24)) {
        set(0, false);
        onClose();
      } else {
        set(0, true);
        if (onUp && dy.current < -40) onUp();
      }
    },
    onPointerCancel: () => {
      start.current = null;
      set(0, true);
    },
  };
}

/** The grab bar at the top of every sheet. Decorative: closing is also the close button, Esc and the backdrop. */
export function Handle() {
  return <span aria-hidden="true" className="mx-auto mt-2 mb-1 block h-1 w-9 shrink-0 rounded-full bg-chip-2" />;
}

export const sheetPanel =
  "admin-sheet absolute inset-x-0 bottom-0 flex max-h-[calc(100dvh-env(safe-area-inset-top)-24px)] flex-col rounded-t-[14px] bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_-12px_40px_rgb(0_0_0/0.16)] outline-none";

/** A bottom sheet dialog, rendered only while open. Put actions in `footer` (sticky, above the home indicator). */
export function Sheet({ open, onClose, title, children, footer, className = "" }: { open: boolean; onClose: () => void; title: string; children: ReactNode; footer?: ReactNode; className?: string }) {
  const panel = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useSheetLock(open);
  useFocusTrap(panel, open, onClose, "panel");
  const swipe = useSwipeDown(panel, onClose);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60]">
      <div className="admin-fade absolute inset-0 bg-black/30" onClick={onClose} aria-hidden="true" />
      <div ref={panel} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className={sheetPanel + " " + className}>
        <div className="shrink-0 touch-none select-none" {...swipe}>
          <Handle />
          <div className="flex items-center gap-2 pr-2 pl-4">
            <h2 id={titleId} className="min-w-0 flex-1 truncate text-[16px] font-medium tracking-[-0.01em]">
              {title}
            </h2>
            <button type="button" onClick={onClose} aria-label="Close" className="flex size-11 items-center justify-center rounded-full text-mute hover:bg-tile hover:text-ink">
              <AIcon name="x" size={18} />
            </button>
          </div>
        </div>
        <div className={"min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 " + (footer ? "pb-4" : "pb-[max(16px,env(safe-area-inset-bottom))]")}>{children}</div>
        {footer && <div className="flex shrink-0 items-center gap-2 border-t border-hair bg-white px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]">{footer}</div>}
      </div>
    </div>
  );
}

/** True below the md breakpoint (768px), read on the client when it matters (on open), so SSR stays identical. */
export const isPhone = () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

/** Sheet open state plus the opener button's props (aria-expanded / aria-haspopup). */
export function useSheet() {
  const [open, setOpen] = useState(false);
  return { open, setOpen, close: () => setOpen(false), toggle: () => setOpen((o) => !o) };
}
