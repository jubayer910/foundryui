// Format toolbar (mailpulse, Navigation) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ChevronDown } from "foundryui-icons/react/stroke-rounded";
import { Bold as BoldBulk, BorderStyle as BorderStyleBulk, Heading as HeadingBulk, Italic as ItalicBulk, Link as LinkBulk, Photo as PhotoBulk, Quote as QuoteBulk, Sparkles as SparklesBulk, Underline as UnderlineBulk } from "foundryui-icons/react/bulk";

export function FormatToolbar() {
  return (
    <div style={{ width: "430.8px", height: "38.38px", borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "5.48px 6.39px 5.48px 6.39px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Paragraph</p>
        <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.91px", height: "18.28px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <HeadingBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", background: "#f4f4f5", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <BoldBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#141b34", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <ItalicBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <UnderlineBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <LinkBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <QuoteBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.91px", height: "18.28px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <PhotoBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <BorderStyleBulk size={15.5} style={{ width: "15.54px", height: "15.54px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
      <div style={{ width: "0.91px", height: "18.28px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ height: "27.42px", flexShrink: 0, borderRadius: "6.4px", background: "rgba(124, 83, 249, 0.1)", display: "flex", flexDirection: "row", padding: "0px 7.31px 0px 7.31px", gap: "4.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <SparklesBulk size={13.7} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#7c53f9" }}>Improve</p>
      </div>
    </div>
  );
}
