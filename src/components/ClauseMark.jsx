export default function ClauseMark({ id, activeId, onSelect, riskLevel, children }) {
  const active = id === activeId;
  const decorationColor = riskLevel === "high" ? "var(--color-mark-500)" : "var(--color-denim-500)";
  const markColor = riskLevel === "high" ? "var(--color-mark-100)" : "var(--color-denim-100)";

  const select = () => onSelect(id);

  return (
    <mark
      role="button"
      tabIndex={0}
      onMouseEnter={select}
      onFocus={select}
      onClick={select}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select();
        }
      }}
      aria-pressed={active}
      style={{
        "--mark-color": markColor,
        textDecorationColor: active ? decorationColor : "transparent",
      }}
      className="mark-sweep is-active cursor-pointer rounded-sm px-0.5 font-sans text-ink underline decoration-2 underline-offset-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-denim-500"
    >
      {children}
    </mark>
  );
}
