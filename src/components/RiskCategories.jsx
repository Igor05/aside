import useInView from "../hooks/useInView";
import SectionHeading from "./SectionHeading";
import RiskTag from "./RiskTag";
import { categories } from "../data/categories";

function CategoryRow({ item, delay }) {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{ animationDelay: visible ? delay : undefined }}
      className={`reveal ${visible ? "is-visible" : ""} border-t border-line py-6 first:border-none sm:py-7`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-denim-500">{item.ref}</span>
          <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
        </div>
        <RiskTag level={item.risk.level} label={item.risk.label} />
      </div>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-mid">{item.body}</p>
    </div>
  );
}

export default function RiskCategories() {
  return (
    <section id="what-we-flag" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="What we flag"
          title="The clauses that quietly cost freelancers money."
          lead="Not a full legal audit — the handful of clause types that show up in almost every freelance contract, and that almost never favor the person who isn't the one who wrote them."
          className="mb-10"
        />

        <div>
          {categories.map((item, i) => (
            <CategoryRow key={item.ref} item={item} delay={`${i * 0.06}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
