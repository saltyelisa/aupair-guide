import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Wenn du eine eigene Domain hast, trag sie hier ein (wichtig für SEO und Sitemap).
export default defineConfig({
  site: 'https://aupair-guide.netlify.app',
  integrations: [sitemap()],
});
