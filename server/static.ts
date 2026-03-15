import express, { type Express } from "express";
import fs from "fs";
import path from "path";

const INDEX_HTML = "index.html";

function htmlHeaders(res: express.Response) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Content-Disposition", "inline");
  res.setHeader("X-Content-Type-Options", "nosniff");
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexPath = path.join(distPath, INDEX_HTML);
  const indexHtml = fs.readFileSync(indexPath, "utf-8");

  // Serve JS, CSS, images, etc. from dist/public (no index file – we serve HTML ourselves)
  app.use(
    express.static(distPath, {
      index: false,
      setHeaders: (res, filePath) => {
        if (String(filePath).endsWith(".html")) {
          htmlHeaders(res);
        }
      },
    })
  );

  // Serve index.html for / and every other non-file route with strict HTML headers
  // so the browser always renders the page instead of downloading
  app.get("*", (_req, res) => {
    htmlHeaders(res);
    res.send(indexHtml);
  });
}
