import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";
import { systems } from "@/lib/catalog";
import { IlloTile } from "@/components/site/illo";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[640px] pt-12 lg:pt-20">
      <IlloTile scene="lost" label="A grid with one block missing" className="mb-6 h-[180px]" />
      <h1 className="page-title">This page doesn’t exist</h1>
      <p className="page-sub mt-1">The link may be old, or the component was renamed. These will get you back on track.</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        <Link href="/" className="btn-ink">Browse components</Link>
        <Link href="/systems" className="btn-line">Design systems</Link>
        <Link href="/blog" className="btn-line">Resources</Link>
      </div>
      <h2 className="mt-10 text-[13px] font-medium">Systems</h2>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {systems.map((s) => (
          <li key={s.slug}><Link href={"/systems/" + s.slug} className="pill">{s.name}</Link></li>
        ))}
      </ul>
      <h2 className="mt-8 text-[13px] font-medium">Popular guides</h2>
      <ul className="mt-2 border-t border-hair">
        {posts.slice(0, 4).map((p) => (
          <li key={p.slug} className="border-b border-hair"><Link href={"/blog/" + p.slug} className="block py-2 text-[13px] hover:underline">{p.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}
