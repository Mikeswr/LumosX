import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { COURSES, getCourse } from '../data/courses';

// Earlier builds stored progress under other names (for example astroghana.progress.v1, and lumosx.progress.v2, which
// counted a lesson as finished after only two questions). Those records are deliberately never read, so no old
// completion can bypass the six-question rule. Every learner starts from zero. If the completion rules change again,
// change this key.
const KEY = 'lumosx.progress.v3';

interface Saved {
  completed: string[];
  currentCourseId: string | null;
}

interface ProgressValue {
  isComplete: (lessonId: string) => boolean;
  markComplete: (lessonId: string) => void;
  isCourseComplete: (courseId: string) => boolean;
  courseProgress: (courseId: string) => { done: number; total: number };
  totalCompleted: number;
  currentCourseId: string | null;
  setCurrentCourse: (courseId: string) => void;
  hasProgress: boolean;
  nextLessonPath: () => string;
  reset: () => void;
}

const ProgressContext = createContext<ProgressValue | null>(null);

function load(): Saved {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.completed)) {
        // Keep only real lesson ids, so an edited or corrupted record cannot mark anything else as complete.
        const known = new Set(COURSES.flatMap((c) => c.lessons.map((l) => l.id)));
        return {
          completed: [...new Set<string>(parsed.completed.filter((x: unknown): x is string => typeof x === 'string' && known.has(x)))],
          currentCourseId: typeof parsed.currentCourseId === 'string' ? parsed.currentCourseId : null,
        };
      }
    }
  } catch {
    // ignore: private browsing or corrupted data
  }
  return { completed: [], currentCourseId: null };
}

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<Saved>(load);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const isComplete = useCallback((id: string) => state.completed.includes(id), [state.completed]);

  // A lesson is only marked complete by the lesson page, after the learner has answered its required questions.
  const markComplete = useCallback((id: string) => {
    setState((s) => (s.completed.includes(id) ? s : { ...s, completed: [...s.completed, id] }));
  }, []);

  const courseProgress = useCallback(
    (courseId: string) => {
      const course = getCourse(courseId);
      const total = course?.lessons.length ?? 0;
      const done = course ? course.lessons.filter((l) => state.completed.includes(l.id)).length : 0;
      return { done, total };
    },
    [state.completed],
  );

  const isCourseComplete = useCallback(
    (courseId: string) => {
      const course = getCourse(courseId);
      return !!course && course.lessons.length > 0 && course.lessons.every((l) => state.completed.includes(l.id));
    },
    [state.completed],
  );

  const setCurrentCourse = useCallback((courseId: string) => {
    setState((s) => (s.currentCourseId === courseId ? s : { ...s, currentCourseId: courseId }));
  }, []);

  const nextLessonPath = useCallback(() => {
    const course = getCourse(state.currentCourseId ?? undefined) ?? COURSES[0];
    const next = course.lessons.find((l) => !state.completed.includes(l.id));
    return next ? `/learn/${course.id}/${next.id}` : `/learn/${course.id}`;
  }, [state]);

  const reset = useCallback(() => setState({ completed: [], currentCourseId: null }), []);

  const value = useMemo<ProgressValue>(
    () => ({
      isComplete,
      markComplete,
      isCourseComplete,
      courseProgress,
      totalCompleted: state.completed.length,
      currentCourseId: state.currentCourseId,
      setCurrentCourse,
      hasProgress: state.completed.length > 0,
      nextLessonPath,
      reset,
    }),
    [isComplete, markComplete, isCourseComplete, courseProgress, state, setCurrentCourse, nextLessonPath, reset],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};

export function useProgress(): ProgressValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
