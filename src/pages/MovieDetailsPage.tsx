import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import CastList from "../components/CastList";

const MovieDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const movieId = slug ? Number(slug) : NaN;
  
  if (isNaN(movieId)) {
    return <div>Invalid movie ID</div>; 
  }

  return (
    <div>
      <MovieDetails slug={movieId} />
      <CastList slug={movieId} />
    </div>
  );
};

export default MovieDetailsPage;
