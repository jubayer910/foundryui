import type { Metadata } from "next";
import Link from "next/link";
import { PERM_LABEL, isPerm, requireStaff } from "@/lib/admin";
import { sp } from "@/components/admin/guard";
import { AIcon } from "@/components/admin/admin-icons";
import { RoleTag } from "@/components/admin/shell/role-tag";

export const metadata: Metadata = { title: "No access" };

/** Where requireStaff(perm) sends staff whose role doesn't include that permission. */
export default async function NoAccess({ searchParams }: PageProps<"/admin/no-access">) {
  const { role } = await requireStaff(undefined, "/admin");
  const need = sp((await searchParams).need);
  const area = isPerm(need) ? PERM_LABEL[need] : "this page";
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex max-w-[420px] flex-col items-center text-center">
        <span className="flex size-11 items-center justify-center rounded-full bg-tile text-ink-2">
          <AIcon name="lock" size={20} />
        </span>
        <h1 className="mt-4 text-[20px] leading-[28px] font-medium tracking-[-0.015em]">No access</h1>
        <p className="mt-1.5 flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-mute">
          Your role <RoleTag role={role} /> can&apos;t open {area}.
        </p>
        <p className="mt-1 text-[13px] text-mute">If you need it, ask an owner or admin to change your role on the Team page.</p>
        <Link href="/admin" className="btn-line mt-5">
          <AIcon name="arrow-left" size={15} />
          Back to overview
        </Link>
      </div>
    </div>
  );
}
