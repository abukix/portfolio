// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// abukix.dev, JC Abucay's portfolio
// Site: https://abukix.dev
// Last verified: 2026-08 against Astro 7.x, Tailwind 4.x
//
// Stack:
//   - Pure Astro, no framework
//   - Tailwind 4 via @tailwindcss/vite plugin (config-in-CSS at src/styles/base.css)
//   - Layout: single-scroll editorial page, intentionally distinct from
//     /root's hero-plus-grid pattern
//   - Deploy: Cloudflare Pages

export default defineConfig({
  site: 'https://abukix.dev',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    format: 'directory',
  },
});
