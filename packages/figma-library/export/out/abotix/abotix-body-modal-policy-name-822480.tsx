// Body modal, Policy name (abotix, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Inter, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Cash = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3\" /><path d=\"M7 10a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8\" /><path d=\"M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const PlugSocket = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17.854 12.16c-.383.45-1.09.454-1.537.007l-4.484-4.483c-.447-.447-.444-1.155.007-1.538l1.231-1.047a6.5 6.5 0 0 1 3.133-1.448l.725-.122c.685-.116 1.405.123 1.919.637l.986.987c.514.513.753 1.233.637 1.918l-.122.725a6.5 6.5 0 0 1-1.448 3.133z\"/><path d=\"m19.5 4.5l2-2m-19 19l2-2\"/><path d=\"M6.146 11.84c.383-.45 1.09-.454 1.538-.007l4.483 4.484c.447.446.444 1.154-.007 1.537l-1.231 1.047a6.5 6.5 0 0 1-3.133 1.448l-.725.122c-.685.116-1.405-.123-1.918-.637l-.987-.986c-.514-.514-.753-1.234-.637-1.919l.122-.725a6.5 6.5 0 0 1 1.448-3.133z\"/><path d=\"m8.5 12.5l2-2m1 5l2-2\"/></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");
const Robot = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4\" /><path d=\"M12 2v2\" /><path d=\"M9 12v9\" /><path d=\"M15 12v9\" /><path d=\"M5 16l4 -2\" /><path d=\"M15 14l4 2\" /><path d=\"M9 18h6\" /><path d=\"M10 8v.01\" /><path d=\"M14 8v.01\" /></g>");
const Stack2 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4l-8 4l8 4l8 -4l-8 -4\" /><path d=\"M4 12l8 4l8 -4\" /><path d=\"M4 16l8 4l8 -4\" /></g>");
const UserCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /><path d=\"M15 19l2 2l4 -4\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function BodyModalPolicyName() {
  return (
    <div style={{ width: "858px", height: "510px", display: "flex", flexDirection: "row", padding: "4px 20px 20px 20px", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "520px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Policy name</p>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d" }}>Require approval for large refunds</p>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "193px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>CONDITIONS · ALL MUST MATCH</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "520px", height: "46px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "52px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "rgba(72, 79, 245, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "13px", fontFamily: "'Inter'", fontSize: "11px", fontWeight: 500, color: "#484ff5", letterSpacing: "0.04em" }}>WHEN</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Stack2 size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Environment</p>
              <ChevronDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>is in</p>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "rgba(37, 99, 235, 0.08)", boxShadow: "inset 0 0 0 1px #c9d8fb", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#1e3a8a" }}>Production</p>
              <X size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
          <div style={{ width: "520px", height: "46px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "52px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "rgba(72, 79, 245, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Inter'", fontSize: "11px", fontWeight: 500, color: "#484ff5", letterSpacing: "0.04em" }}>AND</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <PlugSocket size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Tool</p>
              <ChevronDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>equals</p>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "rgba(37, 99, 235, 0.08)", boxShadow: "inset 0 0 0 1px #c9d8fb", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#1e3a8a" }}>Stripe API</p>
              <X size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
          <div style={{ width: "520px", height: "46px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "52px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "rgba(72, 79, 245, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Inter'", fontSize: "11px", fontWeight: 500, color: "#484ff5", letterSpacing: "0.04em" }}>AND</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Robot size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Action</p>
              <ChevronDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>equals</p>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "rgba(37, 99, 235, 0.08)", boxShadow: "inset 0 0 0 1px #c9d8fb", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 500, color: "#1e3a8a" }}>refunds.create</p>
              <X size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
          <div style={{ width: "520px", height: "46px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #2563eb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "52px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "rgba(72, 79, 245, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "13px", fontFamily: "'Inter'", fontSize: "11px", fontWeight: 500, color: "#484ff5", letterSpacing: "0.04em" }}>AND</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Cash size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#555555", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Amount</p>
              <ChevronDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>greater than</p>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "rgba(37, 99, 235, 0.08)", boxShadow: "inset 0 0 0 1px #c9d8fb", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#1e3a8a" }}>$500</p>
              <X size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Plus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#2563eb", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2563eb" }}>Add condition</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>THEN</p>
        <div style={{ width: "520px", height: "46px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "52px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Inter'", fontSize: "11px", fontWeight: 500, color: "#1e8a57", letterSpacing: "0.04em" }}>THEN</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <UserCheck size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#555555", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Require human approval</p>
            <ChevronDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>from</p>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "rgba(37, 99, 235, 0.08)", boxShadow: "inset 0 0 0 1px #c9d8fb", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#1e3a8a" }}>Finance on-call</p>
            <ChevronDown size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
        <div style={{ width: "520px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Mode</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "172px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>Enforce pauses matching calls</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "9px", background: "#f2f2f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.149999976158142" }}>Draft</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.149999976158142" }}>Monitor</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#2563eb", lineHeight: "1.149999976158142" }}>Enforce</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "280px", flexShrink: 0, borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "252px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Test with an event</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>Sample</p>
        </div>
        <div style={{ width: "252px", flexShrink: 0, borderRadius: "10px", background: "#1f1f26", display: "flex", flexDirection: "column", padding: "10px 12px 10px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "180px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>agent   Finance Ops Agent</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>env     production</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "209px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>tool    stripe.refunds.create</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "144px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>amount  1,240.00 USD</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>ticket  #48233</p>
        </div>
        <div style={{ width: "252px", flexShrink: 0, borderRadius: "10px", background: "rgba(229, 72, 77, 0.06)", boxShadow: "inset 0 0 0 1px #f6c9ca", display: "flex", flexDirection: "column", padding: "13px 13px 13px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "rgba(229, 72, 77, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#e5484d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#e5484d", letterSpacing: "-0.01em" }}>Would block</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>4 of 4 matched · 3 ms</p>
          </div>
          <p style={{ width: "228px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2d2d2d", lineHeight: "1.399999976158142" }}>Refund held until Finance on-call approves. The agent gets "pending approval" instead of an error.</p>
        </div>
        <div style={{ width: "252px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "252px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Last 7 days</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#111111" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#111111" }}>12</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#8a8a8a" }}>{" would pause"}</span>
            </p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3278f5 0%, #1666f4 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(22, 102, 244, 0.16)" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "205px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>12 of 31 refund calls were over $500</p>
        </div>
      </div>
    </div>
  );
}
