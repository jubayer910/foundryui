"use client";
import { forwardRef } from "react";
import { DEMOS } from "@/registry/demos";

/** Renders a catalogue item's live demo inside its system scope. */
export const Preview = forwardRef<HTMLDivElement, { slug: string; size?: "card" | "page" }>(function Preview({ slug, size = "page" }, ref) {
  const demo = DEMOS[slug];
  return (
    <div
      ref={ref}
      data-system="loopo"
      className={
        size === "page"
          ? "flex min-h-72 w-full items-center justify-center bg-fu-surface p-6 sm:p-10"
          : "pointer-events-none flex h-full w-full items-center justify-center overflow-hidden bg-transparent p-5 [&>*]:origin-center [&>*]:scale-[0.78]"
      }
    >
      {demo ? demo.node() : <span className="text-sm text-fu-muted">Preview coming soon</span>}
    </div>
  );
});
