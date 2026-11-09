// Builds data/<system>/icon-map.json from data/<system>/icon-list.json:
// source icon (set|Style|Type) -> Foundry Icon name + style + a 24px SVG ready for figma.createNodeFromSvg.
// Brand logos come from Simple Icons (CC0). Third-party icon drawings are never copied.
import { readFileSync, writeFileSync } from "node:fs";
import * as SI from "simple-icons";
import { mapIcon } from "./convert.mjs";

const sys = process.argv[2];
const dir = new URL("./data/" + sys + "/", import.meta.url);
const list = JSON.parse(readFileSync(new URL("icon-list.json", dir), "utf8"));
const ICONS = new URL("../../../apps/web/public/icons/", import.meta.url);
const bodies = {};
const body = (style, name) => (bodies[style] ||= JSON.parse(readFileSync(new URL(style + ".json", ICONS), "utf8")))[name];
const BRANDS = { stripe: "siStripe", shopify: "siShopify", slack: "siSlack", google: "siGoogle", paypal: "siPaypal", instagram: "siInstagram", wordpress: "siWordpress", webflow: "siWebflow", apple: "siApple", github: "siGithub", gitlab: "siGitlab", npm: "siNpm", "adobe-illustrator": "siAdobeillustrator", "adobe-photoshop": "siAdobephotoshop", python: "siPython", java: "siOpenjdk", bitbucket: "siBitbucket", notion: "siNotion", figma: "siFigma", discord: "siDiscord", "google-drive": "siGoogledrive", gmail: "siGmail", linkedin: "siLinkedin", "new-twitter": "siX", twitter: "siX", facebook: "siFacebook", youtube: "siYoutube", tiktok: "siTiktok", whatsapp: "siWhatsapp", zapier: "siZapier", hubspot: "siHubspot", salesforce: "siSalesforce", mailchimp: "siMailchimp", intercom: "siIntercom", jira: "siJira", linear: "siLinear", vercel: "siVercel", aws: "siAmazonwebservices", "amazon": "siAmazon", snowflake: "siSnowflake", "google-sheet": "siGooglesheets", dropbox: "siDropbox", trello: "siTrello", asana: "siAsana", zoom: "siZoom", "microsoft": "siMicrosoft", openai: "siOpenai", anthropic: "siAnthropic", "visa": "siVisa", "mastercard": "siMastercard" };
const STYLE = { Stroke: "stroke-rounded", Solid: "solid", Bulk: "bulk", Duotone: "duotone", Twotone: "twotone" };
const out = {};
const fallbacks = [];
for (const key of Object.keys(list)) {
  const [set, style, type] = key.split("|");
  const base = set.toLowerCase().replace(/\s*·\s*\d+$/, "").replace(/-\d+$/, "");
  const brand = BRANDS[base] && SI[BRANDS[base]];
  if (brand) {
    out[key] = { ours: "brand-" + brand.slug, style: "brand", svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="${brand.path}" fill="#000000"/></svg>` };
    continue;
  }
  const ours = mapIcon(set);
  if (ours === "circle") fallbacks.push(set);
  let st = STYLE[style] || "stroke-rounded";
  if (st === "stroke-rounded" && type === "Sharp") st = "stroke-sharp";
  const b = body(st, ours) || body("stroke-rounded", ours);
  out[key] = { ours, style: st, svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">${b.replace(/currentColor/g, "#000000")}</svg>` };
}
writeFileSync(new URL("icon-map.json", dir), JSON.stringify(out));
console.log(JSON.stringify({ sys, icons: Object.keys(out).length, brands: Object.values(out).filter((v) => v.style === "brand").length, fallbacks }));
