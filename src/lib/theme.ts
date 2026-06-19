/**
 * Studio Bold / Deep Teal palette. Each project owns an accent; tiles and
 * page chrome read the accent off these tokens. Components set `--accent*`
 * CSS variables from `accentVars(key)` and style with `var(--accent)` so
 * Tailwind never needs dynamic (unpurgeable) class names.
 */
export type AccentKey = "teal" | "orange" | "indigo" | "rose" | "graphite";

type Accent = {
  /** Solid tile / button background. */
  tile: string;
  /** Readable text on top of `tile`. */
  on: string;
  /** Soft tint background (chips, washes). */
  soft: string;
  /** Readable text on top of `soft`. */
  softOn: string;
};

export const ACCENTS: Record<AccentKey, Accent> = {
  teal: { tile: "#12AEB0", on: "#04302F", soft: "#D7F0EF", softOn: "#0A3F3E" },
  orange: { tile: "#F2994A", on: "#4A2A07", soft: "#FCEBDA", softOn: "#6B3E0F" },
  indigo: { tile: "#5B6CF0", on: "#141A4A", soft: "#E2E5FC", softOn: "#2A3382" },
  rose: { tile: "#E85D75", on: "#4A0F1D", soft: "#FBDEE4", softOn: "#7A1F33" },
  graphite: { tile: "#33424A", on: "#E3E8EA", soft: "#E6EAEC", softOn: "#2A363C" },
};

/** CSS custom properties for an accent, spread onto a style={} prop. */
export function accentVars(key: AccentKey): React.CSSProperties {
  const a = ACCENTS[key];
  return {
    ["--accent" as string]: a.tile,
    ["--accent-on" as string]: a.on,
    ["--accent-soft" as string]: a.soft,
    ["--accent-soft-on" as string]: a.softOn,
  };
}
