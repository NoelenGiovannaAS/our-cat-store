import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Header } from '../components/Header';
import Cart from '../pages/Cart';

export const routers = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
