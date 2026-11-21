// Tool table (spendix, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Loader = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l0 -3\" /><path d=\"M16.25 7.75l2.15 -2.15\" /><path d=\"M18 12l3 0\" /><path d=\"M16.25 16.25l2.15 2.15\" /><path d=\"M12 18l0 3\" /><path d=\"M7.75 16.25l-2.15 2.15\" /><path d=\"M6 12l-3 0\" /><path d=\"M7.75 7.75l-2.15 -2.15\" /></g>");

export function ToolTable() {
  return (
    <div style={{ width: "1154px", height: "464px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "1154px", height: "44px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ededed, inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Tool</p>
        </div>
        <div style={{ width: "140px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Owner team</p>
        </div>
        <div style={{ width: "130px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Plan</p>
        </div>
        <div style={{ width: "190px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Seats used</p>
        </div>
        <div style={{ width: "130px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Monthly cost</p>
        </div>
        <div style={{ width: "150px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Next renewal</p>
        </div>
        <div style={{ width: "184px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Status</p>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0.4px", top: "0.4px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Slack</p>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>HR</p>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Business+</p>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "96px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "96px", height: "6px", opacity: 0.85, borderRadius: "3px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>110 / 110</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$530.20</p>
        </div>
        <div style={{ width: "150px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>02/05/2026</p>
          </div>
        </div>
        <div style={{ width: "184px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Figma</p>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Design</p>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Organization</p>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "96px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "rgba(245, 158, 11, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "72px", height: "6px", opacity: 0.85, borderRadius: "3px", background: "linear-gradient(180deg, #f7ad30 0%, #f59e0b 100%)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#d2a134" }}>18 / 24</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,350.00</p>
        </div>
        <div style={{ width: "150px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>24/04/2026</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#f59e0b" }}>in 6 days</p>
          </div>
        </div>
        <div style={{ width: "184px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "rgba(255, 176, 2, 0.1)", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#d2a134", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#d2a134" }}>Review</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={19.2} height={19.2} viewBox="0 0 24 24" style={{ width: "19.2px", height: "19.2px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" /></svg>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Google Workspace</p>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>All teams</p>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Business Plus</p>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "96px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "96px", height: "6px", opacity: 0.85, borderRadius: "3px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>120 / 120</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,080.00</p>
        </div>
        <div style={{ width: "150px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>28/05/2026</p>
          </div>
        </div>
        <div style={{ width: "184px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={19.2} height={19.2} viewBox="0 0 24 24" style={{ width: "19.2px", height: "19.2px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" /></svg>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>GitHub</p>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Engineering</p>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Team</p>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "96px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "96px", height: "6px", opacity: 0.85, borderRadius: "3px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>40 / 40</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$840.00</p>
        </div>
        <div style={{ width: "150px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>06/05/2026</p>
          </div>
        </div>
        <div style={{ width: "184px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#ff7a59", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>H</p>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>HubSpot</p>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Marketing</p>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Professional</p>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "96px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "rgba(245, 158, 11, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "67.2px", height: "6px", opacity: 0.85, borderRadius: "3px", background: "linear-gradient(180deg, #f7ad30 0%, #f59e0b 100%)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#d2a134" }}>7 / 10</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$890.00</p>
        </div>
        <div style={{ width: "150px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>12/05/2026</p>
          </div>
        </div>
        <div style={{ width: "184px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "rgba(255, 176, 2, 0.1)", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#d2a134", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#d2a134" }}>Review</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "19.2px", height: "19.2px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "hidden" }} xmlns="http://www.w3.org/2000/svg" width="19.2" height="19.2" viewBox="0 0 19.2 19.2" fill="none" overflow="hidden"><path transform="matrix(1 0 0 1 0 4.391)" d="M0 0.524987 L0 7.55661 C0.006375 9.14661 1.305 10.4261 2.88863 10.4197 L13.1378 10.4197 C13.4291 10.4197 13.6635 10.1854 13.6635 9.90036 L13.6635 2.86911 C13.6571 1.27911 12.3589 -0.000763074 10.7749 0.00561193 L0.52575 0.00561193 C0.234375 0.00561193 0 0.239987 0 0.524987 Z M14.316 3.26811 L18.5475 0.176612 C18.915 -0.127138 19.2 -0.0513883 19.2 0.499862 L19.2 9.92549 C19.2 10.5529 18.8516 10.4767 18.5475 10.2487 L14.316 7.16361 L14.316 3.26811 Z" fill="#4a8cff"/><path transform="matrix(1 0 0 1 -175.896 34.908)" d="M7.29601 0.280499 L7.512 1.1535 C6.66234 1.3624 5.84915 1.69857 5.1 2.15062 L4.63801 1.37962 C5.46357 0.881417 6.35969 0.510857 7.29601 0.280499 Z M11.688 1.1535 C12.5376 1.36254 13.3508 1.6987 14.1 2.15062 L14.565 1.37962 C13.7385 0.881145 12.8414 0.510577 11.904 0.280499 L11.688 1.1535 Z M1.38002 4.63763 C0.881384 5.46288 0.510665 6.35893 0.280504 7.29525 L1.15351 7.51125 C1.36245 6.66166 1.69875 5.84858 2.151 5.09962 L1.38002 4.63763 Z M0.997508 8.29575 L0.108 8.16075 C-0.0360001 9.11422 -0.0360001 10.0839 0.108 11.0374 L0.997508 10.9024 C0.867008 10.0384 0.867008 9.15972 0.997508 8.29575 Z M14.1 17.0475 C13.3518 17.4994 12.5396 17.8356 11.691 18.045 L11.907 18.918 C12.8423 18.6873 13.7374 18.3166 14.562 17.8185 L14.1 17.0475 Z M18.2025 10.9024 L19.092 11.0374 C19.236 10.0839 19.236 9.11422 19.092 8.16075 L18.2025 8.29575 C18.3326 9.1575 18.3326 10.0406 18.2025 10.9024 Z M18.0465 11.6869 C17.8372 12.5365 17.501 13.3496 17.049 14.0989 L17.82 14.5639 C18.3185 13.7374 18.6892 12.8402 18.9195 11.9029 L18.0465 11.6869 Z M10.9035 18.2025 C10.0393 18.3326 9.16038 18.3326 8.29613 18.2025 L8.16151 19.092 C9.11514 19.236 10.0849 19.236 11.0385 19.092 L10.9035 18.2025 Z M16.6031 14.7604 C16.0844 15.4631 15.4631 16.0839 14.76 16.602 L15.294 17.3265 C16.0697 16.7561 16.7553 16.0725 17.328 15.2985 L16.6031 14.7604 Z M14.76 2.59612 C15.4631 3.11502 16.0844 3.73643 16.6031 4.43963 L17.328 3.89962 C16.757 3.12617 16.0735 2.44258 15.3 1.87163 L14.76 2.59612 Z M2.59651 4.43963 C3.1153 3.73634 3.73671 3.11491 4.44 2.59612 L3.9 1.87163 C3.12637 2.44238 2.44276 3.12599 1.872 3.89962 L2.59651 4.43963 Z M17.049 5.09962 C17.5009 5.84768 17.8372 6.65972 18.0465 7.50825 L18.9195 7.29225 C18.6887 6.35709 18.318 5.46214 17.82 4.63763 L17.049 5.09962 Z M8.29613 0.997499 C9.1605 0.867374 10.0391 0.867374 10.9035 0.997499 L11.0385 0.108 C10.0849 -0.036 9.1151 -0.036 8.16151 0.108 L8.29613 0.997499 Z M3.05851 17.565 L1.2 17.9985 L1.63351 16.14 L0.757512 15.9345 L0.32401 17.793 C0.17176 18.4417 0.756754 19.0264 1.4055 18.8745 L3.2625 18.4485 L3.05851 17.565 Z M0.945012 15.1324 L1.82101 15.336 L2.12101 14.0479 C1.68349 13.3131 1.35745 12.5174 1.15351 11.6869 L0.280504 11.9029 C0.476207 12.6983 0.773663 13.4651 1.16551 14.1844 L0.945012 15.1324 Z M3.8565 17.382 L4.06051 18.258 L5.00851 18.0375 C5.7278 18.4293 6.49462 18.7268 7.29 18.9225 L7.50601 18.0495 C6.67732 17.8428 5.88373 17.5148 5.151 17.076 L3.8565 17.382 Z M2.77614 5.82863 C1.40401 8.313 1.4895 11.3464 3 13.7494 L2.25 16.9485 L5.4495 16.1985 C8.25562 17.9659 11.8729 17.7656 14.4668 15.699 C17.0606 13.6324 18.0641 10.1516 16.968 7.02188 C14.745 0.673125 6.00864 -0.0243731 2.77614 5.82863 Z" fill="#3a76f0"/><path transform="matrix(1 0 0 1 -141.094 34.908)" d="M4.8773 7.74171 C10.2383 5.89371 8.3438 -0.176798 8.8868 0.00395192 C12.3964 1.71995 16.3433 5.46395 16.3433 11.08 C16.3433 15.3857 13.005 19.192 8.1533 19.192 C3.84942 19.387 0.202173 16.0581 0.00717269 11.7538 C-0.195702 7.29133 3.97242 4.03671 3.97242 4.83995 C4.00955 5.29745 4.39805 7.74171 4.8773 7.74171 Z" fill="#e73d76" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -110.626 34.962)" d="M9.68925 3.20918 C12.5692 3.37831 14.2556 4.64506 14.4195 5.82743 C14.4994 6.60068 13.9856 7.20181 13.0939 7.20181 C11.7911 7.20181 11.6584 5.46556 9.41512 5.46556 C8.40374 5.46556 7.54949 5.88631 7.54949 6.79868 C7.54949 8.70518 14.7364 7.59781 14.7364 11.7959 C14.7364 14.2158 12.7995 15.8013 9.90824 15.8013 C7.36537 15.8013 4.80937 14.6486 4.82212 12.6637 C4.82662 12.0648 5.27286 11.5154 5.86761 11.5154 C7.36537 11.5154 7.3515 13.7403 9.73612 13.7403 C11.4082 13.7403 11.9794 12.8276 11.9794 12.1916 C11.9794 9.89468 4.75011 11.3032 4.75011 6.98318 C4.75011 4.64506 6.67087 3.03256 9.68925 3.20918 Z M11.2665 18.3236 C15.8801 21.1124 21.282 15.7736 18.3844 11.1112 C19.4662 4.93081 14.0584 -0.357443 7.94924 0.778432 C3.34762 -2.02507 -2.07788 3.29581 0.807742 7.96718 C-0.294008 14.1011 5.08311 19.5026 11.2665 18.3236 Z" fill="#178cc8" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -80.943 34.908)" d="M0.380621 19.1996 L4.3425 19.1996 L4.3425 6.39975 L0.380621 6.39975 L0.380621 19.1996 Z M10.6762 12.4807 C10.6762 10.6815 11.5046 9.609 13.0905 9.609 C14.5474 9.609 15.2471 10.638 15.2471 12.4807 L15.2471 19.2 L19.191 19.1996 L19.191 11.0955 C19.191 7.66688 17.2474 6.009 14.5335 6.009 C11.8185 6.009 10.6762 8.124 10.6762 8.124 L10.6762 6.39975 L6.87562 6.39975 L6.87562 19.1996 L10.6762 19.1996 L10.6762 12.4807 Z M2.343 4.72387 C3.63675 4.72387 4.68562 3.66563 4.68562 2.36138 C4.68562 1.0575 3.63675 0 2.343 0 C1.0485 0 0 1.0575 0 2.36138 C0 3.66563 1.0485 4.72387 2.343 4.72387 Z" fill="#10658f" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -208.375 59.795)" d="M11.878 0.0161224 C11.8787 0.308997 11.9646 4.54163 16.4065 4.80563 C16.4065 6.02625 16.4076 6.91125 16.4076 8.076 C16.0712 8.0955 13.4837 7.90762 11.8727 6.471 L11.8679 12.8377 C11.929 17.2567 8.67736 19.9455 4.42636 19.017 C-2.90339 16.8244 -0.467762 5.95313 6.89199 7.11675 C6.89199 10.6264 6.89386 7.11562 6.89386 10.6264 C3.85373 10.179 2.83673 12.708 3.64448 14.5192 C4.37986 16.1677 7.40723 16.5255 8.46285 14.1994 C8.58247 13.7441 8.64248 13.2251 8.64248 12.6424 L8.64248 0 L11.878 0.0161224 Z" fill="#000000" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -173.765 59.794)" d="M6.13999 12.6987 C5.63599 15.3421 5.02024 17.8763 3.19624 19.2001 C2.63299 15.2048 4.02274 12.2045 4.66812 9.01885 C3.56787 7.16672 4.80051 3.43922 7.12139 4.35797 C9.97701 5.48747 4.64826 11.2441 8.22538 11.963 C11.9604 12.7133 13.4851 5.4826 11.1695 3.13135 C7.823 -0.264279 1.4285 3.05372 2.21487 7.91522 C2.40612 9.10359 3.63388 9.46397 2.70538 11.1042 C0.56375 10.6295 -0.0752484 8.94047 0.00687659 6.68822 C0.139252 3.00235 3.31887 0.421595 6.50787 0.064595 C10.5414 -0.386905 14.3266 1.5451 14.8494 5.33897 C15.4377 9.62147 13.0288 14.2591 8.71625 13.9257 C7.547 13.8346 7.05649 13.2556 6.13999 12.6987 Z" fill="#d0272c"/><path transform="matrix(1 0 0 1 -142.103 59.794)" d="M1.25212 0 L0 3.339 L0 16.6942 L4.58925 16.6942 L4.58925 19.2 L7.09462 19.2 L9.59775 16.6942 L13.353 16.6942 L18.3615 11.6876 L18.3615 0 L1.25212 0 Z M2.9205 1.66837 L16.6927 1.66837 L16.6927 10.8514 L13.7707 13.7734 L9.18074 13.7734 L6.67837 16.2758 L6.67837 13.7734 L2.9205 13.7734 L2.9205 1.66837 Z M7.51124 10.0178 L9.18074 10.0178 L9.18074 5.00962 L7.51124 5.00962 L7.51124 10.0178 Z M12.1016 10.0178 L13.7707 10.0178 L13.7707 5.00962 L12.1016 5.00962 L12.1016 10.0178 Z" fill="#5a3e85"/><path transform="matrix(1 0 0 1 -110.626 61.128)" d="M9.42318 3.883 C8.98368 3.89087 8.61244 4.26512 8.62031 4.69225 C8.62819 5.13512 8.99268 5.48125 9.44456 5.476 C9.89756 5.47037 10.2411 5.1205 10.2369 4.66825 C10.2332 4.22463 9.87056 3.87475 9.42318 3.883 Z M15.0636 8.99162 C14.7152 8.989 14.4193 9.27437 14.4051 9.6265 C14.3901 10.0026 14.6826 10.312 15.0549 10.3127 C15.4153 10.3139 15.6999 10.0416 15.7131 9.68275 C15.7269 9.30587 15.4344 8.99425 15.0636 8.99162 Z M11.5937 9.682 C11.6079 9.30662 11.3061 8.99163 10.9299 8.99013 C10.5579 8.98863 10.2459 9.30775 10.2591 9.6775 C10.2711 10.0311 10.5688 10.3169 10.9254 10.3172 C11.2813 10.3176 11.5798 10.0397 11.5937 9.682 Z M15.7127 15.8474 C15.1641 15.79 14.5873 16.1065 14.0136 16.1654 C12.2649 16.3442 10.6986 15.8567 9.40668 14.6624 C6.95006 12.3902 7.30106 8.90613 10.1432 7.04425 C12.6692 5.38938 16.3738 5.941 18.1547 8.23712 C19.7091 10.2407 19.5264 12.9006 17.6289 14.584 C16.7436 15.3696 17.1148 15.6201 17.3451 16.5329 C16.8351 16.3056 16.2696 15.9055 15.7127 15.8474 Z M4.35655 3.88337 C3.90843 3.86987 3.53981 4.21262 3.52668 4.65437 C3.51356 5.10212 3.85593 5.46062 4.30743 5.47225 C4.75481 5.4835 5.13018 5.14075 5.14668 4.70462 C5.16318 4.27 4.78443 3.89575 4.35655 3.88337 Z M7.06481 11.8967 C6.36844 11.8105 5.7343 11.7156 5.0968 11.6616 C4.87668 11.6433 4.61531 11.6695 4.42856 11.7749 C3.80943 12.1244 3.21581 12.5189 2.51231 12.9584 C2.6413 12.3745 2.72493 11.8634 2.87306 11.3714 C2.98181 11.0103 2.93118 10.8089 2.59818 10.5734 C-1.71807 7.52612 -0.356445 1.92025 4.47206 0.342997 C8.23406 -0.886253 12.9553 1.276 13.3434 5.4295 C9.71681 5.61887 6.73931 8.05675 7.06481 11.8967 Z" fill="#3caf41"/><path transform="matrix(1 0 0 1 -80.948 63.942)" d="M5.41501 0 C8.40563 0 10.83 2.44125 10.83 5.45213 C10.83 8.46338 8.40563 10.9043 5.41501 10.9043 C2.42438 10.9043 0 8.46338 0 5.45213 C0 2.44125 2.42438 0 5.41501 0 Z M14.0625 0.319501 C15.558 0.319501 16.77 2.61713 16.77 5.45213 C16.7749 6.13538 16.4846 10.5851 14.0629 10.5851 C12.5674 10.5851 11.355 8.28638 11.355 5.45213 C11.355 2.61788 12.5674 0.319501 14.0625 0.319501 Z M18.2479 0.853876 C18.7736 0.853876 19.2 2.91263 19.2 5.45213 C19.2 7.99088 18.7736 10.0504 18.2479 10.0504 C17.7218 10.0504 17.2958 7.99163 17.2958 5.45213 C17.2958 2.91263 17.7218 0.853876 18.2479 0.853876 Z" fill="#1e1b1e"/><path transform="matrix(1 0 0 1 -53.121 59.794)" d="M7.01325 0.0127487 C5.958 0.0127487 5.09587 0.874874 5.09587 1.93012 C5.09587 2.98537 5.958 3.8475 7.01325 3.8475 L8.931 3.8475 L8.931 1.93012 C8.931 0.874874 8.08162 0.0127487 7.01325 0.0127487 Z M0 12.1609 C0 13.2161 0.862125 14.0783 1.91738 14.0783 C2.97263 14.0783 3.83475 13.2161 3.83475 12.1609 L3.83475 10.2435 L1.91738 10.2435 C0.849375 10.2435 0 11.1056 0 12.1609 Z M5.10862 12.1609 L5.10862 17.2826 C5.10862 18.3379 5.97112 19.2 7.02637 19.2 C8.08162 19.2 8.94375 18.3379 8.94375 17.2826 L8.94375 12.1609 C8.94375 11.1056 8.08162 10.2435 7.02637 10.2435 C5.958 10.2435 5.10862 11.1056 5.10862 12.1609 Z M12.1222 19.2 C13.1775 19.2 14.0396 18.3379 14.0396 17.2826 C14.0396 16.2274 13.1775 15.3653 12.1222 15.3653 L10.2049 15.3653 L10.2049 17.2826 C10.2049 18.3379 11.067 19.2 12.1222 19.2 Z M17.2312 14.0783 C18.2865 14.0783 19.1486 13.2161 19.1486 12.1609 C19.1486 11.1056 18.2865 10.2435 17.2312 10.2435 L12.1222 10.2435 C11.067 10.2435 10.2049 11.1056 10.2049 12.1609 C10.2049 13.2161 11.067 14.0783 12.1222 14.0783 L17.2312 14.0783 Z M19.1486 7.03912 C19.1486 5.98387 18.2865 5.12175 17.2312 5.12175 C16.176 5.12175 15.3135 5.98387 15.3135 7.03912 L15.3135 8.9565 L17.2312 8.9565 C18.2865 8.96962 19.1486 8.10712 19.1486 7.03912 Z M14.0396 7.03912 L14.0396 1.91738 C14.0396 0.862125 13.1775 0 12.1222 0 C11.067 0 10.2049 0.862125 10.2049 1.91738 L10.2049 7.03912 C10.2049 8.09437 11.067 8.9565 12.1222 8.9565 C13.1902 8.96962 14.0396 8.10712 14.0396 7.03912 Z M7.01325 5.12175 L1.91738 5.12175 C0.862125 5.12175 0 5.98387 0 7.03912 C0 8.09437 0.862125 8.9565 1.91738 8.9565 L7.02637 8.9565 C8.08162 8.9565 8.94375 8.09437 8.94375 7.03912 C8.931 5.98387 8.08162 5.12175 7.01325 5.12175 Z" fill="#e01e5a"/><path transform="matrix(1 0 0 1 -53.296 37.688)" d="M19.1998 0.58784 L16.1635 15.8983 C16.1635 15.8983 15.7386 16.96 14.5708 16.4503 L7.53134 11.0627 C8.47746 10.2118 15.8177 3.61334 16.1383 3.31409 C16.6345 2.85097 16.327 2.57534 15.7498 2.92559 L4.90821 9.81022 L0.725462 8.40209 C0.725462 8.40209 0.0673375 8.16884 0.00358748 7.65922 C-0.0601625 7.14959 0.746835 6.87359 0.746835 6.87359 L17.7985 0.184339 C17.7985 0.184339 19.1998 -0.43141 19.1998 0.58784 Z" fill="#23b7ec"/></svg>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Zoom</p>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Marketing</p>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Business</p>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "96px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "rgba(245, 158, 11, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "72px", height: "6px", opacity: 0.85, borderRadius: "3px", background: "linear-gradient(180deg, #f7ad30 0%, #f59e0b 100%)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#d2a134" }}>15 / 20</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$450.00</p>
        </div>
        <div style={{ width: "150px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>30/04/2026</p>
          </div>
        </div>
        <div style={{ width: "184px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#fde4e4", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#c42b2b", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b" }}>Cancel at renewal</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={19.2} height={19.2} viewBox="0 0 24 24" style={{ width: "19.2px", height: "19.2px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="currentColor" /></svg>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Notion</p>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Design</p>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Plus</p>
        </div>
        <div style={{ width: "190px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "96px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "96px", height: "6px", opacity: 0.85, borderRadius: "3px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>32 / 32</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$320.00</p>
        </div>
        <div style={{ width: "150px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>21/04/2026</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#f59e0b" }}>in 3 days</p>
          </div>
        </div>
        <div style={{ width: "184px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}
