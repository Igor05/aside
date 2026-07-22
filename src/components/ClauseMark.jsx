export default function ClauseMark({ id, activeId, onSelect, riskLevel, children }) {
  const active = id === activeId;
  const decorationColor = riskLevel === "high" ? "var(--color-mark-500)" : "var(--color-denim-500)";
  const markColor = riskLevel === "high" ? "var(--color-mark-100)" : "var(--color-denim-100)";

  return (
    <button
      type="button"
      onMouseEnter={() => onSelect(id)}
      onFocus={() => onSelect(id)}
      onClick={() => onSelect(id)}
      aria-pressed={active}
      style={{
        "--mark-color": markColor,
        textDecorationColor: active ? decorationColor : "transparent",
      }}
      className="mark-sweep is-active rounded-sm px-0.5 text-left font-sans text-ink underline decoration-2 underline-offset-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-denim-500"
    >
      {children}
    </button>
  );
}
