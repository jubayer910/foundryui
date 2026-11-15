/**
 * GET /admin/manifest.webmanifest: the installable admin app. Scoped to /admin/ so the public site never
 * opens inside it. Icons are the Ingot mark (app/icon.svg) rendered to PNG in public/pwa.
 */
export const dynamic = "force-static";

export function GET() {
  const manifest = {
    id: "/admin/",
    name: "Ingot UI Admin",
    short_name: "Ingot Admin",
    description: "Approve Contra activations and run Ingot UI from your phone.",
    start_url: "/admin/activations",
    scope: "/admin/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#0b0b0b",
    icons: [
      { src: "/pwa/admin-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/pwa/admin-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/pwa/admin-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
    shortcuts: [
      { name: "Activations", url: "/admin/activations", icons: [{ src: "/pwa/admin-192.png", sizes: "192x192", type: "image/png" }] },
      { name: "Orders", url: "/admin/orders", icons: [{ src: "/pwa/admin-192.png", sizes: "192x192", type: "image/png" }] },
    ],
  };
  return new Response(JSON.stringify(manifest), { headers: { "content-type": "application/manifest+json; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
