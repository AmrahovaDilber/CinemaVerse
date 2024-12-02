import Hero from "../components/Hero";
import Popular from "../components/Popular";
import TopRatedMovies from "../components/TopRatedMovies";
import Trending from "../components/Trending";

const Home: React.FC = () => {
  return (
    <div>
      <Hero></Hero>
      <Trending></Trending>
      <Popular></Popular>
      <TopRatedMovies></TopRatedMovies>
    </div>
  );
};

export default Home;
