import { createHighlighter, type Highlighter } from "shiki";

const THEME = "github-light";
const LANGS = ["typescript", "tsx", "javascript", "json", "lua", "bash"];

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [THEME],
      langs: LANGS,
    });
  }
  return highlighterPromise;
}

/** Shiki has no Luau grammar — normalize to Lua (same trick as the old site). */
export function normalizeLang(lang: string): string {
  const l = lang.toLowerCase();
  if (l === "luau") return "lua";
  if (l === "ts") return "typescript";
  if (l === "js") return "javascript";
  if (LANGS.includes(l)) return l;
  return "typescript";
}

export async function highlightCode(
  code: string,
  lang: string,
): Promise<string> {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code.replace(/\n+$/, ""), {
    lang: normalizeLang(lang),
    theme: THEME,
  });
}
