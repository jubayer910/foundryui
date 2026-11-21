// Lesson header (mailpulse, Headers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Bookmark = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4\" /></g>");
const Share = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M8.7 10.7l6.6 -3.4\" /><path d=\"M8.7 13.3l6.6 3.4\" /></g>");

export function LessonHeader() {
  return (
    <div style={{ width: "689.1px", height: "45.5px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Lesson 4 of 8</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Turn readers into referrers</p>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "31.1px", height: "31.1px", flexShrink: 0, borderRadius: "6.2px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0.8px 0.8px 0.8px 0.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Bookmark size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
        <div style={{ width: "31.1px", height: "31.1px", flexShrink: 0, borderRadius: "6.2px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #e8e8e8", overflow: "hidden", display: "flex", flexDirection: "row", padding: "0.8px 0.8px 0.8px 0.8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Share size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
