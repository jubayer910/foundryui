"use client";
import dynamic from "next/dynamic";
import type { BaseSystem } from "./generator";

function Placeholder() {
  return (
    <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]" aria-busy="true" aria-label="Loading the theme generator">
      <div className="card h-[620px] animate-pulse bg-tile motion-reduce:animate-none" />
      <div className="card h-[620px] animate-pulse bg-tile motion-reduce:animate-none" />
    </div>
  );
}

// The tool is a client island in its own chunk: the page text renders first and never waits for it.
const Generator = dynamic(() => import("./generator"), { ssr: false, loading: Placeholder });

export function ThemeGeneratorIsland({ systems }: { systems: BaseSystem[] }) {
  return <Generator systems={systems} />;
}
