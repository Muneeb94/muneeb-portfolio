"use client";

import { useEffect, useState } from "react";
import { roles } from "@/lib/data";

/** Cycles through the role strings with a typing + deleting effect. */
export default function Typewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (reduce) {
      setText("Android & Frontend Developer");
      return;
    }

    let ri = 0;
    let ci = 0;
    let del = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = roles[ri];
      setText(word.slice(0, ci));
      if (!del) {
        ci++;
        if (ci > word.length) {
          del = true;
          timer = setTimeout(tick, 1400);
          return;
        }
      } else {
        ci--;
        if (ci === 0) {
          del = false;
          ri = (ri + 1) % roles.length;
        }
      }
      timer = setTimeout(tick, del ? 45 : 85);
    };
    tick();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <span id="typed">{text}</span>
      <span className="caret" aria-hidden="true" />
    </>
  );
}
