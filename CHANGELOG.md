# Changelog

All notable changes to `portfolio` are documented in this file. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project follows semantic versioning.

## [Unreleased]

- Homepage narrative rebalanced: leads with the daily learning path (`learnix`, `katas`) before introducing `/root`/`basecamp` as the bigger project.
- Added `katas` to "Selected work".
- `/root`, `basecamp`, and `brand` links point at the `corestratum` org, and the homepage notes they moved there.

---

## [0.1.0] - 2026-08-01

Initial repository. The abukix.dev site: a single-scroll editorial homepage, no employer named, linking the 6 public repos with their real maturity stated plainly. Built with Astro 7 and Tailwind 4, sharing design tokens with /root via corestratum/brand but deliberately not reusing /root's layout.

### Added

- Astro 7 + Tailwind 4 scaffold, config-in-CSS at `src/styles/base.css`
- `BaseLayout`, `Header`, `Footer` components, minimal single-scroll layout
- Homepage: prose intro, pull-quote, and a plain "Selected work" list
- Deploy target: Cloudflare Pages
