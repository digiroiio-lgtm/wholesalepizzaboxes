const badges = [
  "Food-Grade Materials",
  "MOQ Programs Available",
  "Custom Printing Support",
  "Nationwide Freight Delivery",
  "Lead Time Transparency",
];

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {badges.map((badge) => (
        <div key={badge} className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-center text-xs font-semibold text-emerald-900">
          {badge}
        </div>
      ))}
    </div>
  );
}
