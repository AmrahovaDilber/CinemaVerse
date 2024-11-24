import {
  IoSearch,
  IoBookmarkOutline,
  IoPersonSharp,
} from "react-icons/io5";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

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
        <Dropdown></Dropdown>

          <Link to="/watchlist" className="flex items-center gap-1 hover:text-[#e8ab29]">
            <IoBookmarkOutline className="text-lg" />
            <p>WatchList</p>
          </Link>
          
          <Link to='/signup' className="flex items-center gap-1 hover:text-[#e8ab29]">
            <IoPersonSharp className="text-lg" />
            <p>Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
