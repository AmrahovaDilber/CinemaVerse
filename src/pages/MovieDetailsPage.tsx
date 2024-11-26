import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import CastList from "../components/CastList";
import { useEffect, useState } from "react";
import { movieDetailType } from "../types/type";
import SimilarMovies from "../components/SimilarMovies";
import ReviewDetails from "../components/ReviewDetails";

const MovieDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [movieDetails, setMovieDetails] = useState<movieDetailType[]>([]);

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

  const movieId = slug ? Number(slug) : NaN;

  if (isNaN(movieId)) {
    return <div>Invalid movie ID</div>;
  }

  return (
    <div className="w-full h-full">
      <MovieDetails movieDetails={movieDetails} slug={movieId} />
      <CastList movieDetails={movieDetails} slug={movieId} />
      <SimilarMovies movieDetails={movieDetails}></SimilarMovies>
      <ReviewDetails movieDetails={movieDetails}></ReviewDetails>
    </div>
  );
};

export default MovieDetailsPage;
