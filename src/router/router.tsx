import { Header } from '@components';
import { Cart, Home, ItemList } from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const routers = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/items',
        element: <ItemList />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
