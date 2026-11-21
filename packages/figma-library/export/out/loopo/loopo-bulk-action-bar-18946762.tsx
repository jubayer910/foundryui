// Bulk action bar (loopo, Navigation) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ContactBulk = icon("<path d=\"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2z\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 21V19A2 2 0 0 1 9 17H15A2 2 0 0 1 17 19V21\"/><circle cx=\"12\" cy=\"10\" r=\"3\" /></g><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 2V4\"/><path d=\"M8 2V4\"/></g>");
const FileDownloadBulk = icon("<path d=\"M17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3H14L19 8V19A2 2 0 0 1 17 21\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3V7A1 1 0 0 0 15 8H19\"/><path d=\"M12 17V11\"/><path d=\"M9.5 14.5L12 17 14.5 14.5\"/></g>");
const MailXBulk = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 19h-8.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6\" /><path d=\"M3 7l9 6l9 -6\" /><path d=\"M22 22l-5 -5\" /><path d=\"M17 22l5 -5\" /></g>");
const TagBulk = icon("<path d=\"M3 6V11.172A2 2 0 0 0 3.586 12.586L11.296 20.296A2.41 2.41 0 0 0 14.703999999999999 20.296L20.296 14.704A2.41 2.41 0 0 0 20.296 11.296000000000001L12.585999999999999 3.586000000000001A2 2 0 0 0 11.171999999999999 3.0000000000000013H5.999999999999999A3 3 0 0 0 2.999999999999999 6.000000000000002\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 7.5A1 1 0 1 0 8.5 7.5 1 1 0 1 0 6.5 7.5\"/></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function BulkActionBar() {
  return (
    <div style={{ width: "778.65px", height: "52.6px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 17.53px 35.06px -13.15px rgba(13, 13, 18, 0.1), 0px 1.1px 2.19px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "8.77px 8.77px 8.77px 14.25px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 6.57px 0px 0px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "24.1px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #fd4b23 0%, #ff8e74 100%)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "6.57px 4.38px 6.57px 4.38px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#ffffff" }}>4</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>selected</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#fd4b23" }}>Select all 18,420</p>
      </div>
      <div style={{ width: "1.1px", height: "21.91px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1.1px #e8e8eb", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <TagBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#000000" }}>Add tag</p>
      </div>
      <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 10.96px 0px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <ContactBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#24322e" }}>Add to list</p>
      </div>
      <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 10.96px 0px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <FileDownloadBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#141b34", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#24322e" }}>Export</p>
      </div>
      <div style={{ height: "35.06px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", padding: "0px 10.96px 0px 10.96px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <MailXBulk size={16.4} style={{ width: "16.43px", height: "16.43px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#e5484d" }}>Unsubscribe</p>
      </div>
      <div style={{ width: "1.1px", height: "21.91px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ width: "30.68px", height: "30.68px", flexShrink: 0, borderRadius: "8.77px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <X size={15.3} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
      </div>
    </div>
  );
}
