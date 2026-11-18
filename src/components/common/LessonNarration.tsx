import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { getNarration, LessonNarration as NarrationData } from '../../data/narration';
import { claimAudio, releaseAudio } from '../../lib/audioManager';

const fmt = (s: number) => {
  const t = Math.max(0, Math.floor(s));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
};

// "Listen to this lesson": one voice recording with its transcript. Used for each lesson and for the Course 1 introduction.
// The audio is never started automatically and is only downloaded when the learner presses Play.
// Starting one narration pauses any other, so two voices can never play together.
export const LessonNarration: React.FC<{ lessonId: string; narration?: NarrationData; title?: string }> = ({ lessonId, narration, title = 'Listen to this lesson' }) => {
  const n = narration ?? getNarration(lessonId);
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [length, setLength] = useState(n?.seconds ?? 0);
  const [failed, setFailed] = useState(false);

  // Stop the sound when the learner leaves the lesson or opens another one.
  useEffect(() => {
    const el = audio.current;
    setPlaying(false);
    setTime(0);
    setFailed(false);
    setLength(n?.seconds ?? 0);
    return () => { el?.pause(); if (el) releaseAudio(el); };
  }, [lessonId, n?.seconds]);

  if (!n) return null;

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (!el.paused) { el.pause(); return; }
    if (el.ended) el.currentTime = 0;
    const p = el.play();
    if (p && p.catch) p.catch(() => setFailed(true));
  };
  const replay = () => {
    const el = audio.current;
    if (!el) return;
    el.currentTime = 0;
    const p = el.play();
    if (p && p.catch) p.catch(() => setFailed(true));
  };

  return (
    <section aria-label={title} className="bg-surface border border-line shadow-sm rounded-2xl p-4 sm:p-5 space-y-3">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-bold text-ink">{title}</h2>
        <span className="text-xs font-mono text-ink-3">{fmt(n.seconds)}</span>
      </div>
      <audio
        ref={audio}
        src={n.audio}
        preload="none"
        onPlay={(e) => { claimAudio(e.currentTarget); setPlaying(true); }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => { if (isFinite(e.currentTarget.duration)) setLength(e.currentTarget.duration); }}
        onError={() => setFailed(true)}
      />
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={toggle} className="inline-flex items-center gap-2 px-5 min-h-11 rounded-xl bg-amber hover:bg-amber-hover text-ink font-bold text-sm transition-colors">
          {playing ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4" aria-hidden="true" />}
          {playing ? 'Pause' : 'Play'}
        </button>
        <button type="button" onClick={replay} className="inline-flex items-center gap-2 px-4 min-h-11 rounded-xl border-2 border-line-strong text-ink font-semibold text-sm hover:bg-surface-2">
          <RotateCcw className="w-4 h-4" aria-hidden="true" /> Replay
        </button>
        <input
          type="range"
          min={0}
          max={Math.max(1, length)}
          step={0.1}
          value={Math.min(time, Math.max(1, length))}
          onChange={(e) => { const el = audio.current; if (el) { el.currentTime = Number(e.target.value); setTime(el.currentTime); } }}
          aria-label="Move through the narration"
          aria-valuetext={`${fmt(time)} of ${fmt(length)}`}
          className="flex-1 min-w-[120px] h-11 accent-brand"
        />
        <span className="text-xs font-mono text-ink-3 tabular-nums" aria-hidden="true">{fmt(time)} / {fmt(length)}</span>
      </div>
      {failed && <p className="text-sm text-rose-700" role="alert">The audio could not play. You can still read the transcript below.</p>}
      <details>
        <summary className="cursor-pointer min-h-11 flex items-center text-sm font-semibold text-brand hover:text-brand-dark">Read the transcript</summary>
        <div className="space-y-3 pt-1 text-sm text-ink-2 leading-relaxed break-words">
          {n.transcript.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
        </div>
      </details>
    </section>
  );
};
