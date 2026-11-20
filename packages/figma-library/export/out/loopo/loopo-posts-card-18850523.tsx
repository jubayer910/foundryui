"use client";
// Posts card (loopo, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const DeliveryTruckBulk = icon("<path d=\"M18 19C19.1046 19 20 18.1046 20 17 20 15.8954 19.1046 15 18 15 16.8954 15 16 15.8954 16 17 16 18.1046 16.8954 19 18 19Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M8 19C9.10457 19 10 18.1046 10 17 10 15.8954 9.10457 15 8 15 6.89543 15 6 15.8954 6 17 6 18.1046 6.89543 19 8 19Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 19C9.10457 19 10 18.1046 10 17C10 15.8954 9.10457 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z\" stroke-miterlimit=\"1.5\"/><path d=\"M18 19C19.1046 19 20 18.1046 20 17C20 15.8954 19.1046 15 18 15C16.8954 15 16 15.8954 16 17C16 18.1046 16.8954 19 18 19Z\" stroke-miterlimit=\"1.5\"/><path d=\"M10.05 17H15V6.6C15 6.26863 14.7314 6 14.4 6H1\" /><path d=\"M5.65 17H3.6C3.26863 17 3 16.7314 3 16.4V11.5\" /><path d=\"M2 9L6 9\" /><path d=\"M15 9H20.6101C20.8472 9 21.0621 9.13964 21.1584 9.35632L22.9483 13.3836C22.9824 13.4604 23 13.5434 23 13.6273V16.4C23 16.7314 22.7314 17 22.4 17H20.5\" /><path d=\"M15 17H16\" /></g>");
const FlameBulk = icon("<path d=\"M12 10.941C14.333 7.633000000000001 12.167 3.1180000000000003 11 2 11 5.395 8.765 7.299 7.333 8.706 5.9030000000000005 10.113999999999999 5 12 5 14.294 5 17.998 8.134 21 12 21 15.866 21 19 17.998 19 14.294 19 12.582 17.768 9.891000000000002 16.667 8.706 14.583000000000002 12.059 13.410000000000002 12.059 12.000000000000002 10.940999999999999\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const GiftBulk = icon("<path d=\"M3 9A1 1 0 0 1 4 8H20A1 1 0 0 1 21 9V11A1 1 0 0 1 20 12H4A1 1 0 0 1 3 11L3 9\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 8L12 21\"/><path d=\"M19 12V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V12\"/><path d=\"M7.5 8A2.5 2.5 0 0 1 7.5 3 4.8 8 0 0 1 12 8 4.8 8 0 0 1 16.5 3 2.5 2.5 0 0 1 16.5 8\"/></g>");
const GiftCardBulk = icon("<path d=\"M3 8A3 3 0 0 1 6 5H18A3 3 0 0 1 21 8V16A3 3 0 0 1 18 19H6A3 3 0 0 1 3 16L3 8\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 16L10 13 13 16\"/><path d=\"M8 13C7.211 13 6 12.328 6 11.5 6 10.672 6.711 10 7.5 10 8.628 9.98 9.577 11.17 10 13 10.423 11.17 11.372 9.98 12.5 10 13.289 10 14 10.672 14 11.5 14 12.328 12.789 13 12 13H8\"/></g>");
const NewsBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11\" /><path d=\"M8 8l4 0\" /><path d=\"M8 12l4 0\" /><path d=\"M8 16l4 0\" /></g>");
const PackageBulk = icon("<path d=\"M12 3L20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 12L20 7.5\"/><path d=\"M12 12L12 21\"/><path d=\"M12 12L4 7.5\"/><path d=\"M16 5.25L8 9.75\"/></g>");
const SignatureBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2\" /></g>");
const TagBulk = icon("<path d=\"M3 6V11.172A2 2 0 0 0 3.586 12.586L11.296 20.296A2.41 2.41 0 0 0 14.703999999999999 20.296L20.296 14.704A2.41 2.41 0 0 0 20.296 11.296000000000001L12.585999999999999 3.586000000000001A2 2 0 0 0 11.171999999999999 3.0000000000000013H5.999999999999999A3 3 0 0 0 2.999999999999999 6.000000000000002\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 7.5A1 1 0 1 0 8.5 7.5 1 1 0 1 0 6.5 7.5\"/></g>");

export function PostsCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1245.7px", height: "883.1px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23px 23px 23px 23px", gap: "17.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Posts</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6b6b70" }}>32 posts · sorted by last edited</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "11px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.3px 3.3px 3.3px 3.3px", gap: "2.2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#000000" }}>All</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>32</p>
          </div>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#6c6c6c" }}>Emails</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>24</p>
          </div>
          <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#6c6c6c" }}>Product stories</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>8</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "17.5px", columnGap: "17.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "286.8px", height: "378.4px", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.9px 9.9px 9.9px 9.9px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "269.2px", height: "265px", flexShrink: 0, borderRadius: "8.8px", background: "#f9f9f9", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "51px", top: "19.7px", width: "167px", height: "265px", borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
              <div style={{ position: "absolute", left: "12px", top: "12px", width: "16px", height: "16px", borderRadius: "4px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ffffff" }}>H</p>
              </div>
              <div style={{ position: "absolute", left: "34px", top: "17.5px", width: "40px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "38px", width: "143px", height: "60px", borderRadius: "4px", background: "rgba(198, 198, 198, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <SignatureBulk size={24.1} style={{ width: "24.1px", height: "24.1px", flexShrink: 0, color: "#c6c6c6", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "12px", top: "110px", width: "103px", height: "7px", borderRadius: "3px", background: "#c6c6c6" }} />
              <div style={{ position: "absolute", left: "12px", top: "125px", width: "143px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "135px", width: "131.6px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "145px", width: "91.5px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "161px", width: "56px", height: "16px", borderRadius: "8px", background: "#202020" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 6.6px 0px 6.6px", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.4px", fontWeight: 500, color: "#222222" }}>Founder letter</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Email · Edited Dec 13</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#6c6c6c"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#6c6c6c" }}>Draft</p>
            </div>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(0, 68, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#0044ff" }}>JE</p>
            </div>
          </div>
        </div>
        <div style={{ width: "286.8px", height: "378.4px", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.9px 9.9px 9.9px 9.9px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "269.2px", height: "265px", flexShrink: 0, borderRadius: "8.8px", background: "#e8f7f1", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "51px", top: "19.7px", width: "167px", height: "265px", borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
              <div style={{ position: "absolute", left: "12px", top: "12px", width: "16px", height: "16px", borderRadius: "4px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ffffff" }}>H</p>
              </div>
              <div style={{ position: "absolute", left: "34px", top: "17.5px", width: "40px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "38px", width: "143px", height: "78px", borderRadius: "4px", background: "rgba(24, 177, 112, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <PackageBulk size={24.1} style={{ width: "24.1px", height: "24.1px", flexShrink: 0, color: "#18b170", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "12px", top: "128px", width: "103px", height: "7px", borderRadius: "3px", background: "#c6c6c6" }} />
              <div style={{ position: "absolute", left: "12px", top: "143px", width: "143px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "153px", width: "131.6px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "163px", width: "91.5px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "179px", width: "67.5px", height: "30px", borderRadius: "4px", background: "#f5f5f5" }} />
              <div style={{ position: "absolute", left: "87.5px", top: "179px", width: "67.5px", height: "30px", borderRadius: "4px", background: "#f5f5f5" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 6.6px 0px 6.6px", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.4px", fontWeight: 500, color: "#222222" }}>Harbor Club unboxing</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Product story · Edited Dec 12</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#edf2ff", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#2f66ff"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#2f66ff" }}>Scheduled</p>
            </div>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#ff72ab" }}>LO</p>
            </div>
          </div>
        </div>
        <div style={{ width: "286.8px", height: "378.4px", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.9px 9.9px 9.9px 9.9px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "269.2px", height: "265px", flexShrink: 0, borderRadius: "8.8px", background: "#ffede9", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "51px", top: "19.7px", width: "167px", height: "265px", borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
              <div style={{ position: "absolute", left: "12px", top: "12px", width: "16px", height: "16px", borderRadius: "4px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ffffff" }}>H</p>
              </div>
              <div style={{ position: "absolute", left: "34px", top: "17.5px", width: "40px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "38px", width: "143px", height: "60px", borderRadius: "4px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <GiftCardBulk size={24.1} style={{ width: "24.1px", height: "24.1px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "12px", top: "110px", width: "103px", height: "7px", borderRadius: "3px", background: "#c6c6c6" }} />
              <div style={{ position: "absolute", left: "12px", top: "125px", width: "143px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "135px", width: "131.6px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "145px", width: "91.5px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "161px", width: "56px", height: "16px", borderRadius: "8px", background: "#202020" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 6.6px 0px 6.6px", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.4px", fontWeight: 500, color: "#222222" }}>Gift card promo</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Email · Edited Dec 11</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#edf2ff", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#2f66ff"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#2f66ff" }}>Scheduled</p>
            </div>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#fd4b23" }}>PS</p>
            </div>
          </div>
        </div>
        <div style={{ width: "286.8px", height: "378.4px", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.9px 9.9px 9.9px 9.9px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "269.2px", height: "265px", flexShrink: 0, borderRadius: "8.8px", background: "#fefaec", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "51px", top: "19.7px", width: "167px", height: "265px", borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
              <div style={{ position: "absolute", left: "12px", top: "12px", width: "16px", height: "16px", borderRadius: "4px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ffffff" }}>H</p>
              </div>
              <div style={{ position: "absolute", left: "34px", top: "17.5px", width: "40px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "38px", width: "143px", height: "78px", borderRadius: "4px", background: "rgba(243, 200, 61, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FlameBulk size={24.1} style={{ width: "24.1px", height: "24.1px", flexShrink: 0, color: "#f3c83d", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "12px", top: "128px", width: "103px", height: "7px", borderRadius: "3px", background: "#c6c6c6" }} />
              <div style={{ position: "absolute", left: "12px", top: "143px", width: "143px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "153px", width: "131.6px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "163px", width: "91.5px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "179px", width: "67.5px", height: "30px", borderRadius: "4px", background: "#f5f5f5" }} />
              <div style={{ position: "absolute", left: "87.5px", top: "179px", width: "67.5px", height: "30px", borderRadius: "4px", background: "#f5f5f5" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 6.6px 0px 6.6px", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.4px", fontWeight: 500, color: "#222222" }}>Cast iron care 101</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Product story · Edited Dec 10</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#f4f4f5", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#6c6c6c"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#6c6c6c" }}>Draft</p>
            </div>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(0, 68, 255, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#0044ff" }}>JE</p>
            </div>
          </div>
        </div>
        <div style={{ width: "286.8px", height: "378.4px", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.9px 9.9px 9.9px 9.9px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "269.2px", height: "265px", flexShrink: 0, borderRadius: "8.8px", background: "#edf5ff", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "51px", top: "19.7px", width: "167px", height: "265px", borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
              <div style={{ position: "absolute", left: "12px", top: "12px", width: "16px", height: "16px", borderRadius: "4px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ffffff" }}>H</p>
              </div>
              <div style={{ position: "absolute", left: "34px", top: "17.5px", width: "40px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "38px", width: "143px", height: "60px", borderRadius: "4px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <NewsBulk size={24.1} style={{ width: "24.1px", height: "24.1px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "12px", top: "110px", width: "103px", height: "7px", borderRadius: "3px", background: "#c6c6c6" }} />
              <div style={{ position: "absolute", left: "12px", top: "125px", width: "143px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "135px", width: "131.6px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "145px", width: "91.5px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "161px", width: "56px", height: "16px", borderRadius: "8px", background: "#202020" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 6.6px 0px 6.6px", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.4px", fontWeight: 500, color: "#222222" }}>Weekly notes #48</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Email · Edited Dec 8</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Published</p>
            </div>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#fd4b23" }}>PS</p>
            </div>
          </div>
        </div>
        <div style={{ width: "286.8px", height: "378.4px", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.9px 9.9px 9.9px 9.9px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "269.2px", height: "265px", flexShrink: 0, borderRadius: "8.8px", background: "#ffede9", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "51px", top: "19.7px", width: "167px", height: "265px", borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
              <div style={{ position: "absolute", left: "12px", top: "12px", width: "16px", height: "16px", borderRadius: "4px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ffffff" }}>H</p>
              </div>
              <div style={{ position: "absolute", left: "34px", top: "17.5px", width: "40px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "38px", width: "143px", height: "60px", borderRadius: "4px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <GiftBulk size={24.1} style={{ width: "24.1px", height: "24.1px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "12px", top: "110px", width: "103px", height: "7px", borderRadius: "3px", background: "#c6c6c6" }} />
              <div style={{ position: "absolute", left: "12px", top: "125px", width: "143px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "135px", width: "131.6px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "145px", width: "91.5px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "161px", width: "56px", height: "16px", borderRadius: "8px", background: "#202020" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 6.6px 0px 6.6px", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.4px", fontWeight: 500, color: "#222222" }}>Holiday Gift Guide</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Email · Edited Dec 1</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Published</p>
            </div>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#fd4b23" }}>PS</p>
            </div>
          </div>
        </div>
        <div style={{ width: "286.8px", height: "378.4px", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.9px 9.9px 9.9px 9.9px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "269.2px", height: "265px", flexShrink: 0, borderRadius: "8.8px", background: "#edf5ff", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "51px", top: "19.7px", width: "167px", height: "265px", borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
              <div style={{ position: "absolute", left: "12px", top: "12px", width: "16px", height: "16px", borderRadius: "4px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ffffff" }}>H</p>
              </div>
              <div style={{ position: "absolute", left: "34px", top: "17.5px", width: "40px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "38px", width: "143px", height: "60px", borderRadius: "4px", background: "rgba(77, 152, 254, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DeliveryTruckBulk size={24.1} style={{ width: "24.1px", height: "24.1px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "12px", top: "110px", width: "103px", height: "7px", borderRadius: "3px", background: "#c6c6c6" }} />
              <div style={{ position: "absolute", left: "12px", top: "125px", width: "143px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "135px", width: "131.6px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "145px", width: "91.5px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "161px", width: "56px", height: "16px", borderRadius: "8px", background: "#202020" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 6.6px 0px 6.6px", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.4px", fontWeight: 500, color: "#222222" }}>Winter restock</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Email · Edited Nov 27</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Published</p>
            </div>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(253, 75, 35, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#fd4b23" }}>PS</p>
            </div>
          </div>
        </div>
        <div style={{ width: "286.8px", height: "378.4px", flexShrink: 0, borderRadius: "13.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.9px 9.9px 9.9px 9.9px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "269.2px", height: "265px", flexShrink: 0, borderRadius: "8.8px", background: "#fff1f7", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "51px", top: "19.7px", width: "167px", height: "265px", borderRadius: "4.4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
              <div style={{ position: "absolute", left: "12px", top: "12px", width: "16px", height: "16px", borderRadius: "4px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ffffff" }}>H</p>
              </div>
              <div style={{ position: "absolute", left: "34px", top: "17.5px", width: "40px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "38px", width: "143px", height: "60px", borderRadius: "4px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <TagBulk size={24.1} style={{ width: "24.1px", height: "24.1px", flexShrink: 0, color: "#ff72ab", display: "block" }} />
              </div>
              <div style={{ position: "absolute", left: "12px", top: "110px", width: "103px", height: "7px", borderRadius: "3px", background: "#c6c6c6" }} />
              <div style={{ position: "absolute", left: "12px", top: "125px", width: "143px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "135px", width: "131.6px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "145px", width: "91.5px", height: "5px", borderRadius: "3px", background: "#e1e1e1" }} />
              <div style={{ position: "absolute", left: "12px", top: "161px", width: "56px", height: "16px", borderRadius: "8px", background: "#202020" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 6.6px 0px 6.6px", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.4px", fontWeight: 500, color: "#222222" }}>Black Friday hero</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Email · Edited Nov 25</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.6px 0px 6.6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6.6px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.3px 8.8px 3.3px 7.7px", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.6px", height: "6.6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#18b170" }}>Published</p>
            </div>
            <div style={{ width: "24.1px", height: "24.1px", flexShrink: 0, borderRadius: "12.1px", background: "rgba(255, 114, 171, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.6px", fontWeight: 500, color: "#ff72ab" }}>LO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
function fuInteract(root: HTMLElement | null) {
  if (!root || root.dataset.fuOn) return;
  root.dataset.fuOn = "1";
  const doc = root.ownerDocument;
  const all = (sel: string, el: Element = root): HTMLElement[] => Array.from(el.querySelectorAll(sel)) as HTMLElement[];
  const box = (el: Element) => el.getBoundingClientRect();
  const font = getComputedStyle(root).fontFamily;
  const tip = doc.createElement("div");
  tip.setAttribute("aria-hidden", "true");
  Object.assign(tip.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "none", background: "#111113", color: "#fff", font: "500 12px/16px " + font, padding: "5px 8px", borderRadius: "6px", whiteSpace: "nowrap", opacity: "0", transform: "translate(-50%, -100%)", transition: "opacity .12s", boxShadow: "0 4px 14px rgba(0,0,0,.18)" });
  doc.body.appendChild(tip);
  const show = (text: string, x: number, y: number) => { if (!text) return hide(); tip.textContent = text; tip.style.left = x + "px"; tip.style.top = y - 8 + "px"; tip.style.opacity = "1"; };
  const hide = () => { tip.style.opacity = "0"; };
  const ease = (el: HTMLElement | SVGElement, props: string) => { const s = (el as HTMLElement).style; if (!s.transition) s.transition = props; };
  const texts = (scope: Element) => all("p, span", scope).filter((t) => t.children.length === 0 && (t.textContent || "").trim());
  const NUM = /^([^\d\-+.]*)([-+]?[\d,]*\.?\d+)\s*([kKmMbB%]?)([^\d]*)$/;
  // value axis: numeric labels along one edge of the chart, used to read a mark's value from its position
  const axis = (scope: Element, vertical: boolean) => {
    const pts: { v: number; p: number; pre: string; suf: string; dec: number }[] = [];
    for (const t of texts(scope)) {
      const m = (t.textContent || "").trim().match(NUM);
      if (!m) continue;
      const mult = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9 }[m[3] as "k"] || 1;
      const r = box(t);
      pts.push({ v: parseFloat(m[2].replace(/,/g, "")) * mult, p: vertical ? r.top + r.height / 2 : r.left + r.width / 2, pre: m[1], suf: m[3] + m[4], dec: (m[2].split(".")[1] || "").length });
    }
    const uniq = pts.filter((a, i) => pts.findIndex((b) => Math.abs(b.p - a.p) < 2) === i);
    if (uniq.length < 2) return null;
    uniq.sort((a, b) => a.p - b.p);
    const a = uniq[0], b = uniq[uniq.length - 1];
    if (a.v === b.v || Math.abs(b.p - a.p) < 10) return null;
    return (pos: number) => {
      const v = a.v + ((pos - a.p) * (b.v - a.v)) / (b.p - a.p);
      const suf = a.suf || b.suf, pre = a.pre || b.pre;
      const div = /^[kK]/.test(suf) ? 1e3 : /^[mM]/.test(suf) ? 1e6 : /^[bB]/.test(suf) ? 1e9 : 1;
      const x = v / div;
      const dec = Math.max(a.dec, b.dec, div > 1 && Math.abs(x) < 100 ? 1 : 0);
      return pre + x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec }) + suf;
    };
  };
  // the chart around a group of marks: the nearest ancestor that also holds text labels
  const chartOf = (el: Element) => { let c: Element | null = el.parentElement; while (c && c !== root.parentElement) { if (texts(c).length >= 3) return c; c = c.parentElement; } return root; };
  const labelNear = (scope: Element, x: number, y: number, below: boolean) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
      const dd = below ? Math.abs(r.left + r.width / 2 - x) + (r.top - y) * 0.2 : Math.abs(r.top + r.height / 2 - y) + (x - r.right) * 0.1;
      if (dd < d) { d = dd; best = (t.textContent || "").trim(); }
    }
    return d < 80 ? best : "";
  };
  const dim = (els: (HTMLElement | SVGElement)[], keep: (HTMLElement | SVGElement)[]) => { for (const e of els) { ease(e, "opacity .15s"); (e as HTMLElement).style.opacity = keep.includes(e) ? "" : "0.35"; } };
  const undim = (els: (HTMLElement | SVGElement)[]) => { for (const e of els) (e as HTMLElement).style.opacity = ""; };

  // vertical bars: the hovered column (all stacked segments at that x) stays, the rest fade
  const groups = new Map<Element, HTMLElement[]>();
  for (const b of all("[data-fu=bar],[data-fu=hbar]")) { const p = b.parentElement!; if (!groups.has(p)) groups.set(p, []); groups.get(p)!.push(b); }
  groups.forEach((bars) => {
    const horiz = bars[0].dataset.fu === "hbar";
    const scope = chartOf(bars[0]);
    const val = axis(scope, !horiz);
    const peers = (b: HTMLElement) => { const r = box(b), c = horiz ? r.top + r.height / 2 : r.left + r.width / 2; return bars.filter((o) => { const q = box(o); return Math.abs((horiz ? q.top + q.height / 2 : q.left + q.width / 2) - c) < Math.max(2, (horiz ? r.height : r.width) / 2); }); };
    for (const b of bars) {
      b.addEventListener("mouseenter", () => {
        const col = peers(b);
        dim(bars, col);
        const rs = col.map(box);
        const top = Math.min(...rs.map((r) => r.top)), right = Math.max(...rs.map((r) => r.right)), r0 = rs[0];
        const label = horiz ? labelNear(scope, r0.left, r0.top + r0.height / 2, false) : labelNear(scope, r0.left + r0.width / 2, Math.max(...rs.map((r) => r.bottom)), true);
        const v = val ? val(horiz ? right : top) : "";
        show([label, v].filter(Boolean).join(" · "), horiz ? right : r0.left + r0.width / 2, horiz ? r0.top : top);
      });
      b.addEventListener("mouseleave", () => { undim(bars); hide(); });
    }
  });

  // line and area plots: a guide line and a dot follow the pointer along the top edge of the plotted shape
  for (const svg of all("svg[data-fu=plot]") as unknown as SVGSVGElement[]) {
    const paths = Array.from(svg.querySelectorAll("path, polyline")) as SVGGeometryElement[];
    if (!paths.length) continue;
    const line = paths.reduce((a, b) => (b.getTotalLength() > a.getTotalLength() ? b : a));
    const len = line.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 800; i++) { const q = line.getPointAtLength((len * i) / 800); pts.push({ x: q.x, y: q.y }); }
    const xs = pts.map((q) => q.x), minX = Math.min(...xs), maxX = Math.max(...xs);
    const color = (line.getAttribute("stroke") && line.getAttribute("stroke") !== "none" ? line.getAttribute("stroke") : line.getAttribute("fill")) || "#111";
    const NS = "http://www.w3.org/2000/svg";
    const g = doc.createElementNS(NS, "g");
    g.setAttribute("pointer-events", "none");
    g.style.opacity = "0";
    const guide = doc.createElementNS(NS, "line");
    guide.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    guide.setAttribute("stroke-dasharray", "3 3");
    guide.setAttribute("stroke-opacity", "0.5");
    const dot = doc.createElementNS(NS, "circle");
    dot.setAttribute("r", "4");
    dot.setAttribute("fill", "#fff");
    dot.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    dot.setAttribute("stroke-width", "2");
    g.append(guide, dot);
    svg.appendChild(g);
    const scope = chartOf(svg);
    const val = axis(scope, true);
    const area = svg.parentElement || svg;
    area.addEventListener("mousemove", (ev: Event) => {
      const e = ev as MouseEvent;
      const m = line.getScreenCTM();
      if (!m) return;
      const px = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()).x;
      if (px < minX - 4 || px > maxX + 4) { g.style.opacity = "0"; hide(); return; }
      const step = (maxX - minX) / 400 || 1;
      let y = Infinity, x = px;
      for (const q of pts) if (Math.abs(q.x - px) <= step && q.y < y) { y = q.y; x = q.x; }
      if (y === Infinity) return;
      const bb = line.getBBox();
      guide.setAttribute("x1", String(x)); guide.setAttribute("x2", String(x));
      guide.setAttribute("y1", String(bb.y)); guide.setAttribute("y2", String(bb.y + bb.height));
      dot.setAttribute("cx", String(x)); dot.setAttribute("cy", String(y));
      g.style.opacity = "1";
      const sp = new DOMPoint(x, y).matrixTransform(m);
      const label = labelNear(scope, sp.x, box(svg).bottom, true);
      show([label, val ? val(sp.y) : ""].filter(Boolean).join(" · "), sp.x, sp.y);
    });
    area.addEventListener("mouseleave", () => { g.style.opacity = "0"; hide(); });
  }

  // rows: a soft highlight under the pointer
  for (const r of all("[data-fu=row]")) {
    r.addEventListener("mouseenter", () => { ease(r, "filter .15s"); r.style.filter = "brightness(0.975)"; });
    r.addEventListener("mouseleave", () => { r.style.filter = ""; });
  }

  // buttons: hover and press feedback
  for (const b of all("[data-fu=btn],[data-fu=tab]")) {
    b.style.cursor = "pointer";
    b.addEventListener("mouseenter", () => { ease(b, "filter .15s, transform .1s"); if (!b.dataset.fuActive) b.style.filter = "brightness(0.96)"; });
    b.addEventListener("mouseleave", () => { b.style.filter = ""; b.style.transform = ""; });
    b.addEventListener("mousedown", () => { b.style.transform = "scale(0.98)"; });
    b.addEventListener("mouseup", () => { b.style.transform = ""; });
  }

  // tabs and segmented controls: clicking a tab moves the selected look onto it
  const VIS = ["background-color", "background-image", "box-shadow", "border-color", "color", "font-weight"];
  const look = (el: HTMLElement) => VIS.map((k) => el.style.getPropertyValue(k)).join("|");
  const tabGroups = new Map<Element, HTMLElement[]>();
  for (const t of all("[data-fu=tab]")) { const p = t.parentElement!; if (!tabGroups.has(p)) tabGroups.set(p, []); tabGroups.get(p)!.push(t); }
  tabGroups.forEach((tabs) => {
    if (tabs.length < 2) return;
    const counts = new Map<string, number>();
    for (const t of tabs) counts.set(look(t), (counts.get(look(t)) || 0) + 1);
    let active = tabs.find((t) => counts.get(look(t)) === 1 && counts.size > 1) || null;
    if (!active) return;
    active.dataset.fuActive = "1";
    // read both looks first, then write: swapping one property at a time would let shorthands undo each other
    const swapStyle = (a: HTMLElement, b: HTMLElement, props: string[]) => {
      const va = props.map((k) => a.style.getPropertyValue(k)), vb = props.map((k) => b.style.getPropertyValue(k));
      props.forEach((k, i) => { a.style.setProperty(k, vb[i]); b.style.setProperty(k, va[i]); });
    };
    const swap = (a: HTMLElement, b: HTMLElement) => {
      swapStyle(a, b, VIS);
      const ta = texts(a), tb = texts(b);
      for (let i = 0; i < Math.min(ta.length, tb.length); i++) swapStyle(ta[i], tb[i], ["color", "font-weight"]);
    };
    for (const t of tabs) t.addEventListener("click", () => {
      if (!active || t === active) return;
      t.style.filter = "";
      swap(active, t);
      delete active.dataset.fuActive;
      active = t;
      t.dataset.fuActive = "1";
    });
  });
}
