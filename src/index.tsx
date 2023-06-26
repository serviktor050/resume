import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>,
);
