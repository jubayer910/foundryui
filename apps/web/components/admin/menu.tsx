"use client";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { AIcon, type AdminIconName } from "./admin-icons";

export type MenuItem = { href: string; label: string; hint?: string; icon?: AdminIconName; download?: boolean; newTab?: boolean } | { section: string };

/**
 * Small dropdown of links (exports, secondary actions). Opens on click, closes on Escape, outside click or a
 * choice; arrow keys move between items. The trigger looks like a btn-line.
 */
export function Menu({ label, icon, items, align = "right", children }: { label: string; icon?: AdminIconName; items: MenuItem[]; align?: "left" | "right"; children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    box.current?.querySelector<HTMLElement>("[role=menuitem]")?.focus();
    const onDown = (e: PointerEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      const list = [...(box.current?.querySelectorAll<HTMLElement>("[role=menuitem]") ?? [])];
      const i = list.indexOf(document.activeElement as HTMLElement);
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        list[(i + 1) % list.length]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        list[(i - 1 + list.length) % list.length]?.focus();
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
    <div ref={box} className="relative">
      <button ref={btn} type="button" className="btn-line !h-8 !px-3" aria-haspopup="menu" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        {icon && <AIcon name={icon} size={15} />}
        {label}
        <AIcon name="chevron-down" size={14} className="text-mute" />
      </button>
      {open && (
        <div
          id={id}
          role="menu"
          aria-label={label}
          className={"absolute top-9 z-40 w-[260px] rounded-[8px] bg-white p-1 shadow-[0_0_0_1px_var(--color-hair-2),0_8px_24px_rgb(0_0_0/0.08)] " + (align === "right" ? "right-0" : "left-0")}
        >
          {items.map((it, i) =>
            "section" in it ? (
              <p key={i} className="px-2 pt-2 pb-1 text-[12px] text-faint">
                {it.section}
              </p>
            ) : (
              <a
                key={i}
                role="menuitem"
                href={it.href}
                download={it.download || undefined}
                target={it.newTab ? "_blank" : undefined}
                onClick={() => setOpen(false)}
                className="flex min-h-8 items-center gap-2 rounded-[6px] px-2 py-1 text-[13px] text-ink outline-none hover:bg-tile focus-visible:bg-tile"
              >
                {it.icon && <AIcon name={it.icon} size={15} className="shrink-0 text-mute" />}
                <span className="min-w-0 flex-1">
                  {it.label}
                  {it.hint && <span className="block text-[12px] text-faint">{it.hint}</span>}
                </span>
                {it.newTab && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            ),
          )}
          {children}
        </div>
      )}
    </div>
  );
}
