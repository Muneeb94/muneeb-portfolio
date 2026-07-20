import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section className="block" id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">02 — Toolkit</span>
          <h2>The stack I reach for.</h2>
        </Reveal>
        <div className="skill-cols">
          {skillGroups.map((g) => (
            <Reveal className="skill-card" key={g.slug}>
              <div className="idx">/{g.slug}</div>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
