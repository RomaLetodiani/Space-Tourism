import { Link, useLocation } from 'react-router-dom';
import { header } from '../../shared/consts';
import useMediaQuery from '../../shared/hooks/UseMediaQuery';
import { twMerge } from 'tailwind-merge';

const DesktopMenu = () => {
  const location = useLocation();
  const isAboveDesktop = useMediaQuery('(min-width: 1300px)');
  const isAboveTablet = useMediaQuery('(min-width: 1024px)');
  return (
    <nav className="bg-[#ffffff0a] relative backdrop-blur-2xl text-white px-10 lg:pl-28 lg:pr-36">
      {isAboveDesktop && (
        <div className="absolute w-1/2 border opacity-25 translate-y-1/2 translate-x-[10%] top-1/2 -left-1/2 z-30 bg-white transition-transform duration-300 ease-in-out"></div>
      )}
      <ul className="flex gap-10">
        {header.map((item) => (
          <Link key={item.index} to={item.link}>
            <li
              className={twMerge(
                'cursor-pointer tracking-[2.7px] text-sm py-8 border-b-4 hover:border-b-white border-b-transparent hover:border-opacity-40 border-t-4 border-t-transparent font-barlowCondensed',
                location.pathname === item.link &&
                  'border-b-white hover:border-opacity-100'
              )}
            >
              {isAboveTablet && (
                <span className="tracking-normal font-bold">{item.index}</span>
              )}{' '}
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
