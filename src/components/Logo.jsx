// Marca gráfica da RA Movimento: moldura arredondada com uma linha ascendente.
export function LogoMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="2.6" />
      <path
        d="M8 21l5-6 4 4 7-9"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ href = '#inicio', onClick }) {
  return (
    <a className="logo" href={href} onClick={onClick} aria-label="RA Movimento — início">
      <LogoMark className="logo__mark" />
      <span className="logo__text">
        <span className="logo__name">RA Movimento</span>
        <span className="logo__tag">Consultoria online</span>
      </span>
    </a>
  );
}
