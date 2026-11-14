import type { Metadata } from "next";
import { requireStaff } from "@/lib/admin";
import { Placeholder } from "@/components/admin/shell/placeholder";

export const metadata: Metadata = { title: "Posts" };

export default async function AdminPosts() {
  await requireStaff("content", "/admin/posts");
  return (
    <Placeholder
      title="Posts"
      sub="Blog posts kept in the database."
      icon="article"
      what={["Markdown editor with a live preview", "SEO fields, draft or published, publish date and cover", "Published posts on /blog, the sitemap and llms.txt next to the existing posts"]}
    />
  );
}
