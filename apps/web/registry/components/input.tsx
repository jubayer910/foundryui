import type { InputHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./icons";
import { cx } from "./cx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: IconName;
  trailing?: ReactNode;
}

export function Input({ label, hint, error, leadingIcon, trailing, className, id, ...rest }: InputProps) {
  const inputId = id ?? (label ? `in-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
  return (
    <div className={cx("flex flex-col gap-1.5", className)}>
      {label && (
        <label htmlFor={inputId} className="text-[13px] font-medium text-fu-ink">
          {label}
        </label>
      )}
      <div
        className={cx(
          "flex h-9 items-center gap-2 rounded-fu-sm border bg-fu-surface px-2.5 transition-[border-color,box-shadow] duration-150 focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--fu-accent)_14%,transparent)]",
          error ? "border-fu-negative" : "border-fu-line-strong focus-within:border-fu-accent",
        )}
      >
        {leadingIcon && <Icon name={leadingIcon} size={16} className="shrink-0 text-fu-muted" />}
        <input
          id={inputId}
          className="h-full w-full min-w-0 bg-transparent text-sm text-fu-ink outline-none placeholder:text-fu-faint"
          aria-invalid={error ? true : undefined}
          {...rest}
        />
        {trailing}
      </div>
      {(error || hint) && <p className={cx("text-xs", error ? "text-fu-negative" : "text-fu-muted")}>{error ?? hint}</p>}
    </div>
  );
}
