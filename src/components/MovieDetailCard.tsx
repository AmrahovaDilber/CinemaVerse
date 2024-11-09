
// components/MovieDetailCard.tsx

import { FaStar, FaUser, FaHeart, FaRegCalendarAlt, } from "react-icons/fa";
import { movieDetailType } from "../types/type";

const MovieDetailCard: React.FC<{ moviedetails: movieDetailType }> = ({ moviedetails }) => {
  // Format release date

  // Format runtime

  // Format large numbers
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className=" w-full ">
      <div className=" mx-auto bg-[#1a1a1a]  shadow-2xl overflow-hidden">
        {/* Hero Section with Backdrop */}
        <div 
          className="w-full h-[400px] relative bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${moviedetails.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 px-6 -mt-32 relative z-10">
          {/* Poster */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img
              src={`https://image.tmdb.org/t/p/w500${moviedetails.poster_path}`}
              alt={moviedetails.original_title}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-2/3 lg:w-3/4 text-white space-y-6">
            {/* Title and Tagline */}
            <div>
              <h1 className="text-4xl font-bold mb-2">{moviedetails.original_title}</h1>
              
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                <FaStar className="text-yellow-500" />
                <span>{moviedetails.vote_average.toFixed(1)}</span>
                <span className="text-gray-400">({formatNumber(moviedetails.vote_count)} votes)</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                <FaRegCalendarAlt />
                <span>{new Date(moviedetails.release_date).getFullYear()}</span>
              </div>
             
            </div>

            {/* Genres */}
        

            {/* Overview */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{moviedetails.overview}</p>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-400 mb-1">Popularity</p>
                <p className="text-xl font-semibold">{moviedetails.popularity.toFixed(1)}</p>
              </div>
          
             
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-[#e8ab29] hover:bg-[#bc8b22] transition-colors duration-300 py-2 px-6 rounded-lg font-medium">
                <FaHeart />
                Add to Watchlist
              </button>
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 py-2 px-6 rounded-lg font-medium">
                <FaUser />
                Rate Movie
              </button>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default MovieDetailCard;