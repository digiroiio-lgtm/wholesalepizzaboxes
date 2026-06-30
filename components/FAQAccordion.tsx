import { FAQ } from "@/lib/data/site";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-lg border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
          <p className="pt-3 text-sm text-slate-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
