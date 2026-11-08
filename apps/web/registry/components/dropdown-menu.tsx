"use client";
import { Menu } from "@base-ui/react/menu";
import type { ReactElement } from "react";
import { Icon, type IconName } from "./icons";
import { cx } from "./cx";

export type MenuEntry = { label: string; icon?: IconName; shortcut?: string; danger?: boolean; onSelect?: () => void } | "separator";

export interface DropdownMenuProps { trigger: ReactElement; items: MenuEntry[]; align?: "start" | "center" | "end" }

export function DropdownMenu({ trigger, items, align = "end" }: DropdownMenuProps) {
  return (
    <Menu.Root>
      <Menu.Trigger render={trigger} />
      <Menu.Portal>
        <Menu.Positioner align={align} sideOffset={6} className="z-50">
          <Menu.Popup className="min-w-48 origin-[var(--transform-origin)] rounded-fu-md border border-fu-line bg-fu-surface p-1 shadow-fu-overlay outline-none transition-[opacity,transform] duration-150 data-[ending-style]:opacity-0 data-[starting-style]:scale-[0.97] data-[starting-style]:opacity-0">
            {items.map((it, i) =>
              it === "separator" ? (
                <Menu.Separator key={i} className="mx-1 my-1 h-px bg-fu-line" />
              ) : (
                <Menu.Item
                  key={it.label}
                  onClick={it.onSelect}
                  className={cx(
                    "flex cursor-default select-none items-center gap-2 rounded-fu-xs px-2.5 py-2 text-[13px] outline-none data-[highlighted]:bg-fu-hover",
                    it.danger ? "text-fu-negative-text" : "text-fu-body data-[highlighted]:text-fu-ink",
                  )}
                >
                  {it.icon && <Icon name={it.icon} size={16} className={it.danger ? "" : "text-fu-muted"} />}
                  <span className="flex-1">{it.label}</span>
                  {it.shortcut && <kbd className="font-fu-mono text-[11px] text-fu-faint">{it.shortcut}</kbd>}
                </Menu.Item>
              ),
            )}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
