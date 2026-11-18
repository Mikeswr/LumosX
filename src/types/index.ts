export interface Source {
  title: string;
  publisher: string;
  url: string;
  note?: string;
}

// A quiz question has exactly four options. The answer key (correctIndex) and the feedback are kept separate
// from the visible text: the lesson page shows only `prompt` and `options` until the learner submits an answer.
export interface QuizQuestion {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: number; // 0 to 3
  feedback: string; // why the correct answer is right, shown after the learner submits
}

export interface LessonSection {
  heading: string;
  body: string[];
}

export interface Lesson {
  id: string;
  title: string;
  learningOutcome: string; // "After this lesson you can ..."
  status: 'ready' | 'outline';
  openingQuestion: string;
  sections: LessonSection[];
  ghana?: { heading: string; body: string[] };
  diagram?: 'orbit-heights' | 'spectrum' | 'pixels';
  narration?: 'intro' | 'satellite' | 'lesson-01' | 'lesson-02' | 'lesson-03' | 'lesson-04' | 'lesson-05' | 'lesson-06' | 'lesson-07' | 'lesson-08' | 'lesson-09' | 'lesson-10' | 'lesson-11' | 'lesson-12' | 'lesson-13';
  extraAnimation?: 'intro' | 'satellite';
  remember: string[];
  quickChecks: QuizQuestion[];
  activity?: { heading: string; body: string };
  activityPath?: string;
  activityLabel?: string;
  sources?: Source[];
}

// Lessons are written without quizzes; the approved quiz bank is attached in data/courses.ts.
export type RawLesson = Omit<Lesson, 'quickChecks'>;

export interface Course {
  id: string;
  title: string;
  level: 'explorer';
  description: string;
  learningOutcome: string;
  lessons: Lesson[];
}

export type RawCourse = Omit<Course, 'lessons'> & { lessons: RawLesson[] };

export interface TownImagery {
  beforeYear: number;
  afterYear: number;
  beforeSrc: string;
  afterSrc: string;
  credit: string;
}

export interface Town {
  id: string;
  name: string;
  lat: number;
  lon: number;
  imagery?: TownImagery;
}

export interface GhanaFact {
  text: string;
  sources: Source[];
}
