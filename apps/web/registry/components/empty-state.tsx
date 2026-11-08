import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

export interface EmptyStateProps {
  icon?: IconName;
  title: string;
  description: string;
  action?: ReactNode;
}

/** Empty state: duo-tone icon tile, one-line title, helpful description, one primary action. */
export function EmptyState({ icon = "folder", title, description, action }: EmptyStateProps) {
  return (
    <div className="flex w-full flex-col items-center rounded-fu-lg border border-dashed border-fu-line-strong bg-fu-sunken px-6 py-10 text-center">
      <span className="relative mb-4 flex size-12 items-center justify-center rounded-fu-md border border-fu-line bg-fu-surface text-fu-ink shadow-fu-card">
        <Icon name={icon} size={22} />
      </span>
      <h3 className="text-[15px] font-medium tracking-[-0.01em] text-fu-ink">{title}</h3>
      <p className="mt-1 max-w-72 text-[13px] leading-relaxed text-fu-muted">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
