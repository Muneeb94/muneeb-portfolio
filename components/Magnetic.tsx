"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
};

/** An anchor that gently pulls toward the cursor on fine-pointer devices. */
export default function Magnetic({ href, className, children, style, target, rel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const fine = window.matchMedia("(pointer:fine)").matches;
    if (reduce || !fine) return;

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${
        (e.clientY - r.top - r.height / 2) * 0.35
      }px)`;
    };
    const leave = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <a ref={ref} href={href} className={className} style={style} target={target} rel={rel}>
      {children}
    </a>
  );
}
