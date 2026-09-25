/** Illustration of a high-wing trainer over hills and water. Decorative. */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 400"
      width={640}
      height={400}
      aria-hidden
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#93c5fd" />
        </linearGradient>
        <linearGradient id="hero-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#hero-sky)" />
      <circle cx="520" cy="80" r="36" fill="#fde68a" opacity="0.9" />
      <path
        d="M0 270 L90 215 L170 250 L250 190 L340 245 L420 205 L520 250 L640 215 V300 H0Z"
        fill="#475569"
        opacity="0.55"
      />
      <path
        d="M0 290 L120 250 L220 280 L330 240 L460 285 L560 255 L640 275 V320 H0Z"
        fill="#334155"
      />
      <rect y="305" width="640" height="95" fill="url(#hero-water)" />
      <path
        d="M40 330h120M220 350h160M420 335h140M100 370h90M480 372h110"
        stroke="#bfdbfe"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <g transform="translate(250 120) rotate(-6)">
        {/* high wing */}
        <rect x="-20" y="0" width="200" height="12" rx="6" fill="#f8fafc" />
        <path d="M-20 4 h10 v4 h-10z" fill="#ef4444" />
        {/* strut */}
        <path d="M60 12 L80 44" stroke="#e2e8f0" strokeWidth="4" />
        {/* fuselage */}
        <path
          d="M20 14 C40 10 120 12 150 22 L230 34 C236 35 238 40 232 42 L150 52 C110 58 50 58 30 50 C14 44 10 22 20 14Z"
          fill="#f8fafc"
        />
        <path d="M34 22 L82 20 L86 36 L36 38Z" fill="#1e3a8a" opacity="0.85" />
        <path d="M30 44 C80 50 150 46 232 40" stroke="#1d4ed8" strokeWidth="4" fill="none" />
        {/* tail */}
        <path d="M200 30 L226 -6 L240 -6 L234 38Z" fill="#f8fafc" />
        <path d="M205 40 L250 36 L250 44 L208 48Z" fill="#e2e8f0" />
        {/* prop and wheels */}
        <rect x="6" y="14" width="6" height="36" rx="3" fill="#94a3b8" opacity="0.7" />
        <circle cx="30" cy="66" r="7" fill="#1e293b" />
        <circle cx="96" cy="68" r="8" fill="#1e293b" />
        <path d="M30 50 L30 62 M96 56 L96 62" stroke="#94a3b8" strokeWidth="3" />
      </g>
    </svg>
  );
}
