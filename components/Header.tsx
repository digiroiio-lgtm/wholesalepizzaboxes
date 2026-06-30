import Link from "next/link";
import { navLinks, site } from "@/lib/data/site";
import { TopTrustBar } from "@/components/TopTrustBar";
import { CTAButton } from "@/components/CTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <TopTrustBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="text-lg font-extrabold text-emerald-900">{site.name}</Link>
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-emerald-900">{link.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+18889362693" className="text-sm font-semibold text-slate-800">Phone: {site.phone}</a>
          <CTAButton href="/get-quote">Get Quote</CTAButton>
        </div>
      </div>
    </header>
  );
}
