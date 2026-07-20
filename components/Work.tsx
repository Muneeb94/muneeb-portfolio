import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import ProjectCard from "./ProjectCard";
import { work, profile } from "@/lib/data";

export default function Work() {
  return (
    <section className="block" id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">04 — Selected work</span>
          <h2>Products I&apos;m proud of.</h2>
          <p>A cross-section of mobile and web builds — the hard parts, not just the happy path.</p>
        </Reveal>
        <div className="work-grid">
          {work.map((w) => (
            <ProjectCard key={w.title} {...w} />
          ))}
          <Reveal
            className="card"
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              background: "var(--bg-3)",
            }}
          >
            <div className="tag">Let&apos;s build</div>
            <h3>Have a project in mind?</h3>
            <p>I&apos;m open to Android, React and cross-platform frontend work.</p>
            <Magnetic
              className="btn primary magnetic"
              href={profile.whatsapp}
              target="_blank"
              rel="noopener"
              style={{ marginTop: 8 }}
            >
              Start a conversation →
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
