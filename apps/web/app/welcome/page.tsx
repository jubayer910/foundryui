import type { Metadata } from "next";
import { systems } from "@/lib/catalog";
import { SystemPicker } from "@/components/site/system-picker";

export const metadata: Metadata = { title: "Welcome" };

export default async function Welcome({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const next = typeof sp.next === "string" && sp.next.startsWith("/") ? sp.next : "/";
  return (
    <div className="mx-auto max-w-[640px] pt-12 lg:pt-20">
      <h1 className="page-title">Which system are you building with?</h1>
      <p className="page-sub mt-1">We’ll open the library in that look. You can switch any time.</p>
      <SystemPicker systems={systems.map((s) => ({ slug: s.slug, name: s.name, accent: s.accent, tagline: s.tagline, live: s.status === "live" }))} next={next} />
    </div>
  );
}
