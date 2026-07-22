import SectionHeading from "./SectionHeading";

const groups = [
  {
    n: "01",
    title: "Solo freelancers",
    body: "You're the one signing, the one delivering, and the one who eats the cost if a clause goes sideways. Aside reads every contract that lands in your inbox before you have to find time to do it yourself.",
  },
  {
    n: "02",
    title: "Small studios",
    body: "No in-house counsel, and outside counsel is a line item you save for the contracts that are actually worth the hour. Aside handles the ones that aren't — which is most of them.",
  },
];

export default function Audience() {
  return (
    <section id="who-its-for" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Who this is for"
          title="Built for the contracts nobody double-checks."
          className="mb-12"
        />

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-line">
          {groups.map((g) => (
            <div key={g.n} className="sm:px-10 sm:first:pl-0 sm:last:pr-0">
              <span className="font-mono text-sm text-denim-500">{g.n}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{g.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-mid">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
