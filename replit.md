# Fana Naturals - Corporate Website

## Overview
Premium corporate website for Fana Naturals, a Canadian beekeeping company established in 1989. The site showcases their dual business of high-quality hive products and professional beekeeping equipment. Uses Sanity CMS for content management with a headless architecture.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Express.js (API routes + Sanity proxy)
- **CMS**: Sanity Studio (built as static files, served at /admin)
- **Routing**: wouter v3
- **Data Fetching**: TanStack React Query

## Key Technical Decisions
- Sanity Studio is pre-built as static files and served at `/admin` to avoid the 10MB+ bundle loading issue in Vite dev mode
- A server-side proxy + injected fetch/XHR interceptor handles CORS for the Studio without requiring Sanity CORS origin configuration
- `useCdn: false` on the server-side Sanity client ensures content updates appear immediately
- `staleTime: 30s` + `refetchOnWindowFocus: true` on the frontend ensures fresh content

## Project Structure
```
client/src/           - React frontend
  pages/              - Page components (home, about, products, harvest, industry, privacy, terms)
  components/         - Shared UI components (Header, Footer)
  lib/                - Query client config
server/               - Express backend
  index.ts            - Server entry, proxy setup, studio serving
  routes.ts           - API routes for Sanity data
  sanityClient.ts     - Sanity client configuration
  static.ts           - Production static file serving
  vite.ts             - Vite dev server integration
sanity/schemas/       - Sanity CMS schemas (siteSettings, pageContent, service, testimonial)
sanity.config.ts      - Sanity Studio configuration
sanity.cli.ts         - Sanity CLI configuration
api/serverless.ts     - Vercel serverless function adapter
vercel.json           - Vercel deployment configuration
dist/studio/          - Built Sanity Studio (generated)
```

## Environment Variables
- `SANITY_PROJECT_ID` - Sanity project ID (cmz2cc1a)
- `SANITY_DATASET` - Sanity dataset (production)
- `SANITY_STUDIO_PROJECT_ID` - For Sanity Studio build
- `SANITY_STUDIO_DATASET` - For Sanity Studio build

## Build & Deploy
- `npm run dev` - Development server on port 5000
- `npm run build` - Build client, Sanity Studio, and server for production
- `npm start` - Run production build
- Deploy to Vercel: Push to GitHub, connect to Vercel, set env vars

## Recent Changes
- 2026-02-21: Set up Sanity CMS integration with schemas, API routes, and Studio at /admin
- 2026-02-21: Implemented server-side proxy to bypass CORS for Sanity Studio
- 2026-02-21: Added Vercel deployment configuration
- 2026-02-21: Changed to useCdn:false and reduced staleTime for immediate content updates

## User Preferences
- Luxury brand aesthetic with serif typography
- Cinematic imagery style
- Canadian beekeeping heritage focus
