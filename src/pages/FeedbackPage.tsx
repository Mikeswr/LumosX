import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { usePageTitle } from '../lib/usePageTitle';

// Submission is optional and needs no backend yet. If VITE_FEEDBACK_ENDPOINT is set at build time (for example a
// form service address that accepts a JSON POST), answers are sent there. Otherwise the learner can copy their answers.
const ENDPOINT = import.meta.env.VITE_FEEDBACK_ENDPOINT as string | undefined;

const LESSONS = COURSES.flatMap((c) => c.lessons.map((l) => ({ id: l.id, label: `${c.title}: ${l.title}` })));

interface Answers { enjoyed: string; confusing: string; helped: string; next: string }

export const FeedbackPage: React.FC = () => {
  usePageTitle('Feedback');
  const [a, setA] = useState<Answers>({ enjoyed: '', confusing: '', helped: '', next: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed' | 'copy'>('idle');
  const [copied, setCopied] = useState(false);
  const set = (k: keyof Answers) => (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => setA((s) => ({ ...s, [k]: e.target.value }));

  const helpedLabel = LESSONS.find((l) => l.id === a.helped)?.label ?? 'Not sure';
  const summary = [
    'LumosX feedback',
    `What did you enjoy? ${a.enjoyed || '(no answer)'}`,
    `What was confusing? ${a.confusing || '(no answer)'}`,
    `Which lesson helped you most? ${helpedLabel}`,
    `What would you like to learn next? ${a.next || '(no answer)'}`,
  ].join('\n');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ENDPOINT) { setStatus('copy'); return; }
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...a, helpedLabel, sentAt: new Date().toISOString() }) });
      setStatus(res.ok ? 'sent' : 'failed');
    } catch {
      setStatus('failed');
    }
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(summary); setCopied(true); } catch { setCopied(false); }
  };

  const area = 'w-full p-3 bg-surface shadow-sm border border-line-strong rounded-lg text-base text-ink placeholder:text-ink-3 focus:outline-none focus:border-brand';

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-8 min-w-0">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">Tell us what you think</h1>
        <p className="text-ink-2 leading-relaxed">LumosX is new. Your answers help us fix what is confusing and teach what you want to learn. Please do not write your name or phone number.</p>
      </header>

      {status === 'sent' ? (
        <p className="bg-emerald-50 border border-emerald-600 rounded-xl p-5 text-emerald-800" role="status">Thank you. Your feedback was sent.</p>
      ) : (
        <form onSubmit={submit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="enjoyed" className="block font-semibold text-ink">What did you enjoy?</label>
            <textarea id="enjoyed" rows={3} maxLength={1000} value={a.enjoyed} onChange={set('enjoyed')} className={area} />
          </div>
          <div className="space-y-2">
            <label htmlFor="confusing" className="block font-semibold text-ink">What was confusing?</label>
            <textarea id="confusing" rows={3} maxLength={1000} value={a.confusing} onChange={set('confusing')} className={area} />
          </div>
          <div className="space-y-2">
            <label htmlFor="helped" className="block font-semibold text-ink">Which lesson helped you most?</label>
            <select id="helped" value={a.helped} onChange={set('helped')} className={area}>
              <option value="">Not sure</option>
              {LESSONS.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="next" className="block font-semibold text-ink">What would you like to learn next?</label>
            <textarea id="next" rows={3} maxLength={1000} value={a.next} onChange={set('next')} className={area} />
          </div>
          <button type="submit" disabled={status === 'sending'} className="px-6 py-3 min-h-11 bg-amber hover:bg-amber-hover disabled:opacity-60 text-ink font-bold rounded-xl">
            {ENDPOINT ? (status === 'sending' ? 'Sending...' : 'Send feedback') : 'Prepare my feedback'}
          </button>
          {status === 'failed' && <p className="text-rose-700 text-sm" role="alert">We could not send your feedback. Please try again later, or copy it below and send it to the LumosX team.</p>}
        </form>
      )}

      {(status === 'copy' || status === 'failed') && (
        <section className="bg-surface shadow-sm border border-line rounded-2xl p-5 space-y-3" aria-live="polite">
          <h2 className="text-base font-bold text-ink">{status === 'copy' ? 'Sending is not set up yet' : 'Your answers'}</h2>
          {status === 'copy' && <p className="text-sm text-ink-2">Feedback cannot be sent from this site yet. Copy your answers and send them to the LumosX team in the way they asked you to.</p>}
          <pre className="whitespace-pre-wrap break-words text-sm text-ink-2 bg-page border border-line rounded-lg p-3">{summary}</pre>
          <button type="button" onClick={copy} className="px-4 py-2.5 min-h-11 border border-brand/50 text-brand hover:bg-brand/10 rounded-lg text-sm font-semibold">{copied ? 'Copied' : 'Copy my answers'}</button>
        </section>
      )}
    </div>
  );
};
