import type { ButtonHTMLAttributes } from "react";
import { Icon, type IconName } from "./icons";
import { cx } from "./cx";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  label: string;
  size?: "sm" | "md";
  indicator?: boolean;
}

export function IconButton({ icon, label, size = "md", indicator, className, ...rest }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cx(
        "relative inline-flex items-center justify-center rounded-fu-sm border border-fu-line-strong bg-fu-surface text-fu-body transition-colors duration-150 hover:bg-fu-hover hover:text-fu-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fu-accent",
        size === "sm" ? "size-8" : "size-9",
        className,
      )}
      {...rest}
    >
      <Icon name={icon} size={size === "sm" ? 16 : 18} />
      {indicator && <span className="absolute right-2 top-2 size-1.5 rounded-full bg-fu-accent ring-2 ring-fu-surface" />}
    </button>
  );
}
