import Link from "next/link";
import { AUTHOR, COPYRIGHT_YEAR, GITHUB_URL, SITE_DOMAIN } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-soft">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg font-extrabold tracking-tight">
              snarly<span className="text-teal">zoo</span>
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Roblox systems developer · {SITE_DOMAIN}
            </p>
          </div>
          <div className="flex gap-5 text-sm font-medium">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              GitHub
            </a>
            <Link
              href="/#work"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              Work
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-line pt-5 text-xs leading-relaxed text-ink-faint">
          <p>
            © {COPYRIGHT_YEAR} {AUTHOR}. Code shown on this site is released
            under the MIT License — reuse is welcome with attribution. Copying
            any snippet includes a source/attribution header automatically.
          </p>
        </div>
      </div>
    </footer>
  );
}
