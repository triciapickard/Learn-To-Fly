/** Renders "V_FE (10°)" as V with a subscript FE, then " (10°)". Other labels pass through. */
export function VSpeedLabel({ label }: { label: string }) {
  const match = /^V_(\S+)(.*)$/.exec(label);
  if (!match) return <>{label}</>;
  return (
    <>
      V<sub>{match[1]}</sub>
      {match[2]}
    </>
  );
}
