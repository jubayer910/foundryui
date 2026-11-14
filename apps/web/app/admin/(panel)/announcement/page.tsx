import type { Metadata } from "next";
import Link from "next/link";
import { can, requireStaff } from "@/lib/admin";
import { getSettings } from "@/lib/settings";
import { Placeholder } from "@/components/admin/shell/placeholder";
import { Tag } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Announcement" };

export default async function AdminAnnouncement() {
  const { role } = await requireStaff("content", "/admin/announcement");
  const { announcement: a } = await getSettings();
  return (
    <Placeholder
      title="Announcement"
      sub="The bar above every page of the site."
      icon="speakerphone"
      what={["Edit the bar text and link here", "Live countdown to the deal end date", "A preview of the bar before it goes out"]}
    >
      <div className="mt-1 w-full max-w-[560px] rounded-[8px] bg-tile p-3 text-[13px]">
        <div className="flex items-center gap-2">
          <span className="text-mute">Live now</span>
          <Tag tone={a.enabled ? "good" : "plain"}>{a.enabled ? "On" : "Off"}</Tag>
        </div>
        <p className="mt-1">{a.text || "No text"}</p>
        {a.href && <p className="mt-0.5 text-[12px] text-faint">Links to {a.href}</p>}
      </div>
      {can(role, "pricing") ? (
        <Link href="/admin/pricing" className="btn-line">
          Edit it under Pricing & deal for now
        </Link>
      ) : (
        <p className="text-[12px] text-faint">Until the editor moves here, an admin changes the bar under Pricing & deal.</p>
      )}
    </Placeholder>
  );
}
