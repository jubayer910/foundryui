/**
 * Hugeicons free set (MIT), read from the Iconify JSON package @iconify-json/hugeicons.
 * Drawn on the same spec as the rest of the library (24px grid, 1.5px stroke), so the icons are
 * used as drawn. This module decides which ones join, under what name, category and tags.
 *
 * Out: brand and product logos (trademarks), icons the style deriver can't read (transforms, <use>),
 * and names that don't describe the drawing. Typos in upstream names are fixed.
 */

// Third-party trademarks: product, company and AI-model logos.
const BRAND = new Set(
  `airbnb amazon amie android apple-finder apple-intelligence apple-music apple-news apple-reminder apple-stocks apple-vision-pro
  bebo bing blogger bluesky bootstrap brandfetch castbox chat-gpt chrome chrysler claude codepen codesandbox coinbase copilot css-3
  datev deepseek deviantart digg discord dribbble dropbox ds3-tool envato figma fiverr flaticon flickr forrst foursquare framer gameboy
  gitbook gitlab groww hackerrank hangout html-5 hugeicons iconjar imo instagram ipod java kimi-ai klarna ko-fi layers-logo leetcode
  loom lottiefiles master-card mastodon medium medium-square messenger meta mistral mollie mymind nike npm payoneer paypal periscope
  perplexity-ai pexels picasa pinterest plaxo pokeball python quora qwen re react reddit replit roblox rubiks-cube safari scribd shopify
  shutterstock sketch skool skype slack slideshare snapchat soundcloud spotify stripe stumbleupon tailwindcss teamviewer telegram tetris
  tiktok tiltify trello tumblr twitch uber unsplash upwork viber vimeo visual-studio-code w-3-schools waze wechat wikipedia wise
  wordpress xing youtube zoom zoom-circle zoom-square`.split(/\s+/),
);
const BRAND_RE = /^(adobe|behance|capcut|ethereum|facebook|github|google|grok|kickstarter|linkedin|microsoft|new-twitter|nintendo|notion|shadcn|siri|super-mario|threads|tinder|twitter|vk|wattpad|webflow|whatsapp|windows|wps-office)(-.*)?$/;
export const isBrand = (n) => BRAND.has(n) || BRAND_RE.test(n);

// Upstream typos and unclear names -> names that say what the icon shows.
const FIX = [
  [/^advertisiment/, "advertisement"],
  [/speach/g, "speech"],
  [/^streering-wheel/, "steering-wheel"],
  [/^healtcare/, "healthcare"],
  [/^candelier/, "chandelier"],
  [/^departement/, "department"],
  [/^walpaper/, "wallpaper"],
  [/^vynil/, "vinyl"],
  [/^pavilon/, "pavilion"],
  [/potrait/g, "portrait"],
  [/^maping/, "mapping"],
  [/^flim-slate/, "film-slate"],
  [/maslowo/, "maslow"],
  [/^airpod/, "earbuds"],
  [/^ski-dice-faces-01$/, "skiing-person"],
  [/^arrow-(up|down)01$/, "arrow-$1-0-to-1"],
  [/^arrow-(up|down)10$/, "arrow-$1-1-to-0"],
  [/^mp-(\d)(\d\d)$/, "mp$1-$2"],
  [/^mp-(\d)-(\d\d)$/, "mp$1-$2"],
  [/^(heading|clock|calendar|grid|rows|axis|rotate|scale|flip|move|book|building|flower|gamepad|folder-git|circle-slash|calendar-check|calendar-minus|calendar-plus|file-axis|book-up)(\d)/, "$1-$2"],
  [/-(horizontal|vertical|diagonal)(\d)$/, "-$1-$2"],
  [/^calendar-(check|minus|plus)(\d)$/, "calendar-$1-$2"],
];
export function rename(n) {
  let out = n;
  for (const [re, to] of FIX) out = out.replace(re, to);
  return out;
}

// AI: the core concepts get their own category; tags make them findable by meaning.
const AI_RE = /^(ai-.*|artificial-intelligence-.*|super-intelligence(-.*)?|robot-.*|robotic|machine-robot|chat-bot|neural-network|algorithm|brain-0\d|chat-spark(-.*)?|bubble-chat-spark(-.*)?|call-spark-.*|activity-spark|magic-wand-.*|wand-sparkles|magic-book|cursor-magic-selection-.*|speech-to-text|text-to-speech|voice-to-text|voice-id|hologram|nano-technology|user-ai|video-ai|video-camera-ai|mcp-server|chip(-02)?|cpu-.*|.*-sparkles?)$/;
export const isAI = (n) => AI_RE.test(n);

const AI_TAGS = [
  [/brain|neural|learning|intelligence|algorithm/, ["machine learning", "model", "neural"]],
  [/chat|speech|bubble|comment|mail/, ["assistant", "chatbot", "llm"]],
  [/robot|bot/, ["bot", "agent", "automation"]],
  [/spark|magic|wand|generat|imagine|beautify|art|draw|paint|sketch/, ["generate", "magic", "sparkle"]],
  [/voice|mic|audio|speech|transcribe|concert/, ["voice assistant", "speech", "audio"]],
  [/image|video|camera|vision|view|scan|crop|background|eraser|wiper|expand|watermark|resolution/, ["computer vision", "image generation"]],
  [/search|browser|web|browsing/, ["ai search", "answer engine"]],
  [/programming|code|computer|laptop|chip|cpu|cloud|network|server|mcp/, ["code generation", "compute", "developer"]],
  [/file|folder|book|sheets|template|content|editing|co-editing|text/, ["content generation", "writing"]],
  [/security|lock|shield/, ["ai safety", "security"]],
  [/translate/, ["translation", "language"]],
  [/schedul|setting|swap|replace/, ["automation", "agent"]],
];
export function aiTags(n) {
  const t = ["ai", "artificial intelligence"];
  for (const [re, add] of AI_TAGS) if (re.test(n)) t.push(...add);
  return [...new Set(t)];
}

// Category by name word, for the words Tabler's own categories don't cover well.
const WORD = {
  chat: "Communication", bubble: "Communication", message: "Communication", mail: "Communication", comment: "Communication",
  call: "Communication", sms: "Communication", inbox: "Communication", contact: "Communication", voice: "Communication", conversation: "Communication",
  user: "System", users: "System", account: "System", setting: "System", settings: "System", notification: "System", login: "System",
  logout: "System", menu: "System", more: "System", checkmark: "System", tick: "System", cancel: "System", add: "System", remove: "System",
  delete: "System", security: "System", lock: "System", shield: "System", password: "System", authorized: "System", validation: "System",
  arrow: "Arrows", sorting: "Arrows", rotate: "Arrows", refresh: "Arrows", reload: "Arrows", repeat: "Arrows", undo: "Arrows", redo: "Arrows",
  swipe: "Gestures", touch: "Gestures", tap: "Gestures", drag: "Gestures", pointing: "Gestures", hand: "Gestures", hold: "Gestures", swipe2: "Gestures",
  mouse: "Devices", cursor: "Design", pen: "Design", border: "Design", align: "Design", layer: "Design", layers: "Design", pathfinder: "Design",
  layout: "Design", insert: "Design", flip: "Design", crop: "Design", paint: "Design", color: "Design", "geometric": "Shapes",
  file: "Document", folder: "Document", document: "Document", note: "Document", task: "Document", book: "Document", bookmark: "Document",
  text: "Text", heading: "Text", paragraph: "Text", quote: "Text", font: "Text",
  chart: "Charts", pie: "Charts", graph: "Charts", analytics: "Charts", dashboard: "Charts", presentation: "Charts", structure: "Charts",
  hierarchy: "Charts", workflow: "Charts", flowchart: "Charts", diagram: "Charts",
  database: "Database", server: "Database", data: "Database", cloud: "Database",
  code: "Development", programming: "Development", api: "Development", terminal: "Development", bug: "Development", source: "Development",
  binary: "Development", webhook: "Development", git: "Version control", branch: "Version control",
  bitcoin: "Currencies", blockchain: "Currencies", crypto: "Currencies", litecoin: "Currencies", coins: "E-commerce", money: "E-commerce",
  dollar: "Currencies", euro: "Currencies", pound: "Currencies", yen: "Currencies", wallet: "E-commerce", credit: "E-commerce",
  shopping: "E-commerce", store: "E-commerce", package: "E-commerce", delivery: "E-commerce", invoice: "E-commerce", discount: "E-commerce",
  cashback: "E-commerce", sale: "E-commerce", tag: "E-commerce", receipt: "E-commerce", cart: "E-commerce", payment: "E-commerce",
  calendar: "System", time: "System", clock: "System", timer: "System", alarm: "System",
  location: "Map", maps: "Map", map: "Map", navigation: "Map", route: "Map", compass: "Map", globe: "Map", earth: "Map", direction: "Map",
  sun: "Weather", moon: "Weather", cloudy: "Weather", rain: "Weather", snow: "Weather", wind: "Weather", tornado: "Weather", storm: "Weather",
  image: "Photography", camera: "Photography", photo: "Photography", gallery: "Photography",
  music: "Media", video: "Media", play: "Media", volume: "Media", audio: "Media", film: "Media", movie: "Media", podcast: "Media", vinyl: "Media",
  computer: "Computers", laptop: "Computers", smart: "Devices", phone: "Devices", mobile: "Devices", tablet: "Devices", wifi: "Devices",
  signal: "Devices", usb: "Devices", battery: "Devices", headphones: "Devices", earbuds: "Devices", tv: "Devices", watch: "Devices", printer: "Devices",
  car: "Vehicles", airplane: "Vehicles", bus: "Vehicles", train: "Vehicles", bike: "Vehicles", truck: "Vehicles", ship: "Vehicles", boat: "Vehicles",
  home: "Buildings", house: "Buildings", building: "Buildings", office: "Buildings", hotel: "Buildings", hospital: "Buildings", villa: "Buildings",
  mosque: "Buildings", church: "Buildings", tower: "Buildings", airport: "Buildings", school: "Buildings", bank: "Buildings",
  workout: "Sport", gym: "Sport", football: "Sport", basketball: "Sport", tennis: "Sport", golf: "Sport", running: "Sport", medal: "Badges",
  laurel: "Badges", award: "Badges", trophy: "Badges", badge: "Badges", crown: "Badges", star: "Badges",
  dice: "Games", game: "Games", puzzle: "Games", chess: "Games",
  medicine: "Health", doctor: "Health", hospital2: "Health", pill: "Health", blood: "Health", heart: "Health", body: "Health", tooth: "Health",
  food: "Food", drink: "Food", coffee: "Food", pizza: "Food", cake: "Food", fruit: "Food", sushi: "Food", taco: "Food", dress: "E-commerce",
  solar: "Electrical", plug: "Electrical", energy: "Electrical", electric: "Electrical",
  dna: "Health", atom: "Nature", tree: "Nature", leaf: "Nature", plant: "Nature", flower: "Nature", sakura: "Nature", tulip: "Nature",
  square: "Shapes", circle: "Shapes", triangle: "Shapes", hexagon: "Shapes", parallelogram: "Shapes", trapezoid: "Shapes",
  share: "System", link: "System", download: "System", upload: "System", search: "System", filter: "System", zoom: "System", edit: "System",
  briefcase: "General", go: "Arrows", quiz: "Document", ramadhan: "Symbols", quran: "Symbols", salah: "Symbols", kaaba: "Buildings",
  // second wave: the long tail that would otherwise land in General
  root: "Design", distribute: "Design", sidebar: "Design", joystick: "Games", mic: "Media", two: "Numbers", three: "Numbers", four: "Numbers",
  seven: "Numbers", coupon: "E-commerce", customer: "System", gold: "E-commerce", loading: "System", passport: "Map", restaurant: "Food",
  cupcake: "Food", dish: "Food", pan: "Food", spoon: "Food", kettle: "Food", pot: "Food", knife: "Food", hamburger: "Food", tea: "Food",
  honey: "Food", french: "Food", tongue: "Mood", smile: "Mood", sad: "Mood", happy: "Mood", relieved: "Mood", touchpad: "Devices",
  waterfall: "Charts", agreement: "Document", legal: "Document", audit: "Document", estimate: "Document", stamp: "Document", doc: "Document",
  ppt: "Document", "7z": "Document", rar: "Document", raw: "Document", tiff: "Document", jsx: "Development", typescript: "Development",
  mp3: "Media", mp4: "Media", attachment: "System", city: "Buildings", castle: "Buildings", factory: "Buildings", megaphone: "Communication",
  mining: "Currencies", parabola: "Math", cosine: "Math", sine: "Math", inequality: "Math", summation: "Math", thumbs: "Gestures",
  victory: "Gestures", shaka: "Gestures", clapping: "Gestures", cardiogram: "Health", pulse: "Health", disability: "Health", taxi: "Vehicles",
  fuel: "Vehicles", female: "Gender", male: "Gender", hotspot: "Devices", simcard: "Devices", software: "System", installing: "System",
  setup: "System", configuration: "System", system: "System", shipping: "E-commerce", cashier: "E-commerce", atm: "E-commerce",
  market: "E-commerce", trade: "E-commerce", purse: "E-commerce", start: "Media", stop: "Media", next: "Media", forward: "Media",
  backward: "Media", underpants: "E-commerce", kurta: "E-commerce", suit: "E-commerce", badminton: "Sport", billiard: "Sport", boxing: "Sport",
  node: "Development", web: "Development", online: "Development", global: "Map", coordinate: "Map", navigator: "Map", profile: "System",
  group: "System", appointment: "System", sent: "Communication", calling: "Communication", look: "System", eco: "Nature", soil: "Nature",
};
/** First name word with a category wins; then the caller's fallback. */
const FRAME = new Set(["square", "circle", "triangle", "hexagon"]); // a frame around the real subject: lowest priority
export function wordCategory(n) {
  const ws = n.split("-");
  for (const w of ws) if (WORD[w] && !FRAME.has(w)) return WORD[w];
  for (const w of ws) if (WORD[w]) return WORD[w];
  return null;
}
