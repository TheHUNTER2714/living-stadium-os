import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ALL_TEAMS, getTeam } from "@/data/wc2026";
import { LANGUAGES } from "@/data/i18n";
import { loadPassport, savePassport } from "@/lib/passport";
import { playerAvatar } from "@/lib/player-avatar";

export const Route = createFileRoute("/passport")({
  head: () => ({ meta: [{ title: "Fan Passport · StadiumOS AI" }] }),
  component: Passport,
});

function Passport() {
  const navigate = useNavigate();
  const existing = typeof window !== "undefined" ? loadPassport() : null;
  const [name, setName] = useState(existing?.name ?? "");
  const [teamCode, setTeamCode] = useState(existing?.teamCode ?? "");
  const [favoritePlayer, setFavoritePlayer] = useState(existing?.favoritePlayer ?? "");
  const [lang, setLang] = useState(existing?.lang ?? "en");
  const [q, setQ] = useState("");

  const team = getTeam(teamCode);
  const teams = useMemo(
    () => ALL_TEAMS.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()) || t.code.toLowerCase().includes(q.toLowerCase())),
    [q],
  );

  const canSave = name.trim().length >= 2 && teamCode;

  const save = () => {
    if (!canSave) return;
    savePassport({
      name: name.trim(),
      teamCode,
      favoritePlayer: favoritePlayer || undefined,
      lang,
      createdAt: Date.now(),
    });
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-stadium-bg text-white font-sans relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 w-[560px] h-[560px] bg-neon-gold/10 blur-[160px] rounded-full" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-neon-cyan/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <nav className="relative z-10 h-14 bg-black/60 backdrop-blur border-b border-white/10 px-6 flex items-center justify-between">
        <Link to="/" className="font-mono text-[10px] text-white/60 hover:text-neon-cyan">← HOME</Link>
        <div className="font-display tracking-widest text-neon-gold">FAN PASSPORT · REGISTRATION</div>
        <Link to="/dashboard" className="font-mono text-[10px] text-white/60 hover:text-neon-cyan">SKIP →</Link>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto p-6 grid grid-cols-12 gap-6">
        {/* LEFT: Identity card preview */}
        <section className="col-span-12 md:col-span-5">
          <div className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest mb-2">Preview</div>
          <div
            className="rounded-2xl p-6 border shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] relative overflow-hidden aspect-[3/4]"
            style={{
              background: team
                ? `linear-gradient(135deg, ${team.color} 0%, ${team.accent} 100%)`
                : "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              borderColor: team?.accent ?? "rgba(255,255,255,0.1)",
            }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="absolute top-0 right-0 text-[240px] leading-none opacity-20 select-none pointer-events-none">
              {team?.flag ?? "⚽"}
            </div>
            <div className="relative z-10 flex flex-col h-full text-black mix-blend-normal" style={{ color: team?.color === "#FFFFFF" || team?.color === "#FCD116" || team?.color === "#FFDF00" ? "#000" : "#fff" }}>
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-80">FIFA WC 2026 · Fan Passport</span>
                <span className="font-mono text-[10px]">#{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="mt-auto">
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">NAME</div>
                <div className="font-display text-4xl tracking-wide leading-none mb-4">{name || "YOUR NAME"}</div>
                <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
                  <div>
                    <div className="opacity-70">TEAM</div>
                    <div className="font-display text-lg">{team ? `${team.flag} ${team.name}` : "—"}</div>
                  </div>
                  <div>
                    <div className="opacity-70">HERO</div>
                    <div className="font-display text-lg truncate">{favoritePlayer || "—"}</div>
                  </div>
                  <div>
                    <div className="opacity-70">LANG</div>
                    <div className="font-display text-lg">{LANGUAGES.find(l => l.code === lang)?.label ?? "—"}</div>
                  </div>
                  <div>
                    <div className="opacity-70">TIER</div>
                    <div className="font-display text-lg">GOLD ALPHA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT: form */}
        <section className="col-span-12 md:col-span-7 space-y-5">
          <Field label="1 · Your name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Ramirez"
              maxLength={28}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:ring-1 focus:ring-neon-cyan outline-none font-display text-2xl tracking-wide"
            />
          </Field>

          <Field label="2 · Copilot language">
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <button key={l.code} onClick={() => setLang(l.code)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-mono border transition ${lang === l.code ? "bg-neon-cyan/15 border-neon-cyan text-neon-cyan" : "border-white/10 text-white/60 hover:text-white"}`}>
                  <span className="mr-1">{l.flag}</span>{l.label}
                </button>
              ))}
            </div>
          </Field>

          <Field label="3 · Choose your team">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search 48 nations…"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-neon-cyan mb-3" />
            <div className="max-h-56 overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-2 pr-1">
              {teams.map((t) => (
                <button key={t.code} onClick={() => { setTeamCode(t.code); setFavoritePlayer(""); }}
                  className={`flex items-center gap-2 px-3 py-2 rounded border text-left transition ${teamCode === t.code ? "border-neon-cyan bg-neon-cyan/10" : "border-white/10 bg-black/30 hover:border-white/30"}`}>
                  <span className="text-lg">{t.flag}</span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-display tracking-wide text-sm truncate">{t.name}</span>
                    <span className="block font-mono text-[9px] text-white/40">GRP {t.group} · {t.players.length} PL</span>
                  </span>
                </button>
              ))}
              {teams.length === 0 && <div className="col-span-full text-center text-xs text-white/40 py-6">No teams match.</div>}
            </div>
          </Field>

          {team && (
            <Field label={`4 · Your hero from ${team.name}`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
                {team.players.map((p) => (
                  <button key={p.name} onClick={() => setFavoritePlayer(p.name)}
                    className={`flex gap-2 p-2 rounded border transition text-left ${favoritePlayer === p.name ? "border-neon-gold bg-neon-gold/10" : "border-white/10 bg-black/30 hover:border-white/30"}`}>
                    <img src={playerAvatar(p, team)} alt={p.name} className="size-14 rounded shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-mono text-[9px] text-white/40">#{p.no} · {p.pos}</div>
                      <div className="font-display tracking-wide text-sm truncate">{p.name}</div>
                      {p.club && <div className="font-mono text-[9px] text-white/40 truncate">{p.club}</div>}
                    </div>
                  </button>
                ))}
              </div>
            </Field>
          )}

          <div className="flex gap-3">
            <button onClick={save} disabled={!canSave}
              className={`flex-1 h-12 rounded-lg font-display tracking-[0.3em] text-sm transition ${canSave ? "bg-gradient-to-r from-neon-cyan to-neon-gold text-black hover:brightness-110" : "bg-white/5 text-white/30 cursor-not-allowed"}`}>
              MINT PASSPORT & ENTER →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest mb-2">{label}</div>
      {children}
    </div>
  );
}
