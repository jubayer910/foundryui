import Link from "next/link";
import { getSessionUser } from "@/lib/auth";

export async function AccountLink() {
  const user = await getSessionUser().catch(() => null);
  if (user)
    return (
      <Link href="/account" className="flex h-8 items-center gap-2 rounded-full border border-fu-line-strong bg-fu-surface pl-1 pr-3 text-[13px] font-medium text-fu-ink hover:bg-fu-hover">
        <span className="flex size-6 items-center justify-center rounded-full bg-fu-accent-soft text-[11px] text-fu-accent">{user.name.slice(0, 1).toUpperCase()}</span>
        Account
      </Link>
    );
  return (
    <>
      <Link href="/sign-in" className="hidden h-8 items-center rounded-full px-3 text-[13px] font-medium text-fu-body hover:bg-fu-hover sm:flex">
        Sign in
      </Link>
      <Link href="/sign-up" className="flex h-8 items-center rounded-full px-3.5 text-[13px] font-medium text-white shadow-fu-button [background:var(--fu-primary-grad)]">
        Get started
      </Link>
    </>
  );
}
