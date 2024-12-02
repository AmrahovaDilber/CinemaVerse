import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";

import MovieCard from "./MovieCard";
import { fetchTopRatedMovies } from "../../api";
import { movieType } from "../types/type";

const TopRatedMovies: React.FC = () => {
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const topRatedMovies = await fetchTopRatedMovies();
      setMovies(topRatedMovies);
    };
    fetchTrending();
  }, []);

  return (
    <div className="py-[80px]">
      <div className="flex items-center  max-w-[1200px] mx-auto mb-12 ">
        <p className="text-[#e8ab29] text-[40px] font-bold  tracking-wider shadow-lg drop-shadow-md">
          Top Rated
        </p>
      </div>

      <div className="flex flex-col max-w-[1200px] mx-auto w-full relative">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={5}
          className="w-full"
        >
          {movies?.map((item: movieType) => (
            <SwiperSlide key={item.id}>
              <MovieCard movie={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRatedMovies;
