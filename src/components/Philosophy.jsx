import SectionHeading from "./SectionHeading";
import Note from "./Note";

export default function Philosophy() {
  return (
    <section id="approach" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Where Aside stops"
          title="A second pair of eyes, not a law license."
          className="mb-10"
        />

        <div className="doc-grid">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-mid">
            Aside won't argue your case in court, and it won't replace a
            lawyer when a deal is genuinely complicated — a co-founder split,
            an acquisition, anything with real equity attached. What it will
            do is catch the ordinary stuff: the boilerplate a bigger client's
            legal team wrote once and now sends to every vendor, unedited,
            hoping nobody reads past the signature line.{" "}
            <span className="text-ink">
              Most freelance contracts aren't complicated. They're just long
              enough that the part that matters is easy to miss.
            </span>{" "}
            That's the part we're built to catch.
          </p>

          <Note tilt="b">
            If a clause is genuinely unusual — real money, real risk, real
            ambiguity — we say so, and we say go get a lawyer to look. That
            recommendation is free too.
          </Note>
        </div>
      </div>
    </section>
  );
}
