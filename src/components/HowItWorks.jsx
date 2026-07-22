import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Note from "./Note";
import ClauseMark from "./ClauseMark";
import { clauses } from "../data/clauses";

const steps = [
  {
    ref: "§01",
    title: "Send it over",
    body: "A PDF, a Word doc, or a pasted Google Doc link. Whatever format it landed in your inbox, that's fine.",
  },
  {
    ref: "§02",
    title: "Aside reads every clause",
    body: "Payment schedule, deliverable ownership, kill fees, renewal terms, indemnification — the parts freelance contracts quietly bury around section 14.",
  },
  {
    ref: "§03",
    title: "You get it back marked up",
    body: "Plain-language notes next to anything worth a second look, sorted by how much it can actually cost you.",
  },
];

export default function HowItWorks() {
  const [activeId, setActiveId] = useState(clauses[0].id);
  const active = clauses.find((c) => c.id === activeId);

  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Three minutes, not three hours with a lawyer."
          className="mb-12"
        />

        <ol className="mb-14 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.ref}>
              <p className="font-mono text-sm text-denim-500">{s.ref}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mid">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mb-4 text-sm text-ink-faint">
          Try it — hover or tab through the underlined phrases below.
        </p>

        <div className="doc-grid doc-grid--wide">
          <div className="overflow-hidden rounded-sm border border-line bg-paper-soft shadow-[0_1px_2px_rgba(30,42,56,0.06)]">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-mono text-[0.6875rem] uppercase tracking-wide text-ink-faint">
                Independent Contractor Agreement — §§ 8–10
              </span>
            </div>
            <p className="px-5 py-6 text-base leading-[1.9] text-ink-mid sm:px-7 sm:py-8">
              <span className="mr-1 font-mono text-sm text-ink-faint">§8</span> This Agreement may
              be{" "}
              <ClauseMark id="termination" activeId={activeId} onSelect={setActiveId} riskLevel="high">
                terminated by Client at any time, for any reason
              </ClauseMark>
              , upon written notice to Contractor. Upon termination, Contractor shall be{" "}
              <ClauseMark id="acceptance" activeId={activeId} onSelect={setActiveId} riskLevel="medium">
                compensated only for Deliverables formally accepted in writing
              </ClauseMark>{" "}
              by Client prior to the termination date.
              <br />
              <br />
              <span className="mr-1 font-mono text-sm text-ink-faint">§9</span> Client shall pay all
              undisputed invoices within{" "}
              <ClauseMark id="payment-terms" activeId={activeId} onSelect={setActiveId} riskLevel="medium">
                forty-five (45) days of receipt
              </ClauseMark>
              .
              <br />
              <br />
              <span className="mr-1 font-mono text-sm text-ink-faint">§10</span> For each business
              day that a Deliverable is submitted after the date in Schedule A, Contractor shall
              pay Client{" "}
              <ClauseMark id="penalty" activeId={activeId} onSelect={setActiveId} riskLevel="high">
                liquidated damages of $250, regardless of the cause of delay
              </ClauseMark>
              .
            </p>
          </div>

          <Note key={activeId} tilt="c" risk={active.risk}>
            {active.note}
          </Note>
        </div>
      </div>
    </section>
  );
}
