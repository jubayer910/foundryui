// Method table (veriq, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Inter, Geist Mono, Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Key = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0\" /><path d=\"M15 9h.01\" /></g>");
const Lock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6\" /><path d=\"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /><path d=\"M8 11v-4a4 4 0 1 1 8 0v4\" /></g>");

export function MethodTable() {
  return (
    <div style={{ width: "1074px", height: "284px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "1074px", height: "32px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "84px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Method</p>
        </div>
        <div style={{ width: "270px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Endpoint</p>
        </div>
        <div style={{ width: "190px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Application</p>
        </div>
        <div style={{ width: "130px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Auth</p>
        </div>
        <div style={{ width: "150px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Last tested</p>
        </div>
        <div style={{ width: "206px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "15px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Findings</p>
        </div>
        <div style={{ width: "44px", height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, height: "15px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
        </div>
      </div>
      <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "84px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "rgba(27, 140, 232, 0.1)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 500, color: "#1b8ce8" }}>GET</p>
          </div>
        </div>
        <div style={{ width: "270px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>{"/v2/invoices/{id}"}</p>
        </div>
        <div style={{ width: "190px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Customer web app</p>
        </div>
        <div style={{ width: "130px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Lock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Bearer</p>
          </div>
        </div>
        <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Today, 09:12</p>
        </div>
        <div style={{ width: "206px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "0.02em" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "0.02em" }}>Critical</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373", letterSpacing: "0.02em" }}>{" · #128"}</span>
          </p>
        </div>
        <div style={{ width: "44px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "84px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 500, color: "#00be4e" }}>POST</p>
          </div>
        </div>
        <div style={{ width: "270px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>/v1/charges</p>
        </div>
        <div style={{ width: "190px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Checkout widget</p>
        </div>
        <div style={{ width: "130px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Key size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>API key</p>
          </div>
        </div>
        <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#e3a044" }}>Not tested</p>
        </div>
        <div style={{ width: "206px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a6a6a6" }}>—</p>
        </div>
        <div style={{ width: "44px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "84px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "rgba(27, 140, 232, 0.1)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 500, color: "#1b8ce8" }}>GET</p>
          </div>
        </div>
        <div style={{ width: "270px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>/search</p>
        </div>
        <div style={{ width: "190px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Customer web app</p>
        </div>
        <div style={{ width: "130px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(251, 48, 52, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "-0.01em" }}>None</p>
          </div>
        </div>
        <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>18 Aug, 22:40</p>
        </div>
        <div style={{ width: "206px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "0.02em" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "0.02em" }}>Critical</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373", letterSpacing: "0.02em" }}>{" · #125"}</span>
          </p>
        </div>
        <div style={{ width: "44px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "84px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "rgba(0, 190, 78, 0.1)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 500, color: "#00be4e" }}>POST</p>
          </div>
        </div>
        <div style={{ width: "270px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>/webhooks/test</p>
        </div>
        <div style={{ width: "190px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Partner API</p>
        </div>
        <div style={{ width: "130px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(251, 48, 52, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "-0.01em" }}>None</p>
          </div>
        </div>
        <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>17 Aug, 14:05</p>
        </div>
        <div style={{ width: "206px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f68b2e", letterSpacing: "0.02em" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f68b2e", letterSpacing: "0.02em" }}>High</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373", letterSpacing: "0.02em" }}>{" · #119"}</span>
          </p>
        </div>
        <div style={{ width: "44px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "84px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "rgba(227, 160, 68, 0.1)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 500, color: "#e3a044" }}>PUT</p>
          </div>
        </div>
        <div style={{ width: "270px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>{"/admin/exports/{id}"}</p>
        </div>
        <div style={{ width: "190px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Admin portal</p>
        </div>
        <div style={{ width: "130px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Lock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Bearer</p>
          </div>
        </div>
        <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>16 Aug, 10:31</p>
        </div>
        <div style={{ width: "206px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "0.02em" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "0.02em" }}>Critical</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373", letterSpacing: "0.02em" }}>{" · #122"}</span>
          </p>
        </div>
        <div style={{ width: "44px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1074px", height: "42px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ebebeb", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "84px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "rgba(127, 88, 245, 0.1)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 500, color: "#7f58f5" }}>PATCH</p>
          </div>
        </div>
        <div style={{ width: "270px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>{"/v1/accounts/{id}"}</p>
        </div>
        <div style={{ width: "190px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>iOS app</p>
        </div>
        <div style={{ width: "130px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Lock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>Bearer</p>
          </div>
        </div>
        <div style={{ width: "150px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373" }}>19 Aug, 08:17</p>
        </div>
        <div style={{ width: "206px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(0, 190, 78, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#00be4e", letterSpacing: "-0.01em" }}>Clean</p>
          </div>
        </div>
        <div style={{ width: "44px", height: "41px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
