import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../../types';
import { reviewQuestion } from '../../lib/quiz';

interface Props {
  question: QuizQuestion;
  index: number;
  total: number;
  // Called once, the first time the learner submits an answer. A wrong answer still counts as engaging with the question.
  onSubmitted?: (questionId: string, correct: boolean) => void;
}

// The learner chooses an option, then presses "Check answer". Options keep the approved A to D order (the bank spreads the
// correct answers across A, B, C and D). The correct answer is only marked after the learner has submitted.
export const QuizComponent: React.FC<Props> = ({ question, index, total, onSubmitted }) => {
  const [choice, setChoice] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [reported, setReported] = useState(false);

  useEffect(() => {
    if (import.meta.env.DEV) {
      const warnings = reviewQuestion(question);
      if (warnings.length) console.warn(`Quiz "${question.id}":`, warnings.join(' '));
    }
  }, [question]);

  const options = question.options;
  const correct = choice === question.correctIndex;

  const submit = () => {
    if (choice === null) return;
    setSubmitted(true);
    if (!reported) {
      setReported(true);
      onSubmitted?.(question.id, correct);
    }
  };

  const tryAgain = () => {
    setChoice(null);
    setSubmitted(false);
  };

  return (
    <div className="bg-surface border border-line shadow-sm rounded-2xl p-5 sm:p-6 space-y-4">
      <p className="text-xs font-mono uppercase tracking-wider text-ink-3">Question {index + 1} of {total}</p>
      <p id={`${question.id}-prompt`} className="text-base font-semibold text-ink leading-snug">{question.prompt}</p>
      <div className="space-y-2" role="radiogroup" aria-labelledby={`${question.id}-prompt`}>
        {options.map((opt, i) => {
          const selected = choice === i;
          const isRight = i === question.correctIndex;
          const state = !submitted
            ? selected
              ? 'border-amber bg-amber-soft ring-2 ring-amber/60'
              : 'border-line-strong hover:border-brand hover:bg-surface-2'
            : isRight
              ? 'border-emerald-600 bg-emerald-50'
              : selected
                ? 'border-rose-500 bg-rose-50'
                : 'border-line opacity-60';
          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={submitted}
              onClick={() => setChoice(i)}
              className={`w-full text-left flex gap-3 items-start p-3.5 min-h-12 rounded-xl border-2 text-sm text-ink transition-colors ${state}`}
            >
              <span className="font-mono text-xs text-ink-3 mt-0.5 w-4 shrink-0">{String.fromCharCode(65 + i)}</span>
              <span className="flex-1">{opt}</span>
              {submitted && isRight && <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" aria-label="Correct answer" />}
              {submitted && selected && !isRight && <XCircle className="w-5 h-5 text-rose-700 shrink-0" aria-label="Your answer, not correct" />}
            </button>
          );
        })}
      </div>

      {!submitted && (
        <button type="button" onClick={submit} disabled={choice === null} className="px-5 py-3 min-h-11 rounded-xl font-bold text-sm bg-amber hover:bg-amber-hover text-ink disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
          Check answer
        </button>
      )}

      {submitted && (
        <div className="text-sm text-ink-2 leading-relaxed space-y-2" aria-live="polite">
          <p className={`font-bold ${correct ? 'text-emerald-700' : 'text-rose-700'}`}>{correct ? 'Correct.' : 'Not quite. The correct answer is marked above.'}</p>
          <p>{question.feedback}</p>
          {!correct && (
            <button type="button" onClick={tryAgain} className="inline-flex items-center gap-1.5 min-h-11 text-xs font-semibold text-brand hover:text-brand-dark">
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> Try this question again for practice
            </button>
          )}
        </div>
      )}
    </div>
  );
};
