// Shopify settings drawer (loopo, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const FileSearch = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5\" /><path d=\"M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0\" /><path d=\"M18.5 19.5l2.5 2.5\" /></g>");
const Refresh = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" /></g>");
const Unlink = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 22v-2\" /><path d=\"M9 15l6 -6\" /><path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\" /><path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\" /><path d=\"M20 17h2\" /><path d=\"M2 7h2\" /><path d=\"M7 2v2\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");
const AlertTriangleBulk = icon("<path d=\"M10.363 3.591L2.2569999999999997 17.125A1.914 1.914 0 0 0 3.893 19.996H20.107A1.914 1.914 0 0 0 21.743 17.125999999999998L13.636999999999999 3.589999999999998A1.914 1.914 0 0 0 10.363 3.589999999999998\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 9V13\"/><path d=\"M12 16H12.01\"/></g>");
const PackageBulk = icon("<path d=\"M12 3L20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 12L20 7.5\"/><path d=\"M12 12L12 21\"/><path d=\"M12 12L4 7.5\"/><path d=\"M16 5.25L8 9.75\"/></g>");
const RefreshBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\" /><path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\" /></g>");
const ShoppingBagBulk = icon("<path d=\"M6.331 8H17.67A2 2 0 0 1 19.647000000000002 10.304L18.392000000000003 18.456A3 3 0 0 1 15.426000000000002 21H8.574000000000002A3 3 0 0 1 5.609000000000002 18.456L4.354000000000002 10.304A2 2 0 0 1 6.331000000000002 8\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11V6A3 3 0 0 1 15 6V11\"/></g>");
const ShoppingCartBulk = icon("<path d=\"M4 19A2 2 0 1 0 8 19 2 2 0 1 0 4 19\" fill=\"currentColor\" fill-opacity=\"0.4\"/><path d=\"M15 19A2 2 0 1 0 19 19 2 2 0 1 0 15 19\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17h-11v-14h-2\" /><path d=\"M6 5l14 1l-1 7h-13\" /></g>");
const Stack2Bulk = icon("<path d=\"M12 4L4 8 12 12 20 8 12 4\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12L12 16 20 12\"/><path d=\"M4 16L12 20 20 16\"/></g>");
const UserPlusBulk = icon("<path d=\"M8 7A4 4 0 1 0 16 7 4 4 0 0 0 8 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 19H22\"/><path d=\"M19 16V22\"/><path d=\"M6 21V19A4 4 0 0 1 10 15H14\"/></g>");
const UsersBulk = icon("<path d=\"M5 7A4 4 0 1 0 13 7 4 4 0 1 0 5 7\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21V19A4 4 0 0 1 7 15H11A4 4 0 0 1 15 19V21\"/><path d=\"M16 3.13A4 4 0 0 1 16 10.879999999999999\"/><path d=\"M21 21V19A4 4 0 0 0 18 15.15\"/></g>");

export function ShopifySettingsDrawer() {
  return (
    <div style={{ width: "503.99px", height: "1156px", borderRadius: "17.53px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 26.3px 52.59px -13.15px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "503.99px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "19.72px 19.72px 17.53px 19.72px", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "37.25px", height: "37.25px", flexShrink: 0, borderRadius: "9.86px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg width={21.9} height={21.9} viewBox="0 0 24 24" style={{ width: "21.91px", height: "21.91px", flexShrink: 0, color: "#5e8e3e", display: "block" }}><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" fill="currentColor" /></svg>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#000000", lineHeight: "1.5" }}>Shopify</p>
            <div style={{ flexShrink: 0, borderRadius: "6.57px", background: "#e8f7f0", display: "flex", flexDirection: "row", padding: "3.29px 8.77px 3.29px 7.67px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.57px", height: "6.57px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.57" height="6.57" viewBox="0 0 6.57 6.57" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.57 3.285 C6.57 5.09926 5.09926 6.57 3.285 6.57 C1.47074 6.57 0 5.09926 0 3.285 C0 1.47074 1.47074 0 3.285 0 C5.09926 0 6.57 1.47074 6.57 3.285 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#18b170" }}>Connected</p>
            </div>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#747474" }}>harborandco.myshopify.com · connected Mar 4, 2025 by Jordan Ellis</p>
        </div>
        <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "503.99px", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 19.72px 19.72px 19.72px", gap: "14.99px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "10.96px 13.15px 10.96px 13.15px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Last sync</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#222222" }}>12 min ago</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, boxShadow: "inset 1.1px 0 0 0 #e8e8e8", display: "flex", flexDirection: "column", padding: "10.96px 13.15px 10.96px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Orders · 30 days</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#222222" }}>430</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, boxShadow: "inset 1.1px 0 0 0 #e8e8e8", display: "flex", flexDirection: "column", padding: "10.96px 13.15px 10.96px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Customers</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#222222" }}>6,180</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, boxShadow: "inset 1.1px 0 0 0 #e8e8e8", display: "flex", flexDirection: "column", padding: "10.96px 13.15px 10.96px 14.25px", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Products</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#222222" }}>46</p>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Sync from Shopify</p>
        <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.86px 13.15px 9.86px 13.15px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <UsersBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Customers</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>6,180 synced · new buyers join Audience as checkout opt-in</p>
            </div>
            <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
              <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.86px 13.15px 9.86px 13.15px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ShoppingBagBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Orders</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>430 in 30 days · powers revenue per campaign and flow</p>
            </div>
            <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
              <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.86px 13.15px 9.86px 13.15px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <PackageBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Products</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>46 products · used in product blocks and emails</p>
            </div>
            <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
              <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.86px 13.15px 9.86px 13.15px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ShoppingCartBulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Abandoned carts</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Feeds the Abandoned cart flow after 1 hour</p>
            </div>
            <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#fd4b23", position: "relative" }}>
              <svg style={{ position: "absolute", left: "15.34px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 13.15px 0px 13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1.1px", flexShrink: 0, background: "#eeeeee" }} />
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "9.86px 13.15px 9.86px 13.15px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Stack2Bulk size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Inventory levels</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Hide sold-out products from emails</p>
            </div>
            <div style={{ width: "32.87px", height: "19.72px", flexShrink: 0, borderRadius: "9.86px", background: "#e2e4e9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "2.19px", top: "2.19px", width: "15.34px", height: "15.34px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="15.34" height="15.34" viewBox="0 0 15.34 15.34" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M15.34 7.67 C15.34 11.906 11.906 15.34 7.67 15.34 C3.43398 15.34 0 11.906 0 7.67 C0 3.43398 3.43398 0 7.67 0 C11.906 0 15.34 3.43398 15.34 7.67 Z" fill="#ffffff"/></svg>
            </div>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Sync activity</p>
        <div style={{ width: "464.55px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 8.77px 6.57px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(24, 177, 112, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <RefreshBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#18b170", display: "block" }} />
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Synced 12 new orders</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>12 min ago</p>
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 8.77px 6.57px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ShoppingCartBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>3 abandoned carts entered the flow</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>38 min ago</p>
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 8.77px 6.57px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(77, 152, 254, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <PackageBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#4d98fe", display: "block" }} />
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Cast Iron Skillet price updated to $85</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>2 h ago</p>
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 8.77px 6.57px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(0, 68, 255, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <UserPlusBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#0044ff", display: "block" }} />
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Imported 38 new customers</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Today, 6:00 AM</p>
          </div>
          <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "6.57px 8.77px 6.57px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28.49px", height: "28.49px", flexShrink: 0, borderRadius: "8.77px", background: "rgba(194, 124, 14, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <AlertTriangleBulk size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#c27c0e", display: "block" }} />
            </div>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Webhook timed out, retry succeeded</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>Dec 13, 11:42 PM</p>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Connection</p>
        <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "10.96px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "column", padding: "5.48px 14.25px 5.48px 14.25px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "438.25px", flexShrink: 0, boxShadow: "inset 0 -1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "8.77px 0px 9.87px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#7d818c" }}>Webhooks</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>6 active · last event 12 min ago</p>
          </div>
          <div style={{ width: "438.25px", flexShrink: 0, boxShadow: "inset 0 -1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "8.77px 0px 9.87px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#7d818c" }}>Access</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Read customers, orders, products, carts</p>
          </div>
          <div style={{ width: "438.25px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8.77px 0px 8.77px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#7d818c" }}>Store currency</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>USD · matches Loopo</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
        <div style={{ width: "464.55px", flexShrink: 0, borderRadius: "10.96px", background: "rgba(255, 241, 241, 0.6)", boxShadow: "inset 0 0 0 1.1px rgba(229, 72, 77, 0.18)", display: "flex", flexDirection: "row", padding: "14.25px 14.25px 14.25px 14.25px", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Disconnect Shopify</p>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Stops syncing. Contacts and orders already in Loopo stay.</p>
          </div>
          <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px rgba(229, 72, 77, 0.3)", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Unlink size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#e5484d", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#e5484d", lineHeight: "17.53px" }}>Disconnect</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1.1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "16.44px 19.72px 15.34px 19.72px", gap: "10.96px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#999999" }}>Auto-sync every 15 min</p>
        <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <FileSearch size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#8b8b8b", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>View logs</p>
        </div>
        <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Refresh size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Sync now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
