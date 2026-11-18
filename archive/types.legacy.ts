export type NavigationTab = 
  | 'home'
  | 'explore'
  | 'learn'
  | 'do'
  | 'challenges'
  | 'projects'
  | 'ghana-in-space'
  | 'my-journey'
  | 'portfolio';

export type ExploreTopicId = 
  | 'earth'
  | 'sun'
  | 'moon'
  | 'solar-system'
  | 'stars-universe'
  | 'space-exploration';

export interface ExploreTopic {
  id: ExploreTopicId;
  title: string;
  tagline: string;
  heroDescription: string;
  keyConcepts: {
    title: string;
    description: string;
    metric?: string;
    metricUnit?: string;
  }[];
  interestingFacts: string[];
  interactiveType: 'gravity' | 'solar-spectral' | 'phases' | 'orbit-scale' | 'hr-diagram' | 'rocket-stages';
  relatedTopics: ExploreTopicId[];
  learnMoreCourseId: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  summary: string;
  videoUrl?: string;
  videoTitle?: string;
  audioUrl?: string;
  audioTitle?: string;
  content: string[];
  interactiveType?: 'orbit' | 'spectral-bands' | 'solar-wind' | 'antenna-array' | 'ndvi-calculator' | 'exoplanet-transit';
  keyConcepts: string[];
  quickCheck: QuizQuestion;
  nextLessonId?: string;
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationHours: number;
  modulesCount: number;
  modules: CourseModule[];
}

export interface TownChangeData {
  id: string;
  name: string;
  region: string;
  coordinates: string;
  description: string;
  image2017: string;
  image2025: string;
  yearA: number;
  yearB: number;
  labelA: string;
  labelB: string;
  changeHighlights: {
    feature: string;
    description: string;
    type: 'infrastructure' | 'vegetation' | 'urban' | 'water';
  }[];
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  satelliteAnalysisNote: string;
  spectralDetails: {
    ndviChange: string;
    imperviousSurfaceIncrease: string;
    sensorUsed: string;
  };
}

export interface SpaceExperiment {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate';
  estimatedTime: string;
  objective: string;
  materials: string[];
  procedure: string[];
  interactiveSimType: 'eratosthenes' | 'kepler' | 'spectroscope' | 'magnetometer';
  explanation: string;
  questions: QuizQuestion[];
}

export interface DataActivity {
  id: string;
  title: string;
  field: string;
  objective: string;
  difficulty: string;
  datasetName: string;
  instructions: string[];
  sampleData: { label: string; value: number; unit: string }[];
  interactiveCalcType: 'ndvi' | 'sunspots' | 'orbit-pass' | 'atmosphere-temp';
}

export interface SpaceChallenge {
  id: string;
  title: string;
  category: 'Earth Observation' | 'Solar Physics' | 'Astronomy' | 'Environmental';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  points: number;
  description: string;
  whatYouNeedToKnow: string[];
  taskInstruction: string;
  taskType: 'land-cover-detect' | 'solar-storm-classify' | 'light-curve' | 'water-turbidity';
  questions: QuizQuestion[];
}

export interface StudentProject {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Astronomy' | 'Space Weather';
  estimatedHours: number;
  whatYouWillLearn: string[];
  problemStatement: string;
  scientificBackground: string;
  datasetName: string;
  datasetDescription: string;
  instructions: string[];
  deliverableDescription: string;
}

export interface UserProgress {
  studentName: string;
  studentSchool: string;
  studentLevel: string;
  completedLessons: string[];
  courseProgress: Record<string, number>; // courseId -> percentage
  completedChallenges: string[];
  submittedProjects: {
    projectId: string;
    submittedAt: string;
    notes: string;
    score: number;
  }[];
  earnedBadges: {
    id: string;
    title: string;
    description: string;
    earnedDate: string;
    category: string;
  }[];
}
