// Posts card (loopo, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
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
  return (
    <div style={{ width: "1245.7px", height: "883.1px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23px 23px 23px 23px", gap: "17.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Posts</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6b6b70" }}>32 posts · sorted by last edited</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "11px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.3px 3.3px 3.3px 3.3px", gap: "2.2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#000000" }}>All</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>32</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#6c6c6c" }}>Emails</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>24</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "5.5px 11px 5.5px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
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
