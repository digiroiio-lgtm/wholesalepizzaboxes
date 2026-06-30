import type { LocationData } from "@/lib/types";

export const locationStates: LocationData[] = [
  { slug: "california", name: "California", type: "state" },
  { slug: "texas", name: "Texas", type: "state" },
  { slug: "florida", name: "Florida", type: "state" },
  { slug: "new-york", name: "New York", type: "state" },
  { slug: "illinois", name: "Illinois", type: "state" },
  { slug: "georgia", name: "Georgia", type: "state" },
  { slug: "pennsylvania", name: "Pennsylvania", type: "state" },
  { slug: "ohio", name: "Ohio", type: "state" },
  { slug: "arizona", name: "Arizona", type: "state" },
  { slug: "north-carolina", name: "North Carolina", type: "state" },
];

export const locationCities: LocationData[] = [
  { slug: "chicago", name: "Chicago", type: "city" },
  { slug: "houston", name: "Houston", type: "city" },
  { slug: "dallas", name: "Dallas", type: "city" },
  { slug: "miami", name: "Miami", type: "city" },
  { slug: "orlando", name: "Orlando", type: "city" },
  { slug: "los-angeles", name: "Los Angeles", type: "city" },
  { slug: "phoenix", name: "Phoenix", type: "city" },
  { slug: "atlanta", name: "Atlanta", type: "city" },
  { slug: "new-york-city", name: "New York City", type: "city" },
  { slug: "philadelphia", name: "Philadelphia", type: "city" },
];

export const allLocations: LocationData[] = [...locationStates, ...locationCities];
export const locationSlugs: string[] = allLocations.map((l) => l.slug);
export const locationMap: Record<string, LocationData> = Object.fromEntries(
  allLocations.map((l) => [l.slug, l])
);
