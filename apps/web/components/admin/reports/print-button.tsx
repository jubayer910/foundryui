"use client";
import { RIcon } from "./icons";

/** Opens the browser print dialog, where "Save as PDF" is one of the destinations. */
export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-ink !h-8 !px-3">
      <RIcon name="printer" size={15} />
      Print or save as PDF
    </button>
  );
}
