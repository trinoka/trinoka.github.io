// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import constants from './src/data/constants.json' assert { type: 'json' };
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: constants.siteUrl,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    // Only include sitemap integration when indexing is allowed
    ...(constants.indexingAllowed ? [sitemap()] : [])
  ],
  build: {
    format: 'directory'
  }
});