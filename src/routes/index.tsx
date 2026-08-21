import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import landingHero from "@/assets/landing-hero.jpg";
import { loadPassport } from "@/lib/passport";
import { BootSequence } from "@/components/BootSequence";
import { CursorSpotlight, ParticleField, AnimatedGrid, Magnetic, CountUp, HoloPanel } from "@/components/fx";
import { STADIUMS } from "@/data/stadiums";
import { ALL_TEAMS, allPlayers } from "@/data/wc2026";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StadiumOS AI — Enter the Living Stadium" },
      { name: "description", content: "The Living Stadium OS for FIFA World Cup 2026 — GenAI copilot, AR wayfinding, 3D digital twin, and cinematic AI-directed highlight reels." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);
  const [booted, setBooted] = useState(false);
  const [hasPassport, setHasPassport] = useState(false);

  useEffect(() => {
    setHasPassport(!!loadPassport());
  }, []);

  useEffect(() => {
    if (!booted) return;
    const timers = [
      setTimeout(() => setStage(1), 200),
      setTimeout(() => setStage(2), 1100),
      setTimeout(() => setStage(3), 2200),
      setTimeout(() => setStage(4), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [booted]);

  const enter = () => navigate({ to: hasPassport ? "/dashboard" : "/passport" });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <BootSequence onDone={() => setBooted(true)} />
      <CursorSpotlight />
      <div className="relative min-h-screen overflow-hidden">
      <img
        src={landingHero}
        alt="Floodlit World Cup 2026 stadium at night"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms]"
        style={{
          opacity: stage >= 1 ? 0.7 : 0,
          transform: `scale(${stage >= 3 ? 1.08 : 1.2})`,
          filter: `brightness(${stage >= 1 ? 1 : 0.2}) saturate(1.2)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
      <AnimatedGrid opacity={stage >= 2 ? 0.5 : 0} className="transition-opacity duration-1000" />
      <ParticleField count={80} />


      {stage >= 1 && (
        <div className="absolute inset-0 pointer-events-none">
          {[15, 35, 55, 75].map((left, i) => (
            <div key={i} className="absolute top-0 w-1 h-1/2 bg-gradient-to-b from-neon-cyan/60 to-transparent origin-top"
              style={{
                left: `${left}%`,
                transform: "translateX(-50%) rotate(180deg)",
                filter: "blur(20px)",
                opacity: stage >= 1 ? 1 : 0,
                animation: `floodlight-in 800ms ease-out ${i * 150}ms both`,
              }} />
          ))}
        </div>
      )}

      {stage >= 2 && stage < 4 && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const r = stage >= 3 ? 60 : 260;
            return (
              <div key={i} className="absolute size-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_#22d3ee]"
                style={{
                  transform: `translate(${Math.cos(angle) * r}px, ${Math.sin(angle) * r}px)`,
                  transition: "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
                }} />
            );
          })}
        </div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000"
        style={{ opacity: stage >= 3 ? 1 : 0, transform: stage >= 3 ? "scale(1)" : "scale(0.9)" }}>
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-neon-cyan/40 rounded-full" style={{ animation: "pulse-glow 3s ease-in-out infinite" }} />
          <div className="relative flex items-center gap-4 px-6 py-3">
            <div className="size-14 bg-neon-cyan rounded flex items-center justify-center font-display text-4xl text-black shadow-[0_0_40px_rgba(34,211,238,0.8)]">S</div>
            <h1 className="font-display text-6xl md:text-8xl tracking-[0.15em] text-white">
              STADIUM<span className="text-neon-cyan">OS</span>
              <span className="text-neon-gold text-3xl ml-3 align-top">AI</span>
            </h1>
          </div>
        </div>
        <p className="mt-4 font-mono text-xs md:text-sm uppercase tracking-[0.5em] text-white/60"
          style={{ opacity: stage >= 4 ? 1 : 0, transition: "opacity 800ms ease-out 400ms" }}>
          The Living Stadium · FIFA World Cup 2026
        </p>

        <div className="mt-12 flex flex-col items-center gap-4"
          style={{ opacity: stage >= 4 ? 1 : 0, transform: stage >= 4 ? "translateY(0)" : "translateY(20px)", transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1) 600ms" }}>
          <Magnetic onClick={enter}
            className="group relative px-10 py-4 bg-neon-cyan text-black font-display tracking-[0.3em] text-lg rounded shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:shadow-[0_0_60px_rgba(34,211,238,0.8)]">
            {hasPassport ? "ENTER STADIUM" : "MINT FAN PASSPORT"}
            <span className="ml-3 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Magnetic>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-white/40">
            <button onClick={() => navigate({ to: "/dashboard" })} className="hover:text-neon-cyan transition">[ SKIP TO DASHBOARD ]</button>
            <button onClick={() => navigate({ to: "/ar" })} className="hover:text-neon-cyan transition">[ AR WAYFINDING ]</button>
            <span className="text-neon-cyan">System Ready</span>
          </div>
        </div>
      </div>

      {stage >= 3 && (
        <>
          <Bracket className="top-6 left-6" corner="tl" />
          <Bracket className="top-6 right-6" corner="tr" />
          <Bracket className="bottom-6 left-6" corner="bl" />
          <Bracket className="bottom-6 right-6" corner="br" />
        </>
      )}

      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent pointer-events-none opacity-40"
        style={{ animation: "scanline-y 6s linear infinite" }} />

      <div className="absolute bottom-6 inset-x-0 text-center font-mono text-[10px] tracking-[0.4em] text-white/35 animate-pulse">
        SCROLL FOR SYSTEM TELEMETRY ↓
      </div>
      </div>

      {/* Scroll-triggered telemetry deck */}
      <section className="relative py-24 px-6">
        <AnimatedGrid opacity={0.3} />
        <ParticleField count={45} link={false} />
        <div className="relative max-w-5xl mx-auto">
          <h2 className="font-display text-4xl tracking-[0.2em] text-center text-white/90">SYSTEM <span className="text-neon-cyan">INDEX</span></h2>
          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">Live knowledge graph loaded on boot</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Venues mapped", value: STADIUMS.length, suffix: "", note: "AR waypoint graphs" },
              { label: "Nations", value: ALL_TEAMS.length, suffix: "", note: "Official FIFA squads" },
              { label: "Players indexed", value: allPlayers().length, suffix: "", note: "Portraits + stats" },
              { label: "Edge sensors", value: 12480, suffix: "", note: "Streaming at 60 Hz" },
            ].map((s, i) => (
              <HoloPanel key={s.label} delay={i * 120} className="p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">{s.label}</div>
                <div className="font-display text-4xl text-neon-cyan mt-1">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] text-white/50 mt-1">{s.note}</div>
              </HoloPanel>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "AR WAYFINDING", d: `Indoor waypoint graphs for all ${STADIUMS.length} venues — seats, step-free lifts, medical, transit.`, to: "/ar" as const, icon: "🧭" },
              { t: "MISSION CONTROL", d: "3D digital twin, predictive crowd intelligence, and a voice GenAI copilot.", to: "/dashboard" as const, icon: "🛰" },
              { t: "HIGHLIGHT REEL", d: "One-click cinematic recap with funk score, your team, and your hero player.", to: "/reel" as const, icon: "🎬" },
            ].map((c, i) => (
              <HoloPanel key={c.t} delay={i * 140} className="p-6">
                <div className="text-3xl">{c.icon}</div>
                <div className="font-display text-2xl tracking-widest text-white mt-2">{c.t}</div>
                <p className="text-sm text-white/55 mt-2">{c.d}</p>
                <Magnetic strength={10} onClick={() => navigate({ to: c.to })}
                  className="mt-4 px-4 py-2 rounded border border-neon-cyan/50 text-neon-cyan font-mono text-[10px] tracking-widest hover:bg-neon-cyan/10">
                  OPEN →
                </Magnetic>
              </HoloPanel>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes floodlight-in { from { opacity: 0; height: 0; } to { opacity: 1; height: 50%; } }
        @keyframes scanline-y { 0% { transform: translateY(-20vh); } 100% { transform: translateY(120vh); } }
      `}</style>

    </div>
  );
}

function Bracket({ className, corner }: { className: string; corner: "tl" | "tr" | "bl" | "br" }) {
  const borders: Record<string, string> = {
    tl: "border-t-2 border-l-2",
    tr: "border-t-2 border-r-2",
    bl: "border-b-2 border-l-2",
    br: "border-b-2 border-r-2",
  };
  return <div className={`absolute size-12 ${borders[corner]} border-neon-cyan/60 ${className}`} style={{ animation: "fade-in 800ms ease-out both" }} />;
}
