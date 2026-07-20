// Web Audio funk loop generator — 4-bar synthesized funk backing (bass + kick + snare + hat + clav).

export type FunkHandle = {
  start: () => void;
  stop: () => void;
  setVolume: (v: number) => void;
  ctx: AudioContext | null;
  isPlaying: () => boolean;
  destination: MediaStreamAudioDestinationNode | null;
};

const NOTE = (semi: number) => 65.41 * Math.pow(2, semi / 12); // relative to C2

export function createFunkLoop(opts?: { bpm?: number; captureStream?: boolean }): FunkHandle {
  const bpm = opts?.bpm ?? 110;
  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;
  let dest: MediaStreamAudioDestinationNode | null = null;
  let timer: number | null = null;
  let started = false;
  let nextTime = 0;
  let step = 0;

  const secPerStep = 60 / bpm / 4; // 16th notes

  // Funk bass line (semitones from C2 root, 16 steps). Classic riff.
  const bass = [0, null, 3, null, 5, null, 3, 0, null, 7, null, 5, 3, null, 0, null] as (number | null)[];
  const kick =  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,1,0,0];
  const snare = [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1];
  const hat =   [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1];
  const clav =  [0,0,1,0, 0,0,0,0, 0,1,0,0, 1,0,0,0];

  function ensure() {
    if (ctx) return;
    const AC = (window.AudioContext || (window as any).webkitAudioContext);
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.5;
    master.connect(ctx.destination);
    if (opts?.captureStream) {
      dest = ctx.createMediaStreamDestination();
      master.connect(dest);
    }
  }

  function envGain(dur: number, peak = 1, attack = 0.002, release = 0.1) {
    const g = ctx!.createGain();
    const now = nextTime;
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(peak, now + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur + release);
    return g;
  }

  function playBass(semi: number) {
    const osc = ctx!.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.value = NOTE(semi);
    const filt = ctx!.createBiquadFilter();
    filt.type = "lowpass";
    filt.frequency.setValueAtTime(1600, nextTime);
    filt.frequency.exponentialRampToValueAtTime(400, nextTime + 0.2);
    filt.Q.value = 8;
    const g = envGain(0.18, 0.55, 0.005, 0.15);
    osc.connect(filt).connect(g).connect(master!);
    osc.start(nextTime);
    osc.stop(nextTime + 0.35);
  }

  function playKick() {
    const osc = ctx!.createOscillator();
    osc.frequency.setValueAtTime(120, nextTime);
    osc.frequency.exponentialRampToValueAtTime(40, nextTime + 0.15);
    const g = envGain(0.05, 0.9, 0.001, 0.15);
    osc.connect(g).connect(master!);
    osc.start(nextTime);
    osc.stop(nextTime + 0.25);
  }

  function playNoise(dur: number, peak: number, hp: number) {
    const bufSize = Math.floor(ctx!.sampleRate * 0.2);
    const buf = ctx!.createBuffer(1, bufSize, ctx!.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx!.createBufferSource();
    src.buffer = buf;
    const filt = ctx!.createBiquadFilter();
    filt.type = "highpass";
    filt.frequency.value = hp;
    const g = envGain(dur, peak, 0.001, 0.05);
    src.connect(filt).connect(g).connect(master!);
    src.start(nextTime);
    src.stop(nextTime + 0.25);
  }

  function playClav(semi: number) {
    const osc = ctx!.createOscillator();
    osc.type = "square";
    osc.frequency.value = NOTE(semi + 24);
    const g = envGain(0.04, 0.25, 0.001, 0.05);
    osc.connect(g).connect(master!);
    osc.start(nextTime);
    osc.stop(nextTime + 0.1);
  }

  function scheduleStep() {
    const s = step % 16;
    if (bass[s] !== null) playBass(bass[s]!);
    if (kick[s]) playKick();
    if (snare[s]) playNoise(0.08, 0.5, 800);
    if (hat[s]) playNoise(0.02, 0.15, 6000);
    if (clav[s]) playClav(0);
    step++;
    nextTime += secPerStep;
  }

  function tick() {
    if (!ctx || !started) return;
    while (nextTime < ctx.currentTime + 0.15) scheduleStep();
    timer = window.setTimeout(tick, 40);
  }

  return {
    ctx: null,
    destination: null,
    isPlaying: () => started,
    start: () => {
      ensure();
      if (started) return;
      started = true;
      step = 0;
      nextTime = ctx!.currentTime + 0.05;
      if (ctx!.state === "suspended") ctx!.resume().catch(() => {});
      tick();
    },
    stop: () => {
      started = false;
      if (timer) { clearTimeout(timer); timer = null; }
      try { master?.gain.setTargetAtTime(0, ctx!.currentTime, 0.05); } catch {}
      setTimeout(() => { try { ctx?.close(); } catch {} ctx = null; master = null; dest = null; }, 300);
    },
    setVolume: (v: number) => { if (master) master.gain.value = v; },
  };
}
