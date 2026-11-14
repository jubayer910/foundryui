import type { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";

export const metadata: Metadata = { title: { default: "Admin", template: "%s | Ingot UI Admin" }, robots: { ...NOINDEX, follow: false } };

/** Everything under /admin: noindex, no public chrome (see components/site/site-chrome.tsx). Guards live in (panel)/layout.tsx. */
export default function AdminRoot({ children }: LayoutProps<"/admin">) {
  return children;
}
