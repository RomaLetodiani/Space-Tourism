import { useEffect, useState } from 'react';
import useStore from '../../store/UseStore';
import useLoading from '../../components/shared/hooks/UseLoading';
import useError from '../../components/shared/hooks/UseError';
import { crewImages } from '../../components/shared/consts';
import Error from '../../components/shared/Error';
import Loading from '../../components/shared/Loading';
import { twMerge } from 'tailwind-merge';

const Crew = () => {
  const { data, fetch } = useStore((state) => state);
  const { crew } = data;
  const [currentCrew, setCurrentCrew] = useState(0);
  const { loading, showLoading, hideLoading } = useLoading();
  const { error, showError } = useError();

  const onClick = (index: number) => {
    setCurrentCrew(index);
  };

  useEffect(() => {
    showLoading(); // Show loading state
    fetch()
      .then(() => {
        hideLoading(); // Hide loading state
      })
      .catch(() => {
        hideLoading(); // Hide loading state
        showError(); // Set error state on failed fetch
      }); // Set error state on failed fetch

    const intervalId = setInterval(() => {
      setCurrentCrew((prevCrew) => (prevCrew + 1) % crewImages.length);
    }, 7500);

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, []);

  const currentCrewName = crew?.[currentCrew].name.toUpperCase();
  const currentCrewRole = crew?.[currentCrew].role.toUpperCase();
  const currentCrewBio = crew?.[currentCrew].bio;
  const currentCrewImage = crewImages[currentCrew];

  return (
    <div className="text-white max-w-[1440px] flex-1 flex flex-col-reverse mt-10 md:flex-col lg:flex-row gap-5 md:justify-between lg:gap-10 h-full w-full mx-auto px-[clamp(3rem,5vw,5rem)] pt-[clamp(2rem,3vw,3rem)]">
      {error && <Error errorMessage="Failed to get Data" />}
      {loading && <Loading />}
      {!loading && !error && (
        <>
          <div className="h-full lg:flex-[3] flex flex-col lg:gap-24">
            <div className="flex md:gap-2 max-[767px]:absolute max-[767px]:top-[120px] md:mb-16 lg:mb-0 uppercase max-md:self-center font-barlowCondensed tracking-[2.7px] md:text-left text-lg md:text-xl lg:text-head5">
              <p className="opacity-25 font-bold w-8">02</p>
              <h5>Meet your crew</h5>
            </div>
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <div className="max-w-2xl text-center lg:text-left mx-auto lg:m-0">
                <h4 className="md:text-head5 opacity-50 font-bellefair">{currentCrewRole}</h4>
                <h3 className="text-head5 md:text-[40px] my-5 lg:text-5xl font-bellefair">{currentCrewName}</h3>
                <p className="text-secondary lg:min-h-52 lg:max-w-md font-barlowCondensed md:leading-loose tracking-wider lg:text-xl">
                  {currentCrewBio}
                </p>
              </div>
              <div className="flex gap-5 pb-5">
                {crewImages.map((_, index: number) => (
                  <button
                    type="button"
                    className={twMerge(
                      'w-4 h-4 bg-white opacity-20 hover:opacity-50 rounded-full',
                      index === currentCrew && 'opacity-100 hover:opacity-100'
                    )}
                    key={index}
                    onClick={() => onClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bottom-0 flex-[2] max-h-[572px] lg:max-h-full border-b border-[#979797] md:border-b-0">
            <img
              className="absolute w-full h-full object-contain object-bottom bottom-0"
              src={currentCrewImage}
              alt={currentCrewName}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Crew;
