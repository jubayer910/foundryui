// Email settings card (loopo, Forms) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { AlertCircle as AlertCircleBulk, CircleCheck as CircleCheckBulk, Users as UsersBulk } from "foundryui-icons/react/bulk";
import { ChevronDown } from "foundryui-icons/react/stroke-rounded";

export function EmailSettingsCard() {
  return (
    <div style={{ width: "328.7px", height: "969.8px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23px 23px 23px 23px", gap: "19.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.5px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Email settings</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#6b6b70" }}>Applies to this post only</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Subject line</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "11px 12.1px 11px 12.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#222222", lineHeight: "1.399999976158142" }}>Still shopping? Gifts they’ll use every day</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>43 / 50 characters</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Preview text</p>
        <div style={{ alignSelf: "stretch", height: "39.4px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #f3c83d", display: "flex", flexDirection: "row", padding: "1.1px 12.1px 1.1px 12.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#999999" }}>Add preview text…</p>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#c27c0e" }}>Missing — inboxes will show the first line instead</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Sending to</p>
        <div style={{ alignSelf: "stretch", height: "39.4px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.1px 1.1px 12.1px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <UsersBulk size={16.4} style={{ width: "16.4px", height: "16.4px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 400, color: "#222222" }}>Non-openers · 8,558</p>
          <ChevronDown size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#7d818c" }}>Readability</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>82 / 100</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#18b170" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
          <div style={{ width: "2.2px", height: "6.6px", flexShrink: 0, borderRadius: "70.1px", background: "#e1e1e1" }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Short sentences · reads at grade 6</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 6.6px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#141417" }}>Before you send · 3 of 4</p>
        </div>
        <div style={{ width: "284.9px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CircleCheckBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Subject under 50 characters</p>
        </div>
        <div style={{ width: "284.9px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CircleCheckBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Alt text on all 4 images</p>
        </div>
        <div style={{ width: "284.9px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <CircleCheckBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#18b170", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>Unsubscribe link in footer</p>
        </div>
        <div style={{ width: "284.9px", height: "37.3px", flexShrink: 0, borderRadius: "8.8px", background: "#fff8eb", display: "flex", flexDirection: "row", padding: "0px 8.8px 0px 8.8px", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <AlertCircleBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#c27c0e", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Preview text</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#fd4b23" }}>Add</p>
        </div>
      </div>
    </div>
  );
}
