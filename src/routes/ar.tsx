import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/ar")({
  head: () => ({ meta: [{ title: "AR Wayfinding · StadiumOS AI" }] }),
  component: AR,
});

const DESTINATIONS = [
  { id: "seat", label: "My Seat", detail: "Row 22 · Seat 14 · 90m", dir: 12 },
  { id: "food", label: "Food Court", detail: "Level 2 · 60m", dir: -35 },
  { id: "washroom", label: "Accessible Washroom", detail: "Sector B · 40m", dir: 45 },
  { id: "exit", label: "Nearest Exit", detail: "North Gate · 110m", dir: 180 },
  { id: "medical", label: "Medical Post", detail: "Level 1 · 70m", dir: -80 },
];

function AR() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dest, setDest] = useState(DESTINATIONS[0]);
  const [status, setStatus] = useState<"idle" | "loading" | "on" | "denied">("idle");
  const [distance, setDistance] = useState(90);

  const start = async () => {
    setStatus("loading");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setStatus("on");
    } catch {
      setStatus("denied");
    }
  };

  useEffect(() => {
    return () => {
      const s = videoRef.current?.srcObject as MediaStream | null;
      s?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  useEffect(() => {
    setDistance(parseInt(dest.detail.match(/(\d+)m/)?.[1] ?? "90"));
    const i = setInterval(() => setDistance((d) => Math.max(2, d - 1)), 800);
    return () => clearInterval(i);
  }, [dest]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Camera feed or fallback */}
      {status === "on" ? (
        <video ref={videoRef} playsInline muted className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-stadium-bg via-slate-900 to-black" />
      )}
      <div className="absolute inset-0 bg-black/30" />

      {/* Top bar */}
      <header className="relative z-20 h-14 bg-black/70 backdrop-blur border-b border-white/10 px-4 flex items-center justify-between">
        <Link to="/dashboard" className="text-xs font-mono text-white/70 hover:text-neon-cyan flex items-center gap-2">
          ← COMMAND
        </Link>
        <div className="flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full border border-neon-cyan/40">
          <span
            className={`size-1.5 rounded-full ${status === "on" ? "bg-neon-green animate-pulse" : "bg-white/40"}`}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan">
            AR WAYFINDING {status === "on" ? "· ACTIVE" : ""}
          </span>
        </div>
        <div className="font-mono text-[10px] text-white/50">HEADING · N 12°</div>
      </header>

      {/* AR overlay */}
      {status === "on" && (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-none">
          {/* Reticle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-neon-cyan/40 rounded-full" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
            <div className="absolute w-8 h-px bg-neon-cyan/60" />
            <div className="absolute w-px h-8 bg-neon-cyan/60" />
          </div>

          {/* Directional arrow */}
          <div
            className="absolute top-1/2 left-1/2"
            style={{ transform: `translate(-50%, -50%) rotate(${dest.dir}deg) translateY(-140px)` }}
          >
            <div className="flex flex-col items-center">
              <div className="text-6xl text-neon-cyan drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]" style={{ animation: "pulse-glow 1.2s ease-in-out infinite" }}>
                ↑
              </div>
            </div>
          </div>

          {/* Path pulses */}
          <div className="absolute inset-x-0 bottom-40 flex flex-col items-center gap-3">
            {[0.4, 0.6, 0.8, 1].map((s, i) => (
              <div
                key={i}
                className="w-16 h-2 rounded-full bg-neon-cyan/60 shadow-[0_0_15px_#22d3ee]"
                style={{ opacity: s, animation: `pulse-glow 1.8s ease-in-out ${i * 0.15}s infinite` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Bottom card */}
      <div className="relative z-20 p-4 space-y-3">
        {status !== "on" && (
          <div className="glass-panel p-6 text-center max-w-md mx-auto">
            <div className="font-display text-2xl text-neon-cyan tracking-widest mb-2">AR WAYFINDING</div>
            <p className="text-sm text-white/70 mb-5">
              {status === "denied"
                ? "Camera permission was denied. Enable it in your browser to see holographic guidance."
                : "Point your camera at the stadium to see holographic arrows guiding you to any destination."}
            </p>
            <button
              onClick={start}
              disabled={status === "loading"}
              className="px-8 py-3 bg-neon-cyan text-black font-display tracking-widest text-sm rounded shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:brightness-110 disabled:opacity-50"
            >
              {status === "loading" ? "STARTING CAMERA..." : "ACTIVATE CAMERA"}
            </button>
          </div>
        )}

        <div className="glass-panel p-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] font-mono text-white/40 uppercase">Navigating to</div>
              <div className="font-display text-xl tracking-wide text-neon-cyan">{dest.label}</div>
              <div className="text-xs text-white/60">{dest.detail}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-white/40 uppercase">Distance</div>
              <div className="font-display text-2xl text-neon-gold tabular-nums">{distance}m</div>
              <div className="text-[10px] font-mono text-neon-green">ETA · {Math.max(1, Math.round(distance / 1.4 / 60))}min</div>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {DESTINATIONS.map((d) => (
              <button
                key={d.id}
                onClick={() => setDest(d)}
                className={`px-3 py-2 rounded-lg text-[11px] font-medium whitespace-nowrap border transition ${
                  dest.id === d.id
                    ? "bg-neon-cyan text-black border-neon-cyan"
                    : "bg-white/5 border-white/10 text-white/70 hover:border-neon-cyan/50 hover:text-white"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
