"use client";
import { Checkbox as C } from "@base-ui/react/checkbox";
import { Icon } from "./icons";

export interface CheckboxProps { label?: string; defaultChecked?: boolean; onCheckedChange?: (v: boolean) => void }

export function Checkbox({ label, defaultChecked, onCheckedChange }: CheckboxProps) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2.5 text-sm text-fu-body">
      <C.Root
        defaultChecked={defaultChecked}
        onCheckedChange={(v) => onCheckedChange?.(v)}
        className="flex size-[18px] items-center justify-center rounded-[5px] border border-fu-line-strong bg-fu-surface transition-colors data-[checked]:border-fu-ink data-[checked]:bg-fu-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fu-accent"
      >
        <C.Indicator className="text-white data-[unchecked]:hidden">
          <Icon name="check" size={13} strokeWidth={2} />
        </C.Indicator>
      </C.Root>
      {label}
    </label>
  );
}
