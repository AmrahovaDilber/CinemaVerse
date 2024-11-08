import { FaStar } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { movieType } from "../types/type";

type MovieCardProps = {
  movie: movieType;
};
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative w-full  rounded-lg shadow-lg overflow-hidden bg-[#1a1a1a]">
      <figure className="relative h-[300px] overflow-hidden rounded-t-lg">
        <a href="#" className="inset-0 absolute "></a>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie Poster"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer">
          <CiBookmarkPlus className="text-white text-[26px]" />
        </div>
      </figure>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <FaStar className="text-yellow-500" />
          <span className="text-white text-[16px] font-semibold">
            {movie.vote_average}
          </span>
        </div>

        <p className="line-clamp-2 text-white text-[18px] font-semibold leading-tight mb-2">
          {movie.original_title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
