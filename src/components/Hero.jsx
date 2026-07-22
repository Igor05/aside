import useInView from "../hooks/useInView";
import Note from "./Note";

export default function Hero() {
  const [markRef, marksVisible] = useInView({ threshold: 0.5 });

  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-denim-500">
          AI contract review for freelancers &amp; small studios
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
          Read the fine print without reading the fine print.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-mid">
          Aside goes through the contract your client just sent — the clauses
          about penalties, ownership, and payment timing — and marks what
          actually matters, in plain English, right next to the line that's
          easy to skim past.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="rounded-sm border border-denim-700 bg-denim-700 px-6 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-denim-600 hover:border-denim-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Send us a contract
          </a>
          <a
            href="#how-it-works"
            className="rounded-sm border border-line px-6 py-3 text-center text-sm font-medium text-ink-mid transition-colors hover:border-denim-300 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500"
          >
            See it work ↓
          </a>
        </div>
        <p className="mt-5 font-mono text-xs text-ink-faint">
          First read is free. No account, no waiting on a lawyer's calendar.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="doc-grid">
          <div
            ref={markRef}
            className="overflow-hidden rounded-sm border border-line bg-paper-soft shadow-[0_1px_2px_rgba(30,42,56,0.06)]"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-wide text-ink-faint">
                Master Services Agreement — § 9
              </span>
              <span className="font-mono text-[0.6875rem] text-ink-faint">Intellectual Property</span>
            </div>
            <p className="px-5 py-6 text-base leading-[1.85] text-ink-mid sm:px-7 sm:py-8">
              Contractor hereby grants to Client a{" "}
              <mark
                className={`mark-sweep px-0.5 text-ink ${marksVisible ? "is-active" : ""}`}
                style={{ "--mark-color": "var(--color-mark-100)" }}
              >
                perpetual, irrevocable, worldwide, royalty-free license
              </mark>{" "}
              to the Work, including{" "}
              <mark
                className={`mark-sweep px-0.5 text-ink ${marksVisible ? "is-active" : ""}`}
                style={{ "--mark-color": "var(--color-mark-100)", transitionDelay: "0.15s" }}
              >
                all preliminary drafts, sketches, and unused concepts
              </mark>
              , whether or not such materials are incorporated into the final
              Deliverable.
            </p>
          </div>

          <Note tilt="a" risk={{ level: "high", label: "IP rights" }}>
            Not just the logo you deliver — every sketch and rejected
            direction, owned by them, forever, for the fee you already
            quoted.
          </Note>
        </div>
      </div>
    </section>
  );
}
