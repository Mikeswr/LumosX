import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className="border-t border-line mt-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-xs text-ink-3 space-y-3">
      <p className="text-ink-2 font-semibold">LumosX</p>
      <p className="max-w-xl leading-relaxed">
        Space science explained through Ghana. Facts are checked against the sources listed on each page. Found a mistake, or something confusing? <Link to="/feedback" className="text-brand hover:text-brand-dark underline">Tell us</Link>. Your progress and notes are saved on this device only.
      </p>
      <p className="max-w-xl leading-relaxed">Satellite pictures: Digital Earth Africa, contains modified Copernicus Sentinel data.</p>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-1">
        <Link to="/learn" className="hover:text-brand">Learn</Link>
        <Link to="/explore/find-your-town" className="hover:text-brand">Find Your Town</Link>
        <Link to="/ghana-in-space" className="hover:text-brand">Ghana in Space</Link>
        <Link to="/feedback" className="hover:text-brand">Feedback</Link>
      </nav>
    </div>
  </footer>
);
