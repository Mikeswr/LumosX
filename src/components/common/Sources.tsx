import React from 'react';
import { Source } from '../../types';

export const Sources: React.FC<{ sources?: Source[]; note?: string }> = ({ sources, note }) => {
  if (!sources?.length && !note) return null;
  return (
    <details className="text-sm text-ink-3 border-t border-line pt-4">
      <summary className="cursor-pointer font-semibold text-ink-2 min-h-8">Sources</summary>
      <ul className="mt-3 space-y-2 list-disc pl-5">
        {sources?.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark underline break-words">{s.title}</a>
            <span>, {s.publisher}</span>
            {s.note && <span className="block text-xs text-ink-3">{s.note}</span>}
          </li>
        ))}
      </ul>
      {note && <p className="mt-3 text-xs text-ink-3">{note}</p>}
    </details>
  );
};
