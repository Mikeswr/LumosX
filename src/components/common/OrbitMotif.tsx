import React from 'react';

// A quiet orbit drawing for the home page. Decorative only.
export const OrbitMotif: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} aria-hidden="true" focusable="false">
    <g fill="none" stroke="#cbc2b3" strokeWidth="1.5">
      <ellipse cx="200" cy="150" rx="185" ry="62" transform="rotate(-18 200 150)" strokeDasharray="3 6" />
      <ellipse cx="200" cy="150" rx="130" ry="44" transform="rotate(-18 200 150)" />
    </g>
    <circle cx="316" cy="108" r="6" fill="#f5a524" />
    <g fill="#cbc2b3">
      <circle cx="40" cy="40" r="2" /><circle cx="360" cy="260" r="2" /><circle cx="110" cy="260" r="1.5" /><circle cx="350" cy="30" r="1.5" />
    </g>
  </svg>
);
