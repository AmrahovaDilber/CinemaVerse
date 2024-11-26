import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { movieType } from "../types/type";
import { fetchTrendingMovies, fetchTrendingTvShows } from "../../api";

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<movieType[]>([]);
  const [tvShows, setTvShows] = useState<movieType[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("Movie");

  useEffect(() => {
    const fetchTrending = async () => {
      const trendingmovies = await fetchTrendingMovies();
      setMovies(trendingmovies);
    };
    fetchTrending();
  }, []);

  useEffect(() => {
    const fetchTvShows = async () => {
      const trendingTvShows = await fetchTrendingTvShows();
      setTvShows(trendingTvShows);
    };
    fetchTvShows();
  }, []);

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 5);
    }
  }

  function handleNext() {
    const list = activeTab === "Movie" ? movies : tvShows;
    if (currentIndex + 5 < list.length) {
      setCurrentIndex(currentIndex + 5);
    }
  }

  const listToDisplay = activeTab === "Movie" ? movies : tvShows;

  return (
    <div className="py-[80px]">
     <div className="flex items-center gap-6 max-w-[1200px] mx-auto mb-12   ">
  <p className="text-[#e8ab29] text-[40px] font-bold uppercase tracking-wider shadow-lg drop-shadow-md">
    Trending
  </p>
  <div className="flex items-center gap-4 ml-auto">
    <button
      className={`text-lg rounded-full px-6 py-2 font-medium transition-colors duration-300 ${
        activeTab === "Movie"
          ? "bg-[#e8ab29] text-white shadow-md hover:bg-[#d4971c]"
          : "bg-slate-700 text-gray-200 hover:bg-gray-600"
      }`}
      onClick={() => setActiveTab("Movie")}
    >
      Movie
    </button>
    <button
      className={`text-lg rounded-full px-6 py-2 font-medium transition-colors duration-300 ${
        activeTab === "TvShow"
          ? "bg-[#e8ab29] text-white shadow-md hover:bg-[#d4971c]"
          : "bg-slate-700 text-gray-200 hover:bg-gray-600"
      }`}
      onClick={() => setActiveTab("TvShow")}
    >
      TV Show
    </button>
  </div>
</div>


      <div className="flex flex-col max-w-[1200px] mx-auto w-full relative">
        <div className="grid grid-cols-5 gap-[20px]">
          {listToDisplay
            .slice(currentIndex, currentIndex + 5)
            .map((item: movieType) => (
              <MovieCard key={item.id} movie={item} />
            ))}
        </div>
        <div className="absolute left-0 top-[35%] text-[30px] text-[#fff] flex justify-between items-center w-[1200px]">
          <div
            onClick={handlePrev}
            className="border w-[40px] h-[54px] border-[#fff] text-[28px] hover:text-[#e8ab29] flex justify-center items-center cursor-pointer"
          >
            <FaChevronLeft />
          </div>
          <div
            onClick={handleNext}
            className="border w-[40px] h-[54px] border-[#fff] text-[28px] hover:text-[#e8ab29] flex justify-center items-center cursor-pointer"
          >
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
