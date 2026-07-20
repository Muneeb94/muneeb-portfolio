import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="block" id="experience">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">03 — Experience</span>
          <h2>Where I&apos;ve shipped.</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((x, i) => (
            <Reveal className="role" key={`${x.company}-${i}`}>
              <div className="when">
                {x.from} — {x.current ? <span className="now">{x.to}</span> : x.to}
              </div>
              <div>
                <h3>{x.role}</h3>
                <div className="co">{x.company}</div>
                <div className="meta">{x.meta}</div>
                <div className="projs">
                  {x.projects.map((p) => (
                    <div className="proj-line" key={p.name}>
                      <div className="pt">
                        {p.name}
                        {p.kind && <span>{p.kind}</span>}
                      </div>
                      <ul>
                        {p.points.map((pt, k) => (
                          <li key={k}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
