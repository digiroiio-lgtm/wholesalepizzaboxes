import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => (
          <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
            {item.href ? <Link href={item.href} className="hover:text-emerald-800">{item.label}</Link> : <span>{item.label}</span>}
            {idx < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
