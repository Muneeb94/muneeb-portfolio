import Magnetic from "./Magnetic";
import { WhatsAppIcon, PhoneIcon, LinkedInIcon, MailIcon } from "./Icons";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="glowball" aria-hidden="true" />
      <div className="wrap">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          06 — Contact
        </span>
        <h2>
          Let&apos;s build something
          <br />
          worth shipping.
        </h2>
        <p className="lede">
          Open to Android &amp; frontend roles and collaborations. The fastest way to reach me is
          email — I usually reply within a day.
        </p>
        <Magnetic className="btn primary magnetic" href={`mailto:${profile.email}`}>
          {profile.email} →
        </Magnetic>
        <div className="contact-methods">
          <a href={profile.whatsapp} target="_blank" rel="noopener">
            <WhatsAppIcon />
            {profile.phones[0]}
          </a>
          <a href={`tel:${profile.phoneTel[1]}`}>
            <PhoneIcon />
            {profile.phones[1]}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener">
            <LinkedInIcon />
            LinkedIn ↗
          </a>
          <a href={`mailto:${profile.email}`}>
            <MailIcon />
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
