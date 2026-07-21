// Style-specific SFX synthesizers for the reel — pure Web Audio, no assets.

export type SFXHandle = {
  ctx: AudioContext | null;
  master: GainNode | null;
  setVolume: (v: number) => void;
  playCue: (kind: "scene" | "hit" | "swell") => void;
  playCustom: (buf: AudioBuffer, loop?: boolean) => AudioBufferSourceNode | null;
  loadFile: (file: File) => Promise<AudioBuffer>;
  stopAll: () => void;
  destroy: () => void;
};

export function createReelSFX(style: "cinematic" | "funk" | "broadcast" | "vhs"): SFXHandle {
  const AC = (window.AudioContext || (window as any).webkitAudioContext);
  const ctx: AudioContext = new AC();
  const master = ctx.createGain();
  master.gain.value = 0.6;
  master.connect(ctx.destination);
  const sources = new Set<AudioNode & { stop?: (t?: number) => void }>();

  const now = () => ctx.currentTime;

  function env(peak: number, attack: number, hold: number, release: number) {
    const g = ctx.createGain();
    const t = now();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(peak, t + attack);
    g.gain.setValueAtTime(peak, t + attack + hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + hold + release);
    return g;
  }

  function noise(dur: number) {
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const s = ctx.createBufferSource();
    s.buffer = buf;
    return s;
  }

  function cinematicSwell() {
    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(55, now());
    osc.frequency.exponentialRampToValueAtTime(110, now() + 1.6);
    const filt = ctx.createBiquadFilter();
    filt.type = "lowpass"; filt.frequency.setValueAtTime(220, now());
    filt.frequency.exponentialRampToValueAtTime(2200, now() + 1.6);
    const g = env(0.35, 0.6, 0.4, 0.9);
    osc.connect(filt).connect(g).connect(master);
    osc.start(); osc.stop(now() + 2.1);
    sources.add(osc);
  }

  function broadcastWhoosh() {
    const n = noise(0.6);
    const hp = ctx.createBiquadFilter();
    hp.type = "bandpass"; hp.frequency.setValueAtTime(300, now());
    hp.frequency.exponentialRampToValueAtTime(4000, now() + 0.5); hp.Q.value = 2;
    const g = env(0.4, 0.02, 0.05, 0.4);
    n.connect(hp).connect(g).connect(master);
    n.start(); n.stop(now() + 0.6);
    sources.add(n);
    // beep
    const b = ctx.createOscillator(); b.type = "square"; b.frequency.value = 1600;
    const bg = env(0.15, 0.001, 0.05, 0.08);
    b.connect(bg).connect(master); b.start(); b.stop(now() + 0.15);
    sources.add(b);
  }

  function vhsStatic() {
    const n = noise(0.4);
    const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 2000;
    const g = env(0.25, 0.005, 0.05, 0.25);
    n.connect(hp).connect(g).connect(master);
    n.start(); n.stop(now() + 0.4);
    sources.add(n);
    // low tape wobble
    const osc = ctx.createOscillator(); osc.type = "sine"; osc.frequency.value = 60;
    const og = env(0.1, 0.02, 0.1, 0.3);
    osc.connect(og).connect(master); osc.start(); osc.stop(now() + 0.5);
    sources.add(osc);
  }

  function funkHit() {
    const osc = ctx.createOscillator(); osc.type = "square"; osc.frequency.value = 880;
    const g = env(0.2, 0.001, 0.02, 0.12);
    osc.connect(g).connect(master); osc.start(); osc.stop(now() + 0.15);
    sources.add(osc);
    const k = ctx.createOscillator(); k.frequency.setValueAtTime(120, now());
    k.frequency.exponentialRampToValueAtTime(40, now() + 0.12);
    const kg = env(0.5, 0.001, 0.02, 0.15);
    k.connect(kg).connect(master); k.start(); k.stop(now() + 0.2);
    sources.add(k);
  }

  return {
    ctx,
    master,
    setVolume: (v) => { master.gain.value = Math.max(0, Math.min(1.5, v)); },
    playCue: (kind) => {
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      if (kind === "hit") { funkHit(); return; }
      if (kind === "swell") { cinematicSwell(); return; }
      // scene change per style
      if (style === "cinematic") cinematicSwell();
      else if (style === "broadcast") broadcastWhoosh();
      else if (style === "vhs") vhsStatic();
      else funkHit();
    },
    playCustom: (buf, loop = true) => {
      const src = ctx.createBufferSource();
      src.buffer = buf; src.loop = loop;
      src.connect(master);
      src.start();
      sources.add(src);
      return src;
    },
    loadFile: async (file) => {
      const ab = await file.arrayBuffer();
      return await ctx.decodeAudioData(ab);
    },
    stopAll: () => {
      sources.forEach((s) => { try { (s as any).stop?.(); } catch {} });
      sources.clear();
    },
    destroy: () => {
      try { sources.forEach((s) => { try { (s as any).stop?.(); } catch {} }); } catch {}
      try { ctx.close(); } catch {}
    },
  };
}
