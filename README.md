<div align="center">

<img src="assets/logo.svg" alt="portfolio connected repos mark" width="120">

# `portfolio`

**abukix.dev. SRE learning platform and AI/ML engineering in public.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![Status](https://img.shields.io/badge/status-v0.1.0-yellow)

</div>

---

## What this is

The source for [abukix.dev](https://abukix.dev), a personal portfolio site. Built with Astro 7 and Tailwind 4, matching the stack and design tokens used by [`root`](https://github.com/corestratum/root).

The homepage links the public repos in the `abukix` family and states their maturity plainly. `basecamp` is architecture and roadmap only right now. This site says so instead of implying otherwise.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Stack

- [Astro 7](https://astro.build), no UI framework
- [Tailwind 4](https://tailwindcss.com), config-in-CSS at `src/styles/base.css`
- Deploy target: Cloudflare Pages
- Design tokens sourced from [`corestratum/brand`](https://github.com/corestratum/brand)

## Contributing

This is a personal site. Typo fixes and factual corrections are welcome via issue or PR; contributions to content or design are unlikely to be a fit.

## License

[MIT](LICENSE).

## 🤖 AI Assisted Development

This project is open-source and maintained by a human, but it heavily leverages
**Claude Code** as an AI development assistant to accelerate scaffolding,
refactoring, and testing. All code is human-reviewed and verified before merging.
