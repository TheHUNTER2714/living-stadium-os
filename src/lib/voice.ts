// Web Speech API helpers — push-to-talk STT + TTS.

type SR = typeof window extends { webkitSpeechRecognition: infer T } ? T : any;

export function getSpeechRecognition(): any | null {
  if (typeof window === "undefined") return null;
  const w = window as any;
  const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
  if (!Ctor) return null;
  return new Ctor();
}

export type PTTHandle = {
  start: () => void;
  stop: () => void;
  supported: boolean;
};

export function createPTT(opts: {
  lang: string;
  onPartial?: (text: string) => void;
  onFinal: (text: string) => void;
  onError?: (msg: string) => void;
  onEnd?: () => void;
}): PTTHandle {
  const rec = getSpeechRecognition();
  if (!rec) {
    return { start: () => {}, stop: () => {}, supported: false };
  }
  rec.lang = opts.lang;
  rec.continuous = true;
  rec.interimResults = true;
  rec.onresult = (ev: any) => {
    let interim = "";
    let final = "";
    for (let i = ev.resultIndex; i < ev.results.length; i++) {
      const r = ev.results[i];
      if (r.isFinal) final += r[0].transcript;
      else interim += r[0].transcript;
    }
    if (interim && opts.onPartial) opts.onPartial(interim);
    if (final) opts.onFinal(final.trim());
  };
  rec.onerror = (ev: any) => opts.onError?.(String(ev?.error || "unknown"));
  rec.onend = () => opts.onEnd?.();
  return {
    start: () => { try { rec.start(); } catch {} },
    stop: () => { try { rec.stop(); } catch {} },
    supported: true,
  };
}

export function speak(text: string, lang: string, rate = 1) {
  if (typeof window === "undefined") return;
  const s = window.speechSynthesis;
  if (!s) return;
  try {
    s.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    // Try to match a voice for the language
    const voices = s.getVoices();
    const match = voices.find((v) => v.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()));
    if (match) u.voice = match;
    s.speak(u);
  } catch {}
}

export function cancelSpeech() {
  if (typeof window === "undefined") return;
  window.speechSynthesis?.cancel();
}
