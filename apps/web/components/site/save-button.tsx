"use client";
import { toggleSaved, useLibrary } from "@/lib/local-library";
import { CIcon } from "./chrome-icon";

export function SaveButton({ slug, quiet = false }: { slug: string; quiet?: boolean }) {
  const saved = useLibrary("saved").includes(slug);
  return (
    <button onClick={() => toggleSaved(slug)} aria-pressed={saved} className={(quiet ? "btn-line" : "btn-ink") + " w-full"}>
      <CIcon name="bookmark" size={15} className={saved ? (quiet ? "fill-ink" : "fill-white") : ""} /> {saved ? "Saved" : "Save to your library"}
    </button>
  );
}
