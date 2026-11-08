import Link from "next/link";
import { getSessionUser } from "@/lib/auth";
import { Icon } from "@/registry/components/icons";

export async function AccountLink() {
  const user = await getSessionUser().catch(() => null);
  if (user)
    return (
      <Link href="/account" className="btn-ink !h-9">
        <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-[11px]">{user.name.slice(0, 1).toUpperCase()}</span>
        Account
      </Link>
    );
  return (
    <>
      <Link href="/sign-in" className="hidden h-9 items-center px-2 text-[13px] text-ink-2 hover:text-ink md:flex">
        Sign in
      </Link>
      <Link href="/components" className="btn-ink !h-9">
        Browse library <Icon name="arrow-up-right" size={14} />
      </Link>
    </>
  );
}
