/**
 * Help bot vocabulary (workstream K). Plain data, no logic: the matcher in lib/support/match.ts and the
 * intent router consume it.
 *
 * - SYNONYMS: groups of equivalent terms. The first entry is the canonical term. Entries may be multi-word
 *   phrases ("money back"); a matcher should fold those before tokenising, longest first. Includes common
 *   misspellings and Banglish (romanised Bangla) phrasings seen in non-native questions.
 * - STOP_WORDS: extra words to drop on top of the matcher's own list (filler, chat noise, Banglish particles).
 * - INTENT_PHRASES: intent id -> example utterances, for an intent classifier (nearest example / n-gram overlap).
 * - INTENT_ARTICLE: the KB slug (migrations/0013_kb_expand.sql) that best answers each intent, or null when the
 *   intent is handled by a tool or a canned reply (greet, thanks, find_component ...).
 */

export const SYNONYMS: string[][] = [
  // Product and features
  ["mcp", "mcp server", "model context protocol", "mcp tool", "mcp tools", "m c p", "mpc"],
  ["agent", "ai agent", "coding agent", "ai assistant", "assistant", "llm", "copilot agent", "ai"],
  ["claude", "claude code", "claude desktop", "anthropic", "claud", "cloude"],
  ["cursor", "cursor ide", "cursor ai", "curser"],
  ["vscode", "vs code", "visual studio code", "github copilot", "copilot", "vs-code"],
  ["codex", "openai codex", "codex cli", "chatgpt codex"],
  ["windsurf", "codeium", "zed", "cline", "roo code", "continue dev", "jetbrains"],
  ["figma", "figma file", "figma design", "figjam", "figam", "fimga"],
  ["copy", "paste", "export", "clipboard", "copy paste", "copy-paste", "duplicate", "grab"],
  ["component", "components", "block", "blocks", "element", "widget", "ui element", "section", "komponent", "compnent"],
  ["system", "design system", "design systems", "theme", "kit", "ui kit", "library", "style", "look"],
  ["template", "templates", "page template", "full page", "screen", "screens", "starter", "boilerplate"],
  ["icon", "icons", "svg", "glyph", "pictogram", "icon set", "icn"],
  ["chart", "charts", "graph", "graphs", "plot", "visualisation", "visualization", "dataviz"],
  ["table", "data table", "datagrid", "data grid", "grid", "list view", "rows"],
  ["modal", "dialog", "popup", "pop up", "lightbox", "overlay"],
  ["drawer", "side panel", "sheet", "slide over", "slideover", "flyout"],
  ["sidebar", "side nav", "sidenav", "navigation", "nav", "menu bar", "rail"],
  ["kpi", "kpi card", "stat card", "metric card", "stats", "metrics", "kpis"],
  ["token", "tokens", "design tokens", "css variables", "css vars", "variables", "fu tokens", "theme file"],
  ["darkmode", "dark mode", "dark theme", "night mode", "black theme", "dark ui", "darkmode"],
  ["cli", "command line", "terminal", "npx", "npx ingotui", "ingotui cli", "command"],
  ["install", "setup", "set up", "installation", "add", "integrate", "configure", "init", "instal", "intall"],
  ["shadcn", "shadcn ui", "shadcn/ui", "shadcn cli", "registry", "shad cn", "shadcdn"],
  ["tailwind", "tailwind css", "tailwindcss", "tailwind v4", "tw", "tailwind 4"],
  ["react", "reactjs", "react js", "react 19", "jsx", "tsx"],
  ["nextjs", "next js", "next.js", "next", "app router", "nextjs 15", "next 16"],
  ["framework", "vite", "remix", "astro", "vue", "nuxt", "svelte", "angular", "solid"],
  ["apikey", "api key", "api keys", "key", "token key", "access token", "bearer", "bearer token", "secret key", "fu_"],
  ["theme generator", "brand colour", "brand color", "custom colours", "custom colors", "palette", "rebrand"],
  ["typescript", "ts", "javascript", "js", "types"],
  ["code", "source code", "source", "react code", "snippet", "code file"],
  ["preview", "live preview", "demo", "example", "showcase"],
  // Buying and plans
  ["buy", "purchase", "upgrade", "pay", "checkout", "order", "get pro", "subscribe", "kinbo", "kinte", "kena", "kinar"],
  ["price", "pricing", "cost", "how much", "fee", "fees", "rate", "charges", "dam", "koto taka", "koto", "price koto", "prise", "pricng"],
  ["plan", "plans", "tier", "tiers", "package", "subscription", "membership", "license tier"],
  ["free", "free plan", "free tier", "no cost", "gratis", "for free", "free version", "fri"],
  ["pro", "pro plan", "premium", "paid", "paid plan", "pro version"],
  ["lifetime", "ltd", "lifetime deal", "one time", "one-time", "onetime", "pay once", "single payment", "forever", "lifetime access", "life time", "lifetim"],
  ["team", "team plan", "seats", "seat", "colleagues", "co-founder", "cofounder", "teammates", "organisation", "organization", "company plan"],
  ["agency", "enterprise", "business plan", "studio", "bulk licence", "many seats"],
  ["yearly", "annual", "annually", "per year", "a year", "12 months", "bochor"],
  ["monthly", "per month", "a month", "month to month", "mashik"],
  ["deal", "launch deal", "offer", "promo", "sale", "spots", "launch price", "early bird"],
  ["discount", "coupon", "promo code", "voucher", "student", "education discount", "ppp", "regional pricing", "chhar", "cheaper"],
  ["trial", "free trial", "try", "test drive", "evaluate", "demo account"],
  // Payments and activation
  ["payment", "payments", "paid", "transaction", "charge", "payment korbo", "taka dibo", "paymnt"],
  ["contra", "contra.com", "payment provider", "payment platform"],
  ["lemon squeezy", "lemonsqueezy", "lemon", "stripe", "paddle", "gumroad"],
  ["card", "credit card", "debit card", "visa", "mastercard", "amex", "google pay", "cash app", "apple pay"],
  ["paypal", "bkash", "nagad", "rocket", "bank transfer", "wire", "crypto", "usdt", "payoneer", "wise"],
  ["activate", "activation", "activate plan", "unlock", "switch on", "enable plan", "activet", "activete"],
  ["pending", "waiting", "still pending", "not activated", "processing", "delay", "kotokkhon"],
  ["failed", "declined", "payment fail", "payment failed", "rejected", "unsuccessful", "hocche na", "hoyna", "error at checkout"],
  ["refund", "money back", "refund policy", "reimburse", "reimbursement", "chargeback", "return", "taka ferot", "ferot", "refnd"],
  ["cancel", "unsubscribe", "stop subscription", "end subscription", "stop billing", "turn off renewal", "terminate", "bondho"],
  ["renew", "renewal", "auto renew", "auto-renew", "recurring", "next payment", "billing date"],
  ["invoice", "receipt", "bill", "vat", "vat invoice", "tax invoice", "billing history", "proof of payment"],
  ["tax", "vat", "gst", "sales tax"],
  ["currency", "usd", "dollar", "dollars", "euro", "bdt", "taka", "inr", "rupee"],
  // Licence
  ["licence", "license", "licensing", "lisence", "licens", "terms of use", "usage rights", "rights"],
  ["commercial", "commercial use", "client work", "client project", "client projects", "for clients", "freelance", "sell my app", "saas product"],
  ["resell", "redistribute", "sell components", "share library", "marketplace", "themeforest", "envato", "sublicense"],
  ["open source", "opensource", "oss", "public repo", "github repo", "mit"],
  ["ownership", "own the code", "keep code", "after cancel", "stop paying", "expire", "expired"],
  // Account and security
  ["login", "log in", "sign in", "signin", "logged in", "log on", "login korbo", "loging"],
  ["signup", "sign up", "register", "create account", "create an account", "new account", "account khulbo", "registration"],
  ["logout", "log out", "sign out", "signout"],
  ["password", "pass", "pwd", "forgot password", "reset password", "password bhule gechi", "pasword"],
  ["account", "profile", "my account", "account page", "settings", "dashboard account"],
  ["deleteaccount", "delete account", "delete my account", "close account", "close my account", "remove account", "remove my account", "erase my data", "account delete"],
  ["email", "e-mail", "mail", "email address", "gmail"],
  ["limit", "copy limit", "quota", "cap", "allowance", "5 copies", "free copies", "50 calls", "daily limit", "rate limit"],
  ["anonymous", "guest", "no account", "without an account", "without account", "not signed in", "logged out"],
  ["security", "safe", "secure", "2fa", "two factor", "mfa", "hash", "hashed"],
  // Support and problems
  ["support", "help", "contact", "customer service", "helpdesk", "help desk", "shahajjo"],
  ["human", "person", "real person", "agent person", "talk to someone", "someone", "staff", "team member", "manush", "live chat", "operator"],
  ["broken", "not working", "doesnt work", "does not work", "doesn't work", "error", "bug", "issue", "problem", "fail", "fails", "crash", "kaj korche na", "kaj kore na", "somossa"],
  ["404", "not found", "e404", "package not found", "does not exist"],
  ["401", "unauthorized", "invalid key", "missing key", "not authenticated", "-32001"],
  ["blocked", "locked", "lock", "restricted", "forbidden", "upgrade required", "pro only"],
  ["slow", "loading", "not loading", "down", "outage", "timeout", "blank page"],
  ["peer dependency", "eresolve", "peer deps", "legacy-peer-deps", "dependency conflict"],
  ["browser", "chrome", "safari", "firefox", "edge", "brave", "arc"],
  ["font", "fonts", "geist", "inter", "manrope", "typeface", "typography"],
  ["responsive", "mobile", "tablet", "phone", "breakpoint", "small screen"],
  ["accessibility", "a11y", "wcag", "aria", "screen reader", "keyboard navigation", "vpat", "ada"],
  // Updates and legal
  ["roadmap", "upcoming", "coming soon", "planned", "future", "whats next", "next features", "soon"],
  ["changelog", "release notes", "whats new", "updates", "release", "new version", "news"],
  ["request", "feature request", "suggestion", "idea", "wishlist", "feedback", "send feedback"],
  ["privacy", "data", "personal data", "gdpr", "ccpa", "tracking", "cookies", "cookie"],
  ["terms", "terms of service", "tos", "conditions", "legal", "agreement"],
  ["compare", "vs", "versus", "alternative", "alternatives", "difference", "better than", "comparison"],
  ["foundry ui", "foundryui", "old name", "renamed"],
];

/** Extra stop words: chat filler, politeness, Banglish particles. The matcher keeps its own core list. */
export const STOP_WORDS: string[] = [
  "pls", "plz", "plss", "please", "kindly", "sir", "bro", "brother", "dear", "hello", "hi", "hey", "hii", "yo", "guys",
  "thanks", "thank", "thx", "ty", "ok", "okay", "okk", "hmm", "um", "uh", "lol", "just", "actually", "basically", "literally",
  "quick", "question", "query", "doubt", "wondering", "curious", "anyone", "somebody", "something", "anything", "everything",
  "currently", "right", "now", "today", "exactly", "maybe", "perhaps", "kinda", "sorta", "really", "very",
  "ami", "amar", "amake", "apni", "apnar", "tumi", "tomar", "ki", "kivabe", "kibhabe", "keno", "kothay", "kokhon", "ache", "achhe",
  "na", "hobe", "korbo", "korte", "kori", "chai", "dao", "den", "bolen", "bolo", "ekta", "eta", "oita", "ar", "o", "je", "bhai", "vai", "apu",
];

export const INTENT_PHRASES: Record<string, string[]> = {
  greet: [
    "hi", "hello", "hey there", "good morning", "hi, anyone here?", "assalamu alaikum", "salam", "hello ingot", "yo",
    "hey, I have a question", "hi team", "good evening",
  ],
  thanks: [
    "thanks", "thank you", "thanks a lot", "that helped", "perfect, thanks", "great, got it", "ok cool thanks", "dhonnobad",
    "thx", "awesome, solved", "that works now", "appreciate it",
  ],
  goodbye: ["bye", "see you", "that's all", "nothing else", "goodbye", "ok bye", "no more questions", "all good now"],
  contact_support: [
    "talk to a human", "can I speak to a person", "contact support", "I need a real person", "how do I email you",
    "is there live chat", "connect me to an agent", "your bot is not helping", "I want to talk to the founder",
    "support email", "manush er sathe kotha bolte chai", "escalate this", "open a ticket", "who can I contact",
  ],
  pricing: [
    "how much is it", "pricing", "what does pro cost", "price of lifetime", "how much for team", "is it expensive",
    "plans and prices", "koto taka", "dam koto", "what are your prices", "cost per year", "is there a monthly price",
    "how much does ingot ui cost", "price list please",
  ],
  buy: [
    "how do I buy", "I want to purchase pro", "how to upgrade", "take my money", "where is the checkout", "buy lifetime",
    "kibhabe kinbo", "ami kinte chai", "how can I pay for team", "upgrade my account", "get the lifetime deal",
    "subscribe to pro", "purchase link",
  ],
  payment_methods: [
    "can I pay with paypal", "do you accept bkash", "which cards do you take", "payment methods", "google pay accepted?",
    "can I pay by bank transfer", "crypto payment", "nagad diye pay kora jabe", "apple pay", "debit card works?",
  ],
  payment_status: [
    "I paid but my plan is not active", "activation pending", "how long does activation take", "I paid on contra what now",
    "my payment is done but still free", "activate my plan", "still waiting for activation", "payment korsi kintu active hoy nai",
    "where do I activate", "I bought lifetime but it shows free", "plan not unlocked after payment", "did you get my payment",
    "activation status",
  ],
  payment_failed: [
    "payment failed", "card declined", "checkout error", "payment fail hocche", "transaction didn't go through",
    "money deducted but no receipt", "contra payment not working", "cannot pay", "charged twice", "double charge",
  ],
  refund: [
    "I want a refund", "money back please", "refund policy", "can I get my money back", "how to request a refund",
    "taka ferot chai", "refund korben", "not happy, refund", "is there a guarantee", "refund after 7 days",
    "cancel and refund", "chargeback",
  ],
  cancel: [
    "cancel my subscription", "how to cancel pro", "stop auto renew", "unsubscribe", "turn off renewal",
    "cancel team plan", "I don't want to renew", "subscription bondho korbo", "end my plan", "stop billing me",
  ],
  invoice: [
    "where is my invoice", "I need a receipt", "vat invoice", "invoice with company name", "billing history",
    "send me the receipt", "tax invoice for my company", "proof of payment",
  ],
  licence: [
    "can I use it for client work", "commercial license", "is it allowed in my saas", "can I sell my app built with this",
    "licence terms", "can I resell the components", "open source project allowed?", "what if I stop paying",
    "do I need attribution", "client er kaj e use kora jabe", "can my team use one licence", "license for freelancers",
    "can I use it on unlimited projects",
  ],
  find_component: [
    "show me a pricing table", "do you have a kanban board", "is there a date picker", "I need a sidebar",
    "find a data table", "any kpi card", "do you have a modal", "show me charts", "login form component",
    "user profile drawer", "notification dropdown", "settings page", "file upload component", "calendar component",
    "stepper or wizard",
  ],
  find_system: [
    "which design systems do you have", "show me the finance system", "what is loopo", "is there a security dashboard system",
    "list the systems", "which system for an email marketing app", "do you have a crm look", "what is montra",
    "best system for analytics", "systems list", "compare the systems",
  ],
  find_icon: [
    "do you have a bell icon", "search icons", "find an arrow icon", "icon for settings", "is there a trash icon",
    "duotone icons", "user icon svg", "icon for invoices", "how many icons", "chart icon",
  ],
  find_template: [
    "do you have dashboard templates", "full page template", "analytics page template", "admin template",
    "starter screen", "complete dashboard screen", "free templates", "template for a saas dashboard",
  ],
  install_code: [
    "how do I install", "npx command", "install with shadcn", "add a component to my project", "setup in next.js",
    "how to use with vite", "tailwind v4 setup", "where do the files go", "css import for tokens",
    "install korbo kivabe", "copy the code", "how to get the react code", "does it work with tailwind 3",
  ],
  setup_mcp: [
    "how do I connect mcp", "set up claude code", "add to cursor", "vs code mcp config", "codex config.toml",
    "windsurf support", "mcp server url", "connect my ai agent", "how to use with claude", "mcp setup kivabe korbo",
    "copilot agent mode setup", "what is the mcp endpoint", "claude desktop connect", "test my mcp connection",
  ],
  mcp_error: [
    "mcp 401", "invalid api key error", "daily limit reached", "agent says pro component", "tools not showing in cursor",
    "mcp not connecting", "missing or invalid api key", "mcp stopped working", "agent can't find ingot", "-32001 error",
  ],
  cli_error: [
    "npx ingotui 404", "ingotui package not found", "cli not working", "npm error eresolve", "module not found base-ui",
    "shadcn add failed", "components.json missing", "cli skipped file", "peer dependency error", "cannot find module cx",
  ],
  figma_copy: [
    "how to paste in figma", "copy to figma", "figma paste not working", "is there a figma file", "download figma kit",
    "figma variables", "fonts missing in figma", "can my agent design in figma", "figma te kivabe nibo", "figjam support",
  ],
  account_api_key: [
    "where is my api key", "create an api key", "lost my key", "revoke key", "key leaked", "regenerate api key",
    "api key kothay pabo", "is my key safe", "how many keys can I make", "rotate key",
  ],
  account_access: [
    "forgot password", "can't log in", "reset my password", "sign in with google", "change my email", "two factor",
    "locked out", "password bhule gechi", "log out", "how to sign up",
  ],
  copy_limit: [
    "why do I need to sign up", "5 copies limit", "it says free copies used", "copy limit reached", "can't copy anymore",
    "how many copies free", "limit on free plan", "50 mcp calls limit", "is there a limit", "free te koyta copy",
  ],
  team_seats: [
    "team plan", "how many seats", "invite my co-founder", "add a teammate", "remove a member", "seats full",
    "more than 5 people", "join team link not working", "leave team", "who pays for team", "team e member add korbo",
    "can I share my account",
  ],
  dark_mode: [
    "dark mode", "is there a dark theme", "when is dark mode coming", "night mode support", "dark version of components",
    "dark mode ache?", "dark ui", "black theme",
  ],
  roadmap: [
    "what's on the roadmap", "upcoming features", "what's next", "vue version", "will you add sso", "figma code connect",
    "roadmap please", "planned features", "when will x ship", "starter kits coming",
  ],
  changelog: ["what's new", "changelog", "latest release", "release notes", "recent updates", "what changed", "new components this week"],
  compare_tools: [
    "ingot vs shadcn", "compare with untitled ui", "tailwind plus alternative", "difference from tremor", "why not just use shadcn",
    "how is this better than aceternity", "magic ui vs ingot", "flowbite or ingot", "vs tailwind ui", "alternatives",
  ],
  bug_report: [
    "I found a bug", "something is broken", "component looks wrong", "report an issue", "the page crashes",
    "copy button broken", "error on the site", "bug report", "kaj korche na", "layout is broken",
  ],
  feature_request: [
    "can you add a component", "feature request", "please add vue", "I'd like a kanban", "suggestion", "can you build x",
    "request a new system", "idea for you",
  ],
  delete_account: [
    "delete my account", "close my account", "remove my data", "account delete korbo", "erase everything",
    "gdpr delete", "how do I deactivate", "cancel account completely",
  ],
  privacy: [
    "what data do you collect", "privacy policy", "do you sell data", "cookies", "gdpr", "where is my data stored",
    "do you track me", "data export request",
  ],
  what_is: [
    "what is ingot ui", "what is this", "what do you do", "explain the product", "who is this for", "is this foundry ui",
    "eta ki", "how does it work", "what's included", "is it open source",
  ],
  free_plan: [
    "what's free", "is it free", "free plan features", "do I have to pay", "free tier", "trial", "can I try first",
    "free e ki ki pabo",
  ],
  lifetime_deal: [
    "lifetime deal", "how many spots left", "when does the deal end", "is lifetime forever", "ltd", "pay once",
    "lifetime price", "lifetime vs pro",
  ],
  accessibility: ["is it accessible", "wcag compliance", "screen reader support", "vpat", "keyboard navigation", "a11y"],
};

/** Best KB article per intent (slugs in migrations/0013_kb_expand.sql); null = answered by a tool or canned reply. */
export const INTENT_ARTICLE: Record<string, string | null> = {
  greet: null,
  thanks: null,
  goodbye: null,
  contact_support: "contact-support",
  pricing: "pricing-plans",
  buy: "checkout-opening",
  payment_methods: "payment-methods",
  payment_status: "activation-wait",
  payment_failed: "payment-failed",
  refund: "refund-policy",
  cancel: "cancel-subscription",
  invoice: "invoices-receipts",
  licence: "commercial-use",
  find_component: null,
  find_system: "design-systems",
  find_icon: "icons-overview",
  find_template: "templates-free",
  install_code: "install-cli",
  setup_mcp: "connect-mcp",
  mcp_error: "mcp-not-connecting",
  cli_error: "cli-not-found",
  figma_copy: "copy-to-figma",
  account_api_key: "api-key",
  account_access: "forgot-password",
  copy_limit: "free-copy-limit",
  team_seats: "team-plan",
  dark_mode: "dark-mode",
  roadmap: "roadmap",
  changelog: "changelog",
  compare_tools: "compare-tools",
  bug_report: "bug-report",
  feature_request: "feature-request",
  delete_account: "delete-account",
  privacy: "privacy-data",
  what_is: "what-is-ingot-ui",
  free_plan: "free-components",
  lifetime_deal: "lifetime-deal",
  accessibility: "accessibility",
};
