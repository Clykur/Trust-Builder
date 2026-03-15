/**
 * Vercel serverless handler for /api/waitlist.
 * Forwards the request to the Express app so POST /api/waitlist is handled.
 * Uses createRequire because package.json has "type": "module" (ESM) and dist/index.cjs is CJS.
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

export default async function handler(req, res) {
  const { app } = await getAppPromise();
  app(req, res);
}
