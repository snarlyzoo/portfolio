# 03 — Future in-game polish plans (NOT Phase 1)

Small, high-impact visual additions to the **existing** projects to make them *look* polished — "snippets," not new systems. Each project already has detailed systems; this is juice/feel/presentation. This work happens in the game repos later, feeding Phase 2 ([02](02-phase-2-showcase-refresh.md)). **Do not do this during the Phase 1 website build.**

## Highest-ROI move: post-processing + lighting (do first, every project)

~15 min per game in Studio, near-zero code, biggest perceived-quality jump:
- Post-processing: `BloomEffect`, `ColorCorrectionEffect`, `DepthOfFieldEffect`, `SunRaysEffect`, `Atmosphere`.
- Lighting: `Technology = Future`, a good skybox, ambient/clock tuning.
- Bonus: **SFX** on actions (free audio) — not visual but big presentation lift.

## Per-project quick wins

**Bounty Rush** (FPS / movement — flashiest to show)
- Bullet **tracers** (Trail), **muzzle flash** + impact spark bursts.
- **Hit markers** + damage numbers.
- **Screen shake** on fire; **speed lines / FOV kick** on slide & wall-run.

**Turf Wars**
- **Projectile trails**; block place/break **particle bursts**.
- **Turf-capture color sweep** VFX; slingshot **charge glow**.

**Slingmasters**
- Projectile **trail** + impact **explosion** particles.
- **Bloom on the trajectory dots** (already animated — make them glow); polished turn-transition UI flourish.

**Brickbattle Golf**
- Ball **trail**; terrain impact puffs (sand/grass).
- **Hole-success confetti/VFX**; rocket **explosion** particles; bloom on the existing power-meter shake.

## Division of labor

- **Codeable (in the repos):** Trails, particle-emitter setups, a reusable screen-shake module, hit markers / damage numbers, FOV kick / speed lines, UI juice (`UICorner`/`UIStroke`/`UIGradient`, hover/press states, tweened transitions).
- **User in Studio:** post-processing + lighting tuning, importing free VFX/UI/audio packs, capturing GIFs/screenshots.

## Asset strategy

DIY + **free Roblox Creator Store / marketplace** assets (search: "VFX pack", "particle pack", "UI kit", "GUI pack"). Audio: Roblox verified library + freesound.org (check license). No artist collaboration for now.
