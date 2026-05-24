// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// condense.com.au is an apex domain served at the root, so no `base` is set.
// `build.format: 'file'` emits /about.html (not /about/index.html) to mirror the
// legacy Jekyll URL scheme exactly and preserve 15 years of inbound links.
export default defineConfig({
  site: 'https://condense.com.au',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // The legacy /about, /services, /portfolio, /awards, /contact pages all
      // canonicalise to the homepage, so only advertise the canonical root URL.
      filter: (page) =>
        !/\/(about|services|portfolio|awards|contact)\/?$/.test(page),
    }),
  ],
});
