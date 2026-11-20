import type { Metadata } from "next";
import { requireStaff } from "@/lib/admin";
import { getPriceBook } from "@/lib/plans";
import { AdminHead, Tag } from "@/components/admin/ui";
import { AnnouncementForm } from "@/components/admin/content/announcement-form";
import { SignupCardForm } from "@/components/admin/content/signup-card-form";

export const metadata: Metadata = { title: "Announcement" };

export default async function AdminAnnouncement() {
  await requireStaff("content", "/admin/announcement");
  const book = await getPriceBook();
  const a = book.settings.announcement;
  const live = a.enabled && !!a.text;
  return (
    <div className="max-w-[880px]">
      <AdminHead title="Announcement" sub="The bar above every page of the site.">
        <Tag tone={live ? "good" : "plain"}>{live ? "On" : "Off"}</Tag>
      </AdminHead>
      <AnnouncementForm initial={a} deal={book.dealActive ? { left: book.deal.left, total: book.deal.total } : null} />
      <SignupCardForm initial={book.settings.signupCard} />
    </div>
  );
}
