import { useEffect, useState } from "react";
import Person from "../components/Person";
import { useParams } from "react-router-dom";
import { personType } from "../types/type";

const PersonPage: React.FC = () => {
    const{slug}=useParams<string>()
    const [personInfo, setPersonInfo] = useState<personType[]>([]);
    const personId=slug?Number(slug):isNaN

  useEffect(() => {
    const fetchPersonData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${personId}?api_key=f21a6bf3bfe42bde02aa229e67732bb8`
      );
      const data = await response.json();
      setPersonInfo(data);
      console.log(data);
    };
    fetchPersonData();
  }, []);

  return (
    <div className="w-full h-full bg-gray-100">
      <div className="w-[1200px] mx-auto flex flex-col py-[50px]">
        <Person personInfo={personInfo}></Person>
      </div>
    </div>
  );
};
export default PersonPage;
