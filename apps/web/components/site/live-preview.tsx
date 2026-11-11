"use client";
import { useEffect, useRef, useState } from "react";

const PAD = 32; // room for the component's own shadow, matches #c padding in the preview page

/**
 * The component's real React output: a static page pre-rendered from its code at build
 * time (scripts/library-finalize.mjs), shown at native size and scaled down to fit.
 * Until the frame loads, the Figma thumbnail sits underneath, so there is never a blank box.
 */
export function LivePreview({ src, w: cw, h: ch, thumb, alt }: { src: string; w: number; h: number; thumb: string; alt: string }) {
  const w = Math.ceil(cw) + PAD * 2;
  const h = Math.ceil(ch) + PAD * 2;
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(Math.min(1, 900 / w, 760 / h));
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / w, (window.innerHeight * 0.8) / h));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [w, h]);
  return (
    <div ref={box} className="flex w-full justify-center">
      <div className="relative overflow-hidden rounded-[6px]" style={{ width: w * scale, height: h * scale }}>
        {!loaded && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumb} alt="" aria-hidden="true" className="absolute inset-0 size-full object-contain" />
        )}
        <iframe
          src={src}
          title={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          sandbox="allow-same-origin"
          scrolling="no"
          className="absolute left-0 top-0 origin-top-left border-0 bg-transparent"
          style={{ width: w, height: h, transform: `scale(${scale})`, opacity: loaded ? 1 : 0, transition: "opacity .2s" }}
        />
      </div>
    </div>
  );
}
