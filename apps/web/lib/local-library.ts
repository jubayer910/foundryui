"use client";
import { useSyncExternalStore } from "react";
/** Per-browser library: saved items and recent copies. Synced to the account later. */
const KEYS = { saved: "fu_saved", recent: "fu_recent" } as const;
type Kind = keyof typeof KEYS;

export function read(kind: Kind): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(KEYS[kind]) || "[]");
    return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function write(kind: Kind, list: string[]) {
  try {
    localStorage.setItem(KEYS[kind], JSON.stringify(list));
    window.dispatchEvent(new Event("fu-library"));
  } catch {}
}

export function toggleSaved(slug: string): boolean {
  const s = read("saved");
  const on = !s.includes(slug);
  write("saved", on ? [slug, ...s] : s.filter((x) => x !== slug));
  return on;
}

export function pushRecent(slug: string) {
  write("recent", [slug, ...read("recent").filter((x) => x !== slug)].slice(0, 24));
}


const subscribe = (cb: () => void) => {
  window.addEventListener("fu-library", cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener("fu-library", cb);
    window.removeEventListener("storage", cb);
  };
};

/** Live list from this browser's library; empty on the server. */
export function useLibrary(kind: Kind): string[] {
  const raw = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return localStorage.getItem(KEYS[kind]) || "[]";
      } catch {
        return "[]";
      }
    },
    () => "[]",
  );
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}
