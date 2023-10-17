import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './styles/Theme.tsx';
import { Router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <Router />
    </Theme>
  </React.StrictMode>,
);
