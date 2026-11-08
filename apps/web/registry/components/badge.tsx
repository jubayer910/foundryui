import type { HTMLAttributes } from "react";
import { cx } from "./cx";

type Tone = "neutral" | "accent" | "positive" | "negative" | "warning";

const tones: Record<Tone, string> = {
  neutral: "bg-fu-hover text-fu-body border-fu-line",
  accent: "bg-fu-accent-soft text-fu-accent border-[color-mix(in_srgb,var(--fu-accent)_18%,transparent)]",
  positive: "bg-fu-positive-soft text-fu-positive border-[color-mix(in_srgb,var(--fu-positive)_18%,transparent)]",
  negative: "bg-fu-negative-soft text-fu-negative border-[color-mix(in_srgb,var(--fu-negative)_18%,transparent)]",
  warning: "bg-fu-warning-soft text-fu-warning border-[color-mix(in_srgb,var(--fu-warning)_20%,transparent)]",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

/** Status pill. No leading dot by design — use an icon if a glyph is needed. */
export function Badge({ tone = "neutral", className, ...rest }: BadgeProps) {
  return (
    <span
      className={cx("inline-flex h-6 items-center gap-1 rounded-full border px-2.5 text-xs font-medium", tones[tone], className)}
      {...rest}
    />
  );
}
