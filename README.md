# snarlyzoo-portfolio

The rebuilt SnarlyZoo portfolio — a **visual-first** showcase of systems-focused Roblox / roblox-ts work, with the deep code as a second layer for technical readers. Successor to the old `snarlyzoo-portfolio` site, with a completely fresh visual identity (Studio Bold / Deep Teal). Deploys on Vercel.

## Why this rebuild exists

After a job rejection, the studio's feedback was explicit: the technical/systems skill was already strong and never the issue — the gap was **visual polish, presentation, and completed games**, judged largely by **non-programmer reviewers**. This rebuild reorients the portfolio to be visual-first. See [docs/00-overview.md](docs/00-overview.md).

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- **Shiki** for server-side code highlighting (Luau normalized to Lua)
- Fonts: **Sora** (display) + **Inter** (body) via `next/font`
- Static export-friendly; deploys on **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered)
npm run lint
```

## Structure

```
src/
  app/
    layout.tsx              # fonts, metadata, Nav + Footer shell
    page.tsx               # home: hero, project grid, themes strip
    projects/[slug]/page.tsx  # visual-first project page (SSG)
  components/              # Nav, Footer, CodeBlock + CopyButton, FileTree,
                          # VideoEmbed, ShowcaseGallery, SystemCard, Reveal, home/*
  content/
    types.ts              # the typed Project model
    index.ts              # project registry + build-time code loader
    projects/*.ts         # one typed module per project (content, no job framing)
    code/<slug>/*.txt     # vendored real source files, rendered via Shiki
  lib/
    config.ts             # SITE_DOMAIN (single swap point), attribution header
    theme.ts              # accent palette tokens
    highlighter.ts        # cached Shiki highlighter
```

## Content

Five entries — 4 games + the open-source `rbxts-gizmos` library. Each project page follows the visual-first order: gameplay video → **Phase 2 showcase placeholder slots** → overview → key systems → annotated file tree → full key files (Shiki, with an MIT + auto-attribution copy button) → repo link.

To swap the domain to `snarlyzoo.dev` once it's live, change `SITE_DOMAIN` in [`src/lib/config.ts`](src/lib/config.ts) — it drives metadata, canonical URLs, and the copy-button attribution header.

## Code license

Code shown on the site is MIT (see [LICENSE](LICENSE)). Copying any snippet automatically prepends a source + attribution header.

## Planning docs

The research and decisions that drive this build live in [`docs/`](docs/) (overview, the two-phase plan, content inventory, and the hard-constraints decision log).
