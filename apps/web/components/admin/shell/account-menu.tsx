"use client";
import { useEffect, useId, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { AIcon } from "../admin-icons";
import { RoleTag } from "./role-tag";

export type ShellUser = { name: string; email: string; role: "moderator" | "admin" | "owner" };

/** Account button in the top bar: name, email, role and Sign out. */
export function AccountMenu({ user }: { user: ShellUser }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    box.current?.querySelector<HTMLElement>("[role=menuitem]")?.focus();
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const signOut = async () => {
    setBusy(true);
    await authClient.signOut().catch(() => {});
    window.location.assign("/admin/login");
  };

  const initial = (user.name || user.email).slice(0, 1).toUpperCase();
  return (
    <div ref={box} className="relative">
      <button
        ref={btn}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="flex h-8 items-center gap-1.5 rounded-full pr-1.5 pl-0.5 hover:bg-tile aria-expanded:bg-tile"
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-ink text-[12px] font-medium text-white" aria-hidden="true">
          {initial}
        </span>
        <span className="sr-only">Account: {user.name || user.email}</span>
        <AIcon name="selector" size={14} className="text-faint" />
      </button>
      {open && (
        <div id={id} role="menu" aria-label="Account" className="absolute top-[calc(100%+6px)] right-0 z-50 w-[248px] rounded-[8px] bg-white p-1 shadow-[0_0_0_1px_var(--color-hair-2),0_12px_32px_rgb(0_0_0/0.10)]">
          <div className="px-2.5 pt-2 pb-2.5">
            <div className="flex items-center gap-2">
              <p className="min-w-0 flex-1 truncate text-[13px] font-medium">{user.name || "No name"}</p>
              <RoleTag role={user.role} />
            </div>
            <p className="mt-0.5 truncate text-[12px] text-mute">{user.email}</p>
          </div>
          <div className="border-t border-hair pt-1">
            <a role="menuitem" href="/account" className="flex h-8 items-center gap-2 rounded-[6px] px-2.5 text-[13px] outline-none hover:bg-tile focus-visible:bg-tile">
              <AIcon name="user" size={15} className="text-mute" />
              Your account on the site
            </a>
            <button
              role="menuitem"
              type="button"
              onClick={signOut}
              disabled={busy}
              className="flex h-8 w-full items-center gap-2 rounded-[6px] px-2.5 text-left text-[13px] outline-none hover:bg-tile focus-visible:bg-tile disabled:opacity-60"
            >
              <AIcon name="logout" size={15} className="text-mute" />
              {busy ? "Signing out…" : "Sign out"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
