import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <div></div>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export const Router = ({ router = routerConfig }) => (
  <RouterProvider router={router} />
);
