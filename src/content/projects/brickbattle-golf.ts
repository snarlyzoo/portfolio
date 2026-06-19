import type { Project } from "../types";

export const brickbattleGolf: Project = {
  slug: "brickbattle-golf",
  title: "Brickbattle Golf",
  tagline: "Physics & modular-OOP showcase",
  oneLiner:
    "Physics golf where the ball is also a weapon — terrain-aware ball physics, a chargeable club with overcharge and homing, and a deep item-component tree.",
  accent: "rose",
  category: "game",
  youtubeId: "jHUarf_z-Tk",
  repoUrl: "https://github.com/snarlyzoo/brickbattle-golf",
  themes: ["physics", "ui", "networking"],
  overview:
    "Brickbattle Golf is a physics-driven golf game where the ball is also a weapon — you swing around open terrain toward holes while knocking out other players. The club has multiple swing modes, configurable launch angles, an overcharge with a spread penalty, and a homing targeting system for skilled shots; terrain material changes the ball's drag and speed retention per surface. Its real story is architecture: a wide item-component tree where weapons, consumables, the golf cart and the hole all descend from one base, mirrored across client and server.",
  systems: [
    {
      name: "Modular item-component tree",
      summary: "one base, many items, mirrored client/server",
      body: "Every interactive item descends from an abstract ItemComponent, which splits into WeaponItemComponent and ConsumableItemComponent and then into concretes — RocketLauncher, BloxyCola, GravityCoil, SteeringWheel and the GolfClub — alongside standalone GolfCart and GolfHole components. The tree is mirrored across client and server, so each item owns its equip/unequip lifecycle, its input wiring through the InputController signal pattern, and its authoritative half on the server. Adding an item means adding a leaf, not editing a switch — this is the clearest demonstration of modular OOP in the portfolio.",
    },
    {
      name: "Terrain-aware ball physics",
      summary: "a custom drag force over six surface types",
      body: "The client GolfBallComponent applies a custom force every physics step instead of relying on default physics. Drag is a quadratic-plus-linear model — F = (v²·Cd + v·k) · mass against velocity — scaled by per-terrain multipliers. A ground raycast picks one of six terrain types, each with its own drag, damping and speed-retention values; landing in a sand trap applies its speed-retention penalty exactly once per surface transition rather than bleeding speed every frame.",
    },
    {
      name: "Homing steering that beats gravity",
      summary: "overcharge unlocks a cone-locked target",
      body: "When swing power passes the overcharge threshold, a cone check against players and dummies (dot-product plus a line-of-sight raycast) locks a homing target. The ball then steers toward it with a clamped turn rate and a strength that counters gravity, so the homing arc holds its line instead of sagging — a powerful shot that rewards committing to overcharge.",
    },
    {
      name: "Golf-club swing modes",
      summary: "aim vs. swing, charge-and-release, Golf vs. Melee",
      body: "GolfClubComponent runs two modes — Aim (hold RMB) and Swing (hold LMB) — each slowing walk speed and starting a PostSimulation loop that updates swing direction from the camera, computes power from held time, and decides Golf hit vs. Melee strike by range. Release applies the swing to the ball for local prediction, fires to the server, and adds a random yaw spread once power crosses the overcharge penalty point.",
    },
    {
      name: "Swing HUD with overcharge feedback",
      summary: "power meter that shakes, an angle arc, a live preview",
      body: "The HUD composes three parts: a SwingPowerMeter that turns orange past 100% and grows a red overcharge section, playing a looping useMotion shake when it triggers, with a terrain-color gradient behind it; a SwingAngleIndicator drawing a quarter-circle arc via a gradient ImageLabel with preset-angle buttons; and a GolfSwingPreview that switches between a homing-target billboard and a trajectory beam based on the current mode.",
    },
    {
      name: "Server-authoritative knockback",
      summary: "validated server-side, applied client-side for lag comp",
      body: "The server GolfBallComponent validates each hit by comparing actual ball velocity against the expected value before applying, then computes a knockback impulse and fires it to the hit player's own client to apply — lag-compensated displacement rather than a server-side shove — falling back to direct impulse for bots. Network ownership of the ball transfers to its owning player when assigned.",
    },
  ],
  fileTree: [
    {
      name: "src",
      kind: "dir",
      children: [
        {
          name: "client/components",
          kind: "dir",
          children: [
            {
              name: "items",
              kind: "dir",
              note: "the item tree (mirrored on the server)",
              children: [
                { name: "ItemComponent.ts", kind: "file", note: "abstract base — equip lifecycle" },
                { name: "GolfClubComponent.ts", kind: "file", note: "swing modes, overcharge, homing" },
                {
                  name: "weapons/",
                  kind: "dir",
                  note: "WeaponItemComponent → RocketLauncher",
                },
                {
                  name: "consumables/",
                  kind: "dir",
                  note: "ConsumableItem → BloxyCola, GravityCoil, SteeringWheel",
                },
              ],
            },
            {
              name: "physics/GolfBallComponent.ts",
              kind: "file",
              note: "terrain drag + homing force",
            },
            { name: "GolfCartComponent.ts", kind: "file", note: "drivable cart" },
            { name: "GolfHoleComponent.ts", kind: "file", note: "the hole" },
          ],
        },
        {
          name: "client/ui/components/golf-club",
          kind: "dir",
          children: [
            { name: "SwingPowerMeter.tsx", kind: "file", note: "overcharge shake + terrain gradient" },
          ],
        },
        { name: "server/components", kind: "dir", note: "authoritative item + knockback validation" },
        { name: "shared/utils", kind: "dir", note: "all swing/physics math, one place" },
      ],
    },
  ],
  keyFiles: [
    {
      label: "Item base component",
      repoPath: "src/client/components/items/ItemComponent.ts",
      language: "typescript",
      codePath: "brickbattle-golf/ItemComponent.ts.txt",
    },
    {
      label: "Golf club component",
      repoPath: "src/client/components/items/GolfClubComponent.ts",
      language: "typescript",
      codePath: "brickbattle-golf/GolfClubComponent.ts.txt",
    },
    {
      label: "Rocket launcher (concrete weapon)",
      repoPath: "src/client/components/items/weapons/RocketLauncherComponent.ts",
      language: "typescript",
      codePath: "brickbattle-golf/RocketLauncherComponent.ts.txt",
    },
    {
      label: "Terrain-aware ball physics",
      repoPath: "src/client/components/physics/GolfBallComponent.ts",
      language: "typescript",
      codePath: "brickbattle-golf/GolfBallComponent.ts.txt",
    },
    {
      label: "Swing power meter (HUD)",
      repoPath: "src/client/ui/components/golf-club/SwingPowerMeter.tsx",
      language: "tsx",
      codePath: "brickbattle-golf/SwingPowerMeter.tsx.txt",
    },
  ],
  showcases: [
    { caption: "Ball trail + terrain impact puffs", system: "Ball physics" },
    { caption: "Overcharge power-meter shake (with bloom)", system: "Swing HUD" },
    { caption: "Rocket explosion particles", system: "Weapons" },
    { caption: "Hole-success confetti", system: "Game feel" },
  ],
};
