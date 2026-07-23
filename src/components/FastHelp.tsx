import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type Tip = { k: string; v: string };

const ROUTE_TIPS: Record<string, Tip[]> = {
  "/dashboard": [
    { k: "🎙 Hold mic", v: "Push-to-talk in your Copilot language" },
    { k: "Alerts", v: "Set thresholds — only surge speaks aloud" },
    { k: "3D twin", v: "Move cursor over map to tilt view" },
    { k: "Layers", v: "Toggle Heatmap · CCTV · Exit nodes" },
  ],
  "/reel": [
    { k: "Space", v: "Pause / resume playback" },
    { k: "← →", v: "Skip scene back / forward" },
    { k: "Upload", v: "Reaction clip + your own funk track" },
    { k: "Export", v: "Poster PNG · Manifest JSON · Share" },
  ],
  "/passport": [
    { k: "📷 Photo", v: "Attach a real player photo — used in the reel" },
    { k: "Team", v: "Pick from all 48 FIFA WC 2026 nations" },
    { k: "Lang", v: "Sets your Copilot voice + captions" },
  ],
  "/ar": [
    { k: "Compass", v: "Arrow rotates to your device heading" },
    { k: "Drop pin", v: "Save custom waypoint at current spot" },
    { k: "Torch", v: "Toggle camera flash for dark tunnels" },
  ],
  "/": [
    { k: "Enter", v: "Boot into the command center" },
  ],
};

export function FastHelp() {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState<string>(() => (typeof window !== "undefined" ? window.location.pathname : "/"));

  useEffect(() => {
    const sync = () => setRoute(window.location.pathname);
    sync();
    window.addEventListener("popstate", sync);
    const id = window.setInterval(sync, 500);
    return () => { window.removeEventListener("popstate", sync); window.clearInterval(id); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "?" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault(); setOpen((o) => !o);
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const tips = ROUTE_TIPS[route] ?? ROUTE_TIPS["/"];

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed z-[70] bottom-5 right-5 size-12 rounded-full bg-neon-cyan text-black font-display text-xl shadow-[0_10px_40px_-10px_rgba(34,211,238,0.9)] border border-white/20 hover:scale-105 transition"
        title="Fast help — press ?"
        aria-label="Fast help"
      >
        ?
      </button>

      {open && (
        <div className="fixed z-[69] bottom-20 right-5 w-[320px] max-w-[calc(100vw-2rem)] rounded-2xl border border-neon-cyan/40 bg-black/85 backdrop-blur-xl p-4 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9)]"
             style={{ animation: "slide-up-fade 240ms ease-out both" }}>
          <div className="flex items-center justify-between mb-3">
            <div className="font-display tracking-widest text-neon-gold text-sm">FAST HELP</div>
            <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white text-xs font-mono">ESC ✕</button>
          </div>

          <div className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan mb-2">Tips · {route}</div>
          <ul className="space-y-1.5 mb-3">
            {tips.map((t) => (
              <li key={t.k} className="flex items-start gap-2 text-xs">
                <span className="font-mono text-neon-gold shrink-0 min-w-[70px]">{t.k}</span>
                <span className="text-white/80">{t.v}</span>
              </li>
            ))}
          </ul>

          <div className="text-[10px] font-mono uppercase tracking-widest text-neon-cyan mb-2">Jump to</div>
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            <Link to="/dashboard" onClick={() => setOpen(false)} className="text-xs font-mono px-2 py-1.5 rounded border border-white/10 hover:border-neon-cyan hover:text-neon-cyan text-white/70">◉ COMMAND</Link>
            <Link to="/reel" onClick={() => setOpen(false)} className="text-xs font-mono px-2 py-1.5 rounded border border-white/10 hover:border-neon-cyan hover:text-neon-cyan text-white/70">▶ REEL</Link>
            <Link to="/ar" onClick={() => setOpen(false)} className="text-xs font-mono px-2 py-1.5 rounded border border-white/10 hover:border-neon-cyan hover:text-neon-cyan text-white/70">⌖ AR</Link>
            <Link to="/passport" onClick={() => setOpen(false)} className="text-xs font-mono px-2 py-1.5 rounded border border-white/10 hover:border-neon-cyan hover:text-neon-cyan text-white/70">✦ PASSPORT</Link>
          </div>

          <div className="text-[9px] font-mono text-white/40 text-center border-t border-white/10 pt-2">
            Press <span className="text-neon-cyan">?</span> anywhere · StadiumOS AI
          </div>
        </div>
      )}
    </>
  );
}
