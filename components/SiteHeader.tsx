"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV = [
  { id: "about", label: "about", keepMobile: false },
  { id: "skills", label: "skills", keepMobile: false },
  { id: "experience", label: "experience", keepMobile: false },
  { id: "work", label: "work", keepMobile: false },
  { id: "contact", label: "contact", keepMobile: true },
];

export default function SiteHeader() {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Theme toggle — mirrors the data-theme attribute the CSS reacts to.
  const toggleTheme = () => {
    const root = document.documentElement;
    let cur = root.getAttribute("data-theme");
    if (!cur) {
      cur = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    }
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("smr-theme", next);
    } catch {
      /* ignore */
    }
  };

  // Restore saved theme on mount.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("smr-theme");
      if (saved) document.documentElement.setAttribute("data-theme", saved);
    } catch {
      /* ignore */
    }
  }, []);

  // Active-section highlighting.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header>
      <div className="wrap bar">
        <Logo />
        <nav className={`links${menuOpen ? " open" : ""}`} id="nav">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setMenuOpen(false)}
              className={[n.keepMobile ? "li" : "", active === n.id ? "active" : ""]
                .filter(Boolean)
                .join(" ") || undefined}
            >
              {n.label}
            </a>
          ))}
          <button
            className="theme-btn"
            type="button"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
          >
            Theme
          </button>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
