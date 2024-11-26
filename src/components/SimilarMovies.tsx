import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import { fetchSimilarMovies } from "../../api";
import MovieCard from "./MovieCard";
import { movieDetailType } from "../types/type";

const SimilarMovies: React.FC<movieDetailType> = ({ movieDetails }) => {
  const [allSimilarMovies, setAllSimilarMovies] = useState([]);

  useEffect(() => {
    const similarMovies = async () => {
      const data = await fetchSimilarMovies(movieDetails.id);
      setAllSimilarMovies(data);
    };
    similarMovies();
  }, [movieDetails.id]);

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto w-full px-4 relative">
      <p className="text-[#e8ab29] text-[32px] sm:text-[36px] md:text-[40px] font-bold uppercase tracking-wider mb-8 sm:mb-10 lg:mb-12">
        Similar Movies
      </p>
      <div className="w-full max-w-[1200px] mx-auto">
        <Swiper
          modules={[Navigation]} 
          slidesPerView={5}
          navigation
          centeredSlides={true}
        
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 10 },
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 },
        
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 25 },
          }}
        >
          {allSimilarMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarMovies;
