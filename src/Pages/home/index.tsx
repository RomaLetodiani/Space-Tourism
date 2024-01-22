import ExploreButton from './ExploreButton';

const Home = () => {
  return (
    <div className="max-w-[1440px] h-full mx-auto w-full flex flex-col lg:flex-row justify-between items-center px-[clamp(3rem,5vw,10rem)] py-[clamp(2rem,5vw,10rem)] gap-5 md:gap-20 text-white">
      <div className="max-w-md text-center lg:text-left">
        <h5 className="font-barlowCondensed tracking-[1.72px] text-base lg:text-xl ">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="font-bellefair text-[80px] md:text-[135px] lg:text-head1 leading-normal">
          SPACE
        </h1>
        <p className="font-barlow text-base lg:text-lg font-normal leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <ExploreButton />
    </div>
  );
};

export default Home;
