import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sanityClient, urlFor } from "./sanityClient";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.use("/api/sanity", (_req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    res.removeHeader("ETag");
    next();
  });

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

  return httpServer;
}
