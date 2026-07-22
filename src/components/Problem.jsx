import SectionHeading from "./SectionHeading";
import Note from "./Note";

const thoughts = [
  "The client needs this back today, and rereading four pages of legal language isn't today's problem.",
  "You've read contracts like this a dozen times and never once caught anything — so somewhere along the way, you stopped really reading them.",
  "Something in here is probably fine. Probably.",
];

export default function Problem() {
  return (
    <section id="problem" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="The part right before you sign"
          title="You already know the feeling."
          className="mb-10"
        />

        <div className="doc-grid">
          <ul className="max-w-2xl space-y-0">
            {thoughts.map((t, i) => (
              <li
                key={t}
                className="border-l-2 border-denim-100 py-4 pl-5 text-lg leading-relaxed text-ink-mid first:pt-0 last:pb-0"
              >
                {i === thoughts.length - 1 ? <span className="text-ink">{t}</span> : t}
              </li>
            ))}
          </ul>

          <Note tilt="b">
            This is the exact moment Aside is built for — not the proposal
            stage, not the kickoff call. Right here, three minutes before you
            type your name.
          </Note>
        </div>
      </div>
    </section>
  );
}
