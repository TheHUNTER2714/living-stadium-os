// Deterministic player/team avatar renderer — generates SVG data URLs so every
// FIFA WC 2026 player has a unique visual without shipping licensed photos.

import type { Player, Team } from "@/data/wc2026";

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "?";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

export function playerAvatar(p: Player, team?: Team) {
  const color = team?.color ?? "#22d3ee";
  const accent = team?.accent ?? "#fbbf24";
  const seed = hash(p.name);
  const angle = seed % 360;
  const ini = initials(p.name);
  const flag = team?.flag ?? "⚽";
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" width="200" height="260">
  <defs>
    <linearGradient id="g${seed}" gradientTransform="rotate(${angle})">
      <stop offset="0%" stop-color="${color}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <radialGradient id="r${seed}" cx="50%" cy="35%" r="70%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.35)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.4)"/>
    </radialGradient>
  </defs>
  <rect width="200" height="260" fill="url(#g${seed})"/>
  <rect width="200" height="260" fill="url(#r${seed})"/>
  <g opacity="0.15" fill="#000">
    ${Array.from({ length: 6 }).map((_, i) => `<circle cx="${(seed >> (i * 2)) % 200}" cy="${(seed >> (i * 3)) % 260}" r="${20 + (i * 6)}"/>`).join("")}
  </g>
  <text x="100" y="70" font-family="monospace" font-size="16" fill="rgba(255,255,255,0.85)" text-anchor="middle">#${p.no}</text>
  <text x="100" y="150" font-family="'Bebas Neue', sans-serif" font-size="82" font-weight="700" fill="#fff" text-anchor="middle" letter-spacing="2">${ini}</text>
  <text x="100" y="200" font-size="42" text-anchor="middle">${flag}</text>
  <text x="100" y="235" font-family="monospace" font-size="12" fill="rgba(255,255,255,0.75)" text-anchor="middle">${p.pos} · ${team?.code ?? ""}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
