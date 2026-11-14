import type { ReactNode } from "react";
import { AIcon, type AdminIconName } from "../admin-icons";
import { AdminHead } from "../ui";

/** Holding page for a section whose build is the next workstream. */
export function Placeholder({ title, sub, icon, what, children }: { title: string; sub: string; icon: AdminIconName; what: string[]; children?: ReactNode }) {
  return (
    <div>
      <AdminHead title={title} sub={sub} />
      <div className="card mt-5 flex flex-col items-start gap-3 p-6 sm:p-8">
        <span className="flex size-10 items-center justify-center rounded-[8px] bg-tile text-ink-2">
          <AIcon name={icon} size={20} />
        </span>
        <div>
          <p className="text-[14px] font-medium">Coming in the next step</p>
          <p className="mt-0.5 max-w-[560px] text-[13px] text-mute">This section is planned and has its place in the panel. When it lands it will cover:</p>
        </div>
        <ul className="flex max-w-[560px] flex-col gap-1.5 text-[13px] text-ink-2">
          {what.map((w) => (
            <li key={w} className="flex gap-2">
              <AIcon name="check" size={15} className="mt-px shrink-0 text-faint" />
              {w}
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
}
