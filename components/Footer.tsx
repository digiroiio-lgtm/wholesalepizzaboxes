import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-bold text-slate-900">Wholesale Pizza Boxes</h3>
          <p className="mt-2 text-sm text-slate-700">Industrial B2B pizza packaging supply with nationwide delivery support.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/pizza-box-manufacturer">Manufacturer</Link></li>
            <li><Link href="/get-quote">Get Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <p className="mt-2 text-sm text-slate-700">Phone: (888) 936-BOXES</p>
          <p className="text-sm text-slate-700">Email: sales@wholesalepizzaboxes.com</p>
        </div>
      </div>
    </footer>
  );
}
