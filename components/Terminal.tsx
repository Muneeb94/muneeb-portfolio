"use client";

import { useEffect, useRef } from "react";
import { terminal } from "@/lib/data";

const PROMPT =
  '<span class="tp"><span class="g">muneeb</span><span class="d">@</span>' +
  '<span class="b">karachi</span><span class="d">:~/portfolio$</span></span> ';

/** Animated console that types out commands, then leaves a blinking prompt. */
export default function Terminal() {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const term = bodyRef.current;
    if (!term) return;
    term.innerHTML = "";

    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const mkline = () => {
      const d = document.createElement("div");
      d.className = "tl";
      term.appendChild(d);
      return d;
    };

    if (reduce) {
      terminal.forEach((s) => {
        const el = mkline();
        el.innerHTML = s.k === "cmd" ? PROMPT + `<span class="cmd">${s.t}</span>` : s.h;
      });
      const fr = mkline();
      fr.innerHTML = PROMPT + '<span class="cur"></span>';
      return;
    }

    const run = (i: number) => {
      if (i >= terminal.length) {
        const f = mkline();
        f.innerHTML = PROMPT + '<span class="cur"></span>';
        return;
      }
      const s = terminal[i];
      if (s.k === "cmd") {
        const el = mkline();
        el.innerHTML = PROMPT + '<span class="cmd"></span><span class="cur"></span>';
        const span = el.querySelector<HTMLElement>(".cmd")!;
        const cur = el.querySelector<HTMLElement>(".cur")!;
        let j = 0;
        const type = () => {
          span.textContent = s.t.slice(0, j);
          j++;
          term.scrollTop = term.scrollHeight;
          if (j <= s.t.length) {
            timers.push(setTimeout(type, 52));
          } else {
            cur.remove();
            timers.push(setTimeout(() => run(i + 1), 300));
          }
        };
        type();
      } else {
        const el = mkline();
        el.innerHTML = s.h;
        term.scrollTop = term.scrollHeight;
        timers.push(setTimeout(() => run(i + 1), 150));
      }
    };

    timers.push(setTimeout(() => run(0), 950));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal">
      <div className="term-bar">
        <span className="tdot r" />
        <span className="tdot y" />
        <span className="tdot g" />
        <span className="term-title">muneeb@karachi: ~/portfolio — zsh</span>
      </div>
      <div className="term-body" id="term" ref={bodyRef} aria-hidden="true" />
    </div>
  );
}
