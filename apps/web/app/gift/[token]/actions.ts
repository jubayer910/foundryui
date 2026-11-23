"use server";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { claimGift } from "@/lib/gift";

export async function claimAction(form: FormData) {
  const token = String(form.get("token") ?? "").slice(0, 100);
  const here = "/gift/" + encodeURIComponent(token);
  const user = await getSessionUser().catch(() => null);
  if (!user) redirect("/sign-in?next=" + encodeURIComponent(here));
  const r = await claimGift(user, token);
  if (r.ok) redirect("/account?gift=1");
  redirect(`${here}?e=${encodeURIComponent(r.message)}`);
}
