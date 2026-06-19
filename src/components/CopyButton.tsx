"use client";

import { useState } from "react";
import { attributionHeader } from "@/lib/config";

/**
 * Copies the snippet with an auto-prepended attribution header so any reuse
 * carries the source + MIT notice. Protection is social/legal, not technical.
 */
export function CopyButton({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const payload = `${attributionHeader(language)}\n\n${code}`;
    try {
      await navigator.clipboard.writeText(payload);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy code with attribution"
      className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-xs font-medium text-ink-soft transition-colors hover:border-teal hover:text-teal-deep"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
