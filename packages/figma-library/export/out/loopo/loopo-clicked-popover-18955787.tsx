"use client";
// Clicked popover (loopo, Popovers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CursorPointerBulk = icon("<path d=\"M19.5027 9.96958C20.7073 10.4588 20.6154 12.1941 19.3658 12.5533L13.0605 14.3658 10.1807 20.2606C9.60996 21.4288 7.88499 21.218 7.6124 19.9468L4.67677 6.25646C4.44638 5.18204 5.5121 4.2878 6.53019 4.70126L19.5027 9.96958Z\" fill=\"currentColor\" fill-opacity=\"0.4\"/>");
const Filter = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227\" /></g>");

export function ClickedPopover() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "416.3px", height: "426.2px", borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.5px 35.1px -13.1px rgba(13, 13, 18, 0.1), 0px 1.1px 2.2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "5.5px 5.5px 5.5px 5.5px", gap: "2.2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "407.6px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8.8px 11px 6.6px 11px", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "30.7px", height: "30.7px", flexShrink: 0, borderRadius: "8.8px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CursorPointerBulk size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.3px", fontWeight: 500, color: "#222222" }}>1,734 clickers</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>9.9% of delivered · 18.9% click-to-open</p>
        </div>
      </div>
      <div style={{ width: "407.6px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.3px 0px 3.3px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.6px 8.8px 4.4px 8.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Top links</p>
      </div>
      <div data-fu="row" style={{ width: "407.6px", flexShrink: 0, borderRadius: "7.7px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "column", padding: "7.7px 12.1px 7.7px 12.1px", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "385.7px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Shop the gift guide</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>/gifts</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>812</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
        </div>
      </div>
      <div data-fu="row" style={{ width: "407.6px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "column", padding: "6.6px 11px 6.6px 11px", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "385.7px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Cast Iron Skillet</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>/products/skillet</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>436</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
        </div>
      </div>
      <div data-fu="row" style={{ width: "407.6px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "column", padding: "6.6px 11px 6.6px 11px", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "385.7px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Stoneware Mug Set</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>/products/mug-set</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>298</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
        </div>
      </div>
      <div data-fu="row" style={{ width: "407.6px", flexShrink: 0, borderRadius: "7.7px", display: "flex", flexDirection: "column", padding: "6.6px 11px 6.6px 11px", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "385.7px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>Gift cards</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.1px", fontWeight: 400, color: "#999999" }}>/gift-cards</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#2d2d2d" }}>188</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "linear-gradient(180deg, #fd613d 0%, #fd4b23 100%)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
          <div style={{ width: "3.5px", height: "11px", flexShrink: 0, borderRadius: "1.8px", background: "rgba(253, 75, 35, 0.16)" }} />
        </div>
      </div>
      <div style={{ width: "407.6px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.3px 0px 3.3px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
      </div>
      <div style={{ width: "407.6px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6.6px 11px 6.6px 11px", gap: "6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "385.7px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#7d818c" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#7d818c" }}>{"Bought "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>312</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 400, color: "#999999" }}>{"  ·  18.0%"}</span>
          </p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#7d818c" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#7d818c" }}>{"Didn't buy "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#222222" }}>1,422</span>
          </p>
        </div>
        <div style={{ width: "385.7px", height: "11px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "68.8px", height: "11px", flexShrink: 0, borderRadius: "5.5px", background: "linear-gradient(180deg, #36bb83 0%, #18b170 100%)", boxShadow: "inset 0 0 0 1px rgba(19, 138, 87, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.18), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ width: "313.6px", height: "11px", flexShrink: 0, borderRadius: "5.5px", background: "linear-gradient(180deg, #c3ebda 0%, #b0e4ce 100%)", boxShadow: "inset 0 0 0 1px rgba(23, 168, 106, 0.22), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6.6px 0px rgba(255, 255, 255, 0.35), 0px 1.1px 1.6px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden", position: "relative" }}>
            <svg style={{ position: "absolute", left: "-11px", top: "0px", width: "345.2px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="345.24" height="10.96" viewBox="0 0 345.24 10.96" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 10.96 L0.540937 11.5009 L11.5009 0.540937 L10.96 0 L10.4191 -0.540937 L-0.540937 10.4191 L0 10.96 Z M5.48 10.96 L6.02094 11.5009 L16.9809 0.540937 L16.44 0 L15.8991 -0.540937 L4.93906 10.4191 L5.48 10.96 Z M10.96 10.96 L11.5009 11.5009 L22.4609 0.540937 L21.92 0 L21.3791 -0.540937 L10.4191 10.4191 L10.96 10.96 Z M16.44 10.96 L16.9809 11.5009 L27.9409 0.540937 L27.4 0 L26.8591 -0.540937 L15.8991 10.4191 L16.44 10.96 Z M21.92 10.96 L22.4609 11.5009 L33.4209 0.540937 L32.88 0 L32.3391 -0.540937 L21.3791 10.4191 L21.92 10.96 Z M27.4 10.96 L27.9409 11.5009 L38.9009 0.540937 L38.36 0 L37.8191 -0.540937 L26.8591 10.4191 L27.4 10.96 Z M32.88 10.96 L33.4209 11.5009 L44.3809 0.540937 L43.84 0 L43.2991 -0.540937 L32.3391 10.4191 L32.88 10.96 Z M38.36 10.96 L38.9009 11.5009 L49.8609 0.540937 L49.32 0 L48.7791 -0.540937 L37.8191 10.4191 L38.36 10.96 Z M43.84 10.96 L44.3809 11.5009 L55.3409 0.540937 L54.8 0 L54.2591 -0.540937 L43.2991 10.4191 L43.84 10.96 Z M49.32 10.96 L49.8609 11.5009 L60.8209 0.540937 L60.28 0 L59.7391 -0.540937 L48.7791 10.4191 L49.32 10.96 Z M54.8 10.96 L55.3409 11.5009 L66.3009 0.540937 L65.76 0 L65.2191 -0.540937 L54.2591 10.4191 L54.8 10.96 Z M60.28 10.96 L60.8209 11.5009 L71.7809 0.540937 L71.24 0 L70.6991 -0.540937 L59.7391 10.4191 L60.28 10.96 Z M65.76 10.96 L66.3009 11.5009 L77.2609 0.540937 L76.72 0 L76.1791 -0.540937 L65.2191 10.4191 L65.76 10.96 Z M71.24 10.96 L71.7809 11.5009 L82.7409 0.540937 L82.2 0 L81.6591 -0.540937 L70.6991 10.4191 L71.24 10.96 Z M76.72 10.96 L77.2609 11.5009 L88.2209 0.540937 L87.68 0 L87.1391 -0.540937 L76.1791 10.4191 L76.72 10.96 Z M82.2 10.96 L82.7409 11.5009 L93.7009 0.540937 L93.16 0 L92.6191 -0.540937 L81.6591 10.4191 L82.2 10.96 Z M87.68 10.96 L88.2209 11.5009 L99.1809 0.540937 L98.64 0 L98.0991 -0.540937 L87.1391 10.4191 L87.68 10.96 Z M93.16 10.96 L93.7009 11.5009 L104.661 0.540937 L104.12 0 L103.579 -0.540937 L92.6191 10.4191 L93.16 10.96 Z M98.64 10.96 L99.1809 11.5009 L110.141 0.540937 L109.6 0 L109.059 -0.540937 L98.0991 10.4191 L98.64 10.96 Z M104.12 10.96 L104.661 11.5009 L115.621 0.540937 L115.08 0 L114.539 -0.540937 L103.579 10.4191 L104.12 10.96 Z M109.6 10.96 L110.141 11.5009 L121.101 0.540937 L120.56 0 L120.019 -0.540937 L109.059 10.4191 L109.6 10.96 Z M115.08 10.96 L115.621 11.5009 L126.581 0.540937 L126.04 0 L125.499 -0.540937 L114.539 10.4191 L115.08 10.96 Z M120.56 10.96 L121.101 11.5009 L132.061 0.540937 L131.52 0 L130.979 -0.540937 L120.019 10.4191 L120.56 10.96 Z M126.04 10.96 L126.581 11.5009 L137.541 0.540937 L137 0 L136.459 -0.540937 L125.499 10.4191 L126.04 10.96 Z M131.52 10.96 L132.061 11.5009 L143.021 0.540936 L142.48 0 L141.939 -0.540936 L130.979 10.4191 L131.52 10.96 Z M137 10.96 L137.541 11.5009 L148.501 0.540937 L147.96 0 L147.419 -0.540937 L136.459 10.4191 L137 10.96 Z M142.48 10.96 L143.021 11.5009 L153.981 0.540937 L153.44 0 L152.899 -0.540937 L141.939 10.4191 L142.48 10.96 Z M147.96 10.96 L148.501 11.5009 L159.461 0.540936 L158.92 0 L158.379 -0.540936 L147.419 10.4191 L147.96 10.96 Z M153.44 10.96 L153.981 11.5009 L164.941 0.540936 L164.4 0 L163.859 -0.540936 L152.899 10.4191 L153.44 10.96 Z M158.92 10.96 L159.461 11.5009 L170.421 0.540937 L169.88 0 L169.339 -0.540937 L158.379 10.4191 L158.92 10.96 Z M164.4 10.96 L164.941 11.5009 L175.901 0.540937 L175.36 0 L174.819 -0.540937 L163.859 10.4191 L164.4 10.96 Z M169.88 10.96 L170.421 11.5009 L181.381 0.540936 L180.84 0 L180.299 -0.540936 L169.339 10.4191 L169.88 10.96 Z M175.36 10.96 L175.901 11.5009 L186.861 0.540937 L186.32 0 L185.779 -0.540937 L174.819 10.4191 L175.36 10.96 Z M180.84 10.96 L181.381 11.5009 L192.341 0.540937 L191.8 0 L191.259 -0.540937 L180.299 10.4191 L180.84 10.96 Z M186.32 10.96 L186.861 11.5009 L197.821 0.540936 L197.28 0 L196.739 -0.540936 L185.779 10.4191 L186.32 10.96 Z M191.8 10.96 L192.341 11.5009 L203.301 0.540936 L202.76 0 L202.219 -0.540936 L191.259 10.4191 L191.8 10.96 Z M197.28 10.96 L197.821 11.5009 L208.781 0.540937 L208.24 0 L207.699 -0.540937 L196.739 10.4191 L197.28 10.96 Z M202.76 10.96 L203.301 11.5009 L214.261 0.540937 L213.72 0 L213.179 -0.540937 L202.219 10.4191 L202.76 10.96 Z M208.24 10.96 L208.781 11.5009 L219.741 0.540936 L219.2 0 L218.659 -0.540936 L207.699 10.4191 L208.24 10.96 Z M213.72 10.96 L214.261 11.5009 L225.221 0.540936 L224.68 0 L224.139 -0.540936 L213.179 10.4191 L213.72 10.96 Z M219.2 10.96 L219.741 11.5009 L230.701 0.540937 L230.16 0 L229.619 -0.540937 L218.659 10.4191 L219.2 10.96 Z M224.68 10.96 L225.221 11.5009 L236.181 0.540937 L235.64 0 L235.099 -0.540937 L224.139 10.4191 L224.68 10.96 Z M230.16 10.96 L230.701 11.5009 L241.661 0.540936 L241.12 0 L240.579 -0.540936 L229.619 10.4191 L230.16 10.96 Z M235.64 10.96 L236.181 11.5009 L247.141 0.540937 L246.6 0 L246.059 -0.540937 L235.099 10.4191 L235.64 10.96 Z M241.12 10.96 L241.661 11.5009 L252.621 0.540937 L252.08 0 L251.539 -0.540937 L240.579 10.4191 L241.12 10.96 Z M246.6 10.96 L247.141 11.5009 L258.101 0.540936 L257.56 0 L257.019 -0.540936 L246.059 10.4191 L246.6 10.96 Z M252.08 10.96 L252.621 11.5009 L263.581 0.540937 L263.04 0 L262.499 -0.540937 L251.539 10.4191 L252.08 10.96 Z M257.56 10.96 L258.101 11.5009 L269.061 0.540936 L268.52 0 L267.979 -0.540936 L257.019 10.4191 L257.56 10.96 Z M263.04 10.96 L263.581 11.5009 L274.541 0.540936 L274 0 L273.459 -0.540936 L262.499 10.4191 L263.04 10.96 Z M268.52 10.96 L269.061 11.5009 L280.021 0.540937 L279.48 0 L278.939 -0.540937 L267.979 10.4191 L268.52 10.96 Z M274 10.96 L274.541 11.5009 L285.501 0.540936 L284.96 0 L284.419 -0.540936 L273.459 10.4191 L274 10.96 Z M279.48 10.96 L280.021 11.5009 L290.981 0.540936 L290.44 0 L289.899 -0.540936 L278.939 10.4191 L279.48 10.96 Z M284.96 10.96 L285.501 11.5009 L296.461 0.540937 L295.92 0 L295.379 -0.540937 L284.419 10.4191 L284.96 10.96 Z M290.44 10.96 L290.981 11.5009 L301.941 0.540936 L301.4 0 L300.859 -0.540936 L289.899 10.4191 L290.44 10.96 Z M295.92 10.96 L296.461 11.5009 L307.421 0.540936 L306.88 0 L306.339 -0.540936 L295.379 10.4191 L295.92 10.96 Z M301.4 10.96 L301.941 11.5009 L312.901 0.540936 L312.36 0 L311.819 -0.540936 L300.859 10.4191 L301.4 10.96 Z M306.88 10.96 L307.421 11.5009 L318.381 0.540936 L317.84 0 L317.299 -0.540936 L306.339 10.4191 L306.88 10.96 Z M312.36 10.96 L312.901 11.5009 L323.861 0.540937 L323.32 0 L322.779 -0.540937 L311.819 10.4191 L312.36 10.96 Z M317.84 10.96 L318.381 11.5009 L329.341 0.540936 L328.8 0 L328.259 -0.540936 L317.299 10.4191 L317.84 10.96 Z M323.32 10.96 L323.861 11.5009 L334.821 0.540936 L334.28 0 L333.739 -0.540936 L322.779 10.4191 L323.32 10.96 Z M328.8 10.96 L329.341 11.5009 L340.301 0.540937 L339.76 0 L339.219 -0.540937 L328.259 10.4191 L328.8 10.96 Z M334.28 10.96 L334.821 11.5009 L345.781 0.540936 L345.24 0 L344.699 -0.540936 L333.739 10.4191 L334.28 10.96 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
          </div>
        </div>
      </div>
      <div style={{ width: "407.6px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6.6px 6.6px 6.6px 6.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div data-fu="btn" style={{ alignSelf: "stretch", height: "39.4px", flexShrink: 0, borderRadius: "109.6px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.9px 8.8px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "11px 11px 11px 11px", gap: "11px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.5px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Filter size={17.5} style={{ width: "17.5px", height: "17.5px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.2px", fontWeight: 500, color: "#ffffff", lineHeight: "17.5px" }}>Create segment from clickers who didn't buy (1,422)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
function fuInteract(root: HTMLElement | null) {
  if (!root || root.dataset.fuOn) return;
  root.dataset.fuOn = "1";
  const doc = root.ownerDocument;
  const all = (sel: string, el: Element = root): HTMLElement[] => Array.from(el.querySelectorAll(sel)) as HTMLElement[];
  const box = (el: Element) => el.getBoundingClientRect();
  const font = getComputedStyle(root).fontFamily;
  const tip = doc.createElement("div");
  tip.setAttribute("aria-hidden", "true");
  Object.assign(tip.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "none", background: "#111113", color: "#fff", font: "500 12px/16px " + font, padding: "5px 8px", borderRadius: "6px", whiteSpace: "nowrap", opacity: "0", transform: "translate(-50%, -100%)", transition: "opacity .12s", boxShadow: "0 4px 14px rgba(0,0,0,.18)" });
  doc.body.appendChild(tip);
  const show = (text: string, x: number, y: number) => { if (!text) return hide(); tip.textContent = text; tip.style.left = x + "px"; tip.style.top = y - 8 + "px"; tip.style.opacity = "1"; };
  const hide = () => { tip.style.opacity = "0"; };
  const ease = (el: HTMLElement | SVGElement, props: string) => { const s = (el as HTMLElement).style; if (!s.transition) s.transition = props; };
  const texts = (scope: Element) => all("p, span", scope).filter((t) => t.children.length === 0 && (t.textContent || "").trim());
  const NUM = /^([^\d\-+.]*)([-+]?[\d,]*\.?\d+)\s*([kKmMbB%]?)([^\d]*)$/;
  // value axis: numeric labels along one edge of the chart, used to read a mark's value from its position
  const axis = (scope: Element, vertical: boolean) => {
    const pts: { v: number; p: number; pre: string; suf: string; dec: number }[] = [];
    for (const t of texts(scope)) {
      const m = (t.textContent || "").trim().match(NUM);
      if (!m) continue;
      const mult = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9 }[m[3] as "k"] || 1;
      const r = box(t);
      pts.push({ v: parseFloat(m[2].replace(/,/g, "")) * mult, p: vertical ? r.top + r.height / 2 : r.left + r.width / 2, pre: m[1], suf: m[3] + m[4], dec: (m[2].split(".")[1] || "").length });
    }
    const uniq = pts.filter((a, i) => pts.findIndex((b) => Math.abs(b.p - a.p) < 2) === i);
    if (uniq.length < 2) return null;
    uniq.sort((a, b) => a.p - b.p);
    const a = uniq[0], b = uniq[uniq.length - 1];
    if (a.v === b.v || Math.abs(b.p - a.p) < 10) return null;
    return (pos: number) => {
      const v = a.v + ((pos - a.p) * (b.v - a.v)) / (b.p - a.p);
      const suf = a.suf || b.suf, pre = a.pre || b.pre;
      const div = /^[kK]/.test(suf) ? 1e3 : /^[mM]/.test(suf) ? 1e6 : /^[bB]/.test(suf) ? 1e9 : 1;
      const x = v / div;
      const dec = Math.max(a.dec, b.dec, div > 1 && Math.abs(x) < 100 ? 1 : 0);
      return pre + x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec }) + suf;
    };
  };
  // the chart around a group of marks: the nearest ancestor that also holds text labels
  const chartOf = (el: Element) => { let c: Element | null = el.parentElement; while (c && c !== root.parentElement) { if (texts(c).length >= 3) return c; c = c.parentElement; } return root; };
  const labelNear = (scope: Element, x: number, y: number, below: boolean, anyText = false) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (!anyText && NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
      const dd = below ? Math.abs(r.left + r.width / 2 - x) + (r.top - y) * 0.2 : Math.abs(r.top + r.height / 2 - y) + (x - r.right) * 0.1;
      if (dd < d) { d = dd; best = (t.textContent || "").trim(); }
    }
    return d < 80 ? best : "";
  };
  const dim = (els: (HTMLElement | SVGElement)[], keep: (HTMLElement | SVGElement)[]) => { for (const e of els) { ease(e, "opacity .15s"); (e as HTMLElement).style.opacity = keep.includes(e) ? "" : "0.35"; } };
  const undim = (els: (HTMLElement | SVGElement)[]) => { for (const e of els) (e as HTMLElement).style.opacity = ""; };

  // vertical bars: the hovered column (all stacked segments at that x) stays, the rest fade
  const groups = new Map<Element, HTMLElement[]>();
  for (const b of all("[data-fu=bar],[data-fu=hbar]")) { const p = b.parentElement!; if (!groups.has(p)) groups.set(p, []); groups.get(p)!.push(b); }
  groups.forEach((bars) => {
    const horiz = bars[0].dataset.fu === "hbar";
    const scope = chartOf(bars[0]);
    const val = axis(scope, !horiz);
    const peers = (b: HTMLElement) => { const r = box(b), c = horiz ? r.top + r.height / 2 : r.left + r.width / 2; return bars.filter((o) => { const q = box(o); return Math.abs((horiz ? q.top + q.height / 2 : q.left + q.width / 2) - c) < Math.max(2, (horiz ? r.height : r.width) / 2); }); };
    for (const b of bars) {
      b.addEventListener("mouseenter", () => {
        const col = peers(b);
        dim(bars, col);
        const rs = col.map(box);
        const top = Math.min(...rs.map((r) => r.top)), right = Math.max(...rs.map((r) => r.right)), r0 = rs[0];
        const label = horiz ? labelNear(scope, r0.left, r0.top + r0.height / 2, false) : labelNear(scope, r0.left + r0.width / 2, Math.max(...rs.map((r) => r.bottom)), true);
        const v = val ? val(horiz ? right : top) : "";
        show([label, v].filter(Boolean).join(" · "), horiz ? right : r0.left + r0.width / 2, horiz ? r0.top : top);
      });
      b.addEventListener("mouseleave", () => { undim(bars); hide(); });
    }
  });

  // line and area plots: a guide line and a dot follow the pointer along the top edge of the plotted shape
  for (const svg of all("svg[data-fu=plot]") as unknown as SVGSVGElement[]) {
    const paths = Array.from(svg.querySelectorAll("path, polyline")) as SVGGeometryElement[];
    if (!paths.length) continue;
    const line = paths.reduce((a, b) => (b.getTotalLength() > a.getTotalLength() ? b : a));
    const len = line.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 800; i++) { const q = line.getPointAtLength((len * i) / 800); pts.push({ x: q.x, y: q.y }); }
    const xs = pts.map((q) => q.x), minX = Math.min(...xs), maxX = Math.max(...xs);
    const color = (line.getAttribute("stroke") && line.getAttribute("stroke") !== "none" ? line.getAttribute("stroke") : line.getAttribute("fill")) || "#111";
    const NS = "http://www.w3.org/2000/svg";
    const g = doc.createElementNS(NS, "g");
    g.setAttribute("pointer-events", "none");
    g.style.opacity = "0";
    const guide = doc.createElementNS(NS, "line");
    guide.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    guide.setAttribute("stroke-dasharray", "3 3");
    guide.setAttribute("stroke-opacity", "0.5");
    const dot = doc.createElementNS(NS, "circle");
    dot.setAttribute("r", "4");
    dot.setAttribute("fill", "#fff");
    dot.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    dot.setAttribute("stroke-width", "2");
    g.append(guide, dot);
    svg.appendChild(g);
    const scope = chartOf(svg);
    const val = axis(scope, true);
    const area = svg.parentElement || svg;
    area.addEventListener("mousemove", (ev: Event) => {
      const e = ev as MouseEvent;
      const m = line.getScreenCTM();
      if (!m) return;
      const px = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()).x;
      if (px < minX - 4 || px > maxX + 4) { g.style.opacity = "0"; hide(); return; }
      const step = (maxX - minX) / 400 || 1;
      let y = Infinity, x = px;
      for (const q of pts) if (Math.abs(q.x - px) <= step && q.y < y) { y = q.y; x = q.x; }
      if (y === Infinity) return;
      const bb = line.getBBox();
      guide.setAttribute("x1", String(x)); guide.setAttribute("x2", String(x));
      guide.setAttribute("y1", String(bb.y)); guide.setAttribute("y2", String(bb.y + bb.height));
      dot.setAttribute("cx", String(x)); dot.setAttribute("cy", String(y));
      g.style.opacity = "1";
      const sp = new DOMPoint(x, y).matrixTransform(m);
      const label = labelNear(scope, sp.x, box(svg).bottom, true);
      show([label, val ? val(sp.y) : ""].filter(Boolean).join(" · "), sp.x, sp.y);
    });
    area.addEventListener("mouseleave", () => { g.style.opacity = "0"; hide(); });
  }

  // cards: a small lift on hover (an extra drop shadow, the card's own shadows stay as they are)
  for (const c of all("[data-fu=card]").concat(root.dataset.fu === "card" ? [root] : [])) {
    c.addEventListener("mouseenter", () => { ease(c, "transform .18s ease, filter .18s ease"); c.style.transform = "translateY(-2px)"; c.style.filter = "drop-shadow(0 8px 16px rgba(17,17,19,.08))"; });
    c.addEventListener("mouseleave", () => { c.style.transform = ""; c.style.filter = ""; });
  }

  // heatmap and calendar cells: an outline and the cell's own text
  for (const c of all("[data-fu=cell]")) {
    c.addEventListener("mouseenter", () => {
      ease(c, "outline-color .12s");
      c.style.outline = "2px solid rgba(17,17,19,.55)";
      c.style.outlineOffset = "1px";
      const r = box(c);
      // its own text, or the row and column labels of the grid it sits in
      let label = (c.textContent || "").trim();
      if (!label) {
        // walk outwards until a row label (left) and a column label (below) are in reach
        let row = "", col = "";
        for (let a: Element | null = c.parentElement; a && a !== root.parentElement && !(row && col); a = a.parentElement) {
          if (!row) row = labelNear(a, r.left, r.top + r.height / 2, false, true);
          if (!col) col = labelNear(a, r.left + r.width / 2, r.bottom, true, true);
        }
        label = [row, col].filter(Boolean).join(" · ");
      }
      show(label, r.left + r.width / 2, r.top);
    });
    c.addEventListener("mouseleave", () => { c.style.outline = ""; c.style.outlineOffset = ""; hide(); });
  }

  // fields: hover and focus states
  for (const f of all("[data-fu=field]")) {
    f.style.cursor = "text";
    f.addEventListener("mouseenter", () => { ease(f, "filter .15s, outline-color .15s"); f.style.filter = "brightness(0.985)"; });
    f.addEventListener("mouseleave", () => { f.style.filter = ""; });
    f.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      for (const o of all("[data-fu=field]")) o.style.outline = "";
      f.style.outline = "3px solid rgba(17,17,19,.12)";
      f.style.outlineOffset = "0px";
    });
  }
  doc.addEventListener("mousedown", () => { for (const o of all("[data-fu=field]")) o.style.outline = ""; });

  // donut and pie charts drawn as one vector per arc: the hovered arc stays, the others fade
  const arcGroups = new Map<Element, HTMLElement[]>();
  for (const a of all("[data-fu=arc]")) { const p = a.parentElement!; if (!arcGroups.has(p)) arcGroups.set(p, []); arcGroups.get(p)!.push(a); }
  arcGroups.forEach((arcs) => {
    const scope = chartOf(arcs[0]);
    const hexOf = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        if (hexOf(getComputedStyle(el).backgroundColor) !== color.toLowerCase()) continue;
        // climb to the legend row: the first ancestor that holds more than the swatch's label
        let row: Element | null = el.parentElement;
        while (row && row.parentElement && texts(row).length < 2 && row !== scope) row = row.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length && words.length <= 5) return words.join(" · ");
        if (el.parentElement) return texts(el.parentElement).map((t) => (t.textContent || "").trim()).join(" · ");
      }
      return "";
    };
    // hit-test the whole stack under the pointer: labels or tracks drawn over the ring don't get in the way
    const fills = new Map(arcs.map((a) => { const sh = a.querySelector("path"); return [a, (sh && (sh.getAttribute("fill") || sh.getAttribute("stroke"))) || ""] as [HTMLElement, string]; }));
    let current: HTMLElement | null = null;
    scope.addEventListener("mousemove", (ev) => {
      const e = ev as MouseEvent;
      // the arc whose drawn shape (not just its box) is under the pointer
      const inside = (sh: SVGGeometryElement) => { const m = sh.getScreenCTM(); if (!m) return false; const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return sh.isPointInFill(q) || sh.isPointInStroke(q); };
      const arc = arcs.find((a) => (Array.from(a.querySelectorAll("path, circle, ellipse")) as SVGGeometryElement[]).some(inside)) || null;
      if (!arc) { if (current) { undim(arcs); hide(); current = null; } return; }
      if (arc !== current) { dim(arcs, [arc]); current = arc; }
      show(legend(fills.get(arc) || ""), e.clientX, e.clientY);
    });
    scope.addEventListener("mouseleave", () => { undim(arcs); hide(); current = null; });
  });

  // donut and pie arcs in one drawing: the hovered arc stays, the others fade; the legend row with the same colour names it
  for (const svg of all("svg[data-fu=donut]") as unknown as SVGSVGElement[]) {
    const arcs = (Array.from(svg.querySelectorAll("path")) as SVGPathElement[]).filter((p) => { const f = p.getAttribute("fill"); return f && f !== "none" && !/^url/.test(f); });
    const scope = chartOf(svg);
    const hex = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        const bg = getComputedStyle(el).backgroundColor;
        if (!bg || hex(bg) !== color.toLowerCase()) continue;
        const row = el.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length) return words.join(" · ");
      }
      return "";
    };
    for (const a of arcs) {
      a.addEventListener("mouseenter", (ev) => {
        dim(arcs, [a]);
        const e = ev as MouseEvent;
        show(legend(a.getAttribute("fill") || ""), e.clientX, e.clientY);
      });
      a.addEventListener("mousemove", (ev) => { const e = ev as MouseEvent; tip.style.left = e.clientX + "px"; tip.style.top = e.clientY - 8 + "px"; });
      a.addEventListener("mouseleave", () => { undim(arcs); hide(); });
    }
  }

  // rows: a soft highlight under the pointer
  for (const r of all("[data-fu=row]")) {
    r.addEventListener("mouseenter", () => { ease(r, "filter .15s"); r.style.filter = "brightness(0.975)"; });
    r.addEventListener("mouseleave", () => { r.style.filter = ""; });
  }

  // buttons: hover and press feedback
  for (const b of all("[data-fu=btn],[data-fu=tab]")) {
    b.style.cursor = "pointer";
    b.addEventListener("mouseenter", () => { ease(b, "filter .15s, transform .1s"); if (!b.dataset.fuActive) b.style.filter = "brightness(0.96)"; });
    b.addEventListener("mouseleave", () => { b.style.filter = ""; b.style.transform = ""; });
    b.addEventListener("mousedown", () => { b.style.transform = "scale(0.98)"; });
    b.addEventListener("mouseup", () => { b.style.transform = ""; });
  }

  // tabs and segmented controls: clicking a tab moves the selected look onto it
  const VIS = ["background-color", "background-image", "box-shadow", "border-color", "color", "font-weight"];
  const look = (el: HTMLElement) => VIS.map((k) => el.style.getPropertyValue(k)).join("|");
  const tabGroups = new Map<Element, HTMLElement[]>();
  for (const t of all("[data-fu=tab]")) { const p = t.parentElement!; if (!tabGroups.has(p)) tabGroups.set(p, []); tabGroups.get(p)!.push(t); }
  tabGroups.forEach((tabs) => {
    if (tabs.length < 2) return;
    const counts = new Map<string, number>();
    for (const t of tabs) counts.set(look(t), (counts.get(look(t)) || 0) + 1);
    let active = tabs.find((t) => counts.get(look(t)) === 1 && counts.size > 1) || null;
    if (!active) return;
    active.dataset.fuActive = "1";
    // read both looks first, then write: swapping one property at a time would let shorthands undo each other
    const swapStyle = (a: HTMLElement, b: HTMLElement, props: string[]) => {
      const va = props.map((k) => a.style.getPropertyValue(k)), vb = props.map((k) => b.style.getPropertyValue(k));
      props.forEach((k, i) => { a.style.setProperty(k, vb[i]); b.style.setProperty(k, va[i]); });
    };
    const swap = (a: HTMLElement, b: HTMLElement) => {
      swapStyle(a, b, VIS);
      const ta = texts(a), tb = texts(b);
      for (let i = 0; i < Math.min(ta.length, tb.length); i++) swapStyle(ta[i], tb[i], ["color", "font-weight"]);
    };
    for (const t of tabs) t.addEventListener("click", () => {
      if (!active || t === active) return;
      t.style.filter = "";
      swap(active, t);
      delete active.dataset.fuActive;
      active = t;
      t.dataset.fuActive = "1";
    });
  });
}
