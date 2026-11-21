// Template box, Tax summary (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Calculator = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -14\" /><path d=\"M8 8a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -1\" /><path d=\"M8 14l0 .01\" /><path d=\"M12 14l0 .01\" /><path d=\"M16 14l0 .01\" /><path d=\"M8 17l0 .01\" /><path d=\"M12 17l0 .01\" /><path d=\"M16 17l0 .01\" /></g>");

export function TemplateBoxTaxSummary() {
  return (
    <div style={{ width: "240.73px", height: "139.44px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "132.9px", height: "33.83px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "5.12px", background: "linear-gradient(180deg, #fd872f 0%, #ffd3b0 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Calculator size={12.3} style={{ width: "12.28px", height: "12.28px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "13.71px", fontWeight: 500, color: "#202020" }}>Tax summary</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Quarterly · Q3 2026</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "10.97px", top: "74.06px", width: "218.8px", height: "56.24px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "218.8px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#202020" }}>$9,600 set aside</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>of $12,000</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
          <div style={{ width: "2.92px", height: "18.28px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>Q3 estimate due Sep 15</p>
      </div>
    </div>
  );
}
