import React from 'react';
import { Link } from 'react-router-dom';
import { GHANA_TIMELINE, GSSTI_TODAY, GHANASAT_FACTS, KUNTUNSE_FACTS } from '../data/ghana';
import { Sources } from '../components/common/Sources';
import { Source } from '../types';
import { usePageTitle } from '../lib/usePageTitle';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-xl font-bold text-ink">{title}</h2>
    {children}
  </section>
);

const unique = (list: Source[]) => list.filter((s, i) => list.findIndex((x) => x.url === s.url) === i);

export const GhanaPage: React.FC = () => {
  usePageTitle('Ghana in Space');
  const all = unique([
    ...GHANA_TIMELINE.flatMap((m) => m.fact.sources),
    ...GSSTI_TODAY.sources,
    ...GHANASAT_FACTS.flatMap((f) => f.sources),
    ...KUNTUNSE_FACTS.flatMap((f) => f.sources),
  ]);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10 min-w-0">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">Ghana in Space</h1>
        <p className="text-ink-2 leading-relaxed">Ghana has a national space science institute, a satellite and a radio telescope. Here is the story so far.</p>
      </header>

      <Section title="The story so far">
        <ol className="space-y-4 border-l border-line-strong pl-5">
          {GHANA_TIMELINE.map((m) => (
            <li key={m.fact.text} className="relative">
              <span className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber" aria-hidden="true" />
              <div className="text-xs font-mono text-amber-ink">{m.year}</div>
              <p className="text-ink-2 text-sm leading-relaxed">{m.fact.text}</p>
            </li>
          ))}
        </ol>
        <p className="text-ink-2 text-sm leading-relaxed">{GSSTI_TODAY.text}</p>
      </Section>

      <Section title="GhanaSat-1">
        <ul className="list-disc pl-5 space-y-2 text-ink-2 text-sm leading-relaxed">{GHANASAT_FACTS.map((f) => <li key={f.text}>{f.text}</li>)}</ul>
        <p className="text-sm text-ink-3">Learn more: <Link to="/learn/earth-from-space/how-satellites-get-to-space" className="text-brand underline">How Do Satellites Get to Space?</Link></p>
      </Section>

      <Section title="The radio telescope at Kuntunse">
        <ul className="list-disc pl-5 space-y-2 text-ink-2 text-sm leading-relaxed">{KUNTUNSE_FACTS.map((f) => <li key={f.text}>{f.text}</li>)}</ul>
        <p className="text-sm text-ink-3">Learn more: <Link to="/learn/sun-and-night-sky/listening-to-space-kuntunse" className="text-brand underline">Listening to Space: Kuntunse</Link></p>
      </Section>

      <div className="bg-surface shadow-sm border border-line rounded-2xl p-5 space-y-2">
        <h2 className="text-base font-bold text-ink">See Ghana from space yourself</h2>
        <p className="text-sm text-ink-2">Compare real satellite pictures of 103 Ghanaian towns.</p>
        <Link to="/explore/find-your-town" className="inline-block px-5 py-2.5 min-h-11 bg-amber hover:bg-amber-hover text-ink font-semibold rounded-lg text-sm">Find Your Town</Link>
      </div>

      <Sources sources={all} note="Each fact on this page was checked against at least one of these sources. If you find a mistake, please tell us on the feedback page." />
    </div>
  );
};
