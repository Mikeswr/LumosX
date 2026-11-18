import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { LearnPage } from './pages/LearnPage';
import { CoursePage } from './pages/CoursePage';
import { LessonPage } from './pages/LessonPage';
import { FeedbackPage } from './pages/FeedbackPage';
import { FindYourTownPage } from './pages/FindYourTownPage';
import { GhanaPage } from './pages/GhanaPage';
import { NotFoundPage } from './pages/NotFoundPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-page text-ink">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/learn/:courseId" element={<CoursePage />} />
          <Route path="/learn/:courseId/:lessonId" element={<LessonPage />} />
          <Route path="/explore" element={<Navigate to="/explore/find-your-town" replace />} />
          <Route path="/explore/find-your-town" element={<FindYourTownPage />} />
          <Route path="/explore/find-your-town/:townId" element={<FindYourTownPage />} />
          <Route path="/ghana-in-space" element={<GhanaPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
