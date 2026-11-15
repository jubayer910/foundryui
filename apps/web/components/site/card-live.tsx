"use client";
import { useEffect, useRef, useState } from "react";

const PAD = 32; // padding of #c inside each preview page
const FONTS = "https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400..600&display=swap";
const cache = new Map<string, Promise<string>>();

/** Fetch a pre-rendered preview page once and keep only its styles and the component markup. */
function loadMarkup(src: string) {
  let p = cache.get(src);
  if (!p) {
    p = fetch(src)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const style = [...doc.querySelectorAll("style")].map((s) => s.textContent ?? "").join("\n");
        const c = doc.getElementById("c");
        if (!c) throw new Error("no #c");
        return `<style>:host{all:initial}${style.replace(/html,body\{[^}]*\}/, "")}#c{display:inline-block;padding:${PAD}px;font-family:'Geist',ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased}</style>${c.outerHTML}`;
      });
    p.catch(() => cache.delete(src));
    cache.set(src, p);
  }
  return p;
}

/** Fonts used by the previews, added to the page once (font faces are shared with shadow roots). */
function ensureFonts() {
  if (typeof document === "undefined" || document.getElementById("ingot-preview-fonts")) return;
  const l = document.createElement("link");
  l.id = "ingot-preview-fonts";
  l.rel = "stylesheet";
  l.href = FONTS;
  document.head.appendChild(l);
}

/**
 * Library card preview drawn from the component's real React output (the same static page the component
 * page shows), not a screenshot. Loaded when the card nears the viewport, rendered in a shadow root so its
 * styles stay isolated, and scaled to fit the card. Falls back to the thumbnail if the page can't load.
 */
export function CardLive({ src, w, h, thumb, alt }: { src: string; w: number; h: number; thumb: string; alt: string }) {
  const box = useRef<HTMLDivElement>(null);
  const host = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "ready" | "failed">("idle");
  const [scale, setScale] = useState(0);
  const W = Math.ceil(w) + PAD * 2;
  const H = Math.ceil(h) + PAD * 2;

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / W, el.clientHeight / H));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [W, H]);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (done || !entries.some((e) => e.isIntersecting)) return;
        done = true;
        io.disconnect();
        ensureFonts();
        loadMarkup(src)
          .then((markup) => {
            const h = host.current;
            if (!h) return;
            const root = h.shadowRoot ?? h.attachShadow({ mode: "open" });
            root.innerHTML = markup;
            setState("ready");
          })
          .catch(() => setState("failed"));
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <div ref={box} className="relative flex size-full items-center justify-center" role="img" aria-label={alt}>
      {state === "failed" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumb} alt="" className="max-h-full max-w-full object-contain" />
      ) : (
        <div className="relative shrink-0" style={{ width: W * scale, height: H * scale }}>
          <div
            ref={host}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 origin-top-left"
            style={{ width: W, height: H, transform: `scale(${scale})`, opacity: state === "ready" ? 1 : 0, transition: "opacity .2s" }}
          />
        </div>
      )}
    </div>
  );
}
