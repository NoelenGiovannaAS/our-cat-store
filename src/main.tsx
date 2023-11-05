import { CartProvider } from 'contexts/CartContext/Cart.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './providers/themeProvider';
import { routers } from './router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <RouterProvider router={routers} />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
