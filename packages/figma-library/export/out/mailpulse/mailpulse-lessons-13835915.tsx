// Lessons (mailpulse, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CircleCheckBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 1 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12L11 14 15 10\"/></g>");
const LockBulk = icon("<path d=\"M5 13A2 2 0 0 1 7 11H17A2 2 0 0 1 19 13V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 16A1 1 0 1 0 13 16 1 1 0 0 0 11 16\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 11V7A4 4 0 1 1 16 7V11\"/></g>");
const PlayCircleBulk = icon("<path d=\"M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 9.003A1 1 0 0 1 10.517 8.144L15.514 11.141A1 1 0 0 1 15.514 12.859L10.517 15.856A1 1 0 0 1 9 14.996Z\"/></g>");

export function Lessons() {
  return (
    <div style={{ width: "336.31px", height: "378.41px", display: "flex", flexDirection: "column", padding: "0px 9.14px 0px 9.14px", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", height: "45.7px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheckBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#15b392", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flex: "1 1 auto", minHeight: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>1. Find your one reader</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Video · Completed Dec 15</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>04:20</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "45.7px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheckBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#15b392", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flex: "1 1 auto", minHeight: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>2. Write a sign-up page that converts</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Video + template · Completed Dec 18</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>06:10</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "45.7px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheckBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#15b392", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flex: "1 1 auto", minHeight: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#24322e" }}>3. Your first 100 subscribers</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Video · Completed Dec 21</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>05:05</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "45.7px", flexShrink: 0, borderRadius: "9.14px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.91px #e8e8eb", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <PlayCircleBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flex: "1 1 auto", minHeight: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>4. Turn readers into referrers</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#7c53f9" }}>Video + 3 resources · 44% watched</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>09:30</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "45.7px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <LockBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#989898", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flex: "1 1 auto", minHeight: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>5. Grow with cross-promotions</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Video + worksheet</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>06:45</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "45.7px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <LockBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#989898", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flex: "1 1 auto", minHeight: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>6. Keep out of the promotions tab</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Video + checklist</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>05:40</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "45.7px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <LockBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#989898", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flex: "1 1 auto", minHeight: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>7. Launch a paid tier</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Video + pricing calculator</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>04:50</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "45.7px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "row", padding: "5.48px 7.31px 5.48px 7.31px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <LockBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#989898", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flex: "1 1 auto", minHeight: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474" }}>8. Measure what matters</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Video + dashboard tour</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>03:40</p>
      </div>
    </div>
  );
}
