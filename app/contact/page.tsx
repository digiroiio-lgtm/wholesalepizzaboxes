import Link from "next/link";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact the wholesale pizza packaging team for quotes, lead times, custom print specs, and account support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <h1 className="mb-4 text-3xl font-extrabold">Contact</h1>
      <p className="text-slate-700">Phone: (888) 936-BOXES</p>
      <p className="text-slate-700">Email: sales@wholesalepizzaboxes.com</p>
      <p className="mt-4 text-slate-700">
        For fastest service, use the{" "}
        <Link href="/get-quote" className="text-emerald-800 underline">
          Get Quote form
        </Link>
        .
      </p>
    </Section>
  );
}
