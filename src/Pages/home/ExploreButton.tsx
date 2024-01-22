import { Link } from 'react-router-dom';

const ExploreButton = () => {
  return (
    <Link to="/destination">
      <div className="flex justify-center items-center">
        <button className="relative group">
          <span className="bg-white text-[#0B0D17] relative text-lg md:text-head4 flex items-center justify-center z-40 font-bellefair tracking-[2px] text-center w-36 h-36 md:w-60 md:h-60 lg:w-64 lg:h-64 p-10 rounded-full">
            EXPLORE
          </span>
          <span className="w-full h-full absolute z-30 top-0 left-0 transition-all duration-300 group-hover:scale-150 group-hover:opacity-20 bg-white rounded-full"></span>
        </button>
      </div>
    </Link>
  );
};

export default ExploreButton;
