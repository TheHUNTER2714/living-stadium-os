import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { speak, cancelSpeech } from "@/lib/voice";
import { loadPassport } from "@/lib/passport";
import { LANGUAGES } from "@/data/i18n";
import { STADIUMS, getStadium } from "@/data/stadiums";
import { ParticleField, CountUp } from "@/components/fx";

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title: "AR Wayfinding · StadiumOS AI" },
      { name: "description", content: "Holographic AR wayfinding across all 16 FIFA World Cup 2026 venues — seats, step-free routes, medical posts, transit hubs and voice guidance." },
      { property: "og:title", content: "AR Wayfinding · StadiumOS AI" },
      { property: "og:description", content: "Camera AR arrows, live compass, radar and venue knowledge for all 16 World Cup 2026 stadiums." },
    ],
  }),
  component: AR,
});

type Waypoint = { id: string; label: string; detail: string; dir: number; distance: number; icon: string; level?: number; accessible?: boolean; custom?: boolean };

function AR() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [venueId, setVenueId] = useState<string>(STADIUMS[0].id);
  const venue = getStadium(venueId) ?? STADIUMS[0];
  const [customPins, setCustomPins] = useState<Waypoint[]>([]);
  const [stepFreeOnly, setStepFreeOnly] = useState(false);
  const [destId, setDestId] = useState<string>(venue.zones[0].id);
  const [status, setStatus] = useState<"idle" | "loading" | "on" | "denied">("idle");
  const [distance, setDistance] = useState(90);
  const [heading, setHeading] = useState(12);
  const [torchOn, setTorchOn] = useState(false);
  const [torchAvail, setTorchAvail] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [intelOpen, setIntelOpen] = useState(false);
  const lastAnnouncedRef = useRef<number>(1e9);

  const passport = typeof window !== "undefined" ? loadPassport() : null;
  const lang = LANGUAGES.find((l) => l.code === (passport?.lang ?? "en")) ?? LANGUAGES[0];

  const waypoints = useMemo<Waypoint[]>(() => {
    const base = venue.zones.map((z) => ({ ...z }));
    const all = [...base, ...customPins];
    return stepFreeOnly ? all.filter((w) => w.accessible !== false) : all;
  }, [venue, customPins, stepFreeOnly]);

  const dest = waypoints.find((w) => w.id === destId) ?? waypoints[0];

  // Keep destination valid when the venue or filter changes
  useEffect(() => {
    if (!waypoints.some((w) => w.id === destId)) setDestId(waypoints[0].id);
  }, [waypoints, destId]);


  const start = async () => {
    setStatus("loading");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      // Detect torch capability
      const track = stream.getVideoTracks()[0];
      const caps = (track.getCapabilities?.() ?? {}) as { torch?: boolean };
      setTorchAvail(!!caps.torch);
      setStatus("on");
    } catch {
      setStatus("denied");
    }
  };

  const toggleTorch = async () => {
    const track = streamRef.current?.getVideoTracks()[0];
    if (!track) return;
    try {
      const next = !torchOn;
      await track.applyConstraints({ advanced: [{ torch: next } as unknown as MediaTrackConstraintSet] });
      setTorchOn(next);
    } catch {
      setTorchAvail(false);
    }
  };

  // Compass heading
  useEffect(() => {
    const onOrient = (e: DeviceOrientationEvent) => {
      const alpha = (e as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading ?? e.alpha;
      if (typeof alpha === "number") setHeading(Math.round(alpha));
    };
    window.addEventListener("deviceorientation", onOrient, true);
    return () => window.removeEventListener("deviceorientation", onOrient, true);
  }, []);

  useEffect(() => {
    return () => {
      cancelSpeech();
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  // Reset distance when destination changes; announce
  useEffect(() => {
    if (!dest) return;
    setDistance(dest.distance);
    lastAnnouncedRef.current = 1e9;
    if (voiceOn) speak(`Guiding you to ${dest.label}, ${dest.distance} metres. Follow the arrow.`, lang.voice);
  }, [destId, dest, voiceOn, lang.voice]);

  // Tick distance down (simulated walking) + voice announcements at 50/20/5m
  useEffect(() => {
    const i = setInterval(() => setDistance((d) => Math.max(0, d - 1)), 700);
    return () => clearInterval(i);
  }, [dest]);

  useEffect(() => {
    if (!voiceOn) return;
    const checkpoints = [50, 20, 5, 0];
    for (const c of checkpoints) {
      if (lastAnnouncedRef.current > c && distance <= c) {
        lastAnnouncedRef.current = c;
        if (c === 0) speak(`You have arrived at ${dest.label}.`, lang.voice);
        else speak(`${c} metres to ${dest.label}.`, lang.voice);
        break;
      }
    }
  }, [distance, dest, voiceOn, lang.voice]);

  const dropPin = () => {
    const id = `pin-${Date.now()}`;
    const dir = Math.round((Math.random() - 0.5) * 300);
    const dist = 30 + Math.round(Math.random() * 80);
    const label = `Waypoint ${customPins.length + 1}`;
    const pin: Waypoint = { id, label, detail: `Dropped pin · ${dist}m`, dir, distance: dist, icon: "📍", accessible: true, custom: true };
    setCustomPins((w) => [...w, pin]);
    setDestId(id);
    if (voiceOn) speak(`New waypoint dropped. Navigating.`, lang.voice);
  };

  const removePin = () => {
    if (!dest.custom) return;
    setCustomPins((w) => w.filter((x) => x.id !== dest.id));
    setDestId(venue.zones[0].id);
  };

  // Emergency: fastest exit + medical
  const panic = () => {
    const exit = waypoints.find((w) => w.id === "exit") ?? waypoints[0];
    setDestId(exit.id);
    speak(`Emergency mode. Guiding you to ${exit.label}. Stay calm and follow the arrow.`, lang.voice);
  };


  // Arrow rotates by dir minus heading offset (0° = north)
  const arrowRotation = dest.dir - (heading - 12);
  const eta = Math.max(1, Math.round(distance / 1.4 / 60));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {status === "on" ? (
        <video ref={videoRef} playsInline muted className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-stadium-bg via-slate-900 to-black" />
      )}
      <div className="absolute inset-0 bg-black/30" />

      <header className="relative z-20 h-14 bg-black/70 backdrop-blur border-b border-white/10 px-4 flex items-center justify-between">
        <Link to="/dashboard" className="text-xs font-mono text-white/70 hover:text-neon-cyan">← COMMAND</Link>
        <div className="flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full border border-neon-cyan/40">
          <span className={`size-1.5 rounded-full ${status === "on" ? "bg-neon-green animate-pulse" : "bg-white/40"}`} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan">
            AR WAYFINDING {status === "on" ? "· ACTIVE" : ""}
          </span>
        </div>
        <div className="font-mono text-[10px] text-white/70 tabular-nums">HEADING · {heading}°</div>
      </header>

      {status === "on" && (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-neon-cyan/40 rounded-full" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
            <div className="absolute w-8 h-px bg-neon-cyan/60" />
            <div className="absolute w-px h-8 bg-neon-cyan/60" />
          </div>

          <div className="absolute top-1/2 left-1/2 transition-transform duration-300"
            style={{ transform: `translate(-50%, -50%) rotate(${arrowRotation}deg) translateY(-140px)` }}>
            <div className="text-6xl text-neon-cyan drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]"
              style={{ animation: "pulse-glow 1.2s ease-in-out infinite" }}>↑</div>
            <div className="mt-1 text-center font-mono text-[10px] text-neon-cyan bg-black/70 px-2 py-0.5 rounded">
              {dest.icon} {dest.label}
            </div>
          </div>

          {/* Path pulses */}
          <div className="absolute inset-x-0 bottom-40 flex flex-col items-center gap-3">
            {[0.4, 0.6, 0.8, 1].map((s, i) => (
              <div key={i} className="w-16 h-2 rounded-full bg-neon-cyan/60 shadow-[0_0_15px_#22d3ee]"
                style={{ opacity: s, animation: `pulse-glow 1.8s ease-in-out ${i * 0.15}s infinite` }} />
            ))}
          </div>

          {/* Mini radar */}
          <div className="absolute top-4 left-4 size-32 rounded-full bg-black/60 border border-neon-cyan/40 backdrop-blur overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-full rounded-full"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)" }} />
              <div className="absolute size-full origin-center" style={{ animation: "radar-sweep 3s linear infinite" }}>
                <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-neon-cyan to-transparent origin-left" />
              </div>
              {/* Waypoint dots */}
              {waypoints.map((w) => {
                const rad = ((w.dir - (heading - 12)) - 90) * Math.PI / 180;
                const r = Math.min(0.9, w.distance / 140);
                const x = 50 + Math.cos(rad) * 42 * r;
                const y = 50 + Math.sin(rad) * 42 * r;
                return (
                  <div key={w.id} className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}>
                    <div className={`size-2 rounded-full ${w.id === destId ? "bg-neon-gold shadow-[0_0_10px_#fbbf24]" : "bg-neon-cyan/80"}`} />
                  </div>
                );
              })}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-white rounded-full ring-2 ring-neon-cyan" />
            </div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[8px] text-neon-cyan">RADAR · 140m</div>
          </div>

          {/* Right-side controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 pointer-events-auto">
            <button onClick={() => setVoiceOn((v) => { if (v) cancelSpeech(); return !v; })}
              className={`size-11 rounded-full backdrop-blur border font-mono text-lg ${voiceOn ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan" : "bg-black/60 border-white/20 text-white/50"}`}
              title="Voice guidance">🔊</button>
            {torchAvail && (
              <button onClick={toggleTorch}
                className={`size-11 rounded-full backdrop-blur border font-mono text-lg ${torchOn ? "bg-neon-gold/30 border-neon-gold text-neon-gold" : "bg-black/60 border-white/20 text-white/60"}`}
                title="Torch">🔦</button>
            )}
            <button onClick={dropPin}
              className="size-11 rounded-full bg-black/60 backdrop-blur border border-white/20 text-white/70 font-mono text-lg hover:border-neon-cyan"
              title="Drop waypoint">📍</button>
            <button onClick={() => setStepFreeOnly((v) => !v)}
              className={`size-11 rounded-full backdrop-blur border font-mono text-lg ${stepFreeOnly ? "bg-neon-green/20 border-neon-green text-neon-green" : "bg-black/60 border-white/20 text-white/60"}`}
              title="Step-free routes only">♿</button>
            <button onClick={panic}
              className="size-11 rounded-full bg-neon-alert/20 backdrop-blur border border-neon-alert text-neon-alert font-mono text-sm animate-pulse"
              title="Emergency exit routing">SOS</button>
            {dest.custom && (
              <button onClick={removePin}
                className="size-11 rounded-full bg-neon-alert/20 backdrop-blur border border-neon-alert text-neon-alert font-mono text-lg"
                title="Remove pin">✕</button>
            )}
          </div>

        </div>
      )}

      <div className="relative z-20 p-4 space-y-3">
        {status !== "on" && (
          <div className="glass-panel p-6 text-center max-w-md mx-auto">
            <div className="font-display text-2xl text-neon-cyan tracking-widest mb-2">AR WAYFINDING</div>
            <p className="text-sm text-white/70 mb-5">
              {status === "denied"
                ? "Camera permission was denied. Enable it in your browser to see holographic guidance."
                : "Point your camera at the stadium for holographic arrows, live compass, mini-radar, torch, and dropped waypoints."}
            </p>
            <button onClick={start} disabled={status === "loading"}
              className="px-8 py-3 bg-neon-cyan text-black font-display tracking-widest text-sm rounded shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:brightness-110 disabled:opacity-50">
              {status === "loading" ? "STARTING CAMERA..." : "ACTIVATE CAMERA"}
            </button>
          </div>
        )}

        <div className="glass-panel p-4 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] font-mono text-white/40 uppercase">Venue</span>
            <select value={venueId} onChange={(e) => setVenueId(e.target.value)}
              className="bg-black/60 border border-white/15 rounded px-2 py-1 text-xs text-white focus:border-neon-cyan outline-none">
              {STADIUMS.map((s) => (
                <option key={s.id} value={s.id}>{s.name} · {s.city}</option>
              ))}
            </select>
            <button onClick={() => setIntelOpen((v) => !v)}
              className="ml-auto px-3 py-1 rounded border border-neon-cyan/40 text-neon-cyan font-mono text-[10px] tracking-widest hover:bg-neon-cyan/10">
              {intelOpen ? "HIDE" : "STADIUM"} INTEL
            </button>
          </div>

          {intelOpen && (
            <div className="mb-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
              {[
                { k: "Capacity", v: <CountUp to={venue.capacity} /> },
                { k: "Roof", v: venue.roof },
                { k: "Opened", v: venue.opened },
                { k: "Waypoints", v: venue.zones.length },
              ].map((c) => (
                <div key={c.k} className="rounded-lg bg-white/5 border border-white/10 p-2">
                  <div className="font-mono text-[9px] uppercase text-white/40">{c.k}</div>
                  <div className="font-display text-lg text-neon-cyan">{c.v}</div>
                </div>
              ))}
              <div className="col-span-2 md:col-span-4 text-[11px] text-white/55">
                {venue.surface} · Hosting {venue.matches} · {venue.tz}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] font-mono text-white/40 uppercase">Navigating to</div>
              <div className="font-display text-xl tracking-wide text-neon-cyan">{dest.icon} {dest.label}</div>
              <div className="text-xs text-white/60">{dest.detail}{dest.level ? ` · Level ${dest.level}` : ""}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-white/40 uppercase">Distance · ETA</div>
              <div className="font-display text-2xl text-neon-gold tabular-nums">{distance}m</div>
              <div className="text-[10px] font-mono text-neon-green">{eta} min · voice {voiceOn ? "on" : "off"}{stepFreeOnly ? " · step-free" : ""}</div>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {waypoints.map((d) => (
              <button key={d.id} onClick={() => setDestId(d.id)}
                className={`px-3 py-2 rounded-lg text-[11px] font-medium whitespace-nowrap border transition ${
                  destId === d.id ? "bg-neon-cyan text-black border-neon-cyan" : "bg-white/5 border-white/10 text-white/70 hover:border-neon-cyan/50 hover:text-white"
                }`}>
                {d.icon} {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {status !== "on" && <ParticleField count={60} className="z-0" />}

      <style>{`
        @keyframes radar-sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );

}
