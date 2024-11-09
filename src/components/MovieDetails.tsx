import { movieDetailType } from "../types/type";
import MovieDetailCard from "./MovieDetailCard";

const MovieDetails: React.FC<{ slug: number ,movieDetails:movieDetailType}> = ({ slug,movieDetails }) => {
 
  return (
    <div>
      {movieDetails ? (
        <MovieDetailCard moviedetails={movieDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
