"use client";
import { useEffect, useId, useRef, useState } from "react";
import { RIcon } from "./icons";

/**
 * Definition popover for one metric: an info button that opens a small panel with the plain-language
 * definition. Opens on click or Enter/Space, closes on Escape, outside click or a second click; focus stays on
 * the button so keyboard users never lose their place.
 */
export function Info({ label, text, align = "left" }: { label: string; text: string; align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const box = useRef<HTMLSpanElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <span ref={box} className="relative inline-flex align-middle print:hidden">
      <button
        ref={btn}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        aria-label={`Definition of ${label}`}
        className="inline-flex size-5 items-center justify-center rounded-full text-faint transition-colors hover:bg-tile hover:text-ink aria-expanded:text-ink max-md:-m-3 max-md:size-11 max-md:hover:bg-transparent"
      >
        <RIcon name="info-circle" size={14} />
      </button>
      {open && (
        <span
          id={id}
          role="note"
          className={
            "absolute top-6 z-30 w-[min(300px,calc(100vw-48px))] rounded-[8px] bg-white p-3 text-left text-[12px] leading-[1.5] font-normal tracking-normal whitespace-normal text-ink-2 shadow-[0_0_0_1px_var(--color-hair-2),0_8px_24px_rgb(0_0_0/0.08)] max-md:fixed max-md:inset-x-3 max-md:top-auto max-md:bottom-[calc(var(--admin-bottom,0px)+12px)] max-md:z-[55] max-md:w-auto max-md:rounded-[12px] max-md:p-4 max-md:text-[14px] max-md:shadow-[0_0_0_1px_var(--color-hair-2),0_12px_40px_rgb(0_0_0/0.18)] " +
            (align === "right" ? "right-0" : "left-0")
          }
        >
          <span className="mb-1 block text-[12px] font-medium text-ink max-md:text-[15px]">{label}</span>
          {text}
        </span>
      )}
    </span>
  );
}
