import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/common/ProgressBar';
import { usePageTitle } from '../lib/usePageTitle';

export const LearnPage: React.FC = () => {
  usePageTitle('Learn');
  const { courseProgress, isCourseComplete, hasProgress, reset } = useProgress();
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">Learn</h1>
        <p className="text-ink-2 leading-relaxed">Two short courses for beginners. Start with Earth from Space, which leads to Find Your Town, or begin with whatever you are curious about.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {COURSES.map((c, i) => {
          const p = courseProgress(c.id);
          return (
            <Link key={c.id} to={`/learn/${c.id}`} className="group bg-surface shadow-sm border border-line hover:border-brand/50 rounded-2xl p-6 space-y-4 transition-colors">
              <div className="text-xs font-mono uppercase tracking-wider text-brand">Course {i + 1} · {c.lessons.length} lessons</div>
              <h2 className="text-xl font-bold text-ink group-hover:text-brand-dark transition-colors">{c.title}</h2>
              <p className="text-sm text-ink-3 leading-relaxed">{c.description}</p>
              <ProgressBar done={p.done} total={p.total} />
              {isCourseComplete(c.id) && <p className="text-sm font-semibold text-emerald-800">Course complete</p>}
            </Link>
          );
        })}
      </div>
      {hasProgress && (
        <button type="button" onClick={() => { if (window.confirm('Clear your progress on this device?')) reset(); }} className="text-xs text-ink-3 hover:text-ink underline">
          Clear my progress
        </button>
      )}
    </div>
  );
};
