/* Isometric line-drawing kit for the site's illustrations. Everything is plain SVG drawn from
   3D coordinates (x to the right-front, y to the left-front, z up), so scenes stay crisp at any
   size, ship no image files, and animate with the CSS classes in globals.css (.f float,
   .rise, .flow, .pulse, .slide, .blink), all disabled under prefers-reduced-motion. */
import type { CSSProperties, ReactNode } from "react";

export type V = [number, number, number];
const C = 0.8660254;
const S = 0.5;

export const iso = ([x, y, z]: V): [number, number] => [(x - y) * C, (x + y) * S - z];
const fmt = (v: V) => iso(v).map((n) => n.toFixed(2)).join(",");
export const pts = (vs: V[]) => vs.map(fmt).join(" ");

type G = { className?: string; style?: CSSProperties; children?: ReactNode };
const d = (s: number | undefined): CSSProperties | undefined => (s === undefined ? undefined : { animationDelay: s + "s" });

/** Animated group. `a` picks the motion, `delay` staggers it. */
export function A({ a, delay, children }: { a: "f" | "rise" | "flow" | "pulse" | "slide" | "blink" | "lift"; delay?: number; children: ReactNode }) {
  return (
    <g className={a} style={d(delay)}>
      {children}
    </g>
  );
}

/** A solid box: top, right (+x) and left (+y) faces. `tone` tints the top. */
export function Box({ at = [0, 0, 0], size, tone, accent, children }: { at?: V; size: V; tone?: "accent" | "ink"; accent?: boolean; children?: ReactNode }) {
  const [x, y, z] = at;
  const [w, dd, h] = size;
  const top = tone === "accent" ? "var(--illo-accent-wash)" : tone === "ink" ? "var(--illo-ink)" : "var(--illo-top)";
  const stroke = accent ? "var(--illo-accent)" : "var(--illo-line)";
  return (
    <g stroke={stroke}>
      <polygon points={pts([[x + w, y, z], [x + w, y + dd, z], [x + w, y + dd, z + h], [x + w, y, z + h]])} fill="var(--illo-r)" />
      <polygon points={pts([[x, y + dd, z], [x + w, y + dd, z], [x + w, y + dd, z + h], [x, y + dd, z + h]])} fill="var(--illo-l)" />
      <polygon points={pts([[x, y, z + h], [x + w, y, z + h], [x + w, y + dd, z + h], [x, y + dd, z + h]])} fill={top} />
      {children}
    </g>
  );
}

/** Vertical cylinder centred on (cx, cy). */
export function Cyl({ at, r, h, accent, ring }: { at: V; r: number; h: number; accent?: boolean; ring?: boolean }) {
  const [cx, cy, z] = at;
  const [px, pyb] = iso([cx, cy, z]);
  const pyt = pyb - h;
  const rx = r * 1.2247;
  const ry = r * 0.7071;
  const stroke = accent ? "var(--illo-accent)" : "var(--illo-line)";
  return (
    <g stroke={stroke}>
      <path d={`M${px - rx},${pyt} L${px - rx},${pyb} A${rx},${ry} 0 0 0 ${px + rx},${pyb} L${px + rx},${pyt} Z`} fill="var(--illo-r)" />
      <ellipse cx={px} cy={pyt} rx={rx} ry={ry} fill="var(--illo-top)" />
      {ring && <ellipse cx={px} cy={pyt} rx={rx * 0.45} ry={ry * 0.45} fill="none" stroke="var(--illo-accent)" />}
    </g>
  );
}

/** Any flat polygon in 3D (screens on faces, cards on tops). */
export function Quad({ p, fill = "none", accent, dash }: { p: V[]; fill?: string; accent?: boolean; dash?: boolean }) {
  return <polygon points={pts(p)} fill={fill} stroke={accent ? "var(--illo-accent)" : "var(--illo-line)"} strokeDasharray={dash ? "2 2.5" : undefined} />;
}

/** Rectangle on the plane y = Y (faces the viewer's left), spanning x0..x1 and z0..z1. */
export const onY = (Y: number, x0: number, x1: number, z0: number, z1: number): V[] => [[x0, Y, z0], [x1, Y, z0], [x1, Y, z1], [x0, Y, z1]];
/** Rectangle on the plane x = X (faces the viewer's right), spanning y0..y1 and z0..z1. */
export const onX = (X: number, y0: number, y1: number, z0: number, z1: number): V[] => [[X, y0, z0], [X, y1, z0], [X, y1, z1], [X, y0, z1]];
/** Rectangle on the plane z = Z, spanning x0..x1 and y0..y1. */
export const onZ = (Z: number, x0: number, x1: number, y0: number, y1: number): V[] => [[x0, y0, Z], [x1, y0, Z], [x1, y1, Z], [x0, y1, Z]];

export function Line({ p, accent, dash, className, faint }: { p: V[]; accent?: boolean; dash?: boolean; className?: string; faint?: boolean }) {
  return (
    <polyline
      className={className}
      points={pts(p)}
      fill="none"
      stroke={accent ? "var(--illo-accent)" : faint ? "var(--illo-faint)" : "var(--illo-line)"}
      strokeDasharray={dash ? "2 2.5" : undefined}
    />
  );
}

export function Dot({ at, r = 1.6, accent = true, className, delay }: { at: V; r?: number; accent?: boolean; className?: string; delay?: number }) {
  const [x, y] = iso(at);
  return <ellipse className={className} style={d(delay)} cx={x} cy={y} rx={r * 1.2} ry={r * 0.7} fill={accent ? "var(--illo-accent)" : "var(--illo-ink)"} stroke="none" />;
}

/** Dashed footprint with the little corner extension ticks of a technical drawing. */
export function Ground({ x0, x1, y0, y1, z = 0 }: { x0: number; x1: number; y0: number; y1: number; z?: number }) {
  const e = 8;
  return (
    <g stroke="var(--illo-faint)" fill="none" strokeDasharray="1.5 2.5">
      <polygon points={pts(onZ(z, x0, x1, y0, y1))} />
      <polyline points={pts([[x0 - e, y0, z], [x0, y0, z]])} />
      <polyline points={pts([[x1, y0, z], [x1 + e, y0, z]])} />
      <polyline points={pts([[x0, y1, z], [x0, y1 + e, z]])} />
      <polyline points={pts([[x1, y1, z], [x1, y1 + e, z]])} />
    </g>
  );
}

/** Text-free "content" for a surface: short rule lines on the plane y = Y. */
export function LinesY({ Y, x0, x1, z0, n, gap = 5, accentFirst }: { Y: number; x0: number; x1: number; z0: number; n: number; gap?: number; accentFirst?: boolean }) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <Line key={i} p={[[x0, Y, z0 - i * gap], [x0 + (x1 - x0) * (i % 3 === 2 ? 0.55 : i % 2 ? 0.8 : 1), Y, z0 - i * gap]]} accent={accentFirst && i === 0} />
      ))}
    </>
  );
}

export function Frame({ children, label, vb = "-122 -82 244 148" }: G & { label: string; vb?: string }) {
  return (
    <svg className="illo" viewBox={vb} role={label ? "img" : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true} preserveAspectRatio="xMidYMid meet" strokeWidth={1} strokeLinejoin="round" strokeLinecap="round">
      {children}
    </svg>
  );
}
