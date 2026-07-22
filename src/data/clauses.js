export const clauses = [
  {
    id: "termination",
    risk: { level: "high", label: "Termination" },
    note: "No kill fee, and no minimum notice period. If they walk on day one of a six-week project, you're paid for exactly what's already been signed off — nothing more.",
  },
  {
    id: "acceptance",
    risk: { level: "medium", label: "Payment on acceptance" },
    note: "“Formally accepted in writing” has no timeline and no defined process attached. Without one, a client can simply never get around to accepting — and never owe you the balance.",
  },
  {
    id: "payment-terms",
    risk: { level: "medium", label: "Payment terms" },
    note: "Forty-five days is on the long end for freelance work. It's a fair thing to counter before you sign, not after invoice #1 has been sitting unpaid for a month.",
  },
  {
    id: "penalty",
    risk: { level: "high", label: "Penalty clause" },
    note: "A flat fine that only runs one way. If they're late sending feedback or assets, the delay still gets charged to you at $250 a day.",
  },
];
