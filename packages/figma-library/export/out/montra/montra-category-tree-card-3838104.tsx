// Category tree card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Building = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21l18 0\" /><path d=\"M9 8l1 0\" /><path d=\"M9 12l1 0\" /><path d=\"M9 16l1 0\" /><path d=\"M14 8l1 0\" /><path d=\"M14 12l1 0\" /><path d=\"M14 16l1 0\" /><path d=\"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const DeviceLaptop = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19l18 0\" /><path d=\"M5 7a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8\" /></g>");
const Folder = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2\" /></g>");
const Megaphone = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\" /><path d=\"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14\" /><path d=\"M8 6v8\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function CategoryTreeCard() {
  return (
    <div style={{ width: "711px", height: "540.72px", borderRadius: "14.62px", background: "#fefefe", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "21.93px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Category tree</p>
      <div style={{ position: "absolute", left: "150px", top: "15.54px", width: "192.89px", height: "31.07px", borderRadius: "9.14px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.74px 2.74px 2.74px 2.74px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #eeeeee, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#000000" }}>Expense</p>
          <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>18</p>
          </div>
        </div>
        <div style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#646871" }}>Income</p>
          <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#f0f0f2", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>6</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "519.08px", top: "15.54px", width: "173.64px", height: "31.07px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Search size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#686765", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Search categories</p>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "62.14px", width: "711px", height: "475.2px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "47.52px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Category</p>
          </div>
          <div style={{ width: "95px", height: "47.52px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Type</p>
          </div>
          <div style={{ width: "70px", height: "47.52px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Txns</p>
          </div>
          <div style={{ width: "105px", height: "47.52px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Aug spend</p>
          </div>
          <div style={{ width: "191px", height: "47.52px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Budget</p>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Building size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Operations</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>4 subcategories</p>
              </div>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>96</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$6,989</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>66%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $10.6K</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "9.14px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ width: "9.14px", height: "18.28px", flexShrink: 0, borderRadius: "0px 0px 0px 3.66px", boxShadow: "inset 0 -0.91px 0 0 #dfe1e6, inset 0.91px 0 0 0 #dfe1e6" }} />
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4996fe"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Rent & office</p>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>6</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$3,240</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#fd872f" }}>90%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $3.6K</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "9.14px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ width: "9.14px", height: "18.28px", flexShrink: 0, borderRadius: "0px 0px 0px 3.66px", boxShadow: "inset 0 -0.91px 0 0 #dfe1e6, inset 0.91px 0 0 0 #dfe1e6" }} />
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4996fe"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Cloud & hosting</p>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>24</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$1,410</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>71%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $2.0K</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "9.14px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ width: "9.14px", height: "18.28px", flexShrink: 0, borderRadius: "0px 0px 0px 3.66px", boxShadow: "inset 0 -0.91px 0 0 #dfe1e6, inset 0.91px 0 0 0 #dfe1e6" }} />
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4996fe"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Travel</p>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>38</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$1,180</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>42%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $2.8K</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "9.14px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              <div style={{ width: "9.14px", height: "18.28px", flexShrink: 0, borderRadius: "0px 0px 0px 3.66px", boxShadow: "inset 0 -0.91px 0 0 #dfe1e6, inset 0.91px 0 0 0 #dfe1e6" }} />
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4996fe"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Office supplies</p>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>28</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$1,159</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>53%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $2.2K</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Users size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Payroll</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>2 subcategories</p>
              </div>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>3</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$2,246</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#fd872f" }}>94%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $2.4K</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Megaphone size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Marketing</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>3 subcategories</p>
              </div>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>41</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$1,747</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>87%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $2.0K</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #fd872f 0%, #ffd3b0 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DeviceLaptop size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Software</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>4 subcategories</p>
              </div>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>33</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$874</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>73%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $1.2K</p>
            </div>
          </div>
        </div>
        <div style={{ width: "711px", height: "47.52px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #8a8f99 0%, #dfe1e6 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Folder size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Other</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>No subcategories</p>
              </div>
            </div>
          </div>
          <div style={{ width: "95px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Expense</p>
          </div>
          <div style={{ width: "70px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>20</p>
          </div>
          <div style={{ width: "105px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>$624</p>
          </div>
          <div style={{ width: "191px", height: "46.61px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #acacb4 0%, #a1a1aa 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #acacb4 0%, #a1a1aa 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #acacb4 0%, #a1a1aa 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #acacb4 0%, #a1a1aa 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #acacb4 0%, #a1a1aa 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #acacb4 0%, #a1a1aa 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #acacb4 0%, #a1a1aa 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #acacb4 0%, #a1a1aa 100%)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(161, 161, 170, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(161, 161, 170, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(161, 161, 170, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(161, 161, 170, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(161, 161, 170, 0.16)" }} />
                <div style={{ width: "2.92px", height: "12.79px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(161, 161, 170, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>55%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>of $1.1K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
