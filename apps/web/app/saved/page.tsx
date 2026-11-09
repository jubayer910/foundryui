import type { Metadata } from "next";
import { items } from "@/lib/catalog";
import { SavedList } from "@/components/site/saved-list";

export const metadata: Metadata = { title: "Saved and recent" };

export default function SavedPage() {
  return (
    <div>
      <header className="flex flex-wrap items-baseline gap-x-2">
        <h1 className="page-title">Saved and recent</h1>
        <p className="page-sub">Your shortlist and everything you copied, kept in this browser.</p>
      </header>
      <SavedList items={items} />
    </div>
  );
}
