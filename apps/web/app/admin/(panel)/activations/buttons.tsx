"use client";
import { useFormStatus } from "react-dom";
import type { ReactNode } from "react";

/** Submit button that locks while its form is sending, so a double tap sends once. */
export function SubmitButton({ children, busy, className }: { children: ReactNode; busy: string; className: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} aria-disabled={pending} className={className + " disabled:opacity-60"}>
      {pending ? busy : children}
    </button>
  );
}
