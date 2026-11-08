import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "./cx";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leading?: ReactNode;
  trailing?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-[background,box-shadow,transform,color] duration-150 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fu-accent";

const variants: Record<Variant, string> = {
  primary: "text-white shadow-fu-button [background:var(--fu-primary-grad)] hover:brightness-110",
  accent: "text-fu-accent-ink shadow-fu-button [background:var(--fu-accent-grad)] hover:brightness-105",
  secondary: "border border-fu-line-strong bg-fu-surface text-fu-ink hover:bg-fu-hover",
  ghost: "text-fu-body hover:bg-fu-hover",
  danger: "bg-fu-negative text-white hover:brightness-105",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-5 text-[15px]",
};

export function Button({ variant = "primary", size = "md", leading, trailing, className, children, ...rest }: ButtonProps) {
  return (
    <button className={cx(base, variants[variant], sizes[size], className)} {...rest}>
      {leading}
      {children}
      {trailing}
    </button>
  );
}
