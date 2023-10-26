import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './providers/themeProvider';
import { routers } from './router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routers} />
    </ThemeProvider>
  </React.StrictMode>,
);
