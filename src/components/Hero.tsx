import bg from "../assets/images/bg-image.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <figure className="absolute inset-0 w-full h-full">
        <img src={bg} alt="background" className="w-full h-full object-cover" />
      </figure>

      <div className="absolute inset-0 bg-[#1a1a1a] opacity-30"></div>

      <div className="max-w-[1200px] mx-auto">
        <div className="relative z-10  flex flex-col tracking-wide h-full w-[500px] mt-[200px]">
          <h1 className="text-4xl tracking-wide mb-4 md:text-6xl font-bold  text-white  drop-shadow-md">
            Welcome to Our Movie Website
          </h1>
          <p className="mt-4 mb-3 text-lg md:text-xl text-gray-300  ">
            Discover a world of movies at your fingertips. Dive into our
            collection and find your next favorite!
          </p>
          <button className="w-[150px] rounded-xl py-2  text-[#fff] mt-5 cursor-pointer font-medium  border-none text-[18px] border bg-[#e8ab29]">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
