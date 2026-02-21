import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}

export default defineConfig({
  name: 'fana-naturals',
  title: 'Fana Naturals CMS',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
