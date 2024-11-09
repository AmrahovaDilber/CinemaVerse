import { useEffect, useState } from "react";
import { castType } from "../types/type";
import CastItem from "./CastItem";
import Title from "./Title";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CastList: React.FC<{ slug: number }> = ({ slug }) => {
  const [castItems, setCastItems] = useState<castType[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchCastItems = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${slug}/credits?api_key=f21a6bf3bfe42bde02aa229e67732bb8`
        );
        const data = await response.json();

        if (Array.isArray(data.cast)) {
          setCastItems(data.cast);
        } else {
          console.error("Cast data is not an array", data);
          setCastItems([]);
        }
      } catch (error) {
        console.error("Error fetching cast data:", error);
      }
    };

    fetchCastItems();
  }, [slug]);

  function handlePrev() {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 6));
  }

  function handleNext() {
    setCurrentIndex((prevIndex) => Math.min(castItems.length - 6, prevIndex + 6));
  }

  return (
    <div className="w-full py-[100px] max-w-[1200px] mx-auto relative">
      <div className="absolute left-0 top-[55%] z-20 text-[30px] text-[#fff] flex justify-between items-center w-[1200px]">
        <div
          onClick={handlePrev}
          className="border w-[40px] h-[54px] border-[#fff] text-[28px] hover:text-[#e8ab29] flex justify-center items-center cursor-pointer"
        >
          <FaChevronLeft />
        </div>

        <div
          onClick={handleNext}
          className="border w-[40px] h-[54px] border-[#fff] text-[28px] hover:text-[#e8ab29] flex justify-center items-center cursor-pointer"
        >
          <FaChevronRight />
        </div>
      </div>

      <Title>Cast of the film</Title>
      <div className="grid grid-cols-6 gap-4">
        {castItems.slice(currentIndex, currentIndex + 6).map((castItem) => (
          <CastItem key={castItem.cast_id} castItem={castItem} />
        ))}
      </div>
    </div>
  );
};

export default CastList;
