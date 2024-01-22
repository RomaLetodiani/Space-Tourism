import { Outlet, useLocation } from 'react-router-dom';
import useMediaQuery from './components/shared/hooks/UseMediaQuery';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';

const Root = () => {
  const { pathname } = useLocation();
  const [bg, setBg] = useState('');
  const [device, setDevice] = useState('');
  const isDesktopMode = useMediaQuery('(min-width: 1024px)');
  const isMobileMode = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (isDesktopMode) {
      setDevice('desktop');
    }
    if (isMobileMode) {
      setDevice('mobile');
    }
    if (!isDesktopMode && !isMobileMode) {
      setDevice('tablet');
    }
  }, [isDesktopMode, isMobileMode]);

  useEffect(() => {
    console.log('pathname', pathname);
    switch (pathname) {
      case '/':
        if (device === 'desktop') {
          setBg('bg-home-desktop');
        } else if (device === 'mobile') {
          setBg('bg-home-mobile');
        } else {
          setBg('bg-home-tablet');
        }
        break;
      case '/destination':
        if (device === 'desktop') {
          setBg('bg-destination-desktop');
        } else if (device === 'mobile') {
          setBg('bg-destination-mobile');
        } else {
          setBg('bg-destination-tablet');
        }
        break;
      case '/crew':
        if (device === 'desktop') {
          setBg('bg-crew-desktop');
        } else if (device === 'mobile') {
          setBg('bg-crew-mobile');
        } else {
          setBg('bg-crew-tablet');
        }
        break;
      case '/technology':
        if (device === 'desktop') {
          setBg('bg-technology-desktop');
        } else if (device === 'mobile') {
          setBg('bg-technology-mobile');
        } else {
          setBg('bg-technology-tablet');
        }
        break;
      default: {
        setBg('bg-home-desktop');
        break;
      }
    }
  }, [pathname, device]);

  return (
    <div
      className={`${bg} bg-cover flex flex-col lg:justify-between bg-center min-w-[280px] min-h-screen`}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
