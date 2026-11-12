#!/usr/bin/env node
/**
 * Tell IndexNow search engines (Bing, Yandex, Seznam, Naver) that URLs changed, so new
 * guides are fetched in minutes instead of days. Run after a deploy, never before:
 *   node scripts/indexnow.mjs /blog/new-post /categories/tables
 *   node scripts/indexnow.mjs --all-posts      (blog index + every guide)
 * The key file public/033289766aa516cbcd0b04faf0bc32fb.txt proves ownership of ingotui.com.
 */
import { posts } from "./indexnow-posts.mjs";

const HOST = "ingotui.com";
const KEY = "033289766aa516cbcd0b04faf0bc32fb";
const args = process.argv.slice(2);
const paths = args.includes("--all-posts") ? ["/blog", ...posts.map((s) => "/blog/" + s)] : args.filter((a) => a.startsWith("/"));
if (!paths.length) {
  console.log("usage: node scripts/indexnow.mjs /path [/path ...] | --all-posts");
  process.exit(1);
}
const urlList = [...new Set(paths)].map((p) => "https://" + HOST + p);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: "https://" + HOST + "/" + KEY + ".txt", urlList }),
});
console.log("IndexNow", res.status, res.statusText, "for", urlList.length, "URLs");
