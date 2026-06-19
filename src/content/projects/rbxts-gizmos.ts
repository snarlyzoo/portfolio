import type { Project } from "../types";

export const rbxtsGizmos: Project = {
  slug: "rbxts-gizmos",
  title: "rbxts-gizmos",
  tagline: "Open source · developer tooling",
  oneLiner:
    "A published debug-drawing library for Roblox — lines, rays, shapes, raycasts, paths and world-space text — shipped to npm with full TypeScript typings.",
  accent: "graphite",
  category: "tooling",
  repoUrl: "https://github.com/snarlyzoo/rbxts-gizmos",
  npm: "@rbxts/gizmos",
  version: "1.2.0",
  themes: ["tooling"],
  overview:
    "rbxts-gizmos is a debug-drawing library for Roblox: a single import that draws lines, rays, shapes, raycasts, paths and world-space text to visualize what your code is doing. It is a different kind of entry from the games — a shipped, versioned package on npm with hand-written TypeScript typings over the Luau runtime, built for developer experience. The original Luau implementation is by sg3cko; this package is the typed roblox-ts distribution and its ongoing API work, dogfooded in my own projects' debug-visualization harnesses.",
  install: {
    command: "npm install @rbxts/gizmos",
    usage: `import Gizmos from "@rbxts/gizmos";

Gizmos.setColor("red");
Gizmos.drawLine(Vector3.zero, new Vector3(0, 10, 0));

Gizmos.setColor("blue");
Gizmos.drawSphere(new Vector3(5, 5, 5), 2);

// Visualize a raycast and its hit
const result = workspace.Raycast(origin, direction, params);
Gizmos.drawRaycast(origin, direction, result);

// World-space text
Gizmos.drawText(new Vector3(0, 10, 0), "Player spawn point");`,
  },
  systems: [
    {
      name: "A shipped, versioned package",
      summary: "published to npm at v1.2.0",
      body: "Unlike the games, this is a released artifact: @rbxts/gizmos is on npm at v1.2.0 with a documented API, semantic versioning and a real changelog of additions. It is the tooling I reach for when debugging the other projects — drawing sensor rays, capsule casts and trajectory arcs straight into the world so a system's behavior is visible instead of inferred.",
    },
    {
      name: "TypeScript typings over a Luau implementation",
      summary: "a hand-authored .d.ts that makes the runtime type-safe",
      body: "The runtime is Luau (init.lua); the package's job is a precise index.d.ts that exposes it to roblox-ts consumers with full inference. The typings model overloads like drawCube / drawSphere accepting either a Vector3 or a CFrame, optional result arguments on the cast helpers, and the string-or-Color3 color presets — the surface developers actually touch, designed so the right call is the obvious one.",
    },
    {
      name: "Adaptive drawCone geometry",
      summary: "resolution that follows the cone's shape (v1.2.0)",
      body: "drawCone takes an apex, an axis direction, a slant range and a half-angle, and tessellates a cone whose segment count adapts to its proportions so wide and narrow cones both read cleanly — with an optional segments override when you want manual control. It is the kind of small, considered API improvement that defines a library's feel.",
    },
    {
      name: "A broad, consistent draw surface",
      summary: "shapes, casts, paths, text and logging behind one object",
      body: "The API spans shapes (lines, rays, paths, points, cubes, circles, spheres, pyramids, cones), cast visualizers (raycast, spherecast, blockcast with hit detection), world-space and on-screen text, trailing paths that track movement over time, and per-frame auto-clearing — all behind one consistent Gizmos object with a small, learnable naming scheme.",
    },
  ],
  fileTree: [
    {
      name: "rbxts-gizmos",
      kind: "dir",
      children: [
        {
          name: "src",
          kind: "dir",
          children: [
            { name: "init.lua", kind: "file", note: "Luau runtime — the drawing implementation" },
            { name: "index.d.ts", kind: "file", note: "hand-authored TypeScript surface" },
          ],
        },
        { name: "package.json", kind: "file", note: "@rbxts/gizmos · v1.2.0" },
        { name: "README.md", kind: "file", note: "install, usage, full API reference" },
      ],
    },
  ],
  keyFiles: [
    {
      label: "TypeScript typings",
      repoPath: "src/index.d.ts",
      language: "typescript",
      codePath: "rbxts-gizmos/index.d.ts.txt",
    },
    {
      label: "Luau implementation",
      repoPath: "src/init.lua",
      language: "lua",
      codePath: "rbxts-gizmos/init.lua.txt",
    },
  ],
  showcases: [
    { caption: "drawCone with adaptive resolution", system: "Shapes" },
    { caption: "Raycast / spherecast / blockcast visualizers", system: "Casts" },
    { caption: "Trailing paths tracking movement", system: "Paths" },
    { caption: "World-space text + on-screen log", system: "Text" },
  ],
};
