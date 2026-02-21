import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { createProxyMiddleware } from "http-proxy-middleware";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const projectId = process.env.SANITY_PROJECT_ID || "cmz2cc1a";
const dataset = process.env.SANITY_DATASET || "production";

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = createImageUrlBuilder({ projectId, dataset });
function urlFor(source: any) {
  return builder.image(source);
}

app.use(
  "/sanity-proxy/api",
  createProxyMiddleware({
    target: `https://${projectId}.api.sanity.io`,
    changeOrigin: true,
    pathRewrite: { "^/sanity-proxy/api": "" },
  })
);

app.use(
  "/sanity-proxy/cdn",
  createProxyMiddleware({
    target: `https://${projectId}.apicdn.sanity.io`,
    changeOrigin: true,
    pathRewrite: { "^/sanity-proxy/cdn": "" },
  })
);

app.use(express.json());

app.get("/api/sanity/site-settings", async (_req, res) => {
  try {
    const settings = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
    if (settings?.logo) {
      settings.logoUrl = urlFor(settings.logo).url();
    }
    res.json(settings || {});
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/sanity/page/:pageId", async (req, res) => {
  try {
    const { pageId } = req.params;
    const page = await sanityClient.fetch(
      `*[_type == "pageContent" && pageId == $pageId][0]`,
      { pageId }
    );
    if (page?.heroImage) {
      page.heroImageUrl = urlFor(page.heroImage).width(1920).url();
    }
    if (page?.sections) {
      page.sections = page.sections.map((section: any) => ({
        ...section,
        imageUrl: section.image ? urlFor(section.image).width(1200).url() : null,
      }));
    }
    res.json(page || {});
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/sanity/services", async (_req, res) => {
  try {
    const services = await sanityClient.fetch(
      `*[_type == "service"] | order(order asc) {
        _id, title, slug, description, category, order, featured,
        "imageUrl": image.asset->url
      }`
    );
    res.json(services || []);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/sanity/testimonials", async (_req, res) => {
  try {
    const testimonials = await sanityClient.fetch(
      `*[_type == "testimonial"] | order(order asc) {
        _id, quote, author, role, rating, featured, order,
        "avatarUrl": avatar.asset->url
      }`
    );
    res.json(testimonials || []);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

const studioPath = path.resolve(__dirname, "..", "dist", "studio");
let modifiedStudioHtml = "";
try {
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
})();
</script>`;
  modifiedStudioHtml = studioHtml.replace("<head>", "<head>" + proxyScript);
} catch (e) {}

app.use("/admin", (req, res, next) => {
  if (req.path === "/favicon.ico") {
    return res.sendFile(path.join(studioPath, "favicon.ico"));
  }
  if (!req.path.startsWith("/static")) {
    if (modifiedStudioHtml) {
      res.setHeader("Content-Type", "text/html");
      return res.send(modifiedStudioHtml);
    }
    return res.status(404).send("Studio not built");
  }
  next();
});

export default app;
