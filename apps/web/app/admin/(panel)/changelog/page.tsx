import type { Metadata } from "next";
import { requireStaff } from "@/lib/admin";
import { Placeholder } from "@/components/admin/shell/placeholder";

export const metadata: Metadata = { title: "Changelog" };

export default async function AdminChangelog() {
  await requireStaff("content", "/admin/changelog");
  return (
    <Placeholder
      title="Changelog"
      sub="Release notes shown on /changelog."
      icon="history"
      what={["Changelog entries in the database", "The current entries kept as the starting set", "Write, edit and publish without a deploy"]}
    >
      <a href="/changelog" className="btn-line">
        Open the public changelog
      </a>
    </Placeholder>
  );
}
