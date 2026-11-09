import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Rail, railSystems } from "@/components/site/rail";
import { MobileBar } from "@/components/site/mobile-bar";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Foundry UI — dashboard components in Figma, React and MCP", template: "%s · Foundry UI" },
  description: "Six complete design systems of dashboard components. Copy any piece as React code, a Figma layer or an image, or let your AI agent pull it through MCP.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased`} data-system="loopo">
      <body className="min-h-full">
        <div className="flex min-h-dvh">
          <Rail />
          <div className="min-w-0 flex-1">
            <MobileBar systems={railSystems} />
            <main className="px-4 pb-24 pt-4 sm:px-6 lg:pt-5">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
