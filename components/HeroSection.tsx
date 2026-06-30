import { CTAButton } from "@/components/CTAButton";
import { trustBullets, site } from "@/lib/data/site";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">{site.heroTitle}</h1>
          <p className="mt-4 text-lg text-slate-700">{site.heroSubtitle}</p>
          <ul className="mt-6 grid gap-2 text-sm text-slate-800">
            {trustBullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton href="/get-quote">Get Wholesale Quote</CTAButton>
            <CTAButton href="/download-catalog" variant="outline">Download Catalog</CTAButton>
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-white p-8 shadow-sm">
          <div className="flex h-full min-h-64 items-center justify-center rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50 text-center text-sm font-medium text-emerald-900">
            Pizza box product visual placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
