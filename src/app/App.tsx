import React from 'react';
import { Route, Routes } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Header, Sidebar } from '../shared/ui';
import { AboutPage, EducationPage, ProjectsPage } from '../pages';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function App() {
  return (
    <>
      <Header />
      <div className={cx('main-container')}>
        <Sidebar />
        <div className={cx('content-layout')}>
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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
