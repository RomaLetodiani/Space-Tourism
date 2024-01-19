import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Error from './Pages/error';
import Home from './Pages/home';
import Destination from './Pages/destination';
import Crew from './Pages/crew';
import Technology from './Pages/technology';

const router = createBrowserRouter([
  {
    path: '/space-tourism',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/space-tourism',
        element: <Home />,
        index: true,
      },
      {
        path: '/space-tourism/destination',
        element: <Destination />,
      },
      {
        path: '/space-tourism/crew',
        element: <Crew />,
      },
      {
        path: '/space-tourism/technology',
        element: <Technology />,
      },
    ],
  },
]);

export default router;
