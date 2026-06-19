import Link from "next/link";
import { GITHUB_URL } from "@/lib/config";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-canvas/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tight text-ink"
        >
          snarly<span className="text-teal">zoo</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/#work"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            Work
          </Link>
          <Link
            href="/#build"
            className="hidden text-ink-soft transition-colors hover:text-ink sm:inline"
          >
            What I build
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-ink/15 px-3.5 py-1.5 text-ink transition-colors hover:border-ink/40 hover:bg-ink hover:text-canvas"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
