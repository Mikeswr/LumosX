import React, { useEffect, useRef, useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  altBefore: string;
  altAfter: string;
  lazy?: boolean;
  onError?: () => void;
}

type Mode = 'idle' | 'pending' | 'drag';

const clamp = (n: number) => Math.min(100, Math.max(0, n));

// Before/after comparison built for one-finger use on a phone.
// - The handle has a visible 48px knob and a wider invisible touch zone (touch-action: none),
//   so dragging it never scrolls the page.
// - Anywhere else on the picture, a mostly horizontal swipe also moves the line, while a vertical
//   swipe scrolls the page as normal (touch-action: pan-y).
// - On a mouse, a press anywhere on the picture moves the line there, as before.
// - The handle is a keyboard slider (arrow keys, Home and End).
export const BeforeAfterSlider: React.FC<Props> = ({ beforeSrc, afterSrc, beforeLabel, afterLabel, altBefore, altAfter, lazy, onError }) => {
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [used, setUsed] = useState(false);
  const [hintGone, setHintGone] = useState(false);
  const [dragging, setDragging] = useState(false);
  const g = useRef<{ mode: Mode; startX: number; startY: number; startPos: number; id: number }>({ mode: 'idle', startX: 0, startY: 0, startPos: 50, id: -1 });

  // The hint should not stay forever, even if the learner never touches the picture.
  useEffect(() => {
    const t = window.setTimeout(() => setHintGone(true), 10000);
    return () => window.clearTimeout(t);
  }, []);

  const width = () => box.current?.getBoundingClientRect().width || 1;
  const begin = (e: React.PointerEvent) => {
    try { box.current?.setPointerCapture(e.pointerId); } catch { /* not supported in some test environments */ }
    g.current.mode = 'drag';
    g.current.id = e.pointerId;
    setDragging(true);
    setUsed(true);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const onHandle = !!(e.target as HTMLElement).closest('[data-handle]');
    g.current.startX = e.clientX;
    g.current.startY = e.clientY;
    g.current.startPos = pos;
    if (e.pointerType === 'mouse') {
      const r = box.current!.getBoundingClientRect();
      begin(e);
      g.current.startPos = clamp(((e.clientX - r.left) / r.width) * 100);
      g.current.startX = e.clientX;
      setPos(g.current.startPos);
    } else if (onHandle) {
      begin(e);
    } else {
      g.current.mode = 'pending';
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = g.current;
    if (s.mode === 'pending') {
      const dx = e.clientX - s.startX;
      const dy = e.clientY - s.startY;
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        begin(e);
        s.startX = e.clientX;
        s.startPos = pos;
      } else if (Math.abs(dy) > 10) {
        s.mode = 'idle'; // the learner is scrolling the page
      }
      return;
    }
    if (s.mode === 'drag') setPos(clamp(s.startPos + ((e.clientX - s.startX) / width()) * 100));
  };

  const end = () => {
    g.current.mode = 'idle';
    setDragging(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 5;
    let next: number | null = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = pos - step;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = pos + step;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = 100;
    if (next !== null) {
      e.preventDefault();
      setPos(clamp(next));
      setUsed(true);
    }
  };

  const showHint = !used && !hintGone;

  return (
    <div
      ref={box}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={end}
      onPointerCancel={end}
      onLostPointerCapture={end}
      className="relative aspect-square mx-auto overflow-hidden rounded-2xl border border-line-strong bg-surface-2 select-none shadow-sm"
      style={{ width: 'min(100%, 36rem, max(18rem, calc(100svh - 5rem)))', touchAction: 'pan-y', WebkitTouchCallout: 'none', cursor: dragging ? 'grabbing' : 'ew-resize' }}
    >
      <img src={beforeSrc} alt={altBefore} width={500} height={500} draggable={false} decoding="async" loading={lazy ? 'lazy' : 'eager'} onError={onError} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <img src={afterSrc} alt={altAfter} width={500} height={500} draggable={false} decoding="async" loading={lazy ? 'lazy' : 'eager'} onError={onError} className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ clipPath: `inset(0 0 0 ${pos}%)` }} />

      <span className="pointer-events-none absolute top-2.5 left-2.5 rounded-md bg-ink/85 px-3 py-1.5 text-sm font-bold text-white">{beforeLabel}</span>
      <span className="pointer-events-none absolute top-2.5 right-2.5 rounded-md bg-ink/85 px-3 py-1.5 text-sm font-bold text-white">{afterLabel}</span>

      {/* Handle: 72px wide invisible touch zone around a 48px visible knob. */}
      <div
        data-handle
        role="slider"
        tabIndex={0}
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`The line is ${Math.round(pos)} percent across. Left of the line shows ${beforeLabel}, right shows ${afterLabel}.`}
        aria-label={`Comparison slider. Move to compare ${beforeLabel} and ${afterLabel}.`}
        onKeyDown={onKeyDown}
        className="absolute top-0 bottom-0 w-[72px] -ml-9 flex items-center justify-center outline-offset-[-4px]"
        style={{ left: `${pos}%`, touchAction: 'none', cursor: dragging ? 'grabbing' : 'ew-resize' }}
      >
        <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_0_1px_rgba(19,35,63,0.35)]" aria-hidden="true" />
        <div className={`relative flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-amber bg-white text-ink shadow-lg transition-transform ${dragging ? 'scale-110' : ''}`} aria-hidden="true">
          <ChevronsLeftRight className="h-6 w-6" />
        </div>
      </div>

      {showHint && (
        <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/85 px-4 py-2 text-sm font-semibold text-white shadow">
          Drag left or right to compare
        </p>
      )}
    </div>
  );
};
