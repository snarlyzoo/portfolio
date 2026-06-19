/**
 * Single source of truth for site identity, used by metadata, canonical URLs,
 * and the code-block auto-attribution copy button.
 *
 * SITE_DOMAIN is the only thing to change when the custom domain (snarlyzoo.dev)
 * is live — flip it here and everything downstream updates.
 */
export const SITE_DOMAIN = "snarlyzoo.vercel.app";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const AUTHOR = "SnarlyZoo";
export const AUTHOR_SHORT = "SnarlyZoo";
export const COPYRIGHT_YEAR = "2026";

export const SITE_NAME = "SnarlyZoo — Roblox systems developer";
export const SITE_DESCRIPTION =
  "Systems-focused Roblox developer. Movement, networking, physics, reactive UI, and dev tooling — engineered deep, presented well.";

export const GITHUB_USER = "snarlyzoo";
export const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

/** Comment header prepended when a visitor copies any shown snippet. */
export function attributionHeader(language: string): string {
  const line = `Source: ${SITE_DOMAIN} · © ${COPYRIGHT_YEAR} ${AUTHOR} · MIT`;
  const prefix = /^(lua|luau)$/i.test(language) ? "--" : "//";
  return `${prefix} ${line}`;
}
