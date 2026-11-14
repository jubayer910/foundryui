"use client";
import { useFormStatus } from "react-dom";
import { RIcon } from "./icons";

/** Submit button for the sync form; shows progress while the server action runs (a sync can take a few seconds). */
export function SyncButton({ label = "Sync now", disabled, tone = "ink" }: { label?: string; disabled?: boolean; tone?: "ink" | "line" }) {
  const { pending } = useFormStatus();
  return (
    <button className={tone === "ink" ? "btn-ink" : "btn-line"} disabled={pending || disabled} aria-busy={pending}>
      <RIcon name="refresh" size={15} className={pending ? "animate-spin" : undefined} />
      {pending ? "Syncing…" : label}
    </button>
  );
}
