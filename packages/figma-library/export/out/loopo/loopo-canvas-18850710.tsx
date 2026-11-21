// Canvas (loopo, Editors) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const GiftBulk = icon("<path d=\"M3 9A1 1 0 0 1 4 8H20A1 1 0 0 1 21 9V11A1 1 0 0 1 20 12H4A1 1 0 0 1 3 11L3 9\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 8L12 21\"/><path d=\"M19 12V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V12\"/><path d=\"M7.5 8A2.5 2.5 0 0 1 7.5 3 4.8 8 0 0 1 12 8 4.8 8 0 0 1 16.5 3 2.5 2.5 0 0 1 16.5 8\"/></g>");
const PhotoBulk = icon("<path d=\"M3 6A3 3 0 0 1 6 3H18A3 3 0 0 1 21 6V18A3 3 0 0 1 18 21H6A3 3 0 0 1 3 18V6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M15 8H15.01\"/><path d=\"M3 16L8 11C8.928 10.107 10.072 10.107 11 11L16 16\"/><path d=\"M14 14L15 13C15.928 12.107 17.072 12.107 18 13L21 16\"/></g>");
const GripVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");

export function Canvas() {
  return (
    <div style={{ width: "827.21px", height: "969.75px", borderRadius: "24.1px", background: "#f5f5f5", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "114px", top: "28px", width: "600px", height: "759.3px", borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "29.1px 37.1px 29.1px 37.1px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "528px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "7px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>H</p>
          </div>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Harbor & Co.</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999", textDecoration: "underline" }}>View in browser</p>
        </div>
        <div style={{ width: "528px", height: "210px", flexShrink: 0, borderRadius: "8px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <GiftBulk size={44} style={{ width: "44px", height: "44px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#fd4b23" }}>hero-gifts.jpg · alt text set</p>
        </div>
        <div style={{ width: "528px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "4px 0px 4px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box", position: "relative" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "36px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Gifts they’ll use every day</p>
          <div style={{ position: "absolute", left: "-10px", top: "-4px", width: "548px", height: "52px", borderRadius: "6px", boxShadow: "inset 0 0 0 1.5px #fd4b23" }}>
            <div style={{ position: "absolute", left: "8px", top: "-9px", width: "60.2px", height: "17.2px", borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #fd4b23", display: "flex", flexDirection: "row", padding: "2.1px 7.1px 2.1px 7.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#fd4b23" }}>Heading 1</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "-32px", top: "9px", width: "20px", height: "26px", borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <GripVertical size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#999999", display: "block" }} />
          </div>
        </div>
        <p style={{ width: "528px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "15px", fontWeight: 400, color: "#747474", lineHeight: "1.600000023841858" }}>Still looking for something for the cook in your life? Three pieces from our Portland workshop that get used every single day — and they ship free until Fri, Dec 18.</p>
        <div style={{ width: "528px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "168px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "168px", height: "120px", flexShrink: 0, borderRadius: "8px", background: "rgba(77, 152, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <PhotoBulk size={26} style={{ width: "26px", height: "26px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Stoneware Mug Set</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#747474" }}>$48</p>
          </div>
          <div style={{ width: "168px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "168px", height: "120px", flexShrink: 0, borderRadius: "8px", background: "rgba(243, 200, 61, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <PhotoBulk size={26} style={{ width: "26px", height: "26px", flexShrink: 0, color: "#f3c83d", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Walnut Cutting Board</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#747474" }}>$64</p>
          </div>
          <div style={{ width: "168px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "168px", height: "120px", flexShrink: 0, borderRadius: "8px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <PhotoBulk size={26} style={{ width: "26px", height: "26px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>Cast Iron Skillet</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#747474" }}>$85</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "99px", background: "#202020", display: "flex", flexDirection: "row", padding: "11px 24px 11px 24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Shop gifts</p>
        </div>
        <div style={{ width: "528px", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#999999" }}>Harbor & Co. · Portland, OR · Unsubscribe · Manage preferences</p>
      </div>
    </div>
  );
}
