import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Sidebar } from '../shared/ui';
import { AboutPage, EducationPage, ProjectsPage, SkillsPage } from '../pages';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-layout">
          <Routes>
            <Route
              path="/"
              element={<AboutPage />}
            />
            <Route
              path="/education"
              element={<EducationPage />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage />}
            />
            <Route
              path="/skills"
              element={<SkillsPage />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
