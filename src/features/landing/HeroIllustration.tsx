/**
 * Side view of a Skyhawk climbing out over the livery stripes (landing redesign,
 * direction C). Decorative. The red paint is fixed and the thin stripe follows the theme; the airplane
 * stays white, like the real paint, in both themes.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 520"
      width={1440}
      height={520}
      aria-hidden
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* livery stripes sweeping across the page */}
      <path
        d="M-20 430 C300 430 700 360 1460 120 L1460 210 C700 430 300 490 -20 490 Z"
        className="fill-paint"
      />
      <path
        d="M-20 392 C320 392 720 330 1460 92 L1460 112 C720 352 320 412 -20 412 Z"
        className="fill-stripe"
      />
      {/* The airplane is drawn nose-left in local units, then mirrored so it climbs to the right. */}
      <g transform="translate(1000 -10) rotate(-12) scale(-2.4 2.4)">
        <defs>
          <clipPath id="ltf-hero-body">
            <path d="M14 29 C26 25 46 23 62 22 L82 7 L150 8 C176 13 222 21 258 26 C262 27 263 34 260 36 C222 41 168 52 132 62 L64 62 C44 62 28 60 22 57 C17 55 14 52 14 50 Z"></path>
          </clipPath>
          <clipPath id="ltf-hero-fin">
            <path d="M180 13.5 C204 12 214 6 222 -6 L235 -26.5 L251 -26.5 C252.5 -26.5 253 -25.5 253 -24.5 C255 -8 258 10 262 30 L249 27.5 C230 24 205 19 180 15.5 Z"></path>
          </clipPath>
        </defs>
        <path
          d="M120 60 C122 70 125 78 129 84"
          stroke="#8a93a6"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        ></path>
        <circle cx="130" cy="88" r="7" fill="#1b2436"></circle>
        <path
          d="M115 86 C115 80 122 77 131 77.5 C139 78 145 81.5 145 86 C145 88 142 88.5 137 88.5 L120 88.5 C117 88.5 115 87.6 115 86 Z"
          fill="#d5dae3"
        ></path>
        <path
          d="M14 29 C26 25 46 23 62 22 L82 7 L150 8 C176 13 222 21 258 26 C262 27 263 34 260 36 C222 41 168 52 132 62 L64 62 C44 62 28 60 22 57 C17 55 14 52 14 50 Z"
          fill="#ffffff"
          stroke="#c9ced8"
          strokeWidth="0.6"
        ></path>
        <g clipPath="url(#ltf-hero-body)">
          <path d="M0 54 L132 55 C170 46 222 36 270 31 L270 70 L0 70 Z" fill="#e6e9ef"></path>
          <path
            d="M0 43 C60 46 150 45 270 29 L270 34 C150 51 60 51 0 48 Z"
            className="fill-paint"
          ></path>
          <path
            d="M0 39.5 C60 42.5 150 41.5 270 25.5 L270 27 C150 43 60 44 0 41 Z"
            fill="#0c1a3a"
          ></path>
        </g>
        <path
          d="M62 22 L62 62 M16 36 C30 34 46 33 62 33 M152 9.5 L148 58 M206 17 L204 46"
          stroke="#d5dae3"
          strokeWidth="0.5"
          fill="none"
        ></path>
        <path d="M63 22 L80 8 L85 8 L70 23 Z" fill="#2b3a5c"></path>
        <path d="M74 24 L86 10 L106 10 L106 27 C96 27 84 26 74 24 Z" fill="#2b3a5c"></path>
        <path d="M111 10 L134 10 C140 14 145 18 148 23 L111 27 Z" fill="#2b3a5c"></path>
        <path
          d="M90 10 L95 10 L82 25 L78 24.5 Z M118 10 L122 10 L113 26.5 L111 26.5 L111 22 Z"
          fill="#4a5d86"
        ></path>
        <path
          d="M66 26 L81 9 L108 9 L108 57 L68 57 Z"
          stroke="#b8bfcc"
          strokeWidth="0.6"
          fill="none"
        ></path>
        <path
          d="M100 34 L105 34"
          stroke="#8a93a6"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        ></path>
        <path d="M113 58 L101 9" stroke="#c9ced8" strokeWidth="1.8" strokeLinecap="round"></path>
        <path
          d="M74 3.5 C74 -1.5 82 -4 94 -4 L148 -0.8 C150.5 -0.6 150.5 2.6 148 3 L96 8.5 C84 9 74 7.5 74 3.5 Z"
          fill="#ffffff"
          stroke="#c9ced8"
          strokeWidth="0.6"
        ></path>
        <path d="M128 0.5 L128 4.6" stroke="#c9ced8" strokeWidth="0.5"></path>
        <path d="M156 9 L162 -1" stroke="#5b6478" strokeWidth="1" strokeLinecap="round"></path>
        <path
          d="M180 13.5 C204 12 214 6 222 -6 L235 -26.5 L251 -26.5 C252.5 -26.5 253 -25.5 253 -24.5 C255 -8 258 10 262 30 L249 27.5 C230 24 205 19 180 15.5 Z"
          fill="#ffffff"
        ></path>
        <path
          d="M180 13.5 C204 12 214 6 222 -6 L235 -26.5 L251 -26.5 C252.5 -26.5 253 -25.5 253 -24.5 C255 -8 258 10 262 30"
          stroke="#c9ced8"
          strokeWidth="0.6"
          fill="none"
        ></path>
        <g clipPath="url(#ltf-hero-fin)">
          <path
            d="M196 30 C214 10 236 -4 270 -12 L270 -4 C238 4 216 18 206 30 Z"
            className="fill-paint"
          ></path>
          <path
            d="M208 30 C220 19 240 8 270 2 L270 4.5 C242 10 224 21 213 30 Z"
            fill="#0c1a3a"
          ></path>
        </g>
        <path
          d="M246 -26.5 L249.5 27.5 M251 21 L259.5 21"
          stroke="#c9ced8"
          strokeWidth="0.5"
          fill="none"
        ></path>
        <ellipse cx="241" cy="-27" rx="3" ry="1.6" fill="#d0262d"></ellipse>
        <path
          d="M212 31 C212 28.5 218 27.5 228 27.5 L262 28.4 C264.5 28.6 264.5 31.6 262 31.8 L228 33.5 C218 33.5 212 33 212 31 Z"
          fill="#f3f5f8"
          stroke="#c9ced8"
          strokeWidth="0.6"
        ></path>
        <path d="M248 28.2 L248 32.6 M34 24.5 L46 23.6" stroke="#c9ced8" strokeWidth="0.5"></path>
        <path
          d="M15.5 33 C17.5 32.2 19.5 32.5 20.5 34 L20.5 36.5 C18.5 37 17 36.8 15.5 36 Z M17 53 C21 55 27 56 31 56 L31 58 C26 58 20 57 16 55 Z"
          fill="#1b2436"
        ></path>
        <path d="M52 61 L56 65" stroke="#5b6478" strokeWidth="1.6" strokeLinecap="round"></path>
        <ellipse cx="12" cy="40" rx="2.5" ry="34" fill="#8a93a6" fillOpacity="0.18"></ellipse>
        <path
          d="M12.5 30 C14 22 14 12 13 6.5 C12 6 11 6 10.6 6.8 C10 14 10.4 23 11.5 30 Z M12.5 50 C14 58 14 68 13 73.5 C12 74 11 74 10.6 73.2 C10 66 10.4 57 11.5 50 Z"
          fill="#2e3546"
        ></path>
        <path
          d="M10.6 6.8 C11 6 12.5 6 13 6.5 L13.3 10 L10.4 10 Z M10.4 70 L13.3 70 L13 73.5 C12.5 74 11 74 10.6 73.2 Z"
          fill="#e8b931"
        ></path>
        <path
          d="M0 40 C1 33 7 29.5 14 29.5 L14 50.5 C7 50.5 1 47 0 40 Z"
          className="fill-paint"
        ></path>
        <path
          d="M3 37 C5 34 8 32 11 31.5"
          stroke="#ffffff"
          strokeWidth="0.8"
          strokeOpacity="0.6"
          fill="none"
        ></path>
        <path
          d="M34 60 L33 82 M33 70 L36 73 L33 76"
          stroke="#8a93a6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        ></path>
        <circle cx="33" cy="86" r="6" fill="#1b2436"></circle>
        <circle cx="33" cy="86" r="2" fill="#8a93a6"></circle>
        <path
          d="M22 84 C22 79 28 77 35 77.5 C41 78 44 81 44 84.5 C44 86 41 86.5 37 86.5 L26 86.5 C23.5 86.5 22 85.5 22 84 Z"
          fill="#ffffff"
          stroke="#c9ced8"
          strokeWidth="0.6"
        ></path>
        <path
          d="M118 60 C120 70 122 78 124 84"
          stroke="#8a93a6"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        ></path>
        <circle cx="125" cy="88" r="7" fill="#1b2436"></circle>
        <circle cx="125" cy="88" r="2.2" fill="#8a93a6"></circle>
        <path
          d="M110 86 C110 80 117 77 126 77.5 C134 78 140 81.5 140 86 C140 88 137 88.5 132 88.5 L115 88.5 C112 88.5 110 87.6 110 86 Z"
          fill="#ffffff"
          stroke="#c9ced8"
          strokeWidth="0.6"
        ></path>
        <g transform="scale(-1 1)">
          <text
            x="-160"
            y="31"
            textAnchor="end"
            className="font-display"
            fontWeight="800"
            fontSize="8"
            fill="#0c1a3a"
            letterSpacing="0.3"
          >
            LTF-172
          </text>
        </g>
      </g>
    </svg>
  );
}
