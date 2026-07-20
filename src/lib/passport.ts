import { useEffect, useState } from "react";

export type FanPassport = {
  name: string;
  teamCode: string;
  favoritePlayer?: string;
  lang: string;
  createdAt: number;
};

const KEY = "stadiumos.passport.v1";

export function loadPassport(): FanPassport | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FanPassport) : null;
  } catch {
    return null;
  }
}

export function savePassport(p: FanPassport) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(p));
}

export function clearPassport() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function usePassport(): [FanPassport | null, (p: FanPassport | null) => void] {
  const [p, setP] = useState<FanPassport | null>(null);
  useEffect(() => { setP(loadPassport()); }, []);
  const update = (next: FanPassport | null) => {
    setP(next);
    if (next) savePassport(next); else clearPassport();
  };
  return [p, update];
}
