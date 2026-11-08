"use client";
import { Switch as Sw } from "@base-ui/react/switch";

export interface SwitchProps { label?: string; defaultChecked?: boolean; onCheckedChange?: (v: boolean) => void }

export function Switch({ label, defaultChecked, onCheckedChange }: SwitchProps) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2.5 text-sm text-fu-body">
      <Sw.Root
        defaultChecked={defaultChecked}
        onCheckedChange={(v) => onCheckedChange?.(v)}
        className="relative h-5 w-9 rounded-full bg-fu-line-strong transition-colors duration-200 data-[checked]:bg-fu-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fu-accent"
      >
        <Sw.Thumb className="block size-4 translate-x-0.5 rounded-full bg-white shadow-[0_1px_2px_rgb(0_0_0/0.2)] transition-transform duration-200 ease-out data-[checked]:translate-x-[18px]" />
      </Sw.Root>
      {label}
    </label>
  );
}
