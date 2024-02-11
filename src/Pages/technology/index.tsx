import { useEffect, useState } from 'react';
import useStore from '../../store/UseStore';
import useLoading from '../../components/shared/hooks/UseLoading';
import useError from '../../components/shared/hooks/UseError';
import { technologyImages, technologyLandImages } from '../../components/shared/consts';
import Loading from '../../components/shared/Loading';
import Error from '../../components/shared/Error';
import { twJoin } from 'tailwind-merge';
import useMediaQuery from '../../components/shared/hooks/UseMediaQuery';

const Technology = () => {
  const { data, fetch } = useStore((state) => state);
  const { technology } = data;
  const { loading, showLoading, hideLoading } = useLoading();
  const { error, showError } = useError();
  const [currentTech, setCurrentTech] = useState(0);
  const isAboveTablet = useMediaQuery('(min-width: 1024px)');

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
      setCurrentTech((prevTech) => (prevTech + 1) % technologyImages.length);
    }, 7500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const currentTechName = technology?.[currentTech].name;
  const currentTechDescription = technology?.[currentTech].description;
  const currentTechImage = isAboveTablet ? technologyImages[currentTech] : technologyLandImages[currentTech];

  return (
    <div className="text-white flex flex-col flex-1 h-full w-full lg:pl-[clamp(3rem,5vw,5rem)] py-[clamp(2rem,3vw,3rem)] gap-5 md:gap-10">
      {loading && <Loading />}
      {error && <Error errorMessage="Failed to get data" />}
      {!loading && !error && (
        <>
          <div className="flex max-[768px]:self-center md:ml-10 lg:ml-0 md:gap-2 mb-4 md:mb-8 lg:mb-16 uppercase font-barlowCondensed tracking-[2.7px] md:text-left text-lg md:text-xl lg:text-head5">
            <p className="opacity-25 font-bold w-8">03</p>
            <h5>Space Launch 101</h5>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-10 justify-between items-center">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
              <div className="flex flex-row lg:flex-col justify-center font-bellefair gap-5">
                {technologyImages.map((_, index) => (
                  <button
                    className={twJoin(
                      'rounded-full w-8 h-8 p-8 lg:w-10 lg:h-10 lg:p-10 flex justify-center items-center border border-opacity-25 text-head5 lg:text-head4 font-bold',
                      index === currentTech && ' text-[#0B0D17] bg-white'
                    )}
                    key={index}
                    onClick={() => setCurrentTech(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="max-w-xl text-center px-10 lg:px-0 lg:text-left">
                <h5 className="uppercase opacity-50 font-bellefair">The terminology...</h5>
                <h2 className="uppercase text-head5 md:text-[40px] lg:text-head3 font-bellefair">{currentTechName}</h2>
                <p className="text-secondary font-barlowCondensed md:leading-loose tracking-widest lg:text-xl">
                  {currentTechDescription}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-fit">
              <img className="w-full object-cover" src={currentTechImage} alt={currentTechName} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Technology;
