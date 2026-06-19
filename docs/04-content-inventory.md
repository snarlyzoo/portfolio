# 04 — Content inventory

Lineup: **4 games + `rbxts-gizmos`**. `brickbattle-turf-wars` is intentionally excluded for now (future flagship — no gameplay yet).

> **Repo URLs:** all repos were transferred to the `github.com/snarlyzoo/` account and made public. Exact slugs/casing below are best-known from the prior `cmmiller26` repos — **verify each URL** during the build (GitHub redirects from the old account, but use canonical `snarlyzoo` URLs). Local copies live in `roblox/<name>/`.

> **YouTube IDs** carried over from the old site (`app/projects/[slug]/page.tsx`).

---

## Turf Wars — *parallel-Luau showcase*
- Repo: `github.com/snarlyzoo/Turf-Wars` · local `roblox/turf-wars` · video `pgfxdYQ3mBM`
- One-line: team PvP with alternating build/combat phases; parallel projectile sim; spring viewmodel; Charm atom state sync.
- Signature system: **ProjectileCaster — parallel Luau Actor pool** (8 `//!native` threads, `PriorityQueue` least-loaded routing, `PostSimulation`/`PreRender` `ConnectParallel` + `task.synchronize`).
- Supporting: server-authoritative hit validation (kinematic replay), spring viewmodel (3 composed Ripple springs), Charm + charm-sync state, round/phase state machine, tilt replication over Unreliable remotes.
- Files to feature: `src/shared/modules/ProjectileCaster/{index.ts,Simulation.ts}`, `src/server/services/remotes/ProjectileActionService.ts`, `ViewmodelComponent.ts`.

## Bounty Rush — *movement showcase (flashiest)*
- Repo: `github.com/snarlyzoo/bounty-rush` · local `roblox/bounty-rush` · video `UClI6LMGzBE`
- One-line: FPS with full movement (wall-run/slide/crouch/air control) + hitscan/projectile/shotgun weapons + VFX pool.
- Signature system: **10-state movement state machine** (`enter→update→exit`, shared context, recursion guard).
- Supporting: dynamic capsule collider, wall-run velocity projection + camera tilt, weapon inheritance tree (generics), VFX object pool (grow/shrink), `InputContext` signal decoupling, spring viewmodel.
- Files to feature: `src/client/classes/movement/MovementStateMachine.ts` + `states/`, `src/client/controllers/WeaponVFXManager.ts`, `src/client/classes/Viewmodel.ts`.

## Slingmasters — *networking + game-feel showcase*
- Repo: `github.com/snarlyzoo/slingmasters` · local `roblox/slingmasters` · video `oTWjUDXkKLI`
- One-line: turn-based 1v1 physics slingshot; multi-place; scripted camera; drag input; marching trajectory preview.
- Signature system: **server-time fast-forward projectile sync** (`startT = GetServerTimeNow() - timestamp`).
- Supporting: promise-based turn orchestration, drag→camera-FOV as power indicator, marching trajectory dots, multi-place (lobby/match) + `IMatchPlayer` (player/bot) polymorphism, spring health bar, off-screen indicator.
- Files to feature: `src/match/client/controllers/{MatchController,ShotInputController,ProjectileController,CameraController}.ts`, `src/match/client/ui/components/game/TrajectoryPreview.tsx`.

## Brickbattle Golf — *physics + modular-OOP showcase*
- Repo: `github.com/snarlyzoo/brickbattle-golf` · local `roblox/brickbattle-golf` · video `jHUarf_z-Tk`
- One-line: physics golf where the ball is also a weapon; terrain-aware physics; chargeable club with overcharge + homing.
- Signature system: **terrain-aware ball physics + homing** (per-frame drag `(v²·Cd + v·k)` over 6 terrain types; homing steering that counters gravity).
- **WRITE-UP IS STALE — update it:** the item system grew — `ItemComponent → WeaponItemComponent / ConsumableItemComponent → RocketLauncher, BloxyCola, GravityCoil, SteeringWheel, GolfClub`, plus `GolfCart`, `GolfHole`, mirrored client/server trees. This is the strongest "modular architecture" story in the portfolio.
- Supporting: swing HUD (power-meter overcharge shake, angle arc, preview), aim-mode camera offset, server knockback replication (client-applied for lag comp), `InputContext` enable/disable gating.
- Files to feature: `src/client/components/physics/GolfBallComponent.ts`, the `items/` component tree, `src/client/ui/components/golf-club/SwingPowerMeter.tsx`.

## rbxts-gizmos — *open-source / tooling showcase*
- Repo: `github.com/snarlyzoo/rbxts-gizmos` · npm `@rbxts/gizmos` (v1.2.0) · local `roblox/rbxts-gizmos`
- One-line: published debug-drawing library for Roblox — lines, rays, shapes, raycasts, paths, world-space text.
- Signature angle: **a shipped, versioned open-source library** (different category from the games). API design + DX.
- Supporting: **TS typings authored over a Luau implementation** (`src/index.d.ts` + `src/init.lua`), **adaptive `drawCone` geometry** (v1.2.0), and a "what it draws" API gallery. Dogfooded in `brickbattle-turf-wars`' debug-viz harness.
- Files to feature: `src/init.lua`, `src/index.d.ts`; install + usage snippet from its README.
