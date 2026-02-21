import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'fana-naturals',
  title: 'Fana Naturals CMS',
  projectId: 'cmz2cc1a',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
