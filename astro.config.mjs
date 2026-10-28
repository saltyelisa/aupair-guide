import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Wenn du eine eigene Domain hast, trag sie hier ein (wichtig für SEO und Sitemap).
export default defineConfig({
  site: 'https://aupair-guide.netlify.app',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'de', locales: { de: 'de-AT', en: 'en' } } }),
  ],
});
