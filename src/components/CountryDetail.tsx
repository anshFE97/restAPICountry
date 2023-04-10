import Flag from "./Flag";
import Detail from "./Detail";

import { BsArrowLeft } from "react-icons/bs";

interface CountryDetailProps {
  detailed: string[] | any
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;

  
}

const CountryDetail: React.FC<CountryDetailProps> = ({detailed, setToggle}) => {
  return (
    <div className="flex flex-col gap-4 mt-2 md:p-1 p-10">
      <div 
      onClick={() => setToggle(false)}
      className="flex sm:ml-6 md:m-0 font-medium gap-2 bg-[#2B3945] rounded-md mb-2 w-[120px] py-2 px-2 items-center justify-center cursor-pointer hover:opacity-70">
        <BsArrowLeft />
        <button>Back</button>
      </div>
      <div className="flex gap-4 justify-between w-[100%] md:flex-row flex-col sm:items-center">
        <div className="flex-1 w-[100%]">
          <Flag imageSrc={detailed[0]?.flags?.svg} />
        </div>
        <div className="flex-1 w-[100%] justify-center">
          <Detail country={detailed} />
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
