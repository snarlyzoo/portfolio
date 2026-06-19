import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-8%] h-[360px] w-[360px] rounded-full bg-teal-bright/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <span className="inline-block rounded-full bg-teal/12 px-3.5 py-1.5 text-sm font-semibold text-teal-deep">
          Roblox systems developer
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-7xl">
          Games that play as good as they look.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          I build the systems underneath games — movement, networking, physics,
          reactive UI and dev tooling — in roblox-ts. Five shipped projects, with
          the real engineering shown the way it deserves.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="#work"
            className="rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5"
          >
            See the work
          </Link>
          <Link
            href="/projects/rbxts-gizmos"
            className="rounded-xl border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            Open source
          </Link>
        </div>
      </div>
    </section>
  );
}
