import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { getCourse, getLesson } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import { QuizComponent } from '../components/common/QuizComponent';
import { NarratedAnimation, isNarratedAnimation } from '../components/common/NarratedAnimation';
import { LessonNarration } from '../components/common/LessonNarration';
import { Sources } from '../components/common/Sources';
import { OrbitHeights } from '../components/diagrams/OrbitHeights';
import { Spectrum } from '../components/diagrams/Spectrum';
import { Pixels } from '../components/diagrams/Pixels';
import { NotFoundPage } from './NotFoundPage';
import { usePageTitle } from '../lib/usePageTitle';

const DIAGRAMS = { 'orbit-heights': OrbitHeights, spectrum: Spectrum, pixels: Pixels } as const;

export const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams();
  const course = getCourse(courseId);
  const lesson = getLesson(courseId, lessonId);
  const { isComplete, markComplete, isCourseComplete, setCurrentCourse } = useProgress();
  const [answered, setAnswered] = useState<string[]>([]);
  usePageTitle(lesson?.title);

  useEffect(() => { if (course) setCurrentCourse(course.id); }, [course, setCurrentCourse]);
  useEffect(() => { setAnswered([]); }, [lesson?.id]);

  // The six questions of a lesson are always shown in the approved order.
  const checks = lesson?.quickChecks ?? [];
  const onSubmitted = useCallback((id: string) => setAnswered((a) => (a.includes(id) ? a : [...a, id])), []);

  // A lesson is complete only when the learner has submitted an answer to every one of its questions (all six).
  // A wrong answer still counts: the aim is to make the learner think, not to punish.
  // Opening a lesson, or answering only some of the questions, never completes it.
  const allAnswered = checks.length > 0 && checks.every((q) => answered.includes(q.id));
  useEffect(() => { if (lesson && allAnswered) markComplete(lesson.id); }, [allAnswered, lesson, markComplete]);

  if (!course || !lesson) return <NotFoundPage />;

  const idx = course.lessons.findIndex((l) => l.id === lesson.id);
  const prev = course.lessons[idx - 1];
  const next = course.lessons[idx + 1];
  const done = isComplete(lesson.id);
  const Diagram = lesson.diagram ? DIAGRAMS[lesson.diagram] : null;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8 min-w-0">
      <Link to={`/learn/${course.id}`} className="inline-flex items-center min-h-11 text-sm font-semibold text-brand hover:text-brand-dark">&larr; {course.title}</Link>
      <header className="space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-ink-3">Lesson {idx + 1} of {course.lessons.length}</div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight leading-tight">{lesson.title}</h1>
        <p className="text-lg text-brand leading-snug">{lesson.openingQuestion}</p>
      </header>

      <section className="bg-surface border border-line shadow-sm rounded-2xl p-5 space-y-1.5" aria-label="What you will learn">
        <h2 className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">After this lesson you can</h2>
        <p className="text-ink leading-relaxed">{lesson.learningOutcome}</p>
      </section>

      {/* Lessons with a narrated animation play their voice-over inside the animation; the others use the audio player. */}
      {!isNarratedAnimation(lesson.narration) && <LessonNarration lessonId={lesson.id} />}

      {lesson.narration && <NarratedAnimation id={lesson.narration} />}
      {lesson.extraAnimation && <NarratedAnimation id={lesson.extraAnimation} />}

      {lesson.sections.map((s) => (
        <section key={s.heading} className="space-y-3">
          <h2 className="text-xl font-bold text-ink">{s.heading}</h2>
          {s.body.map((p) => <p key={p.slice(0, 40)} className="text-ink-2 leading-relaxed">{p}</p>)}
        </section>
      ))}

      {Diagram && <div className="bg-surface border border-line shadow-sm rounded-2xl p-3 sm:p-4"><Diagram /></div>}

      {lesson.ghana && (
        <section className="bg-amber-soft border-l-4 border-amber rounded-r-xl p-5 space-y-2" aria-label="Ghana connection">
          <h2 className="text-sm font-bold text-amber-ink">{lesson.ghana.heading}</h2>
          {lesson.ghana.body.map((p) => <p key={p.slice(0, 40)} className="text-ink-2 leading-relaxed">{p}</p>)}
        </section>
      )}

      {lesson.activity && (
        <section className="space-y-2" aria-label="Activity">
          <h2 className="text-xl font-bold text-ink">{lesson.activity.heading}</h2>
          <p className="text-ink-2 leading-relaxed">{lesson.activity.body}</p>
        </section>
      )}

      <section className="bg-surface border border-line shadow-sm rounded-2xl p-5 space-y-2" aria-label="Remember this">
        <h2 className="text-sm font-bold text-ink">Remember this</h2>
        <ul className="list-disc pl-5 space-y-1 text-ink-2 text-sm leading-relaxed">
          {lesson.remember.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </section>

      {lesson.activityPath && (
        <Link to={lesson.activityPath} className="inline-flex items-center gap-2 px-5 py-3 min-h-11 bg-amber hover:bg-amber-hover text-ink font-bold rounded-xl transition-colors">
          <MapPin className="w-4 h-4" aria-hidden="true" /> {lesson.activityLabel ?? 'Try the activity'} <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      )}

      {checks.length > 0 && (
        <section className="space-y-4" aria-label="Quick check">
          <div>
            <h2 className="text-xl font-bold text-ink">Quick check</h2>
            <p className="text-sm text-ink-3 mt-1" aria-live="polite">
              {done
                ? 'You have finished this lesson. You can answer the questions again for practice.'
                : `Answer all ${checks.length} questions to finish this lesson. ${answered.length} of ${checks.length} answered. You do not need to get them right.`}
            </p>
          </div>
          {checks.map((q, i) => <QuizComponent key={q.id} question={q} index={i} total={checks.length} onSubmitted={onSubmitted} />)}
        </section>
      )}

      {done && (
        <section className="bg-emerald-50 border border-emerald-600 rounded-2xl p-5 space-y-3" aria-label="Lesson complete" aria-live="polite">
          <p className="flex items-center gap-2 font-bold text-emerald-800"><CheckCircle2 className="w-5 h-5" aria-hidden="true" /> Lesson complete</p>
          {lesson.activityPath && (
            <div className="space-y-2">
              <p className="text-ink-2">Now use what you have learned to investigate a place you know.</p>
              <Link to={lesson.activityPath} className="inline-flex items-center gap-2 px-5 py-3 min-h-11 bg-amber hover:bg-amber-hover text-ink font-bold rounded-xl">
                Find Your Town <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          )}
          {next ? (
            <p><Link to={`/learn/${course.id}/${next.id}`} className="inline-flex items-center min-h-11 font-semibold text-brand hover:text-brand-dark">Next: {next.title} &rarr;</Link></p>
          ) : (
            <p className="text-ink-2">
              {isCourseComplete(course.id) ? `You have completed ${course.title}. ` : ''}
              <Link to="/learn" className="text-brand underline">See all courses</Link> or <Link to="/feedback" className="text-brand underline">tell us what you thought</Link>.
            </p>
          )}
        </section>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
        {prev ? <Link to={`/learn/${course.id}/${prev.id}`} className="inline-flex items-center min-h-11 text-ink-2 hover:text-brand">&larr; Previous: {prev.title}</Link> : <span />}
        {next && <Link to={`/learn/${course.id}/${next.id}`} className="inline-flex items-center min-h-11 text-brand hover:text-brand-dark">Next lesson &rarr;</Link>}
      </div>

      <Sources sources={lesson.sources} />
    </article>
  );
};
