// Topic Security card (montra, Cards and panels) from Ingot UI (ingotui.com).
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
const Shield = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3\" /></g>");

export function TopicSecurityCard() {
  return (
    <div style={{ width: "339.04px", height: "108px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "31.07px", height: "31.07px", borderRadius: "6.21px", background: "linear-gradient(180deg, #1db9e2 0%, #a1ebff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <Shield size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
      </div>
      <p style={{ position: "absolute", left: "60.32px", top: "17.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Security</p>
      <p style={{ position: "absolute", left: "60.32px", top: "37.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>2FA, sessions, audit log and SSO</p>
      <ChevronRight size={14.6} style={{ position: "absolute", left: "306.14px", top: "20.11px", width: "14.62px", height: "14.62px", color: "#a6a6a6", display: "block", flexShrink: 0 }} />
      <div style={{ position: "absolute", left: "18.28px", top: "70px", width: "302.48px", height: "0.91px", background: "#ededed" }} />
      <p style={{ position: "absolute", left: "18.28px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>7 articles</p>
      <div style={{ position: "absolute", left: "179.88px", top: "79px", width: "140.88px", height: "14px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>5 of 7 read</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
          <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
        </div>
      </div>
    </div>
  );
}
