import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="block" id="education">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">05 — Education</span>
          <h2>Academic background.</h2>
        </Reveal>
        <Reveal className="edu-grid">
          {education.map((e) => (
            <div className="edu" key={e.degree}>
              <div>
                <div className="d">{e.degree}</div>
                <div className="s">{e.school}</div>
              </div>
              <div className="y">{e.year}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
