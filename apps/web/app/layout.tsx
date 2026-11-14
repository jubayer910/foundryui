import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Rail, railSystems } from "@/components/site/rail";
import { MobileBar } from "@/components/site/mobile-bar";
import { SupportWidget } from "@/components/site/support-widget";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { TrackBeacon } from "@/components/site/track-beacon";
import { JsonLd, SITE, organizationLd, websiteLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Google Analytics 4 (property ingotui.com, account "Ingot UI"). Client-side route changes are
// counted by GA enhanced measurement (browser history events).
const GA_ID = "G-791MYC76DX";
// Microsoft Clarity (project "ingotui"): heatmaps and session recordings; masks sensitive content by default.
const CLARITY_ID = "zdnoi4px8s";

const DESCRIPTION = "Six dashboard design systems with 1,800+ components. Copy React code checked against Figma, paste Figma layers, or let your AI agent build through MCP.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Ingot UI: dashboard components in React, Figma and MCP", template: "%s | Ingot UI" },
  description: DESCRIPTION,
  applicationName: "Ingot UI",
  authors: [{ name: "Ingot UI", url: "https://ingotui.com" }],
  creator: "Ingot UI",
  publisher: "Ingot UI",
  openGraph: { type: "website", siteName: "Ingot UI", locale: "en_US", title: "Ingot UI: dashboard components in React, Figma and MCP", description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "Ingot UI: dashboard components in React, Figma and MCP", description: DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  // Search Console / Bing: set these env vars once the owner verifies the domain.
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined, other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased`} data-system="loopo">
      <body className="min-h-full">
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <AnnouncementBar />
        <div className="flex min-h-dvh">
          <Rail />
          <div className="min-w-0 flex-1">
            <MobileBar systems={railSystems} />
            <main className="px-4 pb-24 pt-4 sm:px-6 lg:pt-5">{children}</main>
          </div>
        </div>
        <SupportWidget />
        <TrackBeacon />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      </body>
    </html>
  );
}
