import type { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";
import { systems } from "@/lib/catalog";
import { HEARD_FROM } from "@/app/api/feedback/store";
import { OnboardingFlow } from "@/components/site/onboarding-flow";

export const metadata: Metadata = { title: "Welcome", robots: NOINDEX };

/** Right after sign-up: pick a system, then (optionally) say where you heard of us. See components/site/onboarding-flow.tsx. */
export default async function Welcome({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const next = typeof sp.next === "string" && sp.next.startsWith("/") && !sp.next.startsWith("//") ? sp.next : "/";
  return (
    <OnboardingFlow
      systems={systems.map((s) => ({ slug: s.slug, name: s.name, tagline: s.tagline, live: s.status === "live" }))}
      heard={HEARD_FROM}
      next={next}
    />
  );
}
