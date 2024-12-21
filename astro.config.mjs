import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://devtalkspace.github.io',
  base: 'devtalkspace.github.io',
  integrations: [tailwind()]
});