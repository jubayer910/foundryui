"use client";
import { Tabs as T } from "@base-ui/react/tabs";
import type { ReactNode } from "react";

export interface TabsProps { items: { value: string; label: string; content: ReactNode }[]; defaultValue?: string }

export function Tabs({ items, defaultValue }: TabsProps) {
  return (
    <T.Root defaultValue={defaultValue ?? items[0]?.value}>
      <T.List className="relative flex gap-5 border-b border-fu-line">
        {items.map((i) => (
          <T.Tab key={i.value} value={i.value} className="h-9 text-[13px] font-medium text-fu-muted outline-none transition-colors hover:text-fu-body data-[selected]:text-fu-ink focus-visible:text-fu-ink">
            {i.label}
          </T.Tab>
        ))}
        <T.Indicator className="absolute bottom-[-1px] left-[var(--active-tab-left)] h-0.5 w-[var(--active-tab-width)] rounded-full bg-fu-ink transition-[left,width] duration-200 ease-out" />
      </T.List>
      {items.map((i) => (
        <T.Panel key={i.value} value={i.value} className="pt-4 text-sm text-fu-body outline-none">
          {i.content}
        </T.Panel>
      ))}
    </T.Root>
  );
}
