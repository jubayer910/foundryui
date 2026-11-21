// Cards table (spendix, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CreditCard = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8\" /><path d=\"M3 10l18 0\" /><path d=\"M7 15l.01 0\" /><path d=\"M11 15l2 0\" /></g>");
const Loader = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l0 -3\" /><path d=\"M16.25 7.75l2.15 -2.15\" /><path d=\"M18 12l3 0\" /><path d=\"M16.25 16.25l2.15 2.15\" /><path d=\"M12 18l0 3\" /><path d=\"M7.75 16.25l-2.15 2.15\" /><path d=\"M6 12l-3 0\" /><path d=\"M7.75 7.75l-2.15 -2.15\" /></g>");
const MapPinpoint01 = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.5 10c-.43-1.446-1.915-2.5-3.5-2.5A3.5 3.5 0 0 0 7.5 11c0 1.763 1.304 3.257 3 3.5\"/><path d=\"M19.95 10c-.48-4.466-4.39-8-8.95-8c-4.87 0-9 4.033-9 8.926c0 4.988 4.204 8.436 8.073 10.83a1.89 1.89 0 0 0 1.854 0q.382-.233.767-.481\"/><path d=\"M17.5 12c2.435 0 4.5 2.017 4.5 4.463c0 2.485-2.098 4.23-4.036 5.415a.94.94 0 0 1-.927 0C15.102 20.681 13 18.957 13 16.463C13 14.016 15.065 12 17.5 12Z\"/><path d=\"M17.625 16.5H17.5m.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0\"/></g>");
const Repeat = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3\" /><path d=\"M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3\" /></g>");

export function CardsTable() {
  return (
    <div style={{ width: "1154px", height: "524px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "1154px", height: "44px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ededed, inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Cardholder</p>
        </div>
        <div style={{ width: "200px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Card</p>
        </div>
        <div style={{ width: "140px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Type</p>
        </div>
        <div style={{ width: "200px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Monthly limit</p>
        </div>
        <div style={{ width: "130px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Spent</p>
        </div>
        <div style={{ width: "110px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Expires</p>
        </div>
        <div style={{ width: "144px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Status</p>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#e0e9fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#184099" }}>MP</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Maya Patel</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design</p>
            </div>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 4242</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$5,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "33.6px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,120.00</p>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>06/28</p>
        </div>
        <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>LC</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Liam Chen</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing</p>
            </div>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/dd52d6f9e2bd846d926206c8f5b26c40c52b382d.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 8817</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$5,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(16, 185, 129, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "37.2px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #34c394 0%, #10b981 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,240.00</p>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>11/27</p>
        </div>
        <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#fef1dd", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#9f6707" }}>NK</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Noah Kim</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Sales</p>
            </div>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/b94eb4200d125514858483d8ee6f73642a96928a.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 3109</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <MapPinpoint01 size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Travel</p>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$5,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(245, 158, 11, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "25.8px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #f7ad30 0%, #f59e0b 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$860.00</p>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>03/28</p>
        </div>
        <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#ede8ff", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#513ca4" }}>SR</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Sofia Reyes</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Engineering</p>
            </div>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/c1b9ac38b4d88317b1ed300762b915082a72b430.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 5520</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$8,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "38.25px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$2,040.00</p>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>09/28</p>
        </div>
        <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>LC</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Liam Chen</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing</p>
            </div>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.8px", height: "16.8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "hidden" }} xmlns="http://www.w3.org/2000/svg" width="16.8" height="16.8" viewBox="0 0 16.8 16.8" fill="none" overflow="hidden"><path transform="matrix(1 0 0 1 0 3.842)" d="M0 0.459364 L0 6.61204 C0.00557812 8.00329 1.14187 9.12285 2.52755 9.11727 L11.4955 9.11727 C11.7505 9.11727 11.9556 8.91219 11.9556 8.66282 L11.9556 2.51047 C11.95 1.11922 10.814 -0.00066769 9.42801 0.00491044 L0.460031 0.00491044 C0.205078 0.00491044 0 0.209989 0 0.459364 Z M12.5265 2.8596 L16.2291 0.154535 C16.5506 -0.111246 16.8 -0.0449648 16.8 0.437379 L16.8 8.6848 C16.8 9.23376 16.4952 9.16715 16.2291 8.96765 L12.5265 6.26816 L12.5265 2.8596 Z" fill="#4a8cff"/><path transform="matrix(1 0 0 1 -153.909 30.545)" d="M6.38401 0.245437 L6.573 1.00931 C5.82954 1.1921 5.11801 1.48625 4.4625 1.8818 L4.05826 1.20717 C4.78062 0.77124 5.56473 0.446999 6.38401 0.245437 Z M10.227 1.00931 C10.9704 1.19222 11.6819 1.48637 12.3375 1.8818 L12.7444 1.20717 C12.0212 0.771002 11.2362 0.446754 10.416 0.245437 L10.227 1.00931 Z M1.20751 4.05792 C0.771211 4.78002 0.446832 5.56406 0.245441 6.38334 L1.00932 6.57235 C1.19215 5.82895 1.4864 5.1175 1.88212 4.46217 L1.20751 4.05792 Z M0.87282 7.25878 L0.0945001 7.14066 C-0.0315 7.97494 -0.0315 8.82342 0.0945001 9.6577 L0.87282 9.53958 C0.758632 8.7836 0.758632 8.01476 0.87282 7.25878 Z M12.3375 14.9166 C11.6828 15.3119 10.9722 15.6062 10.2296 15.7894 L10.4186 16.5532 C11.237 16.3514 12.0202 16.027 12.7417 15.5912 L12.3375 14.9166 Z M15.9272 9.53958 L16.7055 9.6577 C16.8315 8.82342 16.8315 7.97494 16.7055 7.14066 L15.9272 7.25878 C16.041 8.01281 16.041 8.78555 15.9272 9.53958 Z M15.7907 10.226 C15.6076 10.9694 15.3133 11.6809 14.9179 12.3365 L15.5925 12.7434 C16.0287 12.0202 16.353 11.2352 16.5546 10.415 L15.7907 10.226 Z M9.54057 15.9272 C8.78435 16.041 8.01534 16.041 7.25911 15.9272 L7.14132 16.7055 C7.97574 16.8315 8.82426 16.8315 9.65869 16.7055 L9.54057 15.9272 Z M14.5277 12.9153 C14.0739 13.5302 13.5302 14.0734 12.915 14.5267 L13.3822 15.1607 C14.0609 14.6616 14.6609 14.0634 15.162 13.3862 L14.5277 12.9153 Z M12.915 2.27161 C13.5302 2.72564 14.0738 3.26938 14.5277 3.88467 L15.162 3.41217 C14.6624 2.73539 14.0643 2.13726 13.3875 1.63767 L12.915 2.27161 Z M2.27195 3.88467 C2.72589 3.2693 3.26962 2.72555 3.885 2.27161 L3.4125 1.63767 C2.73558 2.13709 2.13741 2.73524 1.638 3.41217 L2.27195 3.88467 Z M14.9179 4.46217 C15.3133 5.11672 15.6076 5.82725 15.7907 6.56972 L16.5546 6.38072 C16.3526 5.56245 16.0282 4.77937 15.5925 4.05792 L14.9179 4.46217 Z M7.25911 0.872811 C8.01544 0.758952 8.78425 0.758952 9.54057 0.872811 L9.65869 0.0945 C8.82429 -0.0315 7.97572 -0.0315 7.14132 0.0945 L7.25911 0.872811 Z M2.67619 15.3694 L1.05 15.7487 L1.42932 14.1225 L0.662823 13.9427 L0.283508 15.5689 C0.15029 16.1365 0.66216 16.6481 1.22982 16.5152 L2.85469 16.1424 L2.67619 15.3694 Z M0.826885 13.2408 L1.59338 13.419 L1.85588 12.2919 C1.47305 11.6489 1.18776 10.9527 1.00932 10.226 L0.245441 10.415 C0.416681 11.111 0.676955 11.7819 1.01982 12.4113 L0.826885 13.2408 Z M3.37444 15.2092 L3.55295 15.9757 L4.38244 15.7828 C5.01183 16.1257 5.68279 16.3859 6.37875 16.5572 L6.56776 15.7933 C5.84265 15.6125 5.14826 15.3254 4.50712 14.9415 L3.37444 15.2092 Z M2.42912 5.10005 C1.22851 7.27388 1.30332 9.92808 2.625 12.0307 L1.96875 14.8299 L4.76831 14.1737 C7.22367 15.7201 10.3888 15.5449 12.6584 13.7366 C14.9281 11.9283 15.8061 8.88267 14.847 6.14414 C12.9019 0.588984 5.25756 -0.0213264 2.42912 5.10005 Z" fill="#3a76f0"/><path transform="matrix(1 0 0 1 -123.457 30.544)" d="M4.26764 6.77399 C8.95851 5.15699 7.30082 -0.154698 7.77595 0.00345793 C10.8469 1.50496 14.3004 4.78096 14.3004 9.69496 C14.3004 13.4625 11.3794 16.793 7.13413 16.793 C3.36824 16.9636 0.176901 14.0508 0.0062761 10.2846 C-0.171239 6.37991 3.47587 3.53212 3.47587 4.23496 C3.50835 4.63527 3.84829 6.77399 4.26764 6.77399 Z" fill="#e73d76" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -96.798 30.592)" d="M8.47809 2.80803 C10.9981 2.95602 12.4737 4.06442 12.6171 5.099 C12.6869 5.77559 12.2374 6.30158 11.4571 6.30158 C10.3172 6.30158 10.2011 4.78236 8.23823 4.78236 C7.35328 4.78236 6.60581 5.15052 6.60581 5.94885 C6.60581 7.61703 12.8943 6.64808 12.8943 10.3214 C12.8943 12.4388 11.1996 13.8261 8.66971 13.8261 C6.44469 13.8261 4.2082 12.8175 4.21935 11.0807 C4.22329 10.5567 4.61376 10.076 5.13416 10.076 C6.44469 10.076 6.43256 12.0228 8.51911 12.0228 C9.98222 12.0228 10.4819 11.2241 10.4819 10.6676 C10.4819 8.65785 4.15635 9.89028 4.15635 6.11028 C4.15635 4.06442 5.83701 2.65349 8.47809 2.80803 Z M9.85818 16.0331 C13.8951 18.4734 18.6217 13.8019 16.0863 9.72228 C17.033 4.31446 12.3011 -0.312763 6.95559 0.681128 C2.92916 -1.77193 -1.81815 2.88383 0.706774 6.97128 C-0.257257 12.3384 4.44772 17.0647 9.85818 16.0331 Z" fill="#178cc8" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -70.825 30.545)" d="M0.333044 16.7997 L3.79969 16.7997 L3.79969 5.59978 L0.333044 5.59978 L0.333044 16.7997 Z M9.34172 10.9207 C9.34172 9.34631 10.0665 8.40787 11.4542 8.40787 C12.729 8.40787 13.3412 9.30825 13.3412 10.9207 L13.3412 16.8 L16.7921 16.7997 L16.7921 9.70856 C16.7921 6.70852 15.0915 5.25787 12.7168 5.25787 C10.3412 5.25787 9.34172 7.1085 9.34172 7.1085 L9.34172 5.59978 L6.01617 5.59978 L6.01617 16.7997 L9.34172 16.7997 L9.34172 10.9207 Z M2.05012 4.13339 C3.18216 4.13339 4.09992 3.20742 4.09992 2.0662 C4.09992 0.925313 3.18216 0 2.05012 0 C0.917437 0 0 0.925313 0 2.0662 C0 3.20742 0.917437 4.13339 2.05012 4.13339 Z" fill="#10658f" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -182.328 52.32)" d="M10.3932 0.0141071 C10.3939 0.270373 10.469 3.97392 14.3557 4.20492 C14.3557 5.27297 14.3567 6.04734 14.3567 7.0665 C14.0623 7.08356 11.7983 6.91917 10.3886 5.66212 L10.3844 11.233 C10.4379 15.0997 7.59269 17.4523 3.87307 16.6399 C-2.54046 14.7213 -0.409292 5.20898 6.03049 6.22716 C6.03049 9.29808 6.03212 6.22617 6.03212 9.29808 C3.37201 8.90662 2.48214 11.1195 3.18892 12.7043 C3.83238 14.1468 6.48132 14.4598 7.40499 12.4245 C7.50967 12.0261 7.56217 11.572 7.56217 11.0621 L7.56217 0 L10.3932 0.0141071 Z" fill="#000000" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -152.044 52.32)" d="M5.37249 11.1114 C4.93149 13.4243 4.39271 15.6418 2.79671 16.8001 C2.30387 13.3042 3.5199 10.6789 4.0846 7.89149 C3.12189 6.27088 4.20045 3.00932 6.23121 3.81322 C8.72988 4.80154 4.06723 9.83858 7.19721 10.4676 C10.4653 11.1242 11.7995 4.79727 9.77331 2.73993 C6.84512 -0.231244 1.24994 2.672 1.93801 6.92582 C2.10536 7.96564 3.17964 8.28097 2.3672 9.71619 C0.493281 9.30079 -0.0658424 7.82291 0.00601702 5.85219 C0.121845 2.62705 2.90401 0.368896 5.69439 0.0565206 C9.2237 -0.338542 12.5358 1.35196 12.9932 4.6716 C13.508 8.41879 11.4002 12.4767 7.62672 12.185 C6.60363 12.1053 6.17443 11.5986 5.37249 11.1114 Z" fill="#d0272c"/><path transform="matrix(1 0 0 1 -124.34 52.32)" d="M1.09561 0 L0 2.92163 L0 14.6075 L4.01559 14.6075 L4.01559 16.8 L6.20779 16.8 L8.39803 14.6075 L11.6839 14.6075 L16.0663 10.2267 L16.0663 0 L1.09561 0 Z M2.55543 1.45983 L14.6062 1.45983 L14.6062 9.49495 L12.0494 12.0517 L8.03315 12.0517 L5.84357 14.2413 L5.84357 12.0517 L2.55543 12.0517 L2.55543 1.45983 Z M6.57234 8.76553 L8.03315 8.76553 L8.03315 4.38342 L6.57234 4.38342 L6.57234 8.76553 Z M10.5889 8.76553 L12.0494 8.76553 L12.0494 4.38342 L10.5889 4.38342 L10.5889 8.76553 Z" fill="#5a3e85"/><path transform="matrix(1 0 0 1 -96.798 53.487)" d="M8.24528 3.39762 C7.86072 3.40451 7.53588 3.73198 7.54277 4.10572 C7.54966 4.49323 7.8686 4.79609 8.26399 4.7915 C8.66036 4.78658 8.96092 4.48044 8.95731 4.08472 C8.95403 3.69655 8.63674 3.3904 8.24528 3.39762 Z M13.1806 7.86767 C12.8758 7.86537 12.6169 8.11508 12.6044 8.42319 C12.5913 8.7523 12.8472 9.023 13.1731 9.02365 C13.4884 9.02464 13.7374 8.78642 13.7489 8.47241 C13.7611 8.14264 13.5051 7.86997 13.1806 7.86767 Z M10.1445 8.47175 C10.1569 8.1433 9.8928 7.86767 9.56369 7.86636 C9.23819 7.86505 8.96519 8.14428 8.97668 8.46781 C8.98718 8.77723 9.24771 9.02726 9.55975 9.02759 C9.87115 9.02792 10.1323 8.78478 10.1445 8.47175 Z M13.7486 13.8664 C13.2685 13.8162 12.7639 14.0932 12.2619 14.1447 C10.7318 14.3012 9.36124 13.8747 8.23085 12.8296 C6.0813 10.8415 6.38842 7.79286 8.87528 6.16372 C11.0855 4.7157 14.3271 5.19837 15.8853 7.20748 C17.2454 8.96065 17.0856 11.288 15.4253 12.761 C14.6506 13.4484 14.9755 13.6676 15.1769 14.4663 C14.7307 14.2674 14.2359 13.9173 13.7486 13.8664 Z M3.81198 3.39795 C3.41987 3.38614 3.09733 3.68604 3.08585 4.07257 C3.07436 4.46436 3.37394 4.77805 3.769 4.78822 C4.16046 4.79806 4.48891 4.49816 4.50334 4.11655 C4.51778 3.73625 4.18637 3.40878 3.81198 3.39795 Z M6.18171 10.4097 C5.57238 10.3342 5.01751 10.2512 4.4597 10.2039 C4.26709 10.1878 4.03839 10.2108 3.87499 10.303 C3.33325 10.6088 2.81383 10.954 2.19827 11.3386 C2.31114 10.8277 2.38432 10.3805 2.51393 9.94995 C2.60908 9.63397 2.56478 9.45777 2.27341 9.2517 C-1.50331 6.58536 -0.311889 1.68022 3.91305 0.300122 C7.2048 -0.775472 11.3359 1.1165 11.6755 4.75081 C8.50221 4.91651 5.8969 7.04965 6.18171 10.4097 Z" fill="#3caf41"/><path transform="matrix(1 0 0 1 -70.83 55.949)" d="M4.73813 0 C7.35493 0 9.47625 2.13609 9.47625 4.77061 C9.47625 7.40545 7.35493 9.54122 4.73813 9.54122 C2.12133 9.54122 0 7.40545 0 4.77061 C0 2.13609 2.12133 0 4.73813 0 Z M12.3047 0.279563 C13.6133 0.279563 14.6738 2.28998 14.6738 4.77061 C14.678 5.36845 14.4241 9.26198 12.305 9.26198 C10.9965 9.26198 9.93563 7.25058 9.93563 4.77061 C9.93563 2.29064 10.9965 0.279563 12.3047 0.279563 Z M15.9669 0.747141 C16.4269 0.747141 16.8 2.54855 16.8 4.77061 C16.8 6.99202 16.4269 8.79408 15.9669 8.79408 C15.5065 8.79408 15.1338 6.99267 15.1338 4.77061 C15.1338 2.54855 15.5065 0.747141 15.9669 0.747141 Z" fill="#1e1b1e"/><path transform="matrix(1 0 0 1 -46.481 52.32)" d="M6.13659 0.0111551 C5.21325 0.0111551 4.45889 0.765515 4.45889 1.68886 C4.45889 2.6122 5.21325 3.36656 6.13659 3.36656 L7.81462 3.36656 L7.81462 1.68886 C7.81462 0.765515 7.07142 0.0111551 6.13659 0.0111551 Z M0 10.6408 C0 11.5641 0.75436 12.3185 1.6777 12.3185 C2.60105 12.3185 3.3554 11.5641 3.3554 10.6408 L3.3554 8.96306 L1.6777 8.96306 C0.743203 8.96306 0 9.71742 0 10.6408 Z M4.47005 10.6408 L4.47005 15.1223 C4.47005 16.0456 5.22473 16.8 6.14808 16.8 C7.07142 16.8 7.82578 16.0456 7.82578 15.1223 L7.82578 10.6408 C7.82578 9.71742 7.07142 8.96306 6.14808 8.96306 C5.21325 8.96306 4.47005 9.71742 4.47005 10.6408 Z M10.607 16.8 C11.5303 16.8 12.2847 16.0456 12.2847 15.1223 C12.2847 14.1989 11.5303 13.4446 10.607 13.4446 L8.92927 13.4446 L8.92927 15.1223 C8.92927 16.0456 9.68362 16.8 10.607 16.8 Z M15.0773 12.3185 C16.0007 12.3185 16.755 11.5641 16.755 10.6408 C16.755 9.71742 16.0007 8.96306 15.0773 8.96306 L10.607 8.96306 C9.68362 8.96306 8.92927 9.71742 8.92927 10.6408 C8.92927 11.5641 9.68362 12.3185 10.607 12.3185 L15.0773 12.3185 Z M16.755 6.15923 C16.755 5.23589 16.0007 4.48153 15.0773 4.48153 C14.154 4.48153 13.3993 5.23589 13.3993 6.15923 L13.3993 7.83694 L15.0773 7.83694 C16.0007 7.84842 16.755 7.09373 16.755 6.15923 Z M12.2847 6.15923 L12.2847 1.6777 C12.2847 0.75436 11.5303 0 10.607 0 C9.68362 0 8.92927 0.75436 8.92927 1.6777 L8.92927 6.15923 C8.92927 7.08258 9.68362 7.83694 10.607 7.83694 C11.5415 7.84842 12.2847 7.09373 12.2847 6.15923 Z M6.13659 4.48153 L1.6777 4.48153 C0.75436 4.48153 0 5.23589 0 6.15923 C0 7.08258 0.75436 7.83694 1.6777 7.83694 L6.14808 7.83694 C7.07142 7.83694 7.82578 7.08258 7.82578 6.15923 C7.81462 5.23589 7.07142 4.48153 6.13659 4.48153 Z" fill="#e01e5a"/><path transform="matrix(1 0 0 1 -46.634 32.978)" d="M16.7999 0.51436 L14.143 13.911 C14.143 13.911 13.7713 14.84 12.7495 14.394 L6.58992 9.67988 C7.41778 8.93536 13.8405 3.16167 14.121 2.89983 C14.5552 2.49459 14.2861 2.25342 13.7811 2.55989 L4.29469 8.58394 L0.63478 7.35183 C0.63478 7.35183 0.0589203 7.14774 0.00313905 6.70181 C-0.0526422 6.25589 0.653481 6.01439 0.653481 6.01439 L15.5737 0.161297 C15.5737 0.161297 16.7999 -0.377484 16.7999 0.51436 Z" fill="#23b7ec"/></svg>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 6630</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(16, 185, 129, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "67.5px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #34c394 0%, #10b981 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$450.00</p>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>02/28</p>
        </div>
        <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#fceae8", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#99453d" }}>AJ</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Ava Johnson</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>HR</p>
            </div>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "-0.4px", top: "-0.4px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 1984</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,000</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "79.53px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$530.20</p>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>08/27</p>
        </div>
        <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#e0e9fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#184099" }}>MP</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Maya Patel</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design</p>
            </div>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 7710</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CreditCard size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>One-time</p>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$500</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "84.12px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$280.40</p>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>05/26</p>
        </div>
        <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
          </div>
        </div>
      </div>
      <div style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>LC</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Liam Chen</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing</p>
            </div>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/31aaca83a4864f35dba467eb853566eebfeb77a6.png') center / cover no-repeat" }} />
              </div>
            </div>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 2291</p>
            </div>
          </div>
        </div>
        <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CreditCard size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>One-time</p>
          </div>
        </div>
        <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$500</p>
            <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(16, 185, 129, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "0.75px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #34c394 0%, #10b981 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$0.00</p>
        </div>
        <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>04/26</p>
        </div>
        <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e0f6ff", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>Frozen</p>
          </div>
        </div>
      </div>
    </div>
  );
}
