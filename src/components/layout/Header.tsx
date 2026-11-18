import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Start', end: true },
  { to: '/learn', label: 'Learn', end: false },
  { to: '/explore', label: 'Explore', end: false },
  { to: '/ghana-in-space', label: 'Ghana in Space', end: false },
];

export const Header: React.FC = () => (
  <header className="sticky top-0 z-40 bg-page/95 backdrop-blur border-b border-line">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6">
      <Link to="/" aria-label="LumosX home" className="text-xl font-extrabold tracking-tight text-ink self-start">
        Lumos<span className="text-amber">X</span>
      </Link>
      <nav aria-label="Main" className="grid grid-cols-4 sm:flex gap-1 text-[13px] sm:text-sm">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `px-2 sm:px-3 py-2 min-h-11 inline-flex items-center justify-center text-center leading-tight rounded-lg font-semibold transition-colors ${isActive ? 'bg-amber text-ink' : 'text-ink-2 hover:text-ink hover:bg-surface-2'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);
