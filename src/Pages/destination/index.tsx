import { useEffect, useState } from 'react';
import useStore from '../../store/UseStore';
import { destinationImages } from '../../components/shared/consts';
import { twMerge } from 'tailwind-merge';
import useLoading from '../../components/shared/hooks/UseLoading';
import Loading from '../../components/shared/Loading';
import Error from '../../components/shared/Error';
import useError from '../../components/shared/hooks/UseError';

const Destinations = () => {
  const { data, fetch } = useStore((state) => state);
  const { destinations } = data;
  const [names, setNames] = useState<string[]>([]);
  const [currentDestination, setCurrentDestination] = useState(0);
  const { loading, showLoading, hideLoading } = useLoading();
  const { error, showError } = useError();

  const onClick = (index: number) => {
    setCurrentDestination(index);
  };

  useEffect(() => {
    showLoading(); // Show loading state
    fetch()
      .then(() => {
        hideLoading();
      }) // Hide loading state on successful fetch
      .catch(() => {
        hideLoading();
        showError();
      }); // Set error state on failed fetch
  }, []);

  useEffect(() => {
    destinations && setNames(destinations.map((destination) => destination.name));
  }, [data]);

  const currentDestinationName = destinations?.[currentDestination].name.toUpperCase();
  const currentDestinationDescription = destinations?.[currentDestination].description;
  const currentDestinationDistance = destinations?.[currentDestination].distance.toUpperCase();
  const currentDestinationTravelTime = destinations?.[currentDestination].travel.toUpperCase();
  const currentDestinationImage = destinationImages[currentDestination];

  return (
    <div className="text-white max-w-[1440px] flex-1 flex flex-col h-full w-full mx-auto px-[clamp(2rem,5vw,5rem)] py-[clamp(2rem,4vw,4rem)] gap-5 md:gap-10">
      {error && <Error errorMessage="Failed to get Data" />}
      {loading && <Loading />}
      {!loading && !error && (
        <>
          <div className="flex md:gap-2 uppercase max-md:self-center lg:pl-5 font-barlowCondensed tracking-[2.7px] md:text-left text-lg md:text-xl lg:text-head5">
            <p className="opacity-25 font-bold w-8">01</p>
            <h5>Pick your destination</h5>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row items-center justify-around">
            <div className="max-w-[200px] md:max-w-xs lg:max-w-full">
              <img src={currentDestinationImage} alt={currentDestinationName} />
            </div>
            <div className="max-w-xl lg:max-w-md text-center lg:text-left flex flex-col gap-5">
              <div className="flex items-center justify-center lg:justify-normal gap-5 md:gap-10">
                {names?.map((item, index) => (
                  <button
                    className={twMerge(
                      'cursor-pointer pb-3 border-transparent hover:border-white hover:border-opacity-40 border-b-2 font-barlowCondensed tracking-[2.7px] text-xs min-[320px]:text-base',
                      index === currentDestination && 'border-white hover:border-opacity-100'
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
                  {currentDestinationName}
                </h2>
                <p className="text-secondary leading-6 md:leading-7 lg:leading-8 lg:text-lg">
                  {currentDestinationDescription}
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center lg:justify-normal gap-5 md:gap-20">
                <div>
                  <p className="text-secondary">AVG. DISTANCE</p>
                  <p className="font-bellefair text-head5">{currentDestinationDistance}</p>
                </div>
                <div>
                  <p className="text-secondary">EST. TRAVEL TIME</p>
                  <p className="font-bellefair text-head5">{currentDestinationTravelTime}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Destinations;
