import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import fansImg from "@/assets/reel-fans.jpg";
import goalImg from "@/assets/reel-goal.jpg";
import crowdImg from "@/assets/reel-crowd.jpg";
import stadiumTwin from "@/assets/stadium-twin.jpg";
import { getTeam } from "@/data/wc2026";
import { loadPassport } from "@/lib/passport";
import { createFunkLoop, type FunkHandle } from "@/lib/funk-audio";
import { createReelSFX, type SFXHandle } from "@/lib/reel-sfx";
import { playerAvatar } from "@/lib/player-avatar";
import { usePlayerPhoto } from "@/lib/player-photos";

export const Route = createFileRoute("/reel")({
  head: () => ({ meta: [{ title: "Highlight Reel · StadiumOS AI" }] }),
  component: Reel,
});

type Phase = "config" | "building" | "playing" | "done";
type StyleKey = "cinematic" | "funk" | "broadcast" | "vhs";
type LengthKey = "15" | "30" | "60";

const STYLES: { key: StyleKey; name: string; desc: string; badge: string }[] = [
  { key: "cinematic", name: "Cinematic", desc: "Slow zoom, orchestral swells, subtle grade.", badge: "🎬" },
  { key: "funk",      name: "Funk Fire", desc: "Chop cuts, extreme zooms, funk backing loop.", badge: "🕺" },
  { key: "broadcast", name: "Broadcast", desc: "F1-style motion graphics, lower-thirds, ticker.", badge: "📡" },
  { key: "vhs",       name: "Retro VHS", desc: "Scanlines, tape wobble, magenta chroma bleed.", badge: "📼" },
];

function Reel() {
  const navigate = useNavigate();
  const passport = typeof window !== "undefined" ? loadPassport() : null;
  const team = passport ? getTeam(passport.teamCode) : undefined;

  const [phase, setPhase] = useState<Phase>("config");
  const [style, setStyle] = useState<StyleKey>("funk");
  const [length, setLength] = useState<LengthKey>("30");
  const [player, setPlayer] = useState(passport?.favoritePlayer ?? team?.players[0]?.name ?? "");
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  const [uploadType, setUploadType] = useState<"video" | "image" | null>(null);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [sfxOn, setSfxOn] = useState(true);
  const [customTrackName, setCustomTrackName] = useState<string | null>(null);
  const customFileRef = useRef<File | null>(null);

  const [buildStep, setBuildStep] = useState(0);
  const [scene, setScene] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoLoop, setAutoLoop] = useState(false);
  const [heroBg, setHeroBg] = useState<"full" | "side" | "off">("full");


  const rafRef = useRef<number | null>(null);
  const startedAt = useRef<number>(0);
  const elapsedRef = useRef<number>(0);
  const lastFrameRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const autoLoopRef = useRef<boolean>(false);
  const funkRef = useRef<FunkHandle | null>(null);
  const sfxRef = useRef<SFXHandle | null>(null);
  const customSrcRef = useRef<AudioBufferSourceNode | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);


  // Build scenes dynamically from team + player + upload
  const SCENES = useMemo(() => {
    const t = team;
    const plyr = player || "the crowd favorite";
    const nation = t ? `${t.flag} ${t.name.toUpperCase()}` : "GLOBAL FOOTBALL";
    const base = [
      {
        img: stadiumTwin,
        title: "STADIUM ENTRY",
        caption: `${passport?.name ?? "FAN"} · Estádio Azteca · Gate 4`,
        ai: `${passport?.name ?? "You"} entered through the AI fast lane, skipping a 22-min queue.`,
        tint: "from-neon-cyan/40",
        color: t?.color ?? "#22d3ee",
      },
      {
        img: fansImg,
        title: `${nation} FANS RISE`,
        caption: `Sector B · Anthem for ${t?.name ?? "your team"}`,
        ai: `Crowd sentiment 92% euphoric. You joined 84,000 fans in the anthem.`,
        tint: "from-neon-gold/40",
        color: t?.accent ?? "#fbbf24",
      },
      {
        img: goalImg,
        title: `${plyr.toUpperCase()} — GOOOAL`,
        caption: `${t?.name ?? "TEAM"} 1 - 0 · 44'`,
        ai: `${plyr} rockets home from 22 yards. Peak decibel: 118 dB, synced with 78,000.`,
        tint: "from-neon-alert/40",
        color: "#f43f5e",
      },
      {
        img: crowdImg,
        title: "FULL-TIME CELEBRATION",
        caption: `Extra time · confetti mode engaged`,
        ai: `Fan Passport +250 XP. Reel dedicated to ${t?.name ?? "the beautiful game"}.`,
        tint: "from-neon-green/40",
        color: t?.color ?? "#22c55e",
      },
    ];
    // If upload present, inject as scene 2 (reaction)
    if (uploadUrl) {
      base.splice(2, 0, {
        img: uploadUrl,
        title: "YOUR REACTION",
        caption: `Fan-cam · uploaded · ${uploadType === "video" ? "0:04" : "still"}`,
        ai: `Your ${uploadType === "video" ? "reaction clip" : "still shot"} inter-cut with the goal — AI Director sync locked.`,
        tint: "from-neon-cyan/40",
        color: "#22d3ee",
      });
    }
    return base;
  }, [team, player, uploadUrl, uploadType, passport]);

  const BUILD_STEPS = useMemo(() => [
    `Loading ${team?.name ?? "team"} intelligence...`,
    `Extracting ${player || "hero"} highlight moments...`,
    uploadUrl ? `Compositing your uploaded reaction...` : `Compositing navigation journey...`,
    `Generating AI commentary in ${passport?.lang?.toUpperCase() ?? "EN"}...`,
    style === "funk" ? `Locking funk groove @ 110 BPM...` : style === "vhs" ? `Applying VHS chroma bleed...` : `Color grading & final render...`,
  ], [team, player, uploadUrl, style, passport]);

  const TOTAL_MS = parseInt(length, 10) * 1000;
  const SCENE_MS = TOTAL_MS / SCENES.length;

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setUploadUrl(url);
    setUploadType(f.type.startsWith("video") ? "video" : "image");
  };

  const generate = () => {
    setPhase("building");
    setBuildStep(0);
  };

  const stopAudio = () => {
    try { customSrcRef.current?.stop(); } catch {}
    customSrcRef.current = null;
    funkRef.current?.stop();
    funkRef.current = null;
    sfxRef.current?.stopAll();
    sfxRef.current?.destroy();
    sfxRef.current = null;
  };

  const startPlayback = async () => {
    setPhase("playing");
    setScene(0);
    setProgress(0);
    setPaused(false);
    pausedRef.current = false;
    elapsedRef.current = 0;
    lastFrameRef.current = performance.now();
    startedAt.current = performance.now();
    if (muted) return;
    // Set up SFX engine (handles style cues + custom track)
    const sfx = createReelSFX(style);
    sfx.setVolume(volume);
    sfxRef.current = sfx;
    // Custom uploaded track wins over funk
    if (customFileRef.current) {
      try {
        const buf = await sfx.loadFile(customFileRef.current);
        const src = sfx.playCustom(buf, true);
        customSrcRef.current = src;
      } catch {
        // fall back
        if (style === "funk") { funkRef.current = createFunkLoop({ bpm: 110 }); funkRef.current.start(); }
      }
    } else if (style === "funk") {
      funkRef.current = createFunkLoop({ bpm: 110 });
      funkRef.current.start();
      funkRef.current.setVolume(volume * 0.7);
    }
    // Fire opening cue
    if (sfxOn) setTimeout(() => sfxRef.current?.playCue(style === "cinematic" ? "swell" : "scene"), 120);
  };

  const togglePause = () => {
    setPaused((p) => {
      const next = !p;
      pausedRef.current = next;
      if (next) {
        try { customSrcRef.current?.stop(); } catch {}
        customSrcRef.current = null;
        funkRef.current?.stop();
        funkRef.current = null;
      }
      lastFrameRef.current = performance.now();
      return next;
    });
  };

  const skipScene = (dir: -1 | 1) => {
    const target = Math.max(0, Math.min(SCENES.length - 1, scene + dir));
    elapsedRef.current = target * SCENE_MS;
    setScene(target);
    setProgress(elapsedRef.current / TOTAL_MS);
    if (sfxOn && !muted) sfxRef.current?.playCue("scene");
  };

  // Building sequence
  useEffect(() => {
    if (phase !== "building") return;
    if (buildStep >= BUILD_STEPS.length) {
      const t = setTimeout(() => { void startPlayback(); }, 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setBuildStep((s) => s + 1), 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, buildStep, BUILD_STEPS.length]);

  // Playback loop — delta-based so pause works
  useEffect(() => {
    if (phase !== "playing") return;
    lastFrameRef.current = performance.now();
    const loop = () => {
      const now = performance.now();
      const dt = now - lastFrameRef.current;
      lastFrameRef.current = now;
      if (!pausedRef.current) elapsedRef.current += dt;
      const p = Math.min(1, elapsedRef.current / TOTAL_MS);
      setProgress(p);
      const s = Math.min(SCENES.length - 1, Math.floor(elapsedRef.current / SCENE_MS));
      setScene(s);
      if (p < 1) rafRef.current = requestAnimationFrame(loop);
      else {
        if (autoLoopRef.current) {
          elapsedRef.current = 0;
          rafRef.current = requestAnimationFrame(loop);
        } else {
          setPhase("done");
          stopAudio();
        }
      }
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, TOTAL_MS, SCENE_MS, SCENES.length]);

  useEffect(() => { autoLoopRef.current = autoLoop; }, [autoLoop]);

  // Scene-change SFX cue
  useEffect(() => {
    if (phase !== "playing" || !sfxOn || muted || pausedRef.current) return;
    sfxRef.current?.playCue("scene");
  }, [scene, phase, sfxOn, muted]);

  // Keyboard shortcuts during playback: Space = pause, ←/→ = scene skip
  useEffect(() => {
    if (phase !== "playing" && phase !== "done") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).tagName === "INPUT") return;
      if (e.code === "Space") { e.preventDefault(); if (phase === "playing") togglePause(); }
      else if (e.code === "ArrowRight" && phase === "playing") skipScene(1);
      else if (e.code === "ArrowLeft" && phase === "playing") skipScene(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, scene]);



  // Live volume changes
  useEffect(() => {
    sfxRef.current?.setVolume(volume);
    funkRef.current?.setVolume(volume * 0.7);
  }, [volume]);

  // Cleanup
  useEffect(() => () => { stopAudio(); }, []);

  // "Download" — render stage to canvas snapshot as PNG poster + JSON manifest
  const downloadPoster = async () => {
    const stage = stageRef.current;
    if (!stage) return;
    const w = 1280, h = 720;
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    // Background
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, team?.color ?? "#0f172a");
    grad.addColorStop(1, team?.accent ?? "#22d3ee");
    ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "rgba(0,0,0,0.55)"; ctx.fillRect(0, 0, w, h);
    // Try current scene image
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = SCENES[scene].img;
      await new Promise((r, j) => { img.onload = r; img.onerror = j; });
      ctx.globalAlpha = 0.65;
      ctx.drawImage(img, 0, 0, w, h);
      ctx.globalAlpha = 1;
    } catch {}
    // Text
    ctx.fillStyle = "#fff";
    ctx.font = "bold 84px sans-serif";
    ctx.fillText((SCENES[scene]?.title ?? "STADIUMOS REEL").slice(0, 22), 60, h - 200);
    ctx.font = "24px monospace";
    ctx.fillStyle = "#22d3ee";
    ctx.fillText(`${passport?.name ?? "FAN"} · ${team?.flag ?? ""} ${team?.name ?? ""} · ${STYLES.find(s => s.key === style)?.name} · ${length}s`, 60, h - 140);
    ctx.font = "20px monospace";
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText(SCENES[scene]?.ai ?? "", 60, h - 90);
    ctx.fillStyle = "#fbbf24";
    ctx.font = "18px monospace";
    ctx.fillText("STADIUMOS · AI DIRECTOR v2.6 · FIFA WC 2026", 60, h - 40);
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `stadiumos-reel-${passport?.name ?? "fan"}-${Date.now()}.png`;
    a.click();
  };

  const downloadManifest = () => {
    const manifest = {
      title: `${passport?.name ?? "Fan"}'s ${team?.name ?? "World Cup"} Reel`,
      fan: passport?.name,
      team: team ? { code: team.code, name: team.name, group: team.group } : null,
      hero: player,
      language: passport?.lang,
      style,
      length_seconds: parseInt(length, 10),
      generated_at: new Date().toISOString(),
      scenes: SCENES.map((s, i) => ({ index: i, title: s.title, caption: s.caption, commentary: s.ai })),
      soundtrack: style === "funk" ? "StadiumOS Funk Loop @ 110 BPM" : "AI Score",
      director: "STADIUMOS_AI v2.6",
    };
    const blob = new Blob([JSON.stringify(manifest, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `stadiumos-reel-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareReel = async () => {
    const text = `🎬 My StadiumOS AI reel: ${player || team?.name || "WC 2026"} — ${STYLES.find(s => s.key === style)?.name}`;
    if (navigator.share) {
      try { await navigator.share({ title: "StadiumOS Reel", text }); return; } catch {}
    }
    await navigator.clipboard.writeText(text);
    alert("Reel share text copied to clipboard.");
  };

  const current = SCENES[scene];

  // Style-driven visual effects
  const styleFX = {
    cinematic: { blur: "blur(0px)", contrast: "1.1", saturate: "1.15", scanline: false, chroma: false, glitch: false, cutMs: 900 },
    funk:      { blur: "blur(0px)", contrast: "1.25", saturate: "1.5", scanline: false, chroma: false, glitch: true,  cutMs: 220 },
    broadcast: { blur: "blur(0px)", contrast: "1.1",  saturate: "1.2", scanline: true,  chroma: false, glitch: false, cutMs: 600 },
    vhs:       { blur: "blur(0.4px)", contrast: "1.0", saturate: "0.9", scanline: true, chroma: true,  glitch: false, cutMs: 500 },
  }[style];

  const zoomAmt = style === "funk" ? 1.25 : style === "cinematic" ? 1.12 : 1.06;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      <header className="sticky top-0 z-30 h-14 bg-black/70 backdrop-blur border-b border-white/10 px-6 flex items-center justify-between">
        <Link to="/dashboard" className="text-xs font-mono text-white/70 hover:text-neon-cyan">← COMMAND</Link>
        <div className="font-display tracking-widest text-neon-gold">CINEMATIC HIGHLIGHT REEL</div>
        <div className="font-mono text-[10px] text-white/50">AI DIRECTOR · v2.6</div>
      </header>

      {/* CONFIG */}
      {phase === "config" && (
        <div className="flex-1 p-6 overflow-y-auto relative">
          {/* Animated stadium background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img src={stadiumTwin} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20"
              style={{ animation: "reel-bg-pan 30s ease-in-out infinite alternate" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="absolute rounded-full blur-3xl opacity-30"
                style={{
                  left: `${(i * 71) % 100}%`, top: `${(i * 43) % 100}%`,
                  width: 80 + (i % 5) * 40, height: 80 + (i % 5) * 40,
                  background: [team?.color ?? "#22d3ee", team?.accent ?? "#fbbf24", "#f43f5e"][i % 3],
                  animation: `orb-drift ${10 + (i % 5) * 2}s ease-in-out ${i * 0.4}s infinite`,
                }} />
            ))}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70%] h-[60%]"
              style={{ background: "radial-gradient(ellipse at center top, rgba(34,211,238,0.25), transparent 65%)" }} />
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 relative z-10">
            <div className="col-span-12 lg:col-span-7">

              <div className="inline-block px-3 py-1 rounded-full border border-neon-gold/40 bg-neon-gold/10 text-neon-gold text-[10px] font-mono uppercase tracking-widest mb-4">
                One-Click · AI Directed · FIFA WC 2026
              </div>
              <h1 className="font-display text-5xl md:text-6xl tracking-wide mb-3">
                YOUR MATCH,<br />
                <span className="text-neon-cyan">RECUT BY AI.</span>
              </h1>
              <p className="text-white/70 max-w-lg mb-8">
                Set your style, drop in your reaction footage, choose the length, and StadiumOS assembles the reel with your team, your hero, and a pro-level edit.
              </p>

              {!passport && (
                <div className="mb-6 rounded-lg border border-neon-alert/40 bg-neon-alert/10 p-4 text-sm text-neon-alert flex items-center justify-between gap-4">
                  <span>No fan passport detected — pick a team to personalise the reel.</span>
                  <Link to="/passport" className="px-3 py-1.5 bg-neon-alert text-black rounded font-mono text-[10px] tracking-widest">MINT PASSPORT</Link>
                </div>
              )}

              <Section title="1 · Reel Style">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {STYLES.map((s) => (
                    <button key={s.key} onClick={() => setStyle(s.key)}
                      className={`text-left p-3 rounded-lg border transition ${style === s.key ? "border-neon-cyan bg-neon-cyan/10 shadow-[0_0_20px_rgba(34,211,238,0.3)]" : "border-white/10 bg-white/5 hover:border-white/30"}`}>
                      <div className="text-2xl mb-1">{s.badge}</div>
                      <div className="font-display tracking-wide">{s.name}</div>
                      <div className="text-[10px] text-white/50 leading-tight mt-1">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </Section>

              <Section title="2 · Length">
                <div className="flex gap-2">
                  {(["15","30","60"] as LengthKey[]).map((l) => (
                    <button key={l} onClick={() => setLength(l)}
                      className={`flex-1 py-3 rounded-lg font-display text-2xl tracking-widest transition ${length === l ? "bg-neon-gold text-black" : "bg-white/5 text-white/60 hover:bg-white/10"}`}>
                      {l}s
                    </button>
                  ))}
                </div>
              </Section>

              <Section title="3 · Upload your reaction clip (optional)">
                <label className={`flex items-center gap-4 p-4 rounded-lg border-2 border-dashed cursor-pointer transition ${uploadUrl ? "border-neon-cyan bg-neon-cyan/5" : "border-white/15 hover:border-neon-cyan/50"}`}>
                  <input type="file" accept="video/*,image/*" onChange={handleUpload} className="hidden" />
                  <div className="size-14 rounded bg-white/5 flex items-center justify-center text-2xl">
                    {uploadType === "video" ? "🎥" : uploadType === "image" ? "📸" : "⬆︎"}
                  </div>
                  <div className="flex-1">
                    <div className="font-display tracking-wide">{uploadUrl ? "Reaction locked in" : "Drop a video or photo"}</div>
                    <div className="text-[10px] font-mono text-white/50">{uploadUrl ? `${uploadType?.toUpperCase()} · will be inter-cut with the goal` : "MP4, MOV, JPG, PNG — up to 200MB (local, never uploaded)"}</div>
                  </div>
                  {uploadUrl && (
                    <button onClick={(e) => { e.preventDefault(); setUploadUrl(null); setUploadType(null); }}
                      className="text-[10px] font-mono text-neon-alert hover:underline">REMOVE</button>
                  )}
                </label>
              </Section>

              {team && (
                <Section title={`4 · Hero from ${team.flag} ${team.name}`}>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-52 overflow-y-auto pr-1">
                    {team.players.map((p) => (
                      <ReelPlayerButton key={p.name} player={p} team={team}
                        selected={player === p.name}
                        onPick={() => setPlayer(p.name)} />
                    ))}
                  </div>
                </Section>
              )}

              <Section title="5 · Audio">
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={!muted} onChange={(e) => setMuted(!e.target.checked)} className="size-4 accent-neon-cyan" />
                    <span className="text-sm">
                      Play soundtrack during reel
                      <span className="block text-[10px] text-white/40 font-mono">Custom upload wins over built-in funk loop</span>
                    </span>
                  </label>

                  <label className={`flex items-center gap-3 p-3 rounded-lg border-2 border-dashed cursor-pointer transition ${customTrackName ? "border-neon-gold bg-neon-gold/5" : "border-white/15 hover:border-neon-gold/50"}`}>
                    <input type="file" accept="audio/*" className="hidden" onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (!f) return;
                      customFileRef.current = f;
                      setCustomTrackName(f.name);
                    }} />
                    <div className="size-10 rounded bg-white/5 flex items-center justify-center text-lg">🎵</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display tracking-wide text-sm truncate">{customTrackName ?? "Upload your funk track"}</div>
                      <div className="text-[10px] font-mono text-white/50 truncate">{customTrackName ? "Locked · will loop under scenes" : "MP3, WAV, OGG · local only"}</div>
                    </div>
                    {customTrackName && (
                      <button onClick={(e) => { e.preventDefault(); customFileRef.current = null; setCustomTrackName(null); }}
                        className="text-[10px] font-mono text-neon-alert hover:underline">REMOVE</button>
                    )}
                  </label>

                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-white/60 mb-1">
                      <span>MASTER VOLUME</span>
                      <span className="text-neon-cyan tabular-nums">{Math.round(volume * 100)}%</span>
                    </div>
                    <input type="range" min={0} max={1} step={0.01} value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-full accent-neon-gold" />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={sfxOn} onChange={(e) => setSfxOn(e.target.checked)} className="size-4 accent-neon-cyan" />
                    <span className="text-sm">
                      Style FX cues on every cut
                      <span className="block text-[10px] text-white/40 font-mono">
                        {style === "cinematic" ? "Orchestral swell" : style === "broadcast" ? "Broadcast whoosh + beep" : style === "vhs" ? "Tape static + wobble" : "Funk snare hit"}
                      </span>
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={autoLoop} onChange={(e) => setAutoLoop(e.target.checked)} className="size-4 accent-neon-gold" />
                    <span className="text-sm">
                      Auto-loop playback
                      <span className="block text-[10px] text-white/40 font-mono">Reel restarts automatically — perfect for kiosks & watch parties</span>
                    </span>
                  </label>

                </div>
              </Section>

              <button onClick={generate}
                className="mt-8 w-full md:w-auto px-10 py-4 bg-gradient-to-r from-neon-gold to-neon-cyan text-black font-display tracking-[0.3em] text-lg rounded shadow-[0_0_60px_rgba(251,191,36,0.4)] hover:shadow-[0_0_80px_rgba(34,211,238,0.6)] transition-all hover:scale-105">
                GENERATE REEL →
              </button>
            </div>

            {/* Preview card */}
            <div className="col-span-12 lg:col-span-5">
              <div className="sticky top-20 rounded-2xl overflow-hidden border border-white/10 aspect-video relative"
                style={{ background: team ? `linear-gradient(135deg, ${team.color}, ${team.accent})` : "#0f172a" }}>
                <img src={goalImg} alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-0 right-0 text-[200px] leading-none opacity-20 pointer-events-none">{team?.flag ?? "⚽"}</div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan mb-1">Preview</div>
                  <div className="font-display text-4xl tracking-wide">{(player || team?.name || "YOUR REEL").toUpperCase()}</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Pill>{STYLES.find(s => s.key === style)?.name}</Pill>
                    <Pill>{length}s</Pill>
                    {uploadUrl && <Pill>+ Fan-cam</Pill>}
                    {!muted && style === "funk" && <Pill>🎵 Funk</Pill>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BUILDING */}
      {phase === "building" && (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full">
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-3 rounded-full bg-neon-cyan animate-ping" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-neon-cyan">AI DIRECTOR RENDERING</span>
              </div>
              <div className="space-y-3">
                {BUILD_STEPS.map((step, i) => (
                  <div key={i} className={`flex items-center gap-3 text-sm transition ${i < buildStep ? "text-white/40" : i === buildStep ? "text-neon-cyan" : "text-white/20"}`}>
                    <div className={`size-4 rounded-full border ${i < buildStep ? "bg-neon-cyan border-neon-cyan" : i === buildStep ? "border-neon-cyan animate-pulse" : "border-white/20"}`} />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-gold transition-all duration-500"
                  style={{ width: `${(buildStep / BUILD_STEPS.length) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PLAYING / DONE */}
      {(phase === "playing" || phase === "done") && (
        <div ref={stageRef} className="flex-1 relative overflow-hidden"
          style={{ filter: `contrast(${styleFX.contrast}) saturate(${styleFX.saturate})` }}>
          {/* Scenes */}
          {SCENES.map((s, i) => (
            <div key={i} className="absolute inset-0 transition-opacity" style={{
              opacity: scene === i ? 1 : 0,
              transitionDuration: `${styleFX.cutMs}ms`,
            }}>
              {uploadType === "video" && s.img === uploadUrl ? (
                <video src={uploadUrl!} autoPlay muted loop playsInline
                  className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    transform: scene === i ? `scale(${zoomAmt}) ${style === "funk" && scene === i ? "rotate(0.5deg)" : ""}` : "scale(1)",
                    transition: `transform ${SCENE_MS}ms ease-out`,
                    filter: styleFX.blur,
                  }} />
              )}
              <div className={`absolute inset-0 bg-gradient-to-t ${s.tint} via-black/40 to-black/70`} />
              {/* Team color pop */}
              <div className="absolute inset-0 mix-blend-overlay opacity-30"
                style={{ background: `radial-gradient(circle at 30% 40%, ${s.color}55, transparent 60%)` }} />
            </div>
          ))}

          {/* Hero player full-bleed backdrop */}
          {(() => {
            const hp = team?.players.find((p) => p.name === player);
            if (!hp || heroBg === "off") return null;
            return <HeroBackdrop key={`${scene}-${heroBg}`} player={hp} team={team!} mode={heroBg} />;
          })()}

          {/* Backdrop mode switch */}
          <button onClick={() => setHeroBg(heroBg === "full" ? "side" : heroBg === "side" ? "off" : "full")}
            title="Hero backdrop mode"
            className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/20 font-mono text-[10px] tracking-widest text-white/70 hover:text-neon-cyan hover:border-neon-cyan transition">
            HERO BG · {heroBg.toUpperCase()}
          </button>

          {/* VHS scanlines */}

          {styleFX.scanline && (
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{
              backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 1px, transparent 2px, transparent 3px)"
            }} />
          )}
          {styleFX.chroma && (
            <>
              <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40"
                style={{ background: "radial-gradient(circle at 40% 50%, #ff00ff33, transparent 70%)", animation: "chroma-wobble 4s ease-in-out infinite" }} />
              <div className="absolute inset-x-0 h-8 bg-white/10 pointer-events-none" style={{ animation: "tape-glitch 3s linear infinite" }} />
            </>
          )}
          {styleFX.glitch && scene === (SCENES.findIndex(s => s.title.includes("GOOOAL")) >= 0 ? SCENES.findIndex(s => s.title.includes("GOOOAL")) : 2) && (
            <div className="absolute inset-0 pointer-events-none" style={{ animation: "funk-shake 0.4s ease-out" }} key={scene} />
          )}

          {/* Confetti during goal scene */}
          {scene === SCENES.findIndex(s => s.title.includes("GOOOAL")) && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="absolute size-1.5" style={{
                  left: `${Math.random() * 100}%`,
                  top: `-5%`,
                  background: [team?.color ?? "#22d3ee", team?.accent ?? "#fbbf24", "#f43f5e", "#22c55e"][i % 4],
                  animation: `confetti-fall ${3 + Math.random() * 2}s linear ${Math.random()}s infinite`,
                }} />
              ))}
            </div>
          )}

          {/* Broadcast lower-third */}
          {style === "broadcast" && (
            <div className="absolute bottom-24 left-0 right-0 pointer-events-none">
              <div className="mx-8 md:mx-16 flex items-stretch">
                <div className="w-2 bg-neon-alert" />
                <div className="bg-black/80 backdrop-blur px-4 py-2 border-l-2 border-neon-cyan">
                  <div className="font-mono text-[9px] tracking-widest text-neon-cyan">LIVE · WORLD CUP 2026</div>
                  <div className="font-display text-xl tracking-wide">{player || team?.name || "STADIUMOS AI"}</div>
                </div>
              </div>
            </div>
          )}

          {/* Overlay copy */}
          <div className="absolute inset-x-0 bottom-24 px-8 md:px-16 z-10">
            <div key={scene} style={{ animation: `${style === "funk" ? "funk-in" : "slide-up-fade"} 700ms cubic-bezier(0.22,1,0.36,1) both` }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-neon-cyan mb-2">
                {String(scene + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")} · {current?.caption}
              </div>
              <h2 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-3"
                style={style === "funk" ? { textShadow: `4px 4px 0 ${team?.accent ?? "#f43f5e"}, -2px -2px 0 ${team?.color ?? "#22d3ee"}` } : {}}>
                {current?.title}
              </h2>
              <div className="max-w-xl border-l-2 border-neon-cyan pl-4">
                <div className="text-[10px] font-mono text-neon-cyan mb-1">AI COMMENTARY</div>
                <p className="text-lg text-white/90">{current?.ai}</p>
              </div>
            </div>
          </div>

          {/* Animated background particle field (behind text, above scene) */}
          <div className="absolute inset-0 pointer-events-none z-[5] mix-blend-screen opacity-40">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="absolute rounded-full blur-2xl"
                style={{
                  left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%`,
                  width: 60 + (i % 5) * 30, height: 60 + (i % 5) * 30,
                  background: [team?.color ?? "#22d3ee", team?.accent ?? "#fbbf24", "#22c55e"][i % 3],
                  animation: `orb-drift ${8 + (i % 5) * 2}s ease-in-out ${i * 0.3}s infinite`,
                }} />
            ))}
          </div>

          {/* Hero player avatar chip */}
          {(() => {
            const heroPlayer = team?.players.find((p) => p.name === player);
            if (!heroPlayer) return null;
            return <HeroChip key={scene} player={heroPlayer} team={team!} sceneKey={scene} />;
          })()}

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 size-8 border-t-2 border-l-2 border-neon-cyan/60" />
          <div className="absolute top-4 right-4 size-8 border-t-2 border-r-2 border-neon-cyan/60" />
          <div className="absolute bottom-4 left-4 size-8 border-b-2 border-l-2 border-neon-cyan/60" />
          <div className="absolute bottom-4 right-4 size-8 border-b-2 border-r-2 border-neon-cyan/60" />

          {/* Broadcast ticker */}
          {style === "broadcast" && (
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-black border-t border-neon-alert overflow-hidden">
              <div className="whitespace-nowrap font-mono text-[10px] text-white/70" style={{ animation: "marquee 20s linear infinite" }}>
                ● {team?.name?.toUpperCase()} REEL · {player?.toUpperCase()} · GOAL 44' · STADIUM_OS · FIFA WC 2026 · REPLAY ANGLE 3 · CROWD 92% EUPHORIC ● {team?.name?.toUpperCase()} REEL · {player?.toUpperCase()} · GOAL 44' · STADIUM_OS · FIFA WC 2026 ·
              </div>
            </div>
          )}

          {/* Playback controls + progress bar */}
          {phase === "playing" && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-11/12 max-w-3xl z-20 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => skipScene(-1)} title="Previous scene (←)"
                  className="size-9 rounded-full bg-black/60 backdrop-blur border border-white/20 hover:border-neon-cyan hover:text-neon-cyan text-white/80 font-mono text-sm transition">⏮</button>
                <button onClick={togglePause} title="Pause / Resume (Space)"
                  className="size-11 rounded-full bg-neon-cyan text-black font-mono text-lg shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-110 transition">
                  {paused ? "▶" : "❚❚"}
                </button>
                <button onClick={() => skipScene(1)} title="Next scene (→)"
                  className="size-9 rounded-full bg-black/60 backdrop-blur border border-white/20 hover:border-neon-cyan hover:text-neon-cyan text-white/80 font-mono text-sm transition">⏭</button>
                <button onClick={() => setMuted((m) => { const n = !m; if (n) { try { customSrcRef.current?.stop(); } catch {} funkRef.current?.stop(); sfxRef.current?.setVolume(0); } else { sfxRef.current?.setVolume(volume); } return n; })}
                  title="Mute / Unmute"
                  className="size-9 rounded-full bg-black/60 backdrop-blur border border-white/20 hover:border-neon-gold hover:text-neon-gold text-white/80 font-mono text-sm transition">
                  {muted ? "🔇" : "🔊"}
                </button>
                <button onClick={() => setAutoLoop((l) => { autoLoopRef.current = !l; return !l; })}
                  title="Auto-loop"
                  className={`h-9 px-3 rounded-full backdrop-blur border font-mono text-[10px] tracking-widest transition ${autoLoop ? "bg-neon-gold/20 border-neon-gold text-neon-gold" : "bg-black/60 border-white/20 text-white/60 hover:border-neon-gold/50"}`}>
                  LOOP {autoLoop ? "ON" : "OFF"}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-white/60 tabular-nums">{formatTime(progress * (TOTAL_MS / 1000))}</span>
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    const p = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
                    elapsedRef.current = p * TOTAL_MS;
                    setProgress(p);
                  }}>
                  <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-gold" style={{ width: `${progress * 100}%` }} />
                </div>
                <span className="font-mono text-[10px] text-white/60 tabular-nums">{formatTime(TOTAL_MS / 1000)}</span>
              </div>
              <div className="text-center text-[9px] font-mono text-white/30 tracking-widest">SPACE PAUSE · ← → SCENE · CLICK BAR SCRUB</div>
            </div>
          )}


          {phase === "done" && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur">
              <div className="text-center max-w-lg px-6">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neon-gold mb-3">REEL COMPLETE</div>
                <h2 className="font-display text-5xl tracking-widest mb-3">SHARE THE MOMENT</h2>
                <p className="text-sm text-white/60 mb-6">
                  {passport?.name ?? "Fan"}'s {STYLES.find(s => s.key === style)?.name} reel · {team?.flag} {team?.name} · {player}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button onClick={() => { void startPlayback(); }}
                    className="px-6 py-3 bg-neon-cyan text-black font-display tracking-widest text-sm rounded">REPLAY</button>
                  <button onClick={downloadPoster}
                    className="px-6 py-3 border border-neon-gold text-neon-gold font-display tracking-widest text-sm rounded hover:bg-neon-gold hover:text-black transition">DOWNLOAD POSTER</button>
                  <button onClick={downloadManifest}
                    className="px-6 py-3 border border-neon-cyan text-neon-cyan font-display tracking-widest text-sm rounded hover:bg-neon-cyan hover:text-black transition">EXPORT JSON</button>
                  <button onClick={shareReel}
                    className="px-6 py-3 border border-white/30 text-white font-display tracking-widest text-sm rounded hover:bg-white hover:text-black transition">SHARE</button>
                  <button onClick={() => setPhase("config")}
                    className="px-6 py-3 border border-white/20 text-white/60 font-mono text-xs tracking-widest rounded hover:text-white transition">◄ NEW REEL</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes confetti-fall { to { transform: translateY(110vh) rotate(720deg); } }
        @keyframes funk-in {
          0% { opacity: 0; transform: translateY(40px) scale(1.2) skewX(-8deg); }
          60% { opacity: 1; transform: translateY(-4px) scale(0.98) skewX(2deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) skewX(0deg); }
        }
        @keyframes funk-shake {
          0%,100% { transform: translate(0,0); }
          20% { transform: translate(-6px,4px); }
          40% { transform: translate(5px,-3px); }
          60% { transform: translate(-4px,-4px); }
          80% { transform: translate(3px,5px); }
        }
        @keyframes chroma-wobble {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(6px,-4px); }
        }
        @keyframes tape-glitch {
          0%,90%,100% { opacity: 0; transform: translateY(0); }
          92% { opacity: 0.5; transform: translateY(60vh); }
          95% { opacity: 0.3; transform: translateY(20vh); }
        }
        @keyframes orb-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.15); }
          66% { transform: translate(-25px,15px) scale(0.9); }
        }
        @keyframes reel-bg-pan {
          0% { transform: scale(1.1) translate(0,0); }
          100% { transform: scale(1.25) translate(-3%, -2%); }
        }
      `}</style>

    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <div className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest mb-2">{title}</div>
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="px-2.5 py-1 rounded-full bg-black/50 border border-white/20 text-[10px] font-mono uppercase tracking-widest">{children}</span>;
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function ReelPlayerButton({ player, team, selected, onPick }:
  { player: import("@/data/wc2026").Player; team: import("@/data/wc2026").Team; selected: boolean; onPick: () => void }) {
  const photo = usePlayerPhoto(player.name);
  const src = photo || player.photo || playerAvatar(player, team);
  return (
    <button onClick={onPick}
      className={`text-left px-2 py-2 rounded border transition flex gap-2 items-center ${selected ? "border-neon-gold bg-neon-gold/10" : "border-white/10 bg-black/30 hover:border-white/30"}`}>
      <img src={src} alt={player.name} loading="lazy" className="size-10 rounded object-cover shrink-0 bg-black/40" />
      <div className="min-w-0">
        <div className="font-mono text-[9px] text-white/40">#{player.no} · {player.pos}{photo ? " · 📷" : player.photo ? " · FIFA" : ""}</div>
        <div className="font-display tracking-wide text-sm truncate">{player.name}</div>
      </div>
    </button>
  );
}

function HeroChip({ player, team, sceneKey }:
  { player: import("@/data/wc2026").Player; team: import("@/data/wc2026").Team; sceneKey: number }) {
  const photo = usePlayerPhoto(player.name);
  const src = photo || player.photo || playerAvatar(player, team);
  return (
    <div key={sceneKey} className="absolute top-6 right-6 z-20 flex items-center gap-3 bg-black/60 backdrop-blur border border-neon-gold/50 rounded-xl p-2 pr-4"
      style={{ animation: "slide-up-fade 500ms ease-out both" }}>
      <img src={src} alt={player.name} className="size-12 rounded-lg object-cover shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
      <div>
        <div className="font-mono text-[9px] text-neon-gold uppercase tracking-widest">#{player.no} · {player.pos}{photo ? " · REAL" : player.photo ? " · FIFA" : ""}</div>
        <div className="font-display tracking-wide text-white text-sm leading-tight">{player.name}</div>
        <div className="font-mono text-[9px] text-white/50">{team.flag} {team.name}</div>
      </div>
    </div>
  );
}

