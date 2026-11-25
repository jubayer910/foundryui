#!/usr/bin/env node
/**
 * Send every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver) in one request.
 * Bing feeds ChatGPT search and Copilot, and in November 2026 it had indexed almost none of ingotui.com,
 * so a full submission after big content changes helps AI assistants find the pages.
 *   node scripts/indexnow-sitemap.mjs            (live sitemap)
 * IndexNow accepts up to 10,000 URLs per request; run after a deploy, never before.
 */
const HOST = "ingotui.com";
const KEY = "033289766aa516cbcd0b04faf0bc32fb";
const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()))].filter((u) => u.startsWith(`https://${HOST}/`) || u === `https://${HOST}`);
if (!urlList.length) throw new Error("no URLs found in the sitemap");
for (let i = 0; i < urlList.length; i += 10000) {
  const chunk = urlList.slice(i, i + 10000);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: chunk }),
  });
  console.log("IndexNow", res.status, res.statusText, "for", chunk.length, "URLs");
}
