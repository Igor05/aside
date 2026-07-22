export default function SectionHeading({ eyebrow, title, lead, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-denim-500">
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-ink-mid">{lead}</p> : null}
    </div>
  );
}
