import { useState } from 'react';
import { BurgerIcon, CloseIcon } from '../../shared/icons';
import { header } from '../../shared/consts';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>{<BurgerIcon />}</button>

      <div
        className={`fixed pl-6 bg-[#ffffff0a] text-white backdrop-blur-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'right-0' : '-right-full'
        } top-0 bottom-0 z-50 w-2/3 flex flex-col gap-20`}
      >
        <button className="self-end pt-8 px-6" onClick={() => setIsOpen(false)}>
          {<CloseIcon />}
        </button>
        <nav>
          <ul className="flex flex-col gap-6">
            {header.map((item) => (
              <Link
                key={item.index}
                onClick={() => setIsOpen(false)}
                to={item.link}
              >
                <li
                  className={`cursor-pointer tracking-[2.7px] ${
                    pathname === item.link
                      ? 'border-r-4 hover:border-opacity-100'
                      : ''
                  } hover:border-opacity-20 hover:border-r-4 font-barlowCondensed text-xs min-[320px]:text-base`}
                  key={item.index}
                >
                  <span className="tracking-normal pr-3 text-lg font-bold">
                    {item.index}
                  </span>{' '}
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
