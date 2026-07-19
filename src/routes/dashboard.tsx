import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import stadiumTwin from "@/assets/stadium-twin.jpg";
import sustainabilityRing from "@/assets/sustainability-ring.png";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{ title: "Mission Control · StadiumOS AI" }],
  }),
  component: Dashboard,
});

type ChatMsg = { role: "ai" | "user"; text: string; ts: string };

const AI_REPLIES: Record<string, string> = {
  seat: "Optimal route: Gate 4 → Escalator B → Row 22, Seat 14. ETA 3 min.",
  food: "Shortest wait: Taco Cantina — 2 min. Level 2, Section D.",
  washroom: "Nearest accessible washroom: Sector B, 40m north. Reserved lane active.",
  traffic: "Leave in 12 min via Metro Line A to beat the 82% congestion surge.",
  default: "Routing your request through the digital twin — recommendations updated on-screen.",
};

function getReply(q: string) {
  const s = q.toLowerCase();
  if (s.includes("seat")) return AI_REPLIES.seat;
  if (s.includes("food") || s.includes("eat") || s.includes("stall")) return AI_REPLIES.food;
  if (s.includes("washroom") || s.includes("toilet") || s.includes("restroom")) return AI_REPLIES.washroom;
  if (s.includes("leave") || s.includes("traffic") || s.includes("metro")) return AI_REPLIES.traffic;
  return AI_REPLIES.default;
}

function Dashboard() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [clock, setClock] = useState("");
  const [layer, setLayer] = useState<"heatmap" | "cctv" | "ar" | "exits">("heatmap");
  const [occupancy, setOccupancy] = useState(84202);
  const [latency, setLatency] = useState(4);
  const [sensors, setSensors] = useState(12480);
  const [surge, setSurge] = useState(75);
  const [tilt, setTilt] = useState({ x: -12, y: 0 });
  const twinRef = useRef<HTMLDivElement>(null);

  const [chat, setChat] = useState<ChatMsg[]>([
    { role: "ai", text: "Ready to assist. Metro Gate 4 nearing capacity — recommend rerouting to North Plaza via Tunnel B.", ts: "14:32" },
  ]);
  const chatEnd = useRef<HTMLDivElement>(null);

  // Live clock
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(d.toLocaleTimeString("en-US", { hour12: false, timeZone: "UTC" }) + " UTC");
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  // Live telemetry
  useEffect(() => {
    const i = setInterval(() => {
      setOccupancy((v) => Math.max(70000, Math.min(87523, v + Math.round((Math.random() - 0.4) * 80))));
      setLatency((v) => Math.max(2, Math.min(12, v + Math.round((Math.random() - 0.5) * 2))));
      setSensors((v) => Math.max(12000, Math.min(12800, v + Math.round((Math.random() - 0.5) * 6))));
      setSurge((v) => Math.max(40, Math.min(95, v + Math.round((Math.random() - 0.5) * 4))));
    }, 1200);
    return () => clearInterval(i);
  }, []);

  // Autoscroll chat
  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // 3D tilt on mouse move
  useEffect(() => {
    const el = twinRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: -12 + py * -8, y: px * 14 });
    };
    const onLeave = () => setTilt({ x: -12, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const send = (text?: string) => {
    const q = (text ?? message).trim();
    if (!q) return;
    const ts = new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5);
    setChat((c) => [...c, { role: "user", text: q, ts }]);
    setMessage("");
    setTimeout(() => {
      setChat((c) => [...c, { role: "ai", text: getReply(q), ts }]);
    }, 700);
  };

  const heatDots = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        x: 10 + Math.random() * 80,
        y: 15 + Math.random() * 70,
        size: 20 + Math.random() * 60,
        heat: Math.random(),
        delay: Math.random() * 3,
      })),
    [layer],
  );

  return (
    <div className="min-h-screen bg-stadium-bg text-white font-sans selection:bg-neon-cyan/30 flex flex-col">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-neon-cyan/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-neon-gold/10 blur-[140px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      <nav className="sticky top-0 z-50 h-14 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-3 group">
            <div className="size-8 bg-neon-cyan rounded-sm flex items-center justify-center font-display text-xl text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition">
              S
            </div>
            <span className="font-display text-2xl tracking-widest text-white">
              STADIUM<span className="text-neon-cyan">OS</span>
              <span className="text-white/30 text-sm ml-2">AI</span>
            </span>
          </button>
          <div className="hidden lg:flex gap-6 font-mono text-[10px] uppercase tracking-tighter text-white/40">
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
        <div className="flex items-center gap-3">
          <NavPill to="/dashboard" label="Command" active />
          <NavPill to="/ar" label="AR Wayfinding" />
          <NavPill to="/reel" label="Highlight Reel" />
          <div className="size-8 rounded-full ring-2 ring-neon-gold/50 bg-gradient-to-br from-neon-gold/40 to-neon-cyan/40" />
        </div>
      </nav>

      <main className="relative z-10 flex-1 p-4 grid grid-cols-12 gap-4 min-h-0">
        {/* LEFT: Copilot + Ops */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4" style={{ animation: "slide-up-fade 0.6s ease-out both" }}>
          <section className="glass-panel flex-1 flex flex-col min-h-[420px]">
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <span className="font-display tracking-wider text-neon-cyan text-lg">GENAI COPILOT</span>
              <div className="flex gap-1">
                <div className="size-1.5 rounded-full bg-neon-cyan animate-pulse" />
                <div className="size-1.5 rounded-full bg-neon-cyan animate-pulse" style={{ animationDelay: "200ms" }} />
              </div>
            </div>
            <div className="flex-1 p-4 space-y-3 text-sm overflow-y-auto max-h-[340px]">
              {chat.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "ai"
                      ? "bg-white/5 p-3 rounded-lg border-l-2 border-neon-cyan"
                      : "bg-neon-cyan/10 p-3 rounded-lg border-l-2 border-neon-cyan ml-6"
                  }
                  style={{ animation: "slide-up-fade 300ms ease-out both" }}
                >
                  <p className={`text-[10px] mb-1 font-mono ${m.role === "ai" ? "text-white/40" : "text-neon-cyan"}`}>
                    {m.role === "ai" ? "STADIUM_AI" : "USER_OPS"} · {m.ts}
                  </p>
                  <p className="text-white/90 leading-relaxed">{m.text}</p>
                </div>
              ))}
              <div ref={chatEnd} />
            </div>
            <div className="p-3 border-t border-white/10 space-y-2">
              <div className="flex gap-1 flex-wrap">
                {["Guide me to my seat", "Shortest food line", "When to leave"].map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 rounded hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask StadiumOS..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg py-2.5 pl-3 pr-10 text-xs focus:ring-1 focus:ring-neon-cyan outline-none placeholder:text-white/30"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1.5 size-7 rounded bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan text-xs font-mono hover:bg-neon-cyan/30 transition"
                >
                  →
                </button>
              </form>
            </div>
          </section>

          <section className="h-48 grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
            <OpsCell label="SECURITY" value="98% CLEAR" color="text-neon-cyan" />
            <OpsCell label="MEDICAL" value="2 ACTIVE" color="text-neon-alert" alert />
            <OpsCell label="TRANSPORT" value="METRO · 4M" color="text-white" />
            <OpsCell label="ENERGY" value="ECO-MODE" color="text-neon-green" />
          </section>
        </div>

        {/* CENTER: 3D Digital Twin + Predictive */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-4" style={{ animation: "slide-up-fade 0.8s ease-out both" }}>
          <div
            ref={twinRef}
            className="flex-1 glass-panel relative min-h-[420px]"
            style={{ perspective: "1400px" }}
          >
            <div
              className="absolute inset-0 transition-transform duration-500 ease-out"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`,
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={stadiumTwin}
                alt="Live 3D digital twin"
                width={1600}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                  transform: "translateZ(20px)",
                }}
              />
              {/* Live overlay markers */}
              {layer === "heatmap" &&
                heatDots.map((d, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      left: `${d.x}%`,
                      top: `${d.y}%`,
                      width: d.size,
                      height: d.size,
                      background: `radial-gradient(circle, ${
                        d.heat > 0.7
                          ? "rgba(244,63,94,0.6)"
                          : d.heat > 0.4
                            ? "rgba(251,191,36,0.5)"
                            : "rgba(34,211,238,0.5)"
                      } 0%, transparent 70%)`,
                      transform: `translate(-50%, -50%) translateZ(30px)`,
                      animation: `pulse-glow ${2 + d.delay}s ease-in-out infinite`,
                    }}
                  />
                ))}
              {layer === "exits" &&
                [
                  { x: 20, y: 25, label: "N-EXIT" },
                  { x: 80, y: 25, label: "NE-EXIT" },
                  { x: 20, y: 75, label: "SW-EXIT" },
                  { x: 80, y: 75, label: "SE-EXIT" },
                  { x: 50, y: 90, label: "MAIN" },
                ].map((e, i) => (
                  <div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
                    style={{ left: `${e.x}%`, top: `${e.y}%`, transform: `translate(-50%,-50%) translateZ(40px)` }}
                  >
                    <div className="size-4 rounded-full bg-neon-green border-2 border-white shadow-[0_0_15px_#22c55e] animate-pulse" />
                    <span className="text-[9px] font-mono text-neon-green bg-black/70 px-1.5 py-0.5 rounded whitespace-nowrap">
                      {e.label}
                    </span>
                  </div>
                ))}
              {layer === "cctv" &&
                Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const x = 50 + Math.cos(angle) * 32;
                  const y = 50 + Math.sin(angle) * 26;
                  return (
                    <div
                      key={i}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%`, transform: `translate(-50%,-50%) translateZ(40px)` }}
                    >
                      <div className="size-3 bg-neon-alert rounded-sm rotate-45 shadow-[0_0_10px_#f43f5e] animate-pulse" />
                    </div>
                  );
                })}
              {layer === "ar" && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(50px)" }}>
                  <div className="text-center bg-black/60 backdrop-blur px-6 py-4 rounded-xl border border-neon-cyan/50">
                    <div className="font-display text-2xl text-neon-cyan mb-2">AR MODE ARMED</div>
                    <button
                      onClick={() => navigate({ to: "/ar" })}
                      className="px-4 py-2 bg-neon-cyan text-black text-xs font-semibold rounded hover:brightness-110"
                    >
                      LAUNCH CAMERA →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-stadium-bg via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none border-[20px] border-white/[0.02] mix-blend-overlay" />

            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
              <div className="px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border border-neon-cyan/50 text-[10px] font-mono flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-neon-cyan animate-ping" />
                LIVE DIGITAL TWIN · ESTÁDIO AZTECA
              </div>
              <div className="px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border border-neon-gold/40 text-[10px] font-mono text-neon-gold tabular-nums">
                OCCUPANCY {occupancy.toLocaleString()} / 87,523
              </div>
              <div className="px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border border-white/20 text-[10px] font-mono">
                LAYER: {layer.toUpperCase()}
              </div>
            </div>

            <div className="absolute top-6 right-6 flex flex-col gap-2 text-right font-mono text-[10px] text-neon-cyan/80 z-10">
              <div className="px-3 py-1.5 bg-black/60 backdrop-blur rounded border border-white/10 tabular-nums">
                LATENCY · {latency}ms
              </div>
              <div className="px-3 py-1.5 bg-black/60 backdrop-blur rounded border border-white/10 tabular-nums">
                IOT · {sensors.toLocaleString()} ONLINE
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/70 backdrop-blur border border-white/10 p-1 rounded-xl z-10">
              {(["heatmap", "cctv", "ar", "exits"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setLayer(k)}
                  className={`px-5 py-2 rounded-lg text-[11px] font-medium transition capitalize ${
                    layer === k
                      ? "bg-neon-cyan text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {k === "ar" ? "AR Guide" : k}
                </button>
              ))}
            </div>

            <div className="absolute bottom-6 right-6 text-right font-mono text-[10px] text-neon-cyan/60 z-10">
              STADIUM_OS_V2.0.6
              <br />
              WDRM_ACTIVE_720
            </div>
          </div>

          <div className="h-24 glass-panel p-4 flex items-center justify-between gap-6">
            <div className="flex flex-col shrink-0">
              <span className="text-[10px] font-mono text-white/40 uppercase">Predictive Crowd Intelligence</span>
              <span className="text-lg font-display tracking-wide">
                NEXT 15 MIN:{" "}
                <span className={surge > 80 ? "text-neon-alert" : surge > 60 ? "text-neon-gold" : "text-neon-cyan"}>
                  {surge > 80 ? "HIGH SURGE" : surge > 60 ? "MODERATE SURGE" : "STABLE FLOW"}
                </span>
              </span>
            </div>
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden relative">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan via-neon-gold to-neon-alert shadow-[0_0_10px_#fbbf24] transition-all duration-500"
                style={{ width: `${surge}%` }}
              />
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] font-mono text-white/40 uppercase">Confidence</span>
              <div className="text-xl font-display text-neon-cyan tabular-nums">{(90 + (surge % 10)).toFixed(1)}%</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Passport + Reel + Sustainability */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4" style={{ animation: "slide-up-fade 1s ease-out both" }}>
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
              <Link
                to="/reel"
                className="h-10 w-full bg-neon-gold flex items-center justify-center font-display text-black tracking-widest text-sm hover:brightness-110 transition rounded"
              >
                GENERATE HIGHLIGHT REEL →
              </Link>
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

function NavPill({ to, label, active }: { to: string; label: string; active?: boolean }) {
  return (
    <Link
      to={to}
      className={`hidden md:inline-flex px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest border transition ${
        active
          ? "bg-neon-cyan/10 border-neon-cyan/50 text-neon-cyan"
          : "border-white/10 text-white/60 hover:border-neon-cyan/40 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

function OpsCell({ label, value, color, alert }: { label: string; value: string; color: string; alert?: boolean }) {
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
