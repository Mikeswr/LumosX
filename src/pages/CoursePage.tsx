import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, Circle } from 'lucide-react';
import { getCourse } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/common/ProgressBar';
import { LessonNarration } from '../components/common/LessonNarration';
import { NarratedAnimation } from '../components/common/NarratedAnimation';
import { getCourseIntro } from '../data/narration';
import { NotFoundPage } from './NotFoundPage';
import { usePageTitle } from '../lib/usePageTitle';

export const CoursePage: React.FC = () => {
  const { courseId } = useParams();
  const course = getCourse(courseId);
  const { isComplete, courseProgress, isCourseComplete, setCurrentCourse } = useProgress();
  usePageTitle(course?.title);
  useEffect(() => { if (course) setCurrentCourse(course.id); }, [course, setCurrentCourse]);
  if (!course) return <NotFoundPage />;
  const p = courseProgress(course.id);
  const intro = getCourseIntro(course.id);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8 min-w-0">
      <Link to="/learn" className="text-sm font-semibold text-brand hover:text-brand-dark">&larr; All courses</Link>
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">{course.title}</h1>
        <p className="text-ink-2 leading-relaxed">{course.learningOutcome}</p>
      </div>
      {intro && (
        <section className="space-y-4" aria-label="Course introduction">
          <LessonNarration lessonId={`${course.id}-intro`} narration={intro} title="Course introduction" />
          {course.id === 'earth-from-space' && <NarratedAnimation id="intro" />}
        </section>
      )}
      <ProgressBar done={p.done} total={p.total} />
      {isCourseComplete(course.id) && (
        <p className="bg-emerald-50 border border-emerald-600 rounded-xl p-4 text-emerald-800 font-semibold" role="status">Course complete. You have finished all {p.total} lessons.</p>
      )}
      <ol className="space-y-3">
        {course.lessons.map((l, i) => (
          <li key={l.id}>
            <Link to={`/learn/${course.id}/${l.id}`} className="group flex gap-4 items-start bg-surface shadow-sm border border-line hover:border-brand/50 rounded-xl p-4 transition-colors">
              {isComplete(l.id) ? <CheckCircle2 className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" aria-label="Completed" /> : <Circle className="w-5 h-5 text-ink-3 mt-0.5 shrink-0" aria-label="Not completed" />}
              <div>
                <div className="text-xs font-mono text-ink-3">Lesson {i + 1}</div>
                <div className="font-semibold text-ink group-hover:text-brand-dark transition-colors">{l.title}</div>
                <div className="text-sm text-ink-3 mt-1">{l.learningOutcome}</div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
