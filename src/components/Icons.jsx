export function ServiceIcon({ name }) {
  return <img className="card__icon" src={`/images/icon-${name}.png`} alt="" />;
}

export function Logo({ variant = 'hero' }) {
  const file = variant === 'footer' ? 'logo-footer.png' : 'logo.png';
  return <img className={`logo logo--${variant}`} src={`/images/${file}`} alt="Enterprice" />;
}

export function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.2" stroke="#FFDE1F" strokeWidth="1.8" />
      <path d="M13.8 13.8L18 18" stroke="#FFDE1F" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M5 8h18M5 14h18M5 20h18" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 4.5l5 5 5-5" stroke="#26292d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <circle cx="15" cy="15" r="14" stroke="#FFDE1F" strokeWidth="1.6" />
      <path d="M12 9.5l9 5.5-9 5.5v-11z" fill="#FFDE1F" />
    </svg>
  );
}

export function SocialIcon({ kind }) {
  const paths = {
    facebook: 'M13 8h2V5h-2.5C10.6 5 10 6.3 10 7.8V9H8v3h2v6h3v-6h2l.5-3H13V8z',
    instagram: 'M8 5h8a3 3 0 013 3v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3zm4 3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z',
    twitter:
      'M19 7.5c-.5.2-1 .4-1.6.5.6-.3 1-.9 1.2-1.6-.5.3-1.1.6-1.8.7a2.8 2.8 0 00-4.8 2.6A8 8 0 016 6.6a2.8 2.8 0 00.9 3.7c-.4 0-.9-.1-1.3-.4 0 1.4 1 2.5 2.2 2.8-.4.1-.8.1-1.2 0 .3 1.1 1.4 1.9 2.6 1.9A5.7 5.7 0 015 16c1.2.8 2.7 1.2 4.3 1.2 5.2 0 8-4.3 8-8v-.4c.6-.4 1.1-.9 1.4-1.5z',
    linkedin:
      'M7 10v7H4.5v-7H7zm-1.25-3.5a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zM18 17h-2.5v-3.8c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7V17h-2.5v-7h2.5v1c.3-.5.9-1.2 2.1-1.2 1.5 0 3.1 1 3.1 3.6V17z',
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[kind]} fill="#26292d" />
    </svg>
  );
}
