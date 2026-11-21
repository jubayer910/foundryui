import type { ReactNode } from "react";
import { Logo } from "@/components/site/logo";
import { AIcon } from "../admin-icons";

/**
 * Centered card for the admin login and invite pages, outside the panel shell. On phones the card sits in the
 * upper part of the screen (so the keyboard never covers the fields) and respects the safe areas.
 */
export function AuthCard({ title, sub, children, footer }: { title: string; sub?: ReactNode; children: ReactNode; footer?: ReactNode }) {
  return (
    <div data-admin="" className="flex min-h-dvh flex-col bg-[#fafafa]">
      <main className="flex flex-1 items-center justify-center px-4 py-10 max-md:items-start max-md:pt-[max(48px,calc(env(safe-area-inset-top)+10dvh))] max-md:pb-[max(24px,env(safe-area-inset-bottom))]">
        <div className="w-full max-w-[380px]">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Logo className="!h-5" />
            <span className="rounded-[5px] bg-ink px-1.5 py-px text-[11px] font-medium leading-[16px] text-white">Admin</span>
          </div>
          <div className="rounded-[12px] bg-white p-5 shadow-[0_0_0_1px_var(--color-hair-2),0_8px_28px_rgb(0_0_0/0.05)] sm:p-7">
            <h1 className="text-[20px] leading-[28px] font-medium tracking-[-0.015em] md:text-[18px] md:leading-[26px]">{title}</h1>
            {sub && <div className="mt-1 text-[13px] text-mute">{sub}</div>}
            <div className="mt-5">{children}</div>
          </div>
          <div className="mt-5 flex justify-center text-[13px]">
            {footer ?? (
              // eslint-disable-next-line @next/next/no-html-link-for-pages
              <a href="/" className="tap inline-flex items-center justify-center gap-1.5 text-mute hover:text-ink">
                <AIcon name="arrow-left" size={14} />
                Back to ingotui.com
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

/** Inline error under a form. */
export function FormError({ children }: { children: ReactNode }) {
  return (
    <p role="alert" className="flex items-start gap-2 rounded-[8px] bg-[#fdecec] px-3 py-2 text-[13px] text-[#9b1c1c]">
      <AIcon name="alert-circle" size={15} className="mt-px shrink-0" />
      <span>{children}</span>
    </p>
  );
}

export const authInput =
  "h-9 w-full rounded-[8px] bg-white px-3 text-[13px] shadow-[inset_0_0_0_1px_var(--color-hair-2)] outline-none placeholder:text-faint focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)] aria-[invalid=true]:shadow-[inset_0_0_0_1px_#c53030] read-only:bg-tile read-only:text-mute";
