"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { normPath, seoKey, type ContentMap } from "@/lib/content/edit";

let cache: Promise<ContentMap> | null = null;
const load = () => (cache ??= fetch("/api/content").then((r) => (r.ok ? r.json() : {})).catch(() => ({})));

/**
 * Re-applies the owner's text edits after client-side navigation (the worker already applied them to the first
 * page load; links fetch the built page data, which has the default text).
 */
export function ContentPatch() {
  const path = usePathname();
  useEffect(() => {
    let alive = true;
    const apply = (map: ContentMap) => {
      if (!alive) return;
      for (const el of document.querySelectorAll<HTMLElement>("[data-edit]")) {
        const v = map[el.dataset.edit || ""];
        if (v !== undefined && el.textContent !== v) el.textContent = v;
      }
      const t = map[seoKey(normPath(path || "/"), "title")];
      if (t && document.title !== t) document.title = t;
    };
    load().then((map) => {
      if (!Object.keys(map).length) return;
      apply(map);
      setTimeout(() => apply(map), 250); // after Next sets the new page's title
    });
    return () => {
      alive = false;
    };
  }, [path]);
  return null;
}
