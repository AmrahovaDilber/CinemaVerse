import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Title from "./Title";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { movieType } from "../types/type";

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<movieType[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=f21a6bf3bfe42bde02aa229e67732bb8`
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 5);
    }
  }

  function handleNext() {
    if (currentIndex + 5 < movies.length) {
      setCurrentIndex(currentIndex + 5);
    }
  }

  return (
    <div className="py-[80px]">
      <Title>Trending</Title>
      <div className="flex flex-col max-w-[1200px] mx-auto w-full relative">
        <div className="grid grid-cols-5 gap-[20px]">
          {movies
            .slice(currentIndex, currentIndex + 5)
            .map((movie: movieType) => (
              <MovieCard movie={movie} />
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
