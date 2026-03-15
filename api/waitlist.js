/**
 * Vercel serverless handler for /api/waitlist.
 * Forwards the request to the Express app so POST /api/waitlist is handled.
 */
const { getApp } = require("../dist/index.cjs");

let appPromise = null;

function getAppPromise() {
  if (!appPromise) {
    appPromise = getApp();
  }
  return appPromise;
}

module.exports = async function handler(req, res) {
  const { app } = await getAppPromise();
  app(req, res);
};
