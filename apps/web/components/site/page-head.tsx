import type { ReactNode } from "react";
import { ed } from "@/lib/content/edit";

/** recent.design-style title row: title, muted one-line subtitle, optional actions on the right. */
/** `edit` makes the title and subtitle editable in admin → Pages (keys `<edit>.head.title`, `<edit>.head.sub`). */
export function PageHead({ title, sub, children, edit }: { title: string; sub?: string; children?: ReactNode; edit?: string }) {
  const e = (k: string) => (edit ? ed(`${edit}.head.${k}`) : {});
  return (
    <header className="flex flex-wrap items-center gap-x-2 gap-y-2">
      <h1 className="page-title" {...e("title")}>{title}</h1>
      {sub && <p className="page-sub" {...e("sub")}>{sub}</p>}
      {children && <div className="ml-auto flex items-center gap-1.5">{children}</div>}
    </header>
  );
}
