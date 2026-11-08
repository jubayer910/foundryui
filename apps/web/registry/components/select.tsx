"use client";
import { Select as S } from "@base-ui/react/select";
import { Icon } from "./icons";
import { cx } from "./cx";

export interface SelectOption { value: string; label: string }
export interface SelectProps {
  options: SelectOption[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  ariaLabel?: string;
}

export function Select({ options, defaultValue, value, onValueChange, className, ariaLabel }: SelectProps) {
  return (
    <S.Root
      items={options}
      defaultValue={defaultValue ?? options[0]?.value}
      value={value}
      onValueChange={(v) => onValueChange?.(v as string)}
    >
      <S.Trigger
        aria-label={ariaLabel}
        className={cx(
          "inline-flex h-8 items-center gap-1.5 rounded-fu-sm border border-fu-line-strong bg-fu-surface pl-2.5 pr-2 text-[13px] font-medium text-fu-ink transition-colors hover:bg-fu-hover data-[popup-open]:bg-fu-hover focus-visible:outline-2 focus-visible:outline-fu-accent",
          className,
        )}
      >
        <S.Value />
        <S.Icon className="text-fu-muted transition-transform duration-150 data-[popup-open]:rotate-180">
          <Icon name="chevron-down" size={14} />
        </S.Icon>
      </S.Trigger>
      <S.Portal>
        <S.Positioner sideOffset={6} alignItemWithTrigger={false} className="z-50">
          <S.Popup className="min-w-[var(--anchor-width)] origin-[var(--transform-origin)] rounded-fu-md border border-fu-line bg-fu-surface p-1 shadow-fu-overlay outline-none transition-[opacity,transform] duration-150 data-[ending-style]:opacity-0 data-[starting-style]:scale-[0.97] data-[starting-style]:opacity-0">
            {options.map((o) => (
              <S.Item
                key={o.value}
                value={o.value}
                className="flex cursor-default select-none items-center justify-between gap-6 rounded-fu-xs px-2.5 py-2 text-[13px] text-fu-body outline-none data-[highlighted]:bg-fu-hover data-[highlighted]:text-fu-ink"
              >
                <S.ItemText>{o.label}</S.ItemText>
                <S.ItemIndicator className="text-fu-accent">
                  <Icon name="check" size={14} />
                </S.ItemIndicator>
              </S.Item>
            ))}
          </S.Popup>
        </S.Positioner>
      </S.Portal>
    </S.Root>
  );
}
