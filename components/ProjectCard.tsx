"use client";

import { useEffect, useRef } from "react";
import type { Work } from "@/lib/data";

/** A work card that reveals on scroll, tilts in 3D and shows a cursor spotlight. */
export default function ProjectCard({ tag, title, desc, stack, web, playStore }: Work) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

    // Reveal on scroll.
    if (reduce || !("IntersectionObserver" in window)) {
      el.classList.add("in");
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              el.classList.add("in");
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      io.observe(el);

      // 3D tilt + spotlight (fine pointers only).
      const fine = window.matchMedia("(pointer:fine)").matches;
      let move: ((e: MouseEvent) => void) | undefined;
      let leave: (() => void) | undefined;
      if (fine) {
        const spot = el.querySelector<HTMLElement>(".spot");
        move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          el.style.transform = `perspective(800px) rotateX(${(0.5 - py) * 6}deg) rotateY(${
            (px - 0.5) * 7
          }deg) translateY(-4px)`;
          if (spot) {
            spot.style.setProperty("--mx", `${px * 100}%`);
            spot.style.setProperty("--my", `${py * 100}%`);
          }
        };
        leave = () => {
          el.style.transform = "";
        };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
      }

      return () => {
        io.disconnect();
        if (move) el.removeEventListener("mousemove", move);
        if (leave) el.removeEventListener("mouseleave", leave);
      };
    }
  }, []);

  return (
    <article className="card tilt reveal" ref={ref}>
      <div className="spot" aria-hidden="true" />
      <div className="tag">{tag}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="stack">
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      {(playStore || web) && (
        <div className="card-links">
          {playStore && (
            <a className="card-link" href={playStore} target="_blank" rel="noopener" aria-label={`${title} on Google Play`}>
              <GooglePlayGlyph />
              Play Store
            </a>
          )}
          {web && (
            <a className="card-link" href={web} target="_blank" rel="noopener" aria-label={`${title} website`}>
              <GlobeGlyph />
              Website
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function GooglePlayGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.2c-.3.3-.5.7-.5 1.2v17.2c0 .5.2.9.5 1.2l9.1-9.8L3.6 2.2Zm11 7.2 2.9-1.6-9.5-5.5 6.6 7.1Zm0 5.2-6.6 7.1 9.5-5.5-2.9-1.6Zm5.2-1.1 2.2-1.2c.7-.4.7-1.4 0-1.8l-2.2-1.2-3.2 1.7 3.2 1.7Z" />
    </svg>
  );
}

function GlobeGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}
