import React from 'react';

export const ProgressBar: React.FC<{ done: number; total: number; label?: string }> = ({ done, total, label }) => {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between text-xs text-ink-3 mb-1.5">
        <span>{label ?? 'Lessons completed'}</span>
        <span className="font-mono tabular-nums">{done} of {total}</span>
      </div>
      <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-label={label ?? 'Lessons completed'}>
        <div className="h-full bg-amber transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};
