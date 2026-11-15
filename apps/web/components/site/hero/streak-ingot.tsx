"use client";
import { useEffect, useRef } from "react";

/*
 * Home hero background: an isometric ingot made of thin vertical streaks, indigo at the top dissolving into
 * particles, coral at the base. Same geometry and colours as the Figma frame "Hero · 2 · Ingot of streaks"
 * (UwaYzhrLo0wwH61PauTGSw, node 18:12432), drawn on one canvas in a 1440 × 709 design space.
 * Motion: streaks shimmer in 8 groups, particles rise and fade, the base glow breathes (CSS), ≤ 8 px cursor
 * parallax. Paused off-screen; drawn once and left still under prefers-reduced-motion.
 */

const DW = 1440;
const DH = 709;
const C = { indigo: [75, 85, 230], violet: [138, 92, 240], coral: [242, 112, 90], orange: [247, 154, 75], navy: [31, 42, 138] } as const;
type RGB = readonly [number, number, number];
const rgba = (c: RGB, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

type Seg = { x: number; y1: number; y2: number; g: number };
type Dot = { x: number; base: number; h0: number; range: number; speed: number; size: number };

function build() {
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const W = 200, D = 110, H = 100, K = 20, CX = 720, CY = 722;
  const P = ([x, y, z]: [number, number, number]): [number, number] => [CX + (x - y) * 0.866, CY + (x + y) * 0.5 - z];
  const L = P([-W, D, 0]), F = P([W, D, 0]), R = P([W, -D, 0]);
  const TL = P([-W + K, D - K, H]), TB = P([-W + K, -D + K, H]), TR = P([W - K, -D + K, H]), TF = P([W - K, D - K, H]);
  const interp = (pts: [number, number][], x: number) => {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      if (x >= a[0] && x <= b[0]) return a[1] + ((b[1] - a[1]) * (x - a[0])) / (b[0] - a[0]);
    }
    return null;
  };
  const lower = [L, F, R], upper = [L, TL, TB, TR, R], front = [L, TL, TF, TR, R];
  const faces: Seg[] = [], tops: Seg[] = [];
  for (let x = L[0] + 1; x < R[0]; x += 2.1) {
    const yb = interp(lower, x)!, yf = interp(front, x)!, yt = interp(upper, x)!;
    let y = yb - rnd() * 4;
    while (y > yf + 2) {
      const y2 = Math.max(yf, y - (6 + rnd() * 34));
      faces.push({ x, y1: y, y2, g: Math.floor(rnd() * 8) });
      y = y2 - (1 + rnd() * 5);
    }
    y = yf - 1;
    while (y > yt + 1) {
      const y2 = Math.max(yt, y - (4 + rnd() * 16));
      if (rnd() > 0.15) tops.push({ x, y1: y, y2, g: Math.floor(rnd() * 8) });
      y = y2 - (1 + rnd() * 4);
    }
  }
  const dots: Dot[] = [];
  for (let i = 0; i < 300; i++) {
    const x = L[0] + 20 + (R[0] - L[0] - 40) * rnd();
    const base = interp(upper, Math.min(Math.max(x, L[0] + 1), R[0] - 1)) ?? TB[1];
    dots.push({ x, base, h0: -Math.log(1 - rnd() * 0.97) * 26, range: 20 + rnd() * 40, speed: 1 / (4 + rnd() * 4), size: rnd() > 0.85 ? 2 : 1.3 });
  }
  return { faces, tops, dots };
}

export function StreakIngot({ className = "" }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvas.current, box = wrap.current;
    if (!cv || !box) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const { faces, tops, dots } = build();
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, visible = true, scale = 1, ox = 0, oy = 0, px = 0, py = 0, tx = 0, ty = 0;

    const fit = () => {
      const w = box.clientWidth, h = box.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.width = w + "px";
      cv.style.height = h + "px";
      // keep the ingot readable on phones; anchor the design's bottom edge to the hero's bottom edge
      scale = Math.max(w / DW, Math.min(1, 0.62));
      ox = (w - DW * scale) / 2;
      oy = h - DH * scale;
      ctx.setTransform(dpr * scale, 0, 0, dpr * scale, dpr * ox, dpr * oy);
    };

    const grad = (y0: number, y1: number, stops: [number, RGB, number][]) => {
      const g = ctx.createLinearGradient(0, y0, 0, y1);
      for (const [p, c, a] of stops) g.addColorStop(p, rgba(c, a));
      return g;
    };
    const facesGrad = () => grad(578, 875, [[0, C.indigo, 0.05], [0.12, C.indigo, 0.45], [0.26, C.violet, 0.9], [0.42, C.coral, 1], [1, C.orange, 1]]);
    const topsGrad = () => grad(489, 756, [[0, C.indigo, 0.1], [0.5, C.indigo, 0.6], [1, C.violet, 0.9]]);
    const dotsGrad = () => grad(403, 692, [[0, C.indigo, 0], [0.55, C.indigo, 0.45], [1, C.navy, 0.9]]);

    const strokeGroups = (segs: Seg[], style: CanvasGradient, base: number, t: number) => {
      ctx.strokeStyle = style;
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      for (let g = 0; g < 8; g++) {
        ctx.globalAlpha = base * (still ? 1 : 0.78 + 0.22 * Math.sin(t * 0.0011 + g * 0.9));
        ctx.beginPath();
        for (const s of segs) if (s.g === g) { ctx.moveTo(s.x, s.y1); ctx.lineTo(s.x, s.y2); }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const draw = (t: number) => {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.restore();
      ctx.save();
      ctx.translate(px, py);
      strokeGroups(faces, facesGrad(), 0.7, t);
      strokeGroups(tops, topsGrad(), 0.55, t + 400);
      ctx.fillStyle = dotsGrad();
      for (const d of dots) {
        const rise = still ? 0 : ((t * 0.001 * d.speed + d.h0 / 60) % 1) * d.range;
        const y = d.base - d.h0 - rise;
        ctx.globalAlpha = still ? 1 : Math.max(0, 1 - rise / d.range);
        ctx.fillRect(d.x, y, d.size, d.size);
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const loop = (t: number) => {
      px += (tx - px) * 0.06;
      py += (ty - py) * 0.06;
      draw(t);
      if (visible) raf = requestAnimationFrame(loop);
    };

    fit();
    if (still) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(() => { fit(); if (still) draw(0); });
    ro.observe(box);
    const io = new IntersectionObserver(([e]) => {
      const was = visible;
      visible = e.isIntersecting;
      if (!still && visible && !was) raf = requestAnimationFrame(loop);
    });
    io.observe(box);
    const onMove = (e: PointerEvent) => {
      if (still) return;
      const r = box.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 16 / scale;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 8 / scale;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={wrap} aria-hidden="true" className={"pointer-events-none absolute inset-0 overflow-hidden " + className}>
      {/* base shadow and coral glow, same placement as the Figma ellipses (design space 1440 × 709) */}
      <div className="hero-glow absolute bottom-0 left-1/2 h-[130px] w-[min(680px,90%)] -translate-x-1/2 translate-y-[38%] rounded-[50%] blur-[40px]" style={{ background: "radial-gradient(closest-side, rgba(242,112,90,.75), rgba(247,154,75,.35) 60%, rgba(247,154,75,0))" }} />
      <div className="absolute bottom-0 left-1/2 h-[60px] w-[min(760px,95%)] -translate-x-1/2 translate-y-[60%] rounded-[50%] blur-[24px]" style={{ background: "radial-gradient(closest-side, rgba(31,42,138,.22), rgba(31,42,138,0))" }} />
      <canvas ref={canvas} className="absolute inset-0" />
    </div>
  );
}
