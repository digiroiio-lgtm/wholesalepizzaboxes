import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 md:hidden">
      <div className="mx-auto flex max-w-7xl gap-2">
        <a href="tel:+18889362693" className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-900">Call</a>
        <Link href="/get-quote" className="flex-1 rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-white">Get Quote</Link>
      </div>
    </div>
  );
}
