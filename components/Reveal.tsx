"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  id?: string;
};

/** Adds the `in` class when the element scrolls into view (with chip stagger). */
export default function Reveal({ className = "", children, style, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.add("in");
      el.querySelectorAll<HTMLElement>(".chip").forEach((c, i) => {
        c.style.transitionDelay = `${i * 45}ms`;
      });
    };

    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
