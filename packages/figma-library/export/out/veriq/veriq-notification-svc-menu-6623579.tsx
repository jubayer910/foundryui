// notification-svc menu (veriq, Menus) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Inter, Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Ban = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M5.7 5.7l12.6 12.6\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const Scan = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\" /><path d=\"M3 7v-2a2 2 0 0 1 2 -2h2\" /><path d=\"M3 17v2a2 2 0 0 0 2 2h2\" /><path d=\"M17 3h2a2 2 0 0 1 2 2v2\" /><path d=\"M17 21h2a2 2 0 0 0 2 -2v-2\" /></g>");
const Stack2 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4l-8 4l8 4l8 -4l-8 -4\" /><path d=\"M4 12l8 4l8 -4\" /><path d=\"M4 16l8 4l8 -4\" /></g>");
const UserPlus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /></g>");

export function NotificationSvcMenu() {
  return (
    <div style={{ width: "240px", height: "223px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 12px 28px -8px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", display: "flex", flexDirection: "column", padding: "5px 5px 5px 5px", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 10px 4px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6", lineHeight: "1.3300000429153442" }}>notification-svc</p>
      </div>
      <div style={{ width: "232px", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Scan size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#3f3f46" }}>Scan now</p>
        <div style={{ height: "20px", flexShrink: 0, borderRadius: "5px", background: "#f3f3f3", display: "flex", flexDirection: "row", padding: "0px 5px 0px 5px", gap: "1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#6c6c6c" }}>S</p>
        </div>
      </div>
      <div style={{ width: "232px", height: "34px", flexShrink: 0, borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Stack2 size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222" }}>Change scan type</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>Code</p>
        <ChevronRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
      </div>
      <div style={{ width: "232px", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <UserPlus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#3f3f46" }}>Assign owner</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a6a6a6" }}>DP</p>
      </div>
      <div style={{ width: "232px", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg width={16} height={16} viewBox="0 0 24 24" style={{ width: "16px", height: "16px", flexShrink: 0, color: "#545359", display: "block" }}><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" fill="currentColor" /></svg>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#3f3f46" }}>Open on GitLab</p>
      </div>
      <div style={{ width: "232px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "4px 0px 4px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ebebeb" }} />
      </div>
      <div style={{ width: "232px", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Ban size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#fb3034", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#fb3034" }}>Exclude from scans</p>
      </div>
    </div>
  );
}
