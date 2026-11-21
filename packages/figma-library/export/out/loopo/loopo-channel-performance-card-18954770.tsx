// Channel performance card (loopo, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const BrowserBulk = icon("<path d=\"M4 6A2 2 0 0 1 6 4H18A2 2 0 0 1 20 6V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18L4 6\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8H20\"/><path d=\"M8 4V8\"/></g>");
const MailBulk = icon("<path d=\"M3 7A2 2 0 0 1 5 5H19A2 2 0 0 1 21 7V17A2 2 0 0 1 19 19H5A2 2 0 0 1 3 17V7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7L12 13 21 7\"/></g>");
const QrcodeBulk = icon("<path d=\"M4 5A1 1 0 0 1 5 4H9A1 1 0 0 1 10 5V9A1 1 0 0 1 9 10H5A1 1 0 0 1 4 9L4 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M14 5A1 1 0 0 1 15 4H19A1 1 0 0 1 20 5V9A1 1 0 0 1 19 10H15A1 1 0 0 1 14 9L14 5\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M4 15A1 1 0 0 1 5 14H9A1 1 0 0 1 10 15V19A1 1 0 0 1 9 20H5A1 1 0 0 1 4 19L4 15\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M7 17l0 .01\" /><path d=\"M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M7 7l0 .01\" /><path d=\"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M17 7l0 .01\" /><path d=\"M14 14l3 0\" /><path d=\"M20 14l0 .01\" /><path d=\"M14 14l0 3\" /><path d=\"M14 20l3 0\" /><path d=\"M17 17l3 0\" /><path d=\"M20 17l0 3\" /></g>");
const ShoppingCartBulk = icon("<path d=\"M4 19A2 2 0 1 0 8 19 2 2 0 1 0 4 19\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M15 19A2 2 0 1 0 19 19 2 2 0 1 0 15 19\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17h-11v-14h-2\" /><path d=\"M6 5l14 1l-1 7h-13\" /></g>");

export function ChannelPerformanceCard() {
  return (
    <div style={{ width: "612.5px", height: "380.2px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23px 23px 23px 23px", gap: "17.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Channel performance</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6b6b70" }}>Attributed revenue · $31,830 across 4 channels</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e0e0e3", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7.7px 8.8px 7.7px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#4d4d52", lineHeight: "17.5px" }}>By revenue</p>
          <svg style={{ width: "13.2px", height: "13.2px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="13.15" height="13.15" viewBox="0 0 13.15 13.15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.286 4.931)" d="M0.542312 -0.542312 C0.242801 -0.841823 -0.242801 -0.841823 -0.542312 -0.542312 C-0.841823 -0.242801 -0.841823 0.242801 -0.542312 0.542312 L0 0 L0.542312 -0.542312 Z M3.28691 3.28691 L2.7446 3.82922 C3.04411 4.12873 3.52971 4.12873 3.82922 3.82922 L3.28691 3.28691 Z M7.11613 0.542312 C7.41564 0.242801 7.41564 -0.242801 7.11613 -0.542312 C6.81662 -0.841823 6.33101 -0.841823 6.0315 -0.542312 L6.57382 0 L7.11613 0.542312 Z M0 0 L-0.542312 0.542312 L2.7446 3.82922 L3.28691 3.28691 L3.82922 2.7446 L0.542312 -0.542312 L0 0 Z M3.28691 3.28691 L3.82922 3.82922 L7.11613 0.542312 L6.57382 0 L6.0315 -0.542312 L2.7446 2.7446 L3.28691 3.28691 Z" fill="#6b6b70"/></svg>
        </div>
      </div>
      <div style={{ width: "568.6px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "568.6px", height: "39.4px", flexShrink: 0, borderRadius: "8.8px", background: "#fafafa", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "232px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Channel</p>
          </div>
          <div style={{ width: "104px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Revenue</p>
          </div>
          <div style={{ width: "92px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Conv. rate</p>
          </div>
          <div style={{ width: "140.6px", height: "39.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#7d818c" }}>Share</p>
          </div>
        </div>
        <div style={{ width: "568.6px", height: "52.6px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "232px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.7px", height: "30.7px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <MailBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Email</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Campaigns & flows</p>
              </div>
            </div>
          </div>
          <div style={{ width: "104px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$22,680</p>
          </div>
          <div style={{ width: "92px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>1.8%</p>
          </div>
          <div style={{ width: "140.6px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>70%</p>
            </div>
          </div>
        </div>
        <div style={{ width: "568.6px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div style={{ width: "568.6px", height: "52.6px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "232px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.7px", height: "30.7px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(255, 114, 171, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <BrowserBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#ff72ab", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Pop-ups</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>4 live signup forms</p>
              </div>
            </div>
          </div>
          <div style={{ width: "104px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$4,860</p>
          </div>
          <div style={{ width: "92px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>1.2%</p>
          </div>
          <div style={{ width: "140.6px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #ff83b5 0%, #ff72ab 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #ff83b5 0%, #ff72ab 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(255, 114, 171, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>16%</p>
            </div>
          </div>
        </div>
        <div style={{ width: "568.6px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div style={{ width: "568.6px", height: "52.6px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "232px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.7px", height: "30.7px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(77, 152, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ShoppingCartBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Checkout opt-in</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Opted in at checkout</p>
              </div>
            </div>
          </div>
          <div style={{ width: "104px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$2,310</p>
          </div>
          <div style={{ width: "92px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>3.9%</p>
          </div>
          <div style={{ width: "140.6px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #62a4fe 0%, #4d98fe 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(77, 152, 254, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>8%</p>
            </div>
          </div>
        </div>
        <div style={{ width: "568.6px", height: "1.1px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
        </div>
        <div style={{ width: "568.6px", height: "52.6px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "232px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "30.7px", height: "30.7px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <QrcodeBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>In-store QR</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Portland store counter</p>
              </div>
            </div>
          </div>
          <div style={{ width: "104px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>$1,980</p>
          </div>
          <div style={{ width: "92px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>6.2%</p>
          </div>
          <div style={{ width: "140.6px", height: "52.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.1px 0px 13.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #34ba81 0%, #18b170 100%)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
                <div style={{ width: "3.5px", height: "13.2px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(24, 177, 112, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>6%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
