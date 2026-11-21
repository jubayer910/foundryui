// Header card, Approval thresholds (spendix, Headers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const FlowConnection = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 5.5c0-1.65 0-2.475.513-2.987C3.525 2 4.35 2 6 2s2.475 0 2.987.513C9.5 3.025 9.5 3.85 9.5 5.5s0 2.475-.513 2.987C8.475 9 7.65 9 6 9s-2.475 0-2.987-.513C2.5 7.975 2.5 7.15 2.5 5.5Zm1.157 10.157C4.76 14.552 5.314 14 6 14s1.239.552 2.343 1.657C9.448 16.76 10 17.314 10 18s-.552 1.239-1.657 2.343C7.24 21.448 6.686 22 6 22s-1.239-.552-2.343-1.657C2.552 19.24 2 18.686 2 18s.552-1.239 1.657-2.343Z\"/><path d=\"M6 9v5m4 4h5\"/><path d=\"M15 18c0-1.65 0-2.475.513-2.987c.512-.513 1.337-.513 2.987-.513s2.475 0 2.987.513C22 15.525 22 16.35 22 18s0 2.475-.513 2.987c-.512.513-1.337.513-2.987.513s-2.475 0-2.987-.513C15 20.475 15 19.65 15 18Z\"/></g>");

export function HeaderCardApprovalThresholds() {
  return (
    <div style={{ width: "900px", height: "48px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Approval thresholds</p>
      </div>
      <div style={{ height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <FlowConnection size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Rule builder</p>
        <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#7d818c", display: "block" }} />
      </div>
    </div>
  );
}
