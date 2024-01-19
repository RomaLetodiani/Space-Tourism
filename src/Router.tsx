import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/space-tourism',
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/space-tourism/',
        element: <div>Home</div>,
        index: true,
      },
      {
        path: '/space-tourism/destination',
        element: <div>Destination</div>,
      },
      {
        path: '/space-tourism/crew',
        element: <div>Crew</div>,
      },
      {
        path: '/space-tourism/technology',
        element: <div>Technology</div>,
      },
    ],
  },
]);

export default router;
