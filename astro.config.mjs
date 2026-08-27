// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with your real domain once registered, then rebuild.
  // Used for canonical URLs, hreflang tags, sitemap and JSON-LD.
  site: 'https://royalfoundry.in',
  // The project lives on the Windows drive (/mnt/c) under WSL, where inotify
  // events do not propagate — without polling, `npm run dev` never hot-reloads.
  vite: {
    server: { watch: { usePolling: true, interval: 300 } },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', ml: 'ml-IN' },
      },
    }),
  ],
});
