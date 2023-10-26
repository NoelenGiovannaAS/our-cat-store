import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components';
import { Cart, Home, ItemList } from '../pages';

export const routers = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <ItemList />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
