// Step panel (mailpulse, Cards and panels) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Layout as LayoutBulk, Mail as MailBulk } from "foundryui-icons/react/bulk";
import { ChevronDown, Edit, Eye, X } from "foundryui-icons/react/stroke-rounded";

export function StepPanel() {
  return (
    <div style={{ width: "330.9px", height: "787.6px", background: "#ffffff", boxShadow: "inset 0.9px 0 0 0 #eeeeee", display: "flex", flexDirection: "column", padding: "0px 0px 0px 0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14.6px 16.5px 11px 16.5px", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "29.2px", height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <MailBulk size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Step 2 · Email</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Welcome to The Creator Brief</p>
        </div>
        <div style={{ width: "25.6px", height: "25.6px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.5px 0px 16.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "297.1px", flexShrink: 0, boxShadow: "inset 0 -0.9px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "0px 0px 0.9px 0px", gap: "18.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, boxShadow: "inset 0 -1.8px 0 0 #000000", display: "flex", flexDirection: "row", padding: "9.1px 0px 11px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#000000" }}>Content</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.1px 0px 9.1px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#989898" }}>Settings</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.1px 0px 9.1px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#989898" }}>Stats</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14.6px 16.5px 14.6px 16.5px", gap: "14.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "297.1px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Subject line</p>
          <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>You're in. Here's what to read first</p>
          </div>
        </div>
        <div style={{ width: "297.1px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Preview text</p>
          <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Three reader favourites, and how to reply</p>
          </div>
        </div>
        <div style={{ width: "297.1px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>From</p>
          <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "18.3px", height: "18.3px", flexShrink: 0, borderRadius: "9.1px", background: "rgba(124, 83, 249, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "7.3px", fontWeight: 500, color: "#7c53f9" }}>AM</p>
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Alex from The Creator Brief</p>
            <ChevronDown size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ width: "297.1px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Template</p>
          <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Welcome · single column</p>
            <ChevronDown size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ width: "297.1px", flexShrink: 0, borderRadius: "9.1px", background: "#fafafa", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "column", padding: "11.9px 13.7px 11.9px 13.7px", gap: "9.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Only send on weekdays</p>
            <div style={{ width: "27.4px", height: "16.5px", flexShrink: 0, borderRadius: "8.2px", background: "#e2e4e9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "1.8px", top: "1.8px", width: "12.8px", height: "12.8px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Send in each reader's time zone</p>
            <div style={{ width: "27.4px", height: "16.5px", flexShrink: 0, borderRadius: "8.2px", background: "#7c53f9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "12.8px", top: "1.8px", width: "12.8px", height: "12.8px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
        </div>
        <div style={{ width: "297.1px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Last 30 days</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Since Dec 1</p>
          </div>
          <div style={{ width: "297.1px", flexShrink: 0, borderRadius: "9.1px", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "row", padding: "11.9px 0.9px 11.9px 0.9px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 12.8px 0px 12.8px", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Sent</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#222222" }}>2,140</p>
              </div>
            </div>
            <div style={{ width: "0.9px", height: "36.6px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 12.8px 0px 12.8px", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Opened</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#222222" }}>1,669</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#15b392" }}>78%</p>
              </div>
            </div>
            <div style={{ width: "0.9px", height: "36.6px", flexShrink: 0, background: "#eeeeee" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 12.8px 0px 12.8px", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Clicked</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#222222" }}>663</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#15b392" }}>31%</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "297.1px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #dfe1e6, 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.3px 11px 7.3px 11px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Edit size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Edit email</p>
          </div>
          <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #dfe1e6, 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "7.3px 11px 7.3px 11px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Eye size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}
