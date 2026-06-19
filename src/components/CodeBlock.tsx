import { highlightCode } from "@/lib/highlighter";
import { CopyButton } from "./CopyButton";
import { SITE_DOMAIN } from "@/lib/config";

export async function CodeBlock({
  code,
  language,
  label,
  filePath,
}: {
  code: string;
  language: string;
  label?: string;
  filePath?: string;
}) {
  const html = await highlightCode(code, language);

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-white">
      <header className="flex items-center justify-between gap-3 border-b border-line-soft bg-canvas-soft/60 px-4 py-2.5">
        <div className="min-w-0">
          {label && (
            <p className="truncate text-sm font-semibold text-ink">{label}</p>
          )}
          {filePath && (
            <p className="truncate font-mono text-xs text-ink-faint">
              {filePath}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-md bg-teal/10 px-2 py-0.5 font-mono text-[11px] font-medium uppercase text-teal-deep">
            {language}
          </span>
          <CopyButton code={code} language={language} />
        </div>
      </header>
      <div
        className="shiki-host overflow-x-auto text-[13px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <figcaption className="border-t border-line-soft px-4 py-2 text-[11px] text-ink-faint">
        MIT · © 2026 SnarlyZoo · copy includes a source header ({SITE_DOMAIN})
      </figcaption>
    </figure>
  );
}
