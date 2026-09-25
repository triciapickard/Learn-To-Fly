/**
 * The "Skyhawk Pilot (Sim)" course-complete badge (step 8.10): an original drawing of pilot
 * wings. Always shown with wording that it is not a real certificate.
 */
export function CourseBadge({ size = 180 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      role="img"
      aria-label="Skyhawk Pilot (Sim) badge: pilot wings around a Learn-To-Fly roundel"
    >
      <circle cx={120} cy={120} r={112} className="fill-gold/15 stroke-gold" strokeWidth={6} />
      <circle
        cx={120}
        cy={120}
        r={96}
        className="fill-none stroke-gold"
        strokeWidth={1.5}
        strokeDasharray="4 5"
      />
      {[-1, 1].map((side) => (
        <g key={side} transform={`translate(120 112) scale(${side} 1)`} className="fill-gold">
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M 22 ${-10 + i * 9} C ${48 + i * 4} ${-24 + i * 9} ${74 - i * 6} ${-20 + i * 10} ${92 - i * 12} ${-26 + i * 12} C ${76 - i * 10} ${-4 + i * 8} ${48} ${0 + i * 9} 22 ${4 + i * 9} Z`}
              opacity={1 - i * 0.12}
            />
          ))}
        </g>
      ))}
      <circle cx={120} cy={116} r={24} className="fill-surface stroke-gold" strokeWidth={4} />
      <path
        d="M 120 100 l 5 12 h -4 v 14 l 7 5 v 3 l -8 -3 l -8 3 v -3 l 7 -5 v -14 h -4 Z"
        className="fill-gold"
      />
      <text
        x={120}
        y={170}
        textAnchor="middle"
        className="fill-text text-[17px] font-bold tracking-wide"
      >
        SKYHAWK PILOT
      </text>
      <text x={120} y={192} textAnchor="middle" className="fill-muted text-[13px] font-semibold">
        (SIM) · LEARN-TO-FLY
      </text>
    </svg>
  );
}
