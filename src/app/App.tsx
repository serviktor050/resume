import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Sidebar } from '../shared/ui';
import { AboutPage } from '../pages';

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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
