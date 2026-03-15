/**
 * Vercel serverless handler for /api/waitlist.
 * Forwards the request to the Express app so POST /api/waitlist is handled.
 * Reads body and sets req.body so Express receives it (Vercel req stream may not work with express.json).
 */
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { getApp } = require("../dist/index.cjs");

let appPromise = null;

function getAppPromise() {
  if (!appPromise) {
    appPromise = getApp();
  }
  return appPromise;
}

function readBody(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
    req.on("error", () => resolve({}));
  });
}

export default async function handler(req, res) {
  if (req.method === "POST" && !req.body) {
    req.body = await readBody(req);
  }
  const { app } = await getAppPromise();
  app(req, res);
}
