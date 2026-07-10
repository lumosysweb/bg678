import https from "node:https";

const HOST = "diuwin.in.net";
const KEY = "08efcab35796a50ca6b5ce108a034e5a";
const URLS = [
  "",
  "/login",
  "/about",
  "/support",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
  "/responsible-gaming",
  "/disclaimer",
].map((path) => `https://${HOST}${path}`);

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: URLS,
});

const req = https.request(
  {
    hostname: "api.indexnow.org",
    path: "/indexnow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload),
    },
  },
  (res) => {
    console.log(`IndexNow response: ${res.statusCode}`);
    res.on("data", () => {});
    res.on("end", () => process.exit(res.statusCode && res.statusCode < 300 ? 0 : 1));
  }
);

req.on("error", (err) => {
  console.error("IndexNow submission failed:", err.message);
  process.exit(1);
});

req.write(payload);
req.end();
