# 01 — Phase 1: website revamp (the next chat's work)

**Goal:** a brand-new, visual-first portfolio site with a **completely fresh look**. No game edits. Use existing assets (the four YouTube demos); leave clearly-marked placeholder slots for Phase 2 visual showcases.

## Design direction

- **Completely fresh visual identity.** Do NOT carry over the old dark/cyan "terminal" aesthetic from `snarlyzoo-portfolio`. Explore a new look at the start of Phase 1 (consider the `frontend-design` skill / a couple of mockup directions for the user to pick from before building).
- Must read as **polished and presentation-forward** to a non-programmer in the first five seconds — strong hero, confident typography, smooth motion, good spacing. Presentation quality is itself part of what's being demonstrated.
- Keep it tasteful and fast; motion should feel intentional, not gimmicky.

## Tech

- Fresh **Next.js (App Router) + TypeScript + Tailwind** scaffold. Clean slate for the new look.
- **Reuse proven patterns from the old site** (port, don't inherit the styling):
  - Code rendering via **Shiki** (Luau normalized to Lua — Shiki lacks Luau grammar).
  - Structured project content (the old site parsed `portfolio/*.md`; for the rebuild prefer typed content modules or MDX — decide early). The existing write-ups are solid source material.
- Deploy target: **Vercel**.
- All project repos are **public under `github.com/snarlyzoo/...`** — link freely, pull real code for "full key files" (verify exact repo URLs; see [04-content-inventory.md](04-content-inventory.md)).

## Information architecture

**Home**
- Visual hero (montage/reel or a strong hero treatment — no job-application framing).
- Project grid: strong thumbnails, hover/preview motion. 4 games + `rbxts-gizmos` as a distinct "open source / tooling" entry.
- Optional cross-cutting "what I build" themes section (server-authoritative networking, movement & physics, reactive UI, parallel/performance, dev tooling) — role-agnostic, NOT a job-requirements matrix.
- Remove: "Coverage vs. Job Requirements", "Relevance to Position", gaps/weaknesses list.

**Project page (visual-first order)**
1. Gameplay **video** (existing YouTube demo).
2. **Showcase gallery** — placeholder slots for Phase 2 GIFs/screenshots of UI & VFX. Build the component now; fill in Phase 2.
3. Short, punchy **overview**.
4. **Key systems** write-up (kept, trimmed of job framing).
5. **Annotated file tree** (the structural visual).
6. **Full key files + curated highlights** — Shiki-rendered, with MIT notice + auto-attribution copy button.
7. Repo link (now always public).

## Code protection (carry into the build)

- Add an **MIT `LICENSE`** to the repo.
- **Footer notice** + a small per-code-block notice.
- **Auto-attribution copy button**: copying any snippet also copies a header comment, e.g.
  `// Source: <site-domain> · © 2026 SnarlyZoo · MIT`
  (Use the deployed domain; current is `snarlyzoo-portfolio.vercel.app` unless a new domain is chosen.)

## Content tasks

- Port the existing project write-ups; **strip job-targeted framing**.
- **Update the Brickbattle Golf write-up** — the item system grew well beyond the old copy (rocket launcher, consumables: Bloxy Cola / Gravity Coil / Steering Wheel, golf cart, golf hole). See [04-content-inventory.md](04-content-inventory.md).
- Add the **`rbxts-gizmos`** entry (open-source library showcase).

## Definition of done (Phase 1)

- New site builds and deploys with a fresh design.
- All 5 entries present; no dead links; no job-application framing.
- Each project page has the visual-first structure with working **placeholder slots** for Phase 2 assets.
- Code viewer works with Shiki + MIT notice + auto-attribution copy button.
- The four existing gameplay videos are embedded.
