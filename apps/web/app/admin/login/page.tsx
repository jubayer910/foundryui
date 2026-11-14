import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getStaff, safeNext } from "@/lib/admin";
import { getSessionUser } from "@/lib/auth";
import { sp } from "@/components/admin/guard";
import { AuthCard, FormError } from "@/components/admin/shell/auth-card";
import { LoginForm } from "@/components/admin/shell/login-form";
import { SignOutButton } from "@/components/admin/shell/sign-out-button";

export const metadata: Metadata = { title: "Sign in" };
export const dynamic = "force-dynamic";

export default async function AdminLogin({ searchParams }: PageProps<"/admin/login">) {
  const next = safeNext(sp((await searchParams).next));
  if (await getStaff()) redirect(next);
  const user = await getSessionUser().catch(() => null);

  if (user)
    return (
      <AuthCard title="Sign in to Ingot UI Admin">
        <div className="flex flex-col gap-3">
          <FormError>This account has no admin access.</FormError>
          <p className="text-[13px] text-mute">
            You are signed in as <span className="text-ink">{user.email}</span>. Ask an owner for an invite, or sign in with a staff account.
          </p>
          <SignOutButton label="Use another account" />
        </div>
      </AuthCard>
    );

  return (
    <AuthCard title="Sign in to Ingot UI Admin" sub="Staff accounts only. Use the email and password of your Ingot UI account.">
      <LoginForm next={next} />
    </AuthCard>
  );
}
