// Active sessions card (montra, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const DeviceLaptop = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19l18 0\" /><path d=\"M5 7a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8\" /></g>");
const DeviceMobile = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14\" /><path d=\"M11 4h2\" /><path d=\"M12 17v.01\" /></g>");
const MapPin = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" /><path d=\"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0\" /></g>");
const World = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M3.6 9h16.8\" /><path d=\"M3.6 15h16.8\" /><path d=\"M11.5 3a17 17 0 0 0 0 18\" /><path d=\"M12.5 3a17 17 0 0 1 0 18\" /></g>");

export function ActiveSessionsCard() {
  return (
    <div style={{ width: "815.42px", height: "296px", borderRadius: "14.62px", background: "#fefefe", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "18.28px", top: "21.93px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Active sessions</p>
      <div style={{ position: "absolute", left: "600.76px", top: "17.36px", width: "196.38px", height: "27.42px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "27.42px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "14.62px", height: "14.62px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14.62" height="14.62" viewBox="0 0 14.62 14.62" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.523 1.819)" d="M7.46229 3.05413 C7.46229 3.30645 7.66684 3.511 7.91917 3.511 C8.17149 3.511 8.37604 3.30645 8.37604 3.05413 L7.91917 3.05413 L7.46229 3.05413 Z M7.55367 1.59213 L7.93381 1.3387 C7.92275 1.32211 7.91062 1.30627 7.8975 1.29127 L7.55367 1.59213 Z M5.117 0.617459 L5.21829 0.171794 L5.2066 0.169456 L5.117 0.617459 Z M4.50783 0.495626 L4.40319 0.940356 C4.40819 0.941531 4.4132 0.942622 4.41823 0.943629 L4.50783 0.495626 Z M0.670083 0.312876 L0.395958 -0.0526242 C0.390813 -0.0487655 0.38575 -0.0447985 0.380773 -0.040726 L0.670083 0.312876 Z M0.670083 10.6687 L0.380773 11.0223 C0.38575 11.0264 0.390813 11.0304 0.395958 11.0342 L0.670083 10.6687 Z M4.50783 10.486 L4.41823 10.038 C4.4132 10.039 4.40819 10.0401 4.40319 10.0412 L4.50783 10.486 Z M5.117 10.3641 L5.20663 10.8123 L5.21825 10.8096 L5.117 10.3641 Z M7.55367 9.38946 L7.8975 9.69031 C7.91062 9.67531 7.92275 9.65947 7.93381 9.64289 L7.55367 9.38946 Z M8.37604 7.92746 C8.37604 7.67513 8.17149 7.47058 7.91917 7.47058 C7.66684 7.47058 7.46229 7.67513 7.46229 7.92746 L7.91917 7.92746 L8.37604 7.92746 Z M7.91917 3.05413 L8.37604 3.05413 C8.37604 2.32202 8.24114 1.79969 7.93381 1.3387 L7.55367 1.59213 L7.17352 1.84555 C7.35353 2.11556 7.46229 2.44606 7.46229 3.05413 L7.91917 3.05413 Z M7.55367 1.59213 L7.8975 1.29127 C7.61818 0.97205 7.26961 0.76912 6.83749 0.608132 C6.4157 0.450995 5.88288 0.322998 5.21825 0.171945 L5.117 0.617459 L5.01575 1.06297 C5.69128 1.2165 6.16359 1.33217 6.51849 1.46439 C6.86305 1.59276 7.06273 1.72487 7.20983 1.89298 L7.55367 1.59213 Z M5.117 0.617459 L5.2066 0.169456 L4.59743 0.047623 L4.50783 0.495626 L4.41823 0.943629 L5.0274 1.06546 L5.117 0.617459 Z M4.50783 0.495626 L4.61248 0.0508958 C3.59073 -0.189515 2.77605 -0.382369 2.12622 -0.439229 C1.46223 -0.497328 0.888802 -0.422257 0.395958 -0.0526242 L0.670083 0.312876 L0.944208 0.678376 C1.18237 0.499758 1.49222 0.422538 2.04657 0.471043 C2.61508 0.520787 3.35377 0.693433 4.40319 0.940356 L4.50783 0.495626 Z M0.670083 0.312876 L0.380773 -0.040726 C-0.0819142 0.337836 -0.277591 0.867491 -0.368638 1.5131 C-0.457961 2.14648 -0.456875 2.97692 -0.456875 4.02879 L0 4.02879 L0.456875 4.02879 C0.456875 2.94858 0.457961 2.19519 0.536159 1.6407 C0.612633 1.09843 0.751997 0.836165 0.959394 0.666478 L0.670083 0.312876 Z M0 4.02879 L-0.456875 4.02879 L-0.456875 6.95279 L0 6.95279 L0.456875 6.95279 L0.456875 4.02879 L0 4.02879 Z M0 6.95279 L-0.456875 6.95279 C-0.456875 8.00466 -0.457961 8.83511 -0.368638 9.46849 C-0.277591 10.1141 -0.0819142 10.6437 0.380773 11.0223 L0.670083 10.6687 L0.959394 10.3151 C0.751997 10.1454 0.612633 9.88316 0.536159 9.34089 C0.457961 8.7864 0.456875 8.03301 0.456875 6.95279 L0 6.95279 Z M0.670083 10.6687 L0.395958 11.0342 C0.888802 11.4038 1.46223 11.4789 2.12622 11.4208 C2.77605 11.364 3.59073 11.1711 4.61248 10.9307 L4.50783 10.486 L4.40319 10.0412 C3.35377 10.2882 2.61508 10.4608 2.04657 10.5105 C1.49222 10.559 1.18237 10.4818 0.944208 10.3032 L0.670083 10.6687 Z M4.50783 10.486 L4.59743 10.934 L5.2066 10.8121 L5.117 10.3641 L5.0274 9.91612 L4.41823 10.038 L4.50783 10.486 Z M5.117 10.3641 L5.21825 10.8096 C5.88288 10.6586 6.4157 10.5306 6.83749 10.3735 C7.26961 10.2125 7.61818 10.0095 7.8975 9.69031 L7.55367 9.38946 L7.20983 9.0886 C7.06273 9.25672 6.86305 9.38883 6.51849 9.51719 C6.16359 9.64941 5.69128 9.76508 5.01575 9.91861 L5.117 10.3641 Z M7.55367 9.38946 L7.93381 9.64289 C8.24114 9.1819 8.37604 8.65956 8.37604 7.92746 L7.91917 7.92746 L7.46229 7.92746 C7.46229 8.53552 7.35353 8.86602 7.17352 9.13603 L7.55367 9.38946 Z" fill="#f45363"/><path transform="matrix(1 0 0 1 5.178 5.482)" d="M6.36185 -0.368426 C6.15837 -0.517642 5.87246 -0.473656 5.72324 -0.270179 C5.57402 -0.0667031 5.61801 0.21921 5.82149 0.368426 L6.09167 0 L6.36185 -0.368426 Z M5.82149 3.28657 C5.61801 3.43579 5.57402 3.7217 5.72324 3.92518 C5.87246 4.12866 6.15837 4.17264 6.36185 4.02343 L6.09167 3.655 L5.82149 3.28657 Z M7.61458 2.28438 C7.86691 2.28438 8.07146 2.07983 8.07146 1.8275 C8.07146 1.57517 7.86691 1.37063 7.61458 1.37063 L7.61458 1.8275 L7.61458 2.28438 Z M0 1.37063 C-0.252325 1.37063 -0.456875 1.57517 -0.456875 1.8275 C-0.456875 2.07983 -0.252325 2.28438 0 2.28438 L0 1.8275 L0 1.37063 Z M6.09167 0 C5.82149 0.368426 5.82146 0.368409 5.82145 0.368396 C5.82145 0.368398 5.82144 0.368391 5.82145 0.368396 C5.82146 0.368406 5.8215 0.368436 5.82157 0.368486 C5.82171 0.368587 5.82195 0.368768 5.82231 0.369028 C5.82301 0.369548 5.82415 0.370385 5.8257 0.37153 C5.82881 0.373821 5.83358 0.377345 5.8399 0.382035 C5.85253 0.391416 5.87137 0.405455 5.89551 0.423619 C5.94382 0.459965 6.01324 0.512726 6.09672 0.577651 C6.26416 0.707882 6.48585 0.885293 6.7062 1.07626 C6.92882 1.2692 7.13956 1.46697 7.29104 1.63864 C7.36722 1.72497 7.4188 1.79399 7.44887 1.84412 C7.4862 1.90633 7.46229 1.89284 7.46229 1.8275 L7.91917 1.8275 L8.37604 1.8275 C8.37604 1.64033 8.29502 1.47835 8.23241 1.374 C8.16255 1.25756 8.07135 1.14192 7.9762 1.03408 C7.78502 0.817407 7.53889 0.58876 7.30464 0.385745 C7.0681 0.180749 6.83292 -0.0073399 6.65771 -0.14362 C6.56985 -0.21195 6.49651 -0.267697 6.44487 -0.306545 C6.41904 -0.325978 6.39862 -0.341208 6.38449 -0.351695 C6.37742 -0.35694 6.37193 -0.361001 6.36812 -0.363811 C6.36621 -0.365217 6.36473 -0.366309 6.36368 -0.367081 C6.36315 -0.367467 6.36274 -0.367773 6.36243 -0.367997 C6.36228 -0.36811 6.36215 -0.368202 6.36205 -0.368273 C6.36201 -0.368309 6.36195 -0.368347 6.36193 -0.368365 C6.36188 -0.368398 6.36185 -0.368426 6.09167 0 Z M7.91917 1.8275 L7.46229 1.8275 C7.46229 1.76216 7.4862 1.74867 7.44887 1.81088 C7.4188 1.86101 7.36722 1.93003 7.29104 2.01636 C7.13956 2.18803 6.92882 2.3858 6.7062 2.57874 C6.48585 2.76971 6.26416 2.94712 6.09672 3.07735 C6.01324 3.14227 5.94382 3.19504 5.89551 3.23138 C5.87137 3.24954 5.85253 3.26358 5.8399 3.27297 C5.83358 3.27766 5.82881 3.28118 5.8257 3.28347 C5.82415 3.28462 5.82301 3.28545 5.82231 3.28597 C5.82195 3.28623 5.82171 3.28641 5.82157 3.28651 C5.8215 3.28656 5.82146 3.28659 5.82145 3.2866 C5.82144 3.28661 5.82145 3.2866 5.82145 3.2866 C5.82146 3.28659 5.82149 3.28657 6.09167 3.655 C6.36185 4.02343 6.36188 4.0234 6.36193 4.02337 C6.36195 4.02335 6.36201 4.02331 6.36205 4.02327 C6.36215 4.0232 6.36228 4.02311 6.36243 4.023 C6.36274 4.02277 6.36315 4.02247 6.36368 4.02208 C6.36473 4.02131 6.36621 4.02022 6.36812 4.01881 C6.37193 4.016 6.37742 4.01194 6.38449 4.0067 C6.39862 3.99621 6.41904 3.98098 6.44487 3.96155 C6.49651 3.9227 6.56985 3.86695 6.65771 3.79862 C6.83292 3.66234 7.0681 3.47425 7.30464 3.26926 C7.53889 3.06624 7.78502 2.83759 7.9762 2.62092 C8.07135 2.51308 8.16255 2.39744 8.23241 2.281 C8.29502 2.17665 8.37604 2.01467 8.37604 1.8275 L7.91917 1.8275 Z M7.61458 1.8275 L7.61458 1.37063 L0 1.37063 L0 1.8275 L0 2.28438 L7.61458 2.28438 L7.61458 1.8275 Z" fill="#f45363"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#f45363" }}>Sign out all other sessions</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "62.14px", width: "815.42px", height: "222.97px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "815.42px", height: "40.21px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "260px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Device</p>
          </div>
          <div style={{ width: "160px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Location</p>
          </div>
          <div style={{ width: "140px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>IP address</p>
          </div>
          <div style={{ width: "120px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Last active</p>
          </div>
          <div style={{ width: "135.42px", height: "40.21px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Status</p>
          </div>
        </div>
        <div style={{ width: "815.42px", height: "45.69px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "260px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DeviceLaptop size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>MacBook Pro · Chrome 128</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>macOS 15.1</p>
              </div>
            </div>
          </div>
          <div style={{ width: "160px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <MapPin size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Brooklyn, NY</p>
            </div>
          </div>
          <div style={{ width: "140px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>73.211.4.18</p>
          </div>
          <div style={{ width: "120px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Now</p>
          </div>
          <div style={{ width: "135.42px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>This device</p>
            </div>
          </div>
        </div>
        <div style={{ width: "815.42px", height: "45.69px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "260px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DeviceMobile size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>iPhone 16 · Montra app</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>iOS 19.0</p>
              </div>
            </div>
          </div>
          <div style={{ width: "160px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <MapPin size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Brooklyn, NY</p>
            </div>
          </div>
          <div style={{ width: "140px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>172.58.32.9</p>
          </div>
          <div style={{ width: "120px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>35 min ago</p>
          </div>
          <div style={{ width: "135.42px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Revoke</p>
            </div>
          </div>
        </div>
        <div style={{ width: "815.42px", height: "45.69px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "260px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DeviceLaptop size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Windows 11 · Edge 127</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Studio front desk</p>
              </div>
            </div>
          </div>
          <div style={{ width: "160px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <MapPin size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Jersey City, NJ</p>
            </div>
          </div>
          <div style={{ width: "140px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>24.104.77.2</p>
          </div>
          <div style={{ width: "120px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 06</p>
          </div>
          <div style={{ width: "135.42px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>Revoke</p>
            </div>
          </div>
        </div>
        <div style={{ width: "815.42px", height: "45.69px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "260px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <World size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Unknown · Firefox 129</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Blocked at 2FA step</p>
              </div>
            </div>
          </div>
          <div style={{ width: "160px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <MapPin size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Lagos, NG</p>
            </div>
          </div>
          <div style={{ width: "140px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>102.89.44.130</p>
          </div>
          <div style={{ width: "120px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 04</p>
          </div>
          <div style={{ width: "135.42px", height: "44.78px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#fff1f2", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e5384a"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e5384a" }}>Blocked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
