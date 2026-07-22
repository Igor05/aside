const styles = {
  low: "border-denim-300 text-denim-600 bg-transparent",
  medium: "border-denim-100 text-denim-700 bg-denim-100",
  high: "border-mark-100 text-mark-700 bg-mark-100",
};

const dots = {
  low: "bg-denim-300",
  medium: "bg-denim-500",
  high: "bg-mark-500",
};

export default function RiskTag({ level, label }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide ${styles[level]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[level]}`} aria-hidden="true" />
      {label}
    </span>
  );
}
