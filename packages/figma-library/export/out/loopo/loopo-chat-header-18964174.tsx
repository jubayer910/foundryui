// Chat header (loopo, Headers) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Minus, X } from "foundryui-icons/react/stroke-rounded";

export function ChatHeader() {
  return (
    <div style={{ width: "416.3px", height: "66.6px", boxShadow: "inset 0 -1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "13.1px 15.3px 14.2px 15.3px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "37.3px", height: "37.3px", flexShrink: 0, position: "relative" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "37.3px", height: "37.3px", borderRadius: "18.6px", background: "rgba(24, 177, 112, 0.14)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.9px", fontWeight: 500, color: "#18b170" }}>SO</p>
        </div>
        <svg style={{ position: "absolute", left: "27.4px", top: "27.4px", width: "11px", height: "11px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="10.96" height="10.96" viewBox="0 0 10.96 10.96" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10.96 5.48 C10.96 8.50652 8.50652 10.96 5.48 10.96 C2.45348 10.96 0 8.50652 0 5.48 C0 2.45348 2.45348 0 5.48 0 C8.50652 0 10.96 2.45348 10.96 5.48 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 0 0)" d="M10.96 5.48 L8.77 5.48 C8.77 7.29702 7.29702 8.77 5.48 8.77 L5.48 10.96 L5.48 13.15 C9.71602 13.15 13.15 9.71602 13.15 5.48 L10.96 5.48 Z M5.48 10.96 L5.48 8.77 C3.66298 8.77 2.19 7.29702 2.19 5.48 L0 5.48 L-2.19 5.48 C-2.19 9.71602 1.24398 13.15 5.48 13.15 L5.48 10.96 Z M0 5.48 L2.19 5.48 C2.19 3.66298 3.66298 2.19 5.48 2.19 L5.48 0 L5.48 -2.19 C1.24398 -2.19 -2.19 1.24398 -2.19 5.48 L0 5.48 Z M5.48 0 L5.48 2.19 C7.29702 2.19 8.77 3.66298 8.77 5.48 L10.96 5.48 L13.15 5.48 C13.15 1.24398 9.71602 -2.19 5.48 -2.19 L5.48 0 Z" fill="#ffffff"/></svg>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>Sam Okafor</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>Support · online · replies in under 2 hours</p>
      </div>
      <div style={{ width: "30.7px", height: "30.7px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Minus size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "30.7px", height: "30.7px", flexShrink: 0, borderRadius: "8.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <X size={15.3} style={{ width: "15.3px", height: "15.3px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
    </div>
  );
}
