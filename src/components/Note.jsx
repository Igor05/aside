import useInView from "../hooks/useInView";
import RiskTag from "./RiskTag";

const tilts = {
  a: "-0.7deg",
  b: "0.6deg",
  c: "-0.4deg",
};

export default function Note({ children, tilt = "a", risk, className = "" }) {
  const [ref, visible] = useInView({ threshold: 0.35 });

  return (
    <aside
      ref={ref}
      style={{ "--tilt": tilts[tilt], animationDelay: visible ? "0.1s" : undefined }}
      className={`note-card ${visible ? "animate-[pin_0.45s_cubic-bezier(0.2,1.2,0.4,1)_both]" : "opacity-0"} rounded-sm border border-line bg-paper-soft px-4 py-3.5 shadow-[0_1px_2px_rgba(30,42,56,0.06)] ${className}`}
    >
      <p className="mb-1.5 font-mono text-[0.6875rem] uppercase tracking-wide text-ink-faint">
        — Aside, reading along
      </p>
      <p className="font-note text-[0.95rem] italic leading-snug text-ink-mid">{children}</p>
      {risk ? (
        <div className="mt-2.5">
          <RiskTag level={risk.level} label={risk.label} />
        </div>
      ) : null}
    </aside>
  );
}
