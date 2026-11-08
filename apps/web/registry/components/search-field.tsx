import type { InputHTMLAttributes } from "react";
import { Icon } from "./icons";
import { cx } from "./cx";

export interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  shortcut?: string;
}

export function SearchField({ shortcut = "⌘K", className, placeholder = "Search", ...rest }: SearchFieldProps) {
  return (
    <label
      className={cx(
        "flex h-9 w-full max-w-72 items-center gap-2 rounded-fu-sm border border-fu-line-strong bg-fu-surface pl-2.5 pr-1.5 text-sm transition-[border-color] focus-within:border-fu-accent",
        className,
      )}
    >
      <Icon name="search" size={16} className="shrink-0 text-fu-muted" />
      <input type="search" placeholder={placeholder} className="w-full min-w-0 bg-transparent text-fu-ink outline-none placeholder:text-fu-faint" {...rest} />
      {shortcut && (
        <kbd className="rounded-fu-xs border border-fu-line bg-fu-sunken px-1.5 py-0.5 font-fu-mono text-[11px] text-fu-muted">{shortcut}</kbd>
      )}
    </label>
  );
}
