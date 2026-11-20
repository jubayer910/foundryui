// Stack, Human (axon, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Checklist = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8\" /><path d=\"M14 19l2 2l4 -4\" /><path d=\"M9 8h4\" /><path d=\"M9 12h2\" /></g>");
const GripVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const UserCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /><path d=\"M15 19l2 2l4 -4\" /></g>");

export function StackHuman() {
  return (
    <div style={{ width: "215px", height: "106px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 8px 4px 8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Human</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#fdf0f7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Checklist size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ef0c78", display: "block" }} />
        </div>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Review task</p>
        <GripVertical size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "6px 8px 6px 8px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "7px", background: "#fdf0f7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <UserCheck size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ef0c78", display: "block" }} />
        </div>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Approval</p>
        <GripVertical size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
      </div>
    </div>
  );
}
