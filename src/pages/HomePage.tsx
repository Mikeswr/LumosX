import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MapPin, Flag } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { OrbitMotif } from '../components/common/OrbitMotif';
import { getTown } from '../data/towns';
import { usePageTitle } from '../lib/usePageTitle';

const DOORS = [
  { to: '/learn', icon: BookOpen, title: 'Learn', text: 'Two short courses, one step at a time.' },
  { to: '/explore/find-your-town', icon: MapPin, title: 'Find Your Town', text: 'Compare real satellite pictures of 103 Ghanaian towns.' },
  { to: '/ghana-in-space', icon: Flag, title: 'Ghana in Space', text: 'GhanaSat-1, the Kuntunse radio telescope and Ghana\'s space story.' },
];

export const HomePage: React.FC = () => {
  usePageTitle();
  const { hasProgress, nextLessonPath } = useProgress();
  const pokuase = getTown('pokuase');
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 min-w-0">
      <section className="relative py-12 sm:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="absolute inset-0 space-grid-pattern opacity-60 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
        <OrbitMotif className="absolute -right-10 -top-6 w-[420px] max-w-none opacity-80 pointer-events-none hidden md:block" />
        <div className="relative space-y-5">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.1]">Space science, explained through Ghana.</h1>
          <p className="text-lg text-ink-2 leading-relaxed max-w-prose">
            Short lessons and real satellite pictures. Find your town, see how it has changed, and learn how space science makes that possible.
          </p>
          <div>
            <Link to={hasProgress ? nextLessonPath() : '/learn/earth-from-space/why-study-earth-from-space'} className="inline-flex items-center gap-2 px-7 py-3.5 min-h-12 bg-amber hover:bg-amber-hover text-ink font-extrabold rounded-xl transition-colors">
              {hasProgress ? 'Continue learning' : 'Start here'}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          <p className="text-xs text-ink-3">No account needed. Your progress stays on this device.</p>
        </div>
        {pokuase?.imagery && (
          <div className="relative space-y-2">
            <BeforeAfterSlider
              beforeSrc={pokuase.imagery.beforeSrc}
              afterSrc={pokuase.imagery.afterSrc}
              beforeLabel={String(pokuase.imagery.beforeYear)}
              afterLabel={String(pokuase.imagery.afterYear)}
              altBefore="Satellite picture of Pokuase in 2017"
              altAfter="Satellite picture of Pokuase in 2025"
              lazy
            />
            <p className="text-sm text-ink-2 text-center">Pokuase from space, 2017 and 2025. Slide to compare, or <Link to="/explore/find-your-town/pokuase" className="text-brand underline">look closer</Link>.</p>
          </div>
        )}
      </section>

      <section aria-label="Where to go" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {DOORS.map(({ to, icon: Icon, title, text }) => (
          <Link key={to} to={to} className="group bg-surface shadow-sm border border-line hover:border-brand/50 rounded-2xl p-6 space-y-3 transition-colors">
            <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
            <h2 className="text-lg font-bold text-ink group-hover:text-brand-dark transition-colors">{title}</h2>
            <p className="text-sm text-ink-3 leading-relaxed">{text}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};
