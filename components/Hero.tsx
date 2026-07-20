"use client";

import { useEffect, useRef } from "react";
import { profile, stats } from "@/lib/data";
import Constellation from "./Constellation";
import Typewriter from "./Typewriter";
import Terminal from "./Terminal";
import CountUp from "./CountUp";
import Magnetic from "./Magnetic";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Trigger the staggered intro animation after mount.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const id = requestAnimationFrame(() => el.classList.add("lifted"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <Constellation />
      <div className="grid-bg" aria-hidden="true" />
      <div className="glowball" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-left">
          <span className="eyebrow intro">Software Engineer — {profile.location}</span>
          <h1 className="name intro">
            <span className="shine">Syed Muneeb</span>
            <br />
            <span className="shine">Ur&nbsp;Rehman</span>
          </h1>
          <p className="roleline intro">
            <span className="arrow">&gt;</span> <Typewriter />
          </p>
          <p className="lede intro">
            I build fast, reliable products across <b>Android</b> <span className="amp">&amp;</span>{" "}
            <b>the web</b> — from Kotlin apps with live geofencing, biometric auth and on-device ML,
            to React interfaces that ship on deadline. Seven years turning UI/UX into production
            software.
          </p>
          <div className="cta-row intro">
            <Magnetic className="btn primary magnetic" href="#contact">
              Get in touch →
            </Magnetic>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a className="btn ghost" href={profile.resume} download="Syed-Muneeb-Ur-Rehman-Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-right intro-right">
          <Terminal />
        </div>

        <div className="stats intro">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="n">
                <CountUp to={s.to} />
                {s.suffix && <span>{s.suffix}</span>}
              </div>
              <div className="l">{s.label}</div>
            </div>
          ))}
          <div className="stat">
            <div className="n">
              MS<span>·</span>CS
            </div>
            <div className="l">FAST-NUCES</div>
          </div>
        </div>
      </div>
    </section>
  );
}
