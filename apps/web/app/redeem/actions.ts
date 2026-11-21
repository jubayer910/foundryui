"use server";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { redeemCode } from "@/lib/appsumo";

export async function redeemAction(form: FormData) {
  const code = String(form.get("code") ?? "").slice(0, 200);
  const user = await getSessionUser().catch(() => null);
  if (!user) redirect("/sign-in?next=" + encodeURIComponent("/redeem?code=" + encodeURIComponent(code)));
  const r = await redeemCode(user, code);
  if (r.ok) redirect("/account?welcome=1");
  redirect(`/redeem?code=${encodeURIComponent(code)}&e=${r.reason}`);
}
