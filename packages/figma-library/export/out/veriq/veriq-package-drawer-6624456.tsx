// Package drawer (veriq, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono, Inter. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Calendar = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const CircleCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 12l2 2l4 -4\" /></g>");
const Clock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 7v5l3 3\" /></g>");
const Copy = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666\" /><path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" /></g>");
const GitBranch = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M7 8l0 8\" /><path d=\"M9 18h6a2 2 0 0 0 2 -2v-5\" /><path d=\"M14 14l3 -3l3 3\" /></g>");
const GitPullRequest = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M6 8l0 8\" /><path d=\"M11 6h5a2 2 0 0 1 2 2v8\" /><path d=\"M14 9l-3 -3l3 -3\" /></g>");
const Package = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5\" /><path d=\"M12 12l8 -4.5\" /><path d=\"M12 12l0 9\" /><path d=\"M12 12l-8 -4.5\" /><path d=\"M16 5.25l-8 4.5\" /></g>");
const User = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function PackageDrawer() {
  return (
    <div style={{ width: "480px", height: "1015px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 20px 44px -12px rgba(13, 13, 18, 0.12), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 20px 14px 20px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(246, 139, 46, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#f68b2e"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#f68b2e", letterSpacing: "-0.01em" }}>High</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "244px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>#124 · CVSS 7.4 · found by dependency scan</p>
          </div>
          <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <X size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "239px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Prototype pollution in lodash</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg width={16} height={16} viewBox="0 0 24 24" style={{ width: "16px", height: "16px", flexShrink: 0, color: "#737373", display: "block" }}><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor" /></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>lodash</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#fb3034" }}>4.17.20</p>
          <ChevronRight size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#00be4e" }}>4.17.21</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#989898" }}>· CVE-2021-23337</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 20px 6px 20px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "440px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <User size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#989898" }}>Owner</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Ana Ruiz · Frontend lead</p>
        </div>
        <div style={{ width: "440px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#989898" }}>First seen</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>14 Aug 2026, 02:00</p>
        </div>
        <div style={{ width: "440px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Clock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#989898", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#989898" }}>SLA</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#222222" }}>Due in 2d · high = 8 days</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 20px 4px 20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 20px 16px 20px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Advisory</p>
        </div>
        <p style={{ width: "440px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#737373", lineHeight: "1.4500000476837158" }}>_.merge, _.set and _.zipObjectDeep let a crafted key such as __proto__ write to Object.prototype. In web-app that turns a cart payload into a global flag change.</p>
        <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Dependency path</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>3 repos · 2 paths</p>
        </div>
        <div style={{ width: "440px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "column", padding: "7px 13px 7px 13px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "416px", height: "30px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "7px", width: "75px", height: "17px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <GitBranch size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#737373", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>web-app</p>
            </div>
            <p style={{ position: "absolute", left: "390px", top: "8px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>repo</p>
          </div>
          <div style={{ width: "416px", height: "30px", flexShrink: 0, position: "relative" }}>
            <svg style={{ position: "absolute", left: "7px", top: "0px", width: "11px", height: "15px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0.5 0 C0.5 -0.276142 0.276142 -0.5 0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 L0 0 L0.5 0 Z M0 15 L-0.5 15 C-0.5 15.2761 -0.276142 15.5 1.11022e-16 15.5 L0 15 Z M11 15.5 C11.2761 15.5 11.5 15.2761 11.5 15 C11.5 14.7239 11.2761 14.5 11 14.5 L11 15 L11 15.5 Z M0 0 L-0.5 0 L-0.5 15 L0 15 L0.5 15 L0.5 0 L0 0 Z M0 15 L0 15.5 L11 15.5 L11 15 L11 14.5 L0 14.5 L0 15 Z" fill="#d4d4d8"/></svg>
            <div style={{ position: "absolute", left: "20px", top: "7px", width: "192px", height: "17px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Package size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#737373", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "172px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222" }}>@ledgerly/ui-kit 3.2.0</p>
            </div>
            <p style={{ position: "absolute", left: "383px", top: "8px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>direct</p>
          </div>
          <div style={{ width: "416px", height: "30px", flexShrink: 0, position: "relative" }}>
            <svg style={{ position: "absolute", left: "27px", top: "0px", width: "11px", height: "15px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0.5 0 C0.5 -0.276142 0.276142 -0.5 0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 L0 0 L0.5 0 Z M0 15 L-0.5 15 C-0.5 15.2761 -0.276142 15.5 1.11022e-16 15.5 L0 15 Z M11 15.5 C11.2761 15.5 11.5 15.2761 11.5 15 C11.5 14.7239 11.2761 14.5 11 14.5 L11 15 L11 15.5 Z M0 0 L-0.5 0 L-0.5 15 L0 15 L0.5 15 L0.5 0 L0 0 Z M0 15 L0 15.5 L11 15.5 L11 15 L11 14.5 L0 14.5 L0 15 Z" fill="#d4d4d8"/></svg>
            <div style={{ position: "absolute", left: "40px", top: "7px", width: "130px", height: "17px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Package size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#fb3034", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#fb3034" }}>lodash 4.17.20</p>
            </div>
            <p style={{ position: "absolute", left: "362px", top: "8px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>transitive</p>
          </div>
          <div style={{ width: "416px", height: "30px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "7px", width: "124px", height: "17px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <GitBranch size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#737373", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>checkout-widget</p>
            </div>
            <p style={{ position: "absolute", left: "390px", top: "8px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>repo</p>
          </div>
          <div style={{ width: "416px", height: "30px", flexShrink: 0, position: "relative" }}>
            <svg style={{ position: "absolute", left: "7px", top: "0px", width: "11px", height: "15px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0.5 0 C0.5 -0.276142 0.276142 -0.5 0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 L0 0 L0.5 0 Z M0 15 L-0.5 15 C-0.5 15.2761 -0.276142 15.5 1.11022e-16 15.5 L0 15 Z M11 15.5 C11.2761 15.5 11.5 15.2761 11.5 15 C11.5 14.7239 11.2761 14.5 11 14.5 L11 15 L11 15.5 Z M0 0 L-0.5 0 L-0.5 15 L0 15 L0.5 15 L0.5 0 L0 0 Z M0 15 L0 15.5 L11 15.5 L11 15 L11 14.5 L0 14.5 L0 15 Z" fill="#d4d4d8"/></svg>
            <div style={{ position: "absolute", left: "20px", top: "7px", width: "130px", height: "17px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Package size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#fb3034", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#fb3034" }}>lodash 4.17.20</p>
            </div>
            <p style={{ position: "absolute", left: "383px", top: "8px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>direct</p>
          </div>
          <div style={{ width: "416px", height: "30px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "7px", width: "100px", height: "17px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <GitBranch size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#737373", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#222222" }}>admin-portal</p>
            </div>
            <p style={{ position: "absolute", left: "305px", top: "8px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#989898" }}>repo · not reachable</p>
          </div>
        </div>
        <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Reachable call path</p>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(251, 48, 52, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#fb3034"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fb3034", letterSpacing: "-0.01em" }}>Reachable · 2 call sites</p>
          </div>
        </div>
        <div style={{ width: "440px", flexShrink: 0, borderRadius: "10px", background: "#1f1f26", display: "flex", flexDirection: "column", padding: "10px 12px 10px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "231px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>// web-app  src/cart/merge.ts:42</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "296px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>{"const cart = _.merge({}, saved, req.body)"}</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "310px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>//                             ^ user input</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "224px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>// web-app  src/lib/prefs.ts:18</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "173px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#e4e4e7", lineHeight: "1.5" }}>_.set(prefs, key, value)</p>
        </div>
        <div style={{ width: "440px", flexShrink: 0, borderRadius: "10px", background: "rgba(0, 190, 78, 0.05)", boxShadow: "inset 0 0 0 1px rgba(0, 190, 78, 0.2)", display: "flex", flexDirection: "row", padding: "13px 13px 13px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <CircleCheck size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#00be4e", display: "block" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "200px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#222222" }}>Upgrade notes · patch release</p>
            <p style={{ width: "390px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#737373", lineHeight: "1.4500000476837158" }}>4.17.21 changes no public API. CI passed on the preview branch for all 3 repos; lockfiles only.</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0 }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ebebeb", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Copy size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#6c6c6c" }}>Copy advisory</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
        <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e5e5e5", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#6c6c6c" }}>Snooze 7 days</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "11px", background: "#ca7126", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#fc7306", boxShadow: "inset 0px 1px 0px 0px #ff8d1d", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <GitPullRequest size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Open upgrade PR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
