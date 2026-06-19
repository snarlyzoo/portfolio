import fs from "node:fs";
import path from "node:path";
import type { Project } from "./types";
import { bountyRush } from "./projects/bounty-rush";
import { turfWars } from "./projects/turf-wars";
import { slingmasters } from "./projects/slingmasters";
import { brickbattleGolf } from "./projects/brickbattle-golf";
import { rbxtsGizmos } from "./projects/rbxts-gizmos";

/** Display order: flashiest game first, open-source tooling last. */
export const PROJECTS: Project[] = [
  bountyRush,
  brickbattleGolf,
  slingmasters,
  turfWars,
  rbxtsGizmos,
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

const CODE_ROOT = path.join(process.cwd(), "src/content/code");

/** Read a vendored source file at build time. Server-only. */
export function loadCode(codePath: string): string {
  return fs.readFileSync(path.join(CODE_ROOT, codePath), "utf8");
}
