/**
 * More open-licence line sets, read from their Iconify JSON packages (@iconify-json/<prefix>).
 * Only stroke drawings on a 24px grid, one weight per set; the style wrapper redraws them at 1.5px.
 * Order = priority when two sets use the same name (the first one wins).
 *
 *   keep:  which names to take (the set's line weight)
 *   strip: weight suffix removed from the name
 *   size:  source grid when it isn't 24 (the drawing is scaled down to 24)
 */
export const SETS = [
  { prefix: "solar", keep: /-linear$/, strip: /-linear$/ },
  { prefix: "tdesign" },
  { prefix: "mynaui" },
  { prefix: "mage" },
  { prefix: "proicons" },
  { prefix: "heroicons", keep: /^(?!.*-(16|20)-solid$)(?!.*-solid$)/ },
  { prefix: "iconamoon", keep: /-light$/, strip: /-light$/ },
  { prefix: "lets-icons", keep: /-light$/, strip: /-light$/ },
  { prefix: "flowbite", keep: /-outline$/, strip: /-outline$/ },
  { prefix: "majesticons", keep: /-line$/, strip: /-line$/ },
  { prefix: "meteor-icons" },
  { prefix: "akar-icons" },
  { prefix: "humbleicons" },
  { prefix: "streamline-ultimate" },
  { prefix: "lucide-lab" },
  { prefix: "icon-park-outline", size: 48 }, // drawn on a 48 grid: scaled to 24
];

// Logos and product names: trademarks stay out.
export const BRAND_WORD = new Set(
  `adobe airbnb amazon android angular apple appstore atlassian behance bing bitbucket blogger bluesky bootstrap chrome codepen
  codesandbox discord docker dribbble dropbox ethereum facebook figma firefox framer github gitlab gmail google instagram
  javascript jira kubernetes laravel linkedin mastodon messenger microsoft netflix nextjs nodejs npm
  paypal pinterest playstation python reddit safari sass shopify skype slack snapchat soundcloud spotify stackoverflow
  stripe svelte tailwind telegram tiktok trello tumblr twitch twitter typescript ubuntu vercel vimeo vk vue
  wechat whatsapp windows wordpress xbox yahoo youtube tdesign heroicons mynaui iconamoon flowbite majesticons
  humbleicons proicons mageicons x-twitter openai chatgpt claude copilot perplexity midjourney huggingface
  mastercard amex applepay googlepay gpay alipay venmo bitcoin-logo binance metamask nintendo samsung huawei xiaomi
  tesla bmw audi mercedes toyota ikea nike adidas starbucks mcdonalds uber lyft airbnb expedia tripadvisor yelp
  wikipedia quora producthunt hackernews devto hashnode substack patreon kickstarter gumroad lemonsqueezy webflow wix squarespace
  clickup asana hubspot salesforce zapier ifttt twilio sendgrid mailchimp intercom zendesk
  winrar win kotlin webpack algolia anthropic astro bilibili disqus flipboard hugo preact solidjs chromium plantuml graphviz
  baokemeng benz bytedance dianziqian lincoln mitsubishi renault volkswagen qiyehao topbuzz tuchong ulikecam viencharts weixin
  xiaodu xigua xingfuli youtobe zijinyunying iwatch dell onenote outlook teams draw earpods myna humbleicon sonic mermaid`.split(/\s+/),
);
// Words that are also ordinary words: a logo only when the whole name is the word.
const BRAND_EXACT = new Set("elephant whale hamlet mega edge medium steam unity sketch threads monday meta zoom booking notion opera linear react visa canva miro lets akar solar sony".split(" "));
export const isBrandName = (n) => BRAND_EXACT.has(n) || n.split("-").some((w) => BRAND_WORD.has(w)) || /^(logo|brand)-|-(logo|brand)$/.test(n);

// Upstream typos and shorthand -> real words, so every label reads right.
const WORDFIX = {
  recive: "receive", arhive: "archive", arhives: "archives", chield: "shield", compas: "compass", dimond: "diamond", transger: "transfer",
  tumer: "timer", sertificate: "certificate", newspapper: "newspaper", glas: "glass", lidquid: "liquid", reciept: "receipt",
  heaphone: "headphone", shiled: "shield", ordored: "ordered", colum: "column", cicrle: "circle", brdige: "bridge", steoller: "stroller",
  dumbbel: "dumbbell", maill: "mail", sleaves: "sleeves", whit: "with", minimlistic: "minimalistic", strucutre: "structure",
  superviser: "supervisor", protecttion: "protection", ranslation: "translation", alfa: "alpha", tangerinr: "tangerine", pined: "pinned",
  pil: "pill", pils: "pills", del: "delete", hor: "horizontal", foto: "photo", halfs: "halves", yogabasic: "yoga-basic", etherium: "ethereum",
  rubel: "ruble", alarmclock: "alarm-clock", creditcard: "credit-card", videocamera: "video-camera", waterdrop: "water-drop",
  waterdrops: "water-drops", wineglass: "wine-glass", usergroup: "user-group", usercase: "user-case", textformat: "text-format",
  poweroff: "power-off", icecream: "ice-cream", banknotes: "bank-notes", noteblock: "note-block", bulletpoint: "bullet-point",
  wi: "wi", alt1: "alt-1", v1: "v1", v2: "v2",
};
export const fixName = (n) => n.split("-").map((w) => WORDFIX[w] ?? w).join("-").replace(/^wi-fi/, "wifi").replace(/-wi-fi/g, "-wifi");
