import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Client Testimonials",
  description: "Read B2B testimonials from restaurant groups, chains, and distribution buyers sourcing pizza box programs.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-extrabold">Testimonials</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => <TestimonialCard key={item.name} name={item.name} quote={item.quote} />)}
      </div>
    </Section>
  );
}
