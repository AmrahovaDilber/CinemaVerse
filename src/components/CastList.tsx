import { useEffect, useState } from "react";
import { castType, movieDetailType } from "../types/type";
import CastItem from "./CastItem";

import { Link } from "react-router-dom";
interface CastListProps {
    slug: number;
    movieDetails: movieDetailType;
  }
  
const CastList: React.FC<CastListProps> = ({ slug }) => {
  const [castItems, setCastItems] = useState<castType[]>([]);

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

  return (
    <div className="w-full py-[100px] max-w-[1200px] mx-auto relative">
      <div className="flex justify-between items-center mb-12">
        <p className="text-[#e8ab29] text-[40px] font-semibold ">
          Cast Of The Film
        </p>
        <Link to={`/castcrew/${slug}`} className="text-[#e8ab29] text-[20px] font-semibold">
          Full Cast & Crew
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {castItems.slice(0, 6).map((castItem) => (
          <CastItem key={castItem.cast_id} castItem={castItem} />
        ))}
      </div>
    </div>
  );
};

export default CastList;
