import { SITE_URL as CATALOG_SITE_URL, systems, items } from "./catalog";
import { FIGMA_TOTAL } from "./figma-library";
import { CODED_TOTAL } from "./library";
import iconStats from "./icon-stats.json";

/**
 * Canonical origin for every absolute URL (canonicals, sitemap, JSON-LD, OG).
 * Set NEXT_PUBLIC_SITE_URL when the custom domain is live; until then the Workers URL is used.
 */
export const SITE = (process.env.NEXT_PUBLIC_SITE_URL || CATALOG_SITE_URL).replace(/\/$/, "");
export const SITE_NAME = "Ingot UI";
export const PUBLISHER = "Wolfpixel";
export const abs = (path = "/") => SITE + (path.startsWith("/") ? path : "/" + path);

/** Date the catalogue data last changed; used as lastmod for library URLs. Bump with a data release. */
export const CATALOG_UPDATED = "2026-11-10";

export const COMPONENT_TOTAL = items.length + FIGMA_TOTAL;
export const fmt = (n: number) => n.toLocaleString("en-US");
export const STATS = { components: COMPONENT_TOTAL, coded: CODED_TOTAL, figma: FIGMA_TOTAL, icons: iconStats.line, systems: systems.length };

type Json = Record<string, unknown>;

/** Server-rendered JSON-LD script. `<` is escaped so content can never close the tag. */
export function JsonLd({ data }: { data: Json | Json[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const ORG_ID = SITE + "/#organization";
export const WEBSITE_ID = SITE + "/#website";

export function organizationLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Foundry UI",
    url: SITE + "/",
    logo: abs("/logo.png"),
    description: "Dashboard design systems for founders: React components checked against Figma, Figma libraries, icons and an MCP server for AI coding agents. Made by Wolfpixel.",
    parentOrganization: { "@type": "Organization", name: PUBLISHER, url: "https://www.wolfpixel.agency" },
  };
}

export function websiteLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE + "/",
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: SITE + "/?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbLd(trail: [name: string, path: string][]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
  };
}

export function faqLd(faq: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

/** Strip the tiny inline markup used in post copy ([text](href), **bold**, `code`). */
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/`([^`]+)`/g, "$1");

/** Short meta description: whole words, at most n characters. */
export function clip(s: string, n = 158) {
  const t = plain(s).replace(/\s+/g, " ").trim();
  if (t.length <= n) return t;
  return t.slice(0, t.lastIndexOf(" ", n - 1)).replace(/[,;:]$/, "") + "…";
}

/** Robots value for pages that should never be in the index but whose links may be followed. */
export const NOINDEX = { index: false, follow: true } as const;

/**
 * Complete metadata for one page. Next merges openGraph/twitter shallowly, so each page
 * sets the whole object; this keeps siteName, card type and canonical consistent.
 */
export function pageMeta({ title, description, path, absoluteTitle, noindex, type = "website", published, modified, image = "/opengraph-image" }: { title: string; description: string; path: string; absoluteTitle?: boolean; noindex?: boolean; type?: "website" | "article"; published?: string; modified?: string; /** route of the segment's opengraph-image, or the site card */ image?: string }) {
  const full = absoluteTitle ? title : title + " | " + SITE_NAME;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex ? NOINDEX : undefined,
    // An explicit image wins over segment opengraph-image files, so pass the segment's own route.
    openGraph: { type, siteName: SITE_NAME, locale: "en_US", url: path, title: full, description, images: [{ url: image, width: 1200, height: 630, alt: full }], ...(type === "article" ? { publishedTime: published, modifiedTime: modified ?? published, authors: [PUBLISHER] } : {}) },
    twitter: { card: "summary_large_image" as const, title: full, description, images: [image] },
  };
}
