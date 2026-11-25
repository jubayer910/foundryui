/**
 * Coarse device, browser and OS classes from a user agent. Only these class names are stored (in stat_daily),
 * never the user agent itself.
 */

export type Device = "desktop" | "mobile" | "tablet";

export function deviceOf(ua: string): Device {
  if (/iPad|Tablet|PlayBook|Silk|Kindle/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return "tablet";
  if (/Mobi|iPhone|iPod|Android.*Mobile|Windows Phone/i.test(ua)) return "mobile";
  return "desktop";
}

export function browserOf(ua: string): string {
  if (/Edg(e|A|iOS)?\//.test(ua)) return "Edge";
  if (/OPR\/|Opera/.test(ua)) return "Opera";
  if (/SamsungBrowser\//.test(ua)) return "Samsung Internet";
  if (/YaBrowser\//.test(ua)) return "Yandex";
  if (/Vivaldi\//.test(ua)) return "Vivaldi";
  if (/Brave\//.test(ua)) return "Brave";
  if (/Firefox\/|FxiOS\//.test(ua)) return "Firefox";
  if (/Chrome\/|CriOS\//.test(ua)) return "Chrome";
  if (/Safari\//.test(ua) && /Version\//.test(ua)) return "Safari";
  return "Other";
}

export function osOf(ua: string): string {
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  if (/Android/.test(ua)) return "Android";
  if (/Windows/.test(ua)) return "Windows";
  if (/CrOS/.test(ua)) return "ChromeOS";
  if (/Mac OS X|Macintosh/.test(ua)) return "macOS";
  if (/Linux/.test(ua)) return "Linux";
  return "Other";
}

/** Two-letter country code, or "XX" when Cloudflare could not tell (Tor is "T1"). */
export function countryOf(code: string | null | undefined): string {
  const c = (code ?? "").toUpperCase();
  return /^[A-Z][A-Z0-9]$/.test(c) ? c : "XX";
}
