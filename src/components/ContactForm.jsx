import { useId, useState } from "react";
import SectionHeading from "./SectionHeading";

const fieldClass =
  "w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-denim-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-denim-500";

const labelClass = "mb-2 block font-mono text-xs uppercase tracking-wide text-ink-mid";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  if (submitted) {
    return (
      <section id="contact" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <span
            className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-denim-300 text-denim-600"
            aria-hidden="true"
          >
            ✓
          </span>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Received — we'll get back to you within a business day.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-mid">
            If you attached a contract, we'll read it before we reply, so the
            first thing you hear from us is what Aside actually found — not a
            sales call.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Send us a contract"
          title="Have one sitting in your inbox right now?"
          lead="Send it over and we'll show you exactly what Aside would flag — no commitment, no account."
          className="mb-10"
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jordan Reyes"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jordan@yourstudio.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className={labelClass}>
              What describes you best?
            </label>
            <select id="role" name="role" defaultValue="" required className={`${fieldClass} appearance-none`}>
              <option value="" disabled>
                Select one
              </option>
              <option value="freelancer">Solo freelancer</option>
              <option value="studio">Small studio</option>
              <option value="agency">Agency</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              What's the situation?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="A new client sent over their standard agreement and something about the payment terms feels off..."
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div>
            <label htmlFor={fileId} className={labelClass}>
              Attach a contract (optional)
            </label>
            <label
              htmlFor={fileId}
              className="flex cursor-pointer items-center justify-between gap-3 rounded-sm border border-dashed border-line bg-paper px-4 py-3.5 text-sm text-ink-mid transition-colors hover:border-denim-300 hover:text-ink focus-within:border-denim-500 focus-within:ring-1 focus-within:ring-denim-500"
            >
              <span className="truncate">
                {fileName || "PDF or Word document, up to 10MB"}
              </span>
              <span className="shrink-0 rounded-sm border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-denim-600">
                Browse
              </span>
              <input
                id={fileId}
                name="attachment"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                className="sr-only"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-sm border border-denim-700 bg-denim-700 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-denim-600 hover:border-denim-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:w-auto"
          >
            Send it over
          </button>
        </form>
      </div>
    </section>
  );
}
