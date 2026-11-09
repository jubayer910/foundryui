"use client";
import { useRouter } from "next/navigation";

type S = { slug: string; name: string; accent: string; tagline: string; live: boolean };

export function SystemPicker({ systems, next }: { systems: S[]; next: string }) {
  const router = useRouter();
  const pick = (slug: string) => {
    try {
      localStorage.setItem("fu_system", slug);
    } catch {}
    router.push(next);
  };
  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-2">
      {systems.map((s) => (
        <button key={s.slug} onClick={() => pick(s.slug)} className="card flex items-center gap-3 p-3 text-left transition-colors hover:bg-tile">
          <span className="size-8 shrink-0 rounded-[8px]" style={{ background: s.accent }} />
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-medium">{s.name}</span>
            <span className="block truncate text-[12px] text-mute">{s.live ? s.tagline : "In Figma now, code soon. We’ll start you on Loopo."}</span>
          </span>
        </button>
      ))}
      <button onClick={() => router.push(next)} className="btn-line sm:col-span-2">
        Not sure yet, show me everything
      </button>
    </div>
  );
}
