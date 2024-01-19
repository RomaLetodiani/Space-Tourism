import { RouterProvider } from 'react-router-dom';
import router from './Router';

const App = () => {
  // https://romaletodiani.github.io/space-tourism/data.json
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
