"use client";
import { useState } from "react";
import { cx } from "./cx";

export interface SegmentedControlProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function SegmentedControl({ options, defaultValue, onChange, className }: SegmentedControlProps) {
  const [value, setValue] = useState(defaultValue ?? options[0]);
  const index = Math.max(0, options.indexOf(value));
  return (
    <div role="radiogroup" className={cx("relative inline-grid h-8 rounded-fu-sm bg-fu-hover p-0.5", className)} style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
      <span
        aria-hidden="true"
        className="absolute inset-y-0.5 left-0.5 rounded-[calc(var(--fu-radius-sm)-2px)] border border-fu-line bg-fu-surface shadow-fu-card transition-transform duration-200 ease-out"
        style={{ width: `calc((100% - 4px) / ${options.length})`, transform: `translateX(${index * 100}%)` }}
      />
      {options.map((o) => (
        <button
          key={o}
          role="radio"
          aria-checked={o === value}
          onClick={() => { setValue(o); onChange?.(o); }}
          className={cx("relative z-10 px-3 text-[13px] font-medium transition-colors", o === value ? "text-fu-ink" : "text-fu-muted hover:text-fu-body")}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
