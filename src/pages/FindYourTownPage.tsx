import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import { FEATURED_TOWN_IDS, TOWNS, getTown } from '../data/towns';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { getObservation, saveObservation } from '../lib/observations';
import { NotFoundPage } from './NotFoundPage';
import { usePageTitle } from '../lib/usePageTitle';

const LOOK_FOR = ['New buildings', 'New or wider roads', 'Green areas that look different', 'Bare land', 'Water', 'Changes around settlements'];

const SORTED = [...TOWNS].sort((a, b) => a.name.localeCompare(b.name));

export const FindYourTownPage: React.FC = () => {
  const { townId } = useParams();
  const navigate = useNavigate();
  const town = getTown(townId);
  const [query, setQuery] = useState('');
  const [imageFailed, setImageFailed] = useState(false);
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState<'idle' | 'saved' | 'failed'>('idle');
  const compare = useRef<HTMLElement>(null);
  usePageTitle(town ? `${town.name} from space` : 'Find Your Town');

  useEffect(() => {
    setImageFailed(false);
    setSaved('idle');
    setNote(town ? getObservation(town.id) : '');
    // On a phone the comparison starts below the search box, so bring it into view when a town is chosen.
    if (town) {
      const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      compare.current?.scrollIntoView?.({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  }, [town]);

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () => (q ? SORTED.filter((t) => t.name.toLowerCase().includes(q)).slice(0, 12) : FEATURED_TOWN_IDS.map((id) => getTown(id)!).filter(Boolean)),
    [q],
  );

  if (townId && !town) return <NotFoundPage />;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (town) setSaved(saveObservation(town.id, note) ? 'saved' : 'failed');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8 min-w-0">
      <header className="space-y-2 max-w-2xl">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-ink"><MapPin className="w-4 h-4" aria-hidden="true" /> Find Your Town</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">Investigate your town from space</h1>
        <p className="text-ink-2 leading-relaxed">Choose a Ghanaian town, then compare real satellite pictures from 2017 and 2025. Look for what changed.</p>
      </header>

      <div className="space-y-3">
        <label htmlFor="town-search" className="block text-sm font-semibold text-ink">Search for a town</label>
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-ink-3 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input id="town-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a town name" autoComplete="off" className="w-full pl-10 pr-4 py-3 bg-surface shadow-sm border border-line-strong rounded-lg text-base text-ink placeholder:text-ink-3 focus:outline-none focus:border-brand" />
        </div>
        <div className="flex flex-wrap gap-2" aria-live="polite">
          {matches.map((t) => (
            <Link key={t.id} to={`/explore/find-your-town/${t.id}`} aria-current={t.id === town?.id ? 'page' : undefined} className={`px-4 py-2.5 min-h-11 inline-flex items-center text-sm font-semibold rounded-lg transition-colors ${t.id === town?.id ? 'bg-amber text-ink' : 'bg-surface-2 text-ink-2 hover:bg-line'}`}>
              {t.name}
            </Link>
          ))}
          {q && matches.length === 0 && <p className="text-sm text-ink-3">No town found yet. This list has {TOWNS.length} places, and more will be added.</p>}
        </div>
        <div className="max-w-md">
          <label htmlFor="town-select" className="block text-sm text-ink-3 mb-1">Or choose from all {TOWNS.length} towns</label>
          <select id="town-select" value={town?.id ?? ''} onChange={(e) => e.target.value && navigate(`/explore/find-your-town/${e.target.value}`)} className="w-full px-3 py-3 bg-surface shadow-sm border border-line-strong rounded-lg text-base text-ink">
            <option value="">Select a town</option>
            {SORTED.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
        </div>
      </div>

      {!town && (
        <p className="text-ink-3 text-sm max-w-xl">Not sure where to begin? <Link to="/explore/find-your-town/pokuase" className="text-brand underline">Start with Pokuase</Link>, a town near Accra.</p>
      )}

      {town?.imagery && (
        <section ref={compare} className="space-y-6 scroll-mt-24" aria-label={`${town.name} from space`}>
          <div>
            <h2 className="text-2xl font-bold text-ink">{town.name}</h2>
            <p className="text-sm text-ink-3">Centre point: {town.lat.toFixed(4)}, {town.lon.toFixed(4)}. Each picture covers about 5 km by 5 km.</p>
          </div>
          <BeforeAfterSlider
            beforeSrc={town.imagery.beforeSrc}
            afterSrc={town.imagery.afterSrc}
            beforeLabel={String(town.imagery.beforeYear)}
            afterLabel={String(town.imagery.afterYear)}
            altBefore={`Satellite picture of ${town.name} in ${town.imagery.beforeYear}`}
            altAfter={`Satellite picture of ${town.name} in ${town.imagery.afterYear}`}
            onError={() => setImageFailed(true)}
          />
          {imageFailed && <p className="text-rose-700 text-sm text-center" role="alert">A picture could not load. Check your connection and try again.</p>}
          <p className="text-xs text-ink-3 text-center max-w-xl mx-auto">{town.imagery.credit} Move the slider to compare the years.</p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-surface shadow-sm border border-line rounded-2xl p-5 space-y-3">
              <h3 className="text-base font-bold text-ink">What changed?</h3>
              <p className="text-sm text-ink-2">Look for:</p>
              <ul className="list-disc pl-5 text-sm text-ink-2 space-y-1">{LOOK_FOR.map((l) => <li key={l}>{l}</li>)}</ul>
              <p className="text-xs text-ink-3">This is a visual comparison, not a measurement. The pictures can show that something changed, but not why.</p>
            </div>
            <form onSubmit={submit} className="bg-surface shadow-sm border border-line rounded-2xl p-5 space-y-3">
              <label htmlFor="observation" className="block text-base font-bold text-ink">What is one change you noticed?</label>
              <textarea id="observation" value={note} onChange={(e) => { setNote(e.target.value); setSaved('idle'); }} rows={4} maxLength={500} placeholder="For example: more roads in the north of the picture." className="w-full p-3 bg-page border border-line-strong rounded-lg text-base text-ink placeholder:text-ink-3 focus:outline-none focus:border-brand" />
              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="px-5 py-2.5 min-h-11 bg-amber hover:bg-amber-hover text-ink font-semibold rounded-lg text-sm">Save my note</button>
                <span className="text-xs text-ink-3" aria-live="polite">
                  {saved === 'saved' && 'Saved on this device only.'}
                  {saved === 'failed' && 'Could not save. Your browser may be blocking storage.'}
                  {saved === 'idle' && 'Your note stays on this device.'}
                </span>
              </div>
            </form>
          </div>

          <div className="bg-surface shadow-sm border-l-4 border-amber rounded-r-xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-amber-ink">How can a satellite see this?</h3>
            <p className="text-sm text-ink-2 leading-relaxed">These pictures come from the Sentinel-2 satellites, which record light that bounces off the ground. Learn how in <Link to="/learn/earth-from-space/what-do-satellites-see" className="text-brand underline">What Do Satellites See?</Link> and <Link to="/learn/earth-from-space/meet-sentinel-2" className="text-brand underline">Meet Sentinel-2</Link>.</p>
          </div>
          <p className="text-xs text-ink-3">Town centre points come from the GeoNames place list, so a town may sit a little off the centre of its picture.</p>
        </section>
      )}
    </div>
  );
};
