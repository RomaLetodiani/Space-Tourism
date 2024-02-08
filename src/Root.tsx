import { Outlet, useLocation } from 'react-router-dom';
import useMediaQuery from './components/shared/hooks/UseMediaQuery';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';

const Root = () => {
  const { pathname } = useLocation();
  const [bg, setBg] = useState('');
  const isDesktopMode = useMediaQuery('(min-width: 1024px)');
  const isMobileMode = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    let device = 'desktop';
    if (isMobileMode) {
      device = 'mobile';
    } else if (!isDesktopMode && !isMobileMode) {
      device = 'tablet';
    }
    const backgroundClasses: { [key: string]: string } = {
      '/': `bg-home-${device}`,
      '/destination': `bg-destination-${device}`,
      '/crew': `bg-crew-${device}`,
      '/technology': `bg-technology-${device}`,
    };
    setBg(backgroundClasses[pathname] || 'bg-home-desktop');
  }, [pathname, isMobileMode, isDesktopMode]);

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
