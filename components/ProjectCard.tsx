"use client";

import { useEffect, useRef } from "react";
import type { Work } from "@/lib/data";

/** A work card that reveals on scroll, tilts in 3D and shows a cursor spotlight. */
export default function ProjectCard({ tag, title, desc, stack }: Work) {
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
    </article>
  );
}
