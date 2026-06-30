import Link from "next/link";

export function RelatedLinks({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}><Link href={link.href} className="text-emerald-800 hover:underline">{link.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
