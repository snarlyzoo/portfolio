import type { Project } from "../types";

export const turfWars: Project = {
  slug: "turf-wars",
  title: "Turf Wars",
  tagline: "Parallel-Luau showcase",
  oneLiner:
    "Team PvP with alternating build and combat phases, a multi-threaded projectile simulation, and atom-synced shared state.",
  accent: "indigo",
  category: "game",
  youtubeId: "pgfxdYQ3mBM",
  repoUrl: "https://github.com/snarlyzoo/turf-wars",
  themes: ["networking", "performance", "ui"],
  overview:
    "Turf Wars is a competitive two-team game fought over a grid of turf lines. Players cycle through Build phases (place blocks to defend territory) and Combat phases (fire slingshot projectiles to break enemy blocks and earn turf per kill). Its headline system is a projectile simulation that runs across a pool of parallel-Luau Actors; underneath sit server-authoritative hit validation, a spring viewmodel, and Charm atoms that replicate shared state to every client with no per-player sync code.",
  systems: [
    {
      name: "Parallel-Luau projectile simulation",
      summary: "a pool of eight Actors, load-balanced by a priority queue",
      body: "ProjectileCaster runs projectile physics across eight Roblox Actors. A PriorityQueue routes each new cast to whichever Actor has the fewest active tasks, so load spreads evenly with zero extra coroutines. Each Actor runs a //!native Simulation that steps projectiles in parallel on PostSimulation and resolves raycasts, impacts and visuals on PreRender. Because the physics uses plain kinematic equations, every trajectory is deterministic and reproducible on both client and server.",
    },
    {
      name: "Server-authoritative hit validation",
      summary: "kinematic replay rejects impossible hits",
      body: "ProjectileActionService re-simulates each shot server-side using the same kinematic formulas. On a hit remote it looks up the stored projectile record by timestamp, recomputes the expected position at the elapsed time, and rejects any hit that deviates beyond a size-derived error margin. It also rate-limits fire events against a config RPM with a ping tolerance, and validates the firing origin against the character — the same record-and-replay pattern competitive shooters use for lag compensation.",
    },
    {
      name: "Charm atom state sync",
      summary: "mutate on the server, every client updates",
      body: "Game phase, turf state and round info live in Charm atoms in shared. Whenever the server mutates them, charm-sync replicates the change to every client automatically — there is no per-player sync code. React reads the same atoms through useAtom, so the HUD is always a direct reflection of authoritative state.",
    },
    {
      name: "Viewmodel & camera feel",
      summary: "a generated R6 arms rig with three composed springs",
      body: "ViewmodelComponent generates an R6 rig from the player's own avatar, strips everything but the arms, assigns a Viewmodel collision group and parents it to the camera. Three Ripple motions compose multiplicatively each frame — move bob scaled by speed, camera sway clamped to a small angle, and a jump/land spring — and a Motor6D joint welds the equipped tool to the viewmodel torso after the equip animation has begun.",
    },
    {
      name: "Round & phase state machine",
      summary: "promise-driven session lifecycle",
      body: "RoundManager drives the full session — WaitingForPlayers → Intermission → multi-phase Round → PostRound — from a phase sequence that alternates Build and Combat with per-phase resource grants. Transitions use cancellable promise timers, state is pushed to clients through atoms, and the post-round stage animates the winning players with award data.",
    },
    {
      name: "Tilt replication over unreliable remotes",
      summary: "drop-tolerant 10 Hz character lean",
      body: "Each character accumulates a tilt angle from the camera and fires it at 10 Hz over an unreliable remote — drop-tolerant by design — only when the delta is meaningful. The server re-broadcasts to other clients, which lazily build a tilt component per remote character on first event and clean it up on destroy, sidestepping character-load ordering problems.",
    },
  ],
  fileTree: [
    {
      name: "src",
      kind: "dir",
      children: [
        {
          name: "shared",
          kind: "dir",
          children: [
            {
              name: "modules/ProjectileCaster",
              kind: "dir",
              note: "parallel-Luau projectile system",
              children: [
                { name: "index.ts", kind: "file", note: "Actor pool + priority-queue routing" },
                { name: "Simulation.ts", kind: "file", note: "//!native, runs in parallel" },
              ],
            },
            { name: "state/", kind: "dir", note: "Charm atoms, auto-synced to clients" },
          ],
        },
        {
          name: "client",
          kind: "dir",
          children: [
            {
              name: "components/characters/addons",
              kind: "dir",
              children: [
                {
                  name: "ViewmodelComponent.ts",
                  kind: "file",
                  note: "generated arms rig + spring feel",
                },
              ],
            },
            { name: "components/tools", kind: "dir", note: "abstract tool → slingshot / hammer" },
            { name: "ui", kind: "dir", note: "React HUD bound to atoms" },
          ],
        },
        {
          name: "server",
          kind: "dir",
          children: [
            {
              name: "services/remotes/ProjectileActionService.ts",
              kind: "file",
              note: "kinematic-replay hit validation",
            },
            { name: "services/RoundManager.ts", kind: "file", note: "phase state machine" },
          ],
        },
      ],
    },
  ],
  keyFiles: [
    {
      label: "Actor pool + routing",
      repoPath: "src/shared/modules/ProjectileCaster/index.ts",
      language: "typescript",
      codePath: "turf-wars/ProjectileCaster.index.ts.txt",
    },
    {
      label: "Parallel simulation (//!native)",
      repoPath: "src/shared/modules/ProjectileCaster/Simulation.ts",
      language: "typescript",
      codePath: "turf-wars/Simulation.ts.txt",
    },
    {
      label: "Server hit validation",
      repoPath: "src/server/services/remotes/ProjectileActionService.ts",
      language: "typescript",
      codePath: "turf-wars/ProjectileActionService.ts.txt",
    },
    {
      label: "Viewmodel component",
      repoPath: "src/client/components/characters/addons/ViewmodelComponent.ts",
      language: "typescript",
      codePath: "turf-wars/ViewmodelComponent.ts.txt",
    },
  ],
  showcases: [
    { caption: "Projectile trails arcing across the map", system: "Projectiles" },
    { caption: "Block place / break particle bursts", system: "Building" },
    { caption: "Turf-capture color sweep", system: "Turf system" },
    { caption: "Slingshot charge glow", system: "Game feel" },
  ],
};
