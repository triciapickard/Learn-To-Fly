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
        <linearGradient id="hero-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#475569" />
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
        {/* propeller disc and spinner */}
        <ellipse cx="-3" cy="38" rx="3" ry="28" fill="#cbd5e1" opacity="0.45" />
        <path d="M6 31 C-2 32 -6 36 -6 38 C-6 40 -2 44 6 45Z" fill="#ef4444" />
        {/* fixed gear with wheel fairings */}
        <path d="M24 54 L24 66 M92 56 L96 68" stroke="#94a3b8" strokeWidth="3" />
        <circle cx="24" cy="68" r="6" fill="#1e293b" />
        <circle cx="96" cy="70" r="7" fill="#1e293b" />
        <path
          d="M12 66 C12 61 20 60 28 61 C34 62 38 64 38 67 C38 70 30 71 22 71 C16 71 12 69 12 66Z"
          fill="#f8fafc"
        />
        <path
          d="M83 68 C83 63 92 61 100 62 C107 63 111 66 111 69 C111 72 102 73 94 73 C87 73 83 71 83 68Z"
          fill="#f8fafc"
        />
        {/* horizontal stabiliser */}
        <path d="M192 33 L238 30 C242 30 242 36 238 36 L196 38Z" fill="#e2e8f0" />
        {/* fuselage: cowling, cabin and tailcone */}
        <path
          d="M6 30 C8 26 14 25 22 25 L52 24 L76 8 L124 8 L152 22 L224 29 C230 30 232 36 228 38 L150 50 C120 57 60 59 28 57 C14 56 6 50 6 44Z"
          fill="#f8fafc"
        />
        {/* vertical fin with swept leading edge and rudder */}
        <path d="M168 26 L210 -8 L228 -8 L230 31Z" fill="#f8fafc" />
        <path d="M220 -8 L221 31" stroke="#cbd5e1" strokeWidth="1.5" />
        <circle cx="219" cy="-9" r="2.5" fill="#ef4444" />
        {/* cowling seam */}
        <path d="M50 25 L48 56" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* windshield, door and rear windows, following the roofline */}
        <path d="M56 25 L76 12 L78 12 L78 26Z" fill="url(#hero-glass)" />
        <path d="M82 12 L106 12 L106 27 L82 27Z" fill="url(#hero-glass)" />
        <path d="M110 12 L122 12 L140 24 L110 26Z" fill="url(#hero-glass)" />
        {/* cheat line */}
        <path d="M8 44 C60 48 140 44 228 34" stroke="#1d4ed8" strokeWidth="4" fill="none" />
        {/* high wing (airfoil section on the cabin roof) and strut */}
        <path d="M100 8 L88 55" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M66 6 C66 1 72 -1 82 -1 L140 2 C143 2 143 7 140 7 L72 10 C68 10 66 8 66 6Z"
          fill="#f8fafc"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
