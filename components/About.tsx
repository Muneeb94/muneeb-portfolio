import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">01 — About</span>
          <h2>An engineer who lives on both sides of the API.</h2>
        </Reveal>
        <Reveal className="about-grid">
          <div>
            <p>
              I&apos;m a Software Engineer with <b>7+ years</b> designing, building and maintaining
              frontend web applications and Android mobile apps. On mobile I work in{" "}
              <b>Kotlin &amp; Java</b> with MVVM, Coroutines and Material 3; on web I work in{" "}
              <b>React, Next.js and Redux</b> with a deep CSS foundation.
            </p>
            <p>
              I care about performance, clean architecture and shipping production-ready software
              within tight deadlines — collaborating with designers, QA and backend teams in{" "}
              <b>Agile/Scrum</b> workflows. Lately I lean on AI-assisted tooling like{" "}
              <b>Claude Code</b> and Cursor to move faster without cutting quality.
            </p>
          </div>
          <div className="facts">
            <div className="fact">
              <div className="k">Based in</div>
              <div className="v">{profile.location}</div>
            </div>
            <div className="fact">
              <div className="k">Focus</div>
              <div className="v">Android &amp; Frontend Engineering</div>
            </div>
            <div className="fact">
              <div className="k">Email</div>
              <div className="v">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            <div className="fact">
              <div className="k">Phone</div>
              <div className="v">
                <a href={`tel:${profile.phoneTel[0]}`}>{profile.phones[0]}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
