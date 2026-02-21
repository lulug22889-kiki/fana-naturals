import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import { createProxyMiddleware } from "http-proxy-middleware";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

const projectId = "cmz2cc1a";
const sanityToken = process.env.SANITY_API_TOKEN || "";

function addSanityAuth(proxyReq: any) {
  if (sanityToken) {
    proxyReq.setHeader("Authorization", `Bearer ${sanityToken}`);
  }
}

app.use(
  "/sanity-proxy/api",
  createProxyMiddleware({
    target: `https://${projectId}.api.sanity.io`,
    changeOrigin: true,
    pathRewrite: { "^/sanity-proxy/api": "" },
    timeout: 30000,
    proxyTimeout: 30000,
    on: {
      proxyReq: addSanityAuth,
      error: (err: any, _req: any, res: any) => {
        if (res.writeHead) {
          res.writeHead(504, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Proxy timeout" }));
        }
      },
    },
  })
);

app.use(
  "/sanity-proxy/cdn",
  createProxyMiddleware({
    target: `https://${projectId}.apicdn.sanity.io`,
    changeOrigin: true,
    pathRewrite: { "^/sanity-proxy/cdn": "" },
    timeout: 30000,
    proxyTimeout: 30000,
    on: {
      proxyReq: addSanityAuth,
      error: (err: any, _req: any, res: any) => {
        if (res.writeHead) {
          res.writeHead(504, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Proxy timeout" }));
        }
      },
    },
  })
);

app.use(
  "/sanity-proxy/global-api",
  createProxyMiddleware({
    target: "https://api.sanity.io",
    changeOrigin: true,
    pathRewrite: { "^/sanity-proxy/global-api": "" },
    timeout: 30000,
    proxyTimeout: 30000,
    on: {
      proxyReq: addSanityAuth,
      error: (err: any, _req: any, res: any) => {
        if (res.writeHead) {
          res.writeHead(504, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Proxy timeout" }));
        }
      },
    },
  })
);

const studioPath = path.resolve(__dirname, "..", "dist", "studio");
app.use("/static", express.static(path.join(studioPath, "static")));

import fs from "fs";
const studioHtml = fs.readFileSync(path.join(studioPath, "index.html"), "utf-8");
const proxyScript = `<script>
(function() {
  var PID = "${projectId}";
  function rewrite(url) {
    if (typeof url !== "string") return null;
    if (url.indexOf(PID + ".api.sanity.io") !== -1) {
      var p = new URL(url);
      return "/sanity-proxy/api" + p.pathname + p.search;
    }
    if (url.indexOf(PID + ".apicdn.sanity.io") !== -1) {
      var p = new URL(url);
      return "/sanity-proxy/cdn" + p.pathname + p.search;
    }
    if (url.indexOf("api.sanity.io") !== -1 && url.indexOf(PID) === -1) {
      var p = new URL(url);
      return "/sanity-proxy/global-api" + p.pathname + p.search;
    }
    return null;
  }
  var origFetch = window.fetch.bind(window);
  window.fetch = function(input, init) {
    var url = typeof input === "string" ? input : (input instanceof URL ? input.toString() : (input && input.url ? input.url : ""));
    var proxied = rewrite(url);
    if (proxied) {
      if (typeof input === "string" || input instanceof URL) return origFetch(proxied, init);
      return origFetch(new Request(proxied, input), init);
    }
    return origFetch(input, init);
  };
  var OrigXHR = window.XMLHttpRequest;
  var origOpen = OrigXHR.prototype.open;
  OrigXHR.prototype.open = function(method, url) {
    var proxied = rewrite(typeof url === "string" ? url : url.toString());
    if (proxied) {
      return origOpen.apply(this, [method, proxied].concat(Array.prototype.slice.call(arguments, 2)));
    }
    return origOpen.apply(this, arguments);
  };
  var OrigES = window.EventSource;
  window.EventSource = function(url, opts) {
    var proxied = rewrite(typeof url === "string" ? url : url.toString());
    return new OrigES(proxied || url, opts);
  };
  window.EventSource.prototype = OrigES.prototype;
  window.EventSource.CONNECTING = OrigES.CONNECTING;
  window.EventSource.OPEN = OrigES.OPEN;
  window.EventSource.CLOSED = OrigES.CLOSED;
})();
</script>`;
const modifiedStudioHtml = studioHtml.replace("<head>", "<head>" + proxyScript);

app.use("/admin", (req, res, next) => {
  if (req.path === "/favicon.ico") {
    return res.sendFile(path.join(studioPath, "favicon.ico"));
  }
  if (!req.path.startsWith("/static")) {
    res.setHeader("Content-Type", "text/html");
    return res.send(modifiedStudioHtml);
  }
  next();
});

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
