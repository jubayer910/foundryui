// Format toolbar (mailpulse, Navigation) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const BoldBulk = icon("<path d=\"M7 5H13A3.5 3.5 0 0 1 13 12H7L7 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 12H14A3.5 3.5 0 0 1 14 19H7V12\"/></g>");
const BorderStyleBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20v-14a2 2 0 0 1 2 -2h14\" /><path d=\"M20 8v.01\" /><path d=\"M20 12v.01\" /><path d=\"M20 16v.01\" /><path d=\"M8 20v.01\" /><path d=\"M12 20v.01\" /><path d=\"M16 20v.01\" /><path d=\"M20 20v.01\" /></g>");
const HeadingBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 12h10\" /><path d=\"M7 5v14\" /><path d=\"M17 5v14\" /><path d=\"M15 19h4\" /><path d=\"M15 5h4\" /><path d=\"M5 19h4\" /><path d=\"M5 5h4\" /></g>");
const ItalicBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 5l6 0\" /><path d=\"M7 19l6 0\" /><path d=\"M14 5l-4 14\" /></g>");
const LinkBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 15l6 -6\" /><path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\" /><path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\" /></g>");
const PhotoBulk = icon("<path d=\"M3 6A3 3 0 0 1 6 3H18A3 3 0 0 1 21 6V18A3 3 0 0 1 18 21H6A3 3 0 0 1 3 18V6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 8H15.01\"/><path d=\"M3 16L8 11C8.928 10.107 10.072 10.107 11 11L16 16\"/><path d=\"M14 14L15 13C15.928 12.107 17.072 12.107 18 13L21 16\"/></g>");
const QuoteBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5\" /><path d=\"M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5\" /></g>");
const SparklesBulk = icon("<path d=\"M9 18A6 6 0 0 1 15 12 6 6 0 0 1 9 6 6 6 0 0 1 3 12 6 6 0 0 1 9 18\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 18A2 2 0 0 1 18 20 2 2 0 0 1 20 18 2 2 0 0 1 18 16 2 2 0 0 1 16 18\"/><path d=\"M16 6A2 2 0 0 1 18 8 2 2 0 0 1 20 6 2 2 0 0 1 18 4 2 2 0 0 1 16 6\"/></g>");
const UnderlineBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 5v5a5 5 0 0 0 10 0v-5\" /><path d=\"M5 19h14\" /></g>");

export function FormatToolbar() {
  return (
    <div style={{ width: "430.8px", height: "38.38px", borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "5.48px 6.39px 5.48px 6.39px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Paragraph</p>
        <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.91px", height: "18.28px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <HeadingBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", background: "#f4f4f5", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <BoldBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#141b34", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <ItalicBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <UnderlineBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <LinkBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <QuoteBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.91px", height: "18.28px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <PhotoBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <BorderStyleBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.91px", height: "18.28px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ height: "27.42px", flexShrink: 0, borderRadius: "6.4px", background: "rgba(124, 83, 249, 0.1)", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <SparklesBulk size={13.7} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#7c53f9" }}>Improve</p>
      </div>
    </div>
  );
}
