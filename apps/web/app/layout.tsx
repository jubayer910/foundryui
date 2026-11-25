import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Rail, railCounts, railDrops, railSystems } from "@/components/site/rail";
import { MobileBar } from "@/components/site/mobile-bar";
import { SiteChrome } from "@/components/site/site-chrome";
import { CustomCursor } from "@/components/site/cursor/custom-cursor";
import { JsonLd, SITE, organizationLd, websiteLd } from "@/lib/seo";
import "./globals.css";

// opsz axis: large headings use Inter Display (opsz 32) from the same variable font
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], axes: ["opsz"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Google Analytics 4 (G-791MYC76DX) and Microsoft Clarity (zdnoi4px8s) load only after cookie consent:
// see components/site/cookie-consent.tsx (mounted by SiteChrome, never on /admin).

const DESCRIPTION = "Nine dashboard design systems with 2,600+ components. Copy React code checked against Figma, paste Figma layers, or let your AI agent build through MCP.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Ingot UI: dashboard components in React, Figma and MCP", template: "%s | Ingot UI" },
  description: DESCRIPTION,
  applicationName: "Ingot UI",
  authors: [{ name: "Ingot UI", url: "https://ingotui.com" }],
  creator: "Ingot UI",
  publisher: "Ingot UI",
  openGraph: { type: "website", siteName: "Ingot UI", locale: "en_US", title: "Ingot UI: dashboard components in React, Figma and MCP", description: DESCRIPTION },
  twitter: { card: "summary_large_image", site: "@ingotui", creator: "@ingotui", title: "Ingot UI: dashboard components in React, Figma and MCP", description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  // Search Console / Bing: set these env vars once the owner verifies the domain.
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined, other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased`} data-system="loopo">
      <body className="min-h-full">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <CustomCursor />
        {/* Public chrome, GA and Clarity live in SiteChrome; /admin renders without them. */}
        <SiteChrome rail={<Rail />} mobileBar={<MobileBar systems={railSystems} counts={railCounts} drops={railDrops} />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
