export const categories = [
  {
    ref: "§ P.01",
    title: "Penalty & liquidated damages",
    risk: { level: "high", label: "Runs one way" },
    body: "A flat fine for a missed date rarely accounts for delays that were the client's fault — late feedback, late assets, scope added mid-project. We flag any penalty clause that doesn't run both directions.",
  },
  {
    ref: "§ P.02",
    title: "Who owns the work",
    risk: { level: "high", label: "IP rights" },
    body: "A perpetual, irrevocable, all-rights license is standard for the final deliverable. It's less standard for your sketches, unused directions, and process files. We flag language that reaches past what you actually shipped.",
  },
  {
    ref: "§ P.03",
    title: "Payment timing",
    risk: { level: "medium", label: "Cash flow" },
    body: "Every invoice term is a cash-flow decision, whether or not it was written that way on purpose. We flag payment windows before you agree to quietly fund the client's runway.",
  },
  {
    ref: "§ P.04",
    title: "Termination & kill fees",
    risk: { level: "medium", label: "Exit terms" },
    body: "A one-sided termination clause lets a client walk away mid-project and owe you nothing for work already underway. We flag any exit clause that isn't symmetrical.",
  },
];
