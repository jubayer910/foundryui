"use client";
import { useEffect, useId, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AIcon, type AdminIconName } from "../admin-icons";
import { quickSearch, type SearchHit } from "./search";

const KIND: Record<SearchHit["kind"], { label: string; icon: AdminIconName }> = {
  user: { label: "Users", icon: "user" },
  order: { label: "Orders", icon: "receipt" },
  ticket: { label: "Tickets", icon: "message" },
};

/** Top-bar search: users, orders and tickets. "/" or Cmd/Ctrl+K focuses it; arrows move, Enter opens, Esc closes. */
export function QuickSearch({ className = "", autoFocus = false, onDone }: { className?: string; autoFocus?: boolean; onDone?: () => void }) {
  const router = useRouter();
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<SearchHit[] | null>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [pending, start] = useTransition();
  const seq = useRef(0);

  useEffect(() => {
    if (autoFocus) input.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        if (!input.current || input.current.offsetParent === null) return;
        e.preventDefault();
        input.current.focus();
        input.current.select();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const term = q.trim();
    if (term.length < 2) return;
    const n = ++seq.current;
    const t = setTimeout(() => {
      start(async () => {
        const r = await quickSearch(term).catch(() => []);
        if (n === seq.current) {
          setHits(r);
          setActive(0);
        }
      });
    }, 180);
    return () => clearTimeout(t);
  }, [q]);

  const go = (h: SearchHit) => {
    setOpen(false);
    setQ("");
    setHits(null);
    input.current?.blur();
    onDone?.();
    router.push(h.href);
  };

  const list = hits ?? [];
  const show = open && q.trim().length >= 2;

  return (
    <div className={"relative " + className}>
      <label htmlFor={id + "-q"} className="sr-only">
        Search users, orders and tickets
      </label>
      <div className="flex h-8 items-center gap-2 rounded-[6px] bg-tile px-2.5 max-md:h-11 max-md:rounded-full max-md:px-3.5 shadow-[inset_0_0_0_1px_var(--color-hair)] focus-within:bg-white focus-within:shadow-[inset_0_0_0_1px_var(--color-ink)]">
        <AIcon name="search" size={15} className="shrink-0 text-faint" />
        <input
          ref={input}
          id={id + "-q"}
          type="search"
          role="combobox"
          aria-expanded={show}
          aria-controls={id + "-list"}
          aria-autocomplete="list"
          aria-activedescendant={show && list[active] ? `${id}-o${active}` : undefined}
          autoComplete="off"
          spellCheck={false}
          value={q}
          placeholder="Search users, orders, tickets"
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, Math.max(0, list.length - 1)));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            } else if (e.key === "Enter" && list[active]) {
              e.preventDefault();
              go(list[active]);
            } else if (e.key === "Escape") {
              if (q) setQ("");
              else {
                input.current?.blur();
                onDone?.();
              }
            }
          }}
          className="h-full min-w-0 flex-1 bg-transparent text-[13px] !outline-none placeholder:text-faint [&::-webkit-search-cancel-button]:hidden"
        />
        <kbd className="hidden shrink-0 rounded-[4px] bg-white px-1 font-sans text-[11px] leading-4 text-faint shadow-[inset_0_0_0_1px_var(--color-hair-2)] xl:inline">/</kbd>
      </div>
      {show && (
        <div className="absolute inset-x-0 top-[calc(100%+6px)] z-50 max-h-[min(420px,70vh)] max-md:fixed max-md:inset-x-2 max-md:top-[60px] max-md:max-h-[calc(100dvh-76px)] overflow-y-auto rounded-[8px] bg-white p-1 shadow-[0_0_0_1px_var(--color-hair-2),0_12px_32px_rgb(0_0_0/0.10)]">
          <ul id={id + "-list"} role="listbox" aria-label="Search results">
            {(["user", "order", "ticket"] as const).map((k) => {
              const rows = list.filter((h) => h.kind === k);
              if (!rows.length) return null;
              return (
                <li key={k} role="presentation">
                  <p className="px-2 pt-2 pb-1 text-[11px] font-medium tracking-[0.02em] text-faint uppercase max-md:text-[12px]">{KIND[k].label}</p>
                  <ul role="presentation">
                    {rows.map((h) => {
                      const i = list.indexOf(h);
                      return (
                        <li
                          key={h.href + h.title}
                          id={`${id}-o${i}`}
                          role="option"
                          aria-selected={i === active}
                          onMouseDown={(e) => e.preventDefault()}
                          onMouseEnter={() => setActive(i)}
                          onClick={() => go(h)}
                          className={"flex cursor-pointer items-center gap-2.5 rounded-[6px] px-2 py-1.5 max-md:min-h-12 " + (i === active ? "bg-tile" : "")}
                        >
                          <AIcon name={KIND[k].icon} size={15} className="shrink-0 text-mute" />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[13px]">{h.title}</span>
                            <span className="block truncate text-[12px] text-faint">{h.sub}</span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          {!list.length && <p className="px-2 py-3 text-[13px] text-mute">{pending || hits === null ? "Searching…" : "No matches."}</p>}
        </div>
      )}
    </div>
  );
}
