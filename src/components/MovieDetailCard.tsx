import { FaStar } from "react-icons/fa";
import { movieDetailType } from "../types/type";

const MovieDetailCard: React.FC<{ moviedetails: movieDetailType }> = ({
  moviedetails,
}) => {

  return (
    <div className=" w-full ">
      <div className=" mx-auto bg-[#1a1a1a]  shadow-2xl overflow-hidden">
        <div
          className="w-full h-[350px] relative bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${moviedetails.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 px-6 -mt-32 relative z-10">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img
              src={`https://image.tmdb.org/t/p/w500${moviedetails.poster_path}`}
              alt={moviedetails.original_title}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/3 lg:w-3/4 sm:mt-20   text-white">
          <div>
            <h1 className="text-3xl font-bold mb-2">{moviedetails.original_title}</h1>
            {moviedetails.tagline && (
              <p className="italic text-gray-400 mb-4">"{moviedetails.tagline}"</p>
            )}

            {/* Rating */}
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="font-semibold text-lg">{moviedetails.vote_average} / 10</span>
              <span className="text-gray-400 ml-2">({moviedetails.vote_count} votes)</span>
            </div>

            {/* Release Date */}
            {moviedetails.release_date && (
              <p className="text-gray-400 mb-2">
                Release Date: {new Date(moviedetails.release_date).toLocaleDateString()}
              </p>
            )}

            {/* Genres */}
            {moviedetails.genres && (
              <div className="flex flex-wrap gap-2 mb-4">
                {moviedetails.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* Overview */}
              <p className="text-gray-300 mb-6">{moviedetails.overview}</p>
           
          </div>

          {/* Production Companies */}
          {moviedetails.production_companies &&
            moviedetails.production_companies.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Production Companies:</h2>
                <div className="flex flex-wrap gap-4">
                  {moviedetails.production_companies.map((company) => (
                    <div key={company.id} className="flex items-center gap-2">
                      {company.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                          alt={`${company.name} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      )}
                      <span>{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetailCard;
