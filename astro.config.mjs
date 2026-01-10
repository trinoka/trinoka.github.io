// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import constants from './src/data/constants.json' assert { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: constants.siteUrl,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});