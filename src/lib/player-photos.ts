// Per-player photo store. Fans can attach real photos (or any image) to
// FIFA WC 2026 players; they're persisted locally and reused across the
// passport preview and reel hero chip.
import { useEffect, useState } from "react";

const KEY = "stadiumos.player-photos.v1";

type Store = Record<string, string>; // playerName -> data URL

function read(): Store {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(window.localStorage.getItem(KEY) || "{}") as Store; } catch { return {}; }
}
function write(s: Store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(s));
  window.dispatchEvent(new CustomEvent("stadiumos:photos-changed"));
}

export function getPhoto(playerName: string): string | undefined {
  return read()[playerName];
}
export function setPhoto(playerName: string, dataUrl: string) {
  const s = read(); s[playerName] = dataUrl; write(s);
}
export function removePhoto(playerName: string) {
  const s = read(); delete s[playerName]; write(s);
}
export function allPhotos(): Store { return read(); }

export async function fileToDataUrl(file: File, maxDim = 480): Promise<string> {
  const raw = await new Promise<string>((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result as string);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
  // Downscale to keep localStorage small
  return await new Promise<string>((res) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const c = document.createElement("canvas");
      c.width = w; c.height = h;
      const ctx = c.getContext("2d")!;
      ctx.drawImage(img, 0, 0, w, h);
      res(c.toDataURL("image/jpeg", 0.82));
    };
    img.onerror = () => res(raw);
    img.src = raw;
  });
}

export function usePlayerPhoto(playerName: string | undefined | null): string | undefined {
  const [url, setUrl] = useState<string | undefined>(() => (playerName ? getPhoto(playerName) : undefined));
  useEffect(() => {
    const sync = () => setUrl(playerName ? getPhoto(playerName) : undefined);
    sync();
    window.addEventListener("stadiumos:photos-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("stadiumos:photos-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, [playerName]);
  return url;
}
