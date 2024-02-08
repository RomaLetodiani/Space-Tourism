import { useEffect, useState } from 'react';
import useStore from '../../store/UseStore';
import { destinationImages } from '../../components/shared/consts';
import { twMerge } from 'tailwind-merge';

const Destinations = () => {
  const { data, fetch } = useStore((state) => state);
  const [names, setNames] = useState<string[] | undefined>([]);
  const [currentDestination, setCurrentDestination] = useState(0);

  const onClick = (index: number) => {
    setCurrentDestination(index);
  };

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    if (data) {
      setNames(data.destinations?.map((destination) => destination.name));
    }
  }, [data]);

  return (
    <div className="text-white max-w-[1440px] flex-1 flex flex-col h-full w-full mx-auto px-[clamp(3rem,5vw,5rem)] py-[clamp(2rem,4vw,4rem)] gap-5 md:gap-10">
      <h5 className="font-barlowCondensed tracking-[1.72px] text-center md:text-left md:text-xl lg:text-head5">
        <span className="opacity-25 font-bold mr-3">
          {currentDestination == 0 ? '01' : '0' + (currentDestination + 1)}
        </span>{' '}
        Pick your destination
      </h5>
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-between">
        <div className="max-w-[200px] md:max-w-xs lg:max-w-full">
          <img
            src={destinationImages[currentDestination]}
            alt={data?.destinations?.[currentDestination].name}
          />
        </div>
        <div className="max-w-xl lg:max-w-md text-center lg:text-left flex flex-col gap-5">
          <div className="flex items-center justify-center lg:justify-normal gap-5 md:gap-10">
            {names?.map((item, index) => (
              <button
                className={twMerge(
                  'cursor-pointer pb-3 border-transparent hover:border-white hover:border-opacity-40 border-b-2 font-barlowCondensed tracking-[2.7px] text-xs min-[320px]:text-base',
                  index === currentDestination &&
                    'border-white hover:border-opacity-100'
                )}
                key={index}
                onClick={() => onClick(index)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="pb-10 border-b border-b-[#383B4B]">
            <h2 className="font-bellefair tracking-widest text-head3 md:text-[80px] lg:text-head2">
              {data?.destinations?.[currentDestination].name.toUpperCase()}
            </h2>
            <p className="text-secondary leading-6 md:leading-7 lg:leading-8 lg:text-lg">
              {data?.destinations?.[currentDestination].description}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center lg:justify-normal gap-5 md:gap-20">
            <div>
              <p className="text-secondary">AVG. DISTANCE</p>
              <p className="font-bellefair text-head5">
                {data?.destinations?.[
                  currentDestination
                ].distance.toUpperCase()}
              </p>
            </div>
            <div>
              <p className="text-secondary">EST. TRAVEL TIME</p>
              <p className="font-bellefair text-head5">
                {data?.destinations?.[currentDestination].travel.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
