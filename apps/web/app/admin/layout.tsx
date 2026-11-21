import type { Metadata, Viewport } from "next";
import { NOINDEX } from "@/lib/seo";

/**
 * The admin installs as its own app ("Ingot UI Admin", opens on Activations). The manifest and the Apple web
 * app tags are only on /admin pages; there is no service worker, so no admin data is ever cached on the device.
 */
export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | Ingot UI Admin" },
  robots: { ...NOINDEX, follow: false },
  manifest: "/admin/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Ingot UI Admin", statusBarStyle: "default" },
  // Older iOS only reads the apple- prefixed tag.
  other: { "apple-mobile-web-app-capable": "yes" },
};

export const viewport: Viewport = { themeColor: "#0b0b0b", viewportFit: "cover" };

/** Everything under /admin: noindex, no public chrome (see components/site/site-chrome.tsx). Guards live in (panel)/layout.tsx. */
export default function AdminRoot({ children }: LayoutProps<"/admin">) {
  return children;
}
