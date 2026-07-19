import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import fansImg from "@/assets/reel-fans.jpg";
import goalImg from "@/assets/reel-goal.jpg";
import crowdImg from "@/assets/reel-crowd.jpg";
import stadiumTwin from "@/assets/stadium-twin.jpg";

export const Route = createFileRoute("/reel")({
  head: () => ({ meta: [{ title: "Highlight Reel · StadiumOS AI" }] }),
  component: Reel,
});

type Phase = "idle" | "building" | "playing" | "done";

const SCENES = [
  {
    img: stadiumTwin,
    title: "STADIUM ENTRY",
    caption: "Estádio Azteca · 14:02 · Gate 4",
    ai: "You entered through the AI-optimized fast lane, skipping a 22-min queue.",
    tint: "from-neon-cyan/40",
  },
  {
    img: fansImg,
    title: "PRE-MATCH ENERGY",
    caption: "Sector B · Row 22",
    ai: "Crowd sentiment: 92% euphoric. You joined 84,000 fans in the anthem.",
    tint: "from-neon-gold/40",
  },
  {
    img: goalImg,
    title: "THE GOAL",
    caption: "MEX 1 - 0 ARG · 44'",
    ai: "Peak decibel: 118 dB. Your reaction synchronized with 78,000 others.",
    tint: "from-neon-alert/40",
  },
  {
    img: crowdImg,
    title: "FULL-TIME CELEBRATION",
    caption: "Extra time · confetti mode engaged",
    ai: "Fan Passport +250 XP. Eco-streak extended to 12 days.",
    tint: "from-neon-green/40",
  },
];

const BUILD_STEPS = [
  "Scanning fan passport timeline...",
  "Extracting match reactions from 44'...",
  "Compositing navigation journey...",
  "Generating AI commentary voiceover...",
  "Color grading & final render...",
];

function Reel() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [buildStep, setBuildStep] = useState(0);
  const [scene, setScene] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startedAt = useRef<number>(0);
  const TOTAL_MS = SCENES.length * 4000;

  const generate = () => {
    setPhase("building");
    setBuildStep(0);
  };

  // Building sequence
  useEffect(() => {
    if (phase !== "building") return;
    if (buildStep >= BUILD_STEPS.length) {
      const t = setTimeout(() => {
        setPhase("playing");
        setScene(0);
        setProgress(0);
        startedAt.current = performance.now();
      }, 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setBuildStep((s) => s + 1), 700);
    return () => clearTimeout(t);
  }, [phase, buildStep]);

  // Playback
  useEffect(() => {
    if (phase !== "playing") return;
    const loop = () => {
      const elapsed = performance.now() - startedAt.current;
      const p = Math.min(1, elapsed / TOTAL_MS);
      setProgress(p);
      const s = Math.min(SCENES.length - 1, Math.floor(elapsed / 4000));
      setScene(s);
      if (p < 1) rafRef.current = requestAnimationFrame(loop);
      else setPhase("done");
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [phase]);

  const current = SCENES[scene];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      <header className="sticky top-0 z-30 h-14 bg-black/70 backdrop-blur border-b border-white/10 px-6 flex items-center justify-between">
        <Link to="/dashboard" className="text-xs font-mono text-white/70 hover:text-neon-cyan">
          ← COMMAND
        </Link>
        <div className="font-display tracking-widest text-neon-gold">CINEMATIC HIGHLIGHT REEL</div>
        <div className="font-mono text-[10px] text-white/50">AI DIRECTOR · v2.6</div>
      </header>

      {phase === "idle" && (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-2xl text-center">
            <div className="inline-block px-3 py-1 rounded-full border border-neon-gold/40 bg-neon-gold/10 text-neon-gold text-[10px] font-mono uppercase tracking-widest mb-6">
              One-Click · AI Directed
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-wide mb-4">
              YOUR MATCH,<br />
              <span className="text-neon-cyan">RECUT BY AI.</span>
            </h1>
            <p className="text-white/70 max-w-lg mx-auto mb-10">
              StadiumOS AI stitches your reactions, navigation journey, and moments from the match into a
              cinematic recap — with generated commentary and synchronized celebration effects.
            </p>
            <button
              onClick={generate}
              className="px-10 py-4 bg-gradient-to-r from-neon-gold to-neon-cyan text-black font-display tracking-[0.3em] text-lg rounded shadow-[0_0_60px_rgba(251,191,36,0.4)] hover:shadow-[0_0_80px_rgba(34,211,238,0.6)] transition-all hover:scale-105"
            >
              GENERATE REEL →
            </button>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {SCENES.slice(0, 3).map((s, i) => (
                <img
                  key={i}
                  src={s.img}
                  alt=""
                  className="aspect-video object-cover rounded opacity-40 hover:opacity-70 transition"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {phase === "building" && (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full">
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-3 rounded-full bg-neon-cyan animate-ping" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan">
                  AI DIRECTOR RENDERING
                </span>
              </div>
              <div className="space-y-3">
                {BUILD_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 text-sm transition ${
                      i < buildStep ? "text-white/40" : i === buildStep ? "text-neon-cyan" : "text-white/20"
                    }`}
                  >
                    <div
                      className={`size-4 rounded-full border ${
                        i < buildStep
                          ? "bg-neon-cyan border-neon-cyan"
                          : i === buildStep
                            ? "border-neon-cyan animate-pulse"
                            : "border-white/20"
                      }`}
                    />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-gold transition-all duration-500"
                  style={{ width: `${(buildStep / BUILD_STEPS.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {(phase === "playing" || phase === "done") && (
        <div className="flex-1 relative overflow-hidden">
          {/* Scene stack (crossfade) */}
          {SCENES.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: scene === i ? 1 : 0 }}
            >
              <img
                src={s.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transform: scene === i ? "scale(1.08)" : "scale(1)",
                  transition: "transform 4000ms ease-out",
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${s.tint} via-black/40 to-black/70`} />
            </div>
          ))}

          {/* Confetti during goal scene */}
          {scene === 2 && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute size-1.5"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `-5%`,
                    background: ["#22d3ee", "#fbbf24", "#f43f5e", "#22c55e"][i % 4],
                    animation: `confetti-fall ${3 + Math.random() * 2}s linear ${Math.random()}s infinite`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Overlay copy */}
          <div className="absolute inset-x-0 bottom-24 px-8 md:px-16 z-10">
            <div key={scene} style={{ animation: "slide-up-fade 800ms ease-out both" }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-neon-cyan mb-2">
                {String(scene + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")} · {current.caption}
              </div>
              <h2 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-3">
                {current.title}
              </h2>
              <div className="max-w-xl border-l-2 border-neon-cyan pl-4">
                <div className="text-[10px] font-mono text-neon-cyan mb-1">AI COMMENTARY</div>
                <p className="text-lg text-white/90">{current.ai}</p>
              </div>
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 size-8 border-t-2 border-l-2 border-neon-cyan/60" />
          <div className="absolute top-4 right-4 size-8 border-t-2 border-r-2 border-neon-cyan/60" />
          <div className="absolute bottom-4 left-4 size-8 border-b-2 border-l-2 border-neon-cyan/60" />
          <div className="absolute bottom-4 right-4 size-8 border-b-2 border-r-2 border-neon-cyan/60" />

          {/* Progress bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-white/60 tabular-nums">
                {formatTime(progress * (TOTAL_MS / 1000))}
              </span>
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-gold"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-white/60 tabular-nums">{formatTime(TOTAL_MS / 1000)}</span>
            </div>
          </div>

          {phase === "done" && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur">
              <div className="text-center">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neon-gold mb-3">
                  REEL COMPLETE
                </div>
                <h2 className="font-display text-5xl tracking-widest mb-6">SHARE THE MOMENT</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setPhase("playing");
                      setScene(0);
                      setProgress(0);
                      startedAt.current = performance.now();
                    }}
                    className="px-6 py-3 bg-neon-cyan text-black font-display tracking-widest text-sm rounded"
                  >
                    REPLAY
                  </button>
                  <button className="px-6 py-3 border border-neon-gold text-neon-gold font-display tracking-widest text-sm rounded hover:bg-neon-gold hover:text-black transition">
                    DOWNLOAD MP4
                  </button>
                  <button className="px-6 py-3 border border-white/30 text-white font-display tracking-widest text-sm rounded hover:bg-white hover:text-black transition">
                    SHARE
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes confetti-fall {
          to { transform: translateY(110vh) rotate(720deg); }
        }
      `}</style>
    </div>
  );
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}
