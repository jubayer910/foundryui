/**
 * Ingot UI theme generator: a few brand inputs in, the full --fu-* token set out.
 * Pure functions only (no DOM, no imports), so the same code runs in the /theme page,
 * in node scripts (scripts/theme-gen-check.mts) and anywhere else.
 *
 * Colour work happens in OKLCH (perceptual lightness), contrast is WCAG 2.x relative luminance,
 * colour-blind checks use the Machado et al. (2009) simulation matrices.
 */

/* ---------------------------------------------------------------- inputs */

export type Neutral = "neutral" | "warm" | "cool" | "brand";
export type Radius = "square" | "sharp" | "soft" | "round";
export type FontId = "inter" | "geist" | "plex" | "source";
export type Density = "compact" | "comfortable";

export interface ThemeInput {
  /** Brand name; used for the file name and the data-system scope. */
  name: string;
  /** Brand colour as #rrggbb. */
  brand: string;
  neutral: Neutral;
  radius: Radius;
  font: FontId;
  density: Density;
  /** Slug of the Ingot system this theme starts from (loopo, vantage …). */
  base: string;
  /** Keep white text on accent buttons; if white fails AA, the button fill is darkened just enough. */
  whiteText: boolean;
}

export const NEUTRALS: { id: Neutral; label: string }[] = [
  { id: "neutral", label: "Neutral" },
  { id: "warm", label: "Warm" },
  { id: "cool", label: "Cool" },
  { id: "brand", label: "Brand tint" },
];

export const RADII: { id: Radius; label: string; px: [number, number, number, number, number] }[] = [
  { id: "square", label: "Square", px: [0, 2, 2, 3, 4] },
  { id: "sharp", label: "Sharp", px: [3, 4, 5, 6, 10] },
  { id: "soft", label: "Soft", px: [6, 8, 10, 14, 22] },
  { id: "round", label: "Round", px: [8, 10, 14, 18, 28] },
];

/** Standard, legible, widely available sans faces only. */
export const FONTS: { id: FontId; label: string; family: string; google: string }[] = [
  { id: "inter", label: "Inter", family: "Inter", google: "Inter" },
  { id: "geist", label: "Geist", family: "Geist", google: "Geist" },
  { id: "plex", label: "IBM Plex Sans", family: "IBM Plex Sans", google: "IBM+Plex+Sans" },
  { id: "source", label: "Source Sans 3", family: "Source Sans 3", google: "Source+Sans+3" },
];

export const DENSITIES: { id: Density; label: string; spacing: string }[] = [
  { id: "compact", label: "Compact", spacing: "0.225rem" },
  { id: "comfortable", label: "Comfortable", spacing: "0.25rem" },
];

export const DEFAULT_INPUT: ThemeInput = { name: "Acme", brand: "#fd4b23", neutral: "neutral", radius: "soft", font: "geist", density: "comfortable", base: "loopo", whiteText: true };

/* ---------------------------------------------------------------- colour maths */

type RGB = [number, number, number]; // 0..1 sRGB
type Lab = [number, number, number]; // OKLab
type Lch = [number, number, number]; // OKLCH, h in degrees

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export function isHex(s: string) {
  return /^#?[0-9a-f]{6}$/i.test(s.trim()) || /^#?[0-9a-f]{3}$/i.test(s.trim());
}

/** "#ABC", "abc", "#aabbcc" → "#aabbcc"; null when not a colour. */
export function normHex(s: string): string | null {
  const t = s.trim().replace(/^#/, "").toLowerCase();
  if (/^[0-9a-f]{3}$/.test(t)) return "#" + t.split("").map((c) => c + c).join("");
  if (/^[0-9a-f]{6}$/.test(t)) return "#" + t;
  return null;
}

export function hexToRgb(hex: string): RGB {
  const h = normHex(hex) ?? "#000000";
  return [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255) as RGB;
}

export function rgbToHex(rgb: RGB): string {
  return "#" + rgb.map((v) => Math.round(clamp01(v) * 255).toString(16).padStart(2, "0")).join("");
}

const toLinear = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
const toGamma = (v: number) => (v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055);

function linearToOklab([r, g, b]: RGB): Lab {
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s];
}

function oklabToLinear([L, a, b]: Lab): RGB {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s];
}

export function hexToOklab(hex: string): Lab {
  return linearToOklab(hexToRgb(hex).map(toLinear) as RGB);
}

export function hexToOklch(hex: string): Lch {
  const [L, a, b] = hexToOklab(hex);
  const C = Math.hypot(a, b);
  let h = (Math.atan2(b, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return [L, C, C < 1e-4 ? 0 : h];
}

const inGamut = (rgb: RGB) => rgb.every((v) => v >= -1e-4 && v <= 1 + 1e-4);

/** OKLCH → hex, reducing chroma (same lightness and hue) until the colour fits sRGB. */
export function oklchToHex([L, C, h]: Lch): string {
  const lab = (c: number): Lab => [L, c * Math.cos((h * Math.PI) / 180), c * Math.sin((h * Math.PI) / 180)];
  let lin = oklabToLinear(lab(C));
  if (!inGamut(lin)) {
    let lo = 0;
    let hi = C;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (inGamut(oklabToLinear(lab(mid)))) lo = mid;
      else hi = mid;
    }
    lin = oklabToLinear(lab(lo));
  }
  return rgbToHex(lin.map((v) => toGamma(clamp01(v))) as RGB);
}

/** WCAG 2.x relative luminance. */
export function luminance(hex: string) {
  const [r, g, b] = hexToRgb(hex).map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** WCAG 2.x contrast ratio, 1..21. */
export function contrast(a: string, b: string) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

/** Perceptual distance in OKLab, scaled ×100 (≈ 2 is a just-noticeable difference). */
export function deltaE(a: string, b: string) {
  const p = hexToOklab(a);
  const q = hexToOklab(b);
  return Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) * 100;
}

/** Mix two hex colours in sRGB; amount 0 = a, 1 = b. */
export function mixHex(a: string, b: string, amount: number) {
  const p = hexToRgb(a);
  const q = hexToRgb(b);
  return rgbToHex(p.map((v, i) => v + (q[i] - v) * amount) as RGB);
}

/* ---------------------------------------------------------------- colour-blind simulation */

export type Vision = "normal" | "protan" | "deutan" | "tritan";
const CVD: Record<Exclude<Vision, "normal">, number[][]> = {
  protan: [[0.152286, 1.052583, -0.204868], [0.114503, 0.786281, 0.099216], [-0.003882, -0.048116, 1.051998]],
  deutan: [[0.367322, 0.860646, -0.227968], [0.280085, 0.672501, 0.047413], [-0.01182, 0.04294, 0.968881]],
  tritan: [[1.255528, -0.076749, -0.178779], [-0.078411, 0.930809, 0.147602], [0.004733, 0.691367, 0.3039]],
};

/** How a colour looks with full protanopia, deuteranopia or tritanopia (Machado 2009, severity 1). */
export function simulate(hex: string, vision: Vision): string {
  if (vision === "normal") return normHex(hex) ?? hex;
  const lin = hexToRgb(hex).map(toLinear);
  const M = CVD[vision];
  const out = M.map((row) => row[0] * lin[0] + row[1] * lin[1] + row[2] * lin[2]);
  return rgbToHex(out.map((v) => toGamma(clamp01(v))) as RGB);
}

/** Smallest distance between two colours across normal, protan and deutan vision (the common types). */
export function cvdDistance(a: string, b: string) {
  return Math.min(...(["normal", "protan", "deutan"] as Vision[]).map((v) => deltaE(simulate(a, v), simulate(b, v))));
}

/* ---------------------------------------------------------------- Loopo reference */

/** Loopo's neutrals: the "Neutral" option reproduces these exactly. */
export const LOOPO = {
  page: "#f5f5f5",
  surface: "#ffffff",
  raised: "#fefefe",
  sunken: "#fafafa",
  hover: "#f4f4f5",
  line: "#ececec",
  "line-strong": "#e1e1e1",
  ink: "#202020",
  body: "#2d2d2d",
  muted: "#747474",
  faint: "#a6a6a6",
} as const;
type NeutralKey = keyof typeof LOOPO;

/** Status colours stay semantic (green good, red bad), whatever the brand. */
const STATUS = {
  positive: "#18b170",
  "positive-soft": "#ebf8f2",
  negative: "#e5484d",
  "negative-soft": "#fdeeee",
  warning: "#d99a06",
  "warning-soft": "#fdf6e3",
  "positive-text": "#0f7d4f",
  "negative-text": "#c4282e",
  "warning-text": "#8a6000",
};

const SHADOWS = {
  "shadow-card": "0 1px 4px rgb(0 0 0 / 0.05)",
  "shadow-overlay": "0 16px 32px -12px rgb(13 13 18 / 0.12), 0 1px 2px rgb(13 13 18 / 0.05)",
  "shadow-button": "0 9px 8px rgb(0 0 0 / 0.04), inset 0 1px 0 rgb(255 255 255 / 0.18)",
};

/* ---------------------------------------------------------------- generators */

export const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const SCALE_L = [0.975, 0.945, 0.89, 0.82, 0.74, 0.66, 0.58, 0.5, 0.42, 0.35, 0.27];
const SCALE_C = [0.12, 0.25, 0.45, 0.7, 0.9, 1, 1, 0.92, 0.8, 0.68, 0.55];

/** An 11-step accent scale (50 … 950) around the brand hue. */
export function accentScale(brand: string): Record<(typeof SCALE_STEPS)[number], string> {
  const [, C, h] = hexToOklch(brand);
  const c = Math.max(C, 0.02);
  return Object.fromEntries(SCALE_STEPS.map((s, i) => [s, oklchToHex([SCALE_L[i], c * SCALE_C[i], h])])) as Record<(typeof SCALE_STEPS)[number], string>;
}

/** Move a colour's lightness in `dir` (−1 darker, +1 lighter) until `ok` holds. Hue and chroma are kept. */
export function shiftUntil(hex: string, dir: -1 | 1, ok: (c: string) => boolean, step = 0.004) {
  const [L, C, h] = hexToOklch(hex);
  let c = normHex(hex) ?? hex;
  for (let l = L; l >= 0 && l <= 1; l += dir * step) {
    c = oklchToHex([l, C, h]);
    if (ok(c)) return c;
  }
  return dir < 0 ? "#000000" : "#ffffff";
}

const TINT: Record<Neutral, (brandH: number, brandC: number) => { h: number; c: number }> = {
  neutral: () => ({ h: 0, c: 0 }),
  warm: () => ({ h: 70, c: 0.007 }),
  cool: () => ({ h: 255, c: 0.009 }),
  brand: (h, c) => ({ h, c: Math.min(0.012, c * 0.1) }),
};
/** How much of the tint each neutral carries: pure white surfaces stay white. */
const TINT_WEIGHT: Record<NeutralKey, number> = { page: 1, surface: 0, raised: 0.15, sunken: 0.6, hover: 1, line: 1, "line-strong": 1, ink: 0.9, body: 0.9, muted: 1.1, faint: 1 };

export function neutrals(neutral: Neutral, brand: string): Record<NeutralKey, string> {
  if (neutral === "neutral") return { ...LOOPO };
  const [, bC, bH] = hexToOklch(brand);
  const t = TINT[neutral](bH, bC);
  const out = {} as Record<NeutralKey, string>;
  for (const k of Object.keys(LOOPO) as NeutralKey[]) {
    const [L] = hexToOklch(LOOPO[k]);
    out[k] = TINT_WEIGHT[k] === 0 ? LOOPO[k] : oklchToHex([L, t.c * TINT_WEIGHT[k], t.h]);
  }
  return out;
}

/** CVD-friendly candidates for chart series 2+ (Okabe–Ito plus a few product hues). */
export const SERIES_CANDIDATES = ["#4d98fe", "#e69f00", "#009e73", "#cc79a7", "#0072b2", "#56b4e9", "#d55e00", "#f3c83d", "#7c53f9", "#14b8a6", "#ff72ab"];

/**
 * Chart palette: series 1 is the brand colour; each next series is the candidate that stays
 * furthest from every series already picked, measured under normal, protan and deutan vision.
 * The order is the order to use them in.
 */
export function chartPalette(brand: string, count = 5) {
  const first = normHex(brand) ?? "#000000";
  const picked = [first];
  const pool = SERIES_CANDIDATES.filter((c) => deltaE(c, first) > 8);
  while (picked.length < count && pool.length) {
    let best = 0;
    let bestScore = -1;
    pool.forEach((c, i) => {
      // Very pale hues (yellow on white) read poorly as thin marks, so they come later.
      const score = Math.min(...picked.map((p) => cvdDistance(c, p))) * (contrast(c, WHITE) < 2 ? 0.7 : 1);
      if (score > bestScore) {
        bestScore = score;
        best = i;
      }
    });
    picked.push(pool.splice(best, 1)[0]);
  }
  let min = Infinity;
  for (let i = 0; i < picked.length; i++) for (let j = i + 1; j < picked.length; j++) min = Math.min(min, cvdDistance(picked[i], picked[j]));
  return { colors: picked, minDistance: Math.round(min * 10) / 10 };
}

/* ---------------------------------------------------------------- contrast checks */

export interface Check {
  id: string;
  label: string;
  fg: string;
  bg: string;
  ratio: number;
  /** Needed ratio: 4.5 for text, 3 for large text and UI shapes. */
  min: number;
  pass: boolean;
}

const check = (id: string, label: string, fg: string, bg: string, min = 4.5): Check => {
  const ratio = Math.round(contrast(fg, bg) * 100) / 100;
  return { id, label, fg, bg, ratio, min, pass: ratio >= min };
};

export const WHITE = "#ffffff";

/* ---------------------------------------------------------------- the theme */

export interface Theme {
  input: ThemeInput;
  slug: string;
  /** --fu-* tokens without the "--fu-" prefix, in file order. */
  tokens: Record<string, string>;
  /** Tailwind v4 spacing base (every p-*, gap-*, h-* utility scales from it). */
  spacing: string;
  scale: Record<(typeof SCALE_STEPS)[number], string>;
  series: string[];
  seriesMinDistance: number;
  checks: Check[];
  /** Plain-language notes about adjustments the generator made. */
  notes: string[];
}

export function slugify(name: string) {
  const s = name.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 32);
  return s || "brand";
}

export function generateTheme(raw: ThemeInput): Theme {
  const input = sanitize(raw);
  const brand = input.brand;
  const notes: string[] = [];
  const n = neutrals(input.neutral, brand);
  const scale = accentScale(brand);

  // Muted text must pass AA on every background it sits on.
  const mutedOk = (c: string) => [n.surface, n.page, n.sunken, n.hover].every((bg) => contrast(c, bg) >= 4.5);
  if (!mutedOk(n.muted)) n.muted = shiftUntil(n.muted, -1, mutedOk);

  // Button fill and the text on it.
  const dark = n.ink;
  let fill = brand;
  let ink: string;
  const wr = contrast(WHITE, brand);
  if (input.whiteText) {
    ink = WHITE;
    if (wr < 4.5) {
      fill = shiftUntil(brand, -1, (c) => contrast(WHITE, c) >= 4.5);
      notes.push(`White text on ${brand} is ${wr.toFixed(2)}:1, below AA. Buttons use ${fill} instead; charts and tints keep your exact colour.`);
    }
  } else {
    ink = contrast(dark, brand) >= wr ? dark : WHITE;
    if (contrast(ink, brand) < 4.5) {
      // Rare (mid-tones near the crossover): nudge the fill away from the text colour.
      fill = shiftUntil(brand, ink === WHITE ? -1 : 1, (c) => contrast(ink, c) >= 4.5);
      notes.push(`Buttons use ${fill} so their text passes AA.`);
    }
  }
  const [fL, fC, fH] = hexToOklch(fill);
  const gradTop = oklchToHex([Math.min(fL + 0.05, 0.98), fC, fH]);

  // Soft tint behind accent text and selected rows.
  const [, bC, bH] = hexToOklch(brand);
  const soft = oklchToHex([0.97, Math.min(Math.max(bC, 0.02) * 0.18, 0.035), bH]);

  // Accent used as text (links, badges): AA on the surface and on its own soft tint.
  const textOk = (c: string) => contrast(c, n.surface) >= 4.5 && contrast(c, soft) >= 4.5 && contrast(c, n.sunken) >= 4.5;
  const accentText = textOk(brand) ? brand : shiftUntil(brand, -1, textOk);

  const palette = chartPalette(brand, 5);
  const radius = RADII.find((r) => r.id === input.radius)!.px;
  const font = FONTS.find((f) => f.id === input.font)!;
  const spacing = DENSITIES.find((d) => d.id === input.density)!.spacing;
  const [inkL] = hexToOklch(n.body);
  const tint = TINT[input.neutral](bH, bC);

  const tokens: Record<string, string> = {
    font: `"${font.family}", ui-sans-serif, system-ui, sans-serif`,
    "font-mono": `"Geist Mono", ui-monospace, monospace`,
    ...n,
    accent: fill,
    "accent-soft": soft,
    "accent-ink": ink,
    "accent-grad": `linear-gradient(180deg, ${gradTop} 0%, ${fill} 100%)`,
    "accent-text": accentText,
    "series-1": palette.colors[0],
    "series-2": palette.colors[1],
    "series-3": palette.colors[2],
    "series-4": palette.colors[3],
    "series-5": palette.colors[4],
    ...STATUS,
    "primary-grad": `linear-gradient(180deg, ${oklchToHex([0.62, tint.c, tint.h])} 0%, ${oklchToHex([inkL, tint.c * 0.9, tint.h])} 100%)`,
    "radius-xs": radius[0] + "px",
    "radius-sm": radius[1] + "px",
    "radius-md": radius[2] + "px",
    "radius-lg": radius[3] + "px",
    "radius-xl": radius[4] + "px",
    ...SHADOWS,
    ...Object.fromEntries(SCALE_STEPS.map((s) => ["accent-" + s, scale[s]])),
  };

  const checks: Check[] = [
    check("on-accent", "Button text on accent", ink, fill),
    check("accent-text", "Accent text on surface", accentText, n.surface),
    check("accent-soft", "Accent text on soft tint", accentText, soft),
    check("ink", "Headings on surface", n.ink, n.surface),
    check("body", "Body text on page", n.body, n.page),
    check("muted", "Muted text on surface", n.muted, n.surface),
    check("muted-page", "Muted text on page", n.muted, n.page),
    check("accent-ui", "Accent shapes on surface", fill, n.surface, 3),
  ];

  if (contrast(fill, n.surface) < 3) notes.push(`Your accent is ${contrast(fill, n.surface).toFixed(2)}:1 against white, under the 3:1 needed for switches, checkboxes and focus rings to stand out. Turn on white button text to use a deeper shade.`);
  if (input.neutral === "neutral" && n.muted !== LOOPO.muted) notes.push(`Muted text is ${n.muted}: Loopo's ${LOOPO.muted} is ${contrast(LOOPO.muted, LOOPO.page).toFixed(2)}:1 on the page grey, so it is darkened to pass AA everywhere.`);
  if (palette.minDistance < 10) notes.push("Two chart colours are close for some colour-blind readers; label series directly or add a pattern.");

  return { input, slug: slugify(input.name), tokens, spacing, scale, series: palette.colors, seriesMinDistance: palette.minDistance, checks, notes };
}

/* ---------------------------------------------------------------- input safety + URL state */

const pick = <T extends string>(v: unknown, allowed: readonly T[], fallback: T): T => (allowed.includes(v as T) ? (v as T) : fallback);

export function sanitize(i: Partial<ThemeInput>): ThemeInput {
  const d = DEFAULT_INPUT;
  return {
    name: (typeof i.name === "string" ? i.name : d.name).replace(/[^A-Za-z0-9 ._-]/g, "").slice(0, 32) || d.name,
    brand: normHex(String(i.brand ?? "")) ?? d.brand,
    neutral: pick(i.neutral, NEUTRALS.map((x) => x.id), d.neutral),
    radius: pick(i.radius, RADII.map((x) => x.id), d.radius),
    font: pick(i.font, FONTS.map((x) => x.id), d.font),
    density: pick(i.density, DENSITIES.map((x) => x.id), d.density),
    base: /^[a-z0-9-]{1,24}$/.test(String(i.base ?? "")) ? String(i.base) : d.base,
    whiteText: i.whiteText === undefined ? d.whiteText : Boolean(i.whiteText),
  };
}

/** Short query string for a shareable link: ?n=Acme&c=fd4b23&t=warm&r=soft&f=plex&d=compact&s=loopo&w=1 */
export function toQuery(i: ThemeInput) {
  const q = new URLSearchParams({ n: i.name, c: i.brand.replace("#", ""), t: i.neutral, r: i.radius, f: i.font, d: i.density, s: i.base, w: i.whiteText ? "1" : "0" });
  return q.toString();
}

export function fromQuery(qs: string | URLSearchParams): ThemeInput {
  const q = typeof qs === "string" ? new URLSearchParams(qs) : qs;
  const g = (k: string) => q.get(k) ?? undefined;
  return sanitize({ name: g("n"), brand: g("c") ? "#" + g("c") : undefined, neutral: g("t") as Neutral, radius: g("r") as Radius, font: g("f") as FontId, density: g("d") as Density, base: g("s"), whiteText: g("w") === undefined ? undefined : g("w") === "1" });
}

/* ---------------------------------------------------------------- exports */

const header = (t: Theme, link: string) => `/* Ingot UI theme: ${t.input.name}. Generated at ${link}\n   Base system: ${t.input.base}. Font: ${FONTS.find((f) => f.id === t.input.font)!.label}. Density: ${t.input.density}. */`;

/** Drop-in token file. Import it after the base system's token file so its values win. */
export function toCss(t: Theme, link: string) {
  const body = Object.entries(t.tokens).map(([k, v]) => `  --fu-${k}: ${v};`).join("\n");
  return `${header(t, link)}\n:root,\n[data-system="${t.slug}"] {\n${body}\n  /* Tailwind v4 spacing base: every p-*, gap-* and h-* utility scales from it. */\n  --spacing: ${t.spacing};\n}\n`;
}

const TW_COLORS = ["page", "surface", "raised", "sunken", "hover", "line", "line-strong", "ink", "body", "muted", "faint", "accent", "accent-soft", "accent-ink", "accent-text", "series-1", "series-2", "series-3", "series-4", "series-5", "positive", "positive-soft", "negative", "negative-soft", "warning", "warning-soft", "positive-text", "negative-text", "warning-text", ...SCALE_STEPS.map((s) => "accent-" + s)];

/** A Tailwind v4 @theme block with resolved values (no theme bridge file needed). */
export function toTailwind(t: Theme, link: string) {
  const k = t.tokens;
  const lines = [
    ...TW_COLORS.map((c) => `  --color-fu-${c}: ${k[c]};`),
    ...["xs", "sm", "md", "lg", "xl"].map((r) => `  --radius-fu-${r}: ${k["radius-" + r]};`),
    `  --shadow-fu-card: ${k["shadow-card"]};`,
    `  --shadow-fu-overlay: ${k["shadow-overlay"]};`,
    `  --shadow-fu-button: ${k["shadow-button"]};`,
    `  --font-fu: ${k.font};`,
    `  --font-fu-mono: ${k["font-mono"]};`,
    `  --spacing: ${t.spacing};`,
  ];
  return `${header(t, link)}\n/* Utilities: bg-fu-surface, text-fu-ink, border-fu-line, rounded-fu-md, shadow-fu-card, font-fu …\n   Gradients (accent-grad, primary-grad) are not Tailwind theme keys; keep them from the CSS file. */\n@import "tailwindcss";\n\n@theme {\n${lines.join("\n")}\n}\n`;
}

/** W3C Design Tokens (DTCG) JSON: groups for colour, radius, font, spacing, shadow. */
export function toJson(t: Theme) {
  const k = t.tokens;
  const color = (keys: string[]) => Object.fromEntries(keys.map((c) => [c, { $type: "color", $value: k[c] }]));
  const out = {
    $description: `Ingot UI theme: ${t.input.name} (base ${t.input.base})`,
    color: {
      neutral: color(Object.keys(LOOPO)),
      accent: { ...color(["accent", "accent-soft", "accent-ink", "accent-text"]), scale: Object.fromEntries(SCALE_STEPS.map((s) => [String(s), { $type: "color", $value: t.scale[s] }])) },
      chart: color(["series-1", "series-2", "series-3", "series-4", "series-5"]),
      status: color(Object.keys(STATUS)),
    },
    radius: Object.fromEntries(["xs", "sm", "md", "lg", "xl"].map((r) => [r, { $type: "dimension", $value: k["radius-" + r] }])),
    font: { sans: { $type: "fontFamily", $value: FONTS.find((f) => f.id === t.input.font)!.family }, mono: { $type: "fontFamily", $value: "Geist Mono" } },
    spacing: { base: { $type: "dimension", $value: t.spacing, $description: "Tailwind v4 --spacing; 1 unit of p-1, gap-1, h-1" } },
    shadow: Object.fromEntries(["card", "overlay", "button"].map((s) => [s, { $type: "string", $value: k["shadow-" + s] }])),
  };
  return JSON.stringify(out, null, 2) + "\n";
}

/** A self-contained message for a coding agent connected to the Ingot UI MCP server. */
export function toPrompt(t: Theme, link: string, framework: "next" | "vite" = "next") {
  const css = framework === "next" ? "app/globals.css" : "src/index.css";
  const font = FONTS.find((f) => f.id === t.input.font)!;
  const fontStep =
    framework === "next"
      ? `Load ${font.label} with next/font/google in the root layout and set the <html> font-family to var(--fu-font).`
      : `Load ${font.label} from Google Fonts (https://fonts.google.com/specimen/${font.google}) and set the body font-family to var(--fu-font).`;
  return `Use the Ingot UI MCP server for this project's UI, with my brand theme "${t.input.name}".

1. Call the Ingot UI tool init_project with system "${t.input.base}" and framework "${framework}". Write every file it returns and apply its ${css} edit.
2. Save the theme below as styles/ingot/${t.slug}.css and import it in ${css} on the line after the base token import, so its --fu-* values win.
3. ${fontStep}
4. Add this to INGOT.md under the rules: "Theme: styles/ingot/${t.slug}.css overrides the base tokens. Never hard-code colours, radii or fonts; change the theme at ${link}".
5. Build every screen from Ingot components (add_components, scaffold_screen) and check new UI with audit_ui.

styles/ingot/${t.slug}.css:

${toCss(t, link)}`;
}

/** CSS custom properties for scoping a live preview to an element (React style object shape). */
export function toStyleVars(t: Theme, fontVar?: string): Record<string, string> {
  const vars: Record<string, string> = Object.fromEntries(Object.entries(t.tokens).map(([k, v]) => ["--fu-" + k, v]));
  if (fontVar) vars["--fu-font"] = `var(${fontVar}), ${t.tokens.font}`;
  vars["--spacing"] = t.spacing;
  return vars;
}
