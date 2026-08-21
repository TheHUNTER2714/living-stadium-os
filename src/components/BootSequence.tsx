import { useEffect, useState } from "react";

const LINES = [
  "STADIUMOS KERNEL v26.4 … OK",
  "MOUNTING DIGITAL TWIN MESH … OK",
  "LINKING 12,480 EDGE SENSORS … OK",
  "LOADING 48 SQUADS · 1,248 PLAYERS … OK",
  "MAPPING 16 WORLD CUP VENUES … OK",
  "CALIBRATING AR WAYFINDING COMPASS … OK",
  "GENAI COPILOT ONLINE",
];

export function BootSequence({ onDone }: { onDone?: () => void }) {
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (n >= LINES.length) {
      const t = setTimeout(() => { setGone(true); onDone?.(); }, 550);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setN((v) => v + 1), n === 0 ? 260 : 190);
    return () => clearTimeout(t);
  }, [n, onDone]);

  if (gone) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: n >= LINES.length ? 0 : 1 }}>
      <div className="w-[min(560px,88vw)] font-mono text-[11px] leading-relaxed">
        <div className="text-neon-cyan/60 mb-3 tracking-[0.35em]">// BOOT SEQUENCE</div>
        {LINES.slice(0, n).map((l, i) => (
          <div key={l} className="flex items-center gap-2 text-white/70" style={{ animation: "slide-up-fade 260ms ease-out both" }}>
            <span className="text-neon-cyan">›</span>
            <span>{l}</span>
            <span className="ml-auto text-neon-green">{i === n - 1 ? "…" : "✓"}</span>
          </div>
        ))}
        <div className="mt-4 h-px bg-white/10 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-neon-cyan transition-all duration-200"
            style={{ width: `${(n / LINES.length) * 100}%`, boxShadow: "0 0 12px #22d3ee" }} />
        </div>
      </div>
    </div>
  );
}
