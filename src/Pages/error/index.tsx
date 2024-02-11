import ExploreButton from '../home/ExploreButton';

const ErrorPage = () => {
  return (
    <div className="bg-home-desktop min-w-[300px] p-5 text-white bg-cover gap-20 flex flex-col justify-center items-center min-h-screen w-full">
      <div className="font-bellefair tracking-[5px]">
        <h2 className="text-head2 font-barlowCondensed">Sorry</h2>
        <h5 className="text-head3">We couldn't find that page</h5>
        <p className="text-head4">Try the Button down below</p>
      </div>
      <ExploreButton />
    </div>
  );
};

export default ErrorPage;
