const items = [
  "Free quotes within 24 hours",
  "Bulk pricing available",
  "Custom printing available",
  "Nationwide USA delivery",
];

export function TopTrustBar() {
  return (
    <div className="bg-emerald-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-6 gap-y-2 px-4 py-2 text-xs font-medium md:px-6 md:text-sm">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
