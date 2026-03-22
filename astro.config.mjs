// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import customSitemap from './src/integrations/sitemap.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://wizyquiz.com',
  base: '/',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  integrations: [react(), customSitemap()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
