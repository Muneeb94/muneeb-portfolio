"use client";

import { useEffect, useRef } from "react";

type Pt = { x: number; y: number; vx: number; vy: number };

/** Mouse-reactive constellation network drawn on a canvas behind the hero. */
export default function Constellation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (reduce) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      DPR = 1,
      pts: Pt[] = [],
      raf = 0;
    const mouse = { x: -999, y: -999 };
    const root = document.documentElement;

    const accent = () =>
      getComputedStyle(root).getPropertyValue("--accent").trim() || "#e08a4c";
    const hexRgb = (h: string) => {
      h = h.replace("#", "");
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      return [
        parseInt(h.slice(0, 2), 16),
        parseInt(h.slice(2, 4), 16),
        parseInt(h.slice(4, 6), 16),
      ] as [number, number, number];
    };

    const size = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * DPR;
      cv.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = Math.min(64, Math.round((W * H) / 16000));
      pts = [];
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
        });
      }
    };

    const frame = () => {
      const RGB = hexRgb(accent());
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 130) {
          p.x += ((p.x - mouse.x) / dm) * 0.6;
          p.y += ((p.y - mouse.y) / dm) * 0.6;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, 6.283);
        ctx.fillStyle = `rgba(${RGB[0]},${RGB[1]},${RGB[2]},.7)`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 118) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${RGB[0]},${RGB[1]},${RGB[2]},${0.16 * (1 - d / 118)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: MouseEvent) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    size();
    frame();
    window.addEventListener("resize", size);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas id="constellation" ref={ref} aria-hidden="true" />;
}
