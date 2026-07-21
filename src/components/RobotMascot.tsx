// Animated SVG robot mascot for the Copilot — reacts to emotion/state.

import { useEffect, useState } from "react";

export type RobotEmotion = "idle" | "listening" | "thinking" | "alert" | "happy";

export function RobotMascot({
  emotion = "idle",
  speaking = false,
  size = 72,
}: { emotion?: RobotEmotion; speaking?: boolean; size?: number }) {
  const [blink, setBlink] = useState(false);
  const [mouth, setMouth] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 2600 + Math.random() * 1800);
    return () => clearInterval(t);
  }, []);

  // Mouth waveform when TTS is speaking
  useEffect(() => {
    if (!speaking) { setMouth(0); return; }
    let raf = 0;
    const start = performance.now();
    const tick = () => {
      const t = (performance.now() - start) / 1000;
      setMouth((Math.sin(t * 18) * 0.5 + 0.5) * (0.6 + Math.random() * 0.4));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speaking]);

  const eyeColor =
    emotion === "alert" ? "#f43f5e" :
    emotion === "listening" ? "#fbbf24" :
    emotion === "thinking" ? "#a78bfa" :
    emotion === "happy" ? "#22c55e" : "#22d3ee";

  const glow = `drop-shadow(0 0 8px ${eyeColor}) drop-shadow(0 0 16px ${eyeColor}88)`;
  const bob = emotion === "listening" ? "robot-bob 0.9s ease-in-out infinite" :
              emotion === "thinking" ? "robot-tilt 2s ease-in-out infinite" :
              emotion === "alert"    ? "robot-shake 0.35s ease-in-out infinite" :
              "robot-float 4s ease-in-out infinite";

  const eyeH = blink ? 1 : 6;
  const mouthH = 2 + mouth * 10;
  const mouthW = 18 + mouth * 6;

  return (
    <div style={{ width: size, height: size, animation: bob, filter: glow }}>
      <svg viewBox="0 0 100 100" width={size} height={size}>
        {/* Antenna */}
        <line x1="50" y1="12" x2="50" y2="4" stroke={eyeColor} strokeWidth="2" />
        <circle cx="50" cy="4" r="3" fill={eyeColor}>
          <animate attributeName="r" values="2.5;3.5;2.5" dur="1.2s" repeatCount="indefinite" />
        </circle>
        {/* Head */}
        <rect x="20" y="14" width="60" height="52" rx="14" fill="#0f172a" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        {/* Cheeks screen */}
        <rect x="26" y="20" width="48" height="38" rx="8" fill="#020617" />
        {/* Eyes */}
        <rect x="34" y={38 - eyeH / 2} width="12" height={eyeH} rx="2" fill={eyeColor} />
        <rect x="54" y={38 - eyeH / 2} width="12" height={eyeH} rx="2" fill={eyeColor} />
        {/* Mouth */}
        <rect x={50 - mouthW / 2} y={50 - mouthH / 2} width={mouthW} height={mouthH} rx="1.5" fill={eyeColor} opacity="0.9" />
        {/* Neck + body */}
        <rect x="42" y="66" width="16" height="6" fill="#0f172a" />
        <rect x="18" y="72" width="64" height="20" rx="6" fill="#0f172a" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        {/* Chest LEDs */}
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={38 + i * 12} cy="82" r="2.2" fill={eyeColor} opacity={0.4 + (speaking ? Math.random() * 0.6 : 0.2)} />
        ))}
      </svg>
      <style>{`
        @keyframes robot-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes robot-bob   { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-4px) scale(1.03); } }
        @keyframes robot-tilt  { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes robot-shake { 0%,100% { transform: translate(0,0); } 25% { transform: translate(-2px,1px); } 75% { transform: translate(2px,-1px); } }
      `}</style>
    </div>
  );
}
