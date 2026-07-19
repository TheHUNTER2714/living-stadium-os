import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import stadiumTwin from "@/assets/stadium-twin.jpg";
import sustainabilityRing from "@/assets/sustainability-ring.png";

export const Route = createFileRoute("/")({
  component: StadiumOS,
});

function StadiumOS() {
  const [message, setMessage] = useState("");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        d.toLocaleTimeString("en-US", { hour12: false, timeZone: "UTC" }) + " UTC",
      );
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-stadium-bg text-white font-sans selection:bg-neon-cyan/30 flex flex-col">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-neon-cyan/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-neon-gold/10 blur-[140px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <nav className="sticky top-0 z-50 h-14 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-neon-cyan rounded-sm flex items-center justify-center font-display text-xl text-black shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              S
            </div>
            <span className="font-display text-2xl tracking-widest text-white">
              STADIUM<span className="text-neon-cyan">OS</span>
              <span className="text-white/30 text-sm ml-2">AI</span>
            </span>
          </div>
          <div className="hidden lg:flex gap-6 font-mono text-[10px] uppercase tracking-tighter text-white/40">
            <div className="flex flex-col">
              <span>LAT: 25.7617 N</span>
              <span>LNG: 80.1918 W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-neon-cyan">STATE: OPERATIONAL</span>
              <span>LOAD: 84.2%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-neon-gold">FIFA WC 2026</span>
              <span>{clock}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <div className="px-3 py-1 rounded border border-neon-cyan/40 text-[10px] font-mono text-neon-cyan bg-neon-cyan/5">
              EN / AR / ES / FR
            </div>
            <div className="px-3 py-1 rounded border border-white/10 text-[10px] font-mono text-white/70 bg-white/5">
              ACCESSIBILITY: ON
            </div>
          </div>
          <div className="size-8 rounded-full ring-2 ring-neon-gold/50 bg-gradient-to-br from-neon-gold/40 to-neon-cyan/40" />
        </div>
      </nav>

      <main className="relative z-10 flex-1 p-4 grid grid-cols-12 gap-4 min-h-0">
        <div
          className="col-span-12 lg:col-span-3 flex flex-col gap-4"
          style={{ animation: "slide-up-fade 0.6s ease-out both" }}
        >
          <section className="glass-panel flex-1 flex flex-col min-h-[420px]">
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <span className="font-display tracking-wider text-neon-cyan text-lg">
                GENAI COPILOT
              </span>
              <div className="flex gap-1">
                <div className="size-1.5 rounded-full bg-neon-cyan animate-pulse" />
                <div
                  className="size-1.5 rounded-full bg-neon-cyan animate-pulse"
                  style={{ animationDelay: "200ms" }}
                />
              </div>
            </div>
            <div className="flex-1 p-4 space-y-4 text-sm overflow-y-auto">
              <div className="bg-white/5 p-3 rounded-lg border-l-2 border-neon-cyan">
                <p className="text-white/40 text-[10px] mb-1 font-mono">STADIUM_AI · 14:32</p>
                <p className="text-white/90 leading-relaxed">
                  Ready to assist. Metro Gate 4 nearing capacity — recommend rerouting arriving fans to North Plaza via Tunnel B.
                </p>
              </div>
              <div className="bg-neon-cyan/10 p-3 rounded-lg border-l-2 border-neon-cyan ml-6">
                <p className="text-neon-cyan text-[10px] mb-1 font-mono">USER_OPS · 14:33</p>
                <p className="text-white/90 leading-relaxed">Show me crowd heatmaps for the hospitality zone.</p>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border-l-2 border-neon-gold">
                <p className="text-neon-gold text-[10px] mb-1 font-mono">STADIUM_AI · 14:33</p>
                <p className="text-white/90 leading-relaxed">
                  Heatmap loaded. Density peaking at Sector B — deploying volunteer squad Delta-7.
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask StadiumOS..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-3 pr-10 text-xs focus:ring-1 focus:ring-neon-cyan outline-none placeholder:text-white/30"
                />
                <button className="absolute right-2 top-1.5 size-7 rounded bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan text-xs font-mono hover:bg-neon-cyan/30 transition">
                  →
                </button>
              </div>
            </div>
          </section>

          <section className="h-48 grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
            <OpsCell label="SECURITY" value="98% CLEAR" color="text-neon-cyan" />
            <OpsCell label="MEDICAL" value="2 ACTIVE" color="text-neon-alert" alert />
            <OpsCell label="TRANSPORT" value="METRO · 4M" color="text-white" />
            <OpsCell label="ENERGY" value="ECO-MODE" color="text-neon-green" />
          </section>
        </div>

        <div
          className="col-span-12 lg:col-span-6 flex flex-col gap-4"
          style={{ animation: "slide-up-fade 0.8s ease-out both" }}
        >
          <div className="flex-1 glass-panel relative min-h-[420px]">
            <img
              src={stadiumTwin}
              alt="Live 3D digital twin of stadium"
              width={1600}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stadium-bg via-transparent to-transparent" />
            <div className="absolute inset-0 pointer-events-none border-[20px] border-white/[0.02] mix-blend-overlay" />

            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border border-neon-cyan/50 text-[10px] font-mono flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-neon-cyan animate-ping" />
                LIVE DIGITAL TWIN · ESTÁDIO AZTECA
              </div>
              <div className="px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border border-white/20 text-[10px] font-mono">
                LAYERS: HEATMAP · CCTV · EXIT_NODES · AR
              </div>
              <div className="px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border border-neon-gold/40 text-[10px] font-mono text-neon-gold">
                OCCUPANCY 84,202 / 87,523
              </div>
            </div>

            <div className="absolute top-6 right-6 flex flex-col gap-2 text-right font-mono text-[10px] text-neon-cyan/80">
              <div className="px-3 py-1.5 bg-black/60 backdrop-blur rounded border border-white/10">
                LATENCY · 4ms
              </div>
              <div className="px-3 py-1.5 bg-black/60 backdrop-blur rounded border border-white/10">
                IOT SENSORS · 12,480 ONLINE
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/70 backdrop-blur border border-white/10 p-1 rounded-xl">
              <button className="px-5 py-2 rounded-lg bg-neon-cyan text-black text-[11px] font-semibold shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                Heatmap
              </button>
              <button className="px-5 py-2 rounded-lg text-white/60 text-[11px] font-medium hover:text-white transition">
                CCTV
              </button>
              <button className="px-5 py-2 rounded-lg text-white/60 text-[11px] font-medium hover:text-white transition">
                AR Guide
              </button>
              <button className="px-5 py-2 rounded-lg text-white/60 text-[11px] font-medium hover:text-white transition">
                Exits
              </button>
            </div>

            <div className="absolute bottom-6 right-6 text-right font-mono text-[10px] text-neon-cyan/60">
              STADIUM_OS_V2.0.6
              <br />
              WDRM_ACTIVE_720
            </div>
          </div>

          <div className="h-24 glass-panel p-4 flex items-center justify-between gap-6">
            <div className="flex flex-col shrink-0">
              <span className="text-[10px] font-mono text-white/40 uppercase">Predictive Crowd Intelligence</span>
              <span className="text-lg font-display tracking-wide">
                NEXT 15 MIN: <span className="text-neon-gold">MODERATE SURGE</span>
              </span>
            </div>
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan via-neon-gold to-neon-alert w-3/4 shadow-[0_0_10px_#fbbf24]" />
              <div className="absolute inset-y-0 left-[75%] w-px bg-white/50" />
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] font-mono text-white/40 uppercase">Confidence</span>
              <div className="text-xl font-display text-neon-cyan">94.8%</div>
            </div>
          </div>
        </div>

        <div
          className="col-span-12 lg:col-span-3 flex flex-col gap-4"
          style={{ animation: "slide-up-fade 1s ease-out both" }}
        >
          <section className="glass-panel bg-gradient-to-br from-indigo-900/30 to-stadium-bg border border-neon-gold/20">
            <div className="p-5 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neon-gold">FAN PASSPORT</span>
                  <span className="text-2xl font-display tracking-wider">ALEX R.</span>
                </div>
                <div className="size-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neon-gold font-mono text-xs">
                  QR
                </div>
              </div>
              <div className="space-y-2.5 mb-5">
                <PassportRow label="MATCHES" value="04/64" color="text-neon-cyan" />
                <PassportRow label="ECO_STREAK" value="12 DAYS" color="text-neon-green" />
                <PassportRow label="LOYALTY_TIER" value="GOLD ALPHA" color="text-neon-gold" />
              </div>
              <button className="h-10 w-full bg-neon-gold flex items-center justify-center font-display text-black tracking-widest text-sm hover:brightness-110 transition rounded">
                VIEW RECAP REEL
              </button>
            </div>
          </section>

          <section className="glass-panel border border-neon-cyan/40 bg-neon-cyan/5 p-4">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded bg-neon-cyan/20 flex items-center justify-center shrink-0">
                <div className="size-6 border-2 border-neon-cyan rounded-full border-t-transparent animate-spin" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-neon-cyan animate-pulse">GOAL CELEBRATION MODE</div>
                <div className="text-sm font-semibold">MEX 1 — 0 ARG · 44&apos;</div>
              </div>
            </div>
          </section>

          <section className="glass-panel flex-1 p-5">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Sustainability Tracker</span>
              <div className="relative aspect-square w-full max-w-[220px] mx-auto">
                <img
                  src={sustainabilityRing}
                  alt="Sustainability ring"
                  loading="lazy"
                  width={600}
                  height={600}
                  className="absolute inset-0 w-full h-full object-contain animate-[spin_20s_linear_infinite]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-neon-green font-display text-4xl">74%</span>
                  <span className="text-[10px] font-mono text-white/40 uppercase">Green Score</span>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed text-center">
                Your travel choice today reduced the venue carbon footprint by{" "}
                <span className="text-neon-cyan font-mono">1.2kg CO₂</span>.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 h-8 bg-black/80 border-t border-white/10 flex items-center overflow-hidden">
        <div
          className="flex items-center gap-8 px-6 whitespace-nowrap font-mono text-[10px] text-white/50"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-8">
              <TickerItem color="bg-neon-cyan" label="METRO LINE A: 3 MIN WAIT" />
              <TickerItem color="bg-neon-gold" label="GATE 12: CONGESTION RISK" />
              <TickerItem color="bg-neon-green" label="ENERGY SAVED: 42.1 MW" />
              <TickerItem color="bg-neon-cyan" label="VOLUNTEER SYNC: ACTIVE" />
              <TickerItem color="bg-neon-alert" label="SECTOR C: MEDICAL RESPONSE DISPATCHED" />
              <TickerItem color="bg-neon-gold" label="GOAL — MEX 1-0 ARG (44')" />
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

function OpsCell({
  label,
  value,
  color,
  alert,
}: {
  label: string;
  value: string;
  color: string;
  alert?: boolean;
}) {
  return (
    <div
      className={`bg-stadium-bg p-4 flex flex-col justify-between transition-colors ${
        alert ? "hover:bg-neon-alert/10" : "hover:bg-neon-cyan/5"
      }`}
    >
      <span className="text-[10px] text-white/40 font-mono">{label}</span>
      <span className={`text-xl font-display ${color}`}>{value}</span>
    </div>
  );
}

function PassportRow({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-2">
      <span className="text-[10px] font-mono text-white/40">{label}</span>
      <span className={`text-[10px] font-mono ${color}`}>{value}</span>
    </div>
  );
}

function TickerItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`size-1.5 rounded-full ${color}`} />
      {label}
    </span>
  );
}
