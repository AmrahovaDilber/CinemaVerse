import { useEffect, useState } from "react";
import Title from "./Title";
import { movieType } from "../types/type";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState<movieType[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=f21a6bf3bfe42bde02aa229e67732bb8`
      );
      const data = await response.json();
      console.log(data);
      setPopularMovies(data.results);
    };
    fetchMovies();
  }, []);

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 5);
  }

  function handleNext() {
    if (currentIndex + 5 < popularMovies.length - 1)
      setCurrentIndex(currentIndex + 5);
  }

  return (
    <div>
      <Title>Popular</Title>
      <div className="flex flex-col max-w-[1200px] mx-auto w-full pb-[100px] relative">
        <div className="grid grid-cols-5 gap-[20px]">
          {popularMovies
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

export default Popular;
