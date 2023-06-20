import React from 'react';
import {Header, Sidebar} from "../shared/ui";
import {Route, Routes} from 'react-router-dom'
import {AboutPage} from "../pages";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-layout">
          <Routes>
            <Route path='/' element={<AboutPage />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
