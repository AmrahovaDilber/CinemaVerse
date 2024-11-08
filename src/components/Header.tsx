import { IoSearch } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
const Header: React.FC = () => {
  return (
    <div className="w-[100%] bg-[#1a1a1a]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto py-5 text-[#fff]">
        <figure>
          <img src="" alt="logo"></img>
        </figure>
        <div className="flex gap-[10px] w-[550px] items-center border bg-[#fff] rounded-md px-3 py-1">
          <input
            className="flex-1 bg-transparent  outline-none text-black"
            type="text"
            placeholder="Search..."
          ></input>
          <div className="">
            <IoSearch className="text-[18px] text-black" />
          </div>
        </div>
        <div className="flex gap-[40px]">
          <div>
            <p>WatchList</p>
          </div>
          <div className="flex items-center gap-[5px]">
            <IoPersonSharp />
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
