// Header drawer, GET (veriq, Drawers) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist Mono, Geist. Icons: Foundry Icons.
import { X } from "foundryui-icons/react/stroke-rounded";

export function HeaderDrawerGET() {
  return (
    <div style={{ width: "478px", height: "149px", display: "flex", flexDirection: "column", padding: "20px 20px 16px 20px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "rgba(27, 140, 232, 0.1)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 500, color: "#1b8ce8" }}>GET</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>ep-0412 · tested by AI pentest</p>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "23px", fontFamily: "'Geist Mono'", fontSize: "18px", fontWeight: 500, color: "#1c1b20" }}>{"/v2/invoices/{id}"}</p>
      <p style={{ width: "440px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#747474", lineHeight: "1.399999976158142" }}>Returns one invoice for the signed-in tenant. Used by the web app billing page.</p>
    </div>
  );
}
