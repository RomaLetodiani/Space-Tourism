import { createHashRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './Pages/error';
import Home from './Pages/home';
import Destination from './Pages/destination';
import Crew from './Pages/crew';
import Technology from './Pages/technology';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/destination',
        element: <Destination />,
      },
      {
        path: '/crew',
        element: <Crew />,
      },
      {
        path: '/technology',
        element: <Technology />,
      },
    ],
  },
]);

export default router;
