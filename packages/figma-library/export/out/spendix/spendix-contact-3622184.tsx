// Contact (spendix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const SortDescendingSolid = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6l9 0\" /><path d=\"M4 12l7 0\" /><path d=\"M4 18l7 0\" /><path d=\"M15 15l3 3l3 -3\" /><path d=\"M18 6l0 12\" /></g>");
const UploadSolid = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 9l5 -5l5 5\" /><path d=\"M12 4l0 12\" /></g>");
const Refresh = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" /></g>");

export function Contact() {
  return (
    <div style={{ width: "1153.96px", height: "351.99px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "20px 20px 16px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Recent Transactions</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "8px 12px 8px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <SortDescendingSolid size={14} strokeWidth={2.95} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "35px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#7d818c" }}>Filter</p>
          </div>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "8px 12px 8px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <UploadSolid size={13.8} strokeWidth={2.24} style={{ width: "13.75px", height: "13.75px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "44px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#7d818c" }}>Export</p>
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ededed, inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ width: "259.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4.8px", boxShadow: "inset 0 0 0 1px #dfe1e6", overflow: "hidden" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Vendor</p>
          </div>
          <div style={{ width: "171.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Category</p>
          </div>
          <div style={{ width: "165.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Card</p>
          </div>
          <div style={{ width: "216.99px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Amount</p>
          </div>
          <div style={{ width: "210.99px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Date</p>
          </div>
          <div style={{ width: "128px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Status</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "1px", boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ width: "259.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4.8px", boxShadow: "inset 0 0 0 1px #dfe1e6", overflow: "hidden" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6, 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "6px", top: "6px", width: "20px", height: "20px", background: "url('https://ingotui.com/library-img/f12b72089918edefa051699ae19eade8a9f97c8c.png') center / cover no-repeat" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#0f172a" }}>Zoom</p>
              </div>
            </div>
          </div>
          <div style={{ width: "171.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>Marketing</p>
          </div>
          <div style={{ width: "165.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "85px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.87px", fontWeight: 500, color: "#344054" }}>Marketing card</p>
            </div>
          </div>
          <div style={{ width: "216.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>$450.00</p>
          </div>
          <div style={{ width: "210.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>02/04/2026</p>
          </div>
          <div style={{ width: "128px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "16px", background: "rgba(255, 176, 2, 0.1)", display: "flex", flexDirection: "row", padding: "4px 12px 4px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#d2a134", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#d2a134", lineHeight: "1.5" }}>Waiting</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "1px", boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ width: "259.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4.8px", boxShadow: "inset 0 0 0 1px #dfe1e6", overflow: "hidden" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6, 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "6px", top: "6px", width: "20px", height: "20px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#0f172a" }}>Slack</p>
              </div>
            </div>
          </div>
          <div style={{ width: "171.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>Software</p>
          </div>
          <div style={{ width: "165.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "45px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.87px", fontWeight: 500, color: "#344054" }}>HR card</p>
            </div>
          </div>
          <div style={{ width: "216.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>$530.20</p>
          </div>
          <div style={{ width: "210.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>02/04/2026</p>
          </div>
          <div style={{ width: "128px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "4px 12px 4px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a", lineHeight: "1.5" }}>Approved</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "1px", boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ width: "259.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4.8px", boxShadow: "inset 0 0 0 1px #dfe1e6", overflow: "hidden" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6, 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "6px", top: "6px", width: "20px", height: "20px", background: "url('https://ingotui.com/library-img/0ff30666687dafe352d05d3c5890a00f049f8230.png') center / cover no-repeat" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#0f172a" }}>Figma</p>
              </div>
            </div>
          </div>
          <div style={{ width: "171.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>Travel</p>
          </div>
          <div style={{ width: "165.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "61px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.87px", fontWeight: 500, color: "#666d80" }}>Travel card</p>
            </div>
          </div>
          <div style={{ width: "216.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>$420.70</p>
          </div>
          <div style={{ width: "210.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#666d80" }}>03/04/2026</p>
          </div>
          <div style={{ width: "128px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "16px", background: "#e0f6ff", display: "flex", flexDirection: "row", padding: "4px 12px 4px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#2563eb", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "51px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb", lineHeight: "1.5" }}>In review</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "1px", boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ width: "259.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4.8px", boxShadow: "inset 0 0 0 1px #dfe1e6", overflow: "hidden" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6, 0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "6px", top: "6px", width: "20px", height: "20px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Figma</p>
              </div>
            </div>
          </div>
          <div style={{ width: "171.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#666d80" }}>Software</p>
          </div>
          <div style={{ width: "165.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 16px 14px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "88px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#344054" }}>Creative card</p>
            </div>
          </div>
          <div style={{ width: "216.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#666d80" }}>$280.40</p>
          </div>
          <div style={{ width: "210.99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 12px 14px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#666d80" }}>03/04/2026</p>
          </div>
          <div style={{ width: "128px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14px 24px 14px 24px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "16px", background: "rgba(255, 176, 2, 0.1)", display: "flex", flexDirection: "row", padding: "4px 12px 4px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Refresh size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#d2a134", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#d2a134", lineHeight: "1.5" }}>Waiting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
