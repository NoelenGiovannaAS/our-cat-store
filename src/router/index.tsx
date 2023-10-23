import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Header } from '../components/Header';
import Cart from '../pages/Cart';
import ProductsList from '../pages/ProductsList';

export const routers = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:category',
        element: <ProductsList/>,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
