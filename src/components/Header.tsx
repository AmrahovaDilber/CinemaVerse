import {
  IoSearch,
  IoTvOutline,
  IoFilmOutline,
  IoBookmarkOutline,
  IoPersonSharp,
} from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto py-5 text-[#fff]">
        <figure>
          <img src="" alt="logo" className="h-8" />
        </figure>

        {/* Search bar */}
        <div className="flex gap-2 w-[550px] items-center border bg-[#fff] rounded-md px-3 py-1">
          <input
            className="flex-1 bg-transparent outline-none text-black"
            type="text"
            placeholder="Search..."
          />
          <IoSearch className="text-[18px] text-black" />
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col relative group">
            <div className="flex items-center gap-1 hover:text-[#e8ab29]">
              <IoTvOutline className="text-lg" />
              <p>TV Shows</p>
            </div>

            <div className="bg-white hidden group-hover:block text-[#1a1a1a] absolute p-3 z-20 top-[25px] w-[140px] left-0 shadow-md rounded-lg transition-opacity duration-300">
              <p className="border-b pb-2 mb-2 font-medium text-[16px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer">
                Popular
              </p>
              <p className="border-b pb-2 mb-2 font-medium text-[16px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer">
                Airing Today
              </p>
              <p className="border-b pb-2 mb-2 font-medium text-[16px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer">
              On TV
              </p>
              <p className="font-medium text-[16px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer">
                Top Rated
              </p>
            </div>
          </div>

          <div className="flex flex-col relative group">
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#e8ab29] group-hover:text-[#ffc107] transition-colors duration-200">
              <IoFilmOutline className="text-lg" />
              <p className="font-semibold text-lg">Movies</p>
            </div>

            <div className="bg-white hidden group-hover:block text-[#1a1a1a] absolute p-3 z-20 top-[25px] w-[140px] left-0 shadow-md rounded-lg transition-opacity duration-300">
              <p className="border-b pb-2 mb-2 font-medium text-[16px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer">
                Popular
              </p>
              <p className="border-b pb-2 mb-2 font-medium text-[16px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer">
                Now Playing
              </p>
              <p className="border-b pb-2 mb-2 font-medium text-[16px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer">
                Upcoming
              </p>
              <p className="font-medium text-[16px] hover:text-[#bc8b22] transition-colors duration-200 cursor-pointer">
                Top Rated
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 hover:text-[#e8ab29]">
            <IoBookmarkOutline className="text-lg" />
            <p>WatchList</p>
          </div>
          <div className="flex items-center gap-1 hover:text-[#e8ab29]">
            <IoPersonSharp className="text-lg" />
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
