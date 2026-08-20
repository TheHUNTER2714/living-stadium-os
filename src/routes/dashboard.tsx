import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import stadiumTwin from "@/assets/stadium-twin.jpg";
import sustainabilityRing from "@/assets/sustainability-ring.png";
import { loadPassport, savePassport } from "@/lib/passport";
import { getTeam } from "@/data/wc2026";
import { answerFromData } from "@/lib/wc-knowledge";
import { COPILOT, LANGUAGES, classifyIntent, type LangCode } from "@/data/i18n";
import { createPTT, speak, cancelSpeech } from "@/lib/voice";
import { RobotMascot, type RobotEmotion } from "@/components/RobotMascot";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Mission Control · StadiumOS AI" }] }),
  component: Dashboard,
});

type ChatMsg = { role: "ai" | "user"; text: string; ts: string };
type Alert = { id: number; severity: "info" | "warn" | "crit"; label: string; ts: string };
type Rules = { occupancyPct: number; latencyMs: number; surgePct: number };

const DEFAULT_RULES: Rules = { occupancyPct: 95, latencyMs: 8, surgePct: 85 };

function Dashboard() {
  const navigate = useNavigate();
  const [passport, setPassport] = useState(() => (typeof window !== "undefined" ? loadPassport() : null));
  const lang: LangCode = ((passport?.lang ?? "en") as LangCode);
  const langMeta = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const team = passport ? getTeam(passport.teamCode) : undefined;

  const [message, setMessage] = useState("");
  const [clock, setClock] = useState("");
  const [layer, setLayer] = useState<"heatmap" | "cctv" | "ar" | "exits">("heatmap");
  const [occupancy, setOccupancy] = useState(84202);
  const [latency, setLatency] = useState(4);
  const [sensors, setSensors] = useState(12480);
  const [surge, setSurge] = useState(75);
  const [tilt, setTilt] = useState({ x: -12, y: 0 });
  const twinRef = useRef<HTMLDivElement>(null);

  const [chat, setChat] = useState<ChatMsg[]>([{ role: "ai", text: COPILOT[lang].greet, ts: "14:32" }]);
  const chatEnd = useRef<HTMLDivElement>(null);

  // Voice
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [voiceOut, setVoiceOut] = useState(true);
  const [voiceSupported, setVoiceSupported] = useState(true);
  const pttRef = useRef<ReturnType<typeof createPTT> | null>(null);

  // Alerting
  const [rules, setRules] = useState<Rules>(DEFAULT_RULES);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [rulesOpen, setRulesOpen] = useState(false);
  const alertIdRef = useRef(0);
  const lastRaisedRef = useRef<Record<string, number>>({});
  const [aiThinking, setAiThinking] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(false);

  const CAPACITY = 87523;

  // Poll speechSynthesis so the robot's mouth animates whenever anything is spoken
  useEffect(() => {
    const i = setInterval(() => {
      const s = typeof window !== "undefined" ? window.speechSynthesis : null;
      setAiSpeaking(!!s?.speaking);
    }, 120);
    return () => clearInterval(i);
  }, []);

  // Clock
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(d.toLocaleTimeString("en-US", { hour12: false, timeZone: "UTC" }) + " UTC");
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  // Telemetry
  useEffect(() => {
    const i = setInterval(() => {
      setOccupancy((v) => Math.max(70000, Math.min(CAPACITY, v + Math.round((Math.random() - 0.4) * 80))));
      setLatency((v) => Math.max(2, Math.min(14, v + Math.round((Math.random() - 0.5) * 2))));
      setSensors((v) => Math.max(12000, Math.min(12800, v + Math.round((Math.random() - 0.5) * 6))));
      setSurge((v) => Math.max(40, Math.min(97, v + Math.round((Math.random() - 0.5) * 4))));
    }, 1200);
    return () => clearInterval(i);
  }, []);

  // Alert rule evaluator — per-key cooldown (60s) so nothing spams; occupancy is silent (warn).
  useEffect(() => {
    const pct = (occupancy / CAPACITY) * 100;
    const now = new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5);
    const raise = (severity: Alert["severity"], label: string, key: string, speakIt: boolean) => {
      const t = Date.now();
      if ((lastRaisedRef.current[key] ?? 0) + 60000 > t) return;
      lastRaisedRef.current[key] = t;
      setAlerts((prev) => [{ id: ++alertIdRef.current, severity, label, ts: now }, ...prev].slice(0, 6));
      if (speakIt && voiceOut) speak(label, langMeta.voice);
    };
    // Occupancy — visible warn, never spoken (was the culprit for the constant chatter)
    if (pct >= rules.occupancyPct) raise("warn", `OCCUPANCY ${pct.toFixed(1)}% ≥ ${rules.occupancyPct}%`, "occ", false);
    // Latency — silent warn
    if (latency >= rules.latencyMs) raise("warn", `LATENCY ${latency}ms ≥ ${rules.latencyMs}ms`, "lat", false);
    // Surge is the only spoken alert — genuine safety event
    if (surge >= rules.surgePct) raise("crit", `SURGE ${surge}% ≥ ${rules.surgePct}% — reroute triggered`, "surge", true);
  }, [occupancy, latency, surge, rules, voiceOut, langMeta.voice]);


  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: "smooth" }); }, [chat]);

  // 3D tilt
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
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  const send = (text?: string, viaVoice = false) => {
    const q = (text ?? message).trim();
    if (!q) return;
    const ts = new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5);
    setChat((c) => [...c, { role: "user", text: q, ts }]);
    setMessage("");
    setAiThinking(true);
    setTimeout(() => {
      const intent = classifyIntent(q);
      const reply = answerFromData(q) ?? COPILOT[lang][intent];
      setChat((c) => [...c, { role: "ai", text: reply, ts }]);

      setAiThinking(false);
      // Speak every reply (voice, text — anything) — not just voice-triggered ones
      if (voiceOut) speak(reply, langMeta.voice);
      void viaVoice;
    }, 550);
  };

  // Push-to-talk
  const startPTT = () => {
    cancelSpeech();
    const ptt = createPTT({
      lang: langMeta.voice,
      onPartial: (t) => setInterim(t),
      onFinal: (t) => {
        setInterim("");
        send(t, true);
        pttRef.current?.stop();
      },
      onError: () => setListening(false),
      onEnd: () => { setListening(false); setInterim(""); },
    });
    pttRef.current = ptt;
    if (!ptt.supported) { setVoiceSupported(false); return; }
    setListening(true);
    ptt.start();
  };
  const stopPTT = () => { pttRef.current?.stop(); setListening(false); };

  const setLang = (code: LangCode) => {
    const next = passport ? { ...passport, lang: code } : { name: "Guest", teamCode: "", lang: code, createdAt: Date.now() };
    savePassport(next);
    setPassport(next);
    setChat((c) => [...c, { role: "ai", text: COPILOT[code].greet, ts: new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5) }]);
    if (voiceOut) speak(COPILOT[code].greet, LANGUAGES.find(l => l.code === code)?.voice ?? "en-US");
  };

  const heatDots = useMemo(
    () => Array.from({ length: 22 }).map(() => ({
      x: 10 + Math.random() * 80, y: 15 + Math.random() * 70,
      size: 20 + Math.random() * 60, heat: Math.random(), delay: Math.random() * 3,
    })),
    [layer],
  );

  const occPct = (occupancy / CAPACITY) * 100;

  return (
    <div className="min-h-screen bg-stadium-bg text-white font-sans selection:bg-neon-cyan/30 flex flex-col">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-neon-cyan/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-neon-gold/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <nav className="sticky top-0 z-50 h-14 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => navigate({ to: "/" })} className="flex items-center gap-3 group">
            <div className="size-8 bg-neon-cyan rounded-sm flex items-center justify-center font-display text-xl text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition">S</div>
            <span className="font-display text-2xl tracking-widest text-white">
              STADIUM<span className="text-neon-cyan">OS</span>
              <span className="text-white/30 text-sm ml-2">AI</span>
            </span>
          </button>
          <div className="hidden lg:flex gap-6 font-mono text-[10px] uppercase tracking-tighter text-white/40">
            <div className="flex flex-col">
              <span className="text-neon-cyan">STATE: OPERATIONAL</span>
              <span>LOAD: {occPct.toFixed(1)}%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-neon-gold">FIFA WC 2026</span>
              <span>{clock}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <NavPill to="/dashboard" label="Command" active />
          <NavPill to="/passport" label="Passport" />
          <NavPill to="/ar" label="AR" />
          <NavPill to="/reel" label="Reel" />
          <select value={lang} onChange={(e) => setLang(e.target.value as LangCode)}
            className="hidden md:block bg-black/40 border border-white/10 rounded px-2 py-1 text-[10px] font-mono">
            {LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.flag} {l.label}</option>)}
          </select>
          <div className="size-8 rounded-full ring-2 ring-neon-gold/50 bg-gradient-to-br from-neon-gold/40 to-neon-cyan/40 flex items-center justify-center text-xs font-display">
            {passport?.name?.[0]?.toUpperCase() ?? "?"}
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex-1 p-4 grid grid-cols-12 gap-4 min-h-0">
        {/* LEFT: Copilot */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4" style={{ animation: "slide-up-fade 0.6s ease-out both" }}>
          <section className="glass-panel flex-1 flex flex-col min-h-[420px]">
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <RobotMascot
                  size={56}
                  speaking={aiSpeaking}
                  emotion={
                    (listening ? "listening" :
                     aiThinking ? "thinking" :
                     alerts.some((a) => a.severity === "crit") ? "alert" :
                     aiSpeaking ? "happy" : "idle") as RobotEmotion
                  }
                />
                <div>
                  <div className="font-display tracking-wider text-neon-cyan text-lg leading-none">GENAI COPILOT</div>
                  <div className="text-[9px] font-mono text-white/40 mt-1">
                    {langMeta.flag} {langMeta.label} · {aiSpeaking ? "speaking…" : listening ? "listening…" : aiThinking ? "thinking…" : "standby"}
                  </div>
                  <div className="text-[9px] font-mono text-white/30">
                    voice {voiceOut ? "on" : "off"} · occupancy/latency alerts silent · {voiceSupported ? "STT ready" : "STT off"}
                  </div>

                </div>
              </div>
              <button onClick={() => setVoiceOut((v) => !v)}
                className={`text-[10px] font-mono px-2 py-1 rounded border transition ${voiceOut ? "border-neon-cyan text-neon-cyan bg-neon-cyan/10" : "border-white/20 text-white/50"}`}>
                {voiceOut ? "🔊" : "🔇"}
              </button>
            </div>
            <div className="flex-1 p-4 space-y-3 text-sm overflow-y-auto max-h-[300px]">
              {chat.map((m, i) => (
                <div key={i}
                  className={m.role === "ai" ? "bg-white/5 p-3 rounded-lg border-l-2 border-neon-cyan" : "bg-neon-cyan/10 p-3 rounded-lg border-l-2 border-neon-cyan ml-6"}
                  style={{ animation: "slide-up-fade 300ms ease-out both" }}>
                  <p className={`text-[10px] mb-1 font-mono ${m.role === "ai" ? "text-white/40" : "text-neon-cyan"}`}>
                    {m.role === "ai" ? "STADIUM_AI" : (passport?.name?.toUpperCase() ?? "USER_OPS")} · {m.ts}
                  </p>
                  <p className="text-white/90 leading-relaxed">{m.text}</p>
                </div>
              ))}
              {interim && (
                <div className="bg-neon-gold/10 p-3 rounded-lg border-l-2 border-neon-gold ml-6 italic opacity-80">
                  <p className="text-[10px] mb-1 font-mono text-neon-gold">LISTENING · {langMeta.label}</p>
                  <p>{interim}</p>
                </div>
              )}
              <div ref={chatEnd} />
            </div>
            <div className="p-3 border-t border-white/10 space-y-2">
              <div className="flex gap-1 flex-wrap">
                {["Guide me to my seat", "Shortest food line", "When to leave"].map((q) => (
                  <button key={q} onClick={() => send(q)}
                    className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 rounded hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition">{q}</button>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); send(); }} className="relative flex gap-2">
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder={COPILOT[lang].listening + "..."}
                  className="flex-1 bg-black/40 border border-white/10 rounded-lg py-2.5 pl-3 pr-3 text-xs focus:ring-1 focus:ring-neon-cyan outline-none placeholder:text-white/30" />
                <button type="button"
                  onMouseDown={startPTT} onMouseUp={stopPTT}
                  onTouchStart={(e) => { e.preventDefault(); startPTT(); }}
                  onTouchEnd={(e) => { e.preventDefault(); stopPTT(); }}
                  className={`size-10 rounded-lg border transition select-none ${listening ? "bg-neon-alert border-neon-alert text-black animate-pulse shadow-[0_0_20px_#f43f5e]" : "bg-neon-cyan/20 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/30"}`}
                  title="Hold to talk">
                  🎙
                </button>
                <button type="submit"
                  className="size-10 rounded-lg bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan text-xs font-mono hover:bg-neon-cyan/30 transition">→</button>
              </form>
              <div className="text-[9px] font-mono text-white/30 text-center">Hold 🎙 to push-to-talk · Speak {langMeta.label}</div>
            </div>
          </section>

          {/* Ops + Alert rules */}
          <section className="glass-panel">
            <button onClick={() => setRulesOpen((o) => !o)}
              className="w-full flex items-center justify-between p-3 border-b border-white/5">
              <span className="font-display tracking-wider text-neon-gold text-sm">TELEMETRY ALERTING</span>
              <span className="text-[10px] font-mono text-white/40">{rulesOpen ? "▲" : "▼"}</span>
            </button>
            {rulesOpen && (
              <div className="p-3 space-y-3 text-xs border-b border-white/5">
                <RuleSlider label="Occupancy critical %" value={rules.occupancyPct} min={70} max={99}
                  onChange={(v) => setRules((r) => ({ ...r, occupancyPct: v }))} />
                <RuleSlider label="Latency warn ms" value={rules.latencyMs} min={3} max={14}
                  onChange={(v) => setRules((r) => ({ ...r, latencyMs: v }))} />
                <RuleSlider label="Crowd surge critical %" value={rules.surgePct} min={60} max={97}
                  onChange={(v) => setRules((r) => ({ ...r, surgePct: v }))} />
                <button onClick={() => { setRules(DEFAULT_RULES); setAlerts([]); }}
                  className="w-full py-1.5 text-[10px] font-mono border border-white/10 rounded hover:border-neon-cyan/50 hover:text-neon-cyan transition">
                  RESET RULES
                </button>
              </div>
            )}
            <div className="max-h-40 overflow-y-auto">
              {alerts.length === 0 && (
                <div className="p-3 text-[10px] font-mono text-white/30">No active alerts. Systems nominal.</div>
              )}
              {alerts.map((a) => (
                <div key={a.id}
                  className={`px-3 py-2 border-b border-white/5 flex items-center gap-2 text-[11px] ${a.severity === "crit" ? "bg-neon-alert/10 text-neon-alert" : a.severity === "warn" ? "bg-neon-gold/10 text-neon-gold" : "text-white/60"}`}
                  style={{ animation: "slide-up-fade 300ms ease-out both" }}>
                  <span className={`size-1.5 rounded-full ${a.severity === "crit" ? "bg-neon-alert animate-ping" : "bg-neon-gold"}`} />
                  <span className="flex-1 font-mono">{a.label}</span>
                  <span className="text-white/40">{a.ts}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CENTER: 3D Twin */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-4" style={{ animation: "slide-up-fade 0.8s ease-out both" }}>
          <div ref={twinRef} className="flex-1 glass-panel relative min-h-[420px]" style={{ perspective: "1400px" }}>
            <div className="absolute inset-0 transition-transform duration-500 ease-out"
              style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`, transformStyle: "preserve-3d" }}>
              <img src={stadiumTwin} alt="Live 3D digital twin" className="absolute inset-0 w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px", transform: "translateZ(20px)" }} />
              {layer === "heatmap" && heatDots.map((d, i) => (
                <div key={i} className="absolute rounded-full pointer-events-none"
                  style={{
                    left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size,
                    background: `radial-gradient(circle, ${d.heat > 0.7 ? "rgba(244,63,94,0.6)" : d.heat > 0.4 ? "rgba(251,191,36,0.5)" : "rgba(34,211,238,0.5)"} 0%, transparent 70%)`,
                    transform: `translate(-50%, -50%) translateZ(30px)`,
                    animation: `pulse-glow ${2 + d.delay}s ease-in-out infinite`,
                  }} />
              ))}
              {layer === "exits" && [
                { x: 20, y: 25, label: "N-EXIT" }, { x: 80, y: 25, label: "NE-EXIT" },
                { x: 20, y: 75, label: "SW-EXIT" }, { x: 80, y: 75, label: "SE-EXIT" },
                { x: 50, y: 90, label: "MAIN" },
              ].map((e, i) => (
                <div key={i} className="absolute flex flex-col items-center gap-1"
                  style={{ left: `${e.x}%`, top: `${e.y}%`, transform: `translate(-50%,-50%) translateZ(40px)` }}>
                  <div className="size-4 rounded-full bg-neon-green border-2 border-white shadow-[0_0_15px_#22c55e] animate-pulse" />
                  <span className="text-[9px] font-mono text-neon-green bg-black/70 px-1.5 py-0.5 rounded whitespace-nowrap">{e.label}</span>
                </div>
              ))}
              {layer === "cctv" && Array.from({ length: 8 }).map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const x = 50 + Math.cos(angle) * 32;
                const y = 50 + Math.sin(angle) * 26;
                return (
                  <div key={i} className="absolute"
                    style={{ left: `${x}%`, top: `${y}%`, transform: `translate(-50%,-50%) translateZ(40px)` }}>
                    <div className="size-3 bg-neon-alert rounded-sm rotate-45 shadow-[0_0_10px_#f43f5e] animate-pulse" />
                  </div>
                );
              })}
              {layer === "ar" && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(50px)" }}>
                  <div className="text-center bg-black/60 backdrop-blur px-6 py-4 rounded-xl border border-neon-cyan/50">
                    <div className="font-display text-2xl text-neon-cyan mb-2">AR MODE ARMED</div>
                    <button onClick={() => navigate({ to: "/ar" })}
                      className="px-4 py-2 bg-neon-cyan text-black text-xs font-semibold rounded hover:brightness-110">LAUNCH CAMERA →</button>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-stadium-bg via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
              <div className="px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border border-neon-cyan/50 text-[10px] font-mono flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-neon-cyan animate-ping" />
                LIVE DIGITAL TWIN · ESTÁDIO AZTECA
              </div>
              <div className={`px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border text-[10px] font-mono tabular-nums ${occPct >= rules.occupancyPct ? "border-neon-alert text-neon-alert animate-pulse" : "border-neon-gold/40 text-neon-gold"}`}>
                OCCUPANCY {occupancy.toLocaleString()} / {CAPACITY.toLocaleString()} · {occPct.toFixed(1)}%
              </div>
              <div className="px-3 py-1.5 bg-black/70 backdrop-blur rounded-full border border-white/20 text-[10px] font-mono">LAYER: {layer.toUpperCase()}</div>
            </div>

            <div className="absolute top-6 right-6 flex flex-col gap-2 text-right font-mono text-[10px] z-10">
              <div className={`px-3 py-1.5 bg-black/60 backdrop-blur rounded border tabular-nums ${latency >= rules.latencyMs ? "border-neon-gold text-neon-gold" : "border-white/10 text-neon-cyan/80"}`}>LATENCY · {latency}ms</div>
              <div className="px-3 py-1.5 bg-black/60 backdrop-blur rounded border border-white/10 text-neon-cyan/80 tabular-nums">IOT · {sensors.toLocaleString()} ONLINE</div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/70 backdrop-blur border border-white/10 p-1 rounded-xl z-10">
              {(["heatmap", "cctv", "ar", "exits"] as const).map((k) => (
                <button key={k} onClick={() => setLayer(k)}
                  className={`px-5 py-2 rounded-lg text-[11px] font-medium transition capitalize ${layer === k ? "bg-neon-cyan text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.4)]" : "text-white/60 hover:text-white"}`}>
                  {k === "ar" ? "AR Guide" : k}
                </button>
              ))}
            </div>
          </div>

          <div className="h-24 glass-panel p-4 flex items-center justify-between gap-6">
            <div className="flex flex-col shrink-0">
              <span className="text-[10px] font-mono text-white/40 uppercase">Predictive Crowd Intelligence</span>
              <span className="text-lg font-display tracking-wide">
                NEXT 15 MIN:{" "}
                <span className={surge >= rules.surgePct ? "text-neon-alert" : surge > 60 ? "text-neon-gold" : "text-neon-cyan"}>
                  {surge >= rules.surgePct ? "CRITICAL SURGE" : surge > 60 ? "MODERATE SURGE" : "STABLE FLOW"}
                </span>
              </span>
            </div>
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan via-neon-gold to-neon-alert shadow-[0_0_10px_#fbbf24] transition-all duration-500"
                style={{ width: `${surge}%` }} />
              <div className="absolute inset-y-0 w-px bg-white" style={{ left: `${rules.surgePct}%` }} title="alert threshold" />
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] font-mono text-white/40 uppercase">Confidence</span>
              <div className="text-xl font-display text-neon-cyan tabular-nums">{(90 + (surge % 10)).toFixed(1)}%</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Passport */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4" style={{ animation: "slide-up-fade 1s ease-out both" }}>
          <section className="glass-panel border border-neon-gold/20 overflow-hidden"
            style={team ? { background: `linear-gradient(135deg, ${team.color}22, ${team.accent}22)` } : undefined}>
            <div className="p-5 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neon-gold">FAN PASSPORT</span>
                  <span className="text-2xl font-display tracking-wider">
                    {passport?.name?.toUpperCase() ?? "GUEST"}
                  </span>
                  {team && <span className="font-mono text-[10px] text-white/60 mt-1">{team.flag} {team.name.toUpperCase()} · GRP {team.group}</span>}
                </div>
                <div className="size-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-neon-gold font-mono text-lg">
                  {team?.flag ?? "QR"}
                </div>
              </div>
              <div className="space-y-2.5 mb-5">
                <PassportRow label="HERO" value={passport?.favoritePlayer ?? "—"} color="text-neon-cyan" />
                <PassportRow label="LANGUAGE" value={langMeta.label.toUpperCase()} color="text-neon-green" />
                <PassportRow label="LOYALTY" value="GOLD ALPHA" color="text-neon-gold" />
              </div>
              <div className="flex gap-2">
                <Link to="/passport" className="flex-1 h-10 border border-white/20 text-white/70 flex items-center justify-center font-mono text-[10px] tracking-widest hover:border-neon-cyan hover:text-neon-cyan transition rounded">
                  EDIT
                </Link>
                <Link to="/reel" className="flex-[2] h-10 bg-neon-gold flex items-center justify-center font-display text-black tracking-widest text-sm hover:brightness-110 transition rounded">
                  GENERATE REEL →
                </Link>
              </div>
            </div>
          </section>

          <section className="glass-panel border border-neon-cyan/40 bg-neon-cyan/5 p-4">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded bg-neon-cyan/20 flex items-center justify-center shrink-0">
                <div className="size-6 border-2 border-neon-cyan rounded-full border-t-transparent animate-spin" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-neon-cyan animate-pulse">GOAL CELEBRATION MODE</div>
                <div className="text-sm font-semibold">{team?.name ?? "TEAM"} 1 — 0 · 44&apos;</div>
              </div>
            </div>
          </section>

          <section className="glass-panel flex-1 p-5">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Sustainability Tracker</span>
              <div className="relative aspect-square w-full max-w-[200px] mx-auto">
                <img src={sustainabilityRing} alt="Sustainability ring" loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-neon-green font-display text-4xl">74%</span>
                  <span className="text-[10px] font-mono text-white/40 uppercase">Green Score</span>
                </div>
              </div>
              <p className="text-xs text-white/60 leading-relaxed text-center">
                Your travel choice reduced venue carbon footprint by <span className="text-neon-cyan font-mono">1.2kg CO₂</span>.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 h-8 bg-black/80 border-t border-white/10 flex items-center overflow-hidden">
        <div className="flex items-center gap-8 px-6 whitespace-nowrap font-mono text-[10px] text-white/50"
          style={{ animation: "marquee 30s linear infinite" }}>
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-8">
              <TickerItem color="bg-neon-cyan" label="METRO LINE A: 3 MIN WAIT" />
              <TickerItem color="bg-neon-gold" label="GATE 12: CONGESTION RISK" />
              <TickerItem color="bg-neon-green" label="ENERGY SAVED: 42.1 MW" />
              <TickerItem color="bg-neon-cyan" label={`COPILOT: ${langMeta.label.toUpperCase()}`} />
              <TickerItem color="bg-neon-alert" label="SECTOR C: MEDICAL RESPONSE DISPATCHED" />
              <TickerItem color="bg-neon-gold" label={`GOAL — ${team?.name?.toUpperCase() ?? "TEAM"} 1-0 (44')`} />
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

function RuleSlider({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="flex justify-between font-mono text-[10px] text-white/60 mb-1">
        <span>{label}</span>
        <span className="text-neon-cyan tabular-nums">{value}</span>
      </div>
      <input type="range" min={min} max={max} value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full accent-neon-cyan" />
    </div>
  );
}

function NavPill({ to, label, active }: { to: string; label: string; active?: boolean }) {
  return (
    <Link to={to}
      className={`hidden md:inline-flex px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest border transition ${active ? "bg-neon-cyan/10 border-neon-cyan/50 text-neon-cyan" : "border-white/10 text-white/60 hover:border-neon-cyan/40 hover:text-white"}`}>
      {label}
    </Link>
  );
}

function PassportRow({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex justify-between border-b border-white/5 pb-2">
      <span className="text-[10px] font-mono text-white/40">{label}</span>
      <span className={`text-[10px] font-mono ${color} truncate max-w-[60%] text-right`}>{value}</span>
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
