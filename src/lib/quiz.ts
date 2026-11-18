import { QuizQuestion } from '../types';

// Content check used while writing questions (warns in development only, and by `npm run check:content`).
export function reviewQuestion(q: QuizQuestion): string[] {
  const warnings: string[] = [];
  if (q.options.length !== 4) warnings.push('Use exactly four options.');
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) warnings.push('correctIndex must be 0, 1, 2 or 3.');
  if (new Set(q.options.map((s) => s.trim().toLowerCase())).size !== q.options.length) warnings.push('Two options are identical.');
  if (!q.feedback.trim()) warnings.push('Add feedback.');
  return warnings;
}
