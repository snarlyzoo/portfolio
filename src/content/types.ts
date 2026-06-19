import type { AccentKey } from "@/lib/theme";

export type ThemeKey =
  | "networking"
  | "movement"
  | "physics"
  | "ui"
  | "performance"
  | "tooling";

export const THEME_LABELS: Record<ThemeKey, string> = {
  networking: "Server-authoritative networking",
  movement: "Movement & physics",
  physics: "Simulation & physics",
  ui: "Reactive UI",
  performance: "Parallel & performance",
  tooling: "Developer tooling",
};

export type FileTreeNode = {
  name: string;
  kind: "dir" | "file";
  /** Short annotation shown beside the node — the structural "diagram". */
  note?: string;
  children?: FileTreeNode[];
};

export type System = {
  name: string;
  /** One-line hook. */
  summary: string;
  /** Body paragraph(s); plain prose, no job framing. */
  body: string;
};

/** A full key file, rendered via Shiki. `codePath` is relative to content/code. */
export type KeyFile = {
  label: string;
  repoPath: string;
  language: string;
  codePath: string;
};

/** A short curated inline snippet (code lives inline, not vendored). */
export type Highlight = {
  label: string;
  filePath: string;
  language: string;
  code: string;
};

/** Phase 2 placeholder slot — caption + the system it will demonstrate. */
export type Showcase = {
  caption: string;
  system: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  oneLiner: string;
  accent: AccentKey;
  category: "game" | "tooling";
  youtubeId?: string;
  repoUrl: string;
  npm?: string;
  version?: string;
  themes: ThemeKey[];
  overview: string;
  systems: System[];
  fileTree: FileTreeNode[];
  keyFiles: KeyFile[];
  highlights?: Highlight[];
  showcases: Showcase[];
  /** Tooling entries (gizmos) lead with install/usage instead of a video. */
  install?: { command: string; usage: string };
};
