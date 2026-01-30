"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

export default function FunLayer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const buffer = useRef<string>("");

  const spawn = (x?: number) => {
    const root = ref.current;
    if (!root) return;

    const vw = Math.max(320, window.innerWidth);
    const px = typeof x === "number" ? x : Math.random() * vw;

    const el = document.createElement("div");
    el.className = "spark";
    el.textContent = site.fun.emojis[Math.floor(Math.random() * site.fun.emojis.length)];
    el.style.setProperty("--x", `${px}px`);
    el.style.setProperty("--drift", `${Math.random() * 120 - 60}px`);
    el.style.setProperty("--dur", `${6 + Math.random() * 8}s`);
    el.style.left = "0px";

    root.appendChild(el);
    const remove = () => { try { root.removeChild(el); } catch {} };
    el.addEventListener("animationend", remove, { once: true });
    setTimeout(remove, 16000);
  };

  useEffect(() => {
    const t = setInterval(() => spawn(), 900);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => { for (let i = 0; i < 10; i++) spawn(e.clientX + (Math.random() * 80 - 40)); };
    const onKey = (e: KeyboardEvent) => {
      buffer.current = (buffer.current + e.key.toLowerCase()).slice(-12);
      if (buffer.current.includes("kaisa")) {
        for (let i = 0; i < 40; i++) spawn(Math.random() * window.innerWidth);
        buffer.current = "";
      }
    };
    window.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("click", onClick); window.removeEventListener("keydown", onKey); };
  }, []);

  return <div ref={ref} className="floaty" aria-hidden="true" />;
}
