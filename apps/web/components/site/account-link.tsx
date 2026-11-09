import Link from "next/link";
import { getSessionUser } from "@/lib/auth";

export async function AccountLink() {
  const user = await getSessionUser().catch(() => null);
  if (user)
    return (
      <Link href="/account" aria-label="Your account" className="flex size-7 items-center justify-center rounded-full bg-ink text-[12px] font-medium text-white">
        {user.name.slice(0, 1).toUpperCase()}
      </Link>
    );
  return (
    <Link href="/sign-in" className="btn-line !h-7 !px-3 !font-normal">
      Log in
    </Link>
  );
}
