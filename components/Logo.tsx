/** Wordmark + monogram badge for Syed Muneeb Ur Rehman. Theme-aware via CSS tokens. */
export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Syed Muneeb Ur Rehman — home">
      <svg className="logo-mark" viewBox="0 0 40 40" width={34} height={34} aria-hidden="true">
        <rect className="logo-badge" x={1.5} y={1.5} width={37} height={37} rx={11} />
        {/* S + M monogram */}
        <path className="logo-stroke" d="M16 16 C16 13.5 8 13 8 16.5 C8 19.5 16 20.5 16 23.5 C16 27 8 26.5 8 24" />
        <path className="logo-stroke" d="M20 27 V13.5 L26 20.5 L32 13.5 V27" />
      </svg>
      <span className="logo-word">
        <span className="s">Syed</span> <span className="a">Muneeb</span>
      </span>
    </a>
  );
}
