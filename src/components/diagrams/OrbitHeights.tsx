import React from 'react';

const ROWS = [
  { y: 40, label: 'About 36,000 km', note: 'Weather and TV satellites' },
  { y: 95, label: 'About 20,000 km', note: 'Navigation satellites, such as GPS' },
  { y: 150, label: '786 km', note: 'Sentinel-2' },
  { y: 188, label: '705 km', note: 'Landsat 8 and 9' },
  { y: 226, label: 'About 400 km', note: 'Space station, where GhanaSat-1 was released' },
];

export const OrbitHeights: React.FC = () => (
  <figure className="my-2">
    <svg viewBox="0 0 640 300" className="w-full h-auto" role="img" aria-label="Diagram of satellite heights above the Earth. From highest to lowest: weather and TV satellites about 36,000 kilometres, navigation satellites about 20,000 kilometres, Sentinel-2 at 786 kilometres, Landsat at 705 kilometres, and the space station at about 400 kilometres.">
      <path d="M0 290 Q320 255 640 290 L640 300 L0 300 Z" fill="#1e5a8a" />
      {ROWS.map((r) => (
        <g key={r.label}>
          <line x1="40" x2="600" y1={r.y} y2={r.y} stroke="#cbc2b3" strokeDasharray="4 5" />
          <circle cx="90" cy={r.y} r="6" fill="#0b6e8a" />
          <text x="112" y={r.y + 5} fontSize="14" fontWeight="600" fill="#13233f" fontFamily="system-ui, sans-serif">{r.label}</text>
          <text x="300" y={r.y + 5} fontSize="14" fill="#5a6678" fontFamily="system-ui, sans-serif">{r.note}</text>
        </g>
      ))}
      <text x="620" y="280" textAnchor="end" fontSize="12" fill="#ffffff" fontFamily="system-ui, sans-serif">Earth</text>
    </svg>
    <figcaption className="text-xs text-ink-3 mt-1">Illustration only. The spaces between the heights are not to scale.</figcaption>
  </figure>
);
