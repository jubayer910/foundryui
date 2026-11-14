import type { Metadata } from "next";
import { eq, sql } from "drizzle-orm";
import { getSessionUser } from "@/lib/auth";
import { getStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { AIcon } from "@/components/admin/admin-icons";
import { AuthCard } from "@/components/admin/shell/auth-card";
import { RoleTag } from "@/components/admin/shell/role-tag";
import { SignOutButton } from "@/components/admin/shell/sign-out-button";
import { AcceptExistingForm, AcceptNewForm, AcceptSignedInForm } from "@/components/admin/shell/invite-forms";
import { findInvite, inviteState } from "@/components/admin/team";
import { acceptExisting, acceptNew, acceptSignedIn } from "./actions";

export const metadata: Metadata = { title: "Team invite" };
export const dynamic = "force-dynamic";

const BAD = {
  invalid: { t: "This invite link isn't valid", d: "Check that you copied the whole link. If it still fails, ask the person who invited you for a new one." },
  expired: { t: "This invite has expired", d: "Invite links work for 7 days. Ask the person who invited you for a new link." },
  revoked: { t: "This invite was revoked", d: "It no longer works. If you still need access, ask the person who invited you for a new link." },
  accepted: { t: "This invite was already used", d: "Each link works once. If it was you, sign in to the admin panel." },
};

export default async function InvitePage({ params }: PageProps<"/admin/invite/[token]">) {
  const { token } = await params;
  const inv = await findInvite(token);
  const state = inv ? inviteState(inv) : "invalid";

  if (!inv || state !== "pending") {
    const b = BAD[state === "pending" ? "invalid" : state];
    return (
      <AuthCard title={b.t} sub={b.d}>
        <div className="flex items-center gap-3 rounded-[8px] bg-tile p-3 text-[13px] text-mute">
          <AIcon name="link" size={16} className="shrink-0" />
          No access was given with this link.
        </div>
        {state === "accepted" && (
          <a href="/admin/login" className="btn-ink mt-4 w-full !h-9">
            Go to the admin sign-in
          </a>
        )}
      </AuthCard>
    );
  }

  const db = await getDb();
  const [[existing], me, staff] = await Promise.all([
    db.select({ id: schema.user.id }).from(schema.user).where(eq(sql`lower(${schema.user.email})`, inv.email.toLowerCase())).limit(1),
    getSessionUser().catch(() => null),
    getStaff(),
  ]);
  const sameUser = !!me && me.email.toLowerCase() === inv.email.toLowerCase();
  const until = inv.expiresAt.toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "UTC" }) + " UTC";

  const intro = (
    <div className="flex flex-col gap-2">
      <p className="flex flex-wrap items-center gap-1.5">
        You are invited as <RoleTag role={inv.role} /> by {inv.invitedBy}.
      </p>
      <p className="text-[12px] text-faint">This link works once, until {until}.</p>
    </div>
  );

  if (!existing)
    return (
      <AuthCard title="Join Ingot UI Admin" sub={intro}>
        {me && !sameUser && <p className="mb-3 text-[12px] text-faint">You are signed in as {me.email}. Creating this account signs you in as {inv.email} instead.</p>}
        <AcceptNewForm token={token} email={inv.email} action={acceptNew} />
      </AuthCard>
    );

  if (sameUser)
    return (
      <AuthCard title="Join Ingot UI Admin" sub={intro}>
        <p className="mb-3 text-[13px] text-mute">
          Signed in as <span className="text-ink">{inv.email}</span>
          {staff ? `, already ${staff.role}. Accepting keeps the higher role.` : "."}
        </p>
        <AcceptSignedInForm token={token} action={acceptSignedIn} />
      </AuthCard>
    );

  return (
    <AuthCard title="Join Ingot UI Admin" sub={intro}>
      <p className="mb-3 text-[13px] text-mute">An Ingot UI account with this email exists. Sign in with its password to accept.</p>
      {me && (
        <div className="mb-3 flex items-center gap-2 rounded-[8px] bg-tile p-2.5 text-[12px] text-mute">
          <span className="min-w-0 flex-1">Signed in as {me.email}. Signing in below switches accounts.</span>
          <SignOutButton label="Sign out" className="btn-line !h-7 !px-3" />
        </div>
      )}
      <AcceptExistingForm token={token} email={inv.email} action={acceptExisting} />
    </AuthCard>
  );
}
