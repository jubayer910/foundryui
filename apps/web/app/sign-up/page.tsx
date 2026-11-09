import type { Metadata } from "next";
import { AuthForm } from "@/components/site/auth-form";
import { Icon } from "@/registry/components/icons";

export const metadata: Metadata = { title: "Create account" };

const GETS = ["Unlimited copies of every free component", "Saved items that follow you", "An API key for the MCP server and CLI", "The full Loopo system in Figma"];

export default async function SignUp({ searchParams }: PageProps<"/sign-up">) {
  const sp = await searchParams;
  const after = typeof sp.next === "string" && sp.next.startsWith("/") ? sp.next : "/";
  const next = "/welcome?next=" + encodeURIComponent(after);
  return (
    <div className="mx-auto grid max-w-[760px] gap-8 pt-12 md:grid-cols-[1fr_340px] lg:pt-20">
      <div>
        <h1 className="page-title">Create your free account</h1>
        <p className="page-sub mt-1">Takes 20 seconds. No card.</p>
        <ul className="mt-5 flex flex-col gap-2.5">
          {GETS.map((g) => (
            <li key={g} className="flex items-start gap-2 text-[13px]">
              <Icon name="check" size={15} className="mt-0.5 shrink-0" />
              {g}
            </li>
          ))}
        </ul>
      </div>
      <AuthForm mode="sign-up" next={next} />
    </div>
  );
}
