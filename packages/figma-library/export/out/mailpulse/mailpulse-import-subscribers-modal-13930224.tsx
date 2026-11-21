// Import subscribers modal (mailpulse, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AlertTriangleBulk = icon("<path d=\"M10.363 3.591L2.2569999999999997 17.125A1.914 1.914 0 0 0 3.893 19.996H20.107A1.914 1.914 0 0 0 21.743 17.125999999999998L13.636999999999999 3.589999999999998A1.914 1.914 0 0 0 10.363 3.589999999999998\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9V13\"/><path d=\"M12 16H12.01\"/></g>");
const CircleCheckBulk = icon("<path d=\"M3 12A9 9 0 1 0 21 12 9 9 0 1 0 3 12\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 12L11 14 15 10\"/></g>");
const FileBulk = icon("<path d=\"M17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3H14L19 8V19A2 2 0 0 1 17 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3V7A1 1 0 0 0 15 8H19\"/></g>");
const UploadBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 9l5 -5l5 5\" /><path d=\"M12 4l0 12\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const ChevronDown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6l6 -6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const Upload = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 9l5 -5l5 5\" /><path d=\"M12 4l0 12\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function ImportSubscribersModal() {
  return (
    <div style={{ width: "560px", height: "699.19px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e3e3e3, 0px 21.93px 43.87px -10.97px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "16.45px 16.45px 14.62px 16.45px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <UploadBulk size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Import subscribers</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Step 2 of 3 · Map your columns</p>
        </div>
        <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 16.45px 12.79px 16.45px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "9.14px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Upload</p>
        </div>
        <div style={{ width: "21.93px", height: "0.91px", flexShrink: 0, background: "rgba(124, 83, 249, 0.7)" }} />
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "9.14px", background: "#7c53f9", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>2</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Map columns</p>
        </div>
        <div style={{ width: "21.93px", height: "0.91px", flexShrink: 0, background: "#e8e8e8" }} />
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "18.28px", height: "18.28px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#989898" }}>3</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Review</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14.62px 16.45px 16.45px 16.45px", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "10.05px 13.7px 10.05px 10.05px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <FileBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#00a77d", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>creator-list.csv</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>2,340 rows · 184 KB</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#00a77d", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#00a77d" }}>Uploaded</p>
          </div>
          <div style={{ width: "0.91px", height: "14.62px", flexShrink: 0, background: "#eeeeee" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#7c53f9" }}>Replace</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "7.31px 12.79px 8.22px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ width: "176px", height: "15px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#818892" }}>Column in your file</p>
            <div style={{ width: "14.62px", height: "1px", flexShrink: 0 }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#818892" }}>Imports as</p>
            <div style={{ width: "14.62px", height: "1px", flexShrink: 0 }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "7.31px 12.79px 8.22px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "176px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>email</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>maya.chen@studio.co</p>
            </div>
            <ChevronRight size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#989898", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Email</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Required</p>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#00a77d", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "7.31px 12.79px 8.22px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "176px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>first_name</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>Maya</p>
            </div>
            <ChevronRight size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#989898", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>First name</p>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#00a77d", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "7.31px 12.79px 8.22px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "176px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>country</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>US</p>
            </div>
            <ChevronRight size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#989898", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Location</p>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#00a77d", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "7.31px 12.79px 8.22px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "176px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>joined_at</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>2025-03-04</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c27c0e" }}>{" · 18 unreadable"}</span>
              </p>
            </div>
            <ChevronRight size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#989898", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Subscriber since</p>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <AlertTriangleBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#c27c0e", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "7.31px 12.79px 8.22px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "176px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>tags</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>design; early-reader</p>
            </div>
            <ChevronRight size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#989898", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Tags</p>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <CircleCheckBulk size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#00a77d", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7.31px 12.79px 7.31px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "176px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist Mono'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>plan</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#989898" }}>paid</p>
            </div>
            <ChevronRight size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#989898", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#989898" }}>Don't import</p>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0 }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9.14px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10.97px 12.79px 10.97px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "14.62px", height: "14.62px", flexShrink: 0, borderRadius: "3.66px", background: "rgba(124, 83, 249, 0.12)", boxShadow: "inset 0 0 0 0.91px #7c53f9", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={11} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>These people agreed to receive emails from The Creator Brief</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Required. Importing people who never opted in hurts delivery for the whole list.</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 12.79px 0px 12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#eeeeee" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10.97px 12.79px 10.97px 12.79px", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "27.42px", height: "16.45px", flexShrink: 0, borderRadius: "8.22px", background: "#e2e4e9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "1.83px", top: "1.83px", width: "12.79px", height: "12.79px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222" }}>Send the welcome series</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>Off: imported people skip the "Welcome to The Creator Brief" automation.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "13.7px 16.45px 12.79px 16.45px", gap: "9.14px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <AlertTriangleBulk size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#c27c0e", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#989898" }}>18 rows have problems ·</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#7c53f9" }}>Review</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.12px 9.14px 6.12px 9.14px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Back</p>
        </div>
        <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "91.39px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.22px 7.31px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.31px 10.97px 7.31px 10.97px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Upload size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff" }}>Import 2,340 subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
