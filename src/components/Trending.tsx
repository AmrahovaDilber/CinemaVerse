import MovieCard from "./MovieCard";
import Title from "./Title";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
const Trending = () => {
  return (
    <div className="py-[80px]">
      <Title>Trending</Title>
      <div className="flex flex-col max-w-[1200px] mx-auto w-full  relative">
        <div className="grid grid-cols-5 gap-[20px]">
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
        </div>
        <div className="absolute left-0 top-[35%] text-[30px] text-[#fff] flex justify-between items-center w-[1200px]">
          <div className="border w-[40px] h-[54px] border-[#fff] text-[28px] hover:text-[#e8ab29] flex justify-center items-center cursor-pointer">
            <FaChevronLeft />
          </div>

          <div className="border w-[40px] h-[54px] border-[#fff] text-[28px] hover:text-[#e8ab29] flex justify-center items-center cursor-pointer">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trending;
