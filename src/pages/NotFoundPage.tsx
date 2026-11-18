import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../lib/usePageTitle';

export const NotFoundPage: React.FC = () => {
  usePageTitle('Page not found');
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
      <h1 className="text-3xl font-extrabold text-ink">We could not find that page</h1>
      <p className="text-ink-3">The link may be wrong or the page may have moved.</p>
      <Link to="/" className="inline-block px-5 py-2.5 bg-amber hover:bg-amber-hover text-ink font-semibold rounded-lg">Go to the start</Link>
    </div>
  );
};
