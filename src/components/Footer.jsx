const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#what-we-flag", label: "What we flag" },
  { href: "#approach", label: "Our approach" },
  { href: "#who-its-for", label: "Who it's for" },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <p className="font-note text-xs italic text-ink-faint">
          — one more read before you hit send.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
                <rect x="4" y="4" width="56" height="56" rx="13" fill="none" stroke="#1E2A38" strokeWidth="2.5" />
                <rect x="13" y="19" width="24" height="4" rx="2" fill="#1E2A38" opacity="0.4" />
                <rect x="13" y="29" width="30" height="4" rx="2" fill="#1E2A38" opacity="0.4" />
                <rect x="13" y="39" width="18" height="4" rx="2" fill="#1E2A38" opacity="0.4" />
                <rect x="47" y="12" width="3.5" height="40" rx="1.75" fill="#4A7093" />
                <circle cx="53.5" cy="31" r="5.5" fill="#B23A63" />
              </svg>
              Aside
            </a>
            <p className="mt-3 max-w-xs text-sm text-ink-mid">
              Someone on your side of the table, before you sign.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-mid hover:text-ink focus-visible:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-denim-500 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:hello@aside.app"
            className="text-sm text-ink-mid hover:text-ink focus-visible:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-denim-500 rounded-sm"
          >
            hello@aside.app
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aside. Built for the contracts nobody double-checks.</p>
          <p className="font-mono">Design case study — not a live product.</p>
        </div>
      </div>
    </footer>
  );
}
