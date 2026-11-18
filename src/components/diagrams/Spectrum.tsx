import React from 'react';

export const Spectrum: React.FC = () => (
  <figure className="my-2">
    <svg viewBox="0 0 640 170" className="w-full h-auto" role="img" aria-label="Diagram of light. From left to right: light we cannot see, then blue, green and red light that we can see, then infrared light that we cannot see. Satellite bands are marked on the blue, green, red and infrared parts.">
      <defs>
        <linearGradient id="vis" x1="0" x2="1">
          <stop offset="0" stopColor="#4f46e5" />
          <stop offset="0.25" stopColor="#2563eb" />
          <stop offset="0.5" stopColor="#22c55e" />
          <stop offset="0.75" stopColor="#facc15" />
          <stop offset="1" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      <rect x="20" y="50" width="120" height="40" fill="#f3eee6" stroke="#cbc2b3" />
      <rect x="140" y="50" width="280" height="40" fill="url(#vis)" />
      <rect x="420" y="50" width="200" height="40" fill="#f3eee6" stroke="#cbc2b3" />
      <text x="80" y="115" textAnchor="middle" fontSize="13" fill="#5a6678" fontFamily="system-ui, sans-serif">We cannot see</text>
      <text x="280" y="115" textAnchor="middle" fontSize="13" fontWeight="600" fill="#13233f" fontFamily="system-ui, sans-serif">Visible light</text>
      <text x="520" y="115" textAnchor="middle" fontSize="13" fill="#5a6678" fontFamily="system-ui, sans-serif">Infrared, we cannot see</text>
      {[{ x: 190, t: 'Blue band' }, { x: 280, t: 'Green band' }, { x: 370, t: 'Red band' }, { x: 470, t: 'Near-infrared band' }].map((b) => (
        <g key={b.t}>
          <line x1={b.x} x2={b.x} y1="38" y2="50" stroke="#8a5300" strokeWidth="3" />
          <text x={b.x} y="30" textAnchor="middle" fontSize="12" fill="#8a5300" fontFamily="system-ui, sans-serif">{b.t}</text>
        </g>
      ))}
    </svg>
    <figcaption className="text-xs text-ink-3 mt-1">Illustration only. A satellite measures each marked band separately. Positions are approximate.</figcaption>
  </figure>
);
