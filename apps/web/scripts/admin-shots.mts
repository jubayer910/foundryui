/**
 * Admin screenshots on phones (and a desktop regression set), LOCAL dev server only.
 *
 *   cd apps/web
 *   npx next dev -p 3350                                  # in another shell, .dev.vars lists owner@reports.test in ADMIN_EMAILS
 *   node scripts/admin-shots.mts <label> [widths] [filter]  # e.g. `after 375,390` or `before 1440`
 *
 * Writes .qa/admin-mobile/<label>/<width>/<route>-top.png and -scroll.png. Mobile widths use an iPhone UA,
 * deviceScaleFactor 3, isMobile and hasTouch; 1440 is a plain desktop viewport.
 */
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { ROUTES, SHEET_SHOTS, session } from "./admin-routes.mts";

const require = createRequire(import.meta.url);
const puppeteer = require("/Users/muhammadjubayer/Documents/FoundryUI/packages/figma-library/export/node_modules/puppeteer-core");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.ADMIN_BASE ?? "http://localhost:3350";
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1";

const [label = "shots", widthArg = "360,375,390,430", filter = ""] = process.argv.slice(2);
const widths = widthArg.split(",").map(Number);

const cookie = await session(BASE);
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--hide-scrollbars"] });
try {
  for (const w of widths) {
    const dir = `.qa/admin-mobile/${label}/${w}`;
    mkdirSync(dir, { recursive: true });
    const page = await browser.newPage();
    const mobile = w < 1000;
    if (mobile) await page.setUserAgent(UA);
    await page.setViewport({ width: w, height: mobile ? (w >= 430 ? 932 : w >= 390 ? 844 : w >= 375 ? 812 : 740) : 900, deviceScaleFactor: mobile ? 3 : 1, isMobile: mobile, hasTouch: mobile });
    await page.setCookie(...cookie.split("; ").map((c) => ({ name: c.split("=")[0], value: c.slice(c.indexOf("=") + 1), url: BASE })));
    for (const r of [...ROUTES, ...(mobile ? SHEET_SHOTS : [])]) {
      if (filter && !r.name.includes(filter)) continue;
      if (r.anon) await page.deleteCookie(...(await page.cookies()));
      await page.goto(BASE + r.path, { waitUntil: "networkidle0", timeout: 120000 }).catch(() => {});
      await page.evaluate(() => document.fonts.ready);
      await new Promise((res) => setTimeout(res, 250));
      if (r.click) {
        for (const sel of r.click) {
          await page.click(sel).catch(() => console.log(`  ${r.name}: no ${sel}`));
          await new Promise((res) => setTimeout(res, 450));
        }
      }
      await page.screenshot({ path: `${dir}/${r.name}-top.png` });
      if (!r.click) {
        await page.evaluate(() => window.scrollTo(0, Math.min(document.documentElement.scrollHeight, window.innerHeight * 1.5)));
        await new Promise((res) => setTimeout(res, 250));
        await page.screenshot({ path: `${dir}/${r.name}-scroll.png` });
      }
      if (r.anon) await page.setCookie(...cookie.split("; ").map((c) => ({ name: c.split("=")[0], value: c.slice(c.indexOf("=") + 1), url: BASE })));
      console.log(`${w} ${r.name}`);
    }
    await page.close();
  }
} finally {
  await browser.close();
}
