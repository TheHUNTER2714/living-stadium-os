// Knowledge base of all 16 FIFA World Cup 2026 venues, with indoor zone graphs
// used by AR wayfinding and the Copilot.

export type Zone = {
  id: string;
  label: string;
  detail: string;
  icon: string;
  dir: number;      // bearing in degrees from the fan's default entry orientation
  distance: number; // metres
  level: number;
  accessible: boolean;
};

export type Stadium = {
  id: string;
  name: string;
  city: string;
  country: "USA" | "Canada" | "Mexico";
  capacity: number;
  roof: "Open" | "Retractable" | "Fixed";
  surface: string;
  opened: number;
  matches: string;
  tz: string;
  zones: Zone[];
};

const baseZones = (seed: number, levels = 4): Zone[] => {
  const spec: Array<[string, string, string, string, boolean]> = [
    ["seat", "My Seat", "Row 22 · Seat 14", "🎟", "", true],
    ["gate", "Entry Gate", "Ticket scan lanes", "🚩", "", true],
    ["food", "Food Court", "Local street-food hall", "🍔", "", true],
    ["washroom", "Accessible WC", "Step-free cubicles", "♿", "", true],
    ["water", "Water Refill", "Free chilled taps", "💧", "", true],
    ["merch", "Team Store", "Kits & scarves", "🛍", "", true],
    ["medical", "Medical Post", "Paramedic station", "⛑", "", true],
    ["lift", "Elevator Bank", "Step-free to all levels", "🛗", "", true],
    ["family", "Family Lounge", "Baby-change & quiet room", "🧸", "", true],
    ["fanzone", "Fan Zone", "Live DJ & big screen", "🎪", "", true],
    ["exit", "Nearest Exit", "Crowd-managed egress", "🚪", "", true],
    ["transit", "Transit Hub", "Metro / shuttle bays", "🚇", "", true],
  ];
  return spec.map(([id, label, detail, icon], i) => {
    const r = (seed * (i + 3) * 37) % 360;
    return {
      id,
      label,
      detail,
      icon,
      dir: Math.round(r - 180),
      distance: 25 + ((seed * (i + 5) * 13) % 120),
      level: 1 + ((i + seed) % levels),
      accessible: id !== "fanzone" ? true : false,
    };
  });
};

export const STADIUMS: Stadium[] = [
  { id: "azteca", name: "Estadio Azteca", city: "Mexico City", country: "Mexico", capacity: 87523, roof: "Open", surface: "Hybrid grass", opened: 1966, matches: "Opening Match + 4", tz: "CST", zones: baseZones(2) },
  { id: "metlife", name: "MetLife Stadium", city: "New York / New Jersey", country: "USA", capacity: 82500, roof: "Open", surface: "Natural grass overlay", opened: 2010, matches: "Final + 7", tz: "EDT", zones: baseZones(3) },
  { id: "att", name: "AT&T Stadium", city: "Dallas", country: "USA", capacity: 80000, roof: "Retractable", surface: "Natural grass overlay", opened: 2009, matches: "Semi-final + 8", tz: "CDT", zones: baseZones(4) },
  { id: "arrowhead", name: "Arrowhead Stadium", city: "Kansas City", country: "USA", capacity: 76416, roof: "Open", surface: "Natural grass", opened: 1972, matches: "Quarter-final + 5", tz: "CDT", zones: baseZones(5) },
  { id: "nrg", name: "NRG Stadium", city: "Houston", country: "USA", capacity: 72220, roof: "Retractable", surface: "Natural grass overlay", opened: 2002, matches: "Round of 16 + 6", tz: "CDT", zones: baseZones(6) },
  { id: "mercedes", name: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA", capacity: 71000, roof: "Retractable", surface: "Natural grass overlay", opened: 2017, matches: "Semi-final + 7", tz: "EDT", zones: baseZones(7) },
  { id: "sofi", name: "SoFi Stadium", city: "Los Angeles", country: "USA", capacity: 70240, roof: "Fixed canopy", surface: "Natural grass overlay", opened: 2020, matches: "Quarter-final + 7", tz: "PDT", zones: baseZones(8) },
  { id: "levis", name: "Levi's Stadium", city: "San Francisco Bay Area", country: "USA", capacity: 68500, roof: "Open", surface: "Natural grass", opened: 2014, matches: "Round of 32 + 5", tz: "PDT", zones: baseZones(9) },
  { id: "lincoln", name: "Lincoln Financial Field", city: "Philadelphia", country: "USA", capacity: 69796, roof: "Open", surface: "Natural grass", opened: 2003, matches: "Round of 16 + 5", tz: "EDT", zones: baseZones(10) },
  { id: "gillette", name: "Gillette Stadium", city: "Boston", country: "USA", capacity: 65878, roof: "Open", surface: "Natural grass overlay", opened: 2002, matches: "Quarter-final + 6", tz: "EDT", zones: baseZones(11) },
  { id: "hardrock", name: "Hard Rock Stadium", city: "Miami", country: "USA", capacity: 65326, roof: "Canopy", surface: "Natural grass", opened: 1987, matches: "Third-place + 6", tz: "EDT", zones: baseZones(12) } as Stadium,
  { id: "lumen", name: "Lumen Field", city: "Seattle", country: "USA", capacity: 69000, roof: "Partial canopy", surface: "Natural grass overlay", opened: 2002, matches: "Round of 32 + 5", tz: "PDT", zones: baseZones(13) } as Stadium,
  { id: "bmo", name: "BMO Field", city: "Toronto", country: "Canada", capacity: 45736, roof: "Open", surface: "Natural grass", opened: 2007, matches: "Group stage + Round of 32", tz: "EDT", zones: baseZones(14) },
  { id: "bcplace", name: "BC Place", city: "Vancouver", country: "Canada", capacity: 54500, roof: "Retractable", surface: "Natural grass overlay", opened: 1983, matches: "Round of 16 + 6", tz: "PDT", zones: baseZones(15) },
  { id: "akron", name: "Estadio Akron", city: "Guadalajara", country: "Mexico", capacity: 48071, roof: "Open", surface: "Natural grass", opened: 2010, matches: "Group stage x4", tz: "CST", zones: baseZones(16) },
  { id: "bbva", name: "Estadio BBVA", city: "Monterrey", country: "Mexico", capacity: 53500, roof: "Open", surface: "Natural grass", opened: 2015, matches: "Group stage + Round of 32", tz: "CST", zones: baseZones(17) },
];

export const getStadium = (id: string) => STADIUMS.find((s) => s.id === id);

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

export function findStadium(q: string): Stadium | undefined {
  const n = norm(q);
  return (
    STADIUMS.find((s) => n.includes(norm(s.name))) ??
    STADIUMS.find((s) => n.includes(norm(s.city))) ??
    STADIUMS.find((s) => n.includes(s.id))
  );
}

export function stadiumAnswer(q: string): string | null {
  const n = norm(q);
  const s = findStadium(q);
  if (s) {
    if (/toilet|washroom|wc|bathroom|food|water|exit|gate|medical|lift|elevator|shop|store|where/.test(n)) {
      return `${s.name} services: ${s.zones.map((z) => `${z.icon} ${z.label} (L${z.level}, ~${z.distance}m)`).join(" · ")}. Open AR Wayfinding and pick this venue to be guided there.`;
    }
    return `${s.name} — ${s.city}, ${s.country}. Capacity ${s.capacity.toLocaleString()}, ${s.roof.toLowerCase()} roof, ${s.surface}, opened ${s.opened}. Hosting: ${s.matches} (${s.tz}). I have ${s.zones.length} indoor waypoints mapped for AR wayfinding here.`;
  }
  if (/how many stadium|all stadium|venue list|which stadium|stadiums/.test(n)) {
    return `The 2026 World Cup uses ${STADIUMS.length} venues across 3 nations — ${STADIUMS.map((v) => `${v.name} (${v.city})`).join(", ")}. Ask me about any of them for capacity, roof, and mapped AR waypoints.`;
  }
  return null;
}
