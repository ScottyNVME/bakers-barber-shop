import { FAQ_ITEMS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-olive-darker px-4 py-20 sm:px-6"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          id="faq-heading"
        />
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-olive-border bg-olive"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-heading text-lg font-medium uppercase tracking-wide text-neutral-100 marker:[content:''] [&::-webkit-details-marker]:hidden">
                {item.question}
                <svg
                  className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="border-t border-olive-border px-6 py-4 text-neutral-400">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
