import { useState } from "react";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#what-we-flag", label: "What we flag" },
  { href: "#approach", label: "Our approach" },
  { href: "#contact", label: "Contact" },
];

function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      <rect x="4" y="4" width="56" height="56" rx="13" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="2.5" />
      <rect x="13" y="19" width="24" height="4" rx="2" fill="var(--color-ink)" opacity="0.4" />
      <rect x="13" y="29" width="30" height="4" rx="2" fill="var(--color-ink)" opacity="0.4" />
      <rect x="13" y="39" width="18" height="4" rx="2" fill="var(--color-ink)" opacity="0.4" />
      <rect x="47" y="12" width="3.5" height="40" rx="1.75" fill="var(--color-denim-500)" />
      <circle cx="53.5" cy="31" r="5.5" fill="var(--color-mark-500)" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
        >
          <Mark />
          Aside
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-mid transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-denim-500 rounded-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm border border-denim-700 bg-denim-700 px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-denim-600 hover:border-denim-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:inline-block"
        >
          Send us a contract
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-sm border border-line md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500"
        >
          <span
            className={`h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="flex flex-col border-t border-line bg-paper px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-sm text-ink-mid last:border-none hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-sm border border-denim-700 bg-denim-700 px-4 py-2.5 text-center text-sm font-medium text-paper"
          >
            Send us a contract
          </a>
        </nav>
      )}
    </header>
  );
}
