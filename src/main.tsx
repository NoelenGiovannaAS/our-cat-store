import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router/index.tsx';
import ThemeProvider from './providers/themeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routers} />
    </ThemeProvider>
  </React.StrictMode>,
);
