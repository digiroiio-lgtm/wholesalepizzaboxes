import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";
import { globalFaqs } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "FAQ",
  description: "Answers to common wholesale pizza box questions on MOQ, lead times, custom printing, and delivery coverage.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-extrabold">Frequently Asked Questions</h1>
      <FAQAccordion faqs={globalFaqs} />
    </Section>
  );
}
