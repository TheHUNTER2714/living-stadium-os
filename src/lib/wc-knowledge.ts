// Copilot knowledge layer over the official FIFA World Cup 2026 dataset.
// Answers squad / player / team questions straight from FIFA.com data.

import { ALL_TEAMS, allPlayers, type Player, type Team } from "@/data/wc2026";
import { stadiumAnswer } from "@/data/stadiums";


const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();

const ALIASES: Record<string, string> = {
  usa: "USA", "united states": "USA", america: "USA", holland: "NED", netherlands: "NED",
  england: "ENG", scotland: "SCO", "south korea": "KOR", korea: "KOR", "saudi arabia": "KSA",
  "south africa": "RSA", "ivory coast": "CIV", "cape verde": "CPV", "cabo verde": "CPV",
  "dr congo": "COD", congo: "COD", turkey: "TUR", turkiye: "TUR", spain: "ESP", germany: "GER",
};

export function findTeam(q: string): Team | undefined {
  const n = norm(q);
  for (const [k, code] of Object.entries(ALIASES)) if (n.includes(k)) return ALL_TEAMS.find((t) => t.code === code);
  return ALL_TEAMS.find((t) => n.includes(norm(t.name))) ?? ALL_TEAMS.find((t) => new RegExp(`\\b${t.code.toLowerCase()}\\b`).test(n));
}

export function findPlayer(q: string): (Player & { team: Team }) | undefined {
  const n = norm(q);
  const all = allPlayers();
  const exact = all.find((p) => n.includes(norm(p.name)));
  if (exact) return exact;
  const tokens = n.split(" ").filter((w) => w.length >= 4);
  let best: (Player & { team: Team }) | undefined;
  for (const p of all) {
    const parts = norm(p.name).split(" ");
    if (parts.some((part) => part.length >= 4 && tokens.includes(part))) { best = p; break; }
  }
  return best;
}

function squadLine(t: Team) {
  const by = (pos: Player["pos"]) => t.players.filter((p) => p.pos === pos).map((p) => `#${p.no} ${p.name}`).join(", ");
  return `${t.name} (${t.confederation}${t.host ? ", host" : ""}) — ${t.players.length} players${t.finalPosition ? `, finished: ${t.finalPosition}` : ""}.
GK: ${by("GK")}
DF: ${by("DF")}
MF: ${by("MF")}
FW: ${by("FW")}`;
}

/** Returns a data-grounded answer, or null when the question isn't about WC26 squads. */
export function answerFromData(q: string): string | null {
  const n = norm(q);
  const venue = stadiumAnswer(q);
  if (venue) return venue;
  const player = findPlayer(q);
  const team = findTeam(q);


  if (player && !/squad|roster|lineup|team list|players of/.test(n)) {
    const age = player.birth ? Math.floor((Date.now() - new Date(player.birth).getTime()) / 3.15576e10) : null;
    const posName = { GK: "goalkeeper", DF: "defender", MF: "midfielder", FW: "forward" }[player.pos];
    return `${player.name} — ${posName} for ${player.team.name}, shirt #${player.no}.${age ? ` Age ${age}.` : ""}${player.height ? ` ${player.height} cm` : ""}${player.weight ? `, ${player.weight} kg` : ""}. Official FIFA World Cup 2026 squad data.`;
  }

  if (team) {
    if (/squad|roster|lineup|players|who plays|line up/.test(n)) return squadLine(team);
    if (/scorer|goal/.test(n) && team.topScorers.length) return `${team.name} top scorer at the 2026 World Cup: ${team.topScorers.join(", ")}.`;
    if (/finish|result|how far|position|knock/.test(n)) return `${team.name} finished at the ${team.finalPosition ?? "group stage"} of the FIFA World Cup 2026.`;
    if (/captain|keeper|goalkeeper/.test(n)) {
      const gk = team.players.filter((p) => p.pos === "GK").map((p) => `#${p.no} ${p.name}`).join(", ");
      return `${team.name} goalkeepers: ${gk}.`;
    }
    return `${team.name} — ${team.confederation}${team.host ? " (host nation)" : ""}, ${team.players.length}-player squad, finished ${team.finalPosition ?? "group stage"}. Top scorer: ${team.topScorers[0] ?? "n/a"}. Ask me for the full squad any time.`;
  }

  if (/how many teams|48 teams|all teams|team list/.test(n)) {
    return `The FIFA World Cup 2026 features ${ALL_TEAMS.length} nations across ${new Set(ALL_TEAMS.map((t) => t.confederation)).size} confederations, hosted by ${ALL_TEAMS.filter((t) => t.host).map((t) => t.name).join(", ")}. I have all ${allPlayers().length} squad players loaded.`;
  }
  return null;
}
