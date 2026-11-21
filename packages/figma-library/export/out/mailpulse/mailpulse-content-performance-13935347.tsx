// Content performance (mailpulse, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const CrownBulk = icon("<path d=\"M12 6L16 12 21 8 19 18H5L3 8 8 12 12 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const MegaphoneBulk = icon("<path d=\"M11 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4V16A1 1 0 0 1 19.4 16.8 13 13 0 0 0 11 14H5A2 2 0 0 1 3 12V8A2 2 0 0 1 5 6Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 6V14\"/></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 14A12 12 0 0 0 8.4 21.2 2 2 0 0 0 11.600000000000001 18.8 8 8 0 0 1 10 14\"/></g>");
const MessageCircleBulk = icon("<path d=\"M3 20L4.3 16.1C1.976 12.663000000000002 2.8739999999999997 8.228000000000002 6.4 5.726000000000001 9.926 3.225000000000001 14.99 3.430000000000001 18.245 6.206000000000001 21.5 8.983 21.94 13.472000000000001 19.274 16.707 16.608 19.942 11.659 20.922 7.700000000000001 19L3.000000000000001 20\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const NewsBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11\" /><path d=\"M8 8l4 0\" /><path d=\"M8 12l4 0\" /><path d=\"M8 16l4 0\" /></g>");
const NoteBulk = icon("<path d=\"M13 20V14A1 1 0 0 1 14 13H20V6A2 2 0 0 0 18 4H6A2 2 0 0 0 4 6V18A2 2 0 0 0 6 20H13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 20L20 13\"/></g>");

export function ContentPerformance() {
  return (
    <div style={{ width: "503.56px", height: "179.51px", display: "flex", flexDirection: "column", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "503.56px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>What readers engage with</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Average open and click rate by issue type.</p>
        </div>
        <Dots size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
      </div>
      <div style={{ width: "503.56px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CrownBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ff9b22", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Paid deep dives</p>
        </div>
        <div style={{ width: "222.14px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
        </div>
        <div style={{ width: "40px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>68%</p>
        </div>
        <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>31%</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>clicks</p>
        </div>
      </div>
      <div style={{ width: "503.56px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <NewsBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Tool roundups</p>
        </div>
        <div style={{ width: "222.14px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
        </div>
        <div style={{ width: "40px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>52%</p>
        </div>
        <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>21%</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>clicks</p>
        </div>
      </div>
      <div style={{ width: "503.56px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <MessageCircleBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#2dd411", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Interviews</p>
        </div>
        <div style={{ width: "222.14px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
        </div>
        <div style={{ width: "40px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>49%</p>
        </div>
        <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>17%</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>clicks</p>
        </div>
      </div>
      <div style={{ width: "503.56px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <NoteBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Essays</p>
        </div>
        <div style={{ width: "222.14px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
        </div>
        <div style={{ width: "40px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>44%</p>
        </div>
        <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>12%</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>clicks</p>
        </div>
      </div>
      <div style={{ width: "503.56px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <MegaphoneBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Sponsor posts</p>
        </div>
        <div style={{ width: "222.14px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.7)" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
          <div style={{ width: "13.71px", height: "13.71px", flexShrink: 0, borderRadius: "3.66px", background: "#f5f5f5" }} />
        </div>
        <div style={{ width: "40px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>38%</p>
        </div>
        <div style={{ width: "64px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>9%</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>clicks</p>
        </div>
      </div>
    </div>
  );
}
