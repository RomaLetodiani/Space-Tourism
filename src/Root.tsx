import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import useMediaQuery from './components/shared/hooks/UseMediaQuery';

const Root = () => {
  const { pathname } = useLocation();
  console.log('🚀 ~ Root ~ pathname:', pathname);
  const isDesktopMode = useMediaQuery('(min-width: 1024px)');
  const isMobileMode = useMediaQuery('(max-width: 767px)');

  const device = isDesktopMode ? 'desktop' : isMobileMode ? 'mobile' : 'tablet';
  let bg;
  switch (pathname) {
    case '/space-tourism':
      if (device === 'desktop') {
        bg = 'bg-home-desktop';
      } else if (device === 'mobile') {
        bg = 'bg-home-mobile';
      } else {
        bg = 'bg-home-tablet';
      }
      break;
    case '/space-tourism/destination':
      if (device === 'desktop') {
        bg = 'bg-destination-desktop';
      } else if (device === 'mobile') {
        bg = 'bg-destination-mobile';
      } else {
        bg = 'bg-destination-tablet';
      }
      break;
    case '/space-tourism/crew':
      if (device === 'desktop') {
        bg = 'bg-crew-desktop';
      } else if (device === 'mobile') {
        bg = 'bg-crew-mobile';
      } else {
        bg = 'bg-crew-tablet';
      }
      break;
    case '/space-tourism/technology':
      if (device === 'desktop') {
        bg = 'bg-technology-desktop';
      } else if (device === 'mobile') {
        bg = 'bg-technology-mobile';
      } else {
        bg = 'bg-technology-tablet';
      }
      break;
    default: {
      bg = 'bg-home-desktop';
      break;
    }
  }

  return (
    <div className={`${bg} bg-cover bg-center text-white min-h-screen`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
