// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import constants from './src/data/constants.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: constants.siteUrl,
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory'
  }
});