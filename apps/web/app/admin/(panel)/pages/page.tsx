import type { Metadata } from "next";
import { requireStaff } from "@/lib/admin";
import { getContent } from "@/lib/content/store";
import { EDITABLE_PAGES } from "@/lib/content/pages";
import { AdminHead } from "@/components/admin/ui";
import { PagesEditor } from "@/components/admin/content/pages-editor";
import { recentContentEdits } from "./actions";

export const metadata: Metadata = { title: "Pages" };

export default async function AdminPages({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireStaff("content", "/admin/pages");
  const sp = await searchParams;
  const want = typeof sp.p === "string" ? sp.p : "/";
  const page = EDITABLE_PAGES.find((p) => p.path === want) ?? EDITABLE_PAGES[0];
  const [content, history] = await Promise.all([getContent(), recentContentEdits()]);
  return (
    <div className="max-w-[1180px]">
      <AdminHead title="Pages" sub="Change the words on the site. Saved text is live within a minute, no deploy. Layout and pictures stay as they are." />
      <PagesEditor pages={EDITABLE_PAGES} page={page} content={content} history={history} />
    </div>
  );
}
