import type { Project } from "../types";

export const slingmasters: Project = {
  slug: "slingmasters",
  title: "Slingmasters",
  tagline: "Networking & game-feel showcase",
  oneLiner:
    "Turn-based 1v1 physics slingshot across two places, with scripted cameras, drag input and a marching trajectory preview.",
  accent: "orange",
  category: "game",
  youtubeId: "oTWjUDXkKLI",
  repoUrl: "https://github.com/snarlyzoo/slingmasters",
  themes: ["networking", "ui", "physics"],
  overview:
    "Slingmasters is a turn-based 1v1 physics-slingshot duel. Players alternate shots with drag-based angle and power input, watching a shared ballistic arc cross the map. It runs on a multi-place architecture — a Lobby place handles matchmaking and teleport, a Match place runs the 1v1 — and a single IMatchPlayer interface lets bots and real players share every code path. The standouts are deliberate camera choreography, a server-time fast-forward that keeps both clients' projectiles in sync, and a marching trajectory preview that costs nothing per frame.",
  systems: [
    {
      name: "Server-time fast-forward sync",
      summary: "remote shots appear at the right place instantly",
      body: "When a remote player's projectile event arrives, the client computes startT = GetServerTimeNow() − timestamp and fast-forwards the simulation by that amount, so the projectile appears where it actually is rather than starting from the origin and catching up. The local player's shot is tracked under a placeholder key until the server returns the real id, then remapped — preventing a visible duplicate between local prediction and server replication.",
    },
    {
      name: "Promise-orchestrated turns",
      summary: "the whole turn reads as a single async method",
      body: "MatchController runs the client turn lifecycle as one async onTurnStarted: resolve the active player, play the right camera transition (a dramatic opening pan on the first turn, a quick cut after), and — only if the local player is active — await getShotInput(). The resolved { angle, power } fires locally and sends RequestShot to the server. Every async step is guarded so an error logs without corrupting match state.",
    },
    {
      name: "Drag input as a power indicator",
      summary: "the camera FOV is the UI",
      body: "ShotInputController exposes a single getShotInput() returning a Promise that resolves on drag release. It supports mouse, touch and gamepad and swaps handlers live when the preferred input device changes, without restarting the promise. While dragging it writes to a trajectory atom; the camera subscribes and widens FieldOfView with power, so the zoom itself communicates shot strength with no on-screen meter. Max drag distance scales with viewport width, keeping it resolution-independent.",
    },
    {
      name: "Marching trajectory preview",
      summary: "O(dots), zero allocation per frame",
      body: "TrajectoryPreview draws the arc with a fixed set of sphere adornments. Arc points are precomputed in a memo whenever the trajectory atom changes; a single phase value advances each Heartbeat, and every dot reads its fractional index, lerps between two adjacent points for smooth sub-step motion, and fades and shrinks quadratically toward the tail. No parts are created per frame — the same dots are repositioned, so cost is independent of arc length.",
    },
    {
      name: "Scripted camera choreography",
      summary: "named async transitions that return Promises",
      body: "CameraController owns a Scriptable camera and exposes named transitions — a slow opening pan, a one-second cut to the new active player, a two-second hold-on-target after a hit — each a TweenService tween that resolves via Promise.fromEvent. In render it tracks the active projectile with CFrame.lookAt, and flips the view-offset sign for player two so framing stays consistent from both sides.",
    },
    {
      name: "Reactive HUD: spring health bar & off-screen indicator",
      summary: "binding-driven, re-render-free",
      body: "The player HUD animates the health bar with a react-ripple spring binding so damage eases rather than snaps, lerping green → yellow → red. The off-screen indicator points a rotating edge arrow at an out-of-view opponent using bindings updated every Heartbeat — no React re-renders — mirror-flipping the math when the target is behind the camera.",
    },
  ],
  fileTree: [
    {
      name: "src",
      kind: "dir",
      children: [
        {
          name: "lobby",
          kind: "dir",
          note: "matchmaking place — teleports matchId to the match place",
        },
        {
          name: "match",
          kind: "dir",
          children: [
            {
              name: "client/controllers",
              kind: "dir",
              note: "one responsibility each",
              children: [
                { name: "MatchController.ts", kind: "file", note: "turn flow orchestration" },
                { name: "ShotInputController.ts", kind: "file", note: "drag → { angle, power }" },
                { name: "ProjectileController.ts", kind: "file", note: "fast-forward sync" },
                { name: "CameraController.ts", kind: "file", note: "scripted choreography" },
              ],
            },
            {
              name: "client/ui/components/game",
              kind: "dir",
              children: [
                {
                  name: "TrajectoryPreview.tsx",
                  kind: "file",
                  note: "marching-dot arc preview",
                },
              ],
            },
            { name: "shared/utils", kind: "dir", note: "shared ballistics — one physics model" },
          ],
        },
      ],
    },
  ],
  keyFiles: [
    {
      label: "Turn-flow controller",
      repoPath: "src/match/client/controllers/MatchController.ts",
      language: "typescript",
      codePath: "slingmasters/MatchController.ts.txt",
    },
    {
      label: "Drag shot input",
      repoPath: "src/match/client/controllers/ShotInputController.ts",
      language: "typescript",
      codePath: "slingmasters/ShotInputController.ts.txt",
    },
    {
      label: "Projectile sync controller",
      repoPath: "src/match/client/controllers/ProjectileController.ts",
      language: "typescript",
      codePath: "slingmasters/ProjectileController.ts.txt",
    },
    {
      label: "Marching trajectory preview",
      repoPath: "src/match/client/ui/components/game/TrajectoryPreview.tsx",
      language: "tsx",
      codePath: "slingmasters/TrajectoryPreview.tsx.txt",
    },
  ],
  showcases: [
    { caption: "Projectile trail + impact explosion", system: "Projectiles" },
    { caption: "Trajectory dots with bloom", system: "Game feel" },
    { caption: "Opening camera pan into the match", system: "Camera" },
    { caption: "Turn-transition UI flourish", system: "HUD" },
  ],
};
