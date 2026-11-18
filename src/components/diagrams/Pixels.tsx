import React, { useMemo } from 'react';

// A made-up scene (a road, a building, a field) drawn at two pixel sizes. This is an illustration, not real satellite data.
function colourAt(x: number, y: number): string {
  if (Math.abs(y - (0.25 + 0.55 * x)) < 0.035) return '#9a9a90'; // road
  if (x > 0.62 && x < 0.78 && y > 0.12 && y < 0.3) return '#b5654a'; // building
  if (x < 0.4 && y > 0.6) return '#c8a27a'; // bare field
  return '#5f8f45'; // plants
}

const Grid: React.FC<{ n: number; label: string }> = ({ n, label }) => {
  const cells = useMemo(() => {
    const out: { x: number; y: number; c: string }[] = [];
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) out.push({ x: c, y: r, c: colourAt((c + 0.5) / n, (r + 0.5) / n) });
    return out;
  }, [n]);
  const s = 150 / n;
  return (
    <div className="text-center">
      <svg viewBox="0 0 150 150" className="w-36 sm:w-44 h-auto mx-auto border border-line-strong" role="img" aria-label={label}>
        {cells.map((cell) => (
          <rect key={`${cell.x}-${cell.y}`} x={cell.x * s} y={cell.y * s} width={s + 0.3} height={s + 0.3} fill={cell.c} />
        ))}
      </svg>
      <p className="text-xs text-ink-2 mt-1.5">{label}</p>
    </div>
  );
};

export const Pixels: React.FC = () => (
  <figure className="my-2">
    <div className="flex flex-wrap justify-center gap-6">
      <Grid n={30} label="Small pixels: more detail" />
      <Grid n={6} label="Large pixels: less detail" />
    </div>
    <figcaption className="text-xs text-ink-3 mt-2 text-center">Illustration only: the same made-up scene at two pixel sizes. This is not real satellite data.</figcaption>
  </figure>
);
