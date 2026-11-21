// Spend by tool card (spendix, Cards and panels) from Ingot UI (ingotui.com).
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

export function SpendByToolCard() {
  return (
    <div style={{ width: "440px", height: "300px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "440px", height: "48px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Spend by tool</p>
        </div>
        <div style={{ height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>View all</p>
          <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "62px", width: "408px", height: "26px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "150px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>$9,840.00</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>{" / month"}</span>
        </p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#c9c9cd", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>33 others · $5,149.80</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "100px", width: "408px", height: "12px", display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "53.92px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #4177ee 0%, #2563eb 100%)", boxShadow: "inset 0 0 0 1px rgba(29, 77, 183, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ width: "43.13px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #2db1ec 0%, #0ea5e9 100%)", boxShadow: "inset 0 0 0 1px rgba(11, 129, 182, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ width: "35.55px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #f6ab2b 0%, #f59e0b 100%)", boxShadow: "inset 0 0 0 1px rgba(191, 123, 9, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ width: "33.55px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #8d71fc 0%, #7c5cfc 100%)", boxShadow: "inset 0 0 0 1px rgba(97, 72, 197, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ width: "21.18px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #2fc291 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
        <div style={{ width: "205.68px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #e7e7e8 0%, #dfdfe1 100%)", boxShadow: "inset 0 0 0 1px rgba(153, 153, 158, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden", position: "relative" }}>
          <svg style={{ position: "absolute", left: "-12px", top: "0px", width: "237px", height: "12px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="237" height="12" viewBox="0 0 237 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 12 L0.494975 12.495 L12.495 0.494975 L12 0 L11.505 -0.494975 L-0.494975 11.505 L0 12 Z M5 12 L5.49497 12.495 L17.495 0.494975 L17 0 L16.505 -0.494975 L4.50503 11.505 L5 12 Z M10 12 L10.495 12.495 L22.495 0.494975 L22 0 L21.505 -0.494975 L9.50502 11.505 L10 12 Z M15 12 L15.495 12.495 L27.495 0.494975 L27 0 L26.505 -0.494975 L14.505 11.505 L15 12 Z M20 12 L20.495 12.495 L32.495 0.494975 L32 0 L31.505 -0.494975 L19.505 11.505 L20 12 Z M25 12 L25.495 12.495 L37.495 0.494975 L37 0 L36.505 -0.494975 L24.505 11.505 L25 12 Z M30 12 L30.495 12.495 L42.495 0.494975 L42 0 L41.505 -0.494975 L29.505 11.505 L30 12 Z M35 12 L35.495 12.495 L47.495 0.494975 L47 0 L46.505 -0.494975 L34.505 11.505 L35 12 Z M40 12 L40.495 12.495 L52.495 0.494975 L52 0 L51.505 -0.494975 L39.505 11.505 L40 12 Z M45 12 L45.495 12.495 L57.495 0.494975 L57 0 L56.505 -0.494975 L44.505 11.505 L45 12 Z M50 12 L50.495 12.495 L62.495 0.494975 L62 0 L61.505 -0.494975 L49.505 11.505 L50 12 Z M55 12 L55.495 12.495 L67.495 0.494975 L67 0 L66.505 -0.494975 L54.505 11.505 L55 12 Z M60 12 L60.495 12.495 L72.495 0.494975 L72 0 L71.505 -0.494975 L59.505 11.505 L60 12 Z M65 12 L65.495 12.495 L77.495 0.494975 L77 0 L76.505 -0.494975 L64.505 11.505 L65 12 Z M70 12 L70.495 12.495 L82.495 0.494975 L82 0 L81.505 -0.494975 L69.505 11.505 L70 12 Z M75 12 L75.495 12.495 L87.495 0.494975 L87 0 L86.505 -0.494975 L74.505 11.505 L75 12 Z M80 12 L80.495 12.495 L92.495 0.494975 L92 0 L91.505 -0.494975 L79.505 11.505 L80 12 Z M85 12 L85.495 12.495 L97.495 0.494975 L97 0 L96.505 -0.494975 L84.505 11.505 L85 12 Z M90 12 L90.495 12.495 L102.495 0.494975 L102 0 L101.505 -0.494975 L89.505 11.505 L90 12 Z M95 12 L95.495 12.495 L107.495 0.494975 L107 0 L106.505 -0.494975 L94.505 11.505 L95 12 Z M100 12 L100.495 12.495 L112.495 0.494975 L112 0 L111.505 -0.494975 L99.505 11.505 L100 12 Z M105 12 L105.495 12.495 L117.495 0.494975 L117 0 L116.505 -0.494975 L104.505 11.505 L105 12 Z M110 12 L110.495 12.495 L122.495 0.494975 L122 0 L121.505 -0.494975 L109.505 11.505 L110 12 Z M115 12 L115.495 12.495 L127.495 0.494975 L127 0 L126.505 -0.494975 L114.505 11.505 L115 12 Z M120 12 L120.495 12.495 L132.495 0.494975 L132 0 L131.505 -0.494975 L119.505 11.505 L120 12 Z M125 12 L125.495 12.495 L137.495 0.494975 L137 0 L136.505 -0.494975 L124.505 11.505 L125 12 Z M130 12 L130.495 12.495 L142.495 0.494975 L142 0 L141.505 -0.494975 L129.505 11.505 L130 12 Z M135 12 L135.495 12.495 L147.495 0.494975 L147 0 L146.505 -0.494975 L134.505 11.505 L135 12 Z M140 12 L140.495 12.495 L152.495 0.494975 L152 0 L151.505 -0.494975 L139.505 11.505 L140 12 Z M145 12 L145.495 12.495 L157.495 0.494975 L157 0 L156.505 -0.494975 L144.505 11.505 L145 12 Z M150 12 L150.495 12.495 L162.495 0.494975 L162 0 L161.505 -0.494975 L149.505 11.505 L150 12 Z M155 12 L155.495 12.495 L167.495 0.494975 L167 0 L166.505 -0.494975 L154.505 11.505 L155 12 Z M160 12 L160.495 12.495 L172.495 0.494975 L172 0 L171.505 -0.494975 L159.505 11.505 L160 12 Z M165 12 L165.495 12.495 L177.495 0.494975 L177 0 L176.505 -0.494975 L164.505 11.505 L165 12 Z M170 12 L170.495 12.495 L182.495 0.494975 L182 0 L181.505 -0.494975 L169.505 11.505 L170 12 Z M175 12 L175.495 12.495 L187.495 0.494975 L187 0 L186.505 -0.494975 L174.505 11.505 L175 12 Z M180 12 L180.495 12.495 L192.495 0.494975 L192 0 L191.505 -0.494975 L179.505 11.505 L180 12 Z M185 12 L185.495 12.495 L197.495 0.494975 L197 0 L196.505 -0.494975 L184.505 11.505 L185 12 Z M190 12 L190.495 12.495 L202.495 0.494975 L202 0 L201.505 -0.494975 L189.505 11.505 L190 12 Z M195 12 L195.495 12.495 L207.495 0.494975 L207 0 L206.505 -0.494975 L194.505 11.505 L195 12 Z M200 12 L200.495 12.495 L212.495 0.494975 L212 0 L211.505 -0.494975 L199.505 11.505 L200 12 Z M205 12 L205.495 12.495 L217.495 0.494975 L217 0 L216.505 -0.494975 L204.505 11.505 L205 12 Z M210 12 L210.495 12.495 L222.495 0.494975 L222 0 L221.505 -0.494975 L209.505 11.505 L210 12 Z M215 12 L215.495 12.495 L227.495 0.494975 L227 0 L226.505 -0.494975 L214.505 11.505 L215 12 Z M220 12 L220.495 12.495 L232.495 0.494975 L232 0 L231.505 -0.494975 L219.505 11.505 L220 12 Z M225 12 L225.495 12.495 L237.495 0.494975 L237 0 L236.505 -0.494975 L224.505 11.505 L225 12 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
        </div>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "126px", width: "408px", height: "156px", display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "28px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "3px", height: "20px", flexShrink: 0, borderRadius: "2px", background: "#2563eb" }} />
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "18px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Figma</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>13.7%</p>
            <p style={{ width: "80px", height: "18px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$1,350.00</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "28px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "3px", height: "20px", flexShrink: 0, borderRadius: "2px", background: "#0ea5e9" }} />
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={16.8} height={16.8} viewBox="0 0 24 24" style={{ width: "16.8px", height: "16.8px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" /></svg>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "18px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Google Workspace</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>All teams</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>11.0%</p>
            <p style={{ width: "80px", height: "18px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$1,080.00</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "28px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "3px", height: "20px", flexShrink: 0, borderRadius: "2px", background: "#f59e0b" }} />
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, borderRadius: "4.7px", background: "#ff7a59", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>H</p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "18px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>HubSpot</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>9.0%</p>
            <p style={{ width: "80px", height: "18px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$890.00</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "28px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "3px", height: "20px", flexShrink: 0, borderRadius: "2px", background: "#7c5cfc" }} />
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={16.8} height={16.8} viewBox="0 0 24 24" style={{ width: "16.8px", height: "16.8px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" /></svg>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "18px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>GitHub</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Engineering</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>8.5%</p>
            <p style={{ width: "80px", height: "18px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$840.00</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "28px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "3px", height: "20px", flexShrink: 0, borderRadius: "2px", background: "#10b981" }} />
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "-0.4px", top: "-0.4px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "18px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Slack</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>All teams</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>5.4%</p>
            <p style={{ width: "80px", height: "18px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$530.20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
