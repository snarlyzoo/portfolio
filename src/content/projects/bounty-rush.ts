import type { Project } from "../types";

export const bountyRush: Project = {
  slug: "bounty-rush",
  title: "Bounty Rush",
  tagline: "Movement FPS",
  oneLiner:
    "First-person shooter built on a full movement system — wall-run, slide, crouch, air control — with hitscan, projectile and shotgun weapons.",
  accent: "teal",
  category: "game",
  youtubeId: "UClI6LMGzBE",
  repoUrl: "https://github.com/snarlyzoo/bounty-rush",
  themes: ["movement", "ui", "performance"],
  overview:
    "Bounty Rush is the most technically involved project here — a fast first-person shooter where the whole feel comes from movement. Players walk, run, crouch, slide (with slope-aware slide jumps), wall-run and air-control, then fight with hitscan firearms, projectile firearms and spread shotguns. The movement is a clean ten-state machine; the weapons are a generic inheritance tree; the effects run through a self-tuning object pool. Built in roblox-ts on Flamework, with a React HUD.",
  systems: [
    {
      name: "Ten-state movement state machine",
      summary: "wall-run, slide, crouch and air control as discrete states",
      body: "MovementStateMachine drives ten states — None, Walking, Running, Jumping, Freefall, Landed, Crouched, CrouchFall, Sliding and WallRunning — through a single enter(prev) → update(dt) → exit(next) interface. Each state gets a shared context object (character, sensors, callbacks) and owns only its own logic; the character component just exposes raycasts, speed checks and impulses. Wall-running projects the player's velocity onto the wall plane (removing the normal component) so forward momentum is preserved, and a depth counter guards against transition recursion.",
    },
    {
      name: "Dynamic capsule collider",
      summary: "the hitbox resizes per state",
      body: "The character runs on a custom capsule (cylinder plus two spheres) rather than the default humanoid. Crouching and sliding physically shrink the cylinder and retune the Motor6D welds with short tweens, while the camera offset tweens in lockstep so the POV shift feels physical. Ground, ceiling and wall detection are manual spherecasts and raycasts — wall-running only triggers once a surface is confirmed truly vertical.",
    },
    {
      name: "Camera tilt for wall-running",
      summary: "frame-rate-independent roll",
      body: "Entering a wall-run tweens a NumberValue to ±15°; the render loop simply reads that value and rolls the camera CFrame each frame. Decoupling the tween from the render step keeps the tilt smooth at any frame rate, and a matching tween back to zero rolls out cleanly whether the player lands or falls off the wall.",
    },
    {
      name: "Weapon inheritance tree",
      summary: "generics from abstract weapon down to shotgun",
      body: "Weapons use abstract generics at every level — WeaponClientComponent → FirearmClientComponent → Hitscan / Projectile / Shotgun — so type safety flows all the way to the concrete classes. One fire loop covers single, burst and automatic modes; the shotgun adds per-pellet spread within a cone and applies recoil as an impulse. Character and viewmodel animation tracks play on both animators at once.",
    },
    {
      name: "Self-tuning VFX pool",
      summary: "grows under burst fire, shrinks when idle",
      body: "WeaponVFXManager pools the Attachment instances used as beam endpoints. The pool auto-grows when exhausted and auto-shrinks when usage drops, targeting peak-active plus a buffer as its floor so it never thrashes during burst-fire weapons. Expired beam/attachment pairs are released on Heartbeat, and a live metrics object (created, peak, active, size) makes the pool tunable at runtime without code changes.",
    },
    {
      name: "Spring-physics viewmodel",
      summary: "bob, sway and land springs composed per frame",
      body: "Viewmodel is a standalone class that owns three Ripple springs — sinusoidal walk bob scaled by speed, camera sway clamped to a max angle, and a land/jump spring that tilts forward on freefall and snaps back on landing. They compose multiplicatively each frame against the camera CFrame, and a Motor6D joint welds the equipped weapon to the viewmodel torso.",
    },
  ],
  fileTree: [
    {
      name: "src",
      kind: "dir",
      children: [
        {
          name: "client",
          kind: "dir",
          children: [
            {
              name: "classes/movement",
              kind: "dir",
              note: "the movement system",
              children: [
                {
                  name: "MovementStateMachine.ts",
                  kind: "file",
                  note: "enter → update → exit, recursion-guarded",
                },
                {
                  name: "states/",
                  kind: "dir",
                  note: "one class per state (Sliding, WallRunning…)",
                },
              ],
            },
            {
              name: "classes/Viewmodel.ts",
              kind: "file",
              note: "spring-driven first-person arms",
            },
            {
              name: "controllers",
              kind: "dir",
              children: [
                {
                  name: "InputController.ts",
                  kind: "file",
                  note: "InputContext API → typed Signals",
                },
                {
                  name: "WeaponVFXManager.ts",
                  kind: "file",
                  note: "self-tuning attachment pool",
                },
              ],
            },
            { name: "ui", kind: "dir", note: "React HUD — crosshair, ammo, health" },
          ],
        },
        {
          name: "shared",
          kind: "dir",
          note: "weapon config + networking contracts",
        },
        {
          name: "server",
          kind: "dir",
          note: "authoritative hit validation & rate limiting",
        },
      ],
    },
  ],
  keyFiles: [
    {
      label: "Movement state machine",
      repoPath: "src/client/classes/movement/MovementStateMachine.ts",
      language: "typescript",
      codePath: "bounty-rush/MovementStateMachine.ts.txt",
    },
    {
      label: "Wall-running state",
      repoPath: "src/client/classes/movement/states/WallRunningState.ts",
      language: "typescript",
      codePath: "bounty-rush/WallRunningState.ts.txt",
    },
    {
      label: "Self-tuning VFX pool",
      repoPath: "src/client/controllers/WeaponVFXManager.ts",
      language: "typescript",
      codePath: "bounty-rush/WeaponVFXManager.ts.txt",
    },
    {
      label: "Spring viewmodel",
      repoPath: "src/client/classes/Viewmodel.ts",
      language: "typescript",
      codePath: "bounty-rush/Viewmodel.ts.txt",
    },
  ],
  showcases: [
    { caption: "Wall-run with camera tilt + speed lines", system: "Movement" },
    { caption: "Slide → slide-jump chain", system: "Movement" },
    { caption: "Muzzle flash, tracers & hit markers", system: "Weapons / VFX" },
    { caption: "First-person viewmodel sway", system: "Game feel" },
  ],
};
