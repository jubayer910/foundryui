import type { ReactNode } from "react";

/** recent.design-style title row: title, muted one-line subtitle, optional actions on the right. */
export function PageHead({ title, sub, children }: { title: string; sub?: string; children?: ReactNode }) {
  return (
    <header className="flex flex-wrap items-center gap-x-2 gap-y-2">
      <h1 className="page-title">{title}</h1>
      {sub && <p className="page-sub">{sub}</p>}
      {children && <div className="ml-auto flex items-center gap-1.5">{children}</div>}
    </header>
  );
}
