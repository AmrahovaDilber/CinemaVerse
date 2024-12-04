import { useEffect, useState } from "react";
import { fetchPopularPeople } from "../../api";
import { Link } from "react-router-dom";

interface Person {
  id: number;
  name: string;
  profile_path: string | null;
}

const PersonCard: React.FC = () => {
  const [popularPeople, setPopularPeople] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const data = await fetchPopularPeople();
        setPopularPeople(data);
      } catch (err) {
        setError("Failed to fetch popular people.");
      }
    };
    fetchPopular();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col pt-[100px]">
      <div className="flex justify-between items-center mb-12">
        <p className="text-[#e8ab29] text-[40px] font-semibold ">
          Popular People
        </p>
        <Link
          to={`/popularpeople`}
          className="text-[#e8ab29] text-[20px] font-semibold"
        >
          See All
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-[20px]">
        {popularPeople.slice(0, 6).map((person) => (
          <Link to={`/person/${person.id}`}
            key={person.id}
            className="flex flex-col items-center text-center"
          >
            <figure className=" scale-110 transform transition-all rounded-full overflow-hidden w-[150px] h-[150px] shadow-lg hover:shadow-xl  duration-300">
              <img
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                    : "/placeholder-profile.png" 
                }
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <p className="mt-4 font-semibold text-[#fff]">{person.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonCard;
