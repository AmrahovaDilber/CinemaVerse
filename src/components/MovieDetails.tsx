import { useEffect, useState } from "react";
import MovieDetailCard from "./MovieDetailCard";

const MovieDetails: React.FC<{ slug: number }> = ({ slug }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${slug}?api_key=f21a6bf3bfe42bde02aa229e67732bb8`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (slug) {
      fetchMovieDetails();
    }
  }, [slug]);

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
