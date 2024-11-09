import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Trending from "../components/Trending";

const Home: React.FC = () => {
  return (
    <div>
      <Hero></Hero>
      <Trending></Trending>
      <Popular></Popular>
    </div>
  );
};

export default Home;
