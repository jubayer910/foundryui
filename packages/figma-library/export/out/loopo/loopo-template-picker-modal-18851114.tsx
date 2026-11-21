// Template picker modal (loopo, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const LayoutBulk = icon("<path d=\"M14 6A2 2 0 0 1 16 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H16A2 2 0 0 1 14 18L14 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6A2 2 0 0 1 6 4H8A2 2 0 0 1 10 6V7A2 2 0 0 1 8 9H6A2 2 0 0 1 4 7L4 6\"/><path d=\"M4 15A2 2 0 0 1 6 13H8A2 2 0 0 1 10 15V18A2 2 0 0 1 8 20H6A2 2 0 0 1 4 18L4 15\"/></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const Edit = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1\" /><path d=\"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415\" /><path d=\"M16 5l3 3\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function TemplatePickerModal() {
  return (
    <div style={{ width: "788.86px", height: "691.75px", borderRadius: "17.53px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 26.3px 52.59px -13.15px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "19.72px 19.72px 17.53px 19.72px", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <LayoutBulk size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#000000", lineHeight: "1.5" }}>Start from a template</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Pick a layout for your new post — every block stays editable.</p>
        </div>
        <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 19.72px 19.72px 19.72px", gap: "15.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "10.96px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "3.29px 3.29px 3.29px 3.29px", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#000000" }}>All</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>12</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Newsletters</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>3</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Promotions</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>5</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "5.48px 10.96px 5.48px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>Lifecycle</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>4</p>
            </div>
          </div>
          <div style={{ width: "219.13px", height: "37.25px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#999999" }}>Search templates</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "13.15px", columnGap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "240.3px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.87px 9.87px 9.87px 9.87px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "222.76px", height: "150px", flexShrink: 0, borderRadius: "8.77px", background: "#edf5ff", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "38px", top: "14px", width: "147px", height: "200px", borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
                <div style={{ position: "absolute", left: "10px", top: "10px", width: "12px", height: "12px", borderRadius: "3px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#ffffff" }}>H</p>
                </div>
                <div style={{ position: "absolute", left: "27px", top: "14px", width: "30px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "32px", width: "34px", height: "28px", borderRadius: "3px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ position: "absolute", left: "50px", top: "34px", width: "87px", height: "5px", borderRadius: "2px", background: "#c6c6c6" }} />
                <div style={{ position: "absolute", left: "50px", top: "44px", width: "77px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "50px", top: "52px", width: "63px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "70px", width: "34px", height: "28px", borderRadius: "3px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ position: "absolute", left: "50px", top: "72px", width: "87px", height: "5px", borderRadius: "2px", background: "#c6c6c6" }} />
                <div style={{ position: "absolute", left: "50px", top: "82px", width: "77px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "50px", top: "90px", width: "63px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "108px", width: "34px", height: "28px", borderRadius: "3px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ position: "absolute", left: "50px", top: "110px", width: "87px", height: "5px", borderRadius: "2px", background: "#c6c6c6" }} />
                <div style={{ position: "absolute", left: "50px", top: "120px", width: "77px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "50px", top: "128px", width: "63px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4.38px 4.38px 4.38px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Newsletter</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Newsletters · used 48 times</p>
            </div>
          </div>
          <div style={{ width: "240.3px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.64px #fd4b23, 0px 0px 0px 3.29px rgba(253, 75, 35, 0.16)", display: "flex", flexDirection: "column", padding: "10.41px 10.41px 10.41px 10.41px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "222.76px", height: "150px", flexShrink: 0, borderRadius: "8.77px", background: "#ffede9", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "38px", top: "14px", width: "147px", height: "200px", borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
                <div style={{ position: "absolute", left: "10px", top: "10px", width: "12px", height: "12px", borderRadius: "3px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#ffffff" }}>H</p>
                </div>
                <div style={{ position: "absolute", left: "27px", top: "14px", width: "30px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "32px", width: "127px", height: "64px", borderRadius: "3px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ position: "absolute", left: "10px", top: "106px", width: "88.9px", height: "6px", borderRadius: "2px", background: "#c6c6c6" }} />
                <div style={{ position: "absolute", left: "10px", top: "119px", width: "127px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "128px", width: "101.6px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "141px", width: "44px", height: "13px", borderRadius: "7px", background: "#202020" }} />
              </div>
              <div style={{ position: "absolute", left: "192.85px", top: "8px", width: "21.91px", height: "21.91px", borderRadius: "10.96px", background: "#fd4b23", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Check size={13.2} style={{ width: "13.15px", height: "13.15px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4.38px 4.38px 4.38px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Product launch</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Promotions · used 6 times</p>
            </div>
          </div>
          <div style={{ width: "240.3px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.87px 9.87px 9.87px 9.87px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "222.76px", height: "150px", flexShrink: 0, borderRadius: "8.77px", background: "#fff1f7", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "38px", top: "14px", width: "147px", height: "200px", borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
                <div style={{ position: "absolute", left: "10px", top: "10px", width: "12px", height: "12px", borderRadius: "3px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#ffffff" }}>H</p>
                </div>
                <div style={{ position: "absolute", left: "27px", top: "14px", width: "30px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "32px", width: "127px", height: "70px", borderRadius: "3px", background: "rgba(255, 114, 171, 0.16)", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "57.15px", height: "12px", flexShrink: 0, borderRadius: "3px", background: "rgba(255, 114, 171, 0.8)" }} />
                  <div style={{ width: "76.2px", height: "4px", flexShrink: 0, borderRadius: "2px", background: "rgba(255, 114, 171, 0.4)" }} />
                </div>
                <div style={{ position: "absolute", left: "35.4px", top: "112px", width: "76.2px", height: "18px", borderRadius: "3px", boxShadow: "inset 0 0 0 1.1px #c6c6c6" }} />
                <div style={{ position: "absolute", left: "51.5px", top: "138px", width: "44px", height: "13px", borderRadius: "7px", background: "#202020" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4.38px 4.38px 4.38px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Sale</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Promotions · used 4 times</p>
            </div>
          </div>
          <div style={{ width: "240.3px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.87px 9.87px 9.87px 9.87px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "222.76px", height: "150px", flexShrink: 0, borderRadius: "8.77px", background: "#e8f7f1", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "38px", top: "14px", width: "147px", height: "200px", borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
                <div style={{ position: "absolute", left: "10px", top: "10px", width: "12px", height: "12px", borderRadius: "3px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#ffffff" }}>H</p>
                </div>
                <div style={{ position: "absolute", left: "27px", top: "14px", width: "30px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "32px", width: "57.15px", height: "70px", borderRadius: "3px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ position: "absolute", left: "73.15px", top: "38px", width: "57.15px", height: "6px", borderRadius: "2px", background: "#c6c6c6" }} />
                <div style={{ position: "absolute", left: "73.15px", top: "50px", width: "50.8px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "73.15px", top: "58px", width: "38.1px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "73.15px", top: "76px", width: "40px", height: "12px", borderRadius: "6px", background: "#202020" }} />
                <div style={{ position: "absolute", left: "10px", top: "114px", width: "127px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4.38px 4.38px 4.38px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Restock alert</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Lifecycle · used 3 times</p>
            </div>
          </div>
          <div style={{ width: "240.3px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.87px 9.87px 9.87px 9.87px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "222.76px", height: "150px", flexShrink: 0, borderRadius: "8.77px", background: "#fefaec", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "38px", top: "14px", width: "147px", height: "200px", borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
                <div style={{ position: "absolute", left: "10px", top: "10px", width: "12px", height: "12px", borderRadius: "3px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#ffffff" }}>H</p>
                </div>
                <div style={{ position: "absolute", left: "27px", top: "14px", width: "30px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "32px", width: "127px", height: "50px", borderRadius: "3px", background: "rgba(243, 200, 61, 0.16)" }} />
                <div style={{ position: "absolute", left: "10px", top: "92px", width: "76.2px", height: "6px", borderRadius: "2px", background: "#c6c6c6" }} />
                <div style={{ position: "absolute", left: "10px", top: "105px", width: "127px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <svg style={{ position: "absolute", left: "10px", top: "119px", width: "18px", height: "18px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M18 9 C18 13.9706 13.9706 18 9 18 C4.02944 18 0 13.9706 0 9 C0 4.02944 4.02944 0 9 0 C13.9706 0 18 4.02944 18 9 Z" fill="#f3c83d" fillOpacity="0.2"/></svg>
                <svg style={{ position: "absolute", left: "64.5px", top: "119px", width: "18px", height: "18px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M18 9 C18 13.9706 13.9706 18 9 18 C4.02944 18 0 13.9706 0 9 C0 4.02944 4.02944 0 9 0 C13.9706 0 18 4.02944 18 9 Z" fill="#f3c83d" fillOpacity="0.2"/></svg>
                <svg style={{ position: "absolute", left: "119px", top: "119px", width: "18px", height: "18px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M18 9 C18 13.9706 13.9706 18 9 18 C4.02944 18 0 13.9706 0 9 C0 4.02944 4.02944 0 9 0 C13.9706 0 18 4.02944 18 9 Z" fill="#f3c83d" fillOpacity="0.2"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4.38px 4.38px 4.38px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Welcome</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Lifecycle · in Welcome series</p>
            </div>
          </div>
          <div style={{ width: "240.3px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "9.87px 9.87px 9.87px 9.87px", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "222.76px", height: "150px", flexShrink: 0, borderRadius: "8.77px", background: "#f9f9f9", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "38px", top: "14px", width: "147px", height: "200px", borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8" }}>
                <div style={{ position: "absolute", left: "10px", top: "10px", width: "12px", height: "12px", borderRadius: "3px", background: "#202020", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#ffffff" }}>H</p>
                </div>
                <div style={{ position: "absolute", left: "27px", top: "14px", width: "30px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "32px", width: "127px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "41px", width: "116.84px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "50px", width: "107.95px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "59px", width: "127px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "68px", width: "76.2px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "84px", width: "120.65px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "93px", width: "111.76px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "102px", width: "88.9px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
                <div style={{ position: "absolute", left: "10px", top: "111px", width: "50.8px", height: "4px", borderRadius: "2px", background: "#e1e1e1" }} />
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 4.38px 4.38px 4.38px", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Plain text</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Newsletters · used 12 times</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "16.44px 19.72px 15.34px 19.72px", gap: "10.96px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Product launch · 7 blocks · 600px wide</p>
        <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Cancel</p>
        </div>
        <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Edit size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Use template</p>
          </div>
        </div>
      </div>
    </div>
  );
}
