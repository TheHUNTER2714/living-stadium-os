// Shared cinematic FX primitives for StadiumOS:
// cursor spotlight, mouse-reactive particle field, animated grid, magnetic hover,
// scroll-triggered counters, and floating holographic panels.

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------------------------------- Cursor spotlight --------------------------------- */

export function CursorSpotlight({ color = "34,211,238", size = 420 }: { color?: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2, x = tx, y = ty;
    const onMove = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      if (ref.current) ref.current.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, [size]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden mix-blend-screen">
      <div ref={ref} style={{
        width: size, height: size,
        background: `radial-gradient(circle, rgba(${color},0.20) 0%, rgba(${color},0.07) 38%, transparent 68%)`,
      }} />
    </div>
  );
}

/* ---------------------------------- Particle field ----------------------------------- */

export function ParticleField({
  count = 90, className = "", color = "34,211,238", link = true, interactive = true,
}: { count?: number; className?: string; color?: string; link?: boolean; interactive?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0, w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const pts = Array.from({ length: count }).map(() => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.5,
    }));

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; };
    if (interactive) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerleave", onLeave);
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (mouse.active) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140 && d2 > 1) {
            const f = (1 - Math.sqrt(d2) / 140) * 0.6;
            p.vx += (dx / Math.sqrt(d2)) * f * 0.35;
            p.vy += (dy / Math.sqrt(d2)) * f * 0.35;
          }
        }
        p.vx *= 0.97; p.vy *= 0.97;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x += w; if (p.x > w) p.x -= w;
        if (p.y < 0) p.y += h; if (p.y > h) p.y -= h;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},0.75)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (link) {
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i], b = pts[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 110 * 110) {
              ctx.strokeStyle = `rgba(${color},${0.16 * (1 - Math.sqrt(d2) / 110)})`;
              ctx.lineWidth = 1;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [count, color, link, interactive]);

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 w-full h-full ${className}`} />;
}

/* ---------------------------------- Animated grid ------------------------------------ */

export function AnimatedGrid({ className = "", opacity = 0.25 }: { className?: string; opacity?: number }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
      <div className="absolute inset-0" style={{
        backgroundImage:
          "linear-gradient(rgba(34,211,238,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.18) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 78%)",
        animation: "grid-pan 14s linear infinite",
      }} />
      <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent"
        style={{ animation: "grid-sweep 7s ease-in-out infinite" }} />
    </div>
  );
}

/* ---------------------------------- Magnetic hover ----------------------------------- */

export function Magnetic({
  children, strength = 22, className = "", onClick, title,
}: { children: ReactNode; strength?: number; className?: string; onClick?: () => void; title?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength * 0.5}px) scale(1.04)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0,0) scale(1)"; };
  return (
    <button ref={ref} title={title} onClick={onClick} onPointerMove={onMove} onPointerLeave={reset}
      className={className} style={{ transition: "transform 320ms cubic-bezier(0.22,1,0.36,1)" }}>
      {children}
    </button>
  );
}

/* ------------------------------ Scroll-triggered counter ----------------------------- */

export function CountUp({
  to, duration = 1400, decimals = 0, prefix = "", suffix = "", className = "",
}: { to: number; duration?: number; decimals?: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || started.current) return;
      started.current = true;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        setVal(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}

/* --------------------------- Floating holographic panel ------------------------------ */

export function HoloPanel({
  children, className = "", delay = 0, float = true, tilt = true,
}: { children: ReactNode; className?: string; delay?: number; float?: boolean; tilt?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    if (!tilt) return;
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `perspective(900px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateZ(10px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0) rotateX(0)"; };
  return (
    <div onPointerMove={onMove} onPointerLeave={reset}
      className={`glass-panel relative ${className}`}
      style={{ animation: `${float ? "holo-float 7s ease-in-out infinite," : ""} slide-up-fade 700ms cubic-bezier(0.22,1,0.36,1) both`, animationDelay: `${delay}ms` }}>
      <div ref={ref} style={{ transition: "transform 320ms ease-out" }} className="h-full">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/70 to-transparent" />
        {children}
      </div>
    </div>
  );
}
