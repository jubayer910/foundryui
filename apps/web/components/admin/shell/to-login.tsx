"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Rendered by the panel layout for visitors who are signed out or not staff. Sends them to the admin login
 * with ?next= set to the page they asked for. The page itself never renders for them.
 */
export function ToLogin({ denied }: { denied: boolean }) {
  const path = usePathname();
  const sp = useSearchParams();
  const qs = sp.toString();
  const href = `/admin/login?next=${encodeURIComponent(path + (qs ? "?" + qs : ""))}${denied ? "&denied=1" : ""}`;
  useEffect(() => {
    window.location.replace(href);
  }, [href]);
  return (
    <div className="flex min-h-dvh items-center justify-center p-6 text-[13px] text-mute">
      <a href={href} className="underline underline-offset-2 hover:text-ink">
        Sign in to Ingot UI Admin
      </a>
    </div>
  );
}
