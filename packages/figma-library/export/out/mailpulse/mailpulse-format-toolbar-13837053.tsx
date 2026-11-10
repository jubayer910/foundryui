// Format toolbar (mailpulse, Navigation) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ChevronDown } from "foundryui-icons/react/stroke-rounded";
import { Bold as BoldBulk, BorderStyle as BorderStyleBulk, Heading as HeadingBulk, Italic as ItalicBulk, Link as LinkBulk, Photo as PhotoBulk, Quote as QuoteBulk, Sparkles as SparklesBulk, Underline as UnderlineBulk } from "foundryui-icons/react/bulk";

export function FormatToolbar() {
  return (
    <div style={{ width: "430.8px", height: "38.4px", borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8, 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "5.5px 6.4px 5.5px 6.4px", gap: "1.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ height: "27.4px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "3.7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Paragraph</p>
        <ChevronDown size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.9px", height: "18.3px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ width: "27.4px", height: "27.4px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <HeadingBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.4px", height: "27.4px", flexShrink: 0, borderRadius: "6.4px", background: "#f4f4f5", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <BoldBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#141b34", display: "block" }} />
      </div>
      <div style={{ width: "27.4px", height: "27.4px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <ItalicBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.4px", height: "27.4px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <UnderlineBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.4px", height: "27.4px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <LinkBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.4px", height: "27.4px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <QuoteBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.9px", height: "18.3px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ width: "27.4px", height: "27.4px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <PhotoBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.4px", height: "27.4px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <BorderStyleBulk size={15.5} style={{ width: "15.5px", height: "15.5px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.9px", height: "18.3px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ height: "27.4px", flexShrink: 0, borderRadius: "6.4px", background: "rgba(124, 83, 249, 0.1)", display: "flex", flexDirection: "row", padding: "0px 7.3px 0px 7.3px", gap: "4.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <SparklesBulk size={13.7} style={{ width: "13.7px", height: "13.7px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#7c53f9" }}>Improve</p>
      </div>
    </div>
  );
}
