import type { Metadata } from "next";
import { PageHead } from "@/components/site/page-head";
import { SoundBoard } from "./sound-board";

// Internal preview for the owner: not linked anywhere, not in the sitemap, noindex + nofollow.
export const metadata: Metadata = { title: "Cursor and click sounds", robots: { index: false, follow: false } };

export default function CursorSoundsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHead title="Cursor and click sounds" sub="Internal preview. Pick one sound; the cursor is already live site-wide." />
      <SoundBoard />
    </div>
  );
}
