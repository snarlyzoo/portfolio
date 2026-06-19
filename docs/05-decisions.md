# 05 — Decisions log / hard constraints

Locked decisions from the planning sessions (June 2026). Treat as constraints unless the user revisits them.

## Direction
- **General portfolio**, not a single-job application. Remove "Relevance to Position", "Coverage vs. Job Requirements" matrix, and any gaps/weaknesses list.
- **Visual-first; code is the deeper layer.** Driven by rejection feedback that the gap was presentation/visual polish, not technical skill, and that non-programmers often decide. See [00-overview.md](00-overview.md).

## Site / build
- **Completely fresh visual design.** Do not reuse the old dark/cyan terminal aesthetic.
- Fresh **Next.js (App Router) + TypeScript + Tailwind** scaffold; reuse proven patterns (Shiki code rendering, structured content) but not the old styling.
- Deploy on **Vercel**. Repo: `github.com/snarlyzoo/portfolio`.

## Content / visuals
- **No box-and-line system diagrams** (rejected as cluttered).
- **No AI-generated art** (undercuts credibility with a Roblox-literate audience).
- Per project: YouTube demo (kept) + real screenshots + system clips/GIFs + annotated file tree + full key files & curated code highlights.
- Show **full key files** (hand-picked), not the whole codebase.

## Lineup
- 4 games (Turf Wars, Bounty Rush, Slingmasters, Brickbattle Golf) + `rbxts-gizmos` (open source).
- `brickbattle-turf-wars` excluded for now; add once it has real gameplay.

## Code licensing / protection
- **MIT** license on shown code. Repo gets a `LICENSE` file.
- Visible footer notice + small per-code-block notice.
- **Auto-attribution copy button**: copying a snippet also copies `// Source: <domain> · © 2026 SnarlyZoo · MIT`.
- Note: technical copy-prevention is futile; protection is legal (license) + social (attribution).

## Repos
- **All project repos are public** under `github.com/snarlyzoo/`. The old "private repo / dead link" handling is obsolete.

## Assets
- **DIY + free Roblox Creator Store / marketplace** assets. No artist collaboration for now.

## Phasing
- **Phase 1 = website only, no game edits.** **Phase 2 = drop in showcases after in-game polish.** In-game polish plan in [03-project-polish-plans.md](03-project-polish-plans.md).
